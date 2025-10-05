#!/usr/bin/env node

/**
 * Build script to replace import map URLs based on environment
 */

const fs = require('fs');
const path = require('path');

const ENV = process.env.NODE_ENV || 'development';
const HTML_FILE = './index.html';

console.log(`🔧 Building for ${ENV} environment...`);

// Read the HTML file
let html = fs.readFileSync(HTML_FILE, 'utf8');

if (ENV === 'production') {
  // Replace dev URLs with production URLs
  html = html.replace(
    '"@owner-portal/web": "http://localhost:4173/remoteEntry.js"',
    '"@owner-portal/web": "/owner-portal-web/assets/remoteEntry.js"'
  );
  console.log('✅ Production URLs applied');
} else {
  // Ensure dev URLs are set
  html = html.replace(
    '"@owner-portal/web": "/owner-portal-web/assets/remoteEntry.js"',
    '"@owner-portal/web": "http://localhost:4173/remoteEntry.js"'
  );
  console.log('✅ Development URLs applied');
}

// Write the modified HTML
fs.writeFileSync(HTML_FILE, html);
console.log(`🎉 Build complete for ${ENV}!`);
