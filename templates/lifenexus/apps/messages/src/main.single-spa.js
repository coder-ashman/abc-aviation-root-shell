const ID = 'lifenexus-messages';
let mounted = false;

export function bootstrap() {
  return Promise.resolve();
}

export function mount() {
  if (mounted) return Promise.resolve();
  const host = document.querySelector('#single-spa-application\\:\\@lifenexus\\/messages') || document.body;
  const container = document.createElement('section');
  container.id = ID;
  container.style.cssText = 'padding:16px;border:1px solid #e5e7eb;border-radius:8px;background:#fff;';
  container.innerHTML = `
    <h2 style="margin:0 0 8px 0;">LifeNexus Messages</h2>
    <button id="lnx-new" style="padding:6px 10px;border:1px solid #ccc;border-radius:6px;background:#fafafa;cursor:pointer;">New Message</button>
    <div id="lnx-list" style="margin-top:12px;font-size:14px;color:#333;"></div>
  `;
  host.appendChild(container);
  const list = container.querySelector('#lnx-list');
  const btn = container.querySelector('#lnx-new');
  btn.addEventListener('click', () => {
    const item = document.createElement('div');
    item.textContent = `New message at ${new Date().toLocaleTimeString()}`;
    item.style.cssText = 'padding:6px 8px;margin-top:6px;background:#f3f4f6;border-radius:4px;';
    list.appendChild(item);
  });
  mounted = true;
  return Promise.resolve();
}

export function unmount() {
  const el = document.getElementById(ID);
  el?.remove();
  mounted = false;
  return Promise.resolve();
}

