import { registerApplication } from 'single-spa';
import { constructLayoutEngine, constructRoutes } from 'single-spa-layout';

export default function registerRoot() {
  const routerEl = document.querySelector('single-spa-router');
  const routes = constructRoutes(routerEl);
  const layoutEngine = constructLayoutEngine({ routes });

  // Finance via Module Federation
  registerApplication({
    name: '@lifenexus/finance',
    app: async () => {
      const container = await import('@lifenexus/finance');
      const getter = typeof container?.get === 'function' ? await container.get('./root') : null;
      const factory = typeof getter === 'function' ? getter : null;
      const mod = factory ? await factory() : container;
      return mod?.default ?? mod;
    },
    activeWhen: ['/finance'],
  });

  // Messages (single-spa lifecycles)
  registerApplication({
    name: '@lifenexus/messages',
    app: () => import('@lifenexus/messages'),
    activeWhen: ['/messages'],
  });

  // Media (Vue library entry exporting lifecycles)
  registerApplication({
    name: '@lifenexus/media',
    app: () => import('@lifenexus/media'),
    activeWhen: ['/media'],
  });

  layoutEngine.activate();
}

