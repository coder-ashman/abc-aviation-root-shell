import { _ as __vitePreload } from './preload-helper-06b33f0f.js';

const remoteEntryPromise = __vitePreload(() => import('../remoteEntry.js'),true?["remoteEntry.js","assets/owner_mf_2_portal_mf_2_web__mf_v__runtimeInit__mf_v__-a6f248e8.js","assets/preload-helper-06b33f0f.js","assets/virtualExposes-12e50bca.js"]:void 0);
    // __tla only serves as a hack for vite-plugin-top-level-await. 
    Promise.resolve(remoteEntryPromise)
      .then(remoteEntry => {
        return Promise.resolve(remoteEntry.__tla)
          .then(remoteEntry.init).catch(remoteEntry.init)
      });
