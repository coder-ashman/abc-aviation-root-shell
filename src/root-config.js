import { registerApplication, mountRootParcel } from 'single-spa';
import { constructLayoutEngine, constructRoutes } from 'single-spa-layout';

export default function registerRoot() {
  const routerElement = document.querySelector('single-spa-router');
  if (!routerElement) {
    throw new Error('single-spa-router element not found in DOM. Ensure the layout markup is present.');
  }

  const { pathname, search, hash } = window.location;
  if (pathname === '/training' || pathname === '/training/') {
    const target = '/training/a';
    const destination = `${target}${search}${hash}`;
    window.history.replaceState({}, '', destination);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  const routes = constructRoutes(routerElement);
  const layoutEngine = constructLayoutEngine({ routes });

  // Manually mount parcels since single-spa-layout isn't picking them up
  const asideSlot = document.getElementById('aside-slot');
  if (asideSlot) {
    // Mount notifications parcel
    import('@shared/notifications').then(notificationsModule => {
      mountRootParcel(notificationsModule, {
        domElement: asideSlot
      });
    }).catch(err => console.error('Failed to load notifications parcel:', err));

    // Mount chat parcel
    import('@shared/chat').then(chatModule => {
      mountRootParcel(chatModule, {
        domElement: asideSlot
      });
    }).catch(err => console.error('Failed to load chat parcel:', err));
  }

  // Register applications referenced in the import map.  Single‑spa will load them via import() calls.
  registerApplication({
    name: '@owner-portal/web',
    app: async () => {
      const container = await import('@owner-portal/web');

      if (typeof container?.init === 'function') {
        await container.init(globalThis.__federation_shared__ || {});
      }

      const getter = typeof container?.get === 'function' ? await container.get('./root') : null;
      const moduleFactory = typeof getter === 'function' ? getter : null;
      const module = moduleFactory ? await moduleFactory() : container;

      return module?.default ?? module;
    },
    activeWhen: ['/owner'],
  });
  registerApplication({
    name: '@crew/training-a',
    app: () => import('@crew/training-a'),
    activeWhen: ['/training/a'],
  });
  registerApplication({
    name: '@crew/training-b',
    app: () => import('@crew/training-b'),
    activeWhen: ['/training/b'],
  });
  registerApplication({
    name: '@maintenance/app',
    app: () => import('@maintenance/app'),
    activeWhen: ['/maintenance'],
  });

  // Activate the layout engine after applications are registered
  layoutEngine.activate();
}
