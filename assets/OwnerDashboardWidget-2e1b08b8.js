import { j as jsxRuntimeExports } from './index-002da3d7.js';
import { P as PilotCard } from './PilotCard-108c6b23.js';
import { T as TrainingStatusTile } from './TrainingStatusTile-bf6cc313.js';
import { c as checkPilotCurrency, C as Card, a as CardContent, T as Typography } from './index-403ada59.js';
import './owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__-7e89695b.js';
import './_commonjsHelpers-0f3c985d.js';
import './owner_mf_2_portal_mf_2_web__mf_v__runtimeInit__mf_v__-a6f248e8.js';
import './preload-helper-06b33f0f.js';

function OwnerDashboardWidget() {
  const pilot = {
    name: "Captain Jane Doe",
    rating: "ATP",
    photo: "https://placehold.co/100x100?text=P",
    status: "OK"
  };
  const currency = checkPilotCurrency({ lastTrainingDate: "2025-01-01", expiryMonths: 12 });
  const status = {
    label: "Currency",
    status: currency.status,
    days: currency.daysUntilExpiry
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { variant: "outlined", style: { width: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", component: "div", style: { marginBottom: "8px" }, children: "Pilot Overview" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PilotCard, { pilot }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: "8px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrainingStatusTile, { status }) })
  ] }) });
}

export { OwnerDashboardWidget as default };
