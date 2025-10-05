#!/usr/bin/env node

/**
 * Prebuild script to modify index.html based on environment
 * Automatically switches import map URLs for dev vs production
 */

const fs = require('fs');
const path = require('path');

const ENV = process.argv[2] || 'development';
const HTML_FILE = './index.html';
const BACKUP_FILE = './index.html.backup';

console.log(`🔧 Prebuild: Configuring for ${ENV} environment...`);

// Create backup of original file
if (!fs.existsSync(BACKUP_FILE)) {
  fs.copyFileSync(HTML_FILE, BACKUP_FILE);
  console.log('💾 Created backup of original index.html');
}

// Read the HTML file
let html = fs.readFileSync(HTML_FILE, 'utf8');

// Configuration for different environments
const CONFIG = {
  development: {
    '@owner-portal/web': 'http://localhost:4173/remoteEntry.js',
    '@crew/training-a': 'http://localhost:4200/main.single-spa.js',  // Angular single-spa
    '@crew/training-b': 'http://localhost:4201/main.single-spa.js', // React single-spa
    '@maintenance/app': 'http://localhost:4202/main.js'  // Vue single-spa
  },
  production: {
    '@owner-portal/web': 'https://owner-portal.abc-aviation.com/remoteEntry.js',
    '@crew/training-a': 'https://training-a.abc-aviation.com/main.single-spa.js',  // Angular single-spa
    '@crew/training-b': 'https://training-b.abc-aviation.com/main.single-spa.js',  // React single-spa
    '@maintenance/app': 'https://maintenance.abc-aviation.com/main.js'  // Vue single-spa
  }
};

// Apply environment-specific configuration
const currentConfig = CONFIG[ENV];
if (!currentConfig) {
  console.error(`❌ Unknown environment: ${ENV}`);
  process.exit(1);
}

console.log(`📝 Applying ${ENV} configuration:`);

Object.entries(currentConfig).forEach(([moduleName, url]) => {
  // Find and replace the import map entry
  const regex = new RegExp(`"${moduleName}":\\s*"[^"]*"`, 'g');
  const replacement = `"${moduleName}": "${url}"`;
  
  if (html.match(regex)) {
    html = html.replace(regex, replacement);
    console.log(`  ✅ ${moduleName} → ${url}`);
  } else {
    console.warn(`  ⚠️  Module ${moduleName} not found in import map`);
  }
});

// Write the modified HTML
fs.writeFileSync(HTML_FILE, html);

// For development, test the real microfrontend pattern
if (ENV === 'development') {
  console.log('🌐 Testing real microfrontend pattern (remote loading)');
  console.log('📡 Owner portal assets will be loaded from http://localhost:4173');
  console.log('📡 Angular training app will be loaded from http://localhost:4200');
  console.log('📡 React training app will be loaded from http://localhost:4201');
  console.log('📡 Vue maintenance app will be loaded from http://localhost:4202');
  console.log('📚 Shared libraries available at /shared/domain-rules.js and /shared/ui.js');
  console.log('💡 This replicates the cloud deployment pattern');
}

console.log(`🎉 Prebuild complete for ${ENV}!`);
console.log(`💡 Tip: Run 'npm run restore' to revert to original index.html`);
