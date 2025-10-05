import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';

const App = { render() { return h('section', { style: 'padding:16px;border:1px solid #e5e7eb;border-radius:8px;background:#fff;' }, [
  h('h2', { style: 'margin:0 0 8px 0;' }, 'LifeNexus Media'),
  h('p', 'Track shows and movies here.'),
]); } };

const lifecycles = singleSpaVue({
  createApp,
  appOptions: { render() { return h(App); } }
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

