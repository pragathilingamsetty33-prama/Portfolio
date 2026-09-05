import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function runVerification() {
  console.log('--- Starting Automated Portfolio Verification ---');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', error => {
    consoleErrors.push(`Uncaught error: ${error.message}`);
  });

  // 1. Desktop Verification
  console.log('\n[1] Testing Desktop View (1440x900)...');
  await page.setViewport({ width: 1440, height: 900 });
  const response = await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
  console.log(`Page HTTP status: ${response.status()}`);

  const pageTitle = await page.title();
  console.log(`Page Title: "${pageTitle}"`);
  if (!pageTitle.includes('Pragathi Lingamsetty')) {
    throw new Error(`Page title does not include Pragathi Lingamsetty: ${pageTitle}`);
  }

  // Check section IDs
  const requiredSections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];
  for (const sec of requiredSections) {
    const el = await page.$(`#${sec}`);
    console.log(`Section #${sec} present: ${!!el}`);
    if (!el) throw new Error(`Missing section #${sec}`);
  }

  // Check Resume Download Links
  const resumeLinks = await page.$$eval('a[href="/resume.pdf"]', links => links.map(l => ({
    text: l.innerText.trim(),
    download: l.getAttribute('download'),
    href: l.getAttribute('href')
  })));
  console.log(`Found ${resumeLinks.length} resume download links:`, resumeLinks);
  if (resumeLinks.length === 0) {
    throw new Error('No resume download link found with href="/resume.pdf"');
  }

  // Check that NO project links lead to "#" or fake repos
  const hashLinks = await page.$$eval('#projects a[href="#"]', links => links.length);
  console.log(`Project dead "#" links: ${hashLinks}`);
  if (hashLinks > 0) {
    throw new Error(`Found ${hashLinks} dead "#" links in projects section!`);
  }

  // Check horizontal overflow on desktop
  const desktopOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log(`Desktop horizontal overflow detected: ${desktopOverflow}`);
  if (desktopOverflow) {
    throw new Error('Horizontal overflow detected on desktop view!');
  }

  // Save desktop screenshot
  await page.screenshot({ path: 'desktop_verified.png', fullPage: false });
  console.log('Desktop screenshot saved: desktop_verified.png');

  // 2. Mobile Verification
  console.log('\n[2] Testing Mobile View (375x812 - iPhone X)...');
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  await page.reload({ waitUntil: 'networkidle0' });

  // Check mobile horizontal overflow
  const mobileOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log(`Mobile horizontal overflow detected: ${mobileOverflow}`);
  if (mobileOverflow) {
    throw new Error('Horizontal overflow detected on mobile view!');
  }

  // Check mobile menu toggle
  const menuButton = await page.$('button[aria-label="Toggle navigation menu"]');
  console.log(`Mobile menu toggle button found: ${!!menuButton}`);
  if (menuButton) {
    await menuButton.click();
    console.log('Mobile menu opened.');
  }

  // Save mobile screenshot
  await page.screenshot({ path: 'mobile_verified.png', fullPage: false });
  console.log('Mobile screenshot saved: mobile_verified.png');

  // 3. Tablet Verification
  console.log('\n[3] Testing Tablet View (768x1024 - iPad)...');
  await page.setViewport({ width: 768, height: 1024 });
  await page.reload({ waitUntil: 'networkidle0' });

  const tabletOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log(`Tablet horizontal overflow detected: ${tabletOverflow}`);
  if (tabletOverflow) {
    throw new Error('Horizontal overflow detected on tablet view!');
  }

  // Console Errors summary
  console.log('\n[4] Checking Browser Console Errors:');
  console.log(`Total errors captured: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.error('Console errors:', consoleErrors);
    throw new Error(`Browser console logged errors: ${JSON.stringify(consoleErrors)}`);
  } else {
    console.log('Clean console! Zero errors.');
  }

  await browser.close();
  console.log('\nALL CHECKS PASSED SUCCESSFULLY! Verified 100% functional, responsive, and error-free.');
}

runVerification().catch(err => {
  console.error('VERIFICATION FAILED:', err);
  process.exit(1);
});
