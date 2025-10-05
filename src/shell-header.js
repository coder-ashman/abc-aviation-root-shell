function initNavigation() {
  const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));

  if (!navLinks.length) return;

  const setActive = () => {
    const currentPath = window.location.pathname;
    navLinks.forEach((link) => {
      const linkPath = new URL(link.href, window.location.origin).pathname;
      const isRoot = linkPath === '/' || linkPath === '';
      const isActive = isRoot
        ? currentPath === '/'
        : currentPath === linkPath || currentPath.startsWith(`${linkPath}/`);
      if (isActive) {
        link.dataset.active = 'true';
      } else {
        delete link.dataset.active;
      }
    });
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      if (
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0
      ) {
        return;
      }

      const targetUrl = new URL(link.href, window.location.href);
      if (targetUrl.origin !== window.location.origin) {
        return; // allow full navigation for external links
      }

      event.preventDefault();
      if (targetUrl.pathname !== window.location.pathname) {
        window.history.pushState({}, '', targetUrl.pathname + targetUrl.search + targetUrl.hash);
        window.dispatchEvent(new PopStateEvent('popstate'));
        setActive();
      }
    });
  });

  window.addEventListener('single-spa:routing-event', setActive);
  window.addEventListener('popstate', setActive);
  setActive();
}


function initOverridesButton() {
  const button = document.querySelector('[data-open-overrides]');
  if (!button) return;

  const openOverridesPanel = () => {
    customElements
      .whenDefined('import-map-overrides-full')
      .then(() => {
        const fullUi = document.querySelector('import-map-overrides-full');
        if (!fullUi) return;

        fullUi.renderWithPreact?.();
        const triggerButton = fullUi.shadowRoot?.querySelector('button');
        triggerButton?.click();
      })
      .catch((error) => {
        console.warn('Unable to toggle import-map overrides UI', error);
      });
  };

  button.addEventListener('click', () => {
    try {
      localStorage.setItem('import-map-overrides-ui', 'true');
      localStorage.removeItem('import-map-overrides-disabled');
    } catch (error) {
      console.warn('Unable to persist import-map override preference', error);
    }

    window.importMapOverrides?.enableUI?.();

    const url = new URL(window.location.href);
    if (!url.searchParams.has('import-map-overrides')) {
      url.searchParams.set('import-map-overrides', 'true');
      window.location.href = url.toString();
      return;
    }

    openOverridesPanel();
  });

  const hasFlag = new URL(window.location.href).searchParams.has('import-map-overrides');
  if (hasFlag) {
    openOverridesPanel();
  }
}

function initResetOverridesButton() {
  const button = document.querySelector('[data-reset-overrides]');
  if (!button) return;

  button.addEventListener('click', () => {
    try {
      window.importMapOverrides?.resetOverrides?.();
      localStorage.removeItem('import-map-overrides-disabled');
    } catch (error) {
      console.warn('Unable to reset import map overrides', error);
    }

    const url = new URL(window.location.href);
    if (url.searchParams.has('import-map-overrides')) {
      url.searchParams.delete('import-map-overrides');
      window.history.replaceState({}, '', url.toString());
    }
  });
}

function bootstrapShellHeader() {
  initNavigation();
  initOverridesButton();
  initResetOverridesButton();
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', bootstrapShellHeader, { once: true });
  } else {
    bootstrapShellHeader();
  }
}
