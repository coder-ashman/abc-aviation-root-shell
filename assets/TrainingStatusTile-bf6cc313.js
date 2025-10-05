import { j as jsxRuntimeExports, V as View, T as Text } from './index-002da3d7.js';

const statusStyles = {
  OK: "bg-green-500",
  WARN: "bg-yellow-500",
  BLOCK: "bg-red-500"
};
function StatusChip({ status }) {
  const className = statusStyles[status] + " text-white px-2 py-1 rounded-full text-xs";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(View, { className, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { className: "text-white uppercase", children: status }) });
}

function TrainingStatusTile({ status }) {
  let chipStatus = "OK";
  if (status.status === "expiring")
    chipStatus = "WARN";
  if (status.status === "lapsed")
    chipStatus = "BLOCK";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { className: "p-4 border border-gray-200 rounded-md bg-white dark:bg-gray-900", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { className: "flex flex-row items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { className: "font-medium", children: status.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusChip, { status: chipStatus })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { className: "text-sm text-gray-600 dark:text-gray-400", children: status.status === "lapsed" ? `Lapsed ${-status.days} days ago` : `${status.days} days until expiry` })
  ] });
}

export { TrainingStatusTile as T };
