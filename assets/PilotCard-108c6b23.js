import { c as canUseDOM, S as StyleSheet, _ as _objectSpread2, a as _objectWithoutPropertiesLoose, b as TextAncestorContext, d as createElement, V as View, e as createBoxShadowValue, j as jsxRuntimeExports, T as Text } from './index-002da3d7.js';
import { g as getDefaultExportFromCjs } from './_commonjsHelpers-0f3c985d.js';
import { o as owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__ } from './owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__-7e89695b.js';

var _extends$1 = {exports: {}};

var hasRequired_extends;

function require_extends () {
	if (hasRequired_extends) return _extends$1.exports;
	hasRequired_extends = 1;
	(function (module) {
		function _extends() {
		  return module.exports = _extends = Object.assign ? Object.assign.bind() : function (n) {
		    for (var e = 1; e < arguments.length; e++) {
		      var t = arguments[e];
		      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		    }
		    return n;
		  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _extends.apply(null, arguments);
		}
		module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (_extends$1));
	return _extends$1.exports;
}

var _extendsExports = require_extends();
const _extends = /*@__PURE__*/getDefaultExportFromCjs(_extendsExports);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments to provide
 * information about what broke and what you were expecting.
 *
 * The invariant message will be stripped in production, but the invariant will
 * remain to ensure logic does not differ in production.
 */

function invariant(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return String(args[argIndex++]);
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // Skip invariant's own stack frame.

    throw error;
  }
}

var invariant_1 = invariant;

const invariant$1 = /*@__PURE__*/getDefaultExportFromCjs(invariant_1);

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var dimensions = {
  window: {
    fontScale: 1,
    height: 0,
    scale: 1,
    width: 0
  },
  screen: {
    fontScale: 1,
    height: 0,
    scale: 1,
    width: 0
  }
};
var listeners = {};
var shouldInit = canUseDOM;
function update() {
  if (!canUseDOM) {
    return;
  }
  var win = window;
  var height;
  var width;

  /**
   * iOS does not update viewport dimensions on keyboard open/close.
   * window.visualViewport(https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport)
   * is used instead of document.documentElement.clientHeight (which remains as a fallback)
   */
  if (win.visualViewport) {
    var visualViewport = win.visualViewport;
    /**
     * We are multiplying by scale because height and width from visual viewport
     * also react to pinch zoom, and become smaller when zoomed. But it is not desired
     * behaviour, since originally documentElement client height and width were used,
     * and they do not react to pinch zoom.
     */
    height = Math.round(visualViewport.height * visualViewport.scale);
    width = Math.round(visualViewport.width * visualViewport.scale);
  } else {
    var docEl = win.document.documentElement;
    height = docEl.clientHeight;
    width = docEl.clientWidth;
  }
  dimensions.window = {
    fontScale: 1,
    height,
    scale: win.devicePixelRatio || 1,
    width
  };
  dimensions.screen = {
    fontScale: 1,
    height: win.screen.height,
    scale: win.devicePixelRatio || 1,
    width: win.screen.width
  };
}
function handleResize() {
  update();
  if (Array.isArray(listeners['change'])) {
    listeners['change'].forEach(handler => handler(dimensions));
  }
}
class Dimensions {
  static get(dimension) {
    if (shouldInit) {
      shouldInit = false;
      update();
    }
    invariant$1(dimensions[dimension], "No dimension set for key " + dimension);
    return dimensions[dimension];
  }
  static set(initialDimensions) {
    if (initialDimensions) {
      if (canUseDOM) {
        invariant$1(false, 'Dimensions cannot be set in the browser');
      } else {
        if (initialDimensions.screen != null) {
          dimensions.screen = initialDimensions.screen;
        }
        if (initialDimensions.window != null) {
          dimensions.window = initialDimensions.window;
        }
      }
    }
  }
  static addEventListener(type, handler) {
    listeners[type] = listeners[type] || [];
    listeners[type].push(handler);
    return {
      remove: () => {
        this.removeEventListener(type, handler);
      }
    };
  }
  static removeEventListener(type, handler) {
    if (Array.isArray(listeners[type])) {
      listeners[type] = listeners[type].filter(_handler => _handler !== handler);
    }
  }
}
if (canUseDOM) {
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', handleResize, false);
  } else {
    window.addEventListener('resize', handleResize, false);
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

var assets = [];
function getAssetByID(assetId) {
  return assets[assetId - 1];
}

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var dataUriPattern = /^data:/;
class ImageUriCache {
  static has(uri) {
    var entries = ImageUriCache._entries;
    var isDataUri = dataUriPattern.test(uri);
    return isDataUri || Boolean(entries[uri]);
  }
  static add(uri) {
    var entries = ImageUriCache._entries;
    var lastUsedTimestamp = Date.now();
    if (entries[uri]) {
      entries[uri].lastUsedTimestamp = lastUsedTimestamp;
      entries[uri].refCount += 1;
    } else {
      entries[uri] = {
        lastUsedTimestamp,
        refCount: 1
      };
    }
  }
  static remove(uri) {
    var entries = ImageUriCache._entries;
    if (entries[uri]) {
      entries[uri].refCount -= 1;
    }
    // Free up entries when the cache is "full"
    ImageUriCache._cleanUpIfNeeded();
  }
  static _cleanUpIfNeeded() {
    var entries = ImageUriCache._entries;
    var imageUris = Object.keys(entries);
    if (imageUris.length + 1 > ImageUriCache._maximumEntries) {
      var leastRecentlyUsedKey;
      var leastRecentlyUsedEntry;
      imageUris.forEach(uri => {
        var entry = entries[uri];
        if ((!leastRecentlyUsedEntry || entry.lastUsedTimestamp < leastRecentlyUsedEntry.lastUsedTimestamp) && entry.refCount === 0) {
          leastRecentlyUsedKey = uri;
          leastRecentlyUsedEntry = entry;
        }
      });
      if (leastRecentlyUsedKey) {
        delete entries[leastRecentlyUsedKey];
      }
    }
  }
}
ImageUriCache._maximumEntries = 256;
ImageUriCache._entries = {};
var id = 0;
var requests = {};
var ImageLoader = {
  abort(requestId) {
    var image = requests["" + requestId];
    if (image) {
      image.onerror = null;
      image.onload = null;
      image = null;
      delete requests["" + requestId];
    }
  },
  getSize(uri, success, failure) {
    var complete = false;
    var interval = setInterval(callback, 16);
    var requestId = ImageLoader.load(uri, callback, errorCallback);
    function callback() {
      var image = requests["" + requestId];
      if (image) {
        var naturalHeight = image.naturalHeight,
          naturalWidth = image.naturalWidth;
        if (naturalHeight && naturalWidth) {
          success(naturalWidth, naturalHeight);
          complete = true;
        }
      }
      if (complete) {
        ImageLoader.abort(requestId);
        clearInterval(interval);
      }
    }
    function errorCallback() {
      if (typeof failure === 'function') {
        failure();
      }
      ImageLoader.abort(requestId);
      clearInterval(interval);
    }
  },
  has(uri) {
    return ImageUriCache.has(uri);
  },
  load(uri, onLoad, onError) {
    id += 1;
    var image = new window.Image();
    image.onerror = onError;
    image.onload = e => {
      // avoid blocking the main thread
      var onDecode = () => onLoad({
        nativeEvent: e
      });
      if (typeof image.decode === 'function') {
        // Safari currently throws exceptions when decoding svgs.
        // We want to catch that error and allow the load handler
        // to be forwarded to the onLoad handler in this case
        image.decode().then(onDecode, onDecode);
      } else {
        setTimeout(onDecode, 0);
      }
    };
    image.src = uri;
    requests["" + id] = image;
    return id;
  },
  prefetch(uri) {
    return new Promise((resolve, reject) => {
      ImageLoader.load(uri, () => {
        // Add the uri to the cache so it can be immediately displayed when used
        // but also immediately remove it to correctly reflect that it has no active references
        ImageUriCache.add(uri);
        ImageUriCache.remove(uri);
        resolve();
      }, reject);
    });
  },
  queryCache(uris) {
    var result = {};
    uris.forEach(u => {
      if (ImageUriCache.has(u)) {
        result[u] = 'disk/memory';
      }
    });
    return Promise.resolve(result);
  }
};
const ImageLoader$1 = ImageLoader;

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


/**
 * PixelRatio gives access to the device pixel density.
 */
class PixelRatio {
  /**
   * Returns the device pixel density.
   */
  static get() {
    return Dimensions.get('window').scale;
  }

  /**
   * No equivalent for Web
   */
  static getFontScale() {
    return Dimensions.get('window').fontScale || PixelRatio.get();
  }

  /**
   * Converts a layout size (dp) to pixel size (px).
   * Guaranteed to return an integer number.
   */
  static getPixelSizeForLayoutSize(layoutSize) {
    return Math.round(layoutSize * PixelRatio.get());
  }

  /**
   * Rounds a layout size (dp) to the nearest layout size that corresponds to
   * an integer number of pixels. For example, on a device with a PixelRatio
   * of 3, `PixelRatio.roundToNearestPixel(8.4) = 8.33`, which corresponds to
   * exactly (8.33 * 3) = 25 pixels.
   */
  static roundToNearestPixel(layoutSize) {
    var ratio = PixelRatio.get();
    return Math.round(layoutSize * ratio) / ratio;
  }
}

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var _excluded = ["aria-label", "accessibilityLabel", "blurRadius", "defaultSource", "draggable", "onError", "onLayout", "onLoad", "onLoadEnd", "onLoadStart", "pointerEvents", "source", "style"];
var ERRORED = 'ERRORED';
var LOADED = 'LOADED';
var LOADING = 'LOADING';
var IDLE = 'IDLE';
var _filterId = 0;
var svgDataUriPattern = /^(data:image\/svg\+xml;utf8,)(.*)/;
function createTintColorSVG(tintColor, id) {
  return tintColor && id != null ? /*#__PURE__*/owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.createElement("svg", {
    style: {
      position: 'absolute',
      height: 0,
      visibility: 'hidden',
      width: 0
    }
  }, /*#__PURE__*/owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.createElement("defs", null, /*#__PURE__*/owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.createElement("filter", {
    id: "tint-" + id,
    suppressHydrationWarning: true
  }, /*#__PURE__*/owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.createElement("feFlood", {
    floodColor: "" + tintColor,
    key: tintColor
  }), /*#__PURE__*/owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in"
  })))) : null;
}
function extractNonStandardStyleProps(style, blurRadius, filterId, tintColorProp) {
  var flatStyle = StyleSheet.flatten(style);
  var filter = flatStyle.filter,
    resizeMode = flatStyle.resizeMode,
    shadowOffset = flatStyle.shadowOffset,
    tintColor = flatStyle.tintColor;
  if (flatStyle.resizeMode) ;
  if (flatStyle.tintColor) ;

  // Add CSS filters
  // React Native exposes these features as props and proprietary styles
  var filters = [];
  var _filter = null;
  if (filter) {
    filters.push(filter);
  }
  if (blurRadius) {
    filters.push("blur(" + blurRadius + "px)");
  }
  if (shadowOffset) {
    var shadowString = createBoxShadowValue(flatStyle);
    if (shadowString) {
      filters.push("drop-shadow(" + shadowString + ")");
    }
  }
  if ((tintColorProp || tintColor) && filterId != null) {
    filters.push("url(#tint-" + filterId + ")");
  }
  if (filters.length > 0) {
    _filter = filters.join(' ');
  }
  return [resizeMode, _filter, tintColor];
}
function resolveAssetDimensions(source) {
  if (typeof source === 'number') {
    var _getAssetByID = getAssetByID(source),
      _height = _getAssetByID.height,
      _width = _getAssetByID.width;
    return {
      height: _height,
      width: _width
    };
  } else if (source != null && !Array.isArray(source) && typeof source === 'object') {
    var _height2 = source.height,
      _width2 = source.width;
    return {
      height: _height2,
      width: _width2
    };
  }
}
function resolveAssetUri(source) {
  var uri = null;
  if (typeof source === 'number') {
    // get the URI from the packager
    var asset = getAssetByID(source);
    if (asset == null) {
      throw new Error("Image: asset with ID \"" + source + "\" could not be found. Please check the image source or packager.");
    }
    var scale = asset.scales[0];
    if (asset.scales.length > 1) {
      var preferredScale = PixelRatio.get();
      // Get the scale which is closest to the preferred scale
      scale = asset.scales.reduce((prev, curr) => Math.abs(curr - preferredScale) < Math.abs(prev - preferredScale) ? curr : prev);
    }
    var scaleSuffix = scale !== 1 ? "@" + scale + "x" : '';
    uri = asset ? asset.httpServerLocation + "/" + asset.name + scaleSuffix + "." + asset.type : '';
  } else if (typeof source === 'string') {
    uri = source;
  } else if (source && typeof source.uri === 'string') {
    uri = source.uri;
  }
  if (uri) {
    var match = uri.match(svgDataUriPattern);
    // inline SVG markup may contain characters (e.g., #, ") that need to be escaped
    if (match) {
      var prefix = match[1],
        svg = match[2];
      var encodedSvg = encodeURIComponent(svg);
      return "" + prefix + encodedSvg;
    }
  }
  return uri;
}
var Image = /*#__PURE__*/owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.forwardRef((props, ref) => {
  var _ariaLabel = props['aria-label'],
    accessibilityLabel = props.accessibilityLabel,
    blurRadius = props.blurRadius,
    defaultSource = props.defaultSource,
    draggable = props.draggable,
    onError = props.onError,
    onLayout = props.onLayout,
    onLoad = props.onLoad,
    onLoadEnd = props.onLoadEnd,
    onLoadStart = props.onLoadStart,
    pointerEvents = props.pointerEvents,
    source = props.source,
    style = props.style,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var ariaLabel = _ariaLabel || accessibilityLabel;
  var _React$useState = owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useState(() => {
      var uri = resolveAssetUri(source);
      if (uri != null) {
        var isLoaded = ImageLoader$1.has(uri);
        if (isLoaded) {
          return LOADED;
        }
      }
      return IDLE;
    }),
    state = _React$useState[0],
    updateState = _React$useState[1];
  var _React$useState2 = owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useState({}),
    layout = _React$useState2[0],
    updateLayout = _React$useState2[1];
  var hasTextAncestor = owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useContext(TextAncestorContext);
  var hiddenImageRef = owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useRef(null);
  var filterRef = owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useRef(_filterId++);
  var requestRef = owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useRef(null);
  var shouldDisplaySource = state === LOADED || state === LOADING && defaultSource == null;
  var _extractNonStandardSt = extractNonStandardStyleProps(style, blurRadius, filterRef.current, props.tintColor),
    _resizeMode = _extractNonStandardSt[0],
    filter = _extractNonStandardSt[1],
    _tintColor = _extractNonStandardSt[2];
  var resizeMode = props.resizeMode || _resizeMode || 'cover';
  var tintColor = props.tintColor || _tintColor;
  var selectedSource = shouldDisplaySource ? source : defaultSource;
  var displayImageUri = resolveAssetUri(selectedSource);
  var imageSizeStyle = resolveAssetDimensions(selectedSource);
  var backgroundImage = displayImageUri ? "url(\"" + displayImageUri + "\")" : null;
  var backgroundSize = getBackgroundSize();

  // Accessibility image allows users to trigger the browser's image context menu
  var hiddenImage = displayImageUri ? createElement('img', {
    alt: ariaLabel || '',
    style: styles.accessibilityImage$raw,
    draggable: draggable || false,
    ref: hiddenImageRef,
    src: displayImageUri
  }) : null;
  function getBackgroundSize() {
    if (hiddenImageRef.current != null && (resizeMode === 'center' || resizeMode === 'repeat')) {
      var _hiddenImageRef$curre = hiddenImageRef.current,
        naturalHeight = _hiddenImageRef$curre.naturalHeight,
        naturalWidth = _hiddenImageRef$curre.naturalWidth;
      var _height3 = layout.height,
        _width3 = layout.width;
      if (naturalHeight && naturalWidth && _height3 && _width3) {
        var scaleFactor = Math.min(1, _width3 / naturalWidth, _height3 / naturalHeight);
        var x = Math.ceil(scaleFactor * naturalWidth);
        var y = Math.ceil(scaleFactor * naturalHeight);
        return x + "px " + y + "px";
      }
    }
  }
  function handleLayout(e) {
    if (resizeMode === 'center' || resizeMode === 'repeat' || onLayout) {
      var _layout = e.nativeEvent.layout;
      onLayout && onLayout(e);
      updateLayout(_layout);
    }
  }

  // Image loading
  var uri = resolveAssetUri(source);
  owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.useEffect(() => {
    abortPendingRequest();
    if (uri != null) {
      updateState(LOADING);
      if (onLoadStart) {
        onLoadStart();
      }
      requestRef.current = ImageLoader$1.load(uri, function load(e) {
        updateState(LOADED);
        if (onLoad) {
          onLoad(e);
        }
        if (onLoadEnd) {
          onLoadEnd();
        }
      }, function error() {
        updateState(ERRORED);
        if (onError) {
          onError({
            nativeEvent: {
              error: "Failed to load resource " + uri
            }
          });
        }
        if (onLoadEnd) {
          onLoadEnd();
        }
      });
    }
    function abortPendingRequest() {
      if (requestRef.current != null) {
        ImageLoader$1.abort(requestRef.current);
        requestRef.current = null;
      }
    }
    return abortPendingRequest;
  }, [uri, requestRef, updateState, onError, onLoad, onLoadEnd, onLoadStart]);
  return /*#__PURE__*/owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.createElement(View, _extends({}, rest, {
    "aria-label": ariaLabel,
    onLayout: handleLayout,
    pointerEvents: pointerEvents,
    ref: ref,
    style: [styles.root, hasTextAncestor && styles.inline, imageSizeStyle, style, styles.undo,
    // TEMP: avoid deprecated shadow props regression
    // until Image refactored to use createElement.
    {
      boxShadow: null
    }]
  }), /*#__PURE__*/owner_mf_2_portal_mf_2_web__loadShare__react__loadShare__.createElement(View, {
    style: [styles.image, resizeModeStyles[resizeMode], {
      backgroundImage,
      filter
    }, backgroundSize != null && {
      backgroundSize
    }],
    suppressHydrationWarning: true
  }), hiddenImage, createTintColorSVG(tintColor, filterRef.current));
});
Image.displayName = 'Image';

// $FlowIgnore: This is the correct type, but casting makes it unhappy since the variables aren't defined yet
var ImageWithStatics = Image;
ImageWithStatics.getSize = function (uri, success, failure) {
  ImageLoader$1.getSize(uri, success, failure);
};
ImageWithStatics.prefetch = function (uri) {
  return ImageLoader$1.prefetch(uri);
};
ImageWithStatics.queryCache = function (uris) {
  return ImageLoader$1.queryCache(uris);
};
var styles = StyleSheet.create({
  root: {
    flexBasis: 'auto',
    overflow: 'hidden',
    zIndex: 0
  },
  inline: {
    display: 'inline-flex'
  },
  undo: {
    // These styles are converted to CSS filters applied to the
    // element displaying the background image.
    blurRadius: null,
    shadowColor: null,
    shadowOpacity: null,
    shadowOffset: null,
    shadowRadius: null,
    tintColor: null,
    // These styles are not supported
    overlayColor: null,
    resizeMode: null
  },
  image: _objectSpread2(_objectSpread2({}, StyleSheet.absoluteFillObject), {}, {
    backgroundColor: 'transparent',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    zIndex: -1
  }),
  accessibilityImage$raw: _objectSpread2(_objectSpread2({}, StyleSheet.absoluteFillObject), {}, {
    height: '100%',
    opacity: 0,
    width: '100%',
    zIndex: -1
  })
});
var resizeModeStyles = StyleSheet.create({
  center: {
    backgroundSize: 'auto'
  },
  contain: {
    backgroundSize: 'contain'
  },
  cover: {
    backgroundSize: 'cover'
  },
  none: {
    backgroundPosition: '0',
    backgroundSize: 'auto'
  },
  repeat: {
    backgroundPosition: '0',
    backgroundRepeat: 'repeat',
    backgroundSize: 'auto'
  },
  stretch: {
    backgroundSize: '100% 100%'
  }
});
const Image$1 = ImageWithStatics;

function PilotCard({ pilot }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { className: "flex flex-row items-center p-4 border border-gray-200 rounded-lg bg-white dark:bg-gray-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Image$1,
      {
        source: { uri: pilot.photo },
        className: "w-16 h-16 rounded-full mr-4"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(View, { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { className: "text-lg font-semibold text-[rgb(var(--color-primary-rgb))]", children: pilot.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { className: "text-gray-500", children: pilot.rating })
    ] })
  ] });
}

export { PilotCard as P, require_extends as r };
