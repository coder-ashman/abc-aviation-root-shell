/**
 * Development overrides for import maps.
 * Automatically sets up overrides for local development servers.
 */

(function() {
  'use strict';

// Development server configurations
var DEV_SERVERS = {
  '@owner-portal/web': {
    url: 'http://localhost:4173/remoteEntry.js',
    name: 'Owner Portal',
    description: 'React + Vite + Module Federation'
  },
  // Add more microfrontends as they're developed
  // '@crew/training': {
  //   url: 'http://localhost:4200/remoteEntry.js',
  //   name: 'Training App',
  //   description: 'Angular + Webpack Module Federation'
  // },
  // '@maintenance/app': {
  //   url: 'http://localhost:4201/remoteEntry.js',
  //   name: 'Maintenance App',
  //   description: 'Vue + Vite + Module Federation'
  // }
};

function setupDevOverrides() {
  // Only run in development (localhost)
  if (window.location.hostname !== 'localhost') {
    console.log('🚀 Production mode - no dev overrides needed');
    return;
  }

  console.log('🔧 Setting up development overrides...');

  // Set up overrides for each microfrontend
  Object.entries(DEV_SERVERS).forEach(([moduleName, config]) => {
    try {
      // Try the import map overrides API first
      if (window.importMapOverrides && typeof window.importMapOverrides.addOverride === 'function') {
        window.importMapOverrides.addOverride(moduleName, config.url);
        console.log(`✅ Override set via API: ${moduleName} → ${config.url}`);
      } else {
        console.log(`⏳ API not ready, using localStorage for ${moduleName}`);
      }
      
      // Always set in localStorage as fallback
      const overrides = JSON.parse(localStorage.getItem('import-map-overrides') || '{}');
      overrides[moduleName] = config.url;
      localStorage.setItem('import-map-overrides', JSON.stringify(overrides));
      console.log(`💾 Override saved to localStorage: ${moduleName} → ${config.url}`);
      console.log(`   ${config.name} (${config.description})`);
    } catch (error) {
      console.warn(`❌ Failed to set override for ${moduleName}:`, error);
    }
  });

  console.log('🎉 Development overrides configured!');
  console.log('💡 Tip: Use the "Import Map Overrides" button to manually adjust overrides');
}

// Set up overrides immediately and also on DOM ready
setupDevOverrides();

// Also set up when DOM is ready as a fallback
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupDevOverrides);
}

})();
