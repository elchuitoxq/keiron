(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/bootstrap-vue/esm/components/popover/helpers/bv-popover-template.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/popover/helpers/bv-popover-template.js ***!
  \******************************************************************************************/
/*! exports provided: BVPopoverTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BVPopoverTemplate", function() { return BVPopoverTemplate; });
/* harmony import */ var _utils_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/vue */ "./node_modules/bootstrap-vue/esm/utils/vue.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _tooltip_helpers_bv_tooltip_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tooltip/helpers/bv-tooltip-template */ "./node_modules/bootstrap-vue/esm/components/tooltip/helpers/bv-tooltip-template.js");



var NAME = 'BVPopoverTemplate'; // @vue/component

var BVPopoverTemplate = /*#__PURE__*/_utils_vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  name: NAME,
  extends: _tooltip_helpers_bv_tooltip_template__WEBPACK_IMPORTED_MODULE_2__["BVTooltipTemplate"],
  computed: {
    templateType: function templateType() {
      return 'popover';
    }
  },
  methods: {
    renderTemplate: function renderTemplate(h) {
      // Title and content could be a scoped slot function
      var $title = Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(this.title) ? this.title({}) : this.title;
      var $content = Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(this.content) ? this.content({}) : this.content; // Directive usage only

      var titleDomProps = this.html && !Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(this.title) ? {
        innerHTML: this.title
      } : {};
      var contentDomProps = this.html && !Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(this.content) ? {
        innerHTML: this.content
      } : {};
      return h('div', {
        staticClass: 'popover b-popover',
        class: this.templateClasses,
        attrs: this.templateAttributes,
        on: this.templateListeners
      }, [h('div', {
        ref: 'arrow',
        staticClass: 'arrow'
      }), Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_1__["isUndefinedOrNull"])($title) || $title === '' ? h() : h('h3', {
        staticClass: 'popover-header',
        domProps: titleDomProps
      }, [$title]), Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_1__["isUndefinedOrNull"])($content) || $content === '' ? h() : h('div', {
        staticClass: 'popover-body',
        domProps: contentDomProps
      }, [$content])]);
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/popover/helpers/bv-popover.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/popover/helpers/bv-popover.js ***!
  \*********************************************************************************/
/*! exports provided: BVPopover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BVPopover", function() { return BVPopover; });
/* harmony import */ var _utils_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/vue */ "./node_modules/bootstrap-vue/esm/utils/vue.js");
/* harmony import */ var _tooltip_helpers_bv_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tooltip/helpers/bv-tooltip */ "./node_modules/bootstrap-vue/esm/components/tooltip/helpers/bv-tooltip.js");
/* harmony import */ var _bv_popover_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bv-popover-template */ "./node_modules/bootstrap-vue/esm/components/popover/helpers/bv-popover-template.js");
// Popover "Class" (Built as a renderless Vue instance)
// Inherits from BVTooltip
//
// Handles trigger events, etc.
// Instantiates template on demand



var NAME = 'BVPopover'; // @vue/component

var BVPopover = /*#__PURE__*/_utils_vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  name: NAME,
  extends: _tooltip_helpers_bv_tooltip__WEBPACK_IMPORTED_MODULE_1__["BVTooltip"],
  computed: {
    // Overwrites BVTooltip
    templateType: function templateType() {
      return 'popover';
    }
  },
  methods: {
    getTemplate: function getTemplate() {
      // Overwrites BVTooltip
      return _bv_popover_template__WEBPACK_IMPORTED_MODULE_2__["BVPopoverTemplate"];
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/tooltip/helpers/bv-popper.js":
/*!********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/tooltip/helpers/bv-popper.js ***!
  \********************************************************************************/
/*! exports provided: BVPopper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BVPopper", function() { return BVPopper; });
/* harmony import */ var _utils_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/vue */ "./node_modules/bootstrap-vue/esm/utils/vue.js");
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _utils_safe_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/safe-types */ "./node_modules/bootstrap-vue/esm/utils/safe-types.js");
/* harmony import */ var _utils_bv_transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/bv-transition */ "./node_modules/bootstrap-vue/esm/utils/bv-transition.js");
// Base on-demand component for tooltip / popover templates
//
// Currently:
//   Responsible for positioning and transitioning the template
//   Templates are only instantiated when shown, and destroyed when hidden
//





var NAME = 'BVPopper';
var AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
  TOPLEFT: 'top',
  TOPRIGHT: 'top',
  RIGHTTOP: 'right',
  RIGHTBOTTOM: 'right',
  BOTTOMLEFT: 'bottom',
  BOTTOMRIGHT: 'bottom',
  LEFTTOP: 'left',
  LEFTBOTTOM: 'left'
};
var OffsetMap = {
  AUTO: 0,
  TOPLEFT: -1,
  TOP: 0,
  TOPRIGHT: +1,
  RIGHTTOP: -1,
  RIGHT: 0,
  RIGHTBOTTOM: +1,
  BOTTOMLEFT: -1,
  BOTTOM: 0,
  BOTTOMRIGHT: +1,
  LEFTTOP: -1,
  LEFT: 0,
  LEFTBOTTOM: +1
}; // @vue/component

var BVPopper = /*#__PURE__*/_utils_vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  name: NAME,
  props: {
    target: {
      // Element that the tooltip/popover is positioned relative to
      type: [_utils_safe_types__WEBPACK_IMPORTED_MODULE_3__["HTMLElement"], _utils_safe_types__WEBPACK_IMPORTED_MODULE_3__["SVGElement"]],
      default: null
    },
    placement: {
      type: String,
      default: 'top'
    },
    fallbackPlacement: {
      type: [String, Array],
      default: 'flip'
    },
    offset: {
      type: Number,
      default: 0
    },
    boundary: {
      // 'scrollParent', 'viewport', 'window', or Element
      type: [String, _utils_safe_types__WEBPACK_IMPORTED_MODULE_3__["HTMLElement"]],
      default: 'scrollParent'
    },
    boundaryPadding: {
      // Tooltip/popover will try and stay away from
      // boundary edge by this many pixels
      type: Number,
      default: 5
    },
    arrowPadding: {
      // The minimum distance (in `px`) from the edge of the
      // tooltip/popover that the arrow can be positioned
      type: Number,
      default: 6
    }
  },
  data: function data() {
    return {
      // reactive props set by parent
      noFade: false,
      // State related data
      localShow: true,
      attachment: this.getAttachment(this.placement)
    };
  },
  computed: {
    templateType: function templateType()
    /* istanbul ignore next */
    {
      // Overridden by template component
      return 'unknown';
    },
    popperConfig: function popperConfig() {
      var _this = this;

      var placement = this.placement;
      return {
        placement: this.getAttachment(placement),
        modifiers: {
          offset: {
            offset: this.getOffset(placement)
          },
          flip: {
            behavior: this.fallbackPlacement
          },
          // `arrow.element` can also be a reference to an HTML Element
          // maybe we should make this a `$ref` in the templates?
          arrow: {
            element: '.arrow'
          },
          preventOverflow: {
            padding: this.boundaryPadding,
            boundariesElement: this.boundary
          }
        },
        onCreate: function onCreate(data) {
          // Handle flipping arrow classes
          if (data.originalPlacement !== data.placement) {
            /* istanbul ignore next: can't test in JSDOM */
            _this.popperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          // Handle flipping arrow classes
          _this.popperPlacementChange(data);
        }
      };
    }
  },
  created: function created() {
    var _this2 = this;

    // Note: We are created on-demand, and should be guaranteed that
    // DOM is rendered/ready by the time the created hook runs
    this.$_popper = null; // Ensure we show as we mount

    this.localShow = true; // Create popper instance before shown

    this.$on('show', function (el) {
      _this2.popperCreate(el);
    }); // Self destruct once hidden

    this.$on('hidden', function () {
      _this2.$nextTick(_this2.$destroy);
    }); // If parent is destroyed, ensure we are destroyed

    this.$parent.$once('hook:destroyed', this.$destroy);
  },
  beforeMount: function beforeMount() {
    // Ensure that the attachment position is correct before mounting
    // as our propsData is added after `new Template({...})`
    this.attachment = this.getAttachment(this.placement);
  },
  mounted: function mounted() {// TBD
  },
  updated: function updated() {
    // Update popper if needed
    // TODO: Should this be a watcher on `this.popperConfig` instead?
    this.popperUpdate();
  },
  beforeDestroy: function beforeDestroy() {
    this.popperDestroy();
  },
  destroyed: function destroyed() {
    // Make sure template is removed from DOM
    var el = this.$el;
    el && el.parentNode && el.parentNode.removeChild(el);
  },
  methods: {
    // "Public" method to trigger hide template
    hide: function hide() {
      this.localShow = false;
    },
    // Private
    getAttachment: function getAttachment(placement) {
      return AttachmentMap[String(placement).toUpperCase()] || 'auto';
    },
    getOffset: function getOffset(placement) {
      if (!this.offset) {
        // Could set a ref for the arrow element
        var arrow = this.$refs.arrow || Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["select"])('.arrow', this.$el);
        var arrowOffset = (parseFloat(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["getCS"])(arrow).width) || 0) + (parseFloat(this.arrowPadding) || 0);

        switch (OffsetMap[String(placement).toUpperCase()] || 0) {
          case +1:
            /* istanbul ignore next: can't test in JSDOM */
            return "+50%p - ".concat(arrowOffset, "px");

          case -1:
            /* istanbul ignore next: can't test in JSDOM */
            return "-50%p + ".concat(arrowOffset, "px");

          default:
            return 0;
        }
      }
      /* istanbul ignore next */


      return this.offset;
    },
    popperCreate: function popperCreate(el) {
      this.popperDestroy(); // We use `el` rather than `this.$el` just in case the original
      // mountpoint root element type was changed by the template

      this.$_popper = new popper_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.target, el, this.popperConfig);
    },
    popperDestroy: function popperDestroy() {
      this.$_popper && this.$_popper.destroy();
      this.$_popper = null;
    },
    popperUpdate: function popperUpdate() {
      this.$_popper && this.$_popper.scheduleUpdate();
    },
    popperPlacementChange: function popperPlacementChange(data) {
      // Callback used by popper to adjust the arrow placement
      this.attachment = this.getAttachment(data.placement);
    },
    renderTemplate: function renderTemplate(h)
    /* istanbul ignore next */
    {
      // Will be overridden by templates
      return h('div');
    }
  },
  render: function render(h) {
    var _this3 = this;

    // Note: `show` and 'fade' classes are only appled during transition
    return h(_utils_bv_transition__WEBPACK_IMPORTED_MODULE_4__["BVTransition"], {
      // Transitions as soon as mounted
      props: {
        appear: true,
        noFade: this.noFade
      },
      on: {
        // Events used by parent component/instance
        beforeEnter: function beforeEnter(el) {
          return _this3.$emit('show', el);
        },
        afterEnter: function afterEnter(el) {
          return _this3.$emit('shown', el);
        },
        beforeLeave: function beforeLeave(el) {
          return _this3.$emit('hide', el);
        },
        afterLeave: function afterLeave(el) {
          return _this3.$emit('hidden', el);
        }
      }
    }, [this.localShow ? this.renderTemplate(h) : h()]);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/tooltip/helpers/bv-tooltip-template.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/tooltip/helpers/bv-tooltip-template.js ***!
  \******************************************************************************************/
/*! exports provided: BVTooltipTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BVTooltipTemplate", function() { return BVTooltipTemplate; });
/* harmony import */ var _utils_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/vue */ "./node_modules/bootstrap-vue/esm/utils/vue.js");
/* harmony import */ var _mixins_scoped_style_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mixins/scoped-style-attrs */ "./node_modules/bootstrap-vue/esm/mixins/scoped-style-attrs.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _bv_popper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bv-popper */ "./node_modules/bootstrap-vue/esm/components/tooltip/helpers/bv-popper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var NAME = 'BVTooltipTemplate'; // @vue/component

var BVTooltipTemplate = /*#__PURE__*/_utils_vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  name: NAME,
  extends: _bv_popper__WEBPACK_IMPORTED_MODULE_3__["BVPopper"],
  mixins: [_mixins_scoped_style_attrs__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    // Other non-reactive (while open) props are pulled in from BVPopper
    id: {
      type: String,
      default: null
    },
    html: {
      // Used only by the directive versions
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    // We use data, rather than props to ensure reactivity
    // Parent component will directly set this data
    return {
      title: '',
      content: '',
      variant: null,
      customClass: null,
      interactive: true
    };
  },
  computed: {
    templateType: function templateType() {
      return 'tooltip';
    },
    templateClasses: function templateClasses() {
      var _ref;

      return [(_ref = {
        // Disables pointer events to hide the tooltip when the user
        // hovers over its content
        noninteractive: !this.interactive
      }, _defineProperty(_ref, "b-".concat(this.templateType, "-").concat(this.variant), this.variant), _defineProperty(_ref, "bs-".concat(this.templateType, "-").concat(this.attachment), this.attachment), _ref), this.customClass];
    },
    templateAttributes: function templateAttributes() {
      return _objectSpread({
        id: this.id,
        role: 'tooltip',
        tabindex: '-1'
      }, this.scopedStyleAttrs);
    },
    templateListeners: function templateListeners() {
      var _this = this;

      // Used for hover/focus trigger listeners
      return {
        mouseenter: function mouseenter(evt) {
          /* istanbul ignore next: difficult to test in JSDOM */
          _this.$emit('mouseenter', evt);
        },
        mouseleave: function mouseleave(evt) {
          /* istanbul ignore next: difficult to test in JSDOM */
          _this.$emit('mouseleave', evt);
        },
        focusin: function focusin(evt) {
          /* istanbul ignore next: difficult to test in JSDOM */
          _this.$emit('focusin', evt);
        },
        focusout: function focusout(evt) {
          /* istanbul ignore next: difficult to test in JSDOM */
          _this.$emit('focusout', evt);
        }
      };
    }
  },
  methods: {
    renderTemplate: function renderTemplate(h) {
      // Title can be a scoped slot function
      var $title = Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(this.title) ? this.title({}) : Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_2__["isUndefinedOrNull"])(this.title) ? h() : this.title; // Directive versions only

      var domProps = this.html && !Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(this.title) ? {
        innerHTML: this.title
      } : {};
      return h('div', {
        staticClass: 'tooltip b-tooltip',
        class: this.templateClasses,
        attrs: this.templateAttributes,
        on: this.templateListeners
      }, [h('div', {
        ref: 'arrow',
        staticClass: 'arrow'
      }), h('div', {
        staticClass: 'tooltip-inner',
        domProps: domProps
      }, [$title])]);
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/tooltip/helpers/bv-tooltip.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/tooltip/helpers/bv-tooltip.js ***!
  \*********************************************************************************/
/*! exports provided: BVTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BVTooltip", function() { return BVTooltip; });
/* harmony import */ var _utils_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/vue */ "./node_modules/bootstrap-vue/esm/utils/vue.js");
/* harmony import */ var _utils_get_scope_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/get-scope-id */ "./node_modules/bootstrap-vue/esm/utils/get-scope-id.js");
/* harmony import */ var _utils_loose_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/loose-equal */ "./node_modules/bootstrap-vue/esm/utils/loose-equal.js");
/* harmony import */ var _utils_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/noop */ "./node_modules/bootstrap-vue/esm/utils/noop.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/events */ "./node_modules/bootstrap-vue/esm/utils/events.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_warn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/warn */ "./node_modules/bootstrap-vue/esm/utils/warn.js");
/* harmony import */ var _utils_bv_event_class__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/bv-event.class */ "./node_modules/bootstrap-vue/esm/utils/bv-event.class.js");
/* harmony import */ var _bv_tooltip_template__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bv-tooltip-template */ "./node_modules/bootstrap-vue/esm/components/tooltip/helpers/bv-tooltip-template.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Tooltip "Class" (Built as a renderless Vue instance)
//
// Handles trigger events, etc.
// Instantiates template on demand












var NAME = 'BVTooltip'; // Modal container selector for appending tooltip/popover

var MODAL_SELECTOR = '.modal-content'; // Modal `$root` hidden event

var MODAL_CLOSE_EVENT = 'bv::modal::hidden'; // For dropdown sniffing

var DROPDOWN_CLASS = 'dropdown';
var DROPDOWN_OPEN_SELECTOR = '.dropdown-menu.show'; // Data specific to popper and template
// We don't use props, as we need reactivity (we can't pass reactive props)

var templateData = {
  // Text string or Scoped slot function
  title: '',
  // Text string or Scoped slot function
  content: '',
  // String
  variant: null,
  // String, Array, Object
  customClass: null,
  // String or array of Strings (overwritten by BVPopper)
  triggers: '',
  // String (overwritten by BVPopper)
  placement: 'auto',
  // String or array of strings
  fallbackPlacement: 'flip',
  // Element or Component reference (or function that returns element) of
  // the element that will have the trigger events bound, and is also
  // default element for positioning
  target: null,
  // HTML ID, Element or Component reference
  container: null,
  // 'body'
  // Boolean
  noFade: false,
  // 'scrollParent', 'viewport', 'window', Element, or Component reference
  boundary: 'scrollParent',
  // Tooltip/popover will try and stay away from
  // boundary edge by this many pixels (Number)
  boundaryPadding: 5,
  // Arrow offset (Number)
  offset: 0,
  // Hover/focus delay (Number or Object)
  delay: 0,
  // Arrow of Tooltip/popover will try and stay away from
  // the edge of tooltip/popover edge by this many pixels
  arrowPadding: 6,
  // Interactive state (Boolean)
  interactive: true,
  // Disabled state (Boolean)
  disabled: false,
  // ID to use for tooltip/popover
  id: null,
  // Flag used by directives only, for HTML content
  html: false
}; // @vue/component

var BVTooltip = /*#__PURE__*/_utils_vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  name: NAME,
  props: {// None
  },
  data: function data() {
    return _objectSpread({}, templateData, {
      // State management data
      activeTrigger: {
        // manual: false,
        hover: false,
        click: false,
        focus: false
      },
      localShow: false
    });
  },
  computed: {
    templateType: function templateType() {
      // Overwritten by BVPopover
      return 'tooltip';
    },
    computedId: function computedId() {
      return this.id || "__bv_".concat(this.templateType, "_").concat(this._uid, "__");
    },
    computedDelay: function computedDelay() {
      // Normalizes delay into object form
      var delay = {
        show: 0,
        hide: 0
      };

      if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isPlainObject"])(this.delay)) {
        delay.show = Math.max(parseInt(this.delay.show, 10) || 0, 0);
        delay.hide = Math.max(parseInt(this.delay.hide, 10) || 0, 0);
      } else if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isNumber"])(this.delay) || Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isString"])(this.delay)) {
        delay.show = delay.hide = Math.max(parseInt(this.delay, 10) || 0, 0);
      }

      return delay;
    },
    computedTriggers: function computedTriggers() {
      // Returns the triggers in sorted array form
      // TODO: Switch this to object form for easier lookup
      return Object(_utils_array__WEBPACK_IMPORTED_MODULE_4__["concat"])(this.triggers).filter(Boolean).join(' ').trim().toLowerCase().split(/\s+/).sort();
    },
    isWithActiveTrigger: function isWithActiveTrigger() {
      for (var trigger in this.activeTrigger) {
        if (this.activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    },
    computedTemplateData: function computedTemplateData() {
      return {
        title: this.title,
        content: this.content,
        variant: this.variant,
        customClass: this.customClass,
        noFade: this.noFade,
        interactive: this.interactive
      };
    }
  },
  watch: {
    computedTriggers: function computedTriggers(newTriggers, oldTriggers) {
      var _this = this;

      // Triggers have changed, so re-register them

      /* istanbul ignore next */
      if (!Object(_utils_loose_equal__WEBPACK_IMPORTED_MODULE_2__["default"])(newTriggers, oldTriggers)) {
        this.$nextTick(function () {
          // Disable trigger listeners
          _this.unListen(); // Clear any active triggers that are no longer in the list of triggers


          oldTriggers.forEach(function (trigger) {
            if (!Object(_utils_array__WEBPACK_IMPORTED_MODULE_4__["arrayIncludes"])(newTriggers, trigger)) {
              if (_this.activeTrigger[trigger]) {
                _this.activeTrigger[trigger] = false;
              }
            }
          }); // Re-enable the trigger listeners

          _this.listen();
        });
      }
    },
    computedTemplateData: function computedTemplateData() {
      // If any of the while open reactive "props" change,
      // ensure that the template updates accordingly
      this.handleTemplateUpdate();
    },
    disabled: function disabled(newVal) {
      newVal ? this.disable() : this.enable();
    }
  },
  created: function created() {
    var _this2 = this;

    // Create non-reactive properties
    this.$_tip = null;
    this.$_hoverTimeout = null;
    this.$_hoverState = '';
    this.$_visibleInterval = null;
    this.$_enabled = !this.disabled;
    this.$_noop = _utils_noop__WEBPACK_IMPORTED_MODULE_3__["default"].bind(this); // Destroy ourselves when the parent is destroyed

    if (this.$parent) {
      this.$parent.$once('hook:beforeDestroy', this.$destroy);
    }

    this.$nextTick(function () {
      var target = _this2.getTarget();

      if (target && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["contains"])(document.body, target)) {
        // Copy the parent's scoped style attribute
        _this2.scopeId = Object(_utils_get_scope_id__WEBPACK_IMPORTED_MODULE_1__["default"])(_this2.$parent); // Set up all trigger handlers and listeners

        _this2.listen();
      } else {
        /* istanbul ignore next */
        Object(_utils_warn__WEBPACK_IMPORTED_MODULE_9__["warn"])('Unable to find target element in document.', _this2.templateType);
      }
    });
  },
  updated: function updated()
  /* istanbul ignore next */
  {
    // Usually called when the slots/data changes
    this.$nextTick(this.handleTemplateUpdate);
  },
  deactivated: function deactivated()
  /* istanbul ignore next */
  {
    // In a keepalive that has been deactivated, so hide
    // the tooltip/popover if it is showing
    this.forceHide();
  },
  beforeDestroy: function beforeDestroy()
  /* istanbul ignore next */
  {
    // Remove all handler/listeners
    this.unListen();
    this.setWhileOpenListeners(false); // Clear any timeouts/intervals

    this.clearHoverTimeout();
    this.clearVisibilityInterval(); // Destroy the template

    this.destroyTemplate();
  },
  methods: {
    // --- Methods for creating and destroying the template ---
    getTemplate: function getTemplate() {
      // Overridden by BVPopover
      return _bv_tooltip_template__WEBPACK_IMPORTED_MODULE_11__["BVTooltipTemplate"];
    },
    updateData: function updateData() {
      var _this3 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // Method for updating popper/template data
      // We only update data if it exists, and has not changed
      var titleUpdated = false;
      Object(_utils_object__WEBPACK_IMPORTED_MODULE_8__["keys"])(templateData).forEach(function (prop) {
        if (!Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isUndefined"])(data[prop]) && _this3[prop] !== data[prop]) {
          _this3[prop] = data[prop];

          if (prop === 'title') {
            titleUpdated = true;
          }
        }
      });

      if (titleUpdated && this.localShow) {
        // If the title has updated, we may need to handle the title
        // attribute on the trigger target. We only do this while the
        // template is open
        this.fixTitle();
      }
    },
    createTemplateAndShow: function createTemplateAndShow() {
      // Creates the template instance and show it
      var container = this.getContainer();
      var Template = this.getTemplate();
      var $tip = this.$_tip = new Template({
        parent: this,
        // The following is not reactive to changes in the props data
        propsData: {
          // These values cannot be changed while template is showing
          id: this.computedId,
          html: this.html,
          placement: this.placement,
          fallbackPlacement: this.fallbackPlacement,
          target: this.getPlacementTarget(),
          boundary: this.getBoundary(),
          // Ensure the following are integers
          offset: parseInt(this.offset, 10) || 0,
          arrowPadding: parseInt(this.arrowPadding, 10) || 0,
          boundaryPadding: parseInt(this.boundaryPadding, 10) || 0
        }
      }); // We set the initial reactive data (values that can be changed while open)

      this.handleTemplateUpdate(); // Template transition phase events (handled once only)
      // When the template has mounted, but not visibly shown yet

      $tip.$once('show', this.onTemplateShow); // When the template has completed showing

      $tip.$once('shown', this.onTemplateShown); // When the template has started to hide

      $tip.$once('hide', this.onTemplateHide); // When the template has completed hiding

      $tip.$once('hidden', this.onTemplateHidden); // When the template gets destroyed for any reason

      $tip.$once('hook:destroyed', this.destroyTemplate); // Convenience events from template
      // To save us from manually adding/removing DOM
      // listeners to tip element when it is open

      $tip.$on('focusin', this.handleEvent);
      $tip.$on('focusout', this.handleEvent);
      $tip.$on('mouseenter', this.handleEvent);
      $tip.$on('mouseleave', this.handleEvent); // Mount (which triggers the `show`)

      $tip.$mount(container.appendChild(document.createElement('div'))); // Template will automatically remove its markup from DOM when hidden
    },
    hideTemplate: function hideTemplate() {
      // Trigger the template to start hiding
      // The template will emit the `hide` event after this and
      // then emit the `hidden` event once it is fully hidden
      // The `hook:destroyed` will also be called (safety measure)
      this.$_tip && this.$_tip.hide(); // Clear out any stragging active triggers

      this.clearActiveTriggers(); // Reset the hover state

      this.$_hoverState = '';
    },
    // Destroy the template instance and reset state
    destroyTemplate: function destroyTemplate() {
      this.setWhileOpenListeners(false);
      this.clearHoverTimeout();
      this.$_hoverState = '';
      this.clearActiveTriggers();
      this.localPlacementTarget = null;

      try {
        this.$_tip && this.$_tip.$destroy();
      } catch (_unused) {}

      this.$_tip = null;
      this.removeAriaDescribedby();
      this.restoreTitle();
      this.localShow = false;
    },
    getTemplateElement: function getTemplateElement() {
      return this.$_tip ? this.$_tip.$el : null;
    },
    handleTemplateUpdate: function handleTemplateUpdate() {
      var _this4 = this;

      // Update our template title/content "props"
      // So that the template updates accordingly
      var $tip = this.$_tip;

      if ($tip) {
        var props = ['title', 'content', 'variant', 'customClass', 'noFade', 'interactive']; // Only update the values if they have changed

        props.forEach(function (prop) {
          if ($tip[prop] !== _this4[prop]) {
            $tip[prop] = _this4[prop];
          }
        });
      }
    },
    // --- Show/Hide handlers ---
    // Show the tooltip
    show: function show() {
      var target = this.getTarget();

      if (!target || !Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["contains"])(document.body, target) || !Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["isVisible"])(target) || this.dropdownOpen() || (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isUndefinedOrNull"])(this.title) || this.title === '') && (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isUndefinedOrNull"])(this.content) || this.content === '')) {
        // If trigger element isn't in the DOM or is not visible, or
        // is on an open dropdown toggle, or has no content, then
        // we exit without showing
        return;
      } // If tip already exists, exit early


      if (this.$_tip || this.localShow) {
        /* istanbul ignore next */
        return;
      } // In the process of showing


      this.localShow = true; // Create a cancelable BvEvent

      var showEvt = this.buildEvent('show', {
        cancelable: true
      });
      this.emitEvent(showEvt); // Don't show if event cancelled

      /* istanbul ignore next: ignore for now */

      if (showEvt.defaultPrevented) {
        // Destroy the template (if for some reason it was created)

        /* istanbul ignore next */
        this.destroyTemplate();
        /* istanbul ignore next */

        return;
      } // Fix the title attribute on target


      this.fixTitle(); // Set aria-describedby on target

      this.addAriaDescribedby(); // Create and show the tooltip

      this.createTemplateAndShow();
    },
    hide: function hide() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // Hide the tooltip
      var tip = this.getTemplateElement();

      if (!tip || !this.localShow) {
        /* istanbul ignore next */
        this.restoreTitle();
        /* istanbul ignore next */

        return;
      } // Emit cancelable BvEvent 'hide'
      // We disable cancelling if `force` is true


      var hideEvt = this.buildEvent('hide', {
        cancelable: !force
      });
      this.emitEvent(hideEvt);
      /* istanbul ignore next: ignore for now */

      if (hideEvt.defaultPrevented) {
        // Don't hide if event cancelled

        /* istanbul ignore next */
        return;
      } // Tell the template to hide


      this.hideTemplate();
    },
    forceHide: function forceHide() {
      // Forcefully hides/destroys the template, regardless of any active triggers
      var tip = this.getTemplateElement();

      if (!tip || !this.localShow) {
        /* istanbul ignore next */
        return;
      } // Disable while open listeners/watchers
      // This is also done in the template `hide` evt handler


      this.setWhileOpenListeners(false); // Clear any hover enter/leave event

      this.clearHoverTimeout();
      this.$_hoverState = '';
      this.clearActiveTriggers(); // Disable the fade animation on the template

      if (this.$_tip) {
        this.$_tip.noFade = true;
      } // Hide the tip (with force = true)


      this.hide(true);
    },
    enable: function enable() {
      this.$_enabled = true; // Create a non-cancelable BvEvent

      this.emitEvent(this.buildEvent('enabled'));
    },
    disable: function disable() {
      this.$_enabled = false; // Create a non-cancelable BvEvent

      this.emitEvent(this.buildEvent('disabled'));
    },
    // --- Handlers for template events ---
    // When template is inserted into DOM, but not yet shown
    onTemplateShow: function onTemplateShow() {
      // Enable while open listeners/watchers
      this.setWhileOpenListeners(true);
    },
    // When template show transition completes
    onTemplateShown: function onTemplateShown() {
      var prevHoverState = this.$_hoverState;
      this.$_hoverState = '';

      if (prevHoverState === 'out') {
        this.leave(null);
      } // Emit a non-cancelable BvEvent 'shown'


      this.emitEvent(this.buildEvent('shown'));
    },
    // When template is starting to hide
    onTemplateHide: function onTemplateHide() {
      // Disable while open listeners/watchers
      this.setWhileOpenListeners(false);
    },
    // When template has completed closing (just before it self destructs)
    onTemplateHidden: function onTemplateHidden() {
      // Destroy the template
      this.destroyTemplate(); // Emit a non-cancelable BvEvent 'shown'

      this.emitEvent(this.buildEvent('hidden'));
    },
    // --- Utility methods ---
    getTarget: function getTarget() {
      // Handle case where target may be a component ref
      var target = this.target ? this.target.$el || this.target : null; // If an ID

      target = Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isString"])(target) ? Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["getById"])(target.replace(/^#/, '')) : target; // If a function

      target = Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isFunction"])(target) ? target() : target; // If an element ref

      return Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["isElement"])(target) ? target : null;
    },
    getPlacementTarget: function getPlacementTarget() {
      // This is the target that the tooltip will be placed on, which may not
      // necessarily be the same element that has the trigger event listeners
      // For now, this is the same as target
      // TODO:
      //   Add in child selector support
      //   Add in visibility checks for this element
      //   Fallback to target if not found
      return this.getTarget();
    },
    getTargetId: function getTargetId() {
      // Returns the ID of the trigger element
      var target = this.getTarget();
      return target && target.id ? target.id : null;
    },
    getContainer: function getContainer() {
      // Handle case where container may be a component ref
      var container = this.container ? this.container.$el || this.container : false;
      var body = document.body;
      var target = this.getTarget(); // If we are in a modal, we append to the modal instead
      // of body, unless a container is specified
      // TODO:
      //   Template should periodically check to see if it is in dom
      //   And if not, self destruct (if container got v-if'ed out of DOM)
      //   Or this could possibly be part of the visibility check

      return container === false ? Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["closest"])(MODAL_SELECTOR, target) || body : Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_7__["isString"])(container) ? Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["getById"])(container.replace(/^#/, '')) || body : body;
    },
    getBoundary: function getBoundary() {
      return this.boundary ? this.boundary.$el || this.boundary : 'scrollParent';
    },
    isInModal: function isInModal() {
      var target = this.getTarget();
      return target && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["closest"])(MODAL_SELECTOR, target);
    },
    isDropdown: function isDropdown() {
      // Returns true if trigger is a dropdown
      var target = this.getTarget();
      return target && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["hasClass"])(target, DROPDOWN_CLASS);
    },
    dropdownOpen: function dropdownOpen() {
      // Returns true if trigger is a dropdown and the dropdown menu is open
      var target = this.getTarget();
      return this.isDropdown() && target && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["select"])(DROPDOWN_OPEN_SELECTOR, target);
    },
    clearHoverTimeout: function clearHoverTimeout() {
      if (this.$_hoverTimeout) {
        clearTimeout(this.$_hoverTimeout);
        this.$_hoverTimeout = null;
      }
    },
    clearVisibilityInterval: function clearVisibilityInterval() {
      if (this.$_visibleInterval) {
        clearInterval(this.$_visibleInterval);
        this.$_visibleInterval = null;
      }
    },
    clearActiveTriggers: function clearActiveTriggers() {
      for (var trigger in this.activeTrigger) {
        this.activeTrigger[trigger] = false;
      }
    },
    addAriaDescribedby: function addAriaDescribedby() {
      // Add aria-describedby on trigger element, without removing any other IDs
      var target = this.getTarget();
      var desc = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["getAttr"])(target, 'aria-describedby') || '';
      desc = desc.split(/\s+/).concat(this.computedId).join(' ').trim(); // Update/add aria-described by

      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["setAttr"])(target, 'aria-describedby', desc);
    },
    removeAriaDescribedby: function removeAriaDescribedby() {
      var _this5 = this;

      // Remove aria-describedby on trigger element, without removing any other IDs
      var target = this.getTarget();
      var desc = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["getAttr"])(target, 'aria-describedby') || '';
      desc = desc.split(/\s+/).filter(function (d) {
        return d !== _this5.computedId;
      }).join(' ').trim(); // Update or remove aria-describedby

      if (desc) {
        /* istanbul ignore next */
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["setAttr"])(target, 'aria-describedby', desc);
      } else {
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["removeAttr"])(target, 'aria-describedby');
      }
    },
    fixTitle: function fixTitle() {
      // If the target has a title attribute, null it out and
      // store on data-title
      var target = this.getTarget();

      if (target && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["getAttr"])(target, 'title')) {
        // We only update title attribute if it has a value
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["setAttr"])(target, 'data-original-title', Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["getAttr"])(target, 'title') || '');
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["setAttr"])(target, 'title', '');
      }
    },
    restoreTitle: function restoreTitle() {
      // If target had a title, restore the title attribute
      // and remove the data-title attribute
      var target = this.getTarget();

      if (target && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["hasAttr"])(target, 'data-original-title')) {
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["setAttr"])(target, 'title', Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["getAttr"])(target, 'data-original-title') || '');
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["removeAttr"])(target, 'data-original-title');
      }
    },
    // --- BvEvent helpers ---
    buildEvent: function buildEvent(type) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // Defaults to a non-cancellable event
      return new _utils_bv_event_class__WEBPACK_IMPORTED_MODULE_10__["BvEvent"](type, _objectSpread({
        cancelable: false,
        target: this.getTarget(),
        relatedTarget: this.getTemplateElement() || null,
        componentId: this.computedId,
        vueTarget: this
      }, options));
    },
    emitEvent: function emitEvent(bvEvt) {
      // Emits a BvEvent on $root and this instance
      var evtName = bvEvt.type;
      var $root = this.$root;

      if ($root && $root.$emit) {
        // Emit an event on $root
        $root.$emit("bv::".concat(this.templateType, "::").concat(evtName), bvEvt);
      }

      this.$emit(evtName, bvEvt);
    },
    // --- Event handler setup methods ---
    listen: function listen() {
      var _this6 = this;

      // Enable trigger event handlers
      var el = this.getTarget();

      if (!el) {
        /* istanbul ignore next */
        return;
      } // Listen for global show/hide events


      this.setRootListener(true); // Set up our listeners on the target trigger element

      this.computedTriggers.forEach(function (trigger) {
        if (trigger === 'click') {
          Object(_utils_events__WEBPACK_IMPORTED_MODULE_6__["eventOn"])(el, 'click', _this6.handleEvent, _utils_events__WEBPACK_IMPORTED_MODULE_6__["EVENT_OPTIONS_NO_CAPTURE"]);
        } else if (trigger === 'focus') {
          Object(_utils_events__WEBPACK_IMPORTED_MODULE_6__["eventOn"])(el, 'focusin', _this6.handleEvent, _utils_events__WEBPACK_IMPORTED_MODULE_6__["EVENT_OPTIONS_NO_CAPTURE"]);
          Object(_utils_events__WEBPACK_IMPORTED_MODULE_6__["eventOn"])(el, 'focusout', _this6.handleEvent, _utils_events__WEBPACK_IMPORTED_MODULE_6__["EVENT_OPTIONS_NO_CAPTURE"]);
        } else if (trigger === 'blur') {
          // Used to close $tip when element looses focus

          /* istanbul ignore next */
          Object(_utils_events__WEBPACK_IMPORTED_MODULE_6__["eventOn"])(el, 'focusout', _this6.handleEvent, _utils_events__WEBPACK_IMPORTED_MODULE_6__["EVENT_OPTIONS_NO_CAPTURE"]);
        } else if (trigger === 'hover') {
          Object(_utils_events__WEBPACK_IMPORTED_MODULE_6__["eventOn"])(el, 'mouseenter', _this6.handleEvent, _utils_events__WEBPACK_IMPORTED_MODULE_6__["EVENT_OPTIONS_NO_CAPTURE"]);
          Object(_utils_events__WEBPACK_IMPORTED_MODULE_6__["eventOn"])(el, 'mouseleave', _this6.handleEvent, _utils_events__WEBPACK_IMPORTED_MODULE_6__["EVENT_OPTIONS_NO_CAPTURE"]);
        }
      }, this);
    },
    unListen: function unListen()
    /* istanbul ignore next */
    {
      var _this7 = this;

      // Remove trigger event handlers
      var events = ['click', 'focusin', 'focusout', 'mouseenter', 'mouseleave'];
      var target = this.getTarget(); // Stop listening for global show/hide/enable/disable events

      this.setRootListener(false); // Clear out any active target listeners

      events.forEach(function (evt) {
        target && Object(_utils_events__WEBPACK_IMPORTED_MODULE_6__["eventOff"])(target, evt, _this7.handleEvent, _utils_events__WEBPACK_IMPORTED_MODULE_6__["EVENT_OPTIONS_NO_CAPTURE"]);
      }, this);
    },
    setRootListener: function setRootListener(on) {
      // Listen for global `bv::{hide|show}::{tooltip|popover}` hide request event
      var $root = this.$root;

      if ($root) {
        var method = on ? '$on' : '$off';
        var type = this.templateType;
        $root[method]("bv::hide::".concat(type), this.doHide);
        $root[method]("bv::show::".concat(type), this.doShow);
        $root[method]("bv::disable::".concat(type), this.doDisable);
        $root[method]("bv::enable::".concat(type), this.doEnable);
      }
    },
    setWhileOpenListeners: function setWhileOpenListeners(on) {
      // Events that are only registered when the template is showing
      // Modal close events
      this.setModalListener(on); // Dropdown open events (if we are attached to a dropdown)

      this.setDropdownListener(on); // Periodic $element visibility check
      // For handling when tip target is in <keepalive>, tabs, carousel, etc

      this.visibleCheck(on); // On-touch start listeners

      this.setOnTouchStartListener(on);
    },
    // Handler for periodic visibility check
    visibleCheck: function visibleCheck(on) {
      var _this8 = this;

      this.clearVisibilityInterval();
      var target = this.getTarget();
      var tip = this.getTemplateElement();

      if (on) {
        this.$_visibleInterval = setInterval(function () {
          if (tip && _this8.localShow && (!target.parentNode || !Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["isVisible"])(target))) {
            // Target element is no longer visible or not in DOM, so force-hide the tooltip
            _this8.forceHide();
          }
        }, 100);
      }
    },
    setModalListener: function setModalListener(on) {
      // Handle case where tooltip/target is in a modal
      if (this.isInModal()) {
        // We can listen for modal hidden events on `$root`
        this.$root[on ? '$on' : '$off'](MODAL_CLOSE_EVENT, this.forceHide);
      }
    },
    setOnTouchStartListener: function setOnTouchStartListener(on)
    /* istanbul ignore next: JSDOM doesn't support `ontouchstart` */
    {
      var _this9 = this;

      // If this is a touch-enabled device we add extra empty
      // `mouseover` listeners to the body's immediate children
      // Only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      if ('ontouchstart' in document.documentElement) {
        Object(_utils_array__WEBPACK_IMPORTED_MODULE_4__["from"])(document.body.children).forEach(function (el) {
          Object(_utils_events__WEBPACK_IMPORTED_MODULE_6__["eventOnOff"])(on, el, 'mouseover', _this9.$_noop);
        });
      }
    },
    setDropdownListener: function setDropdownListener(on) {
      var target = this.getTarget();

      if (!target || !this.$root || !this.isDropdown) {
        return;
      } // We can listen for dropdown shown events on its instance
      // TODO:
      //   We could grab the ID from the dropdown, and listen for
      //   $root events for that particular dropdown id
      //   Dropdown shown and hidden events will need to emit
      //   Note: Dropdown auto-ID happens in a `$nextTick()` after mount
      //         So the ID lookup would need to be done in a `$nextTick()`


      if (target.__vue__) {
        target.__vue__[on ? '$on' : '$off']('shown', this.forceHide);
      }
    },
    // --- Event handlers ---
    handleEvent: function handleEvent(evt) {
      // General trigger event handler
      // target is the trigger element
      var target = this.getTarget();

      if (!target || Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["isDisabled"])(target) || !this.$_enabled || this.dropdownOpen()) {
        // If disabled or not enabled, or if a dropdown that is open, don't do anything
        // If tip is shown before element gets disabled, then tip will not
        // close until no longer disabled or forcefully closed
        return;
      }

      var type = evt.type;
      var triggers = this.computedTriggers;

      if (type === 'click' && Object(_utils_array__WEBPACK_IMPORTED_MODULE_4__["arrayIncludes"])(triggers, 'click')) {
        this.click(evt);
      } else if (type === 'mouseenter' && Object(_utils_array__WEBPACK_IMPORTED_MODULE_4__["arrayIncludes"])(triggers, 'hover')) {
        // `mouseenter` is a non-bubbling event
        this.enter(evt);
      } else if (type === 'focusin' && Object(_utils_array__WEBPACK_IMPORTED_MODULE_4__["arrayIncludes"])(triggers, 'focus')) {
        // `focusin` is a bubbling event
        // `evt` includes `relatedTarget` (element loosing focus)
        this.enter(evt);
      } else if (type === 'focusout' && (Object(_utils_array__WEBPACK_IMPORTED_MODULE_4__["arrayIncludes"])(triggers, 'focus') || Object(_utils_array__WEBPACK_IMPORTED_MODULE_4__["arrayIncludes"])(triggers, 'blur')) || type === 'mouseleave' && Object(_utils_array__WEBPACK_IMPORTED_MODULE_4__["arrayIncludes"])(triggers, 'hover')) {
        // `focusout` is a bubbling event
        // `mouseleave` is a non-bubbling event
        // `tip` is the template (will be null if not open)
        var tip = this.getTemplateElement(); // `evtTarget` is the element which is loosing focus/hover and

        var evtTarget = evt.target; // `relatedTarget` is the element gaining focus/hover

        var relatedTarget = evt.relatedTarget;
        /* istanbul ignore next */

        if ( // From tip to target
        tip && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["contains"])(tip, evtTarget) && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["contains"])(target, relatedTarget) || // From target to tip
        tip && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["contains"])(target, evtTarget) && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["contains"])(tip, relatedTarget) || // Within tip
        tip && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["contains"])(tip, evtTarget) && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["contains"])(tip, relatedTarget) || // Within target
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["contains"])(target, evtTarget) && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["contains"])(target, relatedTarget)) {
          // If focus/hover moves within `tip` and `target`, don't trigger a leave
          return;
        } // Otherwise trigger a leave


        this.leave(evt);
      }
    },
    doHide: function doHide(id) {
      // Programmatically hide tooltip or popover
      if (!id || this.getTargetId() === id || this.computedId === id) {
        // Close all tooltips or popovers, or this specific tip (with ID)
        this.forceHide();
      }
    },
    doShow: function doShow(id) {
      // Programmatically show tooltip or popover
      if (!id || this.getTargetId() === id || this.computedId === id) {
        // Open all tooltips or popovers, or this specific tip (with ID)
        this.show();
      }
    },
    doDisable: function doDisable(id)
    /*istanbul ignore next: ignore for now */
    {
      // Programmatically disable tooltip or popover
      if (!id || this.getTargetId() === id || this.computedId === id) {
        // Disable all tooltips or popovers (no ID), or this specific tip (with ID)
        this.disable();
      }
    },
    doEnable: function doEnable(id)
    /*istanbul ignore next: ignore for now */
    {
      // Programmatically enable tooltip or popover
      if (!id || this.getTargetId() === id || this.computedId === id) {
        // Enable all tooltips or popovers (no ID), or this specific tip (with ID)
        this.enable();
      }
    },
    click: function click() {
      if (!this.$_enabled || this.dropdownOpen()) {
        /* istanbul ignore next */
        return;
      }

      this.activeTrigger.click = !this.activeTrigger.click;

      if (this.isWithActiveTrigger) {
        this.enter(null);
      } else {
        /* istanbul ignore next */
        this.leave(null);
      }
    },
    toggle: function toggle()
    /* istanbul ignore next */
    {
      // Manual toggle handler
      if (!this.$_enabled || this.dropdownOpen()) {
        /* istanbul ignore next */
        return;
      } // Should we register as an active trigger?
      // this.activeTrigger.manual = !this.activeTrigger.manual


      if (this.localShow) {
        this.leave(null);
      } else {
        this.enter(null);
      }
    },
    enter: function enter() {
      var _this10 = this;

      var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      // Opening trigger handler
      // Note: Click events are sent with evt === null
      if (evt) {
        this.activeTrigger[evt.type === 'focusin' ? 'focus' : 'hover'] = true;
      }
      /* istanbul ignore next */


      if (this.localShow || this.$_hoverState === 'in') {
        this.$_hoverState = 'in';
        return;
      }

      this.clearHoverTimeout();
      this.$_hoverState = 'in';

      if (!this.computedDelay.show) {
        this.show();
      } else {
        // Hide any title attribute while enter delay is active
        this.fixTitle();
        this.$_hoverTimeout = setTimeout(function () {
          /* istanbul ignore else */
          if (_this10.$_hoverState === 'in') {
            _this10.show();
          } else if (!_this10.localShow) {
            _this10.restoreTitle();
          }
        }, this.computedDelay.show);
      }
    },
    leave: function leave() {
      var _this11 = this;

      var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      // Closing trigger handler
      // Note: Click events are sent with evt === null
      if (evt) {
        this.activeTrigger[evt.type === 'focusout' ? 'focus' : 'hover'] = false;
        /* istanbul ignore next */

        if (evt.type === 'focusout' && Object(_utils_array__WEBPACK_IMPORTED_MODULE_4__["arrayIncludes"])(this.computedTriggers, 'blur')) {
          // Special case for `blur`: we clear out the other triggers
          this.activeTrigger.click = false;
          this.activeTrigger.hover = false;
        }
      }
      /* istanbul ignore next: ignore for now */


      if (this.isWithActiveTrigger) {
        return;
      }

      this.clearHoverTimeout();
      this.$_hoverState = 'out';

      if (!this.computedDelay.hide) {
        this.hide();
      } else {
        this.$_hoverTimeout = setTimeout(function () {
          if (_this11.$_hoverState === 'out') {
            _this11.hide();
          }
        }, this.computedDelay.hide);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/directives/popover/popover.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/directives/popover/popover.js ***!
  \**********************************************************************/
/*! exports provided: VBPopover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VBPopover", function() { return VBPopover; });
/* harmony import */ var _utils_get_scope_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/get-scope-id */ "./node_modules/bootstrap-vue/esm/utils/get-scope-id.js");
/* harmony import */ var _utils_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/identity */ "./node_modules/bootstrap-vue/esm/utils/identity.js");
/* harmony import */ var _utils_loose_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/loose-equal */ "./node_modules/bootstrap-vue/esm/utils/loose-equal.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/config */ "./node_modules/bootstrap-vue/esm/utils/config.js");
/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/env */ "./node_modules/bootstrap-vue/esm/utils/env.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _components_popover_helpers_bv_popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/popover/helpers/bv-popover */ "./node_modules/bootstrap-vue/esm/components/popover/helpers/bv-popover.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // Key which we use to store tooltip object on element

var BV_POPOVER = '__BV_Popover__'; // Default trigger

var DefaultTrigger = 'click'; // Valid event triggers

var validTriggers = {
  focus: true,
  hover: true,
  click: true,
  blur: true,
  manual: true
}; // Directive modifier test regular expressions. Pre-compile for performance

var htmlRE = /^html$/i;
var noFadeRE = /^nofade$/i;
var placementRE = /^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i;
var boundaryRE = /^(window|viewport|scrollParent)$/i;
var delayRE = /^d\d+$/i;
var delayShowRE = /^ds\d+$/i;
var delayHideRE = /^dh\d+$/i;
var offsetRE = /^o-?\d+$/i;
var variantRE = /^v-.+$/i;
var spacesRE = /\s+/; // Build a Popover config based on bindings (if any)
// Arguments and modifiers take precedence over passed value config object

var parseBindings = function parseBindings(bindings, vnode)
/* istanbul ignore next: not easy to test */
{
  // We start out with a basic config
  var NAME = 'BPopover';
  var config = {
    title: undefined,
    content: undefined,
    trigger: '',
    // Default set below if needed
    placement: 'right',
    fallbackPlacement: 'flip',
    container: false,
    // Default of body
    animation: true,
    offset: 0,
    disabled: false,
    id: null,
    html: false,
    delay: Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__["getComponentConfig"])(NAME, 'delay'),
    boundary: String(Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__["getComponentConfig"])(NAME, 'boundary')),
    boundaryPadding: parseInt(Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__["getComponentConfig"])(NAME, 'boundaryPadding'), 10) || 0,
    variant: Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__["getComponentConfig"])(NAME, 'variant'),
    customClass: Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__["getComponentConfig"])(NAME, 'customClass')
  }; // Process `bindings.value`

  if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_6__["isString"])(bindings.value) || Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_6__["isNumber"])(bindings.value)) {
    // Value is popover content (html optionally supported)
    config.content = bindings.value;
  } else if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(bindings.value)) {
    // Content generator function
    config.content = bindings.value;
  } else if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_6__["isPlainObject"])(bindings.value)) {
    // Value is config object, so merge
    config = _objectSpread({}, config, {}, bindings.value);
  } // If argument, assume element ID of container element


  if (bindings.arg) {
    // Element ID specified as arg
    // We must prepend '#' to become a CSS selector
    config.container = "#".concat(bindings.arg);
  } // If title is not provided, try title attribute


  if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(config.title)) {
    // Try attribute
    var data = vnode.data || {};
    config.title = data.attrs && !Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_6__["isUndefinedOrNull"])(data.attrs.title) ? data.attrs.title : undefined;
  } // Normalize delay


  if (!Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_6__["isPlainObject"])(config.delay)) {
    config.delay = {
      show: parseInt(config.delay, 10) || 0,
      hide: parseInt(config.delay, 10) || 0
    };
  } // Process modifiers


  Object(_utils_object__WEBPACK_IMPORTED_MODULE_7__["keys"])(bindings.modifiers).forEach(function (mod) {
    if (htmlRE.test(mod)) {
      // Title/content allows HTML
      config.html = true;
    } else if (noFadeRE.test(mod)) {
      // No animation
      config.animation = false;
    } else if (placementRE.test(mod)) {
      // Placement of popover
      config.placement = mod;
    } else if (boundaryRE.test(mod)) {
      // Boundary of popover
      mod = mod === 'scrollparent' ? 'scrollParent' : mod;
      config.boundary = mod;
    } else if (delayRE.test(mod)) {
      // Delay value
      var delay = parseInt(mod.slice(1), 10) || 0;
      config.delay.show = delay;
      config.delay.hide = delay;
    } else if (delayShowRE.test(mod)) {
      // Delay show value
      config.delay.show = parseInt(mod.slice(2), 10) || 0;
    } else if (delayHideRE.test(mod)) {
      // Delay hide value
      config.delay.hide = parseInt(mod.slice(2), 10) || 0;
    } else if (offsetRE.test(mod)) {
      // Offset value, negative allowed
      config.offset = parseInt(mod.slice(1), 10) || 0;
    } else if (variantRE.test(mod)) {
      // Variant
      config.variant = mod.slice(2) || null;
    }
  }); // Special handling of event trigger modifiers trigger is
  // a space separated list

  var selectedTriggers = {}; // Parse current config object trigger

  Object(_utils_array__WEBPACK_IMPORTED_MODULE_3__["concat"])(config.trigger || '').filter(_utils_identity__WEBPACK_IMPORTED_MODULE_1__["default"]).join(' ').trim().toLowerCase().split(spacesRE).forEach(function (trigger) {
    if (validTriggers[trigger]) {
      selectedTriggers[trigger] = true;
    }
  }); // Parse modifiers for triggers

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_7__["keys"])(bindings.modifiers).forEach(function (mod) {
    mod = mod.toLowerCase();

    if (validTriggers[mod]) {
      // If modifier is a valid trigger
      selectedTriggers[mod] = true;
    }
  }); // Sanitize triggers

  config.trigger = Object(_utils_object__WEBPACK_IMPORTED_MODULE_7__["keys"])(selectedTriggers).join(' ');

  if (config.trigger === 'blur') {
    // Blur by itself is useless, so convert it to 'focus'
    config.trigger = 'focus';
  }

  if (!config.trigger) {
    // Use default trigger
    config.trigger = DefaultTrigger;
  }

  return config;
}; // Add or update Popover on our element


var applyPopover = function applyPopover(el, bindings, vnode) {
  if (!_utils_env__WEBPACK_IMPORTED_MODULE_5__["isBrowser"]) {
    /* istanbul ignore next */
    return;
  }

  var config = parseBindings(bindings, vnode);

  if (!el[BV_POPOVER]) {
    var $parent = vnode.context;
    el[BV_POPOVER] = new _components_popover_helpers_bv_popover__WEBPACK_IMPORTED_MODULE_8__["BVPopover"]({
      parent: $parent,
      // Add the parent's scoped style attribute data
      _scopeId: Object(_utils_get_scope_id__WEBPACK_IMPORTED_MODULE_0__["default"])($parent, undefined)
    });
    el[BV_POPOVER].__bv_prev_data__ = {};
    el[BV_POPOVER].$on('show', function ()
    /* istanbul ignore next: for now */
    {
      // Before showing the popover, we update the title
      // and content if they are functions
      var data = {};

      if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(config.title)) {
        data.title = config.title(el);
      }

      if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(config.content)) {
        data.content = config.content(el);
      }

      if (Object(_utils_object__WEBPACK_IMPORTED_MODULE_7__["keys"])(data).length > 0) {
        el[BV_POPOVER].updateData(data);
      }
    });
  }

  var data = {
    title: config.title,
    content: config.content,
    triggers: config.trigger,
    placement: config.placement,
    fallbackPlacement: config.fallbackPlacement,
    variant: config.variant,
    customClass: config.customClass,
    container: config.container,
    boundary: config.boundary,
    delay: config.delay,
    offset: config.offset,
    noFade: !config.animation,
    id: config.id,
    disabled: config.disabled,
    html: config.html
  };
  var oldData = el[BV_POPOVER].__bv_prev_data__;
  el[BV_POPOVER].__bv_prev_data__ = data;

  if (!Object(_utils_loose_equal__WEBPACK_IMPORTED_MODULE_2__["default"])(data, oldData)) {
    // We only update the instance if data has changed
    var newData = {
      target: el
    };
    Object(_utils_object__WEBPACK_IMPORTED_MODULE_7__["keys"])(data).forEach(function (prop) {
      // We only pass data properties that have changed
      if (data[prop] !== oldData[prop]) {
        // If title/content is a function, we execute it here
        newData[prop] = (prop === 'title' || prop === 'content') && Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(data[prop]) ? data[prop](el) : data[prop];
      }
    });
    el[BV_POPOVER].updateData(newData);
  }
}; // Remove Popover from our element


var removePopover = function removePopover(el) {
  if (el[BV_POPOVER]) {
    el[BV_POPOVER].$destroy();
    el[BV_POPOVER] = null;
  }

  delete el[BV_POPOVER];
}; // Export our directive


var VBPopover = {
  bind: function bind(el, bindings, vnode) {
    applyPopover(el, bindings, vnode);
  },
  // We use `componentUpdated` here instead of `update`, as the former
  // waits until the containing component and children have finished updating
  componentUpdated: function componentUpdated(el, bindings, vnode) {
    // Performed in a `$nextTick()` to prevent endless render/update loops
    vnode.context.$nextTick(function () {
      applyPopover(el, bindings, vnode);
    });
  },
  unbind: function unbind(el) {
    removePopover(el);
  }
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/directives/tooltip/tooltip.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/directives/tooltip/tooltip.js ***!
  \**********************************************************************/
/*! exports provided: VBTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VBTooltip", function() { return VBTooltip; });
/* harmony import */ var _utils_get_scope_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/get-scope-id */ "./node_modules/bootstrap-vue/esm/utils/get-scope-id.js");
/* harmony import */ var _utils_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/identity */ "./node_modules/bootstrap-vue/esm/utils/identity.js");
/* harmony import */ var _utils_loose_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/loose-equal */ "./node_modules/bootstrap-vue/esm/utils/loose-equal.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/config */ "./node_modules/bootstrap-vue/esm/utils/config.js");
/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/env */ "./node_modules/bootstrap-vue/esm/utils/env.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _components_tooltip_helpers_bv_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/tooltip/helpers/bv-tooltip */ "./node_modules/bootstrap-vue/esm/components/tooltip/helpers/bv-tooltip.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // Key which we use to store tooltip object on element

var BV_TOOLTIP = '__BV_Tooltip__'; // Default trigger

var DefaultTrigger = 'hover focus'; // Valid event triggers

var validTriggers = {
  focus: true,
  hover: true,
  click: true,
  blur: true,
  manual: true
}; // Directive modifier test regular expressions. Pre-compile for performance

var htmlRE = /^html$/i;
var noninteractiveRE = /^noninteractive$/i;
var noFadeRE = /^nofade$/i;
var placementRE = /^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i;
var boundaryRE = /^(window|viewport|scrollParent)$/i;
var delayRE = /^d\d+$/i;
var delayShowRE = /^ds\d+$/i;
var delayHideRE = /^dh\d+$/i;
var offsetRE = /^o-?\d+$/i;
var variantRE = /^v-.+$/i;
var spacesRE = /\s+/; // Build a Tooltip config based on bindings (if any)
// Arguments and modifiers take precedence over passed value config object

var parseBindings = function parseBindings(bindings, vnode)
/* istanbul ignore next: not easy to test */
{
  // We start out with a basic config
  var NAME = 'BTooltip'; // Default config

  var config = {
    title: undefined,
    trigger: '',
    // Default set below if needed
    placement: 'top',
    fallbackPlacement: 'flip',
    container: false,
    // Default of body
    animation: true,
    offset: 0,
    id: null,
    html: false,
    interactive: true,
    disabled: false,
    delay: Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__["getComponentConfig"])(NAME, 'delay'),
    boundary: String(Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__["getComponentConfig"])(NAME, 'boundary')),
    boundaryPadding: parseInt(Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__["getComponentConfig"])(NAME, 'boundaryPadding'), 10) || 0,
    variant: Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__["getComponentConfig"])(NAME, 'variant'),
    customClass: Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__["getComponentConfig"])(NAME, 'customClass')
  }; // Process `bindings.value`

  if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_6__["isString"])(bindings.value) || Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_6__["isNumber"])(bindings.value)) {
    // Value is tooltip content (HTML optionally supported)
    config.title = bindings.value;
  } else if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(bindings.value)) {
    // Title generator function
    config.title = bindings.value;
  } else if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_6__["isPlainObject"])(bindings.value)) {
    // Value is config object, so merge
    config = _objectSpread({}, config, {}, bindings.value);
  } // If title is not provided, try title attribute


  if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(config.title)) {
    // Try attribute
    var data = vnode.data || {};
    config.title = data.attrs && !Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_6__["isUndefinedOrNull"])(data.attrs.title) ? data.attrs.title : undefined;
  } // Normalize delay


  if (!Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_6__["isPlainObject"])(config.delay)) {
    config.delay = {
      show: parseInt(config.delay, 10) || 0,
      hide: parseInt(config.delay, 10) || 0
    };
  } // If argument, assume element ID of container element


  if (bindings.arg) {
    // Element ID specified as arg
    // We must prepend '#' to become a CSS selector
    config.container = "#".concat(bindings.arg);
  } // Process modifiers


  Object(_utils_object__WEBPACK_IMPORTED_MODULE_7__["keys"])(bindings.modifiers).forEach(function (mod) {
    if (htmlRE.test(mod)) {
      // Title allows HTML
      config.html = true;
    } else if (noninteractiveRE.test(mod)) {
      // Noninteractive
      config.interactive = false;
    } else if (noFadeRE.test(mod)) {
      // No animation
      config.animation = false;
    } else if (placementRE.test(mod)) {
      // Placement of tooltip
      config.placement = mod;
    } else if (boundaryRE.test(mod)) {
      // Boundary of tooltip
      mod = mod === 'scrollparent' ? 'scrollParent' : mod;
      config.boundary = mod;
    } else if (delayRE.test(mod)) {
      // Delay value
      var delay = parseInt(mod.slice(1), 10) || 0;
      config.delay.show = delay;
      config.delay.hide = delay;
    } else if (delayShowRE.test(mod)) {
      // Delay show value
      config.delay.show = parseInt(mod.slice(2), 10) || 0;
    } else if (delayHideRE.test(mod)) {
      // Delay hide value
      config.delay.hide = parseInt(mod.slice(2), 10) || 0;
    } else if (offsetRE.test(mod)) {
      // Offset value, negative allowed
      config.offset = parseInt(mod.slice(1), 10) || 0;
    } else if (variantRE.test(mod)) {
      // Variant
      config.variant = mod.slice(2) || null;
    }
  }); // Special handling of event trigger modifiers trigger is
  // a space separated list

  var selectedTriggers = {}; // Parse current config object trigger

  Object(_utils_array__WEBPACK_IMPORTED_MODULE_3__["concat"])(config.trigger || '').filter(_utils_identity__WEBPACK_IMPORTED_MODULE_1__["default"]).join(' ').trim().toLowerCase().split(spacesRE).forEach(function (trigger) {
    if (validTriggers[trigger]) {
      selectedTriggers[trigger] = true;
    }
  }); // Parse modifiers for triggers

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_7__["keys"])(bindings.modifiers).forEach(function (mod) {
    mod = mod.toLowerCase();

    if (validTriggers[mod]) {
      // If modifier is a valid trigger
      selectedTriggers[mod] = true;
    }
  }); // Sanitize triggers

  config.trigger = Object(_utils_object__WEBPACK_IMPORTED_MODULE_7__["keys"])(selectedTriggers).join(' ');

  if (config.trigger === 'blur') {
    // Blur by itself is useless, so convert it to 'focus'
    config.trigger = 'focus';
  }

  if (!config.trigger) {
    // Use default trigger
    config.trigger = DefaultTrigger;
  } // Return the config


  return config;
}; // Add/update Tooltip on our element


var applyTooltip = function applyTooltip(el, bindings, vnode) {
  if (!_utils_env__WEBPACK_IMPORTED_MODULE_5__["isBrowser"]) {
    /* istanbul ignore next */
    return;
  }

  var config = parseBindings(bindings, vnode);

  if (!el[BV_TOOLTIP]) {
    var $parent = vnode.context;
    el[BV_TOOLTIP] = new _components_tooltip_helpers_bv_tooltip__WEBPACK_IMPORTED_MODULE_8__["BVTooltip"]({
      parent: $parent,
      // Add the parent's scoped style attribute data
      _scopeId: Object(_utils_get_scope_id__WEBPACK_IMPORTED_MODULE_0__["default"])($parent, undefined)
    });
    el[BV_TOOLTIP].__bv_prev_data__ = {};
    el[BV_TOOLTIP].$on('show', function ()
    /* istanbul ignore next: for now */
    {
      // Before showing the tooltip, we update the title if it is a function
      if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(config.title)) {
        el[BV_TOOLTIP].updateData({
          title: config.title(el)
        });
      }
    });
  }

  var data = {
    title: config.title,
    triggers: config.trigger,
    placement: config.placement,
    fallbackPlacement: config.fallbackPlacement,
    variant: config.variant,
    customClass: config.customClass,
    container: config.container,
    boundary: config.boundary,
    delay: config.delay,
    offset: config.offset,
    noFade: !config.animation,
    id: config.id,
    interactive: config.interactive,
    disabled: config.disabled,
    html: config.html
  };
  var oldData = el[BV_TOOLTIP].__bv_prev_data__;
  el[BV_TOOLTIP].__bv_prev_data__ = data;

  if (!Object(_utils_loose_equal__WEBPACK_IMPORTED_MODULE_2__["default"])(data, oldData)) {
    // We only update the instance if data has changed
    var newData = {
      target: el
    };
    Object(_utils_object__WEBPACK_IMPORTED_MODULE_7__["keys"])(data).forEach(function (prop) {
      // We only pass data properties that have changed
      if (data[prop] !== oldData[prop]) {
        // if title is a function, we execute it here
        newData[prop] = prop === 'title' && Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(data[prop]) ? data[prop](el) : data[prop];
      }
    });
    el[BV_TOOLTIP].updateData(newData);
  }
}; // Remove Tooltip on our element


var removeTooltip = function removeTooltip(el) {
  if (el[BV_TOOLTIP]) {
    el[BV_TOOLTIP].$destroy();
    el[BV_TOOLTIP] = null;
  }

  delete el[BV_TOOLTIP];
}; // Export our directive


var VBTooltip = {
  bind: function bind(el, bindings, vnode) {
    applyTooltip(el, bindings, vnode);
  },
  // We use `componentUpdated` here instead of `update`, as the former
  // waits until the containing component and children have finished updating
  componentUpdated: function componentUpdated(el, bindings, vnode) {
    // Performed in a `$nextTick()` to prevent render update loops
    vnode.context.$nextTick(function () {
      applyTooltip(el, bindings, vnode);
    });
  },
  unbind: function unbind(el) {
    removeTooltip(el);
  }
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/scoped-style-attrs.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/scoped-style-attrs.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_get_scope_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/get-scope-id */ "./node_modules/bootstrap-vue/esm/utils/get-scope-id.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    scopedStyleAttrs: function scopedStyleAttrs() {
      var scopeId = Object(_utils_get_scope_id__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$parent);
      return scopeId ? _defineProperty({}, scopeId, '') : {};
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/bv-event.class.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/bv-event.class.js ***!
  \****************************************************************/
/*! exports provided: BvEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BvEvent", function() { return BvEvent; });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var BvEvent = /*#__PURE__*/function () {
  function BvEvent(type) {
    var eventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, BvEvent);

    // Start by emulating native Event constructor
    if (!type) {
      /* istanbul ignore next */
      throw new TypeError("Failed to construct '".concat(this.constructor.name, "'. 1 argument required, ").concat(arguments.length, " given."));
    } // Merge defaults first, the eventInit, and the type last
    // so it can't be overwritten


    Object(_object__WEBPACK_IMPORTED_MODULE_0__["assign"])(this, BvEvent.Defaults, this.constructor.Defaults, eventInit, {
      type: type
    }); // Freeze some props as readonly, but leave them enumerable

    Object(_object__WEBPACK_IMPORTED_MODULE_0__["defineProperties"])(this, {
      type: Object(_object__WEBPACK_IMPORTED_MODULE_0__["readonlyDescriptor"])(),
      cancelable: Object(_object__WEBPACK_IMPORTED_MODULE_0__["readonlyDescriptor"])(),
      nativeEvent: Object(_object__WEBPACK_IMPORTED_MODULE_0__["readonlyDescriptor"])(),
      target: Object(_object__WEBPACK_IMPORTED_MODULE_0__["readonlyDescriptor"])(),
      relatedTarget: Object(_object__WEBPACK_IMPORTED_MODULE_0__["readonlyDescriptor"])(),
      vueTarget: Object(_object__WEBPACK_IMPORTED_MODULE_0__["readonlyDescriptor"])(),
      componentId: Object(_object__WEBPACK_IMPORTED_MODULE_0__["readonlyDescriptor"])()
    }); // Create a private variable using closure scoping

    var defaultPrevented = false; // Recreate preventDefault method. One way setter

    this.preventDefault = function preventDefault() {
      if (this.cancelable) {
        defaultPrevented = true;
      }
    }; // Create `defaultPrevented` publicly accessible prop that
    // can only be altered by the preventDefault method


    Object(_object__WEBPACK_IMPORTED_MODULE_0__["defineProperty"])(this, 'defaultPrevented', {
      enumerable: true,
      get: function get() {
        return defaultPrevented;
      }
    });
  }

  _createClass(BvEvent, null, [{
    key: "Defaults",
    get: function get() {
      return {
        type: '',
        cancelable: true,
        nativeEvent: null,
        target: null,
        relatedTarget: null,
        vueTarget: null,
        componentId: null
      };
    }
  }]);

  return BvEvent;
}(); // Named Exports




/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/bv-transition.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/bv-transition.js ***!
  \***************************************************************/
/*! exports provided: BVTransition, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BVTransition", function() { return BVTransition; });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue */ "./node_modules/bootstrap-vue/esm/utils/vue.js");
/* harmony import */ var vue_functional_data_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Generic Bootstrap v4 fade (no-fade) transition component
//
// Assumes that `show` class is not required when
// the transition has finished the enter transition
// (show and fade classes are only applied during transition)



var NO_FADE_PROPS = {
  name: '',
  enterClass: '',
  enterActiveClass: '',
  enterToClass: 'show',
  leaveClass: 'show',
  leaveActiveClass: '',
  leaveToClass: ''
};

var FADE_PROPS = _objectSpread({}, NO_FADE_PROPS, {
  enterActiveClass: 'fade',
  leaveActiveClass: 'fade'
}); // @vue/component


var BVTransition = /*#__PURE__*/_vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  name: 'BVTransition',
  functional: true,
  props: {
    noFade: {
      // Only applicable to the built in transition
      // Has no effect if `trans-props` provided
      type: Boolean,
      default: false
    },
    appear: {
      // Has no effect if `trans-props` provided
      type: Boolean,
      default: false
    },
    mode: {
      // Can be overridden by user supplied trans-props
      type: String // default: undefined

    },
    // For user supplied transitions (if needed)
    transProps: {
      type: Object,
      default: null
    }
  },
  render: function render(h, _ref) {
    var children = _ref.children,
        data = _ref.data,
        props = _ref.props;
    var transProps = props.transProps;

    if (!Object(_inspect__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(transProps)) {
      transProps = props.noFade ? NO_FADE_PROPS : FADE_PROPS;

      if (props.appear) {
        // Default the appear classes to equal the enter classes
        transProps = _objectSpread({}, transProps, {
          appear: true,
          appearClass: transProps.enterClass,
          appearActiveClass: transProps.enterActiveClass,
          appearToClass: transProps.enterToClass
        });
      }
    }

    transProps = _objectSpread({
      mode: props.mode
    }, transProps, {
      // We always need `css` true
      css: true
    });
    return h('transition', // Any transition event listeners will get merged here
    Object(vue_functional_data_merge__WEBPACK_IMPORTED_MODULE_1__["mergeData"])(data, {
      props: transProps
    }), children);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (BVTransition);

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/get-scope-id.js":
/*!**************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/get-scope-id.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// This method returns a component's scoped style attribute name: `data-v-xxxxxxx`
// The `_scopeId` options property is added by vue-loader when using scoped styles
// and will be `undefined` if no scoped styles are in use
var getScopeId = function getScopeId(vm) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return vm ? vm.$options._scopeId || defaultValue : defaultValue;
};

/* harmony default export */ __webpack_exports__["default"] = (getScopeId);

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/loose-equal.js":
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/loose-equal.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");

 // Assumes both a and b are arrays!
// Handles when arrays are "sparse" (array.every(...) doesn't handle sparse)

var compareArrays = function compareArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  var equal = true;

  for (var i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }

  return equal;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 * Returns boolean true or false
 */


var looseEqual = function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var aValidType = Object(_inspect__WEBPACK_IMPORTED_MODULE_1__["isDate"])(a);
  var bValidType = Object(_inspect__WEBPACK_IMPORTED_MODULE_1__["isDate"])(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = Object(_inspect__WEBPACK_IMPORTED_MODULE_1__["isArray"])(a);
  bValidType = Object(_inspect__WEBPACK_IMPORTED_MODULE_1__["isArray"])(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? compareArrays(a, b) : false;
  }

  aValidType = Object(_inspect__WEBPACK_IMPORTED_MODULE_1__["isObject"])(a);
  bValidType = Object(_inspect__WEBPACK_IMPORTED_MODULE_1__["isObject"])(b);

  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false;
    }

    var aKeysCount = Object(_object__WEBPACK_IMPORTED_MODULE_0__["keys"])(a).length;
    var bKeysCount = Object(_object__WEBPACK_IMPORTED_MODULE_0__["keys"])(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (var key in a) {
      // eslint-disable-next-line no-prototype-builtins
      var aHasKey = a.hasOwnProperty(key); // eslint-disable-next-line no-prototype-builtins

      var bHasKey = b.hasOwnProperty(key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
};

/* harmony default export */ __webpack_exports__["default"] = (looseEqual);

/***/ })

}]);