import { j as jsxRuntimeExports } from './index-002da3d7.js';
import { c as createRoot, A as App } from './App-fe2caa3f.js';
import './owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__-7e89695b.js';
import './_commonjsHelpers-0f3c985d.js';
import './owner_mf_2_portal_mf_2_web__mf_v__runtimeInit__mf_v__-a6f248e8.js';
import './preload-helper-06b33f0f.js';
import './PilotCard-108c6b23.js';
import './TrainingStatusTile-bf6cc313.js';
import './index-403ada59.js';

let root = null;
async function bootstrap() {
  return Promise.resolve();
}
async function mount(props) {
  const hostContainer = props?.domElement || document.getElementById("single-spa-application:@owner-portal/web");
  if (!hostContainer) {
    throw new Error("Container element not found for owner-portal web application");
  }
  root = createRoot(hostContainer);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(App, {}));
  return Promise.resolve();
}
async function unmount() {
  root?.unmount();
  root = null;
  return Promise.resolve();
}

const lifecycles = {
  bootstrap,
  mount,
  unmount
};

export { lifecycles as default };
