#!/usr/bin/env node

/**
 * Copy owner portal assets to shell for development
 * This solves the relative path issue in Module Federation
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('📦 Copying owner portal assets to shell...');

// Source and destination paths
const ownerPortalDist = path.join(__dirname, '../../owner-portal/apps/owner-portal-web/dist');
const shellAssetsDir = path.join(__dirname, '../assets');

// Create assets directory if it doesn't exist
if (!fs.existsSync(shellAssetsDir)) {
  fs.mkdirSync(shellAssetsDir, { recursive: true });
}

// Copy assets from owner portal dist to shell assets
try {
  if (fs.existsSync(ownerPortalDist)) {
    // Copy all files from owner portal dist to shell assets
    execSync(`cp -r ${ownerPortalDist}/* ${shellAssetsDir}/`, { stdio: 'inherit' });
    console.log('✅ Assets copied successfully');
  } else {
    console.log('⚠️  Owner portal dist not found, run "yarn workspace owner-portal-web preview" first');
  }
} catch (error) {
  console.error('❌ Failed to copy assets:', error.message);
}
