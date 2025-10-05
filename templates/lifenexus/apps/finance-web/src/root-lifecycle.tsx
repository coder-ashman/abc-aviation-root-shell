import React from 'react';

function FinanceApp() {
  return (
    <div style={{ padding: 16 }}>
      <h2>LifeNexus Finance</h2>
      <p>Budget overview and goals appear here.</p>
    </div>
  );
}

export default function Root() {
  const el = document.getElementById('single-spa-application:@lifenexus/finance') || document.body;
  const container = document.createElement('div');
  container.id = 'lifenexus-finance-container';
  el.appendChild(container);
  container.innerHTML = '';
  // Render minimal static markup (no ReactDOM to keep template simple)
  container.innerHTML = `
    <section style="padding: 16px; border: 1px solid #e5e7eb; border-radius: 8px; background: white;">
      <h2 style="margin:0 0 8px 0;">LifeNexus Finance</h2>
      <p style="margin:0;">Budget overview and goals appear here.</p>
    </section>
  `;
  return {
    bootstrap: () => Promise.resolve(),
    mount: () => Promise.resolve(),
    unmount: () => {
      container.remove();
      return Promise.resolve();
    },
  };
}

