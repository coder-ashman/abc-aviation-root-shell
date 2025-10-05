/**
 * Simple brand switcher UI.  This script is imported by index.html and renders
 * a dropdown allowing users to choose a brand/tenant.  When a brand is
 * selected the `data-brand` attribute on the root <html> element is updated
 * and the selection is stored in localStorage.
 */
export function initBrandSwitcher() {
  const brands = ['A', 'B', 'C', 'Atlantic', 'Pacific'];
  const container = document.getElementById('brand-switcher');
  if (!container) return;
  const select = document.createElement('select');
  brands.forEach((brand) => {
    const option = document.createElement('option');
    option.value = brand;
    option.textContent = brand;
    select.appendChild(option);
  });
  select.value = localStorage.getItem('selectedBrand') || 'A';
  document.documentElement.setAttribute('data-brand', select.value);
  select.addEventListener('change', () => {
    const value = select.value;
    document.documentElement.setAttribute('data-brand', value);
    localStorage.setItem('selectedBrand', value);
  });
  container.appendChild(select);
}

// Immediately run the switcher after import
initBrandSwitcher();