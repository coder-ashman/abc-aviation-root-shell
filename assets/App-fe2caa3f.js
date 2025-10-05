import { i as index_cjs, o as owner_mf_2_portal_mf_2_web__mf_v__runtimeInit__mf_v__ } from './owner_mf_2_portal_mf_2_web__mf_v__runtimeInit__mf_v__-a6f248e8.js';
import { j as jsxRuntimeExports } from './index-002da3d7.js';
import { o as owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__, R as React, a as React$1 } from './owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__-7e89695b.js';
import { P as PilotCard } from './PilotCard-108c6b23.js';
import { T as TrainingStatusTile } from './TrainingStatusTile-bf6cc313.js';
import { b as ThemeContext$2, d as createTheme, G as GlobalStyles$1, i as internal_serializeStyles, _ as _extends, e as _objectWithoutPropertiesLoose, D as DefaultPropsProvider, f as THEME_ID, g as createTheme$1, c as checkPilotCurrency, h as ThemeProvider$3, C as Card, a as CardContent, T as Typography } from './index-403ada59.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = owner_mf_2_portal_mf_2_web__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("react-dom", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^18.0.0"
    }}}));
    const exportModule = await res.then(factory => factory());
    var owner_mf_2_portal_mf_2_web__loadShare__react_mf_2_dom__loadShare__ = exportModule;

var createRoot;

var m = owner_mf_2_portal_mf_2_web__loadShare__react_mf_2_dom__loadShare__;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme$2(defaultTheme = null) {
  const contextTheme = owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useContext(ThemeContext$2);
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
}

const systemDefaultTheme = createTheme();
function useTheme$1(defaultTheme = systemDefaultTheme) {
  return useTheme$2(defaultTheme);
}

function wrapGlobalLayer(styles) {
  const serialized = internal_serializeStyles(styles);
  if (styles !== serialized && serialized.styles) {
    if (!serialized.styles.match(/^@layer\s+[^{]*$/)) {
      // If the styles are not already wrapped in a layer, wrap them in a global layer.
      serialized.styles = `@layer global{${serialized.styles}}`;
    }
    return serialized;
  }
  return styles;
}
function GlobalStyles({
  styles,
  themeId,
  defaultTheme = {}
}) {
  const upperTheme = useTheme$1(defaultTheme);
  const resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;
  let globalStyles = typeof styles === 'function' ? styles(resolvedTheme) : styles;
  if (resolvedTheme.modularCssLayers) {
    if (Array.isArray(globalStyles)) {
      globalStyles = globalStyles.map(styleArg => {
        if (typeof styleArg === 'function') {
          return wrapGlobalLayer(styleArg(resolvedTheme));
        }
        return wrapGlobalLayer(styleArg);
      });
    } else {
      globalStyles = wrapGlobalLayer(globalStyles);
    }
  }
  return /*#__PURE__*/jsxRuntimeExports.jsx(GlobalStyles$1, {
    styles: globalStyles
  });
}

/**
 * A version of `React.useLayoutEffect` that does not show a warning when server-side rendering.
 * This is useful for effects that are only needed for client-side rendering but not for SSR.
 *
 * Before you use this hook, make sure to read https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * and confirm it doesn't apply to your use-case.
 */
const useEnhancedEffect = typeof window !== 'undefined' ? owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useLayoutEffect : owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useEffect;
const useEnhancedEffect$1 = useEnhancedEffect;

let globalId = 0;
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useState(idOverride);
  const id = idOverride || defaultId;
  owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useEffect(() => {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the incrementing value for client-side rendering only.
      // We can't use it server-side.
      // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}

// downstream bundlers may remove unnecessary concatenation, but won't remove toString call -- Workaround for https://github.com/webpack/webpack/issues/14814
const maybeReactUseId = React['useId'.toString()];
/**
 *
 * @example <div id={useId()} />
 * @param idOverride
 * @returns {string}
 */
function useId(idOverride) {
  if (maybeReactUseId !== undefined) {
    const reactId = maybeReactUseId();
    return idOverride != null ? idOverride : reactId;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
  return useGlobalId(idOverride);
}

const ThemeContext = /*#__PURE__*/owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.createContext(null);
const ThemeContext$1 = ThemeContext;

function useTheme() {
  const theme = owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useContext(ThemeContext$1);
  return theme;
}

const hasSymbol = typeof Symbol === 'function' && Symbol.for;
const nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    const mergedTheme = localTheme(outerTheme);
    return mergedTheme;
  }
  return _extends({}, outerTheme, localTheme);
}

/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */
function ThemeProvider$2(props) {
  const {
    children,
    theme: localTheme
  } = props;
  const outerTheme = useTheme();
  const theme = owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useMemo(() => {
    const output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);
    if (output != null) {
      output[nested] = outerTheme !== null;
    }
    return output;
  }, [localTheme, outerTheme]);
  return /*#__PURE__*/jsxRuntimeExports.jsx(ThemeContext$1.Provider, {
    value: theme,
    children: children
  });
}

const _excluded$1 = ["value"];
const RtlContext = /*#__PURE__*/owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.createContext();
function RtlProvider(_ref) {
  let {
      value
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  return /*#__PURE__*/jsxRuntimeExports.jsx(RtlContext.Provider, _extends({
    value: value != null ? value : true
  }, props));
}

function useLayerOrder(theme) {
  const upperTheme = useTheme$2();
  const id = useId() || '';
  const {
    modularCssLayers
  } = theme;
  let layerOrder = 'mui.global, mui.components, mui.theme, mui.custom, mui.sx';
  if (!modularCssLayers || upperTheme !== null) {
    // skip this hook if upper theme exists.
    layerOrder = '';
  } else if (typeof modularCssLayers === 'string') {
    layerOrder = modularCssLayers.replace(/mui(?!\.)/g, layerOrder);
  } else {
    layerOrder = `@layer ${layerOrder};`;
  }
  useEnhancedEffect$1(() => {
    const head = document.querySelector('head');
    if (!head) {
      return;
    }
    const firstChild = head.firstChild;
    if (layerOrder) {
      var _firstChild$hasAttrib;
      // Only insert if first child doesn't have data-mui-layer-order attribute
      if (firstChild && (_firstChild$hasAttrib = firstChild.hasAttribute) != null && _firstChild$hasAttrib.call(firstChild, 'data-mui-layer-order') && firstChild.getAttribute('data-mui-layer-order') === id) {
        return;
      }
      const styleElement = document.createElement('style');
      styleElement.setAttribute('data-mui-layer-order', id);
      styleElement.textContent = layerOrder;
      head.prepend(styleElement);
    } else {
      var _head$querySelector;
      (_head$querySelector = head.querySelector(`style[data-mui-layer-order="${id}"]`)) == null || _head$querySelector.remove();
    }
  }, [layerOrder, id]);
  if (!layerOrder) {
    return null;
  }
  return /*#__PURE__*/jsxRuntimeExports.jsx(GlobalStyles, {
    styles: layerOrder
  });
}

const EMPTY_THEME = {};
function useThemeScoping(themeId, upperTheme, localTheme, isPrivate = false) {
  return owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useMemo(() => {
    const resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;
    if (typeof localTheme === 'function') {
      const mergedTheme = localTheme(resolvedTheme);
      const result = themeId ? _extends({}, upperTheme, {
        [themeId]: mergedTheme
      }) : mergedTheme;
      // must return a function for the private theme to NOT merge with the upper theme.
      // see the test case "use provided theme from a callback" in ThemeProvider.test.js
      if (isPrivate) {
        return () => result;
      }
      return result;
    }
    return themeId ? _extends({}, upperTheme, {
      [themeId]: localTheme
    }) : _extends({}, upperTheme, localTheme);
  }, [themeId, upperTheme, localTheme, isPrivate]);
}

/**
 * This component makes the `theme` available down the React tree.
 * It should preferably be used at **the root of your component tree**.
 *
 * <ThemeProvider theme={theme}> // existing use case
 * <ThemeProvider theme={{ id: theme }}> // theme scoping
 */
function ThemeProvider$1(props) {
  const {
    children,
    theme: localTheme,
    themeId
  } = props;
  const upperTheme = useTheme$2(EMPTY_THEME);
  const upperPrivateTheme = useTheme() || EMPTY_THEME;
  const engineTheme = useThemeScoping(themeId, upperTheme, localTheme);
  const privateTheme = useThemeScoping(themeId, upperPrivateTheme, localTheme, true);
  const rtlValue = engineTheme.direction === 'rtl';
  const layerOrder = useLayerOrder(engineTheme);
  return /*#__PURE__*/jsxRuntimeExports.jsx(ThemeProvider$2, {
    theme: privateTheme,
    children: /*#__PURE__*/jsxRuntimeExports.jsx(ThemeContext$2.Provider, {
      value: engineTheme,
      children: /*#__PURE__*/jsxRuntimeExports.jsx(RtlProvider, {
        value: rtlValue,
        children: /*#__PURE__*/jsxRuntimeExports.jsxs(DefaultPropsProvider, {
          value: engineTheme == null ? void 0 : engineTheme.components,
          children: [layerOrder, children]
        })
      })
    })
  });
}

const _excluded = ["theme"];
function ThemeProvider(_ref) {
  let {
      theme: themeInput
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  const scopedTheme = themeInput[THEME_ID];
  let finalTheme = scopedTheme || themeInput;
  if (typeof themeInput !== 'function') {
    if (scopedTheme && !scopedTheme.vars) {
      finalTheme = _extends({}, scopedTheme, {
        vars: null
      });
    } else if (themeInput && !themeInput.vars) {
      finalTheme = _extends({}, themeInput, {
        vars: null
      });
    }
  }
  return /*#__PURE__*/jsxRuntimeExports.jsx(ThemeProvider$1, _extends({}, props, {
    themeId: scopedTheme ? THEME_ID : undefined,
    theme: finalTheme
  }));
}

function App() {
  const muiTheme = React$1.useMemo(() => createTheme$1({ cssVariables: true }), []);
  const pilot = {
    name: "Captain Jane Doe",
    rating: "ATP",
    photo: "https://placehold.co/100x100?text=P"
  };
  const currency = checkPilotCurrency({ lastTrainingDate: "2025-01-01", expiryMonths: 12 });
  const status = {
    label: "Currency",
    status: currency.status,
    days: currency.daysUntilExpiry
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { theme: muiTheme, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider$3, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { variant: "outlined", style: { marginBottom: "16px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", component: "div", children: "Owner Dashboard" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { sx: { mb: 1.5 }, color: "text.secondary", children: "Upcoming flights and pilot status" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PilotCard, { pilot: { ...pilot, status: "OK" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: "16px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrainingStatusTile, { status }) })
  ] }) }) }) }) });
}

export { App as A, createRoot as c };
