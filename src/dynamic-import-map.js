/**
 * Dynamic Import Map Override
 * This script modifies the import map directly in the DOM
 */

(function() {
  'use strict';

  // Development server configurations
  const DEV_SERVERS = {
    '@owner-portal/web': 'http://localhost:4173/remoteEntry.js',
    '@crew/training-a': 'http://localhost:4200/main.single-spa.js',
    '@crew/training-b': 'http://localhost:4201/main.single-spa.js',
    '@maintenance/app': 'http://localhost:4202/main.js',
    // Add more as needed
  };

  function overrideImportMap() {
    // Only run in development
    if (window.location.hostname !== 'localhost') {
      console.log('🚀 Production mode - no overrides needed');
      return;
    }

    console.log('🔧 Applying dynamic import map overrides...');

    // Find the import map script tag
    const importMapScript = document.querySelector('script[type="importmap"]');
    if (!importMapScript) {
      console.warn('❌ No import map found');
      return;
    }

    try {
      // Parse the current import map
      const importMap = JSON.parse(importMapScript.textContent);
      
      // Apply overrides
      Object.entries(DEV_SERVERS).forEach(([moduleName, url]) => {
        if (importMap.imports[moduleName]) {
          console.log(`✅ Overriding ${moduleName}: ${importMap.imports[moduleName]} → ${url}`);
          importMap.imports[moduleName] = url;
        }
      });

      // Update the script content
      importMapScript.textContent = JSON.stringify(importMap, null, 2);
      console.log('🎉 Import map overrides applied!');
      
    } catch (error) {
      console.error('❌ Failed to override import map:', error);
    }
  }

  // Apply overrides with multiple timing strategies
  function applyOverrides() {
    // Try immediately
    overrideImportMap();
    
    // Also try when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', overrideImportMap);
    }
    
    // And try after a short delay as fallback
    setTimeout(overrideImportMap, 100);
  }
  
  applyOverrides();

})();
