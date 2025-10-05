import { o as owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__, a as React } from './owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__-7e89695b.js';
import { g as getDefaultExportFromCjs, a as getAugmentedNamespace } from './_commonjsHelpers-0f3c985d.js';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m$1=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m$1.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

function _typeof$1(o) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$1(o);
}

function toPrimitive(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}

var objectWithoutPropertiesLoose = {exports: {}};

var hasRequiredObjectWithoutPropertiesLoose;

function requireObjectWithoutPropertiesLoose () {
	if (hasRequiredObjectWithoutPropertiesLoose) return objectWithoutPropertiesLoose.exports;
	hasRequiredObjectWithoutPropertiesLoose = 1;
	(function (module) {
		function _objectWithoutPropertiesLoose(r, e) {
		  if (null == r) return {};
		  var t = {};
		  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		    if (-1 !== e.indexOf(n)) continue;
		    t[n] = r[n];
		  }
		  return t;
		}
		module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (objectWithoutPropertiesLoose));
	return objectWithoutPropertiesLoose.exports;
}

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var isDisabled = props => props.disabled || Array.isArray(props.accessibilityStates) && props.accessibilityStates.indexOf('disabled') > -1;
const isDisabled$1 = isDisabled;

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var accessibilityRoleToWebRole = {
  adjustable: 'slider',
  button: 'button',
  header: 'heading',
  image: 'img',
  imagebutton: null,
  keyboardkey: null,
  label: null,
  link: 'link',
  none: 'presentation',
  search: 'search',
  summary: 'region',
  text: null
};
var propsToAriaRole = _ref => {
  var accessibilityRole = _ref.accessibilityRole,
    role = _ref.role;
  var _role = role || accessibilityRole;
  if (_role) {
    var inferredRole = accessibilityRoleToWebRole[_role];
    if (inferredRole !== null) {
      // ignore roles that don't map to web
      return inferredRole || _role;
    }
  }
};
const propsToAriaRole$1 = propsToAriaRole;

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var roleComponents = {
  article: 'article',
  banner: 'header',
  blockquote: 'blockquote',
  button: 'button',
  code: 'code',
  complementary: 'aside',
  contentinfo: 'footer',
  deletion: 'del',
  emphasis: 'em',
  figure: 'figure',
  insertion: 'ins',
  form: 'form',
  list: 'ul',
  listitem: 'li',
  main: 'main',
  navigation: 'nav',
  paragraph: 'p',
  region: 'section',
  strong: 'strong'
};
var emptyObject$7 = {};
var propsToAccessibilityComponent = function propsToAccessibilityComponent(props) {
  if (props === void 0) {
    props = emptyObject$7;
  }
  var roleProp = props.role || props.accessibilityRole;
  // special-case for "label" role which doesn't map to an ARIA role
  if (roleProp === 'label') {
    return 'label';
  }
  var role = propsToAriaRole$1(props);
  if (role) {
    if (role === 'heading') {
      var level = props.accessibilityLevel || props['aria-level'];
      if (level != null) {
        return "h" + level;
      }
      return 'h1';
    }
    return roleComponents[role];
  }
};
const propsToAccessibilityComponent$1 = propsToAccessibilityComponent;

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var AccessibilityUtil = {
  isDisabled: isDisabled$1,
  propsToAccessibilityComponent: propsToAccessibilityComponent$1,
  propsToAriaRole: propsToAriaRole$1
};
const AccessibilityUtil$1 = AccessibilityUtil;

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

var objectWithoutPropertiesLooseExports = requireObjectWithoutPropertiesLoose();
const _objectWithoutPropertiesLoose = /*@__PURE__*/getDefaultExportFromCjs(objectWithoutPropertiesLooseExports);

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var unitlessNumbers$1 = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexOrder: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowGap: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnGap: true,
  gridColumnStart: true,
  lineClamp: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
  // transform types
  scale: true,
  scaleX: true,
  scaleY: true,
  scaleZ: true,
  // RN properties
  shadowOpacity: true
};

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes$7 = ['ms', 'Moz', 'O', 'Webkit'];
var prefixKey$1 = (prefix, key) => {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
};
Object.keys(unitlessNumbers$1).forEach(prop => {
  prefixes$7.forEach(prefix => {
    unitlessNumbers$1[prefixKey$1(prefix, prop)] = unitlessNumbers$1[prop];
  });
});
const unitlessNumbers$2 = unitlessNumbers$1;

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var isWebColor = color => color === 'currentcolor' || color === 'currentColor' || color === 'inherit' || color.indexOf('var(') === 0;
const isWebColor$1 = isWebColor;

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @noflow
 */

function normalizeColor$2(color) {
  if (typeof color === 'number') {
    if (color >>> 0 === color && color >= 0 && color <= 0xffffffff) {
      return color;
    }
    return null;
  }

  if (typeof color !== 'string') {
    return null;
  }

  const matchers = getMatchers();
  let match;

  // Ordered based on occurrences on Facebook codebase
  if ((match = matchers.hex6.exec(color))) {
    return parseInt(match[1] + 'ff', 16) >>> 0;
  }

  const colorFromKeyword = normalizeKeyword(color);
  if (colorFromKeyword != null) {
    return colorFromKeyword;
  }

  if ((match = matchers.rgb.exec(color))) {
    return (
      ((parse255(match[1]) << 24) | // r
        (parse255(match[2]) << 16) | // g
        (parse255(match[3]) << 8) | // b
        0x000000ff) >>> // a
      0
    );
  }

  if ((match = matchers.rgba.exec(color))) {
    // rgba(R G B / A) notation
    if (match[6] !== undefined) {
      return (
        ((parse255(match[6]) << 24) | // r
          (parse255(match[7]) << 16) | // g
          (parse255(match[8]) << 8) | // b
          parse1(match[9])) >>> // a
        0
      );
    }

    // rgba(R, G, B, A) notation
    return (
      ((parse255(match[2]) << 24) | // r
        (parse255(match[3]) << 16) | // g
        (parse255(match[4]) << 8) | // b
        parse1(match[5])) >>> // a
      0
    );
  }

  if ((match = matchers.hex3.exec(color))) {
    return (
      parseInt(
        match[1] +
          match[1] + // r
          match[2] +
          match[2] + // g
          match[3] +
          match[3] + // b
          'ff', // a
        16,
      ) >>> 0
    );
  }

  // https://drafts.csswg.org/css-color-4/#hex-notation
  if ((match = matchers.hex8.exec(color))) {
    return parseInt(match[1], 16) >>> 0;
  }

  if ((match = matchers.hex4.exec(color))) {
    return (
      parseInt(
        match[1] +
          match[1] + // r
          match[2] +
          match[2] + // g
          match[3] +
          match[3] + // b
          match[4] +
          match[4], // a
        16,
      ) >>> 0
    );
  }

  if ((match = matchers.hsl.exec(color))) {
    return (
      (hslToRgb(
        parse360(match[1]), // h
        parsePercentage(match[2]), // s
        parsePercentage(match[3]), // l
      ) |
        0x000000ff) >>> // a
      0
    );
  }

  if ((match = matchers.hsla.exec(color))) {
    // hsla(H S L / A) notation
    if (match[6] !== undefined) {
      return (
        (hslToRgb(
          parse360(match[6]), // h
          parsePercentage(match[7]), // s
          parsePercentage(match[8]), // l
        ) |
          parse1(match[9])) >>> // a
        0
      );
    }

    // hsla(H, S, L, A) notation
    return (
      (hslToRgb(
        parse360(match[2]), // h
        parsePercentage(match[3]), // s
        parsePercentage(match[4]), // l
      ) |
        parse1(match[5])) >>> // a
      0
    );
  }

  if ((match = matchers.hwb.exec(color))) {
    return (
      (hwbToRgb(
        parse360(match[1]), // h
        parsePercentage(match[2]), // w
        parsePercentage(match[3]), // b
      ) |
        0x000000ff) >>> // a
      0
    );
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);

  return (
    (Math.round(r * 255) << 24) |
    (Math.round(g * 255) << 16) |
    (Math.round(b * 255) << 8)
  );
}

function hwbToRgb(h, w, b) {
  if (w + b >= 1) {
    const gray = Math.round((w * 255) / (w + b));

    return (gray << 24) | (gray << 16) | (gray << 8);
  }

  const red = hue2rgb(0, 1, h + 1 / 3) * (1 - w - b) + w;
  const green = hue2rgb(0, 1, h) * (1 - w - b) + w;
  const blue = hue2rgb(0, 1, h - 1 / 3) * (1 - w - b) + w;

  return (
    (Math.round(red * 255) << 24) |
    (Math.round(green * 255) << 16) |
    (Math.round(blue * 255) << 8)
  );
}

const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call(...args) {
  return '\\(\\s*(' + args.join(')\\s*,?\\s*(') + ')\\s*\\)';
}

function callWithSlashSeparator(...args) {
  return (
    '\\(\\s*(' +
    args.slice(0, args.length - 1).join(')\\s*,?\\s*(') +
    ')\\s*/\\s*(' +
    args[args.length - 1] +
    ')\\s*\\)'
  );
}

function commaSeparatedCall(...args) {
  return '\\(\\s*(' + args.join(')\\s*,\\s*(') + ')\\s*\\)';
}

let cachedMatchers;

function getMatchers() {
  if (cachedMatchers === undefined) {
    cachedMatchers = {
      rgb: new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER)),
      rgba: new RegExp(
        'rgba(' +
          commaSeparatedCall(NUMBER, NUMBER, NUMBER, NUMBER) +
          '|' +
          callWithSlashSeparator(NUMBER, NUMBER, NUMBER, NUMBER) +
          ')',
      ),
      hsl: new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE)),
      hsla: new RegExp(
        'hsla(' +
          commaSeparatedCall(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER) +
          '|' +
          callWithSlashSeparator(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER) +
          ')',
      ),
      hwb: new RegExp('hwb' + call(NUMBER, PERCENTAGE, PERCENTAGE)),
      hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#([0-9a-fA-F]{6})$/,
      hex8: /^#([0-9a-fA-F]{8})$/,
    };
  }
  return cachedMatchers;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 255) {
    return 255;
  }
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (((int % 360) + 360) % 360) / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) {
    return 0;
  }
  if (num > 1) {
    return 255;
  }
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  const int = parseFloat(str);
  if (int < 0) {
    return 0;
  }
  if (int > 100) {
    return 1;
  }
  return int / 100;
}

function normalizeKeyword(name) {
  // prettier-ignore
  switch (name) {
    case 'transparent': return 0x00000000;
    // http://www.w3.org/TR/css3-color/#svg-color
    case 'aliceblue': return 0xf0f8ffff;
    case 'antiquewhite': return 0xfaebd7ff;
    case 'aqua': return 0x00ffffff;
    case 'aquamarine': return 0x7fffd4ff;
    case 'azure': return 0xf0ffffff;
    case 'beige': return 0xf5f5dcff;
    case 'bisque': return 0xffe4c4ff;
    case 'black': return 0x000000ff;
    case 'blanchedalmond': return 0xffebcdff;
    case 'blue': return 0x0000ffff;
    case 'blueviolet': return 0x8a2be2ff;
    case 'brown': return 0xa52a2aff;
    case 'burlywood': return 0xdeb887ff;
    case 'burntsienna': return 0xea7e5dff;
    case 'cadetblue': return 0x5f9ea0ff;
    case 'chartreuse': return 0x7fff00ff;
    case 'chocolate': return 0xd2691eff;
    case 'coral': return 0xff7f50ff;
    case 'cornflowerblue': return 0x6495edff;
    case 'cornsilk': return 0xfff8dcff;
    case 'crimson': return 0xdc143cff;
    case 'cyan': return 0x00ffffff;
    case 'darkblue': return 0x00008bff;
    case 'darkcyan': return 0x008b8bff;
    case 'darkgoldenrod': return 0xb8860bff;
    case 'darkgray': return 0xa9a9a9ff;
    case 'darkgreen': return 0x006400ff;
    case 'darkgrey': return 0xa9a9a9ff;
    case 'darkkhaki': return 0xbdb76bff;
    case 'darkmagenta': return 0x8b008bff;
    case 'darkolivegreen': return 0x556b2fff;
    case 'darkorange': return 0xff8c00ff;
    case 'darkorchid': return 0x9932ccff;
    case 'darkred': return 0x8b0000ff;
    case 'darksalmon': return 0xe9967aff;
    case 'darkseagreen': return 0x8fbc8fff;
    case 'darkslateblue': return 0x483d8bff;
    case 'darkslategray': return 0x2f4f4fff;
    case 'darkslategrey': return 0x2f4f4fff;
    case 'darkturquoise': return 0x00ced1ff;
    case 'darkviolet': return 0x9400d3ff;
    case 'deeppink': return 0xff1493ff;
    case 'deepskyblue': return 0x00bfffff;
    case 'dimgray': return 0x696969ff;
    case 'dimgrey': return 0x696969ff;
    case 'dodgerblue': return 0x1e90ffff;
    case 'firebrick': return 0xb22222ff;
    case 'floralwhite': return 0xfffaf0ff;
    case 'forestgreen': return 0x228b22ff;
    case 'fuchsia': return 0xff00ffff;
    case 'gainsboro': return 0xdcdcdcff;
    case 'ghostwhite': return 0xf8f8ffff;
    case 'gold': return 0xffd700ff;
    case 'goldenrod': return 0xdaa520ff;
    case 'gray': return 0x808080ff;
    case 'green': return 0x008000ff;
    case 'greenyellow': return 0xadff2fff;
    case 'grey': return 0x808080ff;
    case 'honeydew': return 0xf0fff0ff;
    case 'hotpink': return 0xff69b4ff;
    case 'indianred': return 0xcd5c5cff;
    case 'indigo': return 0x4b0082ff;
    case 'ivory': return 0xfffff0ff;
    case 'khaki': return 0xf0e68cff;
    case 'lavender': return 0xe6e6faff;
    case 'lavenderblush': return 0xfff0f5ff;
    case 'lawngreen': return 0x7cfc00ff;
    case 'lemonchiffon': return 0xfffacdff;
    case 'lightblue': return 0xadd8e6ff;
    case 'lightcoral': return 0xf08080ff;
    case 'lightcyan': return 0xe0ffffff;
    case 'lightgoldenrodyellow': return 0xfafad2ff;
    case 'lightgray': return 0xd3d3d3ff;
    case 'lightgreen': return 0x90ee90ff;
    case 'lightgrey': return 0xd3d3d3ff;
    case 'lightpink': return 0xffb6c1ff;
    case 'lightsalmon': return 0xffa07aff;
    case 'lightseagreen': return 0x20b2aaff;
    case 'lightskyblue': return 0x87cefaff;
    case 'lightslategray': return 0x778899ff;
    case 'lightslategrey': return 0x778899ff;
    case 'lightsteelblue': return 0xb0c4deff;
    case 'lightyellow': return 0xffffe0ff;
    case 'lime': return 0x00ff00ff;
    case 'limegreen': return 0x32cd32ff;
    case 'linen': return 0xfaf0e6ff;
    case 'magenta': return 0xff00ffff;
    case 'maroon': return 0x800000ff;
    case 'mediumaquamarine': return 0x66cdaaff;
    case 'mediumblue': return 0x0000cdff;
    case 'mediumorchid': return 0xba55d3ff;
    case 'mediumpurple': return 0x9370dbff;
    case 'mediumseagreen': return 0x3cb371ff;
    case 'mediumslateblue': return 0x7b68eeff;
    case 'mediumspringgreen': return 0x00fa9aff;
    case 'mediumturquoise': return 0x48d1ccff;
    case 'mediumvioletred': return 0xc71585ff;
    case 'midnightblue': return 0x191970ff;
    case 'mintcream': return 0xf5fffaff;
    case 'mistyrose': return 0xffe4e1ff;
    case 'moccasin': return 0xffe4b5ff;
    case 'navajowhite': return 0xffdeadff;
    case 'navy': return 0x000080ff;
    case 'oldlace': return 0xfdf5e6ff;
    case 'olive': return 0x808000ff;
    case 'olivedrab': return 0x6b8e23ff;
    case 'orange': return 0xffa500ff;
    case 'orangered': return 0xff4500ff;
    case 'orchid': return 0xda70d6ff;
    case 'palegoldenrod': return 0xeee8aaff;
    case 'palegreen': return 0x98fb98ff;
    case 'paleturquoise': return 0xafeeeeff;
    case 'palevioletred': return 0xdb7093ff;
    case 'papayawhip': return 0xffefd5ff;
    case 'peachpuff': return 0xffdab9ff;
    case 'peru': return 0xcd853fff;
    case 'pink': return 0xffc0cbff;
    case 'plum': return 0xdda0ddff;
    case 'powderblue': return 0xb0e0e6ff;
    case 'purple': return 0x800080ff;
    case 'rebeccapurple': return 0x663399ff;
    case 'red': return 0xff0000ff;
    case 'rosybrown': return 0xbc8f8fff;
    case 'royalblue': return 0x4169e1ff;
    case 'saddlebrown': return 0x8b4513ff;
    case 'salmon': return 0xfa8072ff;
    case 'sandybrown': return 0xf4a460ff;
    case 'seagreen': return 0x2e8b57ff;
    case 'seashell': return 0xfff5eeff;
    case 'sienna': return 0xa0522dff;
    case 'silver': return 0xc0c0c0ff;
    case 'skyblue': return 0x87ceebff;
    case 'slateblue': return 0x6a5acdff;
    case 'slategray': return 0x708090ff;
    case 'slategrey': return 0x708090ff;
    case 'snow': return 0xfffafaff;
    case 'springgreen': return 0x00ff7fff;
    case 'steelblue': return 0x4682b4ff;
    case 'tan': return 0xd2b48cff;
    case 'teal': return 0x008080ff;
    case 'thistle': return 0xd8bfd8ff;
    case 'tomato': return 0xff6347ff;
    case 'turquoise': return 0x40e0d0ff;
    case 'violet': return 0xee82eeff;
    case 'wheat': return 0xf5deb3ff;
    case 'white': return 0xffffffff;
    case 'whitesmoke': return 0xf5f5f5ff;
    case 'yellow': return 0xffff00ff;
    case 'yellowgreen': return 0x9acd32ff;
  }
  return null;
}

var normalizeColors = normalizeColor$2;

const normalizeColor$3 = /*@__PURE__*/getDefaultExportFromCjs(normalizeColors);

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var processColor = color => {
  if (color === undefined || color === null) {
    return color;
  }

  // convert number and hex
  var int32Color = normalizeColor$3(color);
  if (int32Color === undefined || int32Color === null) {
    return undefined;
  }
  int32Color = (int32Color << 24 | int32Color >>> 8) >>> 0;
  return int32Color;
};
const processColor$1 = processColor;

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var normalizeColor = function normalizeColor(color, opacity) {
  if (opacity === void 0) {
    opacity = 1;
  }
  if (color == null) return;
  if (typeof color === 'string' && isWebColor$1(color)) {
    return color;
  }
  var colorInt = processColor$1(color);
  if (colorInt != null) {
    var r = colorInt >> 16 & 255;
    var g = colorInt >> 8 & 255;
    var b = colorInt & 255;
    var a = (colorInt >> 24 & 255) / 255;
    var alpha = (a * opacity).toFixed(2);
    return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
  }
};
const normalizeColor$1 = normalizeColor;

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var colorProps = {
  backgroundColor: true,
  borderColor: true,
  borderTopColor: true,
  borderRightColor: true,
  borderBottomColor: true,
  borderLeftColor: true,
  color: true,
  shadowColor: true,
  textDecorationColor: true,
  textShadowColor: true
};
function normalizeValueWithProperty(value, property) {
  var returnValue = value;
  if ((property == null || !unitlessNumbers$2[property]) && typeof value === 'number') {
    returnValue = value + "px";
  } else if (property != null && colorProps[property]) {
    returnValue = normalizeColor$1(value);
  }
  return returnValue;
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
const canUseDOM$1 = canUseDOM;

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * The browser implements the CSS cascade, where the order of properties is a
 * factor in determining which styles to paint. React Native is different. It
 * gives giving precedence to the more specific style property. For example,
 * the value of `paddingTop` takes precedence over that of `padding`.
 *
 * This module creates mutally exclusive style declarations by expanding all of
 * React Native's supported shortform properties (e.g. `padding`) to their
 * longfrom equivalents.
 */

var emptyObject$6 = {};
var supportsCSS3TextDecoration = !canUseDOM$1 || window.CSS != null && window.CSS.supports != null && (window.CSS.supports('text-decoration-line', 'none') || window.CSS.supports('-webkit-text-decoration-line', 'none'));
var MONOSPACE_FONT_STACK = 'monospace,monospace';
var SYSTEM_FONT_STACK = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif';
var STYLE_SHORT_FORM_EXPANSIONS = {
  borderColor: ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'],
  borderBlockColor: ['borderTopColor', 'borderBottomColor'],
  borderInlineColor: ['borderRightColor', 'borderLeftColor'],
  borderRadius: ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'],
  borderStyle: ['borderTopStyle', 'borderRightStyle', 'borderBottomStyle', 'borderLeftStyle'],
  borderBlockStyle: ['borderTopStyle', 'borderBottomStyle'],
  borderInlineStyle: ['borderRightStyle', 'borderLeftStyle'],
  borderWidth: ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'],
  borderBlockWidth: ['borderTopWidth', 'borderBottomWidth'],
  borderInlineWidth: ['borderRightWidth', 'borderLeftWidth'],
  insetBlock: ['top', 'bottom'],
  insetInline: ['left', 'right'],
  marginBlock: ['marginTop', 'marginBottom'],
  marginInline: ['marginRight', 'marginLeft'],
  paddingBlock: ['paddingTop', 'paddingBottom'],
  paddingInline: ['paddingRight', 'paddingLeft'],
  overflow: ['overflowX', 'overflowY'],
  overscrollBehavior: ['overscrollBehaviorX', 'overscrollBehaviorY'],
  borderBlockStartColor: ['borderTopColor'],
  borderBlockStartStyle: ['borderTopStyle'],
  borderBlockStartWidth: ['borderTopWidth'],
  borderBlockEndColor: ['borderBottomColor'],
  borderBlockEndStyle: ['borderBottomStyle'],
  borderBlockEndWidth: ['borderBottomWidth'],
  //borderInlineStartColor: ['borderLeftColor'],
  //borderInlineStartStyle: ['borderLeftStyle'],
  //borderInlineStartWidth: ['borderLeftWidth'],
  //borderInlineEndColor: ['borderRightColor'],
  //borderInlineEndStyle: ['borderRightStyle'],
  //borderInlineEndWidth: ['borderRightWidth'],
  borderEndStartRadius: ['borderBottomLeftRadius'],
  borderEndEndRadius: ['borderBottomRightRadius'],
  borderStartStartRadius: ['borderTopLeftRadius'],
  borderStartEndRadius: ['borderTopRightRadius'],
  insetBlockEnd: ['bottom'],
  insetBlockStart: ['top'],
  //insetInlineEnd: ['right'],
  //insetInlineStart: ['left'],
  marginBlockStart: ['marginTop'],
  marginBlockEnd: ['marginBottom'],
  //marginInlineStart: ['marginLeft'],
  //marginInlineEnd: ['marginRight'],
  paddingBlockStart: ['paddingTop'],
  paddingBlockEnd: ['paddingBottom']
  //paddingInlineStart: ['marginLeft'],
  //paddingInlineEnd: ['marginRight'],
};

/**
 * Reducer
 */

var createReactDOMStyle = (style, isInline) => {
  if (!style) {
    return emptyObject$6;
  }
  var resolvedStyle = {};
  var _loop = function _loop() {
    var value = style[prop];
    if (
    // Ignore everything with a null value
    value == null) {
      return "continue";
    }
    if (prop === 'backgroundClip') {
      // TODO: remove once this issue is fixed
      // https://github.com/rofrischmann/inline-style-prefixer/issues/159
      if (value === 'text') {
        resolvedStyle.backgroundClip = value;
        resolvedStyle.WebkitBackgroundClip = value;
      }
    } else if (prop === 'flex') {
      if (value === -1) {
        resolvedStyle.flexGrow = 0;
        resolvedStyle.flexShrink = 1;
        resolvedStyle.flexBasis = 'auto';
      } else {
        resolvedStyle.flex = value;
      }
    } else if (prop === 'font') {
      resolvedStyle[prop] = value.replace('System', SYSTEM_FONT_STACK);
    } else if (prop === 'fontFamily') {
      if (value.indexOf('System') > -1) {
        var stack = value.split(/,\s*/);
        stack[stack.indexOf('System')] = SYSTEM_FONT_STACK;
        resolvedStyle[prop] = stack.join(',');
      } else if (value === 'monospace') {
        resolvedStyle[prop] = MONOSPACE_FONT_STACK;
      } else {
        resolvedStyle[prop] = value;
      }
    } else if (prop === 'textDecorationLine') {
      // use 'text-decoration' for browsers that only support CSS2
      // text-decoration (e.g., IE, Edge)
      if (!supportsCSS3TextDecoration) {
        resolvedStyle.textDecoration = value;
      } else {
        resolvedStyle.textDecorationLine = value;
      }
    } else if (prop === 'writingDirection') {
      resolvedStyle.direction = value;
    } else {
      var _value = normalizeValueWithProperty(style[prop], prop);
      var longFormProperties = STYLE_SHORT_FORM_EXPANSIONS[prop];
      if (isInline && prop === 'inset') {
        if (style.insetInline == null) {
          resolvedStyle.left = _value;
          resolvedStyle.right = _value;
        }
        if (style.insetBlock == null) {
          resolvedStyle.top = _value;
          resolvedStyle.bottom = _value;
        }
      } else if (isInline && prop === 'margin') {
        if (style.marginInline == null) {
          resolvedStyle.marginLeft = _value;
          resolvedStyle.marginRight = _value;
        }
        if (style.marginBlock == null) {
          resolvedStyle.marginTop = _value;
          resolvedStyle.marginBottom = _value;
        }
      } else if (isInline && prop === 'padding') {
        if (style.paddingInline == null) {
          resolvedStyle.paddingLeft = _value;
          resolvedStyle.paddingRight = _value;
        }
        if (style.paddingBlock == null) {
          resolvedStyle.paddingTop = _value;
          resolvedStyle.paddingBottom = _value;
        }
      } else if (longFormProperties) {
        longFormProperties.forEach((longForm, i) => {
          // The value of any longform property in the original styles takes
          // precedence over the shortform's value.
          if (style[longForm] == null) {
            resolvedStyle[longForm] = _value;
          }
        });
      } else {
        resolvedStyle[prop] = _value;
      }
    }
  };
  for (var prop in style) {
    var _ret = _loop();
    if (_ret === "continue") continue;
  }
  return resolvedStyle;
};
const createReactDOMStyle$1 = createReactDOMStyle;

/* eslint-disable */

/**
 * JS Implementation of MurmurHash2
 *
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/murmurhash-js
 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
 * @see http://sites.google.com/site/murmurhash/
 *
 * @param {string} str ASCII only
 * @param {number} seed Positive integer only
 * @return {number} 32-bit positive integer hash
 *
 * 
 */

function murmurhash2_32_gc(str, seed) {
  var l = str.length,
    h = seed ^ l,
    i = 0,
    k;
  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }
  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }
  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return h >>> 0;
}
var hash = str => murmurhash2_32_gc(str, 1).toString(36);
const hash$1 = hash;

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var uppercasePattern$2 = /[A-Z]/g;
var msPattern$1 = /^ms-/;
var cache$6 = {};
function toHyphenLower$2(match) {
  return '-' + match.toLowerCase();
}
function hyphenateStyleName$2(name) {
  if (name in cache$6) {
    return cache$6[name];
  }
  var hName = name.replace(uppercasePattern$2, toHyphenLower$2);
  return cache$6[name] = msPattern$1.test(hName) ? '-' + hName : hName;
}

var createPrefixer$1 = {};

var prefixProperty$1 = {};

var capitalizeString$1 = {};

Object.defineProperty(capitalizeString$1, "__esModule", {
  value: true
});
capitalizeString$1.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

Object.defineProperty(prefixProperty$1, "__esModule", {
  value: true
});
prefixProperty$1.default = prefixProperty;

var _capitalizeString$1 = capitalizeString$1;

var _capitalizeString2$1 = _interopRequireDefault$3(_capitalizeString$1);

function _interopRequireDefault$3(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  var requiredPrefixes = prefixProperties[property];

  if (requiredPrefixes && style.hasOwnProperty(property)) {
    var capitalizedProperty = (0, _capitalizeString2$1.default)(property);

    for (var i = 0; i < requiredPrefixes.length; ++i) {
      var prefixedProperty = requiredPrefixes[i] + capitalizedProperty;

      if (!style[prefixedProperty]) {
        style[prefixedProperty] = style[property];
      }
    }
  }

  return style;
}

var prefixValue$2 = {};

Object.defineProperty(prefixValue$2, "__esModule", {
  value: true
});
prefixValue$2.default = prefixValue$1;
function prefixValue$1(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}

var addNewValuesOnly$1 = {};

Object.defineProperty(addNewValuesOnly$1, "__esModule", {
  value: true
});
addNewValuesOnly$1.default = addNewValuesOnly;
function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}

var isObject$1 = {};

Object.defineProperty(isObject$1, "__esModule", {
  value: true
});
isObject$1.default = isObject;
function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}

Object.defineProperty(createPrefixer$1, "__esModule", {
  value: true
});
var _default$9 = createPrefixer$1.default = createPrefixer;

var _prefixProperty = prefixProperty$1;

var _prefixProperty2 = _interopRequireDefault$2(_prefixProperty);

var _prefixValue = prefixValue$2;

var _prefixValue2 = _interopRequireDefault$2(_prefixValue);

var _addNewValuesOnly = addNewValuesOnly$1;

var _addNewValuesOnly2 = _interopRequireDefault$2(_addNewValuesOnly);

var _isObject = isObject$1;

var _isObject2 = _interopRequireDefault$2(_isObject);

function _interopRequireDefault$2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;

  return function prefix(style) {
    for (var property in style) {
      var value = style[property];

      // handle nested objects
      if ((0, _isObject2.default)(value)) {
        style[property] = prefix(value);
        // handle array values
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);

          (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
        }

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (_processedValue) {
          style[property] = _processedValue;
        }

        style = (0, _prefixProperty2.default)(prefixMap, property, style);
      }
    }

    return style;
  };
}

var backgroundClip$1 = {};

Object.defineProperty(backgroundClip$1, "__esModule", {
  value: true
});
var _default$8 = backgroundClip$1.default = backgroundClip;
function backgroundClip() {
  return null;
}

var crossFade$1 = {};

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function filterUniqueArray(arr) {
  return arr.filter(function (val, index) {
    return arr.lastIndexOf(val) === index;
  });
}

function assignStyle(base) {
  for (var i = 0, len = arguments.length <= 1 ? 0 : arguments.length - 1; i < len; ++i) {
    var style = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];

    for (var property in style) {
      var value = style[property];
      var baseValue = base[property];

      if (baseValue && value) {
        if (Array.isArray(baseValue)) {
          base[property] = filterUniqueArray(baseValue.concat(value));
          continue;
        }

        if (Array.isArray(value)) {
          base[property] = filterUniqueArray([baseValue].concat(_toConsumableArray(value)));
          continue;
        }

        if (_typeof(value) === 'object') {
          base[property] = assignStyle({}, baseValue, value);
          continue;
        }
      }

      base[property] = value;
    }
  }

  return base;
}

var DASH = /-([a-z])/g;
var MS = /^Ms/g;
var cache$5 = {};

function toUpper(match) {
  return match[1].toUpperCase();
}

function camelCaseProperty(property) {
  if (cache$5.hasOwnProperty(property)) {
    return cache$5[property];
  }

  var camelProp = property.replace(DASH, toUpper).replace(MS, 'ms');
  cache$5[property] = camelProp;
  return camelProp;
}

/* eslint-disable no-var, prefer-template */
var uppercasePattern$1 = /[A-Z]/g;
var msPattern = /^ms-/;
var cache$4 = {};

function toHyphenLower$1(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache$4.hasOwnProperty(name)) {
    return cache$4[name]
  }

  var hName = name.replace(uppercasePattern$1, toHyphenLower$1);
  return (cache$4[name] = msPattern.test(hName) ? '-' + hName : hName)
}

const hyphenateStyleName$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: hyphenateStyleName
}, Symbol.toStringTag, { value: 'Module' }));

function hyphenateProperty$1(property) {
  return hyphenateStyleName(property);
}

function cssifyDeclaration(property, value) {
  return hyphenateProperty$1(property) + ':' + value;
}

function cssifyObject(style) {
  var css = '';

  for (var property in style) {
    var value = style[property];

    if (typeof value !== 'string' && typeof value !== 'number') {
      continue;
    } // prevents the semicolon after
    // the last rule declaration


    if (css) {
      css += ';';
    }

    css += cssifyDeclaration(property, value);
  }

  return css;
}

var RE$3 = /^(Webkit|Moz|O|ms)/;
function isPrefixedProperty(property) {
  return RE$3.test(property);
}

var RE$2 = /-webkit-|-moz-|-ms-/;
function isPrefixedValue$1(value) {
  return typeof value === 'string' && RE$2.test(value);
}

var unitlessProperties = {
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  fontWeight: true,
  lineHeight: true,
  opacity: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var prefixedUnitlessProperties = ['animationIterationCount', 'boxFlex', 'boxFlexGroup', 'boxOrdinalGroup', 'columnCount', 'flex', 'flexGrow', 'flexPositive', 'flexShrink', 'flexNegative', 'flexOrder', 'gridColumn', 'gridColumnEnd', 'gridColumnStart', 'gridRow', 'gridRowEnd', 'gridRowStart', 'lineClamp', 'order'];
var prefixes$6 = ['Webkit', 'ms', 'Moz', 'O'];

function getPrefixedProperty(prefix, property) {
  return prefix + property.charAt(0).toUpperCase() + property.slice(1);
} // add all prefixed properties to the unitless properties


for (var i = 0, len = prefixedUnitlessProperties.length; i < len; ++i) {
  var property = prefixedUnitlessProperties[i];
  unitlessProperties[property] = true;

  for (var j = 0, jLen = prefixes$6.length; j < jLen; ++j) {
    unitlessProperties[getPrefixedProperty(prefixes$6[j], property)] = true;
  }
} // add all hypenated properties as well


for (var _property in unitlessProperties) {
  unitlessProperties[hyphenateProperty$1(_property)] = true;
}

function isUnitlessProperty(property) {
  return unitlessProperties.hasOwnProperty(property);
}

var RE$1 = /^(ms|Webkit|Moz|O)/;
function unprefixProperty(property) {
  var propertyWithoutPrefix = property.replace(RE$1, '');
  return propertyWithoutPrefix.charAt(0).toLowerCase() + propertyWithoutPrefix.slice(1);
}

function normalizeProperty(property) {
  return unprefixProperty(camelCaseProperty(property));
}

function resolveArrayValue(property, value) {
  return value.join(';' + hyphenateProperty$1(property) + ':');
}

var RE = /(-ms-|-webkit-|-moz-|-o-)/g;
function unprefixValue(value) {
  if (typeof value === 'string') {
    return value.replace(RE, '');
  }

  return value;
}

const es = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  assignStyle,
  camelCaseProperty,
  cssifyDeclaration,
  cssifyObject,
  hyphenateProperty: hyphenateProperty$1,
  isPrefixedProperty,
  isPrefixedValue: isPrefixedValue$1,
  isUnitlessProperty,
  normalizeProperty,
  resolveArrayValue,
  unprefixProperty,
  unprefixValue
}, Symbol.toStringTag, { value: 'Module' }));

const require$$0$1 = /*@__PURE__*/getAugmentedNamespace(es);

Object.defineProperty(crossFade$1, "__esModule", {
  value: true
});
var _default$7 = crossFade$1.default = crossFade;

var _cssInJsUtils$1 = require$$0$1;

var CROSS_FADE_REGEX = /cross-fade\(/g;
// http://caniuse.com/#search=cross-fade
var prefixes$5 = ['-webkit-', ''];

function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _cssInJsUtils$1.isPrefixedValue)(value) && value.indexOf('cross-fade(') !== -1) {
    return prefixes$5.map(function (prefix) {
      return value.replace(CROSS_FADE_REGEX, prefix + 'cross-fade(');
    });
  }
}

var cursor$1 = {};

Object.defineProperty(cursor$1, "__esModule", {
  value: true
});
var _default$6 = cursor$1.default = cursor;
var prefixes$4 = ['-webkit-', '-moz-', ''];

var values$1 = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values$1.hasOwnProperty(value)) {
    return prefixes$4.map(function (prefix) {
      return prefix + value;
    });
  }
}

var filter$1 = {};

Object.defineProperty(filter$1, "__esModule", {
  value: true
});
var _default$5 = filter$1.default = filter;

var _cssInJsUtils = require$$0$1;

var FILTER_REGEX = /filter\(/g;
// http://caniuse.com/#feat=css-filter-function
var prefixes$3 = ['-webkit-', ''];

function filter(property, value) {
  if (typeof value === 'string' && !(0, _cssInJsUtils.isPrefixedValue)(value) && value.indexOf('filter(') !== -1) {
    return prefixes$3.map(function (prefix) {
      return value.replace(FILTER_REGEX, prefix + 'filter(');
    });
  }
}

var imageSet$1 = {};

var isPrefixedValue = {};

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = isPrefixedValue;
	var RE = /-webkit-|-moz-|-ms-/;

	function isPrefixedValue(value) {
	  return typeof value === 'string' && RE.test(value);
	} 
} (isPrefixedValue));

Object.defineProperty(imageSet$1, "__esModule", {
  value: true
});
var _default$4 = imageSet$1.default = imageSet;

var _isPrefixedValue$1 = isPrefixedValue;

var _isPrefixedValue2$1 = _interopRequireDefault$1(_isPrefixedValue$1);

function _interopRequireDefault$1(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes$2 = ['-webkit-', ''];

function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2$1.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes$2.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}

var logical$1 = {};

Object.defineProperty(logical$1, "__esModule", {
  value: true
});
var _default$3 = logical$1.default = logical;
var alternativeProps = {
  marginBlockStart: ['WebkitMarginBefore'],
  marginBlockEnd: ['WebkitMarginAfter'],
  marginInlineStart: ['WebkitMarginStart', 'MozMarginStart'],
  marginInlineEnd: ['WebkitMarginEnd', 'MozMarginEnd'],
  paddingBlockStart: ['WebkitPaddingBefore'],
  paddingBlockEnd: ['WebkitPaddingAfter'],
  paddingInlineStart: ['WebkitPaddingStart', 'MozPaddingStart'],
  paddingInlineEnd: ['WebkitPaddingEnd', 'MozPaddingEnd'],
  borderBlockStart: ['WebkitBorderBefore'],
  borderBlockStartColor: ['WebkitBorderBeforeColor'],
  borderBlockStartStyle: ['WebkitBorderBeforeStyle'],
  borderBlockStartWidth: ['WebkitBorderBeforeWidth'],
  borderBlockEnd: ['WebkitBorderAfter'],
  borderBlockEndColor: ['WebkitBorderAfterColor'],
  borderBlockEndStyle: ['WebkitBorderAfterStyle'],
  borderBlockEndWidth: ['WebkitBorderAfterWidth'],
  borderInlineStart: ['WebkitBorderStart', 'MozBorderStart'],
  borderInlineStartColor: ['WebkitBorderStartColor', 'MozBorderStartColor'],
  borderInlineStartStyle: ['WebkitBorderStartStyle', 'MozBorderStartStyle'],
  borderInlineStartWidth: ['WebkitBorderStartWidth', 'MozBorderStartWidth'],
  borderInlineEnd: ['WebkitBorderEnd', 'MozBorderEnd'],
  borderInlineEndColor: ['WebkitBorderEndColor', 'MozBorderEndColor'],
  borderInlineEndStyle: ['WebkitBorderEndStyle', 'MozBorderEndStyle'],
  borderInlineEndWidth: ['WebkitBorderEndWidth', 'MozBorderEndWidth']
};

function logical(property, value, style) {
  if (Object.prototype.hasOwnProperty.call(alternativeProps, property)) {
    var alternativePropList = alternativeProps[property];
    for (var i = 0, len = alternativePropList.length; i < len; ++i) {
      style[alternativePropList[i]] = value;
    }
  }
}

var position$1 = {};

Object.defineProperty(position$1, "__esModule", {
  value: true
});
var _default$2 = position$1.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}

var sizing$1 = {};

Object.defineProperty(sizing$1, "__esModule", {
  value: true
});
var _default$1 = sizing$1.default = sizing;
var prefixes$1 = ['-webkit-', '-moz-', ''];

var properties$1 = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties$1.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes$1.map(function (prefix) {
      return prefix + value;
    });
  }
}

var transition$1 = {};

var hyphenateProperty = {};

const require$$0 = /*@__PURE__*/getAugmentedNamespace(hyphenateStyleName$1);

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = hyphenateProperty;

	var _hyphenateStyleName = require$$0;

	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function hyphenateProperty(property) {
	  return (0, _hyphenateStyleName2["default"])(property);
	} 
} (hyphenateProperty));

Object.defineProperty(transition$1, "__esModule", {
  value: true
});
var _default = transition$1.default = transition;

var _hyphenateProperty = hyphenateProperty;

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = isPrefixedValue;

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = capitalizeString$1;

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};

var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}

var w = ['Webkit'];
var m = ['Moz'];
var wm = ['Webkit', 'Moz'];
var wms = ['Webkit', 'ms'];
var wmms = ['Webkit', 'Moz', 'ms'];
const staticData = {
  plugins: [_default$8, _default$7, _default$6, _default$5, _default$4, _default$3, _default$2, _default$1, _default],
  prefixMap: {
    appearance: wmms,
    userSelect: wm,
    textEmphasisPosition: wms,
    textEmphasis: wms,
    textEmphasisStyle: wms,
    textEmphasisColor: wms,
    boxDecorationBreak: wms,
    clipPath: w,
    maskImage: wms,
    maskMode: wms,
    maskRepeat: wms,
    maskPosition: wms,
    maskClip: wms,
    maskOrigin: wms,
    maskSize: wms,
    maskComposite: wms,
    mask: wms,
    maskBorderSource: wms,
    maskBorderMode: wms,
    maskBorderSlice: wms,
    maskBorderWidth: wms,
    maskBorderOutset: wms,
    maskBorderRepeat: wms,
    maskBorder: wms,
    maskType: wms,
    textDecorationStyle: w,
    textDecorationSkip: w,
    textDecorationLine: w,
    textDecorationColor: w,
    filter: w,
    breakAfter: w,
    breakBefore: w,
    breakInside: w,
    columnCount: w,
    columnFill: w,
    columnGap: w,
    columnRule: w,
    columnRuleColor: w,
    columnRuleStyle: w,
    columnRuleWidth: w,
    columns: w,
    columnSpan: w,
    columnWidth: w,
    backdropFilter: w,
    hyphens: w,
    flowInto: w,
    flowFrom: w,
    regionFragment: w,
    textOrientation: w,
    tabSize: m,
    fontKerning: w,
    textSizeAdjust: w
  }
};

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var prefixAll = _default$9(staticData);
const prefixStyles = prefixAll;

var _excluded$4 = ["animationKeyframes"];
var cache$3 = new Map();
var emptyObject$5 = {};
var classicGroup = 1;
var atomicGroup = 3;
var customGroup = {
  borderColor: 2,
  borderRadius: 2,
  borderStyle: 2,
  borderWidth: 2,
  display: 2,
  flex: 2,
  inset: 2,
  margin: 2,
  overflow: 2,
  overscrollBehavior: 2,
  padding: 2,
  insetBlock: 2.1,
  insetInline: 2.1,
  marginInline: 2.1,
  marginBlock: 2.1,
  paddingInline: 2.1,
  paddingBlock: 2.1,
  borderBlockStartColor: 2.2,
  borderBlockStartStyle: 2.2,
  borderBlockStartWidth: 2.2,
  borderBlockEndColor: 2.2,
  borderBlockEndStyle: 2.2,
  borderBlockEndWidth: 2.2,
  borderInlineStartColor: 2.2,
  borderInlineStartStyle: 2.2,
  borderInlineStartWidth: 2.2,
  borderInlineEndColor: 2.2,
  borderInlineEndStyle: 2.2,
  borderInlineEndWidth: 2.2,
  borderEndStartRadius: 2.2,
  borderEndEndRadius: 2.2,
  borderStartStartRadius: 2.2,
  borderStartEndRadius: 2.2,
  insetBlockEnd: 2.2,
  insetBlockStart: 2.2,
  insetInlineEnd: 2.2,
  insetInlineStart: 2.2,
  marginBlockStart: 2.2,
  marginBlockEnd: 2.2,
  marginInlineStart: 2.2,
  marginInlineEnd: 2.2,
  paddingBlockStart: 2.2,
  paddingBlockEnd: 2.2,
  paddingInlineStart: 2.2,
  paddingInlineEnd: 2.2
};
var borderTopLeftRadius = 'borderTopLeftRadius';
var borderTopRightRadius = 'borderTopRightRadius';
var borderBottomLeftRadius = 'borderBottomLeftRadius';
var borderBottomRightRadius = 'borderBottomRightRadius';
var borderLeftColor = 'borderLeftColor';
var borderLeftStyle = 'borderLeftStyle';
var borderLeftWidth = 'borderLeftWidth';
var borderRightColor = 'borderRightColor';
var borderRightStyle = 'borderRightStyle';
var borderRightWidth = 'borderRightWidth';
var right = 'right';
var marginLeft = 'marginLeft';
var marginRight = 'marginRight';
var paddingLeft = 'paddingLeft';
var paddingRight = 'paddingRight';
var left = 'left';

// Map of LTR property names to their BiDi equivalent.
var PROPERTIES_FLIP = {
  [borderTopLeftRadius]: borderTopRightRadius,
  [borderTopRightRadius]: borderTopLeftRadius,
  [borderBottomLeftRadius]: borderBottomRightRadius,
  [borderBottomRightRadius]: borderBottomLeftRadius,
  [borderLeftColor]: borderRightColor,
  [borderLeftStyle]: borderRightStyle,
  [borderLeftWidth]: borderRightWidth,
  [borderRightColor]: borderLeftColor,
  [borderRightStyle]: borderLeftStyle,
  [borderRightWidth]: borderLeftWidth,
  [left]: right,
  [marginLeft]: marginRight,
  [marginRight]: marginLeft,
  [paddingLeft]: paddingRight,
  [paddingRight]: paddingLeft,
  [right]: left
};

// Map of I18N property names to their LTR equivalent.
var PROPERTIES_I18N = {
  borderStartStartRadius: borderTopLeftRadius,
  borderStartEndRadius: borderTopRightRadius,
  borderEndStartRadius: borderBottomLeftRadius,
  borderEndEndRadius: borderBottomRightRadius,
  borderInlineStartColor: borderLeftColor,
  borderInlineStartStyle: borderLeftStyle,
  borderInlineStartWidth: borderLeftWidth,
  borderInlineEndColor: borderRightColor,
  borderInlineEndStyle: borderRightStyle,
  borderInlineEndWidth: borderRightWidth,
  insetInlineEnd: right,
  insetInlineStart: left,
  marginInlineStart: marginLeft,
  marginInlineEnd: marginRight,
  paddingInlineStart: paddingLeft,
  paddingInlineEnd: paddingRight
};
var PROPERTIES_VALUE = ['clear', 'float', 'textAlign'];
function atomic(style) {
  var compiledStyle = {
    $$css: true
  };
  var compiledRules = [];
  function atomicCompile(srcProp, prop, value) {
    var valueString = stringifyValueWithProperty(value, prop);
    var cacheKey = prop + valueString;
    var cachedResult = cache$3.get(cacheKey);
    var identifier;
    if (cachedResult != null) {
      identifier = cachedResult[0];
      compiledRules.push(cachedResult[1]);
    } else {
      var v = srcProp !== prop ? cacheKey : valueString;
      identifier = createIdentifier('r', srcProp, v);
      var order = customGroup[srcProp] || atomicGroup;
      var rules = createAtomicRules(identifier, prop, value);
      var orderedRules = [rules, order];
      compiledRules.push(orderedRules);
      cache$3.set(cacheKey, [identifier, orderedRules]);
    }
    return identifier;
  }
  Object.keys(style).sort().forEach(srcProp => {
    var value = style[srcProp];
    if (value != null) {
      var localizeableValue;
      // BiDi flip values
      if (PROPERTIES_VALUE.indexOf(srcProp) > -1) {
        var _left = atomicCompile(srcProp, srcProp, 'left');
        var _right = atomicCompile(srcProp, srcProp, 'right');
        if (value === 'start') {
          localizeableValue = [_left, _right];
        } else if (value === 'end') {
          localizeableValue = [_right, _left];
        }
      }
      // BiDi flip properties
      var propPolyfill = PROPERTIES_I18N[srcProp];
      if (propPolyfill != null) {
        var ltr = atomicCompile(srcProp, propPolyfill, value);
        var rtl = atomicCompile(srcProp, PROPERTIES_FLIP[propPolyfill], value);
        localizeableValue = [ltr, rtl];
      }
      // BiDi flip transitionProperty value
      if (srcProp === 'transitionProperty') {
        var values = Array.isArray(value) ? value : [value];
        var polyfillIndices = [];
        for (var i = 0; i < values.length; i++) {
          var val = values[i];
          if (typeof val === 'string' && PROPERTIES_I18N[val] != null) {
            polyfillIndices.push(i);
          }
        }
        if (polyfillIndices.length > 0) {
          var ltrPolyfillValues = [...values];
          var rtlPolyfillValues = [...values];
          polyfillIndices.forEach(i => {
            var ltrVal = ltrPolyfillValues[i];
            if (typeof ltrVal === 'string') {
              var ltrPolyfill = PROPERTIES_I18N[ltrVal];
              var rtlPolyfill = PROPERTIES_FLIP[ltrPolyfill];
              ltrPolyfillValues[i] = ltrPolyfill;
              rtlPolyfillValues[i] = rtlPolyfill;
              var _ltr = atomicCompile(srcProp, srcProp, ltrPolyfillValues);
              var _rtl = atomicCompile(srcProp, srcProp, rtlPolyfillValues);
              localizeableValue = [_ltr, _rtl];
            }
          });
        }
      }
      if (localizeableValue == null) {
        localizeableValue = atomicCompile(srcProp, srcProp, value);
      } else {
        compiledStyle['$$css$localize'] = true;
      }
      compiledStyle[srcProp] = localizeableValue;
    }
  });
  return [compiledStyle, compiledRules];
}

/**
 * Compile simple style object to classic CSS rules.
 * No support for 'placeholderTextColor', 'scrollbarWidth', or 'pointerEvents'.
 */
function classic(style, name) {
  var compiledStyle = {
    $$css: true
  };
  var compiledRules = [];
  var animationKeyframes = style.animationKeyframes,
    rest = _objectWithoutPropertiesLoose(style, _excluded$4);
  var identifier = createIdentifier('css', name, JSON.stringify(style));
  var selector = "." + identifier;
  var animationName;
  if (animationKeyframes != null) {
    var _processKeyframesValu = processKeyframesValue(animationKeyframes),
      animationNames = _processKeyframesValu[0],
      keyframesRules = _processKeyframesValu[1];
    animationName = animationNames.join(',');
    compiledRules.push(...keyframesRules);
  }
  var block = createDeclarationBlock(_objectSpread2(_objectSpread2({}, rest), {}, {
    animationName
  }));
  compiledRules.push("" + selector + block);
  compiledStyle[identifier] = identifier;
  return [compiledStyle, [[compiledRules, classicGroup]]];
}

/**
 * Compile simple style object to inline DOM styles.
 * No support for 'animationKeyframes', 'placeholderTextColor', 'scrollbarWidth', or 'pointerEvents'.
 */
function inline(originalStyle, isRTL) {
  var style = originalStyle || emptyObject$5;
  var frozenProps = {};
  var nextStyle = {};
  var _loop = function _loop() {
    var originalValue = style[originalProp];
    var prop = originalProp;
    var value = originalValue;
    if (!Object.prototype.hasOwnProperty.call(style, originalProp) || originalValue == null) {
      return "continue";
    }

    // BiDi flip values
    if (PROPERTIES_VALUE.indexOf(originalProp) > -1) {
      if (originalValue === 'start') {
        value = isRTL ? 'right' : 'left';
      } else if (originalValue === 'end') {
        value = isRTL ? 'left' : 'right';
      }
    }
    // BiDi flip properties
    var propPolyfill = PROPERTIES_I18N[originalProp];
    if (propPolyfill != null) {
      prop = isRTL ? PROPERTIES_FLIP[propPolyfill] : propPolyfill;
    }
    // BiDi flip transitionProperty value
    if (originalProp === 'transitionProperty') {
      // $FlowFixMe
      var originalValues = Array.isArray(originalValue) ? originalValue : [originalValue];
      originalValues.forEach((val, i) => {
        if (typeof val === 'string') {
          var valuePolyfill = PROPERTIES_I18N[val];
          if (valuePolyfill != null) {
            originalValues[i] = isRTL ? PROPERTIES_FLIP[valuePolyfill] : valuePolyfill;
            value = originalValues.join(' ');
          }
        }
      });
    }

    // Create finalized style
    if (!frozenProps[prop]) {
      nextStyle[prop] = value;
    }
    if (prop === originalProp) {
      frozenProps[prop] = true;
    }

    //    if (PROPERTIES_I18N.hasOwnProperty(originalProp)) {
    //    frozenProps[prop] = true;
    //}
  };
  for (var originalProp in style) {
    var _ret = _loop();
    if (_ret === "continue") continue;
  }
  return createReactDOMStyle$1(nextStyle, true);
}

/**
 * Create a value string that normalizes different input values with a common
 * output.
 */
function stringifyValueWithProperty(value, property) {
  // e.g., 0 => '0px', 'black' => 'rgba(0,0,0,1)'
  var normalizedValue = normalizeValueWithProperty(value, property);
  return typeof normalizedValue !== 'string' ? JSON.stringify(normalizedValue || '') : normalizedValue;
}

/**
 * Create the Atomic CSS rules needed for a given StyleSheet rule.
 * Translates StyleSheet declarations to CSS.
 */
function createAtomicRules(identifier, property, value) {
  var rules = [];
  var selector = "." + identifier;

  // Handle non-standard properties and object values that require multiple
  // CSS rules to be created.
  switch (property) {
    case 'animationKeyframes':
      {
        var _processKeyframesValu2 = processKeyframesValue(value),
          animationNames = _processKeyframesValu2[0],
          keyframesRules = _processKeyframesValu2[1];
        var block = createDeclarationBlock({
          animationName: animationNames.join(',')
        });
        rules.push("" + selector + block, ...keyframesRules);
        break;
      }

    // Equivalent to using '::placeholder'
    case 'placeholderTextColor':
      {
        var _block = createDeclarationBlock({
          color: value,
          opacity: 1
        });
        rules.push(selector + "::-webkit-input-placeholder" + _block, selector + "::-moz-placeholder" + _block, selector + ":-ms-input-placeholder" + _block, selector + "::placeholder" + _block);
        break;
      }

    // Polyfill for additional 'pointer-events' values
    // See d13f78622b233a0afc0c7a200c0a0792c8ca9e58
    case 'pointerEvents':
      {
        var finalValue = value;
        if (value === 'auto' || value === 'box-only') {
          finalValue = 'auto!important';
          if (value === 'box-only') {
            var _block2 = createDeclarationBlock({
              pointerEvents: 'none'
            });
            rules.push(selector + ">*" + _block2);
          }
        } else if (value === 'none' || value === 'box-none') {
          finalValue = 'none!important';
          if (value === 'box-none') {
            var _block3 = createDeclarationBlock({
              pointerEvents: 'auto'
            });
            rules.push(selector + ">*" + _block3);
          }
        }
        var _block4 = createDeclarationBlock({
          pointerEvents: finalValue
        });
        rules.push("" + selector + _block4);
        break;
      }

    // Polyfill for draft spec
    // https://drafts.csswg.org/css-scrollbars-1/
    case 'scrollbarWidth':
      {
        if (value === 'none') {
          rules.push(selector + "::-webkit-scrollbar{display:none}");
        }
        var _block5 = createDeclarationBlock({
          scrollbarWidth: value
        });
        rules.push("" + selector + _block5);
        break;
      }
    default:
      {
        var _block6 = createDeclarationBlock({
          [property]: value
        });
        rules.push("" + selector + _block6);
        break;
      }
  }
  return rules;
}

/**
 * Creates a CSS declaration block from a StyleSheet object.
 */
function createDeclarationBlock(style) {
  var domStyle = prefixStyles(createReactDOMStyle$1(style));
  var declarationsString = Object.keys(domStyle).map(property => {
    var value = domStyle[property];
    var prop = hyphenateStyleName$2(property);
    // The prefixer may return an array of values:
    // { display: [ '-webkit-flex', 'flex' ] }
    // to represent "fallback" declarations
    // { display: -webkit-flex; display: flex; }
    if (Array.isArray(value)) {
      return value.map(v => prop + ":" + v).join(';');
    } else {
      return prop + ":" + value;
    }
  })
  // Once properties are hyphenated, this will put the vendor
  // prefixed and short-form properties first in the list.
  .sort().join(';');
  return "{" + declarationsString + ";}";
}

/**
 * An identifier is associated with a unique set of styles.
 */
function createIdentifier(prefix, name, key) {
  var hashedString = hash$1(name + key);
  return prefix + "-" + hashedString;
}

/**
 * Create individual CSS keyframes rules.
 */
function createKeyframes(keyframes) {
  var prefixes = ['-webkit-', ''];
  var identifier = createIdentifier('r', 'animation', JSON.stringify(keyframes));
  var steps = '{' + Object.keys(keyframes).map(stepName => {
    var rule = keyframes[stepName];
    var block = createDeclarationBlock(rule);
    return "" + stepName + block;
  }).join('') + '}';
  var rules = prefixes.map(prefix => {
    return "@" + prefix + "keyframes " + identifier + steps;
  });
  return [identifier, rules];
}

/**
 * Create CSS keyframes rules and names from a StyleSheet keyframes object.
 */
function processKeyframesValue(keyframesValue) {
  if (typeof keyframesValue === 'number') {
    throw new Error("Invalid CSS keyframes type: " + typeof keyframesValue);
  }
  var animationNames = [];
  var rules = [];
  var value = Array.isArray(keyframesValue) ? keyframesValue : [keyframesValue];
  value.forEach(keyframes => {
    if (typeof keyframes === 'string') {
      // Support external animation libraries (identifiers only)
      animationNames.push(keyframes);
    } else {
      // Create rules for each of the keyframes
      var _createKeyframes = createKeyframes(keyframes),
        identifier = _createKeyframes[0],
        keyframesRules = _createKeyframes[1];
      animationNames.push(identifier);
      rules.push(...keyframesRules);
    }
  });
  return [animationNames, rules];
}

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

// $FlowFixMe: HTMLStyleElement is incorrectly typed - https://github.com/facebook/flow/issues/2696
function createCSSStyleSheet(id, rootNode, textContent) {
  if (canUseDOM$1) {
    var root = rootNode != null ? rootNode : document;
    var element = root.getElementById(id);
    if (element == null) {
      element = document.createElement('style');
      element.setAttribute('id', id);
      if (typeof textContent === 'string') {
        element.appendChild(document.createTextNode(textContent));
      }
      if (root instanceof ShadowRoot) {
        root.insertBefore(element, root.firstChild);
      } else {
        var head = root.head;
        if (head) {
          head.insertBefore(element, head.firstChild);
        }
      }
    }
    // $FlowFixMe: HTMLElement is incorrectly typed
    return element.sheet;
  } else {
    return null;
  }
}

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var slice = Array.prototype.slice;

/**
 * Order-based insertion of CSS.
 *
 * Each rule is associated with a numerically defined group.
 * Groups are ordered within the style sheet according to their number, with the
 * lowest first.
 *
 * Groups are implemented using marker rules. The selector of the first rule of
 * each group is used only to encode the group number for hydration. An
 * alternative implementation could rely on CSSMediaRule, allowing groups to be
 * treated as a sub-sheet, but the Edge implementation of CSSMediaRule is
 * broken.
 * https://developer.mozilla.org/en-US/docs/Web/API/CSSMediaRule
 * https://gist.github.com/necolas/aa0c37846ad6bd3b05b727b959e82674
 */
function createOrderedCSSStyleSheet(sheet) {
  var groups = {};
  var selectors = {};

  /**
   * Hydrate approximate record from any existing rules in the sheet.
   */
  if (sheet != null) {
    var group;
    slice.call(sheet.cssRules).forEach((cssRule, i) => {
      var cssText = cssRule.cssText;
      // Create record of existing selectors and rules
      if (cssText.indexOf('stylesheet-group') > -1) {
        group = decodeGroupRule(cssRule);
        groups[group] = {
          start: i,
          rules: [cssText]
        };
      } else {
        var selectorText = getSelectorText(cssText);
        if (selectorText != null) {
          selectors[selectorText] = true;
          groups[group].rules.push(cssText);
        }
      }
    });
  }
  function sheetInsert(sheet, group, text) {
    var orderedGroups = getOrderedGroups(groups);
    var groupIndex = orderedGroups.indexOf(group);
    var nextGroupIndex = groupIndex + 1;
    var nextGroup = orderedGroups[nextGroupIndex];
    // Insert rule before the next group, or at the end of the stylesheet
    var position = nextGroup != null && groups[nextGroup].start != null ? groups[nextGroup].start : sheet.cssRules.length;
    var isInserted = insertRuleAt(sheet, text, position);
    if (isInserted) {
      // Set the starting index of the new group
      if (groups[group].start == null) {
        groups[group].start = position;
      }
      // Increment the starting index of all subsequent groups
      for (var i = nextGroupIndex; i < orderedGroups.length; i += 1) {
        var groupNumber = orderedGroups[i];
        var previousStart = groups[groupNumber].start || 0;
        groups[groupNumber].start = previousStart + 1;
      }
    }
    return isInserted;
  }
  var OrderedCSSStyleSheet = {
    /**
     * The textContent of the style sheet.
     */
    getTextContent() {
      return getOrderedGroups(groups).map(group => {
        var rules = groups[group].rules;
        // Sorting provides deterministic order of styles in group for
        // build-time extraction of the style sheet.
        var marker = rules.shift();
        rules.sort();
        rules.unshift(marker);
        return rules.join('\n');
      }).join('\n');
    },
    /**
     * Insert a rule into the style sheet
     */
    insert(cssText, groupValue) {
      var group = Number(groupValue);

      // Create a new group.
      if (groups[group] == null) {
        var markerRule = encodeGroupRule(group);
        // Create the internal record.
        groups[group] = {
          start: null,
          rules: [markerRule]
        };
        // Update CSSOM.
        if (sheet != null) {
          sheetInsert(sheet, group, markerRule);
        }
      }

      // selectorText is more reliable than cssText for insertion checks. The
      // browser excludes vendor-prefixed properties and rewrites certain values
      // making cssText more likely to be different from what was inserted.
      var selectorText = getSelectorText(cssText);
      if (selectorText != null && selectors[selectorText] == null) {
        // Update the internal records.
        selectors[selectorText] = true;
        groups[group].rules.push(cssText);
        // Update CSSOM.
        if (sheet != null) {
          var isInserted = sheetInsert(sheet, group, cssText);
          if (!isInserted) {
            // Revert internal record change if a rule was rejected (e.g.,
            // unrecognized pseudo-selector)
            groups[group].rules.pop();
          }
        }
      }
    }
  };
  return OrderedCSSStyleSheet;
}

/**
 * Helper functions
 */

function encodeGroupRule(group) {
  return "[stylesheet-group=\"" + group + "\"]{}";
}
var groupPattern = /["']/g;
function decodeGroupRule(cssRule) {
  return Number(cssRule.selectorText.split(groupPattern)[1]);
}
function getOrderedGroups(obj) {
  return Object.keys(obj).map(Number).sort((a, b) => a > b ? 1 : -1);
}
var selectorPattern = /\s*([,])\s*/g;
function getSelectorText(cssText) {
  var selector = cssText.split('{')[0].trim();
  return selector !== '' ? selector.replace(selectorPattern, '$1') : null;
}
function insertRuleAt(root, cssText, position) {
  try {
    // $FlowFixMe: Flow is missing CSSOM types needed to type 'root'.
    root.insertRule(cssText, position);
    return true;
  } catch (e) {
    // JSDOM doesn't support `CSSSMediaRule#insertRule`.
    // Also ignore errors that occur from attempting to insert vendor-prefixed selectors.
    return false;
  }
}

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var defaultId = 'react-native-stylesheet';
var roots = new WeakMap();
var sheets = [];
var initialRules = [
// minimal top-level reset
'html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}', 'body{margin:0;}',
// minimal form pseudo-element reset
'button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}', 'input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}'];
function createSheet(root, id) {
  if (id === void 0) {
    id = defaultId;
  }
  var sheet;
  if (canUseDOM$1) {
    var rootNode = root != null ? root.getRootNode() : document;
    // Create the initial style sheet
    if (sheets.length === 0) {
      sheet = createOrderedCSSStyleSheet(createCSSStyleSheet(id));
      initialRules.forEach(rule => {
        sheet.insert(rule, 0);
      });
      roots.set(rootNode, sheets.length);
      sheets.push(sheet);
    } else {
      var index = roots.get(rootNode);
      if (index == null) {
        var initialSheet = sheets[0];
        // If we're creating a new sheet, populate it with existing styles
        var textContent = initialSheet != null ? initialSheet.getTextContent() : '';
        // Cast rootNode to 'any' because Flow types for getRootNode are wrong
        sheet = createOrderedCSSStyleSheet(createCSSStyleSheet(id, rootNode, textContent));
        roots.set(rootNode, sheets.length);
        sheets.push(sheet);
      } else {
        sheet = sheets[index];
      }
    }
  } else {
    // Create the initial style sheet
    if (sheets.length === 0) {
      sheet = createOrderedCSSStyleSheet(createCSSStyleSheet(id));
      initialRules.forEach(rule => {
        sheet.insert(rule, 0);
      });
      sheets.push(sheet);
    } else {
      sheet = sheets[0];
    }
  }
  return {
    getTextContent() {
      return sheet.getTextContent();
    },
    id,
    insert(cssText, groupValue) {
      sheets.forEach(s => {
        s.insert(cssText, groupValue);
      });
    }
  };
}

var transformLocalizeStyle$1 = {};

/**
 * Copyright (c) Nicolas Gallagher
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(transformLocalizeStyle$1, "__esModule", {
  value: true
});
transformLocalizeStyle$1.localizeStyle = localizeStyle;
var cache$2 = new WeakMap();
var markerProp = '$$css$localize';
/**
 * The compiler polyfills logical properties and values, generating a class
 * name for both writing directions. The style objects are annotated by
 * the compiler as needing this runtime transform. The results are memoized.
 *
 * { '$$css$localize': true, float: [ 'float-left', 'float-right' ] }
 * => { float: 'float-left' }
 */

function compileStyle(style, isRTL) {
  // Create a new compiled style for styleq
  var compiledStyle = {};

  for (var prop in style) {
    if (prop !== markerProp) {
      var value = style[prop];

      if (Array.isArray(value)) {
        compiledStyle[prop] = isRTL ? value[1] : value[0];
      } else {
        compiledStyle[prop] = value;
      }
    }
  }

  return compiledStyle;
}

function localizeStyle(style, isRTL) {
  if (style[markerProp] != null) {
    var compiledStyleIndex = isRTL ? 1 : 0; // Check the cache in case we've already seen this object

    if (cache$2.has(style)) {
      var _cachedStyles = cache$2.get(style);

      var _compiledStyle = _cachedStyles[compiledStyleIndex];

      if (_compiledStyle == null) {
        // Update the missing cache entry
        _compiledStyle = compileStyle(style, isRTL);
        _cachedStyles[compiledStyleIndex] = _compiledStyle;
        cache$2.set(style, _cachedStyles);
      }

      return _compiledStyle;
    } // Create a new compiled style for styleq


    var compiledStyle = compileStyle(style, isRTL);
    var cachedStyles = new Array(2);
    cachedStyles[compiledStyleIndex] = compiledStyle;
    cache$2.set(style, cachedStyles);
    return compiledStyle;
  }

  return style;
}

/**
 * Copyright (c) Nicolas Gallagher
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var transformLocalizeStyle = transformLocalizeStyle$1;

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var emptyObject$4 = {};

/**
 * Shadows
 */

var defaultOffset = {
  height: 0,
  width: 0
};
var createBoxShadowValue = style => {
  var shadowColor = style.shadowColor,
    shadowOffset = style.shadowOffset,
    shadowOpacity = style.shadowOpacity,
    shadowRadius = style.shadowRadius;
  var _ref = shadowOffset || defaultOffset,
    height = _ref.height,
    width = _ref.width;
  var offsetX = normalizeValueWithProperty(width);
  var offsetY = normalizeValueWithProperty(height);
  var blurRadius = normalizeValueWithProperty(shadowRadius || 0);
  var color = normalizeColor$1(shadowColor || 'black', shadowOpacity);
  if (color != null && offsetX != null && offsetY != null && blurRadius != null) {
    return offsetX + " " + offsetY + " " + blurRadius + " " + color;
  }
};
var createTextShadowValue = style => {
  var textShadowColor = style.textShadowColor,
    textShadowOffset = style.textShadowOffset,
    textShadowRadius = style.textShadowRadius;
  var _ref2 = textShadowOffset || defaultOffset,
    height = _ref2.height,
    width = _ref2.width;
  var radius = textShadowRadius || 0;
  var offsetX = normalizeValueWithProperty(width);
  var offsetY = normalizeValueWithProperty(height);
  var blurRadius = normalizeValueWithProperty(radius);
  var color = normalizeValueWithProperty(textShadowColor, 'textShadowColor');
  if (color && (height !== 0 || width !== 0 || radius !== 0) && offsetX != null && offsetY != null && blurRadius != null) {
    return offsetX + " " + offsetY + " " + blurRadius + " " + color;
  }
};

// { scale: 2 } => 'scale(2)'
// { translateX: 20 } => 'translateX(20px)'
// { matrix: [1,2,3,4,5,6] } => 'matrix(1,2,3,4,5,6)'
var mapTransform = transform => {
  var type = Object.keys(transform)[0];
  var value = transform[type];
  if (type === 'matrix' || type === 'matrix3d') {
    return type + "(" + value.join(',') + ")";
  } else {
    var normalizedValue = normalizeValueWithProperty(value, type);
    return type + "(" + normalizedValue + ")";
  }
};
var createTransformValue = value => {
  return value.map(mapTransform).join(' ');
};
var PROPERTIES_STANDARD = {
  borderBottomEndRadius: 'borderEndEndRadius',
  borderBottomStartRadius: 'borderEndStartRadius',
  borderTopEndRadius: 'borderStartEndRadius',
  borderTopStartRadius: 'borderStartStartRadius',
  borderEndColor: 'borderInlineEndColor',
  borderEndStyle: 'borderInlineEndStyle',
  borderEndWidth: 'borderInlineEndWidth',
  borderStartColor: 'borderInlineStartColor',
  borderStartStyle: 'borderInlineStartStyle',
  borderStartWidth: 'borderInlineStartWidth',
  end: 'insetInlineEnd',
  marginEnd: 'marginInlineEnd',
  marginHorizontal: 'marginInline',
  marginStart: 'marginInlineStart',
  marginVertical: 'marginBlock',
  paddingEnd: 'paddingInlineEnd',
  paddingHorizontal: 'paddingInline',
  paddingStart: 'paddingInlineStart',
  paddingVertical: 'paddingBlock',
  start: 'insetInlineStart'
};
var ignoredProps = {
  elevation: true,
  overlayColor: true,
  resizeMode: true,
  tintColor: true
};

/**
 * Preprocess styles
 */
var preprocess = function preprocess(originalStyle, options) {
  if (options === void 0) {
    options = {};
  }
  var style = originalStyle || emptyObject$4;
  var nextStyle = {};

  // Convert shadow styles
  if (options.shadow === true, style.shadowColor != null || style.shadowOffset != null || style.shadowOpacity != null || style.shadowRadius != null) {
    var boxShadowValue = createBoxShadowValue(style);
    if (boxShadowValue != null && nextStyle.boxShadow == null) {
      var boxShadow = style.boxShadow;
      var value = boxShadow ? boxShadow + ", " + boxShadowValue : boxShadowValue;
      nextStyle.boxShadow = value;
    }
  }

  // Convert text shadow styles
  if (options.textShadow === true, style.textShadowColor != null || style.textShadowOffset != null || style.textShadowRadius != null) {
    var textShadowValue = createTextShadowValue(style);
    if (textShadowValue != null && nextStyle.textShadow == null) {
      var textShadow = style.textShadow;
      var _value = textShadow ? textShadow + ", " + textShadowValue : textShadowValue;
      nextStyle.textShadow = _value;
    }
  }
  for (var originalProp in style) {
    if (
    // Ignore some React Native styles
    ignoredProps[originalProp] != null || originalProp === 'shadowColor' || originalProp === 'shadowOffset' || originalProp === 'shadowOpacity' || originalProp === 'shadowRadius' || originalProp === 'textShadowColor' || originalProp === 'textShadowOffset' || originalProp === 'textShadowRadius') {
      continue;
    }
    var originalValue = style[originalProp];
    var prop = PROPERTIES_STANDARD[originalProp] || originalProp;
    var _value2 = originalValue;
    if (!Object.prototype.hasOwnProperty.call(style, originalProp) || prop !== originalProp && style[prop] != null) {
      continue;
    }
    if (prop === 'aspectRatio' && typeof _value2 === 'number') {
      nextStyle[prop] = _value2.toString();
    } else if (prop === 'fontVariant') {
      if (Array.isArray(_value2) && _value2.length > 0) {
        /*
        warnOnce(
          'fontVariant',
          '"fontVariant" style array value is deprecated. Use space-separated values.'
        );
        */
        _value2 = _value2.join(' ');
      }
      nextStyle[prop] = _value2;
    } else if (prop === 'textAlignVertical') {
      /*
      warnOnce(
        'textAlignVertical',
        '"textAlignVertical" style is deprecated. Use "verticalAlign".'
      );
      */
      if (style.verticalAlign == null) {
        nextStyle.verticalAlign = _value2 === 'center' ? 'middle' : _value2;
      }
    } else if (prop === 'transform') {
      if (Array.isArray(_value2)) {
        _value2 = createTransformValue(_value2);
      }
      nextStyle.transform = _value2;
    } else {
      nextStyle[prop] = _value2;
    }
  }

  // $FlowIgnore
  return nextStyle;
};

var styleq$1 = {};

/**
 * Copyright (c) Nicolas Gallagher
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

Object.defineProperty(styleq$1, "__esModule", {
  value: true
});
var styleq_2 = styleq$1.styleq = void 0;
var cache$1 = new WeakMap();
var compiledKey = '$$css';

function createStyleq(options) {
  var disableCache;
  var disableMix;
  var transform;

  if (options != null) {
    disableCache = options.disableCache === true;
    disableMix = options.disableMix === true;
    transform = options.transform;
  }

  return function styleq() {
    // Keep track of property commits to the className
    var definedProperties = []; // The className and inline style to build up

    var className = '';
    var inlineStyle = null; // The current position in the cache graph

    var nextCache = disableCache ? null : cache$1; // This way of creating an array from arguments is fastest

    var styles = new Array(arguments.length);

    for (var i = 0; i < arguments.length; i++) {
      styles[i] = arguments[i];
    } // Iterate over styles from last to first


    while (styles.length > 0) {
      var possibleStyle = styles.pop(); // Skip empty items

      if (possibleStyle == null || possibleStyle === false) {
        continue;
      } // Push nested styles back onto the stack to be processed


      if (Array.isArray(possibleStyle)) {
        for (var _i = 0; _i < possibleStyle.length; _i++) {
          styles.push(possibleStyle[_i]);
        }

        continue;
      } // Process an individual style object


      var style = transform != null ? transform(possibleStyle) : possibleStyle;

      if (style.$$css) {
        // Build up the class names defined by this object
        var classNameChunk = ''; // Check the cache to see if we've already done this work

        if (nextCache != null && nextCache.has(style)) {
          // Cache: read
          var cacheEntry = nextCache.get(style);

          if (cacheEntry != null) {
            classNameChunk = cacheEntry[0]; // $FlowIgnore

            definedProperties.push.apply(definedProperties, cacheEntry[1]);
            nextCache = cacheEntry[2];
          }
        } // Update the chunks with data from this object
        else {
          // The properties defined by this object
          var definedPropertiesChunk = [];

          for (var prop in style) {
            var value = style[prop];
            if (prop === compiledKey) continue; // Each property value is used as an HTML class name
            // { 'debug.string': 'debug.string', opacity: 's-jskmnoqp' }

            if (typeof value === 'string' || value === null) {
              // Only add to chunks if this property hasn't already been seen
              if (!definedProperties.includes(prop)) {
                definedProperties.push(prop);

                if (nextCache != null) {
                  definedPropertiesChunk.push(prop);
                }

                if (typeof value === 'string') {
                  classNameChunk += classNameChunk ? ' ' + value : value;
                }
              }
            } // If we encounter a value that isn't a string or `null`
            else {
              console.error("styleq: ".concat(prop, " typeof ").concat(String(value), " is not \"string\" or \"null\"."));
            }
          } // Cache: write


          if (nextCache != null) {
            // Create the next WeakMap for this sequence of styles
            var weakMap = new WeakMap();
            nextCache.set(style, [classNameChunk, definedPropertiesChunk, weakMap]);
            nextCache = weakMap;
          }
        } // Order of classes in chunks matches property-iteration order of style
        // object. Order of chunks matches passed order of styles from first to
        // last (which we iterate over in reverse).


        if (classNameChunk) {
          className = className ? classNameChunk + ' ' + className : classNameChunk;
        }
      } // ----- DYNAMIC: Process inline style object -----
      else {
        if (disableMix) {
          if (inlineStyle == null) {
            inlineStyle = {};
          }

          inlineStyle = Object.assign({}, style, inlineStyle);
        } else {
          var subStyle = null;

          for (var _prop in style) {
            var _value = style[_prop];

            if (_value !== undefined) {
              if (!definedProperties.includes(_prop)) {
                if (_value != null) {
                  if (inlineStyle == null) {
                    inlineStyle = {};
                  }

                  if (subStyle == null) {
                    subStyle = {};
                  }

                  subStyle[_prop] = _value;
                }

                definedProperties.push(_prop); // Cache is unnecessary overhead if results can't be reused.

                nextCache = null;
              }
            }
          }

          if (subStyle != null) {
            inlineStyle = Object.assign(subStyle, inlineStyle);
          }
        }
      }
    }

    var styleProps = [className, inlineStyle];
    return styleProps;
  };
}

var styleq = createStyleq();
styleq_2 = styleq$1.styleq = styleq;
styleq.factory = createStyleq;

var _excluded$3 = ["writingDirection"];
var staticStyleMap = new WeakMap();
var sheet = createSheet();
var defaultPreprocessOptions = {
  shadow: true,
  textShadow: true
};
function customStyleq(styles, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options,
    writingDirection = _options.writingDirection,
    preprocessOptions = _objectWithoutPropertiesLoose(_options, _excluded$3);
  var isRTL = writingDirection === 'rtl';
  return styleq_2.factory({
    transform(style) {
      var compiledStyle = staticStyleMap.get(style);
      if (compiledStyle != null) {
        return transformLocalizeStyle.localizeStyle(compiledStyle, isRTL);
      }
      return preprocess(style, _objectSpread2(_objectSpread2({}, defaultPreprocessOptions), preprocessOptions));
    }
  })(styles);
}
function insertRules(compiledOrderedRules) {
  compiledOrderedRules.forEach(_ref => {
    var rules = _ref[0],
      order = _ref[1];
    if (sheet != null) {
      rules.forEach(rule => {
        sheet.insert(rule, order);
      });
    }
  });
}
function compileAndInsertAtomic(style) {
  var _atomic = atomic(preprocess(style, defaultPreprocessOptions)),
    compiledStyle = _atomic[0],
    compiledOrderedRules = _atomic[1];
  insertRules(compiledOrderedRules);
  return compiledStyle;
}
function compileAndInsertReset(style, key) {
  var _classic = classic(style, key),
    compiledStyle = _classic[0],
    compiledOrderedRules = _classic[1];
  insertRules(compiledOrderedRules);
  return compiledStyle;
}

/* ----- API ----- */

var absoluteFillObject = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
var absoluteFill = create({
  x: _objectSpread2({}, absoluteFillObject)
}).x;

/**
 * create
 */
function create(styles) {
  Object.keys(styles).forEach(key => {
    var styleObj = styles[key];
    // Only compile at runtime if the style is not already compiled
    if (styleObj != null && styleObj.$$css !== true) {
      var compiledStyles;
      if (key.indexOf('$raw') > -1) {
        compiledStyles = compileAndInsertReset(styleObj, key.split('$raw')[0]);
      } else {
        compiledStyles = compileAndInsertAtomic(styleObj);
      }
      staticStyleMap.set(styleObj, compiledStyles);
    }
  });
  return styles;
}

/**
 * compose
 */
function compose(style1, style2) {
  return [style1, style2];
}

/**
 * flatten
 */
function flatten() {
  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }
  var flatArray = styles.flat(Infinity);
  var result = {};
  for (var i = 0; i < flatArray.length; i++) {
    var style = flatArray[i];
    if (style != null && typeof style === 'object') {
      // $FlowFixMe
      Object.assign(result, style);
    }
  }
  return result;
}

/**
 * getSheet
 */
function getSheet() {
  return {
    id: sheet.id,
    textContent: sheet.getTextContent()
  };
}

/**
 * resolve
 */

function StyleSheet(styles, options) {
  if (options === void 0) {
    options = {};
  }
  var isRTL = options.writingDirection === 'rtl';
  var styleProps = customStyleq(styles, options);
  if (Array.isArray(styleProps) && styleProps[1] != null) {
    styleProps[1] = inline(styleProps[1], isRTL);
  }
  return styleProps;
}
StyleSheet.absoluteFill = absoluteFill;
StyleSheet.absoluteFillObject = absoluteFillObject;
StyleSheet.create = create;
StyleSheet.compose = compose;
StyleSheet.flatten = flatten;
StyleSheet.getSheet = getSheet;
// `hairlineWidth` is not implemented using screen density as browsers may
// round sub-pixel values down to `0`, causing the line not to be rendered.
StyleSheet.hairlineWidth = 1;
if (canUseDOM$1 && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle = StyleSheet.flatten;
}
var stylesheet = StyleSheet;
const StyleSheet$1 = stylesheet;

var _excluded$2 = ["aria-activedescendant", "accessibilityActiveDescendant", "aria-atomic", "accessibilityAtomic", "aria-autocomplete", "accessibilityAutoComplete", "aria-busy", "accessibilityBusy", "aria-checked", "accessibilityChecked", "aria-colcount", "accessibilityColumnCount", "aria-colindex", "accessibilityColumnIndex", "aria-colspan", "accessibilityColumnSpan", "aria-controls", "accessibilityControls", "aria-current", "accessibilityCurrent", "aria-describedby", "accessibilityDescribedBy", "aria-details", "accessibilityDetails", "aria-disabled", "accessibilityDisabled", "aria-errormessage", "accessibilityErrorMessage", "aria-expanded", "accessibilityExpanded", "aria-flowto", "accessibilityFlowTo", "aria-haspopup", "accessibilityHasPopup", "aria-hidden", "accessibilityHidden", "aria-invalid", "accessibilityInvalid", "aria-keyshortcuts", "accessibilityKeyShortcuts", "aria-label", "accessibilityLabel", "aria-labelledby", "accessibilityLabelledBy", "aria-level", "accessibilityLevel", "aria-live", "accessibilityLiveRegion", "aria-modal", "accessibilityModal", "aria-multiline", "accessibilityMultiline", "aria-multiselectable", "accessibilityMultiSelectable", "aria-orientation", "accessibilityOrientation", "aria-owns", "accessibilityOwns", "aria-placeholder", "accessibilityPlaceholder", "aria-posinset", "accessibilityPosInSet", "aria-pressed", "accessibilityPressed", "aria-readonly", "accessibilityReadOnly", "aria-required", "accessibilityRequired", "role", "accessibilityRole", "aria-roledescription", "accessibilityRoleDescription", "aria-rowcount", "accessibilityRowCount", "aria-rowindex", "accessibilityRowIndex", "aria-rowspan", "accessibilityRowSpan", "aria-selected", "accessibilitySelected", "aria-setsize", "accessibilitySetSize", "aria-sort", "accessibilitySort", "aria-valuemax", "accessibilityValueMax", "aria-valuemin", "accessibilityValueMin", "aria-valuenow", "accessibilityValueNow", "aria-valuetext", "accessibilityValueText", "dataSet", "focusable", "id", "nativeID", "pointerEvents", "style", "tabIndex", "testID"];
var emptyObject$3 = {};
var hasOwnProperty = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var uppercasePattern = /[A-Z]/g;
function toHyphenLower(match) {
  return '-' + match.toLowerCase();
}
function hyphenateString(str) {
  return str.replace(uppercasePattern, toHyphenLower);
}
function processIDRefList(idRefList) {
  return isArray(idRefList) ? idRefList.join(' ') : idRefList;
}
var pointerEventsStyles = StyleSheet$1.create({
  auto: {
    pointerEvents: 'auto'
  },
  'box-none': {
    pointerEvents: 'box-none'
  },
  'box-only': {
    pointerEvents: 'box-only'
  },
  none: {
    pointerEvents: 'none'
  }
});
var createDOMProps = (elementType, props, options) => {
  if (!props) {
    props = emptyObject$3;
  }
  var _props = props,
    ariaActiveDescendant = _props['aria-activedescendant'],
    accessibilityActiveDescendant = _props.accessibilityActiveDescendant,
    ariaAtomic = _props['aria-atomic'],
    accessibilityAtomic = _props.accessibilityAtomic,
    ariaAutoComplete = _props['aria-autocomplete'],
    accessibilityAutoComplete = _props.accessibilityAutoComplete,
    ariaBusy = _props['aria-busy'],
    accessibilityBusy = _props.accessibilityBusy,
    ariaChecked = _props['aria-checked'],
    accessibilityChecked = _props.accessibilityChecked,
    ariaColumnCount = _props['aria-colcount'],
    accessibilityColumnCount = _props.accessibilityColumnCount,
    ariaColumnIndex = _props['aria-colindex'],
    accessibilityColumnIndex = _props.accessibilityColumnIndex,
    ariaColumnSpan = _props['aria-colspan'],
    accessibilityColumnSpan = _props.accessibilityColumnSpan,
    ariaControls = _props['aria-controls'],
    accessibilityControls = _props.accessibilityControls,
    ariaCurrent = _props['aria-current'],
    accessibilityCurrent = _props.accessibilityCurrent,
    ariaDescribedBy = _props['aria-describedby'],
    accessibilityDescribedBy = _props.accessibilityDescribedBy,
    ariaDetails = _props['aria-details'],
    accessibilityDetails = _props.accessibilityDetails,
    ariaDisabled = _props['aria-disabled'],
    accessibilityDisabled = _props.accessibilityDisabled,
    ariaErrorMessage = _props['aria-errormessage'],
    accessibilityErrorMessage = _props.accessibilityErrorMessage,
    ariaExpanded = _props['aria-expanded'],
    accessibilityExpanded = _props.accessibilityExpanded,
    ariaFlowTo = _props['aria-flowto'],
    accessibilityFlowTo = _props.accessibilityFlowTo,
    ariaHasPopup = _props['aria-haspopup'],
    accessibilityHasPopup = _props.accessibilityHasPopup,
    ariaHidden = _props['aria-hidden'],
    accessibilityHidden = _props.accessibilityHidden,
    ariaInvalid = _props['aria-invalid'],
    accessibilityInvalid = _props.accessibilityInvalid,
    ariaKeyShortcuts = _props['aria-keyshortcuts'],
    accessibilityKeyShortcuts = _props.accessibilityKeyShortcuts,
    ariaLabel = _props['aria-label'],
    accessibilityLabel = _props.accessibilityLabel,
    ariaLabelledBy = _props['aria-labelledby'],
    accessibilityLabelledBy = _props.accessibilityLabelledBy,
    ariaLevel = _props['aria-level'],
    accessibilityLevel = _props.accessibilityLevel,
    ariaLive = _props['aria-live'],
    accessibilityLiveRegion = _props.accessibilityLiveRegion,
    ariaModal = _props['aria-modal'],
    accessibilityModal = _props.accessibilityModal,
    ariaMultiline = _props['aria-multiline'],
    accessibilityMultiline = _props.accessibilityMultiline,
    ariaMultiSelectable = _props['aria-multiselectable'],
    accessibilityMultiSelectable = _props.accessibilityMultiSelectable,
    ariaOrientation = _props['aria-orientation'],
    accessibilityOrientation = _props.accessibilityOrientation,
    ariaOwns = _props['aria-owns'],
    accessibilityOwns = _props.accessibilityOwns,
    ariaPlaceholder = _props['aria-placeholder'],
    accessibilityPlaceholder = _props.accessibilityPlaceholder,
    ariaPosInSet = _props['aria-posinset'],
    accessibilityPosInSet = _props.accessibilityPosInSet,
    ariaPressed = _props['aria-pressed'],
    accessibilityPressed = _props.accessibilityPressed,
    ariaReadOnly = _props['aria-readonly'],
    accessibilityReadOnly = _props.accessibilityReadOnly,
    ariaRequired = _props['aria-required'],
    accessibilityRequired = _props.accessibilityRequired;
    _props.role;
    _props.accessibilityRole;
    var ariaRoleDescription = _props['aria-roledescription'],
    accessibilityRoleDescription = _props.accessibilityRoleDescription,
    ariaRowCount = _props['aria-rowcount'],
    accessibilityRowCount = _props.accessibilityRowCount,
    ariaRowIndex = _props['aria-rowindex'],
    accessibilityRowIndex = _props.accessibilityRowIndex,
    ariaRowSpan = _props['aria-rowspan'],
    accessibilityRowSpan = _props.accessibilityRowSpan,
    ariaSelected = _props['aria-selected'],
    accessibilitySelected = _props.accessibilitySelected,
    ariaSetSize = _props['aria-setsize'],
    accessibilitySetSize = _props.accessibilitySetSize,
    ariaSort = _props['aria-sort'],
    accessibilitySort = _props.accessibilitySort,
    ariaValueMax = _props['aria-valuemax'],
    accessibilityValueMax = _props.accessibilityValueMax,
    ariaValueMin = _props['aria-valuemin'],
    accessibilityValueMin = _props.accessibilityValueMin,
    ariaValueNow = _props['aria-valuenow'],
    accessibilityValueNow = _props.accessibilityValueNow,
    ariaValueText = _props['aria-valuetext'],
    accessibilityValueText = _props.accessibilityValueText,
    dataSet = _props.dataSet,
    focusable = _props.focusable,
    id = _props.id,
    nativeID = _props.nativeID,
    pointerEvents = _props.pointerEvents,
    style = _props.style,
    tabIndex = _props.tabIndex,
    testID = _props.testID,
    domProps = _objectWithoutPropertiesLoose(_props, _excluded$2);

  /*
  if (accessibilityDisabled != null) {
    warnOnce('accessibilityDisabled', `accessibilityDisabled is deprecated.`);
  }
  */
  var disabled = ariaDisabled || accessibilityDisabled;
  var role = AccessibilityUtil$1.propsToAriaRole(props);

  // ACCESSIBILITY
  /*
  if (accessibilityActiveDescendant != null) {
    warnOnce(
      'accessibilityActiveDescendant',
      `accessibilityActiveDescendant is deprecated. Use aria-activedescendant.`
    );
  }
  */
  var _ariaActiveDescendant = ariaActiveDescendant != null ? ariaActiveDescendant : accessibilityActiveDescendant;
  if (_ariaActiveDescendant != null) {
    domProps['aria-activedescendant'] = _ariaActiveDescendant;
  }

  /*
  if (accessibilityAtomic != null) {
    warnOnce(
      'accessibilityAtomic',
      `accessibilityAtomic is deprecated. Use aria-atomic.`
    );
  }
  */
  var _ariaAtomic = ariaAtomic != null ? ariaActiveDescendant : accessibilityAtomic;
  if (_ariaAtomic != null) {
    domProps['aria-atomic'] = _ariaAtomic;
  }

  /*
  if (accessibilityAutoComplete != null) {
    warnOnce(
      'accessibilityAutoComplete',
      `accessibilityAutoComplete is deprecated. Use aria-autocomplete.`
    );
  }
  */
  var _ariaAutoComplete = ariaAutoComplete != null ? ariaAutoComplete : accessibilityAutoComplete;
  if (_ariaAutoComplete != null) {
    domProps['aria-autocomplete'] = _ariaAutoComplete;
  }

  /*
  if (accessibilityBusy != null) {
    warnOnce(
      'accessibilityBusy',
      `accessibilityBusy is deprecated. Use aria-busy.`
    );
  }
  */
  var _ariaBusy = ariaBusy != null ? ariaBusy : accessibilityBusy;
  if (_ariaBusy != null) {
    domProps['aria-busy'] = _ariaBusy;
  }

  /*
  if (accessibilityChecked != null) {
    warnOnce(
      'accessibilityChecked',
      `accessibilityChecked is deprecated. Use aria-checked.`
    );
  }
  */
  var _ariaChecked = ariaChecked != null ? ariaChecked : accessibilityChecked;
  if (_ariaChecked != null) {
    domProps['aria-checked'] = _ariaChecked;
  }

  /*
  if (accessibilityColumnCount != null) {
    warnOnce(
      'accessibilityColumnCount',
      `accessibilityColumnCount is deprecated. Use aria-colcount.`
    );
  }
  */
  var _ariaColumnCount = ariaColumnCount != null ? ariaColumnCount : accessibilityColumnCount;
  if (_ariaColumnCount != null) {
    domProps['aria-colcount'] = _ariaColumnCount;
  }

  /*
  if (accessibilityColumnIndex != null) {
    warnOnce(
      'accessibilityColumnIndex',
      `accessibilityColumnIndex is deprecated. Use aria-colindex.`
    );
  }
  */
  var _ariaColumnIndex = ariaColumnIndex != null ? ariaColumnIndex : accessibilityColumnIndex;
  if (_ariaColumnIndex != null) {
    domProps['aria-colindex'] = _ariaColumnIndex;
  }

  /*
  if (accessibilityColumnSpan != null) {
    warnOnce(
      'accessibilityColumnSpan',
      `accessibilityColumnSpan is deprecated. Use aria-colspan.`
    );
  }
  */
  var _ariaColumnSpan = ariaColumnSpan != null ? ariaColumnSpan : accessibilityColumnSpan;
  if (_ariaColumnSpan != null) {
    domProps['aria-colspan'] = _ariaColumnSpan;
  }

  /*
  if (accessibilityControls != null) {
    warnOnce(
      'accessibilityControls',
      `accessibilityControls is deprecated. Use aria-controls.`
    );
  }
  */
  var _ariaControls = ariaControls != null ? ariaControls : accessibilityControls;
  if (_ariaControls != null) {
    domProps['aria-controls'] = processIDRefList(_ariaControls);
  }

  /*
  if (accessibilityCurrent != null) {
    warnOnce(
      'accessibilityCurrent',
      `accessibilityCurrent is deprecated. Use aria-current.`
    );
  }
  */
  var _ariaCurrent = ariaCurrent != null ? ariaCurrent : accessibilityCurrent;
  if (_ariaCurrent != null) {
    domProps['aria-current'] = _ariaCurrent;
  }

  /*
  if (accessibilityDescribedBy != null) {
    warnOnce(
      'accessibilityDescribedBy',
      `accessibilityDescribedBy is deprecated. Use aria-describedby.`
    );
  }
  */
  var _ariaDescribedBy = ariaDescribedBy != null ? ariaDescribedBy : accessibilityDescribedBy;
  if (_ariaDescribedBy != null) {
    domProps['aria-describedby'] = processIDRefList(_ariaDescribedBy);
  }

  /*
  if (accessibilityDetails != null) {
    warnOnce(
      'accessibilityDetails',
      `accessibilityDetails is deprecated. Use aria-details.`
    );
  }
  */
  var _ariaDetails = ariaDetails != null ? ariaDetails : accessibilityDetails;
  if (_ariaDetails != null) {
    domProps['aria-details'] = _ariaDetails;
  }
  if (disabled === true) {
    domProps['aria-disabled'] = true;
    // Enhance with native semantics
    if (elementType === 'button' || elementType === 'form' || elementType === 'input' || elementType === 'select' || elementType === 'textarea') {
      domProps.disabled = true;
    }
  }

  /*
  if (accessibilityErrorMessage != null) {
    warnOnce(
      'accessibilityErrorMessage',
      `accessibilityErrorMessage is deprecated. Use aria-errormessage.`
    );
  }
  */
  var _ariaErrorMessage = ariaErrorMessage != null ? ariaErrorMessage : accessibilityErrorMessage;
  if (_ariaErrorMessage != null) {
    domProps['aria-errormessage'] = _ariaErrorMessage;
  }

  /*
  if (accessibilityExpanded != null) {
    warnOnce(
      'accessibilityExpanded',
      `accessibilityExpanded is deprecated. Use aria-expanded.`
    );
  }
  */
  var _ariaExpanded = ariaExpanded != null ? ariaExpanded : accessibilityExpanded;
  if (_ariaExpanded != null) {
    domProps['aria-expanded'] = _ariaExpanded;
  }

  /*
  if (accessibilityFlowTo != null) {
    warnOnce(
      'accessibilityFlowTo',
      `accessibilityFlowTo is deprecated. Use aria-flowto.`
    );
  }
  */
  var _ariaFlowTo = ariaFlowTo != null ? ariaFlowTo : accessibilityFlowTo;
  if (_ariaFlowTo != null) {
    domProps['aria-flowto'] = processIDRefList(_ariaFlowTo);
  }

  /*
  if (accessibilityHasPopup != null) {
    warnOnce(
      'accessibilityHasPopup',
      `accessibilityHasPopup is deprecated. Use aria-haspopup.`
    );
  }
  */
  var _ariaHasPopup = ariaHasPopup != null ? ariaHasPopup : accessibilityHasPopup;
  if (_ariaHasPopup != null) {
    domProps['aria-haspopup'] = _ariaHasPopup;
  }

  /*
  if (accessibilityHidden != null) {
    warnOnce(
      'accessibilityHidden',
      `accessibilityHidden is deprecated. Use aria-hidden.`
    );
  }
  */
  var _ariaHidden = ariaHidden != null ? ariaHidden : accessibilityHidden;
  if (_ariaHidden === true) {
    domProps['aria-hidden'] = _ariaHidden;
  }

  /*
  if (accessibilityInvalid != null) {
    warnOnce(
      'accessibilityInvalid',
      `accessibilityInvalid is deprecated. Use aria-invalid.`
    );
  }
  */
  var _ariaInvalid = ariaInvalid != null ? ariaInvalid : accessibilityInvalid;
  if (_ariaInvalid != null) {
    domProps['aria-invalid'] = _ariaInvalid;
  }

  /*
  if (accessibilityKeyShortcuts != null) {
    warnOnce(
      'accessibilityKeyShortcuts',
      `accessibilityKeyShortcuts is deprecated. Use aria-keyshortcuts.`
    );
  }
  */
  var _ariaKeyShortcuts = ariaKeyShortcuts != null ? ariaKeyShortcuts : accessibilityKeyShortcuts;
  if (_ariaKeyShortcuts != null) {
    domProps['aria-keyshortcuts'] = processIDRefList(_ariaKeyShortcuts);
  }

  /*
  if (accessibilityLabel != null) {
    warnOnce(
      'accessibilityLabel',
      `accessibilityLabel is deprecated. Use aria-label.`
    );
  }
  */
  var _ariaLabel = ariaLabel != null ? ariaLabel : accessibilityLabel;
  if (_ariaLabel != null) {
    domProps['aria-label'] = _ariaLabel;
  }

  /*
  if (accessibilityLabelledBy != null) {
    warnOnce(
      'accessibilityLabelledBy',
      `accessibilityLabelledBy is deprecated. Use aria-labelledby.`
    );
  }
  */
  var _ariaLabelledBy = ariaLabelledBy != null ? ariaLabelledBy : accessibilityLabelledBy;
  if (_ariaLabelledBy != null) {
    domProps['aria-labelledby'] = processIDRefList(_ariaLabelledBy);
  }

  /*
  if (accessibilityLevel != null) {
    warnOnce(
      'accessibilityLevel',
      `accessibilityLevel is deprecated. Use aria-level.`
    );
  }
  */
  var _ariaLevel = ariaLevel != null ? ariaLevel : accessibilityLevel;
  if (_ariaLevel != null) {
    domProps['aria-level'] = _ariaLevel;
  }

  /*
  if (accessibilityLiveRegion != null) {
    warnOnce(
      'accessibilityLiveRegion',
      `accessibilityLiveRegion is deprecated. Use aria-live.`
    );
  }
  */
  var _ariaLive = ariaLive != null ? ariaLive : accessibilityLiveRegion;
  if (_ariaLive != null) {
    domProps['aria-live'] = _ariaLive === 'none' ? 'off' : _ariaLive;
  }

  /*
  if (accessibilityModal != null) {
    warnOnce(
      'accessibilityModal',
      `accessibilityModal is deprecated. Use aria-modal.`
    );
  }
  */
  var _ariaModal = ariaModal != null ? ariaModal : accessibilityModal;
  if (_ariaModal != null) {
    domProps['aria-modal'] = _ariaModal;
  }

  /*
  if (accessibilityMultiline != null) {
    warnOnce(
      'accessibilityMultiline',
      `accessibilityMultiline is deprecated. Use aria-multiline.`
    );
  }
  */
  var _ariaMultiline = ariaMultiline != null ? ariaMultiline : accessibilityMultiline;
  if (_ariaMultiline != null) {
    domProps['aria-multiline'] = _ariaMultiline;
  }

  /*
  if (accessibilityMultiSelectable != null) {
    warnOnce(
      'accessibilityMultiSelectable',
      `accessibilityMultiSelectable is deprecated. Use aria-multiselectable.`
    );
  }
  */
  var _ariaMultiSelectable = ariaMultiSelectable != null ? ariaMultiSelectable : accessibilityMultiSelectable;
  if (_ariaMultiSelectable != null) {
    domProps['aria-multiselectable'] = _ariaMultiSelectable;
  }

  /*
  if (accessibilityOrientation != null) {
    warnOnce(
      'accessibilityOrientation',
      `accessibilityOrientation is deprecated. Use aria-orientation.`
    );
  }
  */
  var _ariaOrientation = ariaOrientation != null ? ariaOrientation : accessibilityOrientation;
  if (_ariaOrientation != null) {
    domProps['aria-orientation'] = _ariaOrientation;
  }

  /*
  if (accessibilityOwns != null) {
    warnOnce(
      'accessibilityOwns',
      `accessibilityOwns is deprecated. Use aria-owns.`
    );
  }
  */
  var _ariaOwns = ariaOwns != null ? ariaOwns : accessibilityOwns;
  if (_ariaOwns != null) {
    domProps['aria-owns'] = processIDRefList(_ariaOwns);
  }

  /*
  if (accessibilityPlaceholder != null) {
    warnOnce(
      'accessibilityPlaceholder',
      `accessibilityPlaceholder is deprecated. Use aria-placeholder.`
    );
  }
  */
  var _ariaPlaceholder = ariaPlaceholder != null ? ariaPlaceholder : accessibilityPlaceholder;
  if (_ariaPlaceholder != null) {
    domProps['aria-placeholder'] = _ariaPlaceholder;
  }

  /*
  if (accessibilityPosInSet != null) {
    warnOnce(
      'accessibilityPosInSet',
      `accessibilityPosInSet is deprecated. Use aria-posinset.`
    );
  }
  */
  var _ariaPosInSet = ariaPosInSet != null ? ariaPosInSet : accessibilityPosInSet;
  if (_ariaPosInSet != null) {
    domProps['aria-posinset'] = _ariaPosInSet;
  }

  /*
  if (accessibilityPressed != null) {
    warnOnce(
      'accessibilityPressed',
      `accessibilityPressed is deprecated. Use aria-pressed.`
    );
  }
  */
  var _ariaPressed = ariaPressed != null ? ariaPressed : accessibilityPressed;
  if (_ariaPressed != null) {
    domProps['aria-pressed'] = _ariaPressed;
  }

  /*
  if (accessibilityReadOnly != null) {
    warnOnce(
      'accessibilityReadOnly',
      `accessibilityReadOnly is deprecated. Use aria-readonly.`
    );
  }
  */
  var _ariaReadOnly = ariaReadOnly != null ? ariaReadOnly : accessibilityReadOnly;
  if (_ariaReadOnly != null) {
    domProps['aria-readonly'] = _ariaReadOnly;
    // Enhance with native semantics
    if (elementType === 'input' || elementType === 'select' || elementType === 'textarea') {
      domProps.readOnly = true;
    }
  }

  /*
  if (accessibilityRequired != null) {
    warnOnce(
      'accessibilityRequired',
      `accessibilityRequired is deprecated. Use aria-required.`
    );
  }
  */
  var _ariaRequired = ariaRequired != null ? ariaRequired : accessibilityRequired;
  if (_ariaRequired != null) {
    domProps['aria-required'] = _ariaRequired;
    // Enhance with native semantics
    if (elementType === 'input' || elementType === 'select' || elementType === 'textarea') {
      domProps.required = accessibilityRequired;
    }
  }

  /*
  if (accessibilityRole != null) {
    warnOnce('accessibilityRole', `accessibilityRole is deprecated. Use role.`);
  }
  */
  if (role != null) {
    // 'presentation' synonym has wider browser support
    domProps['role'] = role === 'none' ? 'presentation' : role;
  }

  /*
  if (accessibilityRoleDescription != null) {
    warnOnce(
      'accessibilityRoleDescription',
      `accessibilityRoleDescription is deprecated. Use aria-roledescription.`
    );
  }
  */
  var _ariaRoleDescription = ariaRoleDescription != null ? ariaRoleDescription : accessibilityRoleDescription;
  if (_ariaRoleDescription != null) {
    domProps['aria-roledescription'] = _ariaRoleDescription;
  }

  /*
  if (accessibilityRowCount != null) {
    warnOnce(
      'accessibilityRowCount',
      `accessibilityRowCount is deprecated. Use aria-rowcount.`
    );
  }
  */
  var _ariaRowCount = ariaRowCount != null ? ariaRowCount : accessibilityRowCount;
  if (_ariaRowCount != null) {
    domProps['aria-rowcount'] = _ariaRowCount;
  }

  /*
  if (accessibilityRowIndex != null) {
    warnOnce(
      'accessibilityRowIndex',
      `accessibilityRowIndex is deprecated. Use aria-rowindex.`
    );
  }
  */
  var _ariaRowIndex = ariaRowIndex != null ? ariaRowIndex : accessibilityRowIndex;
  if (_ariaRowIndex != null) {
    domProps['aria-rowindex'] = _ariaRowIndex;
  }

  /*
  if (accessibilityRowSpan != null) {
    warnOnce(
      'accessibilityRowSpan',
      `accessibilityRowSpan is deprecated. Use aria-rowspan.`
    );
  }
  */
  var _ariaRowSpan = ariaRowSpan != null ? ariaRowSpan : accessibilityRowSpan;
  if (_ariaRowSpan != null) {
    domProps['aria-rowspan'] = _ariaRowSpan;
  }

  /*
  if (accessibilitySelected != null) {
    warnOnce(
      'accessibilitySelected',
      `accessibilitySelected is deprecated. Use aria-selected.`
    );
  }
  */
  var _ariaSelected = ariaSelected != null ? ariaSelected : accessibilitySelected;
  if (_ariaSelected != null) {
    domProps['aria-selected'] = _ariaSelected;
  }

  /*
  if (accessibilitySetSize != null) {
    warnOnce(
      'accessibilitySetSize',
      `accessibilitySetSize is deprecated. Use aria-setsize.`
    );
  }
  */
  var _ariaSetSize = ariaSetSize != null ? ariaSetSize : accessibilitySetSize;
  if (_ariaSetSize != null) {
    domProps['aria-setsize'] = _ariaSetSize;
  }

  /*
  if (accessibilitySort != null) {
    warnOnce(
      'accessibilitySort',
      `accessibilitySort is deprecated. Use aria-sort.`
    );
  }
  */
  var _ariaSort = ariaSort != null ? ariaSort : accessibilitySort;
  if (_ariaSort != null) {
    domProps['aria-sort'] = _ariaSort;
  }

  /*
  if (accessibilityValueMax != null) {
    warnOnce(
      'accessibilityValueMax',
      `accessibilityValueMax is deprecated. Use aria-valuemax.`
    );
  }
  */
  var _ariaValueMax = ariaValueMax != null ? ariaValueMax : accessibilityValueMax;
  if (_ariaValueMax != null) {
    domProps['aria-valuemax'] = _ariaValueMax;
  }

  /*
  if (accessibilityValueMin != null) {
    warnOnce(
      'accessibilityValueMin',
      `accessibilityValueMin is deprecated. Use aria-valuemin.`
    );
  }
  */
  var _ariaValueMin = ariaValueMin != null ? ariaValueMin : accessibilityValueMin;
  if (_ariaValueMin != null) {
    domProps['aria-valuemin'] = _ariaValueMin;
  }

  /*
  if (accessibilityValueNow != null) {
    warnOnce(
      'accessibilityValueNow',
      `accessibilityValueNow is deprecated. Use aria-valuenow.`
    );
  }
  */
  var _ariaValueNow = ariaValueNow != null ? ariaValueNow : accessibilityValueNow;
  if (_ariaValueNow != null) {
    domProps['aria-valuenow'] = _ariaValueNow;
  }

  /*
  if (accessibilityValueText != null) {
    warnOnce(
      'accessibilityValueText',
      `accessibilityValueText is deprecated. Use aria-valuetext.`
    );
  }
  */
  var _ariaValueText = ariaValueText != null ? ariaValueText : accessibilityValueText;
  if (_ariaValueText != null) {
    domProps['aria-valuetext'] = _ariaValueText;
  }

  // "dataSet" replaced with "data-*"
  if (dataSet != null) {
    for (var dataProp in dataSet) {
      if (hasOwnProperty.call(dataSet, dataProp)) {
        var dataName = hyphenateString(dataProp);
        var dataValue = dataSet[dataProp];
        if (dataValue != null) {
          domProps["data-" + dataName] = dataValue;
        }
      }
    }
  }

  // FOCUS
  if (tabIndex === 0 || tabIndex === '0' || tabIndex === -1 || tabIndex === '-1') {
    domProps.tabIndex = tabIndex;
  } else {
    /*
    if (focusable != null) {
      warnOnce('focusable', `focusable is deprecated.`);
    }
    */

    // "focusable" indicates that an element may be a keyboard tab-stop.
    if (focusable === false) {
      domProps.tabIndex = '-1';
    }
    if (
    // These native elements are keyboard focusable by default
    elementType === 'a' || elementType === 'button' || elementType === 'input' || elementType === 'select' || elementType === 'textarea') {
      if (focusable === false || accessibilityDisabled === true) {
        domProps.tabIndex = '-1';
      }
    } else if (
    // These roles are made keyboard focusable by default
    role === 'button' || role === 'checkbox' || role === 'link' || role === 'radio' || role === 'textbox' || role === 'switch') {
      if (focusable !== false) {
        domProps.tabIndex = '0';
      }
    } else {
      // Everything else must explicitly set the prop
      if (focusable === true) {
        domProps.tabIndex = '0';
      }
    }
  }
  var _StyleSheet = StyleSheet$1([style, pointerEvents && pointerEventsStyles[pointerEvents]], _objectSpread2({
      writingDirection: 'ltr'
    }, options)),
    className = _StyleSheet[0],
    inlineStyle = _StyleSheet[1];
  if (className) {
    domProps.className = className;
  }
  if (inlineStyle) {
    domProps.style = inlineStyle;
  }

  // OTHER
  // Native element ID
  /*
  if (nativeID != null) {
    warnOnce('nativeID', `nativeID is deprecated. Use id.`);
  }
  */
  var _id = id != null ? id : nativeID;
  if (_id != null) {
    domProps.id = _id;
  }
  // Automated test IDs
  if (testID != null) {
    domProps['data-testid'] = testID;
  }
  if (domProps.type == null && elementType === 'button') {
    domProps.type = 'button';
  }
  return domProps;
};
const createDOMProps$1 = createDOMProps;

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var rtlScripts = new Set(['Arab', 'Syrc', 'Samr', 'Mand', 'Thaa', 'Mend', 'Nkoo', 'Adlm', 'Rohg', 'Hebr']);
var rtlLangs = new Set(['ae',
// Avestan
'ar',
// Arabic
'arc',
// Aramaic
'bcc',
// Southern Balochi
'bqi',
// Bakthiari
'ckb',
// Sorani
'dv',
// Dhivehi
'fa', 'far',
// Persian
'glk',
// Gilaki
'he', 'iw',
// Hebrew
'khw',
// Khowar
'ks',
// Kashmiri
'ku',
// Kurdish
'mzn',
// Mazanderani
'nqo',
// N'Ko
'pnb',
// Western Punjabi
'ps',
// Pashto
'sd',
// Sindhi
'ug',
// Uyghur
'ur',
// Urdu
'yi' // Yiddish
]);
var cache = new Map();

/**
 * Determine the writing direction of a locale
 */
function isLocaleRTL(locale) {
  var cachedRTL = cache.get(locale);
  if (cachedRTL) {
    return cachedRTL;
  }
  var isRTL = false;
  // $FlowFixMe
  if (Intl.Locale) {
    try {
      // $FlowFixMe
      var script = new Intl.Locale(locale).maximize().script;
      isRTL = rtlScripts.has(script);
    } catch (_unused) {
      // RangeError: Incorrect locale information provided
      // Fallback to inferring from language
      var lang = locale.split('-')[0];
      isRTL = rtlLangs.has(lang);
    }
  } else {
    // Fallback to inferring from language
    var _lang = locale.split('-')[0];
    isRTL = rtlLangs.has(_lang);
  }
  cache.set(locale, isRTL);
  return isRTL;
}

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var defaultLocale = {
  direction: 'ltr',
  locale: 'en-US'
};
var LocaleContext = /*#__PURE__*/owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.createContext(defaultLocale);
function getLocaleDirection(locale) {
  return isLocaleRTL(locale) ? 'rtl' : 'ltr';
}
function LocaleProvider(props) {
  var direction = props.direction,
    locale = props.locale,
    children = props.children;
  var needsContext = direction || locale;
  return needsContext ? /*#__PURE__*/React.createElement(LocaleContext.Provider, {
    children: children,
    value: {
      direction: locale ? getLocaleDirection(locale) : direction,
      locale
    }
  }) : children;
}
function useLocaleContext() {
  return owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useContext(LocaleContext);
}

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var createElement = (component, props, options) => {
  // Use equivalent platform elements where possible.
  var accessibilityComponent;
  if (component && component.constructor === String) {
    accessibilityComponent = AccessibilityUtil$1.propsToAccessibilityComponent(props);
  }
  var Component = accessibilityComponent || component;
  var domProps = createDOMProps$1(Component, props, options);
  var element = /*#__PURE__*/React.createElement(Component, domProps);

  // Update locale context if element's writing direction prop changes
  var elementWithLocaleProvider = domProps.dir ? /*#__PURE__*/React.createElement(LocaleProvider, {
    children: element,
    direction: domProps.dir,
    locale: domProps.lang
  }) : element;
  return elementWithLocaleProvider;
};
const createElement$1 = createElement;

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var getBoundingClientRect = node => {
  if (node != null) {
    var isElement = node.nodeType === 1; /* Node.ELEMENT_NODE */
    if (isElement && typeof node.getBoundingClientRect === 'function') {
      return node.getBoundingClientRect();
    }
  }
};
const getBoundingClientRect$1 = getBoundingClientRect;

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var unitlessNumbers = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexOrder: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowGap: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnGap: true,
  gridColumnStart: true,
  lineClamp: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
  // transform types
  scale: true,
  scaleX: true,
  scaleY: true,
  scaleZ: true,
  // RN properties
  shadowOpacity: true
};

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['ms', 'Moz', 'O', 'Webkit'];
var prefixKey = (prefix, key) => {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
};
Object.keys(unitlessNumbers).forEach(prop => {
  prefixes.forEach(prefix => {
    unitlessNumbers[prefixKey(prefix, prop)] = unitlessNumbers[prop];
  });
});
const isUnitlessNumber = unitlessNumbers;

/* eslint-disable */


/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }
  return ('' + value).trim();
}

/* eslint-disable */


/**
 * Sets the value for multiple styles on a node.  If a value is specified as
 * '' (empty string), the corresponding style property will be unset.
 *
 * @param {DOMElement} node
 * @param {object} styles
 */
function setValueForStyles(node, styles) {
  var style = node.style;
  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = dangerousStyleValue(styleName, styles[styleName], isCustomProperty);
    if (styleName === 'float') {
      styleName = 'cssFloat';
    }
    if (isCustomProperty) {
      style.setProperty(styleName, styleValue);
    } else {
      style[styleName] = styleValue;
    }
  }
}

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var getRect = node => {
  var height = node.offsetHeight;
  var width = node.offsetWidth;
  var left = node.offsetLeft;
  var top = node.offsetTop;
  node = node.offsetParent;
  while (node && node.nodeType === 1 /* Node.ELEMENT_NODE */) {
    left += node.offsetLeft + node.clientLeft - node.scrollLeft;
    top += node.offsetTop + node.clientTop - node.scrollTop;
    node = node.offsetParent;
  }
  top -= window.scrollY;
  left -= window.scrollX;
  return {
    width,
    height,
    top,
    left
  };
};
var measureLayout = (node, relativeToNativeNode, callback) => {
  var relativeNode = relativeToNativeNode || node && node.parentNode;
  if (node && relativeNode) {
    setTimeout(() => {
      if (node.isConnected && relativeNode.isConnected) {
        var relativeRect = getRect(relativeNode);
        var _getRect = getRect(node),
          height = _getRect.height,
          left = _getRect.left,
          top = _getRect.top,
          width = _getRect.width;
        var x = left - relativeRect.left;
        var y = top - relativeRect.top;
        callback(x, y, width, height, left, top);
      }
    }, 0);
  }
};
var elementsToIgnore = {
  A: true,
  BODY: true,
  INPUT: true,
  SELECT: true,
  TEXTAREA: true
};
var UIManager = {
  blur(node) {
    try {
      node.blur();
    } catch (err) {}
  },
  focus(node) {
    try {
      var name = node.nodeName;
      // A tabIndex of -1 allows element to be programmatically focused but
      // prevents keyboard focus. We don't want to set the tabindex value on
      // elements that should not prevent keyboard focus.
      if (node.getAttribute('tabIndex') == null && node.isContentEditable !== true && elementsToIgnore[name] == null) {
        node.setAttribute('tabIndex', '-1');
      }
      node.focus();
    } catch (err) {}
  },
  measure(node, callback) {
    measureLayout(node, null, callback);
  },
  measureInWindow(node, callback) {
    if (node) {
      setTimeout(() => {
        var _getBoundingClientRec = getBoundingClientRect$1(node),
          height = _getBoundingClientRec.height,
          left = _getBoundingClientRec.left,
          top = _getBoundingClientRec.top,
          width = _getBoundingClientRec.width;
        callback(left, top, width, height);
      }, 0);
    }
  },
  measureLayout(node, relativeToNativeNode, onFail, onSuccess) {
    measureLayout(node, relativeToNativeNode, onSuccess);
  },
  updateView(node, props) {
    for (var prop in props) {
      if (!Object.prototype.hasOwnProperty.call(props, prop)) {
        continue;
      }
      var value = props[prop];
      switch (prop) {
        case 'style':
          {
            setValueForStyles(node, value);
            break;
          }
        case 'class':
        case 'className':
          {
            node.setAttribute('class', value);
            break;
          }
        case 'text':
        case 'value':
          // native platforms use `text` prop to replace text input value
          node.value = value;
          break;
        default:
          node.setAttribute(prop, value);
      }
    }
  },
  configureNextLayoutAnimation(config, onAnimationDidEnd) {
    onAnimationDidEnd();
  },
  // mocks
  setLayoutAnimationEnabledExperimental() {}
};
const UIManager$1 = UIManager;

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var defaultProps = {
  children: true,
  dataSet: true,
  dir: true,
  id: true,
  ref: true,
  suppressHydrationWarning: true,
  tabIndex: true,
  testID: true,
  // @deprecated
  focusable: true,
  nativeID: true
};
var accessibilityProps = {
  'aria-activedescendant': true,
  'aria-atomic': true,
  'aria-autocomplete': true,
  'aria-busy': true,
  'aria-checked': true,
  'aria-colcount': true,
  'aria-colindex': true,
  'aria-colspan': true,
  'aria-controls': true,
  'aria-current': true,
  'aria-describedby': true,
  'aria-details': true,
  'aria-disabled': true,
  'aria-errormessage': true,
  'aria-expanded': true,
  'aria-flowto': true,
  'aria-haspopup': true,
  'aria-hidden': true,
  'aria-invalid': true,
  'aria-keyshortcuts': true,
  'aria-label': true,
  'aria-labelledby': true,
  'aria-level': true,
  'aria-live': true,
  'aria-modal': true,
  'aria-multiline': true,
  'aria-multiselectable': true,
  'aria-orientation': true,
  'aria-owns': true,
  'aria-placeholder': true,
  'aria-posinset': true,
  'aria-pressed': true,
  'aria-readonly': true,
  'aria-required': true,
  role: true,
  'aria-roledescription': true,
  'aria-rowcount': true,
  'aria-rowindex': true,
  'aria-rowspan': true,
  'aria-selected': true,
  'aria-setsize': true,
  'aria-sort': true,
  'aria-valuemax': true,
  'aria-valuemin': true,
  'aria-valuenow': true,
  'aria-valuetext': true,
  // @deprecated
  accessibilityActiveDescendant: true,
  accessibilityAtomic: true,
  accessibilityAutoComplete: true,
  accessibilityBusy: true,
  accessibilityChecked: true,
  accessibilityColumnCount: true,
  accessibilityColumnIndex: true,
  accessibilityColumnSpan: true,
  accessibilityControls: true,
  accessibilityCurrent: true,
  accessibilityDescribedBy: true,
  accessibilityDetails: true,
  accessibilityDisabled: true,
  accessibilityErrorMessage: true,
  accessibilityExpanded: true,
  accessibilityFlowTo: true,
  accessibilityHasPopup: true,
  accessibilityHidden: true,
  accessibilityInvalid: true,
  accessibilityKeyShortcuts: true,
  accessibilityLabel: true,
  accessibilityLabelledBy: true,
  accessibilityLevel: true,
  accessibilityLiveRegion: true,
  accessibilityModal: true,
  accessibilityMultiline: true,
  accessibilityMultiSelectable: true,
  accessibilityOrientation: true,
  accessibilityOwns: true,
  accessibilityPlaceholder: true,
  accessibilityPosInSet: true,
  accessibilityPressed: true,
  accessibilityReadOnly: true,
  accessibilityRequired: true,
  accessibilityRole: true,
  accessibilityRoleDescription: true,
  accessibilityRowCount: true,
  accessibilityRowIndex: true,
  accessibilityRowSpan: true,
  accessibilitySelected: true,
  accessibilitySetSize: true,
  accessibilitySort: true,
  accessibilityValueMax: true,
  accessibilityValueMin: true,
  accessibilityValueNow: true,
  accessibilityValueText: true
};
var clickProps = {
  onClick: true,
  onAuxClick: true,
  onContextMenu: true,
  onGotPointerCapture: true,
  onLostPointerCapture: true,
  onPointerCancel: true,
  onPointerDown: true,
  onPointerEnter: true,
  onPointerMove: true,
  onPointerLeave: true,
  onPointerOut: true,
  onPointerOver: true,
  onPointerUp: true
};
var focusProps = {
  onBlur: true,
  onFocus: true
};
var keyboardProps = {
  onKeyDown: true,
  onKeyDownCapture: true,
  onKeyUp: true,
  onKeyUpCapture: true
};
var mouseProps = {
  onMouseDown: true,
  onMouseEnter: true,
  onMouseLeave: true,
  onMouseMove: true,
  onMouseOver: true,
  onMouseOut: true,
  onMouseUp: true
};
var touchProps = {
  onTouchCancel: true,
  onTouchCancelCapture: true,
  onTouchEnd: true,
  onTouchEndCapture: true,
  onTouchMove: true,
  onTouchMoveCapture: true,
  onTouchStart: true,
  onTouchStartCapture: true
};
var styleProps = {
  style: true
};

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function pick(obj, list) {
  var nextObj = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (list[key] === true) {
        nextObj[key] = obj[key];
      }
    }
  }
  return nextObj;
}

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * useLayoutEffect throws an error on the server. On the few occasions where is
 * problematic, use this hook.
 *
 * 
 */

var useLayoutEffectImpl = canUseDOM$1 ? owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useLayoutEffect : owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useEffect;
const useLayoutEffect = useLayoutEffectImpl;

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var DOM_LAYOUT_HANDLER_NAME = '__reactLayoutHandler';
var resizeObserver = null;
function getResizeObserver() {
  if (canUseDOM$1 && typeof window.ResizeObserver !== 'undefined') {
    if (resizeObserver == null) {
      resizeObserver = new window.ResizeObserver(function (entries) {
        entries.forEach(entry => {
          var node = entry.target;
          var onLayout = node[DOM_LAYOUT_HANDLER_NAME];
          if (typeof onLayout === 'function') {
            // We still need to measure the view because browsers don't yet provide
            // border-box dimensions in the entry
            UIManager$1.measure(node, (x, y, width, height, left, top) => {
              var event = {
                // $FlowFixMe
                nativeEvent: {
                  layout: {
                    x,
                    y,
                    width,
                    height,
                    left,
                    top
                  }
                },
                timeStamp: Date.now()
              };
              Object.defineProperty(event.nativeEvent, 'target', {
                enumerable: true,
                get: () => entry.target
              });
              onLayout(event);
            });
          }
        });
      });
    }
  }
  return resizeObserver;
}
function useElementLayout(ref, onLayout) {
  var observer = getResizeObserver();
  useLayoutEffect(() => {
    var node = ref.current;
    if (node != null) {
      node[DOM_LAYOUT_HANDLER_NAME] = onLayout;
    }
  }, [ref, onLayout]);

  // Observing is done in a separate effect to avoid this effect running
  // when 'onLayout' changes.
  useLayoutEffect(() => {
    var node = ref.current;
    if (node != null && observer != null) {
      if (typeof node[DOM_LAYOUT_HANDLER_NAME] === 'function') {
        observer.observe(node);
      } else {
        observer.unobserve(node);
      }
    }
    return () => {
      if (node != null && observer != null) {
        observer.unobserve(node);
      }
    };
  }, [ref, observer]);
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function mergeRefs() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return function forwardRef(node) {
    args.forEach(ref => {
      if (ref == null) {
        return;
      }
      if (typeof ref === 'function') {
        ref(node);
        return;
      }
      if (typeof ref === 'object') {
        ref.current = node;
        return;
      }
      console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref " + String(ref));
    });
  };
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function useMergeRefs() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useMemo(() => mergeRefs(...args),
  // eslint-disable-next-line
  [...args]);
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var UNINITIALIZED = typeof Symbol === 'function' && typeof Symbol() === 'symbol' ? Symbol() : Object.freeze({});
function useStable$1(getInitialValue) {
  var ref = owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = getInitialValue();
  }
  // $FlowFixMe (#64650789) Trouble refining types where `Symbol` is concerned.
  return ref.current;
}

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


/**
 * Adds non-standard methods to the hode element. This is temporarily until an
 * API like `ReactNative.measure(hostRef, callback)` is added to React Native.
 */
function usePlatformMethods(_ref) {
  _ref.pointerEvents;
    _ref.style;
  // Avoid creating a new ref on every render.
  var ref = useStable$1(() => hostNode => {
    if (hostNode != null) {
      hostNode.measure = callback => UIManager$1.measure(hostNode, callback);
      hostNode.measureLayout = (relativeToNode, success, failure) => UIManager$1.measureLayout(hostNode, relativeToNode, failure, success);
      hostNode.measureInWindow = callback => UIManager$1.measureInWindow(hostNode, callback);
    }
  });
  return ref;
}

/**
 * Copyright (c) Nicolas Gallagher
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var emptyFunction = () => {};
var emptyObject$2 = {};
var emptyArray = [];

/**
 * Safari produces very large identifiers that would cause the `touchBank` array
 * length to be so large as to crash the browser, if not normalized like this.
 * In the future the `touchBank` should use an object/map instead.
 */
function normalizeIdentifier(identifier) {
  return identifier > 20 ? identifier % 20 : identifier;
}

/**
 * Converts a native DOM event to a ResponderEvent.
 * Mouse events are transformed into fake touch events.
 */
function createResponderEvent(domEvent, responderTouchHistoryStore) {
  var rect;
  var propagationWasStopped = false;
  var changedTouches;
  var touches;
  var domEventChangedTouches = domEvent.changedTouches;
  var domEventType = domEvent.type;
  var metaKey = domEvent.metaKey === true;
  var shiftKey = domEvent.shiftKey === true;
  var force = domEventChangedTouches && domEventChangedTouches[0].force || 0;
  var identifier = normalizeIdentifier(domEventChangedTouches && domEventChangedTouches[0].identifier || 0);
  var clientX = domEventChangedTouches && domEventChangedTouches[0].clientX || domEvent.clientX;
  var clientY = domEventChangedTouches && domEventChangedTouches[0].clientY || domEvent.clientY;
  var pageX = domEventChangedTouches && domEventChangedTouches[0].pageX || domEvent.pageX;
  var pageY = domEventChangedTouches && domEventChangedTouches[0].pageY || domEvent.pageY;
  var preventDefault = typeof domEvent.preventDefault === 'function' ? domEvent.preventDefault.bind(domEvent) : emptyFunction;
  var timestamp = domEvent.timeStamp;
  function normalizeTouches(touches) {
    return Array.prototype.slice.call(touches).map(touch => {
      return {
        force: touch.force,
        identifier: normalizeIdentifier(touch.identifier),
        get locationX() {
          return locationX(touch.clientX);
        },
        get locationY() {
          return locationY(touch.clientY);
        },
        pageX: touch.pageX,
        pageY: touch.pageY,
        target: touch.target,
        timestamp
      };
    });
  }
  if (domEventChangedTouches != null) {
    changedTouches = normalizeTouches(domEventChangedTouches);
    touches = normalizeTouches(domEvent.touches);
  } else {
    var emulatedTouches = [{
      force,
      identifier,
      get locationX() {
        return locationX(clientX);
      },
      get locationY() {
        return locationY(clientY);
      },
      pageX,
      pageY,
      target: domEvent.target,
      timestamp
    }];
    changedTouches = emulatedTouches;
    touches = domEventType === 'mouseup' || domEventType === 'dragstart' ? emptyArray : emulatedTouches;
  }
  var responderEvent = {
    bubbles: true,
    cancelable: true,
    // `currentTarget` is set before dispatch
    currentTarget: null,
    defaultPrevented: domEvent.defaultPrevented,
    dispatchConfig: emptyObject$2,
    eventPhase: domEvent.eventPhase,
    isDefaultPrevented() {
      return domEvent.defaultPrevented;
    },
    isPropagationStopped() {
      return propagationWasStopped;
    },
    isTrusted: domEvent.isTrusted,
    nativeEvent: {
      altKey: false,
      ctrlKey: false,
      metaKey,
      shiftKey,
      changedTouches,
      force,
      identifier,
      get locationX() {
        return locationX(clientX);
      },
      get locationY() {
        return locationY(clientY);
      },
      pageX,
      pageY,
      target: domEvent.target,
      timestamp,
      touches,
      type: domEventType
    },
    persist: emptyFunction,
    preventDefault,
    stopPropagation() {
      propagationWasStopped = true;
    },
    target: domEvent.target,
    timeStamp: timestamp,
    touchHistory: responderTouchHistoryStore.touchHistory
  };

  // Using getters and functions serves two purposes:
  // 1) The value of `currentTarget` is not initially available.
  // 2) Measuring the clientRect may cause layout jank and should only be done on-demand.
  function locationX(x) {
    rect = rect || getBoundingClientRect$1(responderEvent.currentTarget);
    if (rect) {
      return x - rect.left;
    }
  }
  function locationY(y) {
    rect = rect || getBoundingClientRect$1(responderEvent.currentTarget);
    if (rect) {
      return y - rect.top;
    }
  }
  return responderEvent;
}

/**
 * Copyright (c) Nicolas Gallagher
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var MOUSE_DOWN = 'mousedown';
var MOUSE_MOVE = 'mousemove';
var MOUSE_UP = 'mouseup';
var MOUSE_CANCEL = 'dragstart';
var TOUCH_START = 'touchstart';
var TOUCH_MOVE = 'touchmove';
var TOUCH_END = 'touchend';
var TOUCH_CANCEL = 'touchcancel';
var SCROLL = 'scroll';
var SELECT = 'select';
var SELECTION_CHANGE = 'selectionchange';
function isStartish(eventType) {
  return eventType === TOUCH_START || eventType === MOUSE_DOWN;
}
function isMoveish(eventType) {
  return eventType === TOUCH_MOVE || eventType === MOUSE_MOVE;
}
function isEndish(eventType) {
  return eventType === TOUCH_END || eventType === MOUSE_UP || isCancelish(eventType);
}
function isCancelish(eventType) {
  return eventType === TOUCH_CANCEL || eventType === MOUSE_CANCEL;
}
function isScroll(eventType) {
  return eventType === SCROLL;
}
function isSelectionChange(eventType) {
  return eventType === SELECT || eventType === SELECTION_CHANGE;
}

/**
 * Copyright (c) Nicolas Gallagher
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function isSelectionValid() {
  var selection = window.getSelection();
  var string = selection.toString();
  var anchorNode = selection.anchorNode;
  var focusNode = selection.focusNode;
  var isTextNode = anchorNode && anchorNode.nodeType === window.Node.TEXT_NODE || focusNode && focusNode.nodeType === window.Node.TEXT_NODE;
  return string.length >= 1 && string !== '\n' && isTextNode;
}

/**
 * Copyright (c) Nicolas Gallagher
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var keyName = '__reactResponderId';
function getEventPath(domEvent) {
  // The 'selectionchange' event always has the 'document' as the target.
  // Use the anchor node as the initial target to reconstruct a path.
  // (We actually only need the first "responder" node in practice.)
  if (domEvent.type === 'selectionchange') {
    var target = window.getSelection().anchorNode;
    return composedPathFallback(target);
  } else {
    var path = domEvent.composedPath != null ? domEvent.composedPath() : composedPathFallback(domEvent.target);
    return path;
  }
}
function composedPathFallback(target) {
  var path = [];
  while (target != null && target !== document.body) {
    path.push(target);
    target = target.parentNode;
  }
  return path;
}

/**
 * Retrieve the responderId from a host node
 */
function getResponderId(node) {
  if (node != null) {
    return node[keyName];
  }
  return null;
}

/**
 * Store the responderId on a host node
 */
function setResponderId(node, id) {
  if (node != null) {
    node[keyName] = id;
  }
}

/**
 * Filter the event path to contain only the nodes attached to the responder system
 */
function getResponderPaths(domEvent) {
  var idPath = [];
  var nodePath = [];
  var eventPath = getEventPath(domEvent);
  for (var i = 0; i < eventPath.length; i++) {
    var node = eventPath[i];
    var id = getResponderId(node);
    if (id != null) {
      idPath.push(id);
      nodePath.push(node);
    }
  }
  return {
    idPath,
    nodePath
  };
}

/**
 * Walk the paths and find the first common ancestor
 */
function getLowestCommonAncestor(pathA, pathB) {
  var pathALength = pathA.length;
  var pathBLength = pathB.length;
  if (
  // If either path is empty
  pathALength === 0 || pathBLength === 0 ||
  // If the last elements aren't the same there can't be a common ancestor
  // that is connected to the responder system
  pathA[pathALength - 1] !== pathB[pathBLength - 1]) {
    return null;
  }
  var itemA = pathA[0];
  var indexA = 0;
  var itemB = pathB[0];
  var indexB = 0;

  // If A is deeper, skip indices that can't match.
  if (pathALength - pathBLength > 0) {
    indexA = pathALength - pathBLength;
    itemA = pathA[indexA];
    pathALength = pathBLength;
  }

  // If B is deeper, skip indices that can't match
  if (pathBLength - pathALength > 0) {
    indexB = pathBLength - pathALength;
    itemB = pathB[indexB];
    pathBLength = pathALength;
  }

  // Walk in lockstep until a match is found
  var depth = pathALength;
  while (depth--) {
    if (itemA === itemB) {
      return itemA;
    }
    itemA = pathA[indexA++];
    itemB = pathB[indexB++];
  }
  return null;
}

/**
 * Determine whether any of the active touches are within the current responder.
 * This cannot rely on W3C `targetTouches`, as neither IE11 nor Safari implement it.
 */
function hasTargetTouches(target, touches) {
  if (!touches || touches.length === 0) {
    return false;
  }
  for (var i = 0; i < touches.length; i++) {
    var node = touches[i].target;
    if (node != null) {
      if (target.contains(node)) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Ignore 'selectionchange' events that don't correspond with a person's intent to
 * select text.
 */
function hasValidSelection(domEvent) {
  if (domEvent.type === 'selectionchange') {
    return isSelectionValid();
  }
  return domEvent.type === 'select';
}

/**
 * Events are only valid if the primary button was used without specific modifier keys.
 */
function isPrimaryPointerDown(domEvent) {
  var altKey = domEvent.altKey,
    button = domEvent.button,
    buttons = domEvent.buttons,
    ctrlKey = domEvent.ctrlKey,
    type = domEvent.type;
  var isTouch = type === 'touchstart' || type === 'touchmove';
  var isPrimaryMouseDown = type === 'mousedown' && (button === 0 || buttons === 1);
  var isPrimaryMouseMove = type === 'mousemove' && buttons === 1;
  var noModifiers = altKey === false && ctrlKey === false;
  if (isTouch || isPrimaryMouseDown && noModifiers || isPrimaryMouseMove && noModifiers) {
    return true;
  }
  return false;
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var MAX_TOUCH_BANK = 20;
function timestampForTouch(touch) {
  // The legacy internal implementation provides "timeStamp", which has been
  // renamed to "timestamp".
  return touch.timeStamp || touch.timestamp;
}

/**
 * TODO: Instead of making gestures recompute filtered velocity, we could
 * include a built in velocity computation that can be reused globally.
 */
function createTouchRecord(touch) {
  return {
    touchActive: true,
    startPageX: touch.pageX,
    startPageY: touch.pageY,
    startTimeStamp: timestampForTouch(touch),
    currentPageX: touch.pageX,
    currentPageY: touch.pageY,
    currentTimeStamp: timestampForTouch(touch),
    previousPageX: touch.pageX,
    previousPageY: touch.pageY,
    previousTimeStamp: timestampForTouch(touch)
  };
}
function resetTouchRecord(touchRecord, touch) {
  touchRecord.touchActive = true;
  touchRecord.startPageX = touch.pageX;
  touchRecord.startPageY = touch.pageY;
  touchRecord.startTimeStamp = timestampForTouch(touch);
  touchRecord.currentPageX = touch.pageX;
  touchRecord.currentPageY = touch.pageY;
  touchRecord.currentTimeStamp = timestampForTouch(touch);
  touchRecord.previousPageX = touch.pageX;
  touchRecord.previousPageY = touch.pageY;
  touchRecord.previousTimeStamp = timestampForTouch(touch);
}
function getTouchIdentifier(_ref) {
  var identifier = _ref.identifier;
  if (identifier == null) {
    console.error('Touch object is missing identifier.');
  }
  return identifier;
}
function recordTouchStart(touch, touchHistory) {
  var identifier = getTouchIdentifier(touch);
  var touchRecord = touchHistory.touchBank[identifier];
  if (touchRecord) {
    resetTouchRecord(touchRecord, touch);
  } else {
    touchHistory.touchBank[identifier] = createTouchRecord(touch);
  }
  touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
}
function recordTouchMove(touch, touchHistory) {
  var touchRecord = touchHistory.touchBank[getTouchIdentifier(touch)];
  if (touchRecord) {
    touchRecord.touchActive = true;
    touchRecord.previousPageX = touchRecord.currentPageX;
    touchRecord.previousPageY = touchRecord.currentPageY;
    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
    touchRecord.currentPageX = touch.pageX;
    touchRecord.currentPageY = touch.pageY;
    touchRecord.currentTimeStamp = timestampForTouch(touch);
    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
  } else {
    console.warn('Cannot record touch move without a touch start.\n', "Touch Move: " + printTouch(touch) + "\n", "Touch Bank: " + printTouchBank(touchHistory));
  }
}
function recordTouchEnd(touch, touchHistory) {
  var touchRecord = touchHistory.touchBank[getTouchIdentifier(touch)];
  if (touchRecord) {
    touchRecord.touchActive = false;
    touchRecord.previousPageX = touchRecord.currentPageX;
    touchRecord.previousPageY = touchRecord.currentPageY;
    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
    touchRecord.currentPageX = touch.pageX;
    touchRecord.currentPageY = touch.pageY;
    touchRecord.currentTimeStamp = timestampForTouch(touch);
    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
  } else {
    console.warn('Cannot record touch end without a touch start.\n', "Touch End: " + printTouch(touch) + "\n", "Touch Bank: " + printTouchBank(touchHistory));
  }
}
function printTouch(touch) {
  return JSON.stringify({
    identifier: touch.identifier,
    pageX: touch.pageX,
    pageY: touch.pageY,
    timestamp: timestampForTouch(touch)
  });
}
function printTouchBank(touchHistory) {
  var touchBank = touchHistory.touchBank;
  var printed = JSON.stringify(touchBank.slice(0, MAX_TOUCH_BANK));
  if (touchBank.length > MAX_TOUCH_BANK) {
    printed += ' (original size: ' + touchBank.length + ')';
  }
  return printed;
}
class ResponderTouchHistoryStore {
  constructor() {
    this._touchHistory = {
      touchBank: [],
      //Array<TouchRecord>
      numberActiveTouches: 0,
      // If there is only one active touch, we remember its location. This prevents
      // us having to loop through all of the touches all the time in the most
      // common case.
      indexOfSingleActiveTouch: -1,
      mostRecentTimeStamp: 0
    };
  }
  recordTouchTrack(topLevelType, nativeEvent) {
    var touchHistory = this._touchHistory;
    if (isMoveish(topLevelType)) {
      nativeEvent.changedTouches.forEach(touch => recordTouchMove(touch, touchHistory));
    } else if (isStartish(topLevelType)) {
      nativeEvent.changedTouches.forEach(touch => recordTouchStart(touch, touchHistory));
      touchHistory.numberActiveTouches = nativeEvent.touches.length;
      if (touchHistory.numberActiveTouches === 1) {
        touchHistory.indexOfSingleActiveTouch = nativeEvent.touches[0].identifier;
      }
    } else if (isEndish(topLevelType)) {
      nativeEvent.changedTouches.forEach(touch => recordTouchEnd(touch, touchHistory));
      touchHistory.numberActiveTouches = nativeEvent.touches.length;
      if (touchHistory.numberActiveTouches === 1) {
        var touchBank = touchHistory.touchBank;
        for (var i = 0; i < touchBank.length; i++) {
          var touchTrackToCheck = touchBank[i];
          if (touchTrackToCheck != null && touchTrackToCheck.touchActive) {
            touchHistory.indexOfSingleActiveTouch = i;
            break;
          }
        }
      }
    }
  }
  get touchHistory() {
    return this._touchHistory;
  }
}

/**
 * Copyright (c) Nicolas Gallagher
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


/* ------------ TYPES ------------ */

var emptyObject$1 = {};

/* ------------ IMPLEMENTATION ------------ */

var startRegistration = ['onStartShouldSetResponderCapture', 'onStartShouldSetResponder', {
  bubbles: true
}];
var moveRegistration = ['onMoveShouldSetResponderCapture', 'onMoveShouldSetResponder', {
  bubbles: true
}];
var scrollRegistration = ['onScrollShouldSetResponderCapture', 'onScrollShouldSetResponder', {
  bubbles: false
}];
var shouldSetResponderEvents = {
  touchstart: startRegistration,
  mousedown: startRegistration,
  touchmove: moveRegistration,
  mousemove: moveRegistration,
  scroll: scrollRegistration
};
var emptyResponder = {
  id: null,
  idPath: null,
  node: null
};
var responderListenersMap = new Map();
var isEmulatingMouseEvents = false;
var trackedTouchCount = 0;
var currentResponder = {
  id: null,
  node: null,
  idPath: null
};
var responderTouchHistoryStore = new ResponderTouchHistoryStore();
function changeCurrentResponder(responder) {
  currentResponder = responder;
}
function getResponderConfig(id) {
  var config = responderListenersMap.get(id);
  return config != null ? config : emptyObject$1;
}

/**
 * Process native events
 *
 * A single event listener is used to manage the responder system.
 * All pointers are tracked in the ResponderTouchHistoryStore. Native events
 * are interpreted in terms of the Responder System and checked to see if
 * the responder should be transferred. Each host node that is attached to
 * the Responder System has an ID, which is used to look up its associated
 * callbacks.
 */
function eventListener(domEvent) {
  var eventType = domEvent.type;
  var eventTarget = domEvent.target;

  /**
   * Manage emulated events and early bailout.
   * Since PointerEvent is not used yet (lack of support in older Safari), it's
   * necessary to manually manage the mess of browser touch/mouse events.
   * And bailout early for termination events when there is no active responder.
   */

  // Flag when browser may produce emulated events
  if (eventType === 'touchstart') {
    isEmulatingMouseEvents = true;
  }
  // Remove flag when browser will not produce emulated events
  if (eventType === 'touchmove' || trackedTouchCount > 1) {
    isEmulatingMouseEvents = false;
  }
  // Ignore various events in particular circumstances
  if (
  // Ignore browser emulated mouse events
  eventType === 'mousedown' && isEmulatingMouseEvents || eventType === 'mousemove' && isEmulatingMouseEvents ||
  // Ignore mousemove if a mousedown didn't occur first
  eventType === 'mousemove' && trackedTouchCount < 1) {
    return;
  }
  // Remove flag after emulated events are finished
  if (isEmulatingMouseEvents && eventType === 'mouseup') {
    if (trackedTouchCount === 0) {
      isEmulatingMouseEvents = false;
    }
    return;
  }
  var isStartEvent = isStartish(eventType) && isPrimaryPointerDown(domEvent);
  var isMoveEvent = isMoveish(eventType);
  var isEndEvent = isEndish(eventType);
  var isScrollEvent = isScroll(eventType);
  var isSelectionChangeEvent = isSelectionChange(eventType);
  var responderEvent = createResponderEvent(domEvent, responderTouchHistoryStore);

  /**
   * Record the state of active pointers
   */

  if (isStartEvent || isMoveEvent || isEndEvent) {
    if (domEvent.touches) {
      trackedTouchCount = domEvent.touches.length;
    } else {
      if (isStartEvent) {
        trackedTouchCount = 1;
      } else if (isEndEvent) {
        trackedTouchCount = 0;
      }
    }
    responderTouchHistoryStore.recordTouchTrack(eventType, responderEvent.nativeEvent);
  }

  /**
   * Responder System logic
   */

  var eventPaths = getResponderPaths(domEvent);
  var wasNegotiated = false;
  var wantsResponder;

  // If an event occured that might change the current responder...
  if (isStartEvent || isMoveEvent || isScrollEvent && trackedTouchCount > 0) {
    // If there is already a responder, prune the event paths to the lowest common ancestor
    // of the existing responder and deepest target of the event.
    var currentResponderIdPath = currentResponder.idPath;
    var eventIdPath = eventPaths.idPath;
    if (currentResponderIdPath != null && eventIdPath != null) {
      var lowestCommonAncestor = getLowestCommonAncestor(currentResponderIdPath, eventIdPath);
      if (lowestCommonAncestor != null) {
        var indexOfLowestCommonAncestor = eventIdPath.indexOf(lowestCommonAncestor);
        // Skip the current responder so it doesn't receive unexpected "shouldSet" events.
        var index = indexOfLowestCommonAncestor + (lowestCommonAncestor === currentResponder.id ? 1 : 0);
        eventPaths = {
          idPath: eventIdPath.slice(index),
          nodePath: eventPaths.nodePath.slice(index)
        };
      } else {
        eventPaths = null;
      }
    }
    if (eventPaths != null) {
      // If a node wants to become the responder, attempt to transfer.
      wantsResponder = findWantsResponder(eventPaths, domEvent, responderEvent);
      if (wantsResponder != null) {
        // Sets responder if none exists, or negotates with existing responder.
        attemptTransfer(responderEvent, wantsResponder);
        wasNegotiated = true;
      }
    }
  }

  // If there is now a responder, invoke its callbacks for the lifecycle of the gesture.
  if (currentResponder.id != null && currentResponder.node != null) {
    var _currentResponder = currentResponder,
      id = _currentResponder.id,
      node = _currentResponder.node;
    var _getResponderConfig = getResponderConfig(id),
      onResponderStart = _getResponderConfig.onResponderStart,
      onResponderMove = _getResponderConfig.onResponderMove,
      onResponderEnd = _getResponderConfig.onResponderEnd,
      onResponderRelease = _getResponderConfig.onResponderRelease,
      onResponderTerminate = _getResponderConfig.onResponderTerminate,
      onResponderTerminationRequest = _getResponderConfig.onResponderTerminationRequest;
    responderEvent.bubbles = false;
    responderEvent.cancelable = false;
    responderEvent.currentTarget = node;

    // Start
    if (isStartEvent) {
      if (onResponderStart != null) {
        responderEvent.dispatchConfig.registrationName = 'onResponderStart';
        onResponderStart(responderEvent);
      }
    }
    // Move
    else if (isMoveEvent) {
      if (onResponderMove != null) {
        responderEvent.dispatchConfig.registrationName = 'onResponderMove';
        onResponderMove(responderEvent);
      }
    } else {
      var isTerminateEvent = isCancelish(eventType) ||
      // native context menu
      eventType === 'contextmenu' ||
      // window blur
      eventType === 'blur' && eventTarget === window ||
      // responder (or ancestors) blur
      eventType === 'blur' && eventTarget.contains(node) && domEvent.relatedTarget !== node ||
      // native scroll without using a pointer
      isScrollEvent && trackedTouchCount === 0 ||
      // native scroll on node that is parent of the responder (allow siblings to scroll)
      isScrollEvent && eventTarget.contains(node) && eventTarget !== node ||
      // native select/selectionchange on node
      isSelectionChangeEvent && hasValidSelection(domEvent);
      var isReleaseEvent = isEndEvent && !isTerminateEvent && !hasTargetTouches(node, domEvent.touches);

      // End
      if (isEndEvent) {
        if (onResponderEnd != null) {
          responderEvent.dispatchConfig.registrationName = 'onResponderEnd';
          onResponderEnd(responderEvent);
        }
      }
      // Release
      if (isReleaseEvent) {
        if (onResponderRelease != null) {
          responderEvent.dispatchConfig.registrationName = 'onResponderRelease';
          onResponderRelease(responderEvent);
        }
        changeCurrentResponder(emptyResponder);
      }
      // Terminate
      if (isTerminateEvent) {
        var shouldTerminate = true;

        // Responders can still avoid termination but only for these events.
        if (eventType === 'contextmenu' || eventType === 'scroll' || eventType === 'selectionchange') {
          // Only call this function is it wasn't already called during negotiation.
          if (wasNegotiated) {
            shouldTerminate = false;
          } else if (onResponderTerminationRequest != null) {
            responderEvent.dispatchConfig.registrationName = 'onResponderTerminationRequest';
            if (onResponderTerminationRequest(responderEvent) === false) {
              shouldTerminate = false;
            }
          }
        }
        if (shouldTerminate) {
          if (onResponderTerminate != null) {
            responderEvent.dispatchConfig.registrationName = 'onResponderTerminate';
            onResponderTerminate(responderEvent);
          }
          changeCurrentResponder(emptyResponder);
          isEmulatingMouseEvents = false;
          trackedTouchCount = 0;
        }
      }
    }
  }
}

/**
 * Walk the event path to/from the target node. At each node, stop and call the
 * relevant "shouldSet" functions for the given event type. If any of those functions
 * call "stopPropagation" on the event, stop searching for a responder.
 */
function findWantsResponder(eventPaths, domEvent, responderEvent) {
  var shouldSetCallbacks = shouldSetResponderEvents[domEvent.type]; // for Flow

  if (shouldSetCallbacks != null) {
    var idPath = eventPaths.idPath,
      nodePath = eventPaths.nodePath;
    var shouldSetCallbackCaptureName = shouldSetCallbacks[0];
    var shouldSetCallbackBubbleName = shouldSetCallbacks[1];
    var bubbles = shouldSetCallbacks[2].bubbles;
    var check = function check(id, node, callbackName) {
      var config = getResponderConfig(id);
      var shouldSetCallback = config[callbackName];
      if (shouldSetCallback != null) {
        responderEvent.currentTarget = node;
        if (shouldSetCallback(responderEvent) === true) {
          // Start the path from the potential responder
          var prunedIdPath = idPath.slice(idPath.indexOf(id));
          return {
            id,
            node,
            idPath: prunedIdPath
          };
        }
      }
    };

    // capture
    for (var i = idPath.length - 1; i >= 0; i--) {
      var id = idPath[i];
      var node = nodePath[i];
      var result = check(id, node, shouldSetCallbackCaptureName);
      if (result != null) {
        return result;
      }
      if (responderEvent.isPropagationStopped() === true) {
        return;
      }
    }

    // bubble
    if (bubbles) {
      for (var _i = 0; _i < idPath.length; _i++) {
        var _id = idPath[_i];
        var _node = nodePath[_i];
        var _result = check(_id, _node, shouldSetCallbackBubbleName);
        if (_result != null) {
          return _result;
        }
        if (responderEvent.isPropagationStopped() === true) {
          return;
        }
      }
    } else {
      var _id2 = idPath[0];
      var _node2 = nodePath[0];
      var target = domEvent.target;
      if (target === _node2) {
        return check(_id2, _node2, shouldSetCallbackBubbleName);
      }
    }
  }
}

/**
 * Attempt to transfer the responder.
 */
function attemptTransfer(responderEvent, wantsResponder) {
  var _currentResponder2 = currentResponder,
    currentId = _currentResponder2.id,
    currentNode = _currentResponder2.node;
  var id = wantsResponder.id,
    node = wantsResponder.node;
  var _getResponderConfig2 = getResponderConfig(id),
    onResponderGrant = _getResponderConfig2.onResponderGrant,
    onResponderReject = _getResponderConfig2.onResponderReject;
  responderEvent.bubbles = false;
  responderEvent.cancelable = false;
  responderEvent.currentTarget = node;

  // Set responder
  if (currentId == null) {
    if (onResponderGrant != null) {
      responderEvent.currentTarget = node;
      responderEvent.dispatchConfig.registrationName = 'onResponderGrant';
      onResponderGrant(responderEvent);
    }
    changeCurrentResponder(wantsResponder);
  }
  // Negotiate with current responder
  else {
    var _getResponderConfig3 = getResponderConfig(currentId),
      onResponderTerminate = _getResponderConfig3.onResponderTerminate,
      onResponderTerminationRequest = _getResponderConfig3.onResponderTerminationRequest;
    var allowTransfer = true;
    if (onResponderTerminationRequest != null) {
      responderEvent.currentTarget = currentNode;
      responderEvent.dispatchConfig.registrationName = 'onResponderTerminationRequest';
      if (onResponderTerminationRequest(responderEvent) === false) {
        allowTransfer = false;
      }
    }
    if (allowTransfer) {
      // Terminate existing responder
      if (onResponderTerminate != null) {
        responderEvent.currentTarget = currentNode;
        responderEvent.dispatchConfig.registrationName = 'onResponderTerminate';
        onResponderTerminate(responderEvent);
      }
      // Grant next responder
      if (onResponderGrant != null) {
        responderEvent.currentTarget = node;
        responderEvent.dispatchConfig.registrationName = 'onResponderGrant';
        onResponderGrant(responderEvent);
      }
      changeCurrentResponder(wantsResponder);
    } else {
      // Reject responder request
      if (onResponderReject != null) {
        responderEvent.currentTarget = node;
        responderEvent.dispatchConfig.registrationName = 'onResponderReject';
        onResponderReject(responderEvent);
      }
    }
  }
}

/* ------------ PUBLIC API ------------ */

/**
 * Attach Listeners
 *
 * Use native events as ReactDOM doesn't have a non-plugin API to implement
 * this system.
 */
var documentEventsCapturePhase = ['blur', 'scroll'];
var documentEventsBubblePhase = [
// mouse
'mousedown', 'mousemove', 'mouseup', 'dragstart',
// touch
'touchstart', 'touchmove', 'touchend', 'touchcancel',
// other
'contextmenu', 'select', 'selectionchange'];
function attachListeners() {
  if (canUseDOM$1 && window.__reactResponderSystemActive == null) {
    window.addEventListener('blur', eventListener);
    documentEventsBubblePhase.forEach(eventType => {
      document.addEventListener(eventType, eventListener);
    });
    documentEventsCapturePhase.forEach(eventType => {
      document.addEventListener(eventType, eventListener, true);
    });
    window.__reactResponderSystemActive = true;
  }
}

/**
 * Register a node with the ResponderSystem.
 */
function addNode(id, node, config) {
  setResponderId(node, id);
  responderListenersMap.set(id, config);
}

/**
 * Unregister a node with the ResponderSystem.
 */
function removeNode(id) {
  if (currentResponder.id === id) {
    terminateResponder();
  }
  if (responderListenersMap.has(id)) {
    responderListenersMap.delete(id);
  }
}

/**
 * Allow the current responder to be terminated from within components to support
 * more complex requirements, such as use with other React libraries for working
 * with scroll views, input views, etc.
 */
function terminateResponder() {
  var _currentResponder3 = currentResponder,
    id = _currentResponder3.id,
    node = _currentResponder3.node;
  if (id != null && node != null) {
    var _getResponderConfig4 = getResponderConfig(id),
      onResponderTerminate = _getResponderConfig4.onResponderTerminate;
    if (onResponderTerminate != null) {
      var event = createResponderEvent({}, responderTouchHistoryStore);
      event.currentTarget = node;
      onResponderTerminate(event);
    }
    changeCurrentResponder(emptyResponder);
  }
  isEmulatingMouseEvents = false;
  trackedTouchCount = 0;
}

/**
 * Allow unit tests to inspect the current responder in the system.
 * FOR TESTING ONLY.
 */
function getResponderNode() {
  return currentResponder.node;
}

/**
 * Copyright (c) Nicolas Gallagher
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var emptyObject = {};
var idCounter = 0;
function useStable(getInitialValue) {
  var ref = owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useRef(null);
  if (ref.current == null) {
    ref.current = getInitialValue();
  }
  return ref.current;
}
function useResponderEvents(hostRef, config) {
  if (config === void 0) {
    config = emptyObject;
  }
  var id = useStable(() => idCounter++);
  var isAttachedRef = owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useRef(false);

  // This is a separate effects so it doesn't run when the config changes.
  // On initial mount, attach global listeners if needed.
  // On unmount, remove node potentially attached to the Responder System.
  owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useEffect(() => {
    attachListeners();
    return () => {
      removeNode(id);
    };
  }, [id]);

  // Register and unregister with the Responder System as necessary
  owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useEffect(() => {
    var _config = config,
      onMoveShouldSetResponder = _config.onMoveShouldSetResponder,
      onMoveShouldSetResponderCapture = _config.onMoveShouldSetResponderCapture,
      onScrollShouldSetResponder = _config.onScrollShouldSetResponder,
      onScrollShouldSetResponderCapture = _config.onScrollShouldSetResponderCapture,
      onSelectionChangeShouldSetResponder = _config.onSelectionChangeShouldSetResponder,
      onSelectionChangeShouldSetResponderCapture = _config.onSelectionChangeShouldSetResponderCapture,
      onStartShouldSetResponder = _config.onStartShouldSetResponder,
      onStartShouldSetResponderCapture = _config.onStartShouldSetResponderCapture;
    var requiresResponderSystem = onMoveShouldSetResponder != null || onMoveShouldSetResponderCapture != null || onScrollShouldSetResponder != null || onScrollShouldSetResponderCapture != null || onSelectionChangeShouldSetResponder != null || onSelectionChangeShouldSetResponderCapture != null || onStartShouldSetResponder != null || onStartShouldSetResponderCapture != null;
    var node = hostRef.current;
    if (requiresResponderSystem) {
      addNode(id, node, config);
      isAttachedRef.current = true;
    } else if (isAttachedRef.current) {
      removeNode(id);
      isAttachedRef.current = false;
    }
  }, [config, hostRef, id]);
  owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useDebugValue({
    isResponder: hostRef.current === getResponderNode()
  });
  owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useDebugValue(config);
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var TextAncestorContext = /*#__PURE__*/owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.createContext(false);
const TextAncestorContext$1 = TextAncestorContext;

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var _excluded$1 = ["hrefAttrs", "onLayout", "onMoveShouldSetResponder", "onMoveShouldSetResponderCapture", "onResponderEnd", "onResponderGrant", "onResponderMove", "onResponderReject", "onResponderRelease", "onResponderStart", "onResponderTerminate", "onResponderTerminationRequest", "onScrollShouldSetResponder", "onScrollShouldSetResponderCapture", "onSelectionChangeShouldSetResponder", "onSelectionChangeShouldSetResponderCapture", "onStartShouldSetResponder", "onStartShouldSetResponderCapture"];
var forwardPropsList$1 = Object.assign({}, defaultProps, accessibilityProps, clickProps, focusProps, keyboardProps, mouseProps, touchProps, styleProps, {
  href: true,
  lang: true,
  onScroll: true,
  onWheel: true,
  pointerEvents: true
});
var pickProps$1 = props => pick(props, forwardPropsList$1);
var View = /*#__PURE__*/owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.forwardRef((props, forwardedRef) => {
  var hrefAttrs = props.hrefAttrs,
    onLayout = props.onLayout,
    onMoveShouldSetResponder = props.onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture = props.onMoveShouldSetResponderCapture,
    onResponderEnd = props.onResponderEnd,
    onResponderGrant = props.onResponderGrant,
    onResponderMove = props.onResponderMove,
    onResponderReject = props.onResponderReject,
    onResponderRelease = props.onResponderRelease,
    onResponderStart = props.onResponderStart,
    onResponderTerminate = props.onResponderTerminate,
    onResponderTerminationRequest = props.onResponderTerminationRequest,
    onScrollShouldSetResponder = props.onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture = props.onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder = props.onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture = props.onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder = props.onStartShouldSetResponder,
    onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture,
    rest = _objectWithoutPropertiesLoose(props, _excluded$1);
  var hasTextAncestor = owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useContext(TextAncestorContext$1);
  var hostRef = owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useRef(null);
  var _useLocaleContext = useLocaleContext(),
    contextDirection = _useLocaleContext.direction;
  useElementLayout(hostRef, onLayout);
  useResponderEvents(hostRef, {
    onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture,
    onResponderEnd,
    onResponderGrant,
    onResponderMove,
    onResponderReject,
    onResponderRelease,
    onResponderStart,
    onResponderTerminate,
    onResponderTerminationRequest,
    onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder,
    onStartShouldSetResponderCapture
  });
  var component = 'div';
  var langDirection = props.lang != null ? getLocaleDirection(props.lang) : null;
  var componentDirection = props.dir || langDirection;
  var writingDirection = componentDirection || contextDirection;
  var supportedProps = pickProps$1(rest);
  supportedProps.dir = componentDirection;
  supportedProps.style = [styles$1.view$raw, hasTextAncestor && styles$1.inline, props.style];
  if (props.href != null) {
    component = 'a';
    if (hrefAttrs != null) {
      var download = hrefAttrs.download,
        rel = hrefAttrs.rel,
        target = hrefAttrs.target;
      if (download != null) {
        supportedProps.download = download;
      }
      if (rel != null) {
        supportedProps.rel = rel;
      }
      if (typeof target === 'string') {
        supportedProps.target = target.charAt(0) !== '_' ? '_' + target : target;
      }
    }
  }
  var platformMethodsRef = usePlatformMethods(supportedProps);
  var setRef = useMergeRefs(hostRef, platformMethodsRef, forwardedRef);
  supportedProps.ref = setRef;
  return createElement$1(component, supportedProps, {
    writingDirection
  });
});
View.displayName = 'View';
var styles$1 = StyleSheet$1.create({
  view$raw: {
    alignItems: 'stretch',
    backgroundColor: 'transparent',
    border: '0 solid black',
    boxSizing: 'border-box',
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'column',
    flexShrink: 0,
    listStyle: 'none',
    margin: 0,
    minHeight: 0,
    minWidth: 0,
    padding: 0,
    position: 'relative',
    textDecoration: 'none',
    zIndex: 0
  },
  inline: {
    display: 'inline-flex'
  }
});
const View$1 = View;

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var _excluded = ["hrefAttrs", "numberOfLines", "onClick", "onLayout", "onPress", "onMoveShouldSetResponder", "onMoveShouldSetResponderCapture", "onResponderEnd", "onResponderGrant", "onResponderMove", "onResponderReject", "onResponderRelease", "onResponderStart", "onResponderTerminate", "onResponderTerminationRequest", "onScrollShouldSetResponder", "onScrollShouldSetResponderCapture", "onSelectionChangeShouldSetResponder", "onSelectionChangeShouldSetResponderCapture", "onStartShouldSetResponder", "onStartShouldSetResponderCapture", "selectable"];
//import { warnOnce } from '../../modules/warnOnce';

var forwardPropsList = Object.assign({}, defaultProps, accessibilityProps, clickProps, focusProps, keyboardProps, mouseProps, touchProps, styleProps, {
  href: true,
  lang: true,
  pointerEvents: true
});
var pickProps = props => pick(props, forwardPropsList);
var Text = /*#__PURE__*/owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.forwardRef((props, forwardedRef) => {
  var hrefAttrs = props.hrefAttrs,
    numberOfLines = props.numberOfLines,
    onClick = props.onClick,
    onLayout = props.onLayout,
    onPress = props.onPress,
    onMoveShouldSetResponder = props.onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture = props.onMoveShouldSetResponderCapture,
    onResponderEnd = props.onResponderEnd,
    onResponderGrant = props.onResponderGrant,
    onResponderMove = props.onResponderMove,
    onResponderReject = props.onResponderReject,
    onResponderRelease = props.onResponderRelease,
    onResponderStart = props.onResponderStart,
    onResponderTerminate = props.onResponderTerminate,
    onResponderTerminationRequest = props.onResponderTerminationRequest,
    onScrollShouldSetResponder = props.onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture = props.onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder = props.onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture = props.onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder = props.onStartShouldSetResponder,
    onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture,
    selectable = props.selectable,
    rest = _objectWithoutPropertiesLoose(props, _excluded);

  /*
  if (selectable != null) {
    warnOnce(
      'selectable',
      'selectable prop is deprecated. Use styles.userSelect.'
    );
  }
  */

  var hasTextAncestor = owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useContext(TextAncestorContext$1);
  var hostRef = owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useRef(null);
  var _useLocaleContext = useLocaleContext(),
    contextDirection = _useLocaleContext.direction;
  useElementLayout(hostRef, onLayout);
  useResponderEvents(hostRef, {
    onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture,
    onResponderEnd,
    onResponderGrant,
    onResponderMove,
    onResponderReject,
    onResponderRelease,
    onResponderStart,
    onResponderTerminate,
    onResponderTerminationRequest,
    onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder,
    onStartShouldSetResponderCapture
  });
  var handleClick = owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useCallback(e => {
    if (onClick != null) {
      onClick(e);
    } else if (onPress != null) {
      e.stopPropagation();
      onPress(e);
    }
  }, [onClick, onPress]);
  var component = hasTextAncestor ? 'span' : 'div';
  var langDirection = props.lang != null ? getLocaleDirection(props.lang) : null;
  var componentDirection = props.dir || langDirection;
  var writingDirection = componentDirection || contextDirection;
  var supportedProps = pickProps(rest);
  supportedProps.dir = componentDirection;
  // 'auto' by default allows browsers to infer writing direction (root elements only)
  if (!hasTextAncestor) {
    supportedProps.dir = componentDirection != null ? componentDirection : 'auto';
  }
  if (onClick || onPress) {
    supportedProps.onClick = handleClick;
  }
  supportedProps.style = [numberOfLines != null && numberOfLines > 1 && {
    WebkitLineClamp: numberOfLines
  }, hasTextAncestor === true ? styles.textHasAncestor$raw : styles.text$raw, numberOfLines === 1 && styles.textOneLine, numberOfLines != null && numberOfLines > 1 && styles.textMultiLine, props.style, selectable === true && styles.selectable, selectable === false && styles.notSelectable, onPress && styles.pressable];
  if (props.href != null) {
    component = 'a';
    if (hrefAttrs != null) {
      var download = hrefAttrs.download,
        rel = hrefAttrs.rel,
        target = hrefAttrs.target;
      if (download != null) {
        supportedProps.download = download;
      }
      if (rel != null) {
        supportedProps.rel = rel;
      }
      if (typeof target === 'string') {
        supportedProps.target = target.charAt(0) !== '_' ? '_' + target : target;
      }
    }
  }
  var platformMethodsRef = usePlatformMethods(supportedProps);
  var setRef = useMergeRefs(hostRef, platformMethodsRef, forwardedRef);
  supportedProps.ref = setRef;
  var element = createElement$1(component, supportedProps, {
    writingDirection
  });
  return hasTextAncestor ? element : /*#__PURE__*/owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.createElement(TextAncestorContext$1.Provider, {
    value: true
  }, element);
});
Text.displayName = 'Text';
var textStyle = {
  backgroundColor: 'transparent',
  border: '0 solid black',
  boxSizing: 'border-box',
  color: 'black',
  display: 'inline',
  font: '14px System',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  position: 'relative',
  textAlign: 'start',
  textDecoration: 'none',
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word'
};
var styles = StyleSheet$1.create({
  text$raw: textStyle,
  textHasAncestor$raw: _objectSpread2(_objectSpread2({}, textStyle), {}, {
    color: 'inherit',
    font: 'inherit',
    textAlign: 'inherit',
    whiteSpace: 'inherit'
  }),
  textOneLine: {
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    wordWrap: 'normal'
  },
  // See #13
  textMultiLine: {
    display: '-webkit-box',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical'
  },
  notSelectable: {
    userSelect: 'none'
  },
  selectable: {
    userSelect: 'text'
  },
  pressable: {
    cursor: 'pointer'
  }
});
const Text$1 = Text;

export { StyleSheet$1 as S, Text$1 as T, View$1 as V, _objectSpread2 as _, _objectWithoutPropertiesLoose as a, TextAncestorContext$1 as b, canUseDOM$1 as c, createElement$1 as d, createBoxShadowValue as e, jsxRuntimeExports as j, requireObjectWithoutPropertiesLoose as r };
