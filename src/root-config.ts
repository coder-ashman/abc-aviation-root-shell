import { registerApplication, registerParcel } from 'single-spa';
import { constructLayoutEngine, constructRoutes } from 'single-spa-layout';

export default function registerRoot(): void {
  // Parse the layout from the HTML template
  const routes = constructRoutes(document.querySelector('single-spa-router'));
  const layoutEngine = constructLayoutEngine({ routes });

  // Register applications referenced in the import map.  Single‑spa will load them via import() calls.
  registerApplication({
    name: '@owner-portal/web',
    app: () => import('@owner-portal/web'),
    activeWhen: ['/'],
  });
  registerApplication({
    name: '@crew/training',
    app: () => import('@crew/training'),
    activeWhen: ['/training'],
  });
  registerApplication({
    name: '@maintenance/app',
    app: () => import('@maintenance/app'),
    activeWhen: ['/maintenance'],
  });

  // Register parcels.  Parcels do not have their own routing and render into a slot on every page.
  registerParcel({
    name: '@shared/notifications',
    loadParcel: () => import('@shared/notifications'),
    customProps: {},
  });
  registerParcel({
    name: '@shared/chat',
    loadParcel: () => import('@shared/chat'),
    customProps: {},
  });

  // Activate the layout engine after applications are registered
  layoutEngine.activate();
}