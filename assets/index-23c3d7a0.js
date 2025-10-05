import './owner_mf_2_portal_mf_2_web__mf_v__runtimeInit__mf_v__-a6f248e8.js';
import { j as jsxRuntimeExports } from './index-002da3d7.js';
import { c as createRoot, A as App } from './App-fe2caa3f.js';
import './preload-helper-06b33f0f.js';
import './owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__-7e89695b.js';
import './_commonjsHelpers-0f3c985d.js';
import './PilotCard-108c6b23.js';
import './TrainingStatusTile-bf6cc313.js';
import './index-403ada59.js';

true&&(function polyfill() {
    const relList = document.createElement('link').relList;
    if (relList && relList.supports && relList.supports('modulepreload')) {
        return;
    }
    for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
    }
    new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type !== 'childList') {
                continue;
            }
            for (const node of mutation.addedNodes) {
                if (node.tagName === 'LINK' && node.rel === 'modulepreload')
                    processPreload(node);
            }
        }
    }).observe(document, { childList: true, subtree: true });
    function getFetchOpts(link) {
        const fetchOpts = {};
        if (link.integrity)
            fetchOpts.integrity = link.integrity;
        if (link.referrerPolicy)
            fetchOpts.referrerPolicy = link.referrerPolicy;
        if (link.crossOrigin === 'use-credentials')
            fetchOpts.credentials = 'include';
        else if (link.crossOrigin === 'anonymous')
            fetchOpts.credentials = 'omit';
        else
            fetchOpts.credentials = 'same-origin';
        return fetchOpts;
    }
    function processPreload(link) {
        if (link.ep)
            // ep marker = processed
            return;
        link.ep = true;
        // prepopulate the load record
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
    }
}());

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(/* @__PURE__ */ jsxRuntimeExports.jsx(App, {}));
}
