/**
 * Environment-based configuration for import maps
 * Automatically switches between dev and production URLs
 */

(function() {
  'use strict';

  // Environment detection
  const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  
  // Configuration based on environment
  const CONFIG = {
    development: {
      '@owner-portal/web': 'http://localhost:4173/remoteEntry.js',
      '@owner-portal/native': '/owner-portal-native/index.js', // Keep production for now
      '@crew/training': '/training-a/remoteEntry.js',
      '@maintenance/app': '/maintenance/remoteEntry.js',
      '@shared/notifications': '/parcels/notifications.js',
      '@shared/chat': '/parcels/chat.js'
    },
    production: {
      '@owner-portal/web': '/owner-portal-web/assets/remoteEntry.js',
      '@owner-portal/native': '/owner-portal-native/index.js',
      '@crew/training': '/training-a/remoteEntry.js',
      '@maintenance/app': '/maintenance/remoteEntry.js',
      '@shared/notifications': '/parcels/notifications.js',
      '@shared/chat': '/parcels/chat.js'
    }
  };

  function applyEnvironmentConfig() {
    const currentConfig = isDevelopment ? CONFIG.development : CONFIG.production;
    const environment = isDevelopment ? 'development' : 'production';
    
    console.log(`🌍 Environment: ${environment}`);
    console.log('🔧 Applying environment-based import map configuration...');

    // Find the import map script tag
    const importMapScript = document.querySelector('script[type="importmap"]');
    if (!importMapScript) {
      console.warn('❌ No import map found');
      return;
    }

    try {
      // Parse the current import map
      const importMap = JSON.parse(importMapScript.textContent);
      
      // Apply environment-specific configuration
      Object.entries(currentConfig).forEach(([moduleName, url]) => {
        if (importMap.imports[moduleName]) {
          const oldUrl = importMap.imports[moduleName];
          importMap.imports[moduleName] = url;
          console.log(`✅ ${moduleName}: ${oldUrl} → ${url}`);
        }
      });

      // Update the script content
      importMapScript.textContent = JSON.stringify(importMap, null, 2);
      console.log(`🎉 ${environment} configuration applied!`);
      
    } catch (error) {
      console.error('❌ Failed to apply environment configuration:', error);
    }
  }

  // Apply configuration immediately
  applyEnvironmentConfig();

})();
