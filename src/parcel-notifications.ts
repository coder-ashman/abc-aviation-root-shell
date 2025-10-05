/**
 * Framework‑agnostic parcel to display notifications.  In a real implementation
 * this would mount a React, Angular or Vue component.  For demo purposes it
 * simply renders static HTML and provides start/stop lifecycle methods.
 */
export default function notificationsParcel() {
  return {
    bootstrap() {
      return Promise.resolve();
    },
    mount(props: any) {
      const container = props.domElement || document.getElementById('aside-slot');
      const div = document.createElement('div');
      div.id = 'notifications-parcel';
      div.innerHTML = '<div style="padding:8px; background:#f5f5f5; border-bottom:1px solid #ccc;">Notifications parcel</div>';
      container?.appendChild(div);
      return Promise.resolve();
    },
    unmount(props: any) {
      const el = document.getElementById('notifications-parcel');
      el?.remove();
      return Promise.resolve();
    },
  };
}