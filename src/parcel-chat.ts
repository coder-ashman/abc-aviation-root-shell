/**
 * Framework‑agnostic parcel for chat.  This is a stub that can be replaced by
 * a real chat widget implemented in any framework.  It renders a toggleable
 * chat drawer.
 */
export default function chatParcel() {
  let drawer: HTMLElement | null = null;
  return {
    bootstrap() {
      return Promise.resolve();
    },
    mount(props: any) {
      const container = props.domElement || document.getElementById('aside-slot');
      drawer = document.createElement('div');
      drawer.id = 'chat-parcel';
      drawer.style.position = 'fixed';
      drawer.style.bottom = '0';
      drawer.style.right = '0';
      drawer.style.width = '300px';
      drawer.style.height = '400px';
      drawer.style.background = '#ffffff';
      drawer.style.border = '1px solid #ccc';
      drawer.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
      drawer.style.display = 'none';
      drawer.innerHTML = '<div style="padding:8px; background:#f5f5f5; border-bottom:1px solid #ccc;">Chat parcel<button id="chat-toggle" style="float:right;">Open</button></div><div id="chat-content" style="padding:8px;">No messages yet</div>';
      container?.appendChild(drawer);
      const toggle = drawer.querySelector('#chat-toggle') as HTMLElement;
      toggle?.addEventListener('click', () => {
        if (drawer!.style.display === 'none') {
          drawer!.style.display = 'block';
          toggle.textContent = 'Close';
        } else {
          drawer!.style.display = 'none';
          toggle.textContent = 'Open';
        }
      });
      return Promise.resolve();
    },
    unmount() {
      drawer?.remove();
      return Promise.resolve();
    },
  };
}