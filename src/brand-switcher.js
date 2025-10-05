/**
 * Simple brand switcher UI.  This script is imported by index.html and renders
 * a dropdown allowing users to choose a brand/tenant.  When a brand is
 * selected the `data-brand` attribute on the root <html> element is updated
 * and the selection is stored in localStorage.
 */
const ROUTE_BRAND_RULES = [
  { match: (path) => path === '/training' || path === '/training/', brand: 'Atlantic' },
  { match: (path) => path.startsWith('/training/a'), brand: 'Atlantic' },
  { match: (path) => path.startsWith('/training/b'), brand: 'Pacific' },
];

export function initBrandSwitcher() {
  const brands = ['A', 'B', 'C', 'Atlantic', 'Pacific'];
  const container = document.getElementById('brand-switcher');
  if (!container) return;

  let manualBrand = localStorage.getItem('selectedBrand') || 'A';
  if (!brands.includes(manualBrand)) {
    manualBrand = 'A';
  }
  let activeRouteBrand = null;

  container.textContent = '';
  const select = document.createElement('select');

  brands.forEach((brand) => {
    const option = document.createElement('option');
    option.value = brand;
    option.textContent = brand;
    select.appendChild(option);
  });

  const applyBrand = (brand) => {
    if (!brand) return;
    document.documentElement.setAttribute('data-brand', brand);
    if (select.value !== brand) {
      select.value = brand;
    }
  };

  const applyRouteBrand = () => {
    const path = window.location.pathname;
    const rule = ROUTE_BRAND_RULES.find(({ match }) => {
      try {
        return match(path);
      } catch (error) {
        console.warn('Brand rule evaluation failed', error);
        return false;
      }
    });

    if (rule) {
      activeRouteBrand = rule.brand;
      applyBrand(rule.brand);
      select.disabled = true;
    } else {
      activeRouteBrand = null;
      select.disabled = false;
      applyBrand(manualBrand);
    }
  };

  select.addEventListener('change', () => {
    const value = select.value;
    manualBrand = value;
    localStorage.setItem('selectedBrand', value);
    if (!activeRouteBrand) {
      applyBrand(value);
    }
  });

  container.appendChild(select);

  applyBrand(manualBrand);
  applyRouteBrand();

  window.addEventListener('single-spa:routing-event', applyRouteBrand);
  window.addEventListener('popstate', applyRouteBrand);
}

// Immediately run the switcher after import
initBrandSwitcher();
