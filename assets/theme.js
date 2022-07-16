(function (factory) {
  typeof define === 'function' && define.amd ? define('index', factory) :
  factory();
}((function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  var Responsive = /*#__PURE__*/function () {
    function Responsive() {
      var _this = this;

      _classCallCheck(this, Responsive);

      this.currentBreakpoint = Responsive.getCurrentBreakpoint();
      window.addEventListener('resize', function () {
        var newBreakpoint = Responsive.getCurrentBreakpoint();

        if (_this.currentBreakpoint === newBreakpoint) {
          return;
        }

        document.dispatchEvent(new CustomEvent('breakpoint:changed', {
          detail: {
            previousBreakpoint: _this.currentBreakpoint,
            currentBreakpoint: newBreakpoint
          }
        }));
        _this.currentBreakpoint = newBreakpoint;
      });
    }

    _createClass(Responsive, null, [{
      key: "matchesBreakpoint",
      value: function matchesBreakpoint(breakpoint) {
        switch (breakpoint) {
          case 'phone':
            return window.matchMedia('screen and (max-width: 640px)').matches;

          case 'tablet':
            return window.matchMedia('screen and (min-width: 641px) and (max-width: 1007px)').matches;

          case 'tablet-and-up':
            return window.matchMedia('screen and (min-width: 641px)').matches;

          case 'pocket':
            return window.matchMedia('screen and (max-width: 1007px)').matches;

          case 'lap':
            return window.matchMedia('screen and (min-width: 1008px) and (max-width: 1279px)').matches;

          case 'lap-and-up':
            return window.matchMedia('screen and (min-width: 1008px)').matches;

          case 'desk':
            return window.matchMedia('screen and (min-width: 1280px)').matches;

          case 'widescreen':
            return window.matchMedia('screen and (min-width: 1600px)').matches;

          case 'supports-hover':
            return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        }
      }
    }, {
      key: "getCurrentBreakpoint",
      value: function getCurrentBreakpoint() {
        if (window.matchMedia('screen and (max-width: 640px)').matches) {
          return 'phone';
        }

        if (window.matchMedia('screen and (min-width: 641px) and (max-width: 1007px)').matches) {
          return 'tablet';
        }

        if (window.matchMedia('screen and (min-width: 1008px) and (max-width: 1279px)').matches) {
          return 'lap';
        }

        if (window.matchMedia('screen and (min-width: 1280px)').matches) {
          return 'desk';
        }
      }
    }]);

    return Responsive;
  }();

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var overrideSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, Carousel);

      this.element = element;
      this.initialConfig = Object.assign(JSON.parse(element.getAttribute('data-flickity-config')), overrideSettings);
      this.options = options;

      this._attachListeners();

      this._build();
    }

    _createClass(Carousel, [{
      key: "destroy",
      value: function destroy() {
        this.flickityInstance.destroy();

        if (this.initialConfig['breakpoints'] !== undefined) {
          document.removeEventListener('breakpoint:changed', this._onBreakpointChangedListener);
        }
      }
    }, {
      key: "getFlickityInstance",
      value: function getFlickityInstance() {
        return this.flickityInstance;
      }
    }, {
      key: "selectCell",
      value: function selectCell(index) {
        var shouldPause = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var shouldAnimate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        if (shouldPause) {
          this.flickityInstance.pausePlayer();
        }

        this.flickityInstance.select(index, false, !shouldAnimate);
      }
    }, {
      key: "next",
      value: function next() {
        this.flickityInstance.next();
      }
    }, {
      key: "previous",
      value: function previous() {
        this.flickityInstance.previous();
      }
    }, {
      key: "pausePlayer",
      value: function pausePlayer() {
        this.flickityInstance.pausePlayer();
      }
    }, {
      key: "unpausePlayer",
      value: function unpausePlayer() {
        this.flickityInstance.unpausePlayer();
      }
    }, {
      key: "resize",
      value: function resize() {
        this.flickityInstance.resize();
      }
    }, {
      key: "getSelectedIndex",
      value: function getSelectedIndex() {
        return this.flickityInstance.selectedIndex;
      }
    }, {
      key: "getSelectedCell",
      value: function getSelectedCell() {
        return this.flickityInstance.selectedCell.element;
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        if (this.initialConfig['breakpoints'] !== undefined) {
          this._onBreakpointChangedListener = this._onBreakpointChanged.bind(this);
          document.addEventListener('breakpoint:changed', this._onBreakpointChangedListener);
        }
      }
      /**
       * Create the carousel instance
       */

    }, {
      key: "_build",
      value: function _build() {
        var _this = this;

        var config = this._processConfig();

        this.flickityInstance = new Flickity(this.element, config);

        this._validateDraggable();

        this.selectedIndex = this.flickityInstance.selectedIndex;
        this.flickityInstance.on('resize', this._validateDraggable.bind(this));

        if (this.options['onSelect']) {
          this.flickityInstance.on('select', function () {
            // Flickity will send the "select" event whenever the window resize (even on mobile...), as a consequence we need to check
            // first if the slide index have changed or not (cf: https://github.com/metafizzy/flickity/issues/529)
            if (_this.selectedIndex !== _this.flickityInstance.selectedIndex) {
              _this.options['onSelect'](_this.flickityInstance.selectedIndex, _this.flickityInstance.selectedCell.element);

              _this.selectedIndex = _this.flickityInstance.selectedIndex;
            }
          });
        }

        if (this.options['onSettle']) {
          this.flickityInstance.on('settle', function (index) {
            _this.options['onSettle'](index, _this.flickityInstance.selectedCell.element);
          });
        }

        if (this.options['onClick']) {
          this.flickityInstance.on('staticClick', function (event, pointer, cell, index) {
            _this.options['onClick'](cell, index);
          });
        }
      }
      /**
       * By default, Flickity does not disable draggable automatically if there is nothing to slide. We therefore manually do the check here by checking
       * if the displayed elements equals to the amount of elements
       */

    }, {
      key: "_validateDraggable",
      value: function _validateDraggable() {
        var isActive = this.flickityInstance.isActive || false;

        if (!isActive || !this.flickityInstance.options['draggable']) {
          return; // Not draggable, so nothing to do
        }

        if (undefined === this.flickityInstance.selectedElements || this.flickityInstance.selectedElements.length === this.flickityInstance.cells.length) {
          this.flickityInstance.unbindDrag();
        } else {
          this.flickityInstance.bindDrag();
        }
      }
      /**
       * Flickity is a CSS driven library and hence it is hard to setup some stuff in pure JS
       */

    }, {
      key: "_processConfig",
      value: function _processConfig() {
        var config = Object.assign({}, this.initialConfig);
        delete config['breakpoints'];

        if (this.initialConfig['breakpoints'] === undefined) {
          return config; // No change, we simply return the config as it is
        }

        var breakpoints = this.initialConfig['breakpoints'];
        breakpoints.forEach(function (breakpoint) {
          if (Responsive.matchesBreakpoint(breakpoint['matches'])) {
            config = Object.assign(config, breakpoint['settings']);
          }
        });
        return config;
      }
      /**
       * Verify if the breakpoint has changed, and optionally update the carousel
       */

    }, {
      key: "_onBreakpointChanged",
      value: function _onBreakpointChanged() {
        // The breakpoint may have changed, so we delete the carousel and rebuild it
        this.flickityInstance.destroy();

        this._build();
      }
    }]);

    return Carousel;
  }();

  var Animation = /*#__PURE__*/function () {
    function Animation() {
      _classCallCheck(this, Animation);
    }

    _createClass(Animation, null, [{
      key: "slideUp",
      value:
      /**
       * Slide up aims to close an element. To do that, we take the height of the element, and set it to 0 to
       * force an animation
       */
      function slideUp(element) {
        element.style.height = "".concat(element.scrollHeight, "px"); // Force previous height to allow CSS transition

        element.offsetHeight; // Force redraw

        element.style.height = 0;
      }
      /**
       * Slide down aims to open an element. To do that, you must make sure that the element you are trying to open
       * is set with height: 0; overflow: hidden in the CSS, and does not contain any padding nor margin.
       */

    }, {
      key: "slideDown",
      value: function slideDown(element) {
        if (element.style.height === 'auto') {
          return;
        } // To do the animation we temporarily hide it, check the height, and transition to it


        element.style.height = "".concat(element.firstElementChild.scrollHeight, "px");

        var transitionEnded = function transitionEnded(event) {
          if (event.propertyName === 'height') {
            element.style.height = 'auto'; // Allows the content to grow normally

            element.removeEventListener('transitionend', transitionEnded);
          }
        };

        element.addEventListener('transitionend', transitionEnded);
      }
    }]);

    return Animation;
  }();

  /**
   * Various DOM helper
   */
  var Dom = /*#__PURE__*/function () {
    function Dom() {
      _classCallCheck(this, Dom);
    }

    _createClass(Dom, null, [{
      key: "getSiblings",
      value:
      /**
       * Get all the previous and next siblings, optionally filtered by a selector
       */
      function getSiblings(element, filter) {
        var includeSelf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var siblings = [];
        var currentElement = element; // Do the previous first

        while (currentElement = currentElement.previousElementSibling) {
          if (!filter || currentElement.matches(filter)) {
            siblings.push(currentElement);
          }
        }

        if (includeSelf) {
          siblings.push(element);
        } // Then the next side


        currentElement = element;

        while (currentElement = currentElement.nextElementSibling) {
          if (!filter || currentElement.matches(filter)) {
            siblings.push(currentElement);
          }
        }

        return siblings;
      }
      /**
       * By default, NodeList object are only iterable with forEach on newest browsers. To support it cross-browser,
       * we need to normalize it
       */

    }, {
      key: "nodeListToArray",
      value: function nodeListToArray(nodeList, filter) {
        var items = [];

        for (var i = 0; i !== nodeList.length; ++i) {
          if (!filter || nodeList[i].matches(filter)) {
            items.push(nodeList[i]);
          }
        }

        return items;
      }
      /**
       * Calculate an element width with its margin
       */

    }, {
      key: "outerWidthWithMargin",
      value: function outerWidthWithMargin(element) {
        var width = element.offsetWidth,
            style = getComputedStyle(element);
        width += parseInt(style.marginLeft) + parseInt(style.marginRight);
        return width;
      }
      /**
       * Calculate an element height with its margin
       */

    }, {
      key: "outerHeightWithMargin",
      value: function outerHeightWithMargin(element) {
        var height = element.offsetHeight,
            style = getComputedStyle(element);
        height += parseInt(style.marginTop) + parseInt(style.marginBottom);
        return height;
      }
    }]);

    return Dom;
  }();

  var Collapsible = /*#__PURE__*/function () {
    function Collapsible() {
      _classCallCheck(this, Collapsible);

      this.domDelegate = new domDelegate.Delegate(document.body);

      this._attachListeners();
    }

    _createClass(Collapsible, [{
      key: "_attachListeners",
      value: function _attachListeners() {
        this.domDelegate.on('click', '[data-action="toggle-collapsible"]', this._toggleCollapsible.bind(this));
      }
      /**
       * Toggle a given collapsible
       */

    }, {
      key: "_toggleCollapsible",
      value: function _toggleCollapsible(event, target) {
        var _this = this;

        // If this is an auto-expand and that it reaches the needed breakpoint, we do nothing
        var parentCollapsible = target.closest('.Collapsible');

        if (parentCollapsible.classList.contains('Collapsible--autoExpand') && Responsive.matchesBreakpoint('tablet-and-up')) {
          return;
        }

        var isOpen = target.getAttribute('aria-expanded') === 'true';

        if (isOpen) {
          this._close(parentCollapsible, target);
        } else {
          this._open(parentCollapsible, target);
        } // We make sure to close any siblings collapsible as well


        Dom.getSiblings(parentCollapsible).forEach(function (collapsibleToClose) {
          return _this._close(collapsibleToClose);
        });
        event.preventDefault();
      }
      /**
       * Open a given collapsible
       */

    }, {
      key: "_open",
      value: function _open(collapsible) {
        var toggleButton = collapsible.querySelector('.Collapsible__Button'),
            collapsibleInner = collapsible.querySelector('.Collapsible__Inner');

        if (!collapsibleInner || toggleButton.getAttribute('aria-expanded') === 'true') {
          return; // It's already open
        }

        toggleButton.setAttribute('aria-expanded', 'true');
        collapsibleInner.style.overflow = 'visible';
        Animation.slideDown(collapsibleInner);
        setTimeout(function () {
          collapsible.style.overflow = 'visible';
        }, 350);
      }
      /**
       * Close a given collapsible
       */

    }, {
      key: "_close",
      value: function _close(collapsible) {
        var toggleButton = collapsible.querySelector('.Collapsible__Button'),
            collapsibleInner = collapsible.querySelector('.Collapsible__Inner');

        if (!collapsibleInner || toggleButton.getAttribute('aria-expanded') === 'false') {
          return; // It's already closed
        }

        toggleButton.setAttribute('aria-expanded', 'false');
        collapsibleInner.style.overflow = 'hidden';
        collapsible.style.overflow = 'hidden';
        Animation.slideUp(collapsibleInner);
      }
    }]);

    return Collapsible;
  }();

  var Accessibility = /*#__PURE__*/function () {
    function Accessibility() {
      _classCallCheck(this, Accessibility);
    }

    _createClass(Accessibility, null, [{
      key: "trapFocus",
      value:
      /**
       * Traps the focus in a particular container
       */
      function trapFocus(container, namespace) {
        this.listeners = this.listeners || {}; // We check if there is an element with the attribute "autofocus"

        var elementToFocus = container.querySelector('[autofocus]') || container;
        container.setAttribute('tabindex', '-1');
        elementToFocus.focus();

        this.listeners[namespace] = function (event) {
          if (container !== event.target && !container.contains(event.target)) {
            container.focus();
          }
        };

        document.addEventListener('focusin', this.listeners[namespace]);
      }
      /**
       * Removes the trap of focus in a particular container
       */

    }, {
      key: "removeTrapFocus",
      value: function removeTrapFocus(container, namespace) {
        if (container) {
          container.removeAttribute('tabindex');
        }

        if (this.listeners && this.listeners[namespace]) {
          document.removeEventListener('focusin', this.listeners[namespace]);
        }
      }
      /**
       * Reset any previous trap focus
       */

    }, {
      key: "clearTrapFocus",
      value: function clearTrapFocus() {
        for (var key in this.listeners) {
          if (this.listeners.hasOwnProperty(key)) {
            document.removeEventListener('focusin', this.listeners[key]);
          }
        }

        this.listeners = {};
      }
    }]);

    return Accessibility;
  }();

  var Drawer = /*#__PURE__*/function () {
    function Drawer(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Drawer);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.delegateBody = new domDelegate.Delegate(document.body);

      this.onOpen = options['onOpen'] || function () {};

      this.onClose = options['onClose'] || function () {};

      this.isOpen = false;
      this.direction = this.element.classList.contains('Drawer--fromLeft') ? 'fromLeft' : 'fromRight';
      this.pageOverlayElement = document.querySelector('.PageOverlay');

      this._attachListeners();
    }

    _createClass(Drawer, [{
      key: "destroy",
      value: function destroy() {
        this.delegateBody.off('click', "[data-action=\"open-drawer\"][data-drawer-id=\"".concat(this.element.id, "\"]"));
        this.delegateBody.off('click', "[data-action=\"close-drawer\"][data-drawer-id=\"".concat(this.element.id, "\"]"));
        window.removeEventListener('resize', this._calculateMaxHeightListener);
      }
    }, {
      key: "toggle",
      value: function toggle() {
        this.isOpen ? this.close() : this.open();
      }
    }, {
      key: "open",
      value: function open(event) {
        if (this.isOpen) {
          return;
        } // Make sure that the search is closed whenever a drawer is opened


        this.element.dispatchEvent(new CustomEvent('search:close', {
          bubbles: true
        }));

        if (event) {
          event.preventDefault();
        }

        this.element.setAttribute('aria-hidden', 'false');

        this._calculateMaxHeight();

        document.documentElement.classList.add('no-scroll'); // This prevent the body to scroll on iOS. This is honestly a bit hacky, but until the platform supports "touch-action: none" like
        // other browsers, this is the only way to achieve that
        //disableBodyScroll(true, '[data-scrollable]');

        Accessibility.trapFocus(this.element, 'drawer');
        document.querySelector('#shopify-section-header').style.zIndex = ''; // Ugly hack
        // We attach an event to the page overlay to close it

        this.pageOverlayElement.classList.add('is-visible');
        this.pageOverlayElement.addEventListener('click', this._closeListener);
        this.isOpen = true;
        this.onOpen(); // Call the callback to allow other code to hook their logic

        return false;
      }
    }, {
      key: "close",
      value: function close(event) {
        if (!this.isOpen) {
          return;
        }

        if (event) {
          event.preventDefault();
        }

        this.element.setAttribute('aria-hidden', 'true');
        document.documentElement.classList.remove('no-scroll'); //disableBodyScroll(false, '[data-scrollable]');

        Accessibility.removeTrapFocus(this.element, 'drawer');
        this.pageOverlayElement.classList.remove('is-visible');
        this.pageOverlayElement.removeEventListener('click', this._closeListener);
        this.isOpen = false;
        this.onClose(); // Call the callback to allow other code to hook their logic
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._openListener = this.open.bind(this);
        this._closeListener = this.close.bind(this);
        this._calculateMaxHeightListener = this._calculateMaxHeight.bind(this);
        this.delegateBody.on('click', "[data-action=\"open-drawer\"][data-drawer-id=\"".concat(this.element.id, "\"]"), this._openListener);
        this.delegateBody.on('click', "[data-action=\"close-drawer\"][data-drawer-id=\"".concat(this.element.id, "\"]"), this._closeListener);
        this.element.addEventListener('keyup', this._handleKeyboard.bind(this));
        window.addEventListener('resize', this._calculateMaxHeightListener);
      }
      /**
       * Make sure that we force a max-height so that the drawer always stays on screen
       */

    }, {
      key: "_calculateMaxHeight",
      value: function _calculateMaxHeight() {
        this.element.style.maxHeight = window.innerHeight + 'px';
      }
    }, {
      key: "_handleKeyboard",
      value:
      /**
       * Handle a11y events
       */
      function _handleKeyboard(event) {
        if (this.isOpen && event.keyCode === 27) {
          this.close();
        }
      }
    }]);

    return Drawer;
  }();

  /**
   * Simple plugin that handles the loading bar actions
   *
   * This plugin uses delegate events so it's independent of the sections.
   */
  var LoadingBar = /*#__PURE__*/function () {
    function LoadingBar() {
      _classCallCheck(this, LoadingBar);

      this.element = document.querySelector('.LoadingBar');
      document.addEventListener('theme:loading:start', this._onLoadingStart.bind(this));
      document.addEventListener('theme:loading:end', this._onLoadingEnd.bind(this));
      this.element.addEventListener('transitionend', this._onTransitionEnd.bind(this));
    }

    _createClass(LoadingBar, [{
      key: "_onLoadingStart",
      value: function _onLoadingStart() {
        this.element.classList.add('is-visible');
        this.element.style.width = '40%';
      }
    }, {
      key: "_onLoadingEnd",
      value: function _onLoadingEnd() {
        this.element.style.width = '100%';
        this.element.classList.add('is-finished');
      }
    }, {
      key: "_onTransitionEnd",
      value: function _onTransitionEnd(event) {
        if (event.propertyName === 'width' && this.element.classList.contains('is-finished')) {
          this.element.classList.remove('is-visible');
          this.element.classList.remove('is-finished');
          this.element.style.width = '0';
        }
      }
    }]);

    return LoadingBar;
  }();

  var Modal = /*#__PURE__*/function () {
    function Modal() {
      _classCallCheck(this, Modal);

      this.domDelegate = new domDelegate.Delegate(document.body);
      this.activeModal = null; // Keep track of the active modal

      this.wasLocked = false;
      this.pageOverlayElement = document.querySelector('.PageOverlay');

      this._attachListeners();

      this._checkOpenByHash();
    }

    _createClass(Modal, [{
      key: "_attachListeners",
      value: function _attachListeners() {
        this._closeListener = this._closeModal.bind(this);
        this._handleKeyboardListener = this._handleKeyboard.bind(this);
        this.domDelegate.on('click', '[data-action="open-modal"]', this._openModalEvent.bind(this));
        this.domDelegate.on('click', '[data-action="close-modal"]', this._closeModal.bind(this));
      }
    }, {
      key: "_openModalEvent",
      value: function _openModalEvent(event, target) {
        this._openModal(document.getElementById(target.getAttribute('aria-controls')));

        event.preventDefault();
        event.stopPropagation();
      }
    }, {
      key: "_openModal",
      value: function _openModal(modal) {
        var _this = this;

        if (this.activeModal || !modal) {
          return; // If there is already an open modal, we return as we only allows one modal at a time
        }

        this.activeModal = modal;
        this.domDelegate.on('keyup', this._handleKeyboardListener);

        if (document.documentElement.classList.contains('no-scroll')) {
          this.wasLocked = true;
        }

        fastdom.mutate(function () {
          Accessibility.clearTrapFocus(); // Needed as the modal can be open on top of a popover

          _this._onTransitionEndedListener = _this._onTransitionEnded.bind(_this);

          _this.activeModal.addEventListener('transitionend', _this._onTransitionEndedListener);

          _this.activeModal.setAttribute('aria-hidden', 'false');

          document.documentElement.classList.add('no-scroll'); // If the modal is not a fullscreen modal, then we also display the overlay

          if (!_this.activeModal.classList.contains('Modal--fullScreen')) {
            _this.pageOverlayElement.classList.add('is-visible');

            _this.pageOverlayElement.addEventListener('click', _this._closeListener);
          }
        });
      }
    }, {
      key: "_closeModal",
      value: function _closeModal() {
        var _this2 = this;

        if (!this.activeModal) {
          return; // If no modal are open, we return immediately
        }

        this.activeModal.removeEventListener('keyup', this._handleKeyboardListener);
        this.domDelegate.off('keyup');
        fastdom.mutate(function () {
          // If the modal is of video type, we need to remove the iframe to stop the video
          if (_this2.activeModal.classList.contains('Modal--videoContent')) {
            _this2._resetVideoListener = _this2._resetVideo.bind(_this2);

            _this2.activeModal.addEventListener('transitionend', _this2._resetVideoListener);
          }

          Accessibility.removeTrapFocus(_this2.activeModal, 'modal');

          if (!_this2.activeModal.classList.contains('Modal--fullScreen')) {
            _this2.pageOverlayElement.classList.remove('is-visible');

            _this2.pageOverlayElement.removeEventListener('click', _this2._closeListener);
          }

          _this2.activeModal.setAttribute('aria-hidden', 'true');

          _this2.activeModal = null;

          if (!_this2.wasLocked) {
            document.documentElement.classList.remove('no-scroll');
          }
        });
      }
    }, {
      key: "_onTransitionEnded",
      value: function _onTransitionEnded(event) {
        if (event.propertyName !== 'visibility') {
          return;
        }

        Accessibility.trapFocus(this.activeModal, 'modal'); // Trap the focus first (as this trigger reflows)

        this.activeModal.removeEventListener('transitionend', this._onTransitionEndedListener);
      }
    }, {
      key: "_resetVideo",
      value: function _resetVideo(event) {
        if (event.propertyName !== 'visibility') {
          return; // We check the visibility property as it's the one LazySizes uses for triggering lazyloading
        }

        var iframe = event.target.querySelector('iframe');
        iframe.parentNode.innerHTML = "<iframe class=\"Image--lazyLoad\" data-src=".concat(iframe.getAttribute('data-src'), " frameborder=\"0\" allowfullscreen>");
        event.target.removeEventListener('transitionend', this._resetVideoListener);
      }
      /**
       * Some forms needs to be open inside a modal, and on page reload we must make sure to properly open the modal again
       */

    }, {
      key: "_checkOpenByHash",
      value: function _checkOpenByHash() {
        var hash = window.location.hash,
            modal = document.getElementById(hash.replace('#', ''));

        if (modal && modal.classList.contains('Modal')) {
          this._openModal(modal);
        }
      }
      /**
       * Handle a11y events
       */

    }, {
      key: "_handleKeyboard",
      value: function _handleKeyboard(event) {
        if (null !== this.activeModal && event.keyCode === 27) {
          this._closeModal();
        }
      }
    }]);

    return Modal;
  }();

  var Popover = /*#__PURE__*/function () {
    function Popover(element, options) {
      _classCallCheck(this, Popover);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.activator = options['activator'] || document.querySelector("[aria-controls=\"".concat(element.getAttribute('id'), "\"]"));
      this.preferredPosition = options['preferredPosition'] || 'bottom';
      this.preferredAlignment = options['preferredAlignment'] || undefined;
      this.threshold = options['threshold'] || 20;
      this.isOpen = false;

      this.onValueChanged = options['onValueChanged'] || function () {};

      this.onOpen = options['onOpen'] || function () {};

      this.onClose = options['onClose'] || function () {};

      this.showOverlay = options['showOverlay'] === undefined ? true : options['showOverlay'];
      this.pageOverlayElement = document.querySelector('.PageOverlay');

      this._attachListeners();
    }

    _createClass(Popover, [{
      key: "destroy",
      value: function destroy() {
        this.element.removeEventListener('keyup', this._handleKeyboardListener);
        this.delegateElement.off('click');
        this.activator.removeEventListener('click', this._toggleListener);
      }
    }, {
      key: "toggle",
      value: function toggle() {
        this.isOpen ? this.close() : this.open();
      }
    }, {
      key: "open",
      value: function open() {
        var _this = this;

        // Note: the additional check on the aria-controls is used here so that a given activator can be used on different
        //       popovers and be modified dynamically in JavaScript
        if (this.isOpen || this.activator.getAttribute('aria-controls') !== this.element.id) {
          return;
        }

        this.element.setAttribute('aria-hidden', 'false');
        this.activator.setAttribute('aria-expanded', 'true');
        disableBodyScroll(true, '[data-scrollable]');
        document.documentElement.classList.add('no-scroll'); // Prevent scrolling when popover is open

        if (Responsive.matchesBreakpoint('lap-and-up')) {
          document.body.addEventListener('click', this._clickOutsideListener);

          this._position();

          this.element.setAttribute('tabindex', '-1');
          this.element.addEventListener('transitionend', function () {
            _this.element.focus();
          }, {
            once: true
          });
        } else {
          this.element.removeAttribute('style');

          if (this.showOverlay) {
            this.pageOverlayElement.classList.add('is-visible');
            this.pageOverlayElement.addEventListener('click', this._closeListener);
          }
        }

        this.onOpen(this); // Call the callback to allow other code to hook their logic

        this.isOpen = true;
      }
    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }

        this.element.setAttribute('aria-hidden', 'true');
        this.activator.setAttribute('aria-expanded', 'false');
        disableBodyScroll(false, '[data-scrollable]');
        document.documentElement.classList.remove('no-scroll');

        if (Responsive.matchesBreakpoint('lap-and-up')) {
          document.body.removeEventListener('click', this._clickOutsideListener);
        } else if (this.showOverlay) {
          this.pageOverlayElement.classList.remove('is-visible');
          this.pageOverlayElement.removeEventListener('click', this._closeListener);
        }

        this.element.removeAttribute('tabindex');
        this.activator.focus();
        this.onClose(this); // Call the callback to allow other code to hook their logic

        this.isOpen = false;
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._handleKeyboardListener = this._handleKeyboard.bind(this);
        this._clickOutsideListener = this._clickOutside.bind(this);
        this._closeListener = this.close.bind(this);
        this._toggleListener = this.toggle.bind(this);
        this.element.addEventListener('keyup', this._handleKeyboardListener);
        this.activator.addEventListener('click', this._toggleListener);
        this.delegateElement.on('click', '[data-action="close-popover"]', this.close.bind(this));
        this.delegateElement.on('click', '[data-action="select-value"]', this._valueChanged.bind(this));

        if (this.element.hasAttribute('id')) {
          this.delegateElement.on('focusout', "#".concat(this.element.getAttribute('id')), this._onFocusOut.bind(this));
        }
      }
      /**
       * Whenever a value is selected, it can notify a callback so that the calling code can do its own logic in response
       * of the value change
       */

    }, {
      key: "_valueChanged",
      value: function _valueChanged(event) {
        Dom.getSiblings(event.target, '.is-selected').forEach(function (item) {
          return item.classList.remove('is-selected');
        });
        event.target.classList.add('is-selected'); // If there is a callback in option we call it with the value

        this.onValueChanged(event.target.getAttribute('data-value'), event.target, this.activator);
        this.close();
      }
    }, {
      key: "_onFocusOut",
      value: function _onFocusOut(event) {
        if (!this.element.contains(event.relatedTarget) && event.relatedTarget !== this.activator) {
          this.close();
        }
      }
      /**
       * Callback that is called to decide if we should close the popover when a click is captured outside
       */

    }, {
      key: "_clickOutside",
      value: function _clickOutside(event) {
        if (!event.target.closest('.Popover') && !event.target.closest('.Modal') && event.target !== this.activator && !this.activator.contains(event.target)) {
          this.close();
        }
      }
      /**
       * On desktop, we reposition the popover in JavaScript by doing some smart logic to detect the most appropriate area
       */

    }, {
      key: "_position",
      value: function _position() {
        var _this2 = this;

        var topPosition = 0,
            rightPosition = 0,
            position = '',
            alignment = '',
            threshold = this.threshold;
        fastdom.measure(function () {
          var windowHeight = window.innerHeight,
              activatorBoundingRect = _this2.activator.getBoundingClientRect(),
              halfHeight = windowHeight / 2;

          if (_this2.preferredPosition === 'bottom') {
            alignment = 'right';

            if (_this2.element.clientHeight <= windowHeight - (activatorBoundingRect.bottom + threshold) || windowHeight - activatorBoundingRect.bottom >= halfHeight) {
              position = 'bottom';
            } else {
              position = 'top';
            }
          } else if (_this2.preferredPosition === 'top') {
            alignment = 'right';

            if (_this2.element.clientHeight <= activatorBoundingRect.top - threshold || activatorBoundingRect.top >= halfHeight) {
              position = 'top';
            } else {
              position = 'bottom';
            }
          } else {
            position = 'left'; // Is there enough space to use the center alignment (which is preferred)?

            var halfElementHeight = _this2.element.clientHeight / 2;

            if (activatorBoundingRect.top >= halfElementHeight && windowHeight - activatorBoundingRect.bottom >= halfElementHeight) {
              alignment = 'center';
            } else if (windowHeight - activatorBoundingRect.bottom >= halfElementHeight) {
              alignment = 'bottom';
            } else {
              alignment = 'top';
            }
          }

          if (_this2.preferredAlignment) {
            alignment = _this2.preferredAlignment;
          }

          if (position === 'top') {
            topPosition = activatorBoundingRect.top - _this2.element.clientHeight - threshold;

            if (alignment === 'center') {
              rightPosition = window.innerWidth - activatorBoundingRect.right - _this2.element.clientWidth / 2 + 3;
            } else {
              rightPosition = window.innerWidth - activatorBoundingRect.right;
            }
          } else if (position === 'bottom') {
            topPosition = activatorBoundingRect.bottom + threshold;

            if (alignment === 'center') {
              rightPosition = window.innerWidth - activatorBoundingRect.right - _this2.element.clientWidth / 2 + 3;
            } else {
              rightPosition = window.innerWidth - activatorBoundingRect.right;
            }
          } else {
            rightPosition = window.innerWidth - activatorBoundingRect.left + threshold;

            if (alignment === 'center') {
              topPosition = activatorBoundingRect.top - _this2.element.clientHeight / 2 + _this2.activator.clientHeight / 2;
            } else if (alignment === 'top') {
              topPosition = activatorBoundingRect.bottom - _this2.element.clientHeight;
            } else {
              topPosition = activatorBoundingRect.top;
            }
          }
        });
        fastdom.mutate(function () {
          ['Popover--positionBottom', 'Popover--positionTop', 'Popover--positionCenter', 'Popover--alignTop', 'Popover--alignCenter', 'Popover--alignBottom'].map(function (item) {
            return _this2.element.classList.remove(item);
          });

          _this2.element.classList.add("Popover--position".concat(position.charAt(0).toUpperCase() + position.slice(1)));

          _this2.element.classList.add("Popover--align".concat(alignment.charAt(0).toUpperCase() + alignment.slice(1)));

          _this2.element.setAttribute('style', "top: ".concat(parseInt(topPosition), "px; right: ").concat(parseInt(rightPosition), "px;"));
        });
      }
      /**
       * Handle a11y events
       */

    }, {
      key: "_handleKeyboard",
      value: function _handleKeyboard(event) {
        if (this.isOpen && event.keyCode === 27) {
          this.close();
        }
      }
    }]);

    return Popover;
  }();

  /**
   * This class will coordinate all the transitions from the website
   */
  var PageTransition = /*#__PURE__*/function () {
    function PageTransition() {
      _classCallCheck(this, PageTransition);

      this.domDelegate = new domDelegate.Delegate(document.body);
      this.pageTransition = document.querySelector('.PageTransition');

      this._attachListeners();
    }

    _createClass(PageTransition, [{
      key: "_attachListeners",
      value: function _attachListeners() {
        this.domDelegate.on('click', 'a[href]:not([href^="#"]):not([href^="javascript:"]):not([href^="mailto:"]):not([href^="tel:"]):not([target="_blank"])', this._onPageUnload.bind(this));
      }
      /**
       * This callback captures click and transition from one page to another by doing a transition
       */

    }, {
      key: "_onPageUnload",
      value: function _onPageUnload(event, target) {
        var _this = this;

        if (event.defaultPrevented || event.ctrlKey || event.metaKey || !window.theme.showPageTransition || !this.pageTransition) {
          return;
        }

        event.preventDefault(); // Prevent the click to happen

        if (window.theme.showPageTransition && this.pageTransition) {
          var doTransition = function doTransition(event) {
            // Animation is finished, we can transition
            if (event.propertyName === 'opacity') {
              _this.pageTransition.removeEventListener('transitionend', doTransition);

              window.location.href = target.href;
            }
          };

          this.pageTransition.addEventListener('transitionend', doTransition);
          this.pageTransition.style.visibility = 'visible';
          this.pageTransition.style.opacity = '1';
        }
      }
    }], [{
      key: "getInstance",
      value: function getInstance() {
        if (!this.instance) {
          this.instance = new PageTransition();
        }

        return this.instance;
      }
    }]);

    return PageTransition;
  }();

  /**
   * Note: this was a feature that was added at the very end and couldn't do something much cleaner without rewriting large parts of the theme...
   */
  var ProductItemColorSwatch = /*#__PURE__*/function () {
    function ProductItemColorSwatch(element) {
      _classCallCheck(this, ProductItemColorSwatch);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.delegateElement.on('change', '.ColorSwatch__Radio', this._colorChanged.bind(this));
    }

    _createClass(ProductItemColorSwatch, [{
      key: "_colorChanged",
      value: function _colorChanged(event, target) {
        // We need to change the URL of the various links
        var productItem = target.closest('.ProductItem'),
            variantUrl = target.getAttribute('data-variant-url');
        productItem.querySelector('.ProductItem__ImageWrapper').setAttribute('href', variantUrl);
        productItem.querySelector('.ProductItem__Title > a').setAttribute('href', variantUrl); // If we have a custom image for the variant, we change it

        var originalImageElement = productItem.querySelector('.ProductItem__Image:not(.ProductItem__Image--alternate)');

        if (target.hasAttribute('data-image-url') && target.getAttribute('data-image-id') !== originalImageElement.getAttribute('data-image-id')) {
          var newImageElement = document.createElement('img');
          newImageElement.className = 'ProductItem__Image Image--fadeIn Image--lazyLoad';
          newImageElement.setAttribute('data-image-id', target.getAttribute('data-image-id'));
          newImageElement.setAttribute('data-src', target.getAttribute('data-image-url'));
          newImageElement.setAttribute('data-widths', target.getAttribute('data-image-widths'));
          newImageElement.setAttribute('data-sizes', 'auto'); // Replace the original node

          if (window.theme.productImageSize === 'natural') {
            originalImageElement.parentNode.style.paddingBottom = "".concat(100.0 / target.getAttribute('data-image-aspect-ratio'), "%");
          }

          originalImageElement.parentNode.style.setProperty('--aspect-ratio', target.getAttribute('data-image-aspect-ratio'));
          originalImageElement.parentNode.replaceChild(newImageElement, originalImageElement);
        }
      }
    }]);

    return ProductItemColorSwatch;
  }();

  var Image = /*#__PURE__*/function () {
    function Image() {
      _classCallCheck(this, Image);
    }

    _createClass(Image, null, [{
      key: "getSizedImageUrl",
      value:
      /**
       * Create a CDN URL (similar to the img_url filter in Liquid)
       */
      function getSizedImageUrl(src, size) {
        if (size === null) {
          return src;
        }

        if (size === 'master') {
          return src.replace(/http(s)?:/, '');
        }

        var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

        if (match) {
          var prefix = src.split(match[0]);
          var suffix = match[0];
          return (prefix[0] + '_' + size + suffix).replace(/http(s)?:/, '');
        } else {
          return null;
        }
      }
      /**
       * From a given set of desired sizes and a given image, filter out any unwanted sizes
       */

    }, {
      key: "getSupportedSizes",
      value: function getSupportedSizes(image, desiredSizes) {
        var supportedSizes = [],
            imageWidth = image['width'];
        desiredSizes.forEach(function (width) {
          if (imageWidth >= width) {
            supportedSizes.push(width);
          }
        });
        return supportedSizes;
      }
    }]);

    return Image;
  }();

  var ProductImageZoom = /*#__PURE__*/function () {
    function ProductImageZoom(element, slideshow) {
      _classCallCheck(this, ProductImageZoom);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.delegateRoot = new domDelegate.Delegate(document.body);
      this.slideshow = slideshow;

      this._attachListeners();
    }

    _createClass(ProductImageZoom, [{
      key: "destroy",
      value: function destroy() {
        this.delegateElement.off('click');
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '[data-action="open-product-zoom"]', this._initPhotoSwipe.bind(this));
        this.delegateElement.on('click', '.Product__SlideItem--image', this._initPhotoSwipeFromImageClick.bind(this));
      }
      /**
       * To save performance, we only initialize PhotoSwipe when it's requested. All high resolution images
       * are also loaded only on demand. Also, please note that PhotoSwipe is always completely destroyed
       * whenever it is closed, so it stays super snappy
       */

    }, {
      key: "_initPhotoSwipe",
      value: function _initPhotoSwipe() {
        var images = [];
        this.slideshow.flickityInstance.cells.forEach(function (item) {
          if (item.element.classList.contains('Product__SlideItem--image')) {
            images.push(item.element.querySelector('img'));
          }
        });

        this._createPhotoSwipeInstance(this._createPhotoSwipeItemsFromImages(images), parseInt(this.slideshow.flickityInstance.selectedElement.getAttribute('data-image-media-position')));
      }
      /**
       * On desktop we do not have the dedicated small icon, instead the zoom is triggered when clicking directly on the image
       */

    }, {
      key: "_initPhotoSwipeFromImageClick",
      value: function _initPhotoSwipeFromImageClick(event, target) {
        // Opening this way is only available on desktop
        if (Responsive.matchesBreakpoint('pocket')) {
          return;
        }

        var images = Dom.nodeListToArray(this.element.querySelectorAll('.Product__SlideItem--image img'));

        this._createPhotoSwipeInstance(this._createPhotoSwipeItemsFromImages(images), parseInt(target.getAttribute('data-image-media-position')));
      }
      /**
       * Take a list of images and create a PhotoSwipe array. This is called whenever the gallery is initialized.
       */

    }, {
      key: "_createPhotoSwipeItemsFromImages",
      value: function _createPhotoSwipeItemsFromImages(images) {
        return images.map(function (image) {
          var maxWidth = parseInt(image.getAttribute('data-max-width')),
              maxHeight = parseInt(image.getAttribute('data-max-height')),
              maxDimension = Responsive.matchesBreakpoint('phone') ? 1200 : 1800,
              // 1200 is max size for mobile and 1800 for larger devices
          reduceFactor = 1.0;

          if (maxWidth >= maxHeight) {
            reduceFactor = Math.max(maxWidth / maxDimension, 1.0);
          } else {
            reduceFactor = Math.max(maxHeight / maxDimension, 1.0);
          }

          var requestedWidth = Math.floor(maxWidth / reduceFactor);
          var requestedHeight = Math.floor(maxHeight / reduceFactor);
          return {
            msrc: image.currentSrc || image.src,
            // For browser that supports srcset, currentSrc is the currently used image
            w: requestedWidth,
            h: requestedHeight,
            initialZoomLevel: 0.65,
            src: Image.getSizedImageUrl(image.getAttribute('data-original-src'), requestedWidth + 'x' + requestedHeight)
          };
        });
      }
      /**
       * Take a list of nodes containing all images and create a PhotoSwipe array. This is called
       * whenever the gallery is initialized.
       */

    }, {
      key: "_createPhotoSwipeInstance",
      value: function _createPhotoSwipeInstance(items, selectedImageIndex) {
        var _this = this;

        var photoswipeContainer = document.querySelector('.pswp');
        this.photoSwipeInstance = new PhotoSwipe(photoswipeContainer, false, items, {
          index: selectedImageIndex,
          showHideOpacity: true,
          showAnimationDuration: 500,
          loop: false,
          history: false,
          closeOnVerticalDrag: false,
          allowPanToNext: false,
          pinchToClose: false,
          errorMsg: '<p class="pswp__error-msg">' + window.languages.productImageLoadingError + '</p>',
          scaleMode: 'zoom',
          getDoubleTapZoom: function getDoubleTapZoom(isMouseClick, item) {
            if (isMouseClick) {
              return 1.6;
            } else {
              return item.initialZoomLevel < 0.7 ? 1 : 1.33;
            }
          },
          getThumbBoundsFn: function getThumbBoundsFn(index) {
            var thumbnail = _this.element.querySelector(".Product__Slideshow .Carousel__Cell[data-image-media-position=\"".concat(parseInt(index), "\"] img")),
                pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                rect = thumbnail.getBoundingClientRect();

            return {
              x: rect.left,
              y: rect.top + pageYScroll,
              w: rect.width
            };
          }
        }); // We need to patch PhotoSwipe update size to solve iOS 15 issue

        var originalUpdateSize = this.photoSwipeInstance.updateSize,
            lastWidth = null;

        this.photoSwipeInstance.updateSize = function () {
          if (lastWidth === null || lastWidth !== window.innerWidth) {
            originalUpdateSize(this, arguments);
          }

          lastWidth = window.innerWidth;
        };

        this.photoSwipeInstance.listen('beforeChange', this._onSlideChanged.bind(this));
        this.photoSwipeInstance.listen('destroy', this._destroyPhotoSwipe.bind(this));
        this.photoSwipeInstance.listen('doubleTap', this._onDoubleTap.bind(this));
        this.photoSwipeInstance.listen('initialZoomIn', this._onInitialZoomIn.bind(this));
        this.photoSwipeInstance.listen('initialZoomOut', this._onInitialZoomOut.bind(this));
        this.delegateRoot.on('pswpTap', '.pswp__scroll-wrap', this._onSingleTap.bind(this));
        this.delegateRoot.on('pswpTap', '.pswp__button--close', this.photoSwipeInstance.close);
        this.delegateRoot.on('pswpTap', '.pswp__button--prev', this.photoSwipeInstance.prev);
        this.delegateRoot.on('pswpTap', '.pswp__button--next', this.photoSwipeInstance.next);
        this.photoSwipeInstance.init();
      }
      /**
       * Update the nav
       */

    }, {
      key: "_onSlideChanged",
      value: function _onSlideChanged() {
        if (this.photoSwipeInstance.getCurrentIndex() === 0) {
          this.photoSwipeInstance.scrollWrap.querySelector('.pswp__button--prev').setAttribute('disabled', 'disabled');
        } else {
          this.photoSwipeInstance.scrollWrap.querySelector('.pswp__button--prev').removeAttribute('disabled');
        }

        if (this.photoSwipeInstance.getCurrentIndex() + 1 === this.photoSwipeInstance.options.getNumItemsFn()) {
          this.photoSwipeInstance.scrollWrap.querySelector('.pswp__button--next').setAttribute('disabled', 'disabled');
        } else {
          this.photoSwipeInstance.scrollWrap.querySelector('.pswp__button--next').removeAttribute('disabled');
        }
      }
      /**
       * This event is a bit different and is triggered when the user click somewhere. We use it do allow to zoom in and
       * zoom out in the image on desktop and use for the UI
       */

    }, {
      key: "_onSingleTap",
      value: function _onSingleTap(event) {
        if (!event.detail || event.detail.pointerType === 'mouse') {
          if (event.target.classList.contains('pswp__img')) {
            this.photoSwipeInstance.toggleDesktopZoom(event.detail.releasePoint);
          }
        } else {
          if (event.target.classList.contains('pswp__button')) {
            return;
          }

          event.target.closest('.pswp').querySelector('.pswp__ui').classList.toggle('pswp__ui--hidden');
        }
      }
    }, {
      key: "_onDoubleTap",
      value: function _onDoubleTap(point) {
        var initialZoomLevel = this.photoSwipeInstance.currItem.initialZoomLevel;

        if (this.photoSwipeInstance.getZoomLevel() !== initialZoomLevel) {
          this.photoSwipeInstance.zoomTo(initialZoomLevel, point, 333);
        } else {
          this.photoSwipeInstance.zoomTo(initialZoomLevel < 0.7 ? 1 : 1.33, point, 333);
        }
      }
    }, {
      key: "_onInitialZoomIn",
      value: function _onInitialZoomIn() {
        document.querySelector('.pswp__ui').classList.remove('pswp__ui--hidden');
      }
    }, {
      key: "_onInitialZoomOut",
      value: function _onInitialZoomOut() {
        document.querySelector('.pswp__ui').classList.add('pswp__ui--hidden');
      }
      /**
       * PhotoSwipe instance is automatically destroyed for us when it's closed. What we need to do is simply re-set
       * our in-memory instance to null and our own events
       */

    }, {
      key: "_destroyPhotoSwipe",
      value: function _destroyPhotoSwipe() {
        this.delegateRoot.off('pswpTap');
        this.photoSwipeInstance = null;
      }
    }]);

    return ProductImageZoom;
  }();

  var ProductModel = /*#__PURE__*/function () {
    function ProductModel(element, stackProductImages) {
      _classCallCheck(this, ProductModel);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.delegateRoot = new domDelegate.Delegate(document.documentElement);
      this.stackProductImages = stackProductImages;

      this._attachListeners();

      var stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = 'https://cdn.shopify.com/shopifycloud/model-viewer-ui/assets/v1.0/model-viewer-ui.css';
      document.head.appendChild(stylesheet);
      window.Shopify.loadFeatures([{
        name: 'model-viewer-ui',
        version: '1.0',
        onLoad: this._setupModelViewerUI.bind(this)
      }, {
        name: 'shopify-xr',
        version: '1.0'
      }]);
    }

    _createClass(ProductModel, [{
      key: "destroy",
      value: function destroy() {}
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        var _this = this;

        this.element.querySelector('model-viewer').addEventListener('shopify_model_viewer_ui_toggle_play', function () {
          _this.element.dispatchEvent(new CustomEvent('model:played', {
            bubbles: true
          }));
        });
        this.element.querySelector('model-viewer').addEventListener('shopify_model_viewer_ui_toggle_pause', function () {
          _this.element.dispatchEvent(new CustomEvent('model:paused', {
            bubbles: true
          }));
        });
      }
    }, {
      key: "hasBeenSelected",
      value: function hasBeenSelected() {
        // As per guidelines, we only need to autoplay when it's not a touch device
        if (Responsive.matchesBreakpoint('supports-hover')) {
          this.modelUi.play();
        }
      }
    }, {
      key: "hasBeenDeselected",
      value: function hasBeenDeselected() {
        // In all cases, we just turn it off
        this.modelUi.pause();
      }
    }, {
      key: "_setupModelViewerUI",
      value: function _setupModelViewerUI() {
        this.modelElement = this.element.querySelector('model-viewer');
        this.modelUi = new window.Shopify.ModelViewerUI(this.modelElement);
      }
    }]);

    return ProductModel;
  }();

  var ProductReviews = /*#__PURE__*/function () {
    function ProductReviews(container) {
      _classCallCheck(this, ProductReviews);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.delegateElement.on('click', '.spr-summary-actions-newreview', this._onNewReviewClicked.bind(this)); // Extending Shopify Reviews is a bit manual, but let's do it!

      window.SPRCallbacks = {};
      window.SPRCallbacks.onFormSuccess = this._onFormSuccess.bind(this);
      window.SPRCallbacks.onReviewsLoad = this._onReviewsLoad.bind(this);
    }

    _createClass(ProductReviews, [{
      key: "destroy",
      value: function destroy() {
        this.delegateElement.off();
      }
    }, {
      key: "_updatePagination",
      value: function _updatePagination(event, target) {
        // Unfortunately, we have to use this ugly jQuery style stuff
        SPR.$(target).data('page', parseInt(target.getAttribute('data-page')) + 1);
      }
    }, {
      key: "_onFormSuccess",
      value: function _onFormSuccess() {
        var formSuccess = this.element.querySelector('.spr-form-message-success');
        window.scrollTo(0, formSuccess.offsetTop - 45);
      }
    }, {
      key: "_onReviewsLoad",
      value: function _onReviewsLoad() {
        // We want to move "spr-pagination-next" before the "new review" button in the "spr-summary-actions" div
        var sprSummaryActions = this.element.querySelector('.spr-summary-actions'),
            previousSprPaginationNext = sprSummaryActions.querySelector('.spr-pagination-next'),
            sprPaginationNext = this.element.querySelector('.spr-pagination .spr-pagination-next');

        if (previousSprPaginationNext) {
          previousSprPaginationNext.remove();
        }

        if (sprPaginationNext) {
          sprSummaryActions.insertBefore(sprPaginationNext, sprSummaryActions.firstChild);
        }
      }
    }, {
      key: "_onNewReviewClicked",
      value: function _onNewReviewClicked(event, target) {
        target.style.display = 'none';

        if (target.previousElementSibling) {
          target.previousElementSibling.style.display = 'none';
        }
      }
    }]);

    return ProductReviews;
  }();

  /**
   * This implementation allows to serialize a form
   */
  var Form = /*#__PURE__*/function () {
    function Form() {
      _classCallCheck(this, Form);
    }

    _createClass(Form, null, [{
      key: "serialize",
      value: function serialize(form) {
        function stringKey(key, value) {
          var beginBracket = key.lastIndexOf('[');

          if (beginBracket === -1) {
            var _hash = {};
            _hash[key] = value;
            return _hash;
          }

          var newKey = key.substr(0, beginBracket);
          var newValue = {};
          newValue[key.substring(beginBracket + 1, key.length - 1)] = value;
          return stringKey(newKey, newValue);
        }

        var hash = {};

        for (var i = 0, len = form.elements.length; i < len; i++) {
          var formElement = form.elements[i];

          if (formElement.name === '' || formElement.disabled) {
            continue;
          }

          if (formElement.name && !formElement.disabled && (formElement.checked || /select|textarea/i.test(formElement.nodeName) || /hidden|text|search|tel|url|email|password|datetime|date|month|week|time|datetime-local|number|range|color/i.test(formElement.type))) {
            var stringKeys = stringKey(formElement.name, formElement.value);
            hash = Form.extend(hash, stringKeys);
          }
        }

        return hash;
      }
    }, {
      key: "extend",
      value: function extend() {
        var extended = {};
        var i = 0; // Merge the object into the extended object

        var merge = function merge(obj) {
          for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
              // If property is an object, merge properties
              if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                extended[prop] = Form.extend(extended[prop], obj[prop]);
              } else {
                extended[prop] = obj[prop];
              }
            }
          }
        }; // Loop through each object and conduct a merge


        for (; i < arguments.length; i++) {
          merge(arguments[i]);
        }

        return extended;
      }
    }]);

    return Form;
  }();

  var Currency = /*#__PURE__*/function () {
    function Currency() {
      _classCallCheck(this, Currency);
    }

    _createClass(Currency, null, [{
      key: "formatMoney",
      value:
      /**
       * Format money values based on your shop currency settings
       *
       * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents or 3.00 dollars
       * @param  {String} format - shop money_format setting
       * @return {String} value - formatted value
       */
      function formatMoney(cents, format) {
        if (typeof cents === 'string') {
          cents = cents.replace('.', '');
        }

        var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/,
            formatString = format || '${{amount}}';

        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }

        function formatWithDelimiters(number, precision, thousands, decimal) {
          precision = defaultTo(precision, 2);
          thousands = defaultTo(thousands, ',');
          decimal = defaultTo(decimal, '.');

          if (isNaN(number) || number == null) {
            return 0;
          }

          number = (number / 100.0).toFixed(precision);
          var parts = number.split('.'),
              dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
              centsAmount = parts[1] ? decimal + parts[1] : '';
          return dollarsAmount + centsAmount;
        }

        var value = '';

        switch (formatString.match(placeholderRegex)[1]) {
          case 'amount':
            value = formatWithDelimiters(cents, 2);
            break;

          case 'amount_no_decimals':
            value = formatWithDelimiters(cents, 0);
            break;

          case 'amount_with_space_separator':
            value = formatWithDelimiters(cents, 2, ' ', '.');
            break;

          case 'amount_no_decimals_with_comma_separator':
            value = formatWithDelimiters(cents, 0, ',', '.');
            break;

          case 'amount_no_decimals_with_space_separator':
            value = formatWithDelimiters(cents, 0, ' ');
            break;

          case 'amount_with_comma_separator':
            value = formatWithDelimiters(cents, 2, '.', ',');
            break;
        }

        if (formatString.indexOf('with_comma_separator') !== -1) {
          return formatString.replace(placeholderRegex, value).replace(',00', '');
        } else {
          return formatString.replace(placeholderRegex, value).replace('.00', '');
        }
      }
    }]);

    return Currency;
  }();

  var VariantSelector = /*#__PURE__*/function () {
    function VariantSelector(element, parentProductVariants) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, VariantSelector);

      this.element = element;
      this.parentProductVariants = parentProductVariants;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.activator = options['activator'] || document.querySelector("[aria-controls=\"".concat(element.getAttribute('id'), "\"]"));

      this.onValueChangedCallback = options['onValueChanged'] || function () {};

      this.isOpen = false;
      this.pageOverlayElement = document.querySelector('.PageOverlay');
      this.variantChoiceList = Dom.nodeListToArray(this.element.querySelectorAll('.VariantSelector__Choice'));
      this.variantCarousel = new Carousel(this.element.querySelector('.VariantSelector__Carousel'), {
        onSelect: this._variantChanged.bind(this),
        onClick: this._variantSelected.bind(this)
      });

      this._attachListeners();
    }

    _createClass(VariantSelector, [{
      key: "destroy",
      value: function destroy() {
        this.element.removeEventListener('keyup', this._handleKeyboardListener);
        this.delegateElement.off('click');
        this.activator.removeEventListener('click', this._toggleListener);
        this.variantCarousel.destroy();
      }
    }, {
      key: "toggle",
      value: function toggle() {
        this.isOpen ? this.close() : this.open();
      }
    }, {
      key: "open",
      value: function open() {
        if (this.isOpen) {
          return;
        }

        this.element.setAttribute('aria-hidden', 'false');
        this.activator.setAttribute('aria-expanded', 'true');
        Accessibility.trapFocus(this.element, 'variant-selector');
        document.documentElement.classList.add('no-scroll'); // Prevent scrolling when popover is open

        this.element.setAttribute('style', '');
        this.pageOverlayElement.classList.add('is-visible');
        this.pageOverlayElement.addEventListener('click', this._closeListener);
        this.isOpen = true;
      }
    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }

        this.element.setAttribute('aria-hidden', 'true');
        this.activator.setAttribute('aria-expanded', 'false');
        Accessibility.removeTrapFocus(this.element, 'variant-selector');
        document.documentElement.classList.remove('no-scroll');
        this.pageOverlayElement.classList.remove('is-visible');
        this.pageOverlayElement.removeEventListener('click', this._closeListener);
        this.isOpen = false;
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._handleKeyboardListener = this._handleKeyboard.bind(this);
        this._closeListener = this.close.bind(this);
        this._toggleListener = this.toggle.bind(this);
        this.element.addEventListener('keyup', this._handleKeyboardListener);
        this.activator.addEventListener('click', this._toggleListener);
        this.delegateElement.on('click', '[data-action="select-variant"]', this._onVariantSelect.bind(this));
        this.parentProductVariants.delegateElement.on('variant:changed', this._onVariantChanged.bind(this));
      }
      /**
       * Called when the variant is changed (but not yet selected)
       */

    }, {
      key: "_variantChanged",
      value: function _variantChanged(selectedIndex) {
        var activeChoice = this.variantChoiceList[selectedIndex];
        activeChoice.classList.add('is-selected');
        Dom.getSiblings(activeChoice, '.is-selected').forEach(function (item) {
          return item.classList.remove('is-selected');
        });
      }
      /**
       * Called when a variant is clicked or selected
       */

    }, {
      key: "_variantSelected",
      value: function _variantSelected(cellElement, cellIndex) {
        if (this.variantCarousel.getSelectedIndex() === cellIndex) {
          this.onValueChangedCallback(cellElement.getAttribute('data-option-value'), cellElement, this.activator);
          this.close();
        } else {
          this.variantCarousel.selectCell(cellIndex);
        }
      }
    }, {
      key: "_onVariantChanged",
      value: function _onVariantChanged(event) {
        var _this = this;

        var selectedVariant = event.detail.variant,
            imageWrapperElements = this.element.querySelectorAll('.VariantSelector__ImageWrapper'),
            found = false;
        Dom.nodeListToArray(imageWrapperElements).forEach(function (image) {
          var colorPosition = parseInt(image.parentElement.getAttribute('data-option-position')) - 1,
              combinationExcludedColor = '';
          selectedVariant.options.forEach(function (optionValue, index) {
            if (index !== colorPosition) {
              combinationExcludedColor += optionValue;
            }
          });

          if (image.getAttribute('data-variant-title') === combinationExcludedColor) {
            image.setAttribute('aria-hidden', 'false');
            found = true;
          } else {
            image.setAttribute('aria-hidden', 'true');
          }
        });

        if (!found) {
          imageWrapperElements.children[0].setAttribute('aria-hidden', 'false');
        }

        var foundColorIndex = 0;
        Dom.nodeListToArray(this.element.querySelectorAll('.VariantSelector__ChoicePrice')).forEach(function (priceElement, index) {
          var colorPosition = parseInt(priceElement.getAttribute('data-color-position')) - 1;

          _this.parentProductVariants.productData['variants'].forEach(function (variant) {
            var matchOptionsExcludedColor = true;
            variant['options'].forEach(function (option, index) {
              if (index !== colorPosition) {
                if (variant['options'][index] !== selectedVariant['options'][index]) {
                  matchOptionsExcludedColor = false;
                }
              }
            });

            if (matchOptionsExcludedColor && variant['options'][colorPosition] === selectedVariant['options'][colorPosition]) {
              if (foundColorIndex++ === index) {
                priceElement.innerHTML = "<span class=\"Heading Text--subdued\">".concat(Currency.formatMoney(variant['price'], window.theme.moneyFormat), "</span>");
              }
            }
          });
        });
      }
      /**
       * Called when the button "choose this variant" is explicitly clicked
       */

    }, {
      key: "_onVariantSelect",
      value: function _onVariantSelect() {
        var selectedCell = this.variantCarousel.flickityInstance.selectedCell.element;
        this.onValueChangedCallback(selectedCell.getAttribute('data-option-value'), selectedCell, this.activator);
        this.close();
      }
      /**
       * Handle a11y events
       */

    }, {
      key: "_handleKeyboard",
      value: function _handleKeyboard(event) {
        if (this.isOpen && event.keyCode === 27) {
          this.close();
        }
      }
    }]);

    return VariantSelector;
  }();

  /**
   * Handle the store availability management. The parameter is the div that will hold the content. The function
   * "updateWithVariant" must be called whenever the variant is changed.
   */

  var StoreAvailability = /*#__PURE__*/function () {
    function StoreAvailability(element, productTitle) {
      _classCallCheck(this, StoreAvailability);

      this.element = element;
      this.productTitle = productTitle;
      this.existingDrawers = {};
    }

    _createClass(StoreAvailability, [{
      key: "updateWithVariant",
      value: function updateWithVariant(variant) {
        if (!this.element) {
          return; // If the element to inject the store availability does not exist, we return immediately
        } // If the variant is null (for instance unavailable variant), we clear the container


        if (!variant) {
          this.element.textContent = '';
          return;
        } // If we have a new variant we render the section


        this._renderAvailabilitySection(variant['id']);
      }
    }, {
      key: "_renderAvailabilitySection",
      value: function _renderAvailabilitySection(id) {
        var _this = this;

        // First we clear the previous content
        this.element.innerHTML = ''; // If there is already an element with the given modal we remove it first

        var availabilityModal = document.getElementById("StoreAvailabilityModal-".concat(id));

        if (availabilityModal) {
          availabilityModal.remove();
        }

        if (this.existingDrawers["StoreAvailabilityModal-".concat(id)]) {
          this.existingDrawers["StoreAvailabilityModal-".concat(id)].destroy();
          delete this.existingDrawers["StoreAvailabilityModal-".concat(id)];
        }

        return fetch("".concat(window.routes.rootUrlWithoutSlash, "/variants/").concat(id, "?section_id=store-availability")).then(function (response) {
          return response.text().then(function (content) {
            _this.element.innerHTML = content;
            _this.element.innerHTML = _this.element.firstElementChild.innerHTML; // The product title is not rendered so we have to render it manually

            var productTitle = _this.element.querySelector('.store-availabilities-modal__product-title');

            if (productTitle) {
              productTitle.textContent = _this.productTitle;
            } // In order for our modal system to work we have to append the modal to the body instead


            var availabilityModal = document.getElementById("StoreAvailabilityModal-".concat(id));
            document.body.appendChild(availabilityModal); // Create the drawer

            _this.existingDrawers["StoreAvailabilityModal-".concat(id)] = new Drawer(availabilityModal);
          });
        });
      }
    }]);

    return StoreAvailability;
  }();

  var ProductVariants = /*#__PURE__*/function () {
    function ProductVariants(container, options) {
      var _this = this;

      _classCallCheck(this, ProductVariants);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.options = options;
      var jsonData = JSON.parse(this.element.querySelector('[data-product-json]').innerHTML);
      this.productData = jsonData['product'];
      this.variantsInventories = jsonData['inventories'] || {};
      this.masterSelector = this.element.querySelector("#product-select-".concat(this.productData['id'])); // We init value with the first selected variant

      this.productData['variants'].forEach(function (variant) {
        if (variant['id'] === jsonData['selected_variant_id']) {
          _this.currentVariant = variant;
          _this.option1 = variant['option1'];
          _this.option2 = variant['option2'];
          _this.option3 = variant['option3'];
        }
      });
      this.storeAvailability = new StoreAvailability(this.element.querySelector('.ProductMeta__StoreAvailabilityContainer'), this.productData['title']);
      this.storeAvailability.updateWithVariant(this.currentVariant);

      this._attachListeners();

      this._createSelectors();
    }

    _createClass(ProductVariants, [{
      key: "destroy",
      value: function destroy() {
        this.delegateElement.off('click');
        this.formPopovers.forEach(function (popover) {
          return popover.destroy();
        });
        this.formVariantSelectors.forEach(function (selector) {
          return selector.destroy();
        });
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '[data-action="add-to-cart"]', this._addToCart.bind(this));
        this.delegateElement.on('click', '[data-action="decrease-quantity"]', this._decreaseQuantity.bind(this));
        this.delegateElement.on('click', '[data-action="increase-quantity"]', this._increaseQuantity.bind(this));
        this.delegateElement.on('change', '[name="quantity"]', this._validateQuantity.bind(this)); // Hook when a radio button change

        this.delegateElement.on('change', '.ProductForm__Option [type="radio"]', this._onOptionChanged.bind(this));
      }
      /**
       * Selectors can either be popovers or dedicated variant selectors. We therefore pre-create them all here
       */

    }, {
      key: "_createSelectors",
      value: function _createSelectors() {
        var _this2 = this;

        // Create the instances for each selector
        this.formPopovers = [];
        this.formVariantSelectors = [];
        Dom.nodeListToArray(this.element.querySelectorAll('.OptionSelector')).forEach(function (item) {
          var popover = new Popover(item, {
            preferredPosition: 'left',
            onValueChanged: _this2._onOptionChanged.bind(_this2)
          });

          _this2.formPopovers.push(popover);
        });
        Dom.nodeListToArray(this.element.querySelectorAll('.VariantSelector')).forEach(function (item) {
          var variantSelector = new VariantSelector(item, _this2, {
            onValueChanged: _this2._onOptionChanged.bind(_this2)
          });

          _this2.formVariantSelectors.push(variantSelector);
        });
      }
      /**
       * ---------------------------------------------------------------------------------------------------
       * CODE THAT HANDLE VARIANT CHANGES IN THE FRONT
       *
       * Please note that this code is highly dependant on the markup and classes, so make sure to NOT
       * edit this code
       * ---------------------------------------------------------------------------------------------------
       */

      /**
       * This callback is called whenever the variant changes and allows to update data about the active variant
       */

    }, {
      key: "_onVariantChanged",
      value: function _onVariantChanged(previousVariant, newVariant) {
        // 1st: the prices
        this._updateProductPrices(newVariant, previousVariant); // 2nd: update inventory


        this._updateInventory(newVariant, previousVariant); // 3rd: update SKU


        this._updateSku(newVariant, previousVariant); // 4th: update the price measurement


        this._updateUnitPrice(newVariant, previousVariant); // 5th: the add to cart button


        this._updateAddToCartButton(newVariant, previousVariant); // 6th: store availability


        this.storeAvailability.updateWithVariant(newVariant); // Finally, we send an event so that other system could hook and do their own logic

        this.element.dispatchEvent(new CustomEvent('variant:changed', {
          bubbles: true,
          detail: {
            variant: newVariant,
            previousVariant: previousVariant
          }
        }));
      }
      /**
       * Update the prices (optionally showing compare at price)
       */

    }, {
      key: "_updateProductPrices",
      value: function _updateProductPrices(newVariant, previousVariant) {
        var productMetaPrices = this.element.querySelector('.ProductMeta__PriceList'),
            currencyFormat = window.theme.currencyCodeEnabled ? window.theme.moneyWithCurrencyFormat : window.theme.moneyFormat;

        if (!productMetaPrices) {
          return;
        }

        if (!newVariant) {
          productMetaPrices.style.display = 'none';
        } else {
          if (previousVariant && previousVariant['price'] === newVariant['price'] && previousVariant['compare_at_price'] === newVariant['compare_at_price']) {
            return; // The price do not have changed so let's return to avoid changing the DOM for nothing
          }

          productMetaPrices.innerHTML = '';

          if (newVariant['compare_at_price'] > newVariant['price']) {
            productMetaPrices.innerHTML += "<span class=\"ProductMeta__Price Price Price--highlight Text--subdued u-h4\" data-money-convertible>".concat(Currency.formatMoney(newVariant['price'], currencyFormat), "</span>");
            productMetaPrices.innerHTML += "<span class=\"ProductMeta__Price Price Price--compareAt Text--subdued u-h4\" data-money-convertible>".concat(Currency.formatMoney(newVariant['compare_at_price'], currencyFormat), "</span>");
          } else {
            productMetaPrices.innerHTML += "<span class=\"ProductMeta__Price Price Text--subdued u-h4\" data-money-convertible>".concat(Currency.formatMoney(newVariant['price'], currencyFormat), "</span>");
          }

          productMetaPrices.style.display = '';
        }
      }
      /**
       * Update the inventory (if needed)
       */

    }, {
      key: "_updateInventory",
      value: function _updateInventory(newVariant) {
        if (!this.options['showInventoryQuantity']) {
          return;
        }

        var productFormInventory = this.element.querySelector('.ProductForm__Inventory'),
            variantInventory = newVariant ? this.variantsInventories[newVariant['id']] : null;

        if (!newVariant || null === variantInventory['inventory_management'] || variantInventory['inventory_quantity'] <= 0 || this.options['inventoryQuantityThreshold'] > 0 && variantInventory['inventory_quantity'] > this.options['inventoryQuantityThreshold']) {
          productFormInventory.style.display = 'none';
        } else {
          productFormInventory.innerHTML = variantInventory['inventory_message'];
          productFormInventory.style.display = '';
        }
      }
      /**
       * Update the SKU
       */

    }, {
      key: "_updateSku",
      value: function _updateSku(newVariant) {
        if (!this.options['showSku'] || !newVariant) {
          return;
        }

        var productSkuNumber = this.element.querySelector('.ProductMeta__SkuNumber');

        if (productSkuNumber && newVariant['sku']) {
          productSkuNumber.innerText = newVariant['sku'];
        }
      }
      /**
       * Update the unit price
       */

    }, {
      key: "_updateUnitPrice",
      value: function _updateUnitPrice(newVariant) {
        if (!newVariant) {
          return;
        }

        var unitPriceMeasurement = this.element.querySelector('.ProductMeta__UnitPriceMeasurement');

        if (!unitPriceMeasurement) {
          return;
        }

        if (!newVariant.hasOwnProperty('unit_price')) {
          unitPriceMeasurement.style.display = 'none';
          return;
        }

        unitPriceMeasurement.style.display = 'block';
        unitPriceMeasurement.querySelector('.UnitPriceMeasurement__Price').innerHTML = Currency.formatMoney(newVariant['unit_price'], window.theme.moneyFormat);
        unitPriceMeasurement.querySelector('.UnitPriceMeasurement__ReferenceUnit').textContent = newVariant['unit_price_measurement']['reference_unit'];
        var unitPriceReferenceValue = unitPriceMeasurement.querySelector('.UnitPriceMeasurement__ReferenceValue');
        unitPriceReferenceValue.textContent = newVariant['unit_price_measurement']['reference_value'];
        unitPriceReferenceValue.style.display = newVariant['unit_price_measurement']['reference_value'] === 1 ? 'none' : 'inline';
      }
      /**
       * Update the add to cart
       */

    }, {
      key: "_updateAddToCartButton",
      value: function _updateAddToCartButton(newVariant) {
        var addToCartButton = this.element.querySelector('.ProductForm__AddToCart'),
            shopifyPaymentButton = this.element.querySelector('.shopify-payment-button');

        if (addToCartButton) {
          addToCartButton.classList.remove('Button--secondary');
          addToCartButton.classList.remove('Button--primary');

          if (!newVariant) {
            addToCartButton.setAttribute('disabled', 'disabled');
            addToCartButton.removeAttribute('data-action');
            addToCartButton.classList.add('Button--secondary');
            addToCartButton.innerHTML = window.languages.productFormUnavailable;
          } else {
            if (newVariant['available']) {
              addToCartButton.removeAttribute('disabled');
              addToCartButton.classList.add(addToCartButton.getAttribute('data-use-primary-button') === 'true' ? 'Button--primary' : 'Button--secondary');
              addToCartButton.setAttribute('data-action', 'add-to-cart');

              if (undefined === this.options['showPriceInButton'] || this.options['showPriceInButton']) {
                addToCartButton.innerHTML = "\n            <span>".concat(window.languages.productFormAddToCart, "</span>\n            <span class=\"Button__SeparatorDot\"></span>\n            <span data-money-convertible>").concat(Currency.formatMoney(newVariant['price'], window.theme.moneyFormat), "</span>\n          ");
              } else {
                addToCartButton.innerHTML = "<span>".concat(window.languages.productFormAddToCart, "</span>");
              }
            } else {
              addToCartButton.setAttribute('disabled', 'disabled');
              addToCartButton.classList.add('Button--secondary');
              addToCartButton.removeAttribute('data-action');
              addToCartButton.innerHTML = window.languages.productFormSoldOut;
            }
          }
        }

        if (this.options['showPaymentButton'] && shopifyPaymentButton) {
          if (!newVariant || !newVariant['available']) {
            shopifyPaymentButton.style.display = 'none';
          } else {
            shopifyPaymentButton.style.display = 'block';
          }
        }
      }
      /**
       * ---------------------------------------------------------------------------------------------------
       * INTERNAL CODE THAT HANDLE VARIANT CHANGES
       * ---------------------------------------------------------------------------------------------------
       */

      /**
       * Whenever an option is changed, this code fetch the corresponding active variant
       */

    }, {
      key: "_onOptionChanged",
      value: function _onOptionChanged(newValue, target, activator) {
        // We change the value associated with the activator, and check if we have a color swatch
        if (activator) {
          this['option' + target.getAttribute('data-option-position')] = newValue;
          activator.querySelector('.ProductForm__SelectedValue').innerHTML = newValue;
        } else {
          this['option' + target.getAttribute('data-option-position')] = target.value;
          var selectedValue = target.closest('.ProductForm__Option').querySelector('.ProductForm__SelectedValue');

          if (selectedValue) {
            selectedValue.innerHTML = target.value;
          }
        } // Finally, we get the new variant


        var previousVariant = this.currentVariant;
        this.currentVariant = this._getCurrentVariantFromOptions();

        this._onVariantChanged(previousVariant, this.currentVariant);

        if (this.currentVariant) {
          if (this.options['enableHistoryState']) {
            this._updateHistoryState(this.currentVariant);
          } // We need to modify the hidden select that contain the id attribute as well


          this.masterSelector.querySelector('[selected]').removeAttribute('selected');
          this.masterSelector.querySelector("[value=\"".concat(this.currentVariant['id'], "\"]")).setAttribute('selected', 'selected');
          this.masterSelector.dispatchEvent(new Event('change', {
            bubbles: true
          }));
        }
      }
      /**
       * Get the active variant based on the options
       */

    }, {
      key: "_getCurrentVariantFromOptions",
      value: function _getCurrentVariantFromOptions() {
        var _this3 = this;

        var found = false;
        this.productData['variants'].forEach(function (variant) {
          if (variant['option1'] === _this3.option1 && variant['option2'] === _this3.option2 && variant['option3'] === _this3.option3) {
            found = variant;
          }
        });
        return found || null;
      }
      /**
       * Update the history state for browsers that support it
       */

    }, {
      key: "_updateHistoryState",
      value: function _updateHistoryState(variant) {
        if (!history.replaceState) {
          return;
        }

        var newUrl = "".concat(window.location.protocol, "//").concat(window.location.host).concat(window.location.pathname, "?variant=").concat(variant.id);
        window.history.replaceState({
          path: newUrl
        }, '', newUrl);
      }
      /**
       * ---------------------------------------------------------------------------------------------------
       * INTERNAL CODE THAT HANDLE PRODUCT ADD TO CART
       * ---------------------------------------------------------------------------------------------------
       */

    }, {
      key: "_addToCart",
      value: function _addToCart(event) {
        var _this4 = this;

        if (!this.options['useAjaxCart']) {
          return; // When using a cart type of page, we just simply redirect to the cart page
        }

        event.preventDefault(); // Prevent form to be submitted

        var addToCartButton = this.element.querySelector('.ProductForm__AddToCart'); // First, we switch the status of the button

        addToCartButton.setAttribute('disabled', 'disabled');
        document.dispatchEvent(new CustomEvent('theme:loading:start')); // Then we add the product in Ajax

        var formElement = this.element.querySelector('form[action*="/cart/add"]');
        fetch("".concat(window.routes.cartAddUrl, ".js"), {
          body: JSON.stringify(Form.serialize(formElement)),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header

          }
        }).then(function (response) {
          document.dispatchEvent(new CustomEvent('theme:loading:end'));
          var quantityElement = formElement.querySelector('[name="quantity"]');

          if (response.ok) {
            addToCartButton.removeAttribute('disabled'); // We simply trigger an event so the mini-cart can re-render

            _this4.element.dispatchEvent(new CustomEvent('product:added', {
              bubbles: true,
              detail: {
                variant: _this4.currentVariant,
                quantity: quantityElement ? parseInt(quantityElement.value) : 1
              }
            }));
          } else {
            response.json().then(function (content) {
              var errorMessageElement = document.createElement('span');
              errorMessageElement.className = 'ProductForm__Error Alert Alert--error';
              errorMessageElement.innerHTML = content['description'];
              addToCartButton.removeAttribute('disabled');
              addToCartButton.insertAdjacentElement('afterend', errorMessageElement);
              setTimeout(function () {
                errorMessageElement.remove();
              }, 2500);
            });
          }
        });
        event.preventDefault();
      }
      /**
       * ---------------------------------------------------------------------------------------------------
       * OTHER
       * ---------------------------------------------------------------------------------------------------
       */

      /**
       * When using the quantity selector, this can be used to decrease the quantity (be ensuring it won't be lower than 1)
       */

    }, {
      key: "_decreaseQuantity",
      value: function _decreaseQuantity(event, target) {
        target.nextElementSibling.value = Math.max(parseInt(target.nextElementSibling.value) - 1, 1);
      }
      /**
       * When using the quantity selector, this can be used to increase the quantity
       */

    }, {
      key: "_increaseQuantity",
      value: function _increaseQuantity(event, target) {
        target.previousElementSibling.value = parseInt(target.previousElementSibling.value) + 1;
      }
      /**
       * Make sure the quantity does not go below when manually changed
       */

    }, {
      key: "_validateQuantity",
      value: function _validateQuantity(event, target) {
        target.value = Math.max(parseInt(target.value) || 1, 1);
      }
    }]);

    return ProductVariants;
  }();

  var ProductVideo = /*#__PURE__*/function () {
    function ProductVideo(element, stackProductImages, enableVideoLooping) {
      _classCallCheck(this, ProductVideo);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.stackProductImages = stackProductImages;
      this.enableVideoLooping = enableVideoLooping;
      this.player = null;

      switch (this.element.getAttribute('data-media-type')) {
        case 'video':
          var stylesheet = document.createElement('link');
          stylesheet.rel = 'stylesheet';
          stylesheet.href = 'https://cdn.shopify.com/shopifycloud/shopify-plyr/v1.0/shopify-plyr.css';
          document.head.appendChild(stylesheet);
          window.Shopify.loadFeatures([{
            name: 'video-ui',
            version: '1.0',
            onLoad: this._setupHtml5Video.bind(this)
          }]);
          break;

        case 'external_video':
          this._setupExternalVideo();

          break;
      }
    }

    _createClass(ProductVideo, [{
      key: "destroy",
      value: function destroy() {
        if (this.player) {
          this.player.destroy(); // Both Plyr and YouTube API use the same name
        }
      }
    }, {
      key: "hasBeenSelected",
      value: function hasBeenSelected() {
        // As per guidelines, we only need to autoplay when it's not a touch device
        if (Responsive.matchesBreakpoint('supports-hover')) {
          this.play();
        }
      }
    }, {
      key: "hasBeenDeselected",
      value: function hasBeenDeselected() {
        this.pause();
      }
    }, {
      key: "play",
      value: function play() {
        switch (this.element.getAttribute('data-media-type')) {
          case 'video':
            this.player.play();
            break;

          case 'external_video':
            this.player.playVideo();
            break;
        }
      }
    }, {
      key: "pause",
      value: function pause() {
        switch (this.element.getAttribute('data-media-type')) {
          case 'video':
            this.player.pause();
            break;

          case 'external_video':
            this.player.pauseVideo();
            break;
        }
      }
    }, {
      key: "_setupHtml5Video",
      value: function _setupHtml5Video() {
        var _this = this;

        this.player = new Shopify.Plyr(this.element.querySelector('video'), {
          controls: ['play', 'progress', 'mute', 'volume', 'play-large', 'fullscreen'],
          loop: {
            active: this.enableVideoLooping
          },
          hideControlsOnPause: true,
          clickToPlay: true,
          iconUrl: '//cdn.shopify.com/shopifycloud/shopify-plyr/v1.0/shopify-plyr.svg',
          tooltips: {
            controls: false,
            seek: true
          }
        });
        this.player.on('play', function () {
          _this.element.dispatchEvent(new CustomEvent('video:played', {
            bubbles: true
          }));
        });
        this.player.on('pause', function () {
          _this.element.dispatchEvent(new CustomEvent('video:paused', {
            bubbles: true
          }));
        });
      }
    }, {
      key: "_setupExternalVideo",
      value: function _setupExternalVideo() {
        if (this.element.getAttribute('data-video-host') === 'youtube') {
          this._loadYouTubeScript().then(this._setupYouTubePlayer.bind(this));
        }
      }
    }, {
      key: "_setupYouTubePlayer",
      value: function _setupYouTubePlayer() {
        var _this2 = this;

        var playerLoadingInterval = setInterval(function () {
          if (window.YT !== undefined && window.YT.Player !== undefined) {
            _this2.player = new YT.Player(_this2.element.querySelector('iframe'), {
              videoId: _this2.element.getAttribute('data-video-id'),
              events: {
                onStateChange: function onStateChange(event) {
                  if (event.data === window.YT.PlayerState.PLAYING) {
                    _this2.element.dispatchEvent(new CustomEvent('video:played', {
                      bubbles: true
                    }));
                  } else if (event.data === YT.PlayerState.PAUSED) {
                    _this2.element.dispatchEvent(new CustomEvent('video:paused', {
                      bubbles: true
                    }));
                  }

                  if (event.data === window.YT.PlayerState.ENDED && _this2.enableVideoLooping) {
                    event.target.seekTo(0);
                  }
                }
              }
            });
            clearInterval(playerLoadingInterval);
          }
        }, 50);
      }
    }, {
      key: "_loadYouTubeScript",
      value: function _loadYouTubeScript() {
        return new Promise(function (resolve, reject) {
          var script = document.createElement('script');
          document.body.appendChild(script);
          script.onload = resolve;
          script.onerror = reject;
          script.async = true;
          script.src = '//www.youtube.com/iframe_api';
        });
      }
    }]);

    return ProductVideo;
  }();

  /**
   * This code has been heavily inspired by this: https://kitaitimakoto.gitlab.io/scrollspy-example/index.en.html#whatsthis
   */
  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(container, elementsToSpy, observerOptions) {
      var _this = this;

      _classCallCheck(this, ScrollSpy);

      this.container = container;
      this.targets = [];
      this.targetIndices = {};
      this.indicesInViewPort = [];
      this.observer = new IntersectionObserver(this._onIntersectionChange.bind(this), observerOptions);
      elementsToSpy.forEach(function (elementToSpy, index) {
        _this.targets.push(elementToSpy);

        _this.targetIndices[elementToSpy.id] = index;

        _this.observer.observe(elementToSpy);
      });
    }

    _createClass(ScrollSpy, [{
      key: "destroy",
      value: function destroy() {
        this.observer.disconnect();
      }
      /**
       * Called whenever there is a change of visibility
       */

    }, {
      key: "_onIntersectionChange",
      value: function _onIntersectionChange(changes) {
        var oldTargetIndex = this.indicesInViewPort[0] || 0;

        for (var i = changes.length - 1; i >= 0; i--) {
          this._updateIndicesInViewPort(changes[i], oldTargetIndex);
        } // Firefox generates duplicates so make sure to remove


        this.indicesInViewPort = this.indicesInViewPort.filter(function (value, index, self) {
          return self.indexOf(value) === index;
        });

        if (this.indicesInViewPort.length === 0 || oldTargetIndex === this.indicesInViewPort[0]) {
          return;
        }

        var event = new CustomEvent('scrollspy:target:changed', {
          detail: {
            newTarget: this.targets[this.indicesInViewPort[0]],
            oldTarget: this.targets[oldTargetIndex]
          }
        });
        this.container.dispatchEvent(event);
      }
      /**
       * Update indices visible in the view port
       */

    }, {
      key: "_updateIndicesInViewPort",
      value: function _updateIndicesInViewPort(change, oldTargetIndex) {
        var index = this.targetIndices[change.target.id];

        if (change.intersectionRatio === 0) {
          var indexInViewPort = this.indicesInViewPort.indexOf(index);

          if (indexInViewPort !== -1) {
            this.indicesInViewPort.splice(indexInViewPort, 1);
          }
        } else {
          if (index < oldTargetIndex) {
            this.indicesInViewPort.unshift(index);
          } else if (index > this.indicesInViewPort[this.indicesInViewPort.length - 1]) {
            this.indicesInViewPort.push(index);
          } else {
            this.indicesInViewPort.push(index);
            this.indicesInViewPort.sort();
          }
        }
      }
    }]);

    return ScrollSpy;
  }();

  var SearchBar = /*#__PURE__*/function () {
    function SearchBar() {
      _classCallCheck(this, SearchBar);

      this.documentDelegate = new domDelegate.Delegate(document.body);
      this.searchElement = document.getElementById('Search');
      this.searchInputElement = this.searchElement.querySelector('[name="q"]');
      this.searchResultsElement = this.searchElement.querySelector('.Search__Results');
      this.queryMap = {};
      this.isOpen = false;
      this.pageOverlayElement = document.querySelector('.PageOverlay');

      this._attachListeners();
    }

    _createClass(SearchBar, [{
      key: "destroy",
      value: function destroy() {
        this.searchInputElement.removeEventListener('keydown', this._preventSubmissionListener);
        this.searchInputElement.removeEventListener('input', this._onInputListener);
        this.documentDelegate.off();
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._preventSubmissionListener = this._preventSubmission.bind(this);
        this._onInputListener = this._debounce(this._onInput.bind(this), 250);
        this.searchInputElement.addEventListener('keydown', this._preventSubmissionListener);
        this.searchInputElement.addEventListener('input', this._onInputListener);
        this.documentDelegate.on('click', '[data-action="toggle-search"]', this._toggleSearch.bind(this));
        this.documentDelegate.on('click', '[data-action="open-search"]', this._openSearch.bind(this));
        this.documentDelegate.on('click', '[data-action="close-search"]', this._closeSearch.bind(this));
        this.documentDelegate.on('search:close', this._closeSearch.bind(this)); // Allow for third-party elements to close the bar
      }
      /**
       * Toggle the search
       */

    }, {
      key: "_toggleSearch",
      value: function _toggleSearch(event) {
        if (this.isOpen) {
          this._closeSearch(event);
        } else {
          this._openSearch(event);
        }

        event.preventDefault();
      }
      /**
       * Open the search form and trap focus
       */

    }, {
      key: "_openSearch",
      value: function _openSearch() {
        var _this = this;

        this.searchElement.setAttribute('aria-hidden', 'false');
        document.documentElement.classList.add('no-scroll');
        Accessibility.trapFocus(this.searchElement, 'search', this.searchElement.querySelector('[name="q"]'));

        var onFocusListener = function onFocusListener() {
          _this.searchInputElement.focus();

          _this.searchElement.removeEventListener('transitionend', onFocusListener);
        };

        this.searchElement.addEventListener('transitionend', onFocusListener);
        this.isOpen = true;
        this.pageOverlayElement.classList.add('is-visible');
        document.querySelector('#shopify-section-header').style.zIndex = 10;
      }
      /**
       * Close the search form and clear focus
       */

    }, {
      key: "_closeSearch",
      value: function _closeSearch() {
        var _this2 = this;

        this.searchElement.setAttribute('aria-hidden', 'true');
        document.documentElement.classList.remove('no-scroll');
        Accessibility.removeTrapFocus(this.searchElement, 'search');
        this.isOpen = false;

        var onTransitionEnd = function onTransitionEnd(event) {
          if (event.propertyName === 'visibility') {
            document.querySelector('#shopify-section-header').style.zIndex = '';

            _this2.pageOverlayElement.removeEventListener('transitionend', onTransitionEnd);
          }
        };

        this.pageOverlayElement.addEventListener('transitionend', onTransitionEnd);
        this.pageOverlayElement.classList.remove('is-visible');
      }
      /**
       * In order to prevent an odd UX where hitting the enter always choose the product results, if the search is set to product + something else,
       * then we disable submission using enter key
       */

    }, {
      key: "_preventSubmission",
      value: function _preventSubmission(event) {
        if (event.keyCode === 13 && window.theme.searchMode !== 'product') {
          event.preventDefault();
        }
      }
      /**
       * This is called when the user has stopped typing (after debounce delay)
       */

    }, {
      key: "_onInput",
      value: function _onInput(event) {
        var _this3 = this;

        if (event.keyCode === 13) {
          return;
        } // Unfortunately, fetch does not support as of today cancelling a request. As a consequence what we do is that we manually
        // keep track of sent requests, and only use the results of the last one


        this.lastInputValue = event.target.value;

        if (this.lastInputValue === '') {
          this._resetSearch();

          return;
        }

        var queryOptions = {
          method: 'GET',
          credentials: 'same-origin'
        };
        var queries = [fetch("".concat(window.routes.searchUrl, "?section_id=predictive-search&q=").concat(encodeURIComponent(this.lastInputValue), "*&type=product"), queryOptions)];

        if (window.theme.searchMode !== 'product') {
          queries.push(fetch("".concat(window.routes.searchUrl, "?section_id=predictive-search&q=").concat(encodeURIComponent(this.lastInputValue), "*&type=").concat(window.theme.searchMode.replace('product,', '')), queryOptions));
        }

        this.queryMap[this.lastInputValue] = true;
        document.dispatchEvent(new CustomEvent('theme:loading:start'));
        Promise.all(queries).then(function (responses) {
          // If we receive the result for a query that is not the last one, we simply do not process the result
          if (_this3.lastInputValue !== event.target.value) {
            return;
          }

          delete _this3.queryMap[event.target.value];
          Promise.all(responses.map(function (response) {
            return response.text();
          })).then(function (contents) {
            // If we have only one content then we only have product, otherwise we have products and articles
            if (window.theme.searchMode === 'product') {
              _this3.searchResultsElement.innerHTML = contents[0];
            } else {
              _this3.searchResultsElement.innerHTML = "<div class=\"PageLayout PageLayout--breakLap\">\n              <div class=\"PageLayout__Section\">".concat(contents[0], "</div>\n              <div class=\"PageLayout__Section PageLayout__Section--secondary\">").concat(contents[1], "</div>\n            </div>");
            }

            _this3.searchResultsElement.setAttribute('aria-hidden', 'false');
          });
          document.dispatchEvent(new CustomEvent('theme:loading:end'));
        });
      }
    }, {
      key: "_resetSearch",
      value: function _resetSearch() {
        if (window.theme.searchMode === 'product') {
          this.searchResultsElement.innerHTML = '';
        } else {
          this.searchResultsElement.innerHTML = "<div class=\"PageLayout PageLayout--breakLap\">\n              <div class=\"PageLayout__Section\"></div>\n              <div class=\"PageLayout__Section PageLayout__Section--secondary\"></div>\n            </div>";
        }

        this.searchResultsElement.setAttribute('aria-hidden', 'true');
        document.dispatchEvent(new CustomEvent('theme:loading:end')); // Just in case
      }
      /**
       * Simple function that allows to debounce
       */

    }, {
      key: "_debounce",
      value: function _debounce(fn, delay) {
        var _this4 = this;

        var timer = null;
        return function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          clearTimeout(timer);
          timer = setTimeout(function () {
            fn.apply(_this4, args);
          }, delay);
        };
      }
    }]);

    return SearchBar;
  }();

  var CountrySelector = /*#__PURE__*/function () {
    function CountrySelector(countrySelect, provinceSelect) {
      _classCallCheck(this, CountrySelector);

      this.countrySelect = countrySelect;
      this.provinceSelect = provinceSelect;

      if (this.countrySelect && this.provinceSelect) {
        this._attachListeners();

        this._initSelectors();
      }
    }

    _createClass(CountrySelector, [{
      key: "destroy",
      value: function destroy() {
        if (this.countrySelect) {
          this.countrySelect.removeEventListener('change', this._onCountryChangedListener);
        }
      }
    }, {
      key: "_initSelectors",
      value: function _initSelectors() {
        // Check first the default value of country
        var defaultCountry = this.countrySelect.getAttribute('data-default');

        if (defaultCountry) {
          for (var i = 0; i !== this.countrySelect.options.length; ++i) {
            if (this.countrySelect.options[i].text === defaultCountry) {
              this.countrySelect.selectedIndex = i;
              break;
            }
          }
        } else {
          this.countrySelect.selectedIndex = 0;
        }

        var event = new Event('change', {
          bubbles: true
        });
        this.countrySelect.dispatchEvent(event); // Then the province

        var defaultProvince = this.provinceSelect.getAttribute('data-default');

        if (defaultProvince) {
          for (var _i = 0; _i !== this.provinceSelect.options.length; ++_i) {
            if (this.provinceSelect.options[_i].text === defaultProvince) {
              this.provinceSelect.selectedIndex = _i;
              break;
            }
          }
        }
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._onCountryChangedListener = this._onCountryChanged.bind(this);
        this.countrySelect.addEventListener('change', this._onCountryChangedListener);
      }
    }, {
      key: "_onCountryChanged",
      value: function _onCountryChanged() {
        var _this = this;

        var selectedOption = this.countrySelect.options[this.countrySelect.selectedIndex],
            provinces = JSON.parse(selectedOption.getAttribute('data-provinces') || '[]'); // First remove all options

        this.provinceSelect.innerHTML = '';

        if (provinces.length === 0) {
          this.provinceSelect.parentNode.style.display = 'none';
          return;
        } // We need to build the provinces array


        provinces.forEach(function (data) {
          _this.provinceSelect.options.add(new Option(data[1], data[0]));
        });
        this.provinceSelect.parentNode.style.display = 'block';
      }
    }]);

    return CountrySelector;
  }();

  var ShippingEstimator = /*#__PURE__*/function () {
    function ShippingEstimator(element) {
      _classCallCheck(this, ShippingEstimator);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.countrySelector = new CountrySelector(this.element.querySelector('[name="country"]'), this.element.querySelector('[name="province"]'));

      this._attachListeners();
    }

    _createClass(ShippingEstimator, [{
      key: "onUnload",
      value: function onUnload() {
        this.delegateElement.off('click');
        this.countrySelector.destroy();
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '.ShippingEstimator__Submit', this._fetchRates.bind(this));
      }
    }, {
      key: "_fetchRates",
      value: function _fetchRates() {
        var _this = this;

        var country = this.element.querySelector('[name="country"]').value,
            province = this.element.querySelector('[name="province"]').value,
            zip = this.element.querySelector('[name="zip"]').value;
        document.dispatchEvent(new CustomEvent('theme:loading:start'));
        fetch("".concat(window.routes.cartUrl, "/shipping_rates.json?shipping_address[zip]=").concat(zip, "&shipping_address[country]=").concat(country, "&shipping_address[province]=").concat(province), {
          credentials: 'same-origin',
          method: 'GET'
        }).then(function (response) {
          response.json().then(function (result) {
            document.dispatchEvent(new CustomEvent('theme:loading:end'));

            var resultsContainer = _this.element.querySelector('.ShippingEstimator__Results'),
                errorContainer = _this.element.querySelector('.ShippingEstimator__Error');

            if (response.ok) {
              var shippingRates = result['shipping_rates'];

              if (shippingRates.length === 0) {
                resultsContainer.innerHTML = "<p>".concat(window.languages.shippingEstimatorNoResults, "</p>");
              } else {
                var html = '';

                if (shippingRates.length === 1) {
                  html += "<p>".concat(window.languages.shippingEstimatorOneResult, "</p><ul>");
                } else {
                  html += "<p>".concat(window.languages.shippingEstimatorMoreResults.replace('{{count}}', shippingRates.length), "</p><ul>");
                }

                shippingRates.forEach(function (item) {
                  html += "<li>".concat(item['name'], ": ").concat(Currency.formatMoney(item['price'], window.theme.moneyFormat), "</li>");
                });
                html += '</ul>';
                resultsContainer.firstElementChild.innerHTML = html;
              }

              TweenLite.fromTo(resultsContainer.firstElementChild, 0.6, {
                autoAlpha: 0,
                y: -15
              }, {
                autoAlpha: 1,
                y: 0,
                delay: 0.35
              });
              errorContainer.style.display = 'none';
              resultsContainer.style.display = 'block';
              Animation.slideDown(resultsContainer);
            } else {
              var errorHtml = '';
              Object.keys(result).forEach(function (key) {
                errorHtml += "<li class=\"Alert__ErrorItem\">".concat(key, " ").concat(result[key], "</li>");
              });
              errorContainer.innerHTML = "<ul class=\"Alert__ErrorList\">".concat(errorHtml, "</ul>");
              resultsContainer.style.display = 'none';
              errorContainer.style.display = 'block';
            }
          });
        });
      }
    }]);

    return ShippingEstimator;
  }();

  var AddressesSection = function AddressesSection() {
    var _this = this;

    _classCallCheck(this, AddressesSection);

    this.countrySelectors = [];
    Dom.nodeListToArray(document.querySelectorAll('.Modal--address')).forEach(function (modal) {
      _this.countrySelectors.push(new CountrySelector(modal.querySelector('[name="address[country]"]'), modal.querySelector('[name="address[province]"]')));
    });
  };

  var ArticleList = /*#__PURE__*/function () {
    function ArticleList(container) {
      var _this = this;

      _classCallCheck(this, ArticleList);

      this.element = container;

      if (window.theme.showElementStaggering) {
        this.timeline = new TimelineLite({
          delay: window.theme.showPageTransition ? 0.5 : 0
        });
        this.intersectionObserver = new IntersectionObserver(this._reveal.bind(this));
        Dom.nodeListToArray(this.element.querySelectorAll('.ArticleItem')).forEach(function (item) {
          _this.intersectionObserver.observe(item);
        });
      }
    }

    _createClass(ArticleList, [{
      key: "onUnload",
      value: function onUnload() {
        if (window.theme.showElementStaggering) {
          this.intersectionObserver.disconnect();
          this.timeline.kill();
        }
      }
    }, {
      key: "_reveal",
      value: function _reveal(results) {
        var _this2 = this;

        var toReveal = [];
        results.forEach(function (result) {
          if (result.isIntersecting || result.intersectionRatio > 0) {
            // isIntersecting does not exist on Samsung Android browser
            toReveal.push(result.target);

            _this2.intersectionObserver.unobserve(result.target);
          }
        });

        if (toReveal.length === 0) {
          return;
        }

        this.timeline.staggerFromTo(toReveal, 0.45, {
          autoAlpha: 0,
          y: 30
        }, {
          autoAlpha: 1,
          y: 0
        }, 0.2);
      }
    }]);

    return ArticleList;
  }();

  var ArticleSection = /*#__PURE__*/function () {
    function ArticleSection(container) {
      var _this = this;

      _classCallCheck(this, ArticleSection);

      this.element = container;
      this.toolbarElement = this.element.querySelector('.ArticleToolbar');
      this.articleNavElement = this.element.querySelector('.ArticleNav');
      var articleImageElement = this.element.querySelector('.Article__Image');

      if (articleImageElement && window.matchMedia('(-moz-touch-enabled: 0), (hover: hover)').matches) {
        this.parallaxInstance = new Rellax('.Article__Image', {
          speed: -7,
          center: false,
          round: true
        });
      }

      if (window.theme.showElementStaggering) {
        this.timeline = new TimelineLite({
          delay: window.theme.showPageTransition ? 0.5 : 0
        });
        this.intersectionObserver = new IntersectionObserver(this._reveal.bind(this));
        Dom.nodeListToArray(this.element.querySelectorAll('.ArticleItem')).forEach(function (item) {
          _this.intersectionObserver.observe(item);
        });
      }

      this._attachListeners();
    }

    _createClass(ArticleSection, [{
      key: "onUnload",
      value: function onUnload() {
        if (this.parallaxInstance) {
          this.parallaxInstance.destroy();
        }

        if (window.theme.showElementStaggering) {
          this.intersectionObserver.disconnect();
          this.timeline.kill();
        }

        window.removeEventListener('scroll', this._onScrollListener);
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._onScrollListener = this._checkToolbarVisibility.bind(this);
        window.addEventListener('scroll', this._onScrollListener);
      }
    }, {
      key: "_checkToolbarVisibility",
      value: function _checkToolbarVisibility() {
        var _this2 = this;

        var lastYPosition = 0,
            headerHeight = 0,
            navBottom = 0,
            isFixedHeader = 0,
            header = document.querySelector('.Header');
        fastdom.measure(function () {
          lastYPosition = window.pageYOffset;
          headerHeight = header.offsetHeight;
          isFixedHeader = parseInt(window.getComputedStyle(document.body).getPropertyValue('--use-sticky-header') || 0);

          if (_this2.articleNavElement) {
            navBottom = _this2.articleNavElement.offsetTop + _this2.articleNavElement.clientHeight - headerHeight;
          }
        });
        fastdom.mutate(function () {
          _this2.toolbarElement.style.top = isFixedHeader ? headerHeight + 'px' : null;

          if (_this2.articleNavElement) {
            if (lastYPosition > 150 && _this2.articleNavElement && lastYPosition < navBottom) {
              _this2.toolbarElement.classList.add('is-visible');
            } else {
              _this2.toolbarElement.classList.remove('is-visible');
            }
          } else {
            if (lastYPosition > 150) {
              _this2.toolbarElement.classList.add('is-visible');
            } else {
              _this2.toolbarElement.classList.remove('is-visible');
            }
          }
        });
      }
    }, {
      key: "_reveal",
      value: function _reveal(results) {
        var _this3 = this;

        var toReveal = [];
        results.forEach(function (result) {
          if (result.isIntersecting || result.intersectionRatio > 0) {
            // isIntersecting does not exist on Samsung Android browser
            toReveal.push(result.target);

            _this3.intersectionObserver.unobserve(result.target);
          }
        });

        if (toReveal.length === 0) {
          return;
        }

        this.timeline.staggerFromTo(toReveal, 0.45, {
          autoAlpha: 0,
          y: 30
        }, {
          autoAlpha: 1,
          y: 0
        }, 0.2);
      }
    }]);

    return ArticleSection;
  }();

  var CartSection = /*#__PURE__*/function () {
    function CartSection(container) {
      _classCallCheck(this, CartSection);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.documentDelegate = new domDelegate.Delegate(document.documentElement);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));
      this.itemCount = this.options['itemCount'];
      this.isCartNoteOpen = false;

      if (this.options['drawer']) {
        this.sidebarDrawer = new Drawer(this.element, {
          onClose: this._onDrawerClosed.bind(this)
        });
      }

      if (this.options['hasShippingEstimator']) {
        this.shippingEstimator = new ShippingEstimator(this.element.querySelector('.ShippingEstimator'));
      }

      this._attachListeners();
    }

    _createClass(CartSection, [{
      key: "onUnload",
      value: function onUnload() {
        if (this.options['hasShippingEstimator']) {
          this.shippingEstimator.destroy();
        }

        this.delegateElement.off();
        document.removeEventListener('product:added', this._onProductAddedListener);
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._onProductAddedListener = this._onProductAdded.bind(this);
        this.delegateElement.on('change', '#cart-note', this._updateCartNote.bind(this));

        if (this.options['type'] !== 'page') {
          this.delegateElement.on('click', '[data-action="update-item-quantity"], [data-action="remove-item"]', this._updateItemQuantity.bind(this));
          this.delegateElement.on('change', '.QuantitySelector__CurrentQuantity', this._updateItemQuantity.bind(this));
        } else {
          this.delegateElement.on('change', '.QuantitySelector__CurrentQuantity', this._reloadPageWithQuantity.bind(this));
        } // We have some listeners that are specific to the fact it's a drawer or the dedicated cart page


        if (this.options['drawer']) {
          this.delegateElement.on('click', '[data-action="toggle-cart-note"]', this._toggleCartNote.bind(this));
        }

        document.addEventListener('product:added', this._onProductAddedListener); // We attach a listener at page level which allows to re-render the cart

        this.documentDelegate.on('cart:refresh', this._rerenderCart.bind(this, false));
      }
    }, {
      key: "_updateCartNote",
      value: function _updateCartNote(event, target) {
        fetch("".concat(window.routes.cartUrl, "/update.js"), {
          body: JSON.stringify({
            note: target.value
          }),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header

          }
        });
      }
    }, {
      key: "_toggleCartNote",
      value: function _toggleCartNote() {
        var _this = this;

        var noteContainer = this.element.querySelector('.Cart__OffscreenNoteContainer'),
            cartNote = this.element.querySelector('#cart-note');
        this.element.classList.toggle('has-note-open');
        this.element.querySelector('.Cart__NoteButton').innerHTML = cartNote.value !== '' ? window.languages.cartEditNote : window.languages.cartAddNote;
        noteContainer.setAttribute('aria-hidden', noteContainer.getAttribute('aria-hidden') === 'true' ? 'false' : 'true');
        this.isCartNoteOpen = noteContainer.getAttribute('aria-hidden') === 'false';

        if (this.element.classList.contains('has-note-open')) {
          var transitionEndListener = function transitionEndListener() {
            _this.element.querySelector('#cart-note').focus();

            noteContainer.removeEventListener('transitionend', transitionEndListener);
          };

          noteContainer.addEventListener('transitionend', transitionEndListener);
        }
      }
    }, {
      key: "_updateItemQuantity",
      value: function _updateItemQuantity(event, target) {
        var _this2 = this;

        document.dispatchEvent(new CustomEvent('theme:loading:start'));
        var quantity = null,
            elementToAnimate = null;

        if (target.tagName === 'INPUT') {
          quantity = parseInt(Math.max(parseInt(target.value) || 1, 1));
        } else {
          quantity = parseInt(target.getAttribute('data-quantity'));
        } // If the quantity is 0, then we will animate the product with a removal effect


        if (quantity === 0) {
          elementToAnimate = target.closest('.CartItemWrapper');
        }

        fetch("".concat(window.routes.cartChangeUrl, ".js"), {
          body: JSON.stringify({
            line: target.getAttribute('data-line'),
            quantity: quantity
          }),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header

          }
        }).then(function (cart) {
          cart.json().then(function (content) {
            _this2.itemCount = content['item_count'];

            _this2._rerenderCart(elementToAnimate);

            document.dispatchEvent(new CustomEvent('theme:loading:end'));
          });
        });
        event.preventDefault();
      }
    }, {
      key: "_reloadPageWithQuantity",
      value: function _reloadPageWithQuantity(event, target) {
        window.location.href = "".concat(window.routes.cartChangeUrl, "?quantity=").concat(parseInt(target.value), "&line=").concat(target.getAttribute('data-line'));
      }
    }, {
      key: "_onProductAdded",
      value: function _onProductAdded(event) {
        var _this3 = this;

        this.itemCount += event.detail.quantity;

        this._rerenderCart().then(function () {
          _this3.sidebarDrawer.open();
        });
      }
    }, {
      key: "_onDrawerClosed",
      value: function _onDrawerClosed() {
        if (this.isCartNoteOpen) {
          this._toggleCartNote();
        }
      }
      /**
       * This method is called internally to rerender the cart, based on the content returned by Shopify Ajax API.
       * We could save some performance by updating directly in JavaScript instead of doing a GET call to get the HTML
       * from Shopify, but by experience, this allows for easier app integration as it allows the Liquid to re-run
       * all the time and hence having easier logic.
       */

    }, {
      key: "_rerenderCart",
      value: function _rerenderCart(elementToAnimate) {
        var _this4 = this;

        // Note: appending a timestamp is necessary as the polyfill on IE11 and lower does not support the "cache" property
        return fetch("".concat(window.routes.cartUrl, "?section_id=").concat(this.options['drawer'] && window.theme.pageType !== 'cart' ? 'mini-cart' : 'main-cart', "&timestamp=").concat(Date.now()), {
          credentials: 'same-origin',
          method: 'GET'
        }).then(function (content) {
          // If there is an element to animate, we animate it using a transition
          if (_this4.options['drawer'] && elementToAnimate) {
            var timelineLite = new TimelineLite({
              onComplete: function onComplete() {
                content.text().then(function (html) {
                  _this4._replaceContent(html);
                });
              }
            });
            timelineLite.to(elementToAnimate, 0.5, {
              height: 0,
              opacity: 0,
              ease: Cubic.easeOut
            }, 0);

            if (_this4.itemCount === 0) {
              timelineLite.to(_this4.element.querySelector('.Drawer__Footer'), 0.5, {
                y: '100%',
                transition: 'none',
                ease: Cubic.easeInOut
              }, 0);
            }
          } else {
            content.text().then(function (html) {
              _this4._replaceContent(html);
            });
          }
        });
      }
    }, {
      key: "_replaceContent",
      value: function _replaceContent(html) {
        var _this5 = this;

        var tempElement = document.createElement('div');
        tempElement.innerHTML = html;
        var cartNodeParent = this.element.querySelector('.Cart').parentNode;

        if (this.options['drawer'] && window.theme.pageType !== 'cart') {
          var currentScrollPosition = this.element.querySelector('.Drawer__Main').scrollTop;
          cartNodeParent.replaceChild(tempElement.querySelector('.Cart'), this.element.querySelector('.Cart'));
          this.element.querySelector('.Drawer__Main').scrollTop = currentScrollPosition;
        } else {
          // For dedicated page we replace the whole section if there is no more product
          if (this.itemCount === 0) {
            this.element.innerHTML = tempElement.querySelector('.shopify-section').firstElementChild.innerHTML;
          } else {
            cartNodeParent.replaceChild(tempElement.querySelector('.Cart'), this.element.querySelector('.Cart'));
            this.element.querySelector('.PageHeader').innerHTML = tempElement.querySelector('.PageHeader').innerHTML;
          }
        } // We can also update the dot and the quantity


        var cartResult = JSON.parse(tempElement.querySelector('[data-section-type="cart"]').getAttribute('data-section-settings'));
        var cartDot = Dom.nodeListToArray(document.querySelectorAll('.Header__CartDot')),
            cartQuantity = Dom.nodeListToArray(document.querySelectorAll('.Header__CartCount'));
        this.itemCount = cartResult['itemCount'];
        cartDot.forEach(function (item) {
          if (_this5.itemCount === 0) {
            item.classList.remove('is-visible'); // IE 11 and lower does not support second attribute of toggle :(
          } else {
            item.classList.add('is-visible');
          }
        });
        cartQuantity.forEach(function (item) {
          item.textContent = _this5.itemCount;
        });
      }
    }]);

    return CartSection;
  }();

  var CollectionListSection = /*#__PURE__*/function () {
    function CollectionListSection(container) {
      _classCallCheck(this, CollectionListSection);

      this.element = container;
      var collectionListElement = this.element.querySelector('[data-flickity-config]');

      if (collectionListElement) {
        this.carousel = new Carousel(collectionListElement);
      }
    }

    _createClass(CollectionListSection, [{
      key: "onUnload",
      value: function onUnload() {
        if (this.carousel) {
          this.carousel.destroy();
        }
      }
    }, {
      key: "onBlockSelect",
      value: function onBlockSelect(event) {
        if (this.carousel) {
          this.carousel.selectCell(event.target.getAttribute('data-slide-index'), true, !event.detail.load);
        }
      }
    }, {
      key: "onBlockDeselect",
      value: function onBlockDeselect() {
        if (this.carousel) {
          this.carousel.unpausePlayer();
        }
      }
    }]);

    return CollectionListSection;
  }();

  /**
   * This class allows to automatically scrolls within a div when this div does not fit into the visible space
   */
  var OverflowScroller = /*#__PURE__*/function () {
    function OverflowScroller(element) {
      _classCallCheck(this, OverflowScroller);

      if (!element) {
        return;
      }

      this.element = element;
      this.lastKnownY = window.scrollY;
      this.currentTop = 0;
      this.initialTopOffset = parseInt(window.getComputedStyle(this.element).top);

      this._attachListeners();
    }

    _createClass(OverflowScroller, [{
      key: "destroy",
      value: function destroy() {
        window.removeEventListener('scroll', this._checkPositionListener);
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._checkPositionListener = this._checkPosition.bind(this);
        window.addEventListener('scroll', this._checkPositionListener);
      }
    }, {
      key: "_checkPosition",
      value: function _checkPosition() {
        var _this = this;

        fastdom.measure(function () {
          var bounds = _this.element.getBoundingClientRect(),
              maxTop = bounds.top + window.scrollY - _this.element.offsetTop + _this.initialTopOffset,
              minTop = _this.element.clientHeight - window.innerHeight;

          if (window.scrollY < _this.lastKnownY) {
            _this.currentTop -= window.scrollY - _this.lastKnownY;
          } else {
            _this.currentTop += _this.lastKnownY - window.scrollY;
          }

          _this.currentTop = Math.min(Math.max(_this.currentTop, -minTop), maxTop, _this.initialTopOffset);
          _this.lastKnownY = window.scrollY;
        });
        fastdom.mutate(function () {
          _this.element.style.top = "".concat(_this.currentTop, "px");
        });
      }
    }]);

    return OverflowScroller;
  }();

  var CollectionSection = /*#__PURE__*/function () {
    function CollectionSection(element) {
      _classCallCheck(this, CollectionSection);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.toolbarElement = this.element.querySelector('.CollectionToolbar');
      this.collectionInnerElement = this.element.querySelector('.CollectionInner__Products');
      this.settings = JSON.parse(this.element.getAttribute('data-section-settings')); // Create the popover if available

      var sortPopoverElement = document.getElementById('collection-sort-popover');

      if (sortPopoverElement) {
        this.sortPopover = new Popover(sortPopoverElement, {
          onValueChanged: this._sortByChanged.bind(this)
        });
      } // Create the filter drawer if available


      var filterDrawerElement = document.getElementById('collection-filter-drawer');

      if (filterDrawerElement) {
        this.filterDrawer = new Drawer(filterDrawerElement);
      } // Create scroller of sidebar


      if (this.settings['filterPosition'] === 'sidebar') {
        this.filterInnerSidebarScroller = new OverflowScroller(this.element.querySelector('.CollectionInner__Sidebar'));
      } // Setup parallax on image (if any)


      var collectionImageElement = this.element.querySelector('.PageHeader__ImageWrapper');

      if (collectionImageElement && window.matchMedia('(-moz-touch-enabled: 0), (hover: hover)').matches) {
        this.parallaxInstance = new Rellax('.PageHeader__ImageWrapper', {
          speed: -7,
          center: false,
          round: true
        });
      } // Setup product item color swatch


      new ProductItemColorSwatch(this.element.querySelector('.ProductList')); // Setup animation

      this.timeline = new TimelineLite({
        delay: window.theme.showPageTransition ? 0.5 : 0
      });

      this._setupAnimation();

      this._attachListeners();
    }

    _createClass(CollectionSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.delegateElement.off('click');

        if (this.sortPopover) {
          this.sortPopover.destroy();
        }

        if (this.filterDrawer) {
          this.filterDrawer.destroy();
        }

        if (this.filterInnerSidebarScroller) {
          this.filterInnerSidebarScroller.destroy();
        }

        if (this.parallaxInstance) {
          this.parallaxInstance.destroy();
        }

        if (window.theme.showElementStaggering) {
          this.intersectionObserver.disconnect();
          this.timeline.kill();
        }
      }
    }, {
      key: "_setupAnimation",
      value: function _setupAnimation() {
        var _this = this;

        var forceLoadFromTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!window.theme.showElementStaggering) {
          return;
        } // If there is already an observer set up, we remove it first


        if (this.intersectionObserver) {
          this.intersectionObserver.disconnect();
        }

        if (forceLoadFromTop) {
          this.timeline.clear();
          this.timeline.staggerFromTo(this.element.querySelectorAll('.ProductList .ProductItem, .ArticleList .ArticleItem'), 0.25, {
            autoAlpha: 0,
            y: 25
          }, {
            autoAlpha: 1,
            y: 0
          }, 0.1);
        } else {
          this.intersectionObserver = new IntersectionObserver(this._reveal.bind(this), {
            threshold: 0.3
          });
          Dom.nodeListToArray(this.element.querySelectorAll('.ProductList .ProductItem, .ArticleList .ArticleItem')).forEach(function (item) {
            _this.intersectionObserver.observe(item);
          });
        }
      }
    }, {
      key: "_reveal",
      value: function _reveal(results) {
        var _this2 = this;

        var toReveal = [];
        results.forEach(function (result) {
          if (result.isIntersecting || result.intersectionRatio > 0) {
            // isIntersecting does not exist on Samsung Android browser
            toReveal.push(result.target);

            _this2.intersectionObserver.unobserve(result.target);
          }
        });

        if (toReveal.length === 0) {
          return;
        }

        this.timeline.staggerFromTo(toReveal, 0.35, {
          autoAlpha: 0,
          y: 25
        }, {
          autoAlpha: 1,
          y: 0
        }, 0.15);
      }
    }, {
      key: "_changeLayoutMode",
      value: function _changeLayoutMode(event, target) {
        var _this3 = this;

        var layoutType = target.getAttribute('data-grid-type'),
            newCount = parseInt(target.getAttribute('data-count')); // Otherwise we detect the mode, and change all classes

        var productList = this.collectionInnerElement.querySelector('.ProductList');

        if (productList) {
          var previousCount = parseInt(productList.getAttribute("data-".concat(layoutType, "-count")));

          if (previousCount === newCount) {
            return; // Nothing has changed so we just return to avoid reflow
          }

          productList.setAttribute("data-".concat(layoutType, "-count"), newCount);
          Dom.nodeListToArray(productList.querySelectorAll('.Grid__Cell')).forEach(function (item) {
            if (layoutType === 'mobile') {
              item.classList.remove("1/".concat(previousCount, "--phone")); // IE11 and lower does not support classList.replace

              item.classList.add("1/".concat(newCount, "--phone"));
            } else {
              var previousTabletCount = previousCount === 2 ? 2 : 3,
                  newTabletCount = newCount === 2 ? 2 : 3;

              if (_this3.settings['filterPosition'] === 'drawer') {
                item.classList.remove("1/".concat(previousCount, "--lap-and-up"));
                item.classList.add("1/".concat(newCount, "--lap-and-up"));
              } else {
                item.classList.remove("1/".concat(previousCount, "--desk"));
                item.classList.add("1/".concat(newCount, "--desk"));
              }

              item.classList.remove("1/".concat(previousTabletCount, "--tablet-and-up"));
              item.classList.add("1/".concat(newTabletCount, "--tablet-and-up"));
            }

            if (window.theme.showElementStaggering) {
              item.firstElementChild.style.visibility = 'hidden'; // Make it as hidden so we can re-trigger the animation
            }
          }); // Force lazy sizes to recalculate item sizes

          lazySizes.autoSizer.checkElems();
        }

        target.classList.add('is-active');
        Dom.getSiblings(target)[0].classList.remove('is-active');

        this._setupAnimation(); // In order to prevent reflow and provide better user experience, we save into cart attributes (those are removed before the checkout
        // is submitted) the user choices so they are preserved on page reload, without the need to use JavaScript


        fetch("".concat(window.routes.cartUrl, "/update.js"), {
          body: JSON.stringify({
            attributes: _defineProperty({}, "collection_".concat(layoutType, "_items_per_row"), newCount)
          }),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header

          }
        });
      }
    }, {
      key: "_sortByChanged",
      value: function _sortByChanged(sortBy) {
        var currentUrl = new URL(location.href);
        currentUrl.searchParams.set('sort_by', sortBy);
        currentUrl.searchParams.delete('page');

        this._reloadProducts(currentUrl.toString());
      }
    }, {
      key: "_onFiltersCleared",
      value: function _onFiltersCleared(event) {
        this._reloadProducts(event.target.getAttribute('data-url'));
      }
    }, {
      key: "_onFilterChanged",
      value: function _onFilterChanged(event) {
        var formData = new FormData(event.target.closest('form'));
        var searchParamsAsString = new URLSearchParams(formData).toString();

        this._reloadProducts("".concat(window.location.pathname, "?").concat(searchParamsAsString));
      }
    }, {
      key: "_reloadProducts",
      value: function _reloadProducts(url) {
        var _this4 = this;

        if (this.abortController) {
          this.abortController.abort();
        }

        document.dispatchEvent(new CustomEvent('theme:loading:start'));

        if (history.replaceState) {
          window.history.pushState({
            path: url
          }, '', url);
        }

        var currentUrl = new URL(window.location);
        currentUrl.searchParams.set('section_id', this.settings['sectionId']);

        try {
          this.abortController = new AbortController();
          fetch(currentUrl.toString(), {
            signal: this.abortController.signal
          }).then(function (response) {
            response.text().then(function (content) {
              var tempElement = document.createElement('div');
              tempElement.innerHTML = content;
              _this4.collectionInnerElement.innerHTML = tempElement.querySelector('.CollectionInner__Products').innerHTML;
              var toolbarFilter = tempElement.querySelector('.CollectionToolbar__Item--filter');

              if (toolbarFilter) {
                var newToolbarFilter = _this4.element.querySelector('.CollectionToolbar__Item--filter');

                newToolbarFilter.innerHTML = toolbarFilter.innerHTML;
                newToolbarFilter.className = toolbarFilter.className;
              } // We also replace the filters


              var collectionFiltersDrawer = _this4.element.querySelector('#collection-filters-drawer-form'),
                  collectionFiltersSidebar = _this4.element.querySelector('#collection-filters-sidebar-form');

              if (collectionFiltersDrawer) {
                var newDrawerContent = tempElement.querySelector('#collection-filters-drawer-form');
                Array.from(collectionFiltersDrawer.querySelectorAll('.Collapsible')).forEach(function (collapsible) {
                  var newCollapsible = newDrawerContent.querySelector("[data-filter-index=\"".concat(collapsible.getAttribute('data-filter-index'), "\"]"));

                  if (collapsible.firstElementChild.getAttribute('aria-expanded') === 'true') {
                    newCollapsible.style.overflow = 'visible';
                    newCollapsible.firstElementChild.setAttribute('aria-expanded', 'true');
                    newCollapsible.lastElementChild.style.height = 'auto';
                    newCollapsible.lastElementChild.style.overflow = 'visible';
                  }
                });
                collectionFiltersDrawer.innerHTML = newDrawerContent.innerHTML;
                new ProductItemColorSwatch(_this4.element.querySelector('.ProductList'));
              }

              if (collectionFiltersSidebar) {
                var newSidebarContent = tempElement.querySelector('#collection-filters-sidebar-form');
                Array.from(collectionFiltersSidebar.querySelectorAll('.Collapsible')).forEach(function (collapsible) {
                  var newCollapsible = newSidebarContent.querySelector("[data-filter-index=\"".concat(collapsible.getAttribute('data-filter-index'), "\"]"));

                  if (collapsible.firstElementChild.getAttribute('aria-expanded') === 'true') {
                    newCollapsible.style.overflow = 'visible';
                    newCollapsible.firstElementChild.setAttribute('aria-expanded', 'true');
                    newCollapsible.lastElementChild.style.height = 'auto';
                    newCollapsible.lastElementChild.style.overflow = 'visible';
                  }
                });
                collectionFiltersSidebar.innerHTML = newSidebarContent.innerHTML;
              }

              document.dispatchEvent(new CustomEvent('theme:loading:end'));

              _this4._setupAnimation(true); // We scroll to the top


              var elementOffset = _this4.element.querySelector('.CollectionMain').getBoundingClientRect().top - parseInt(document.documentElement.style.getPropertyValue('--header-height'));

              if (Responsive.matchesBreakpoint('lap-and-up') && _this4.toolbarElement && _this4.toolbarElement.clientHeight === 0) {
                elementOffset -= 50;
              }

              if (elementOffset < 0) {
                window.scrollBy({
                  top: elementOffset,
                  behavior: 'smooth'
                });
              }
            });
          });
        } catch (exception) {}
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._changeLayoutModeListener = this._changeLayoutMode.bind(this);
        this.delegateElement.on('click', '[data-action="change-layout-mode"]', this._changeLayoutModeListener);
        this.delegateElement.on('click', '[data-action="clear-filters"]', this._onFiltersCleared.bind(this));
        this.delegateElement.on('change', '[name^="filter."]', this._onFilterChanged.bind(this));
        window.addEventListener('popstate', function (event) {
          if (event.state.path) {
            window.location.href = event.state.path;
          }
        });
      }
    }]);

    return CollectionSection;
  }();

  var FaqSection = /*#__PURE__*/function () {
    function FaqSection(element) {
      _classCallCheck(this, FaqSection);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);

      this._attachListeners();
    }

    _createClass(FaqSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.delegateElement.off();
      }
    }, {
      key: "onBlockSelect",
      value: function onBlockSelect(event) {
        this._openItem(event.target);
      }
    }, {
      key: "onBlockDeselect",
      value: function onBlockDeselect(event) {
        this._closeItem(event.target);
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '.Faq__Question', this._toggleItem.bind(this));
        this.delegateElement.on('click', '.FaqSummary__Item', this._switchToCategory.bind(this));
      }
    }, {
      key: "_switchToCategory",
      value: function _switchToCategory(event, target) {
        target.classList.add('is-active');
        Dom.getSiblings(target, '.is-active').forEach(function (item) {
          item.classList.remove('is-active');
        });
      }
    }, {
      key: "_toggleItem",
      value: function _toggleItem(event, target) {
        var item = target.closest('.Faq__Item');

        if (item.getAttribute('aria-expanded') === 'true') {
          this._closeItem(item);
        } else {
          this._openItem(item);
        }
      }
    }, {
      key: "_openItem",
      value: function _openItem(item) {
        var answerWrapper = item.querySelector('.Faq__AnswerWrapper');
        item.setAttribute('aria-expanded', 'true');
        answerWrapper.setAttribute('aria-hidden', 'false');
        Animation.slideDown(answerWrapper, true);
        Dom.getSiblings(item, '[aria-expanded="true"]').forEach(function (siblingItem) {
          var siblingAnswerWrapper = siblingItem.querySelector('.Faq__AnswerWrapper');
          siblingItem.setAttribute('aria-expanded', 'false');
          siblingAnswerWrapper.setAttribute('aria-hidden', 'true');
          Animation.slideUp(siblingAnswerWrapper);
        });
      }
    }, {
      key: "_closeItem",
      value: function _closeItem(item) {
        var answerWrapper = item.querySelector('.Faq__AnswerWrapper');
        item.setAttribute('aria-expanded', 'false');
        answerWrapper.setAttribute('aria-hidden', 'true');
        Animation.slideUp(answerWrapper);
      }
    }]);

    return FaqSection;
  }();

  var FeaturedCollectionsSection = /*#__PURE__*/function () {
    function FeaturedCollectionsSection(container) {
      var _this = this;

      _classCallCheck(this, FeaturedCollectionsSection);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-settings'));
      this.carousels = [];
      Dom.nodeListToArray(this.element.querySelectorAll('[data-flickity-config]')).forEach(function (item) {
        _this.carousels.push(new Carousel(item));
      }); // Setup product item color swatch

      new ProductItemColorSwatch(this.element);

      this._setupAnimation();

      this._attachListeners();
    }

    _createClass(FeaturedCollectionsSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.carousels.forEach(function (item) {
          return item.destroy();
        });
        this.delegateElement.off('click');
        this.intersectionObserver.disconnect();
        this.timeline.kill();
      }
    }, {
      key: "onBlockSelect",
      value: function onBlockSelect(event) {
        // We simply trigger a click on the element that controls this tab
        this.element.querySelector("[aria-controls=\"".concat(event.target.id, "\"]")).click();
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '[data-action="toggle-tab"]', this._switchTab.bind(this));
      }
    }, {
      key: "_switchTab",
      value: function _switchTab(event, target) {
        var _this2 = this;

        // If the tab is already active, do nothing
        if (target.classList.contains('is-active')) {
          return;
        } // First, switch the current tab


        target.classList.add('is-active');
        Dom.getSiblings(target, '.is-active').forEach(function (item) {
          item.classList.remove('is-active');
        }); // Then, display the panel

        var tabPanelToShow = this.element.querySelector("#".concat(target.getAttribute('aria-controls')));
        this.timeline.eventCallback('onReverseComplete', function () {
          tabPanelToShow.setAttribute('aria-hidden', 'false');
          Dom.getSiblings(tabPanelToShow, '.TabPanel[aria-hidden="false"]').forEach(function (item) {
            item.setAttribute('aria-hidden', 'true');
          });

          if (Responsive.matchesBreakpoint('lap-and-up')) {
            _this2.carousels.forEach(function (carousel) {
              // There is a bug in Safari where it cannot detect the pseudo-element "::after" if the tab panel is hidden. As a consequence,
              // we manually activate it
              carousel.flickityInstance.activate();
              carousel.flickityInstance.resize(); // Ugly hack
            });
          }

          _this2.timeline.clear();

          _this2._setupAnimation();
        });

        if (this.options['layout'] === 'grid' && window.theme.showElementStaggering) {
          this.timeline.reverse().timeScale(3);
        } else {
          this.timeline.reverse();
        }
      }
    }, {
      key: "_setupAnimation",
      value: function _setupAnimation() {
        var _this3 = this;

        if (this.intersectionObserver) {
          this.intersectionObserver.disconnect();
        }

        this.timeline = new TimelineLite({
          delay: 0.5
        });

        if (this.options['layout'] === 'grid' && window.theme.showElementStaggering) {
          this.intersectionObserver = new IntersectionObserver(this._reveal.bind(this));
          Dom.nodeListToArray(this.element.querySelectorAll('.TabPanel[aria-hidden="false"] .ProductList .ProductItem')).forEach(function (item) {
            _this3.intersectionObserver.observe(item);
          });
        } else {
          var productList = this.element.querySelector('.TabPanel[aria-hidden="false"] .ProductList');

          if (productList) {
            this.timeline.fromTo(productList, 0.6, {
              autoAlpha: 0,
              y: 25
            }, {
              autoAlpha: 1,
              y: 0
            });
          }
        }
      }
    }, {
      key: "_reveal",
      value: function _reveal(results) {
        var _this4 = this;

        var toReveal = [];
        results.forEach(function (result) {
          if (result.isIntersecting || result.intersectionRatio > 0) {
            // isIntersecting does not exist on Samsung Android browser
            toReveal.push(result.target);

            _this4.intersectionObserver.unobserve(result.target);
          }
        });

        if (toReveal.length === 0) {
          return;
        }

        this.timeline.staggerFromTo(toReveal, 0.45, {
          autoAlpha: 0,
          y: 25
        }, {
          autoAlpha: 1,
          y: 0
        }, 0.2);
      }
    }]);

    return FeaturedCollectionsSection;
  }();

  var FeaturedProductSection = /*#__PURE__*/function () {
    function FeaturedProductSection(container) {
      _classCallCheck(this, FeaturedProductSection);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));

      if (!this.options['usePlaceholder']) {
        this.productVariants = new ProductVariants(container, this.options);
      } // We have to re-order elements in the DOM


      var offscreenElement = this.element.querySelector('.Product__OffScreen');

      if (offscreenElement) {
        this.element.appendChild(offscreenElement);
      }

      this._attachListeners();
    }

    _createClass(FeaturedProductSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.delegateElement.off('click');

        if (this.productVariants) {
          this.productVariants.destroy();
        }
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('variant:changed', this._updateMainImage.bind(this));
      }
      /**
       * Update the main featured image
       */

    }, {
      key: "_updateMainImage",
      value: function _updateMainImage(event) {
        var variant = event.detail.variant,
            previousVariant = event.detail.previousVariant;

        if (!variant || !variant['featured_image'] || previousVariant['featured_image'] && previousVariant['featured_image']['id'] === variant['featured_image']['id']) {
          return;
        } // Otherwise we are on the home page. It's a bit more complex as we have to rewrite some code normally written in Liquid


        var newImage = variant['featured_image'];
        var mainImageContainer = this.element.querySelector('.FeaturedProduct__Gallery .AspectRatio');
        mainImageContainer.style.cssText = "max-width: ".concat(newImage['width'], "px; --aspect-ratio: ").concat(newImage['width'] / newImage['height']);
        var newImageElement = document.createElement('img');
        newImageElement.classList.add('Image--lazyLoad');
        newImageElement.setAttribute('data-src', Image.getSizedImageUrl(newImage['src'], '1x1').replace('_1x1.', '_{width}x.'));
        newImageElement.setAttribute('data-widths', "[".concat(Image.getSupportedSizes(newImage, [200, 400, 600, 700, 800, 900, 1000]).join(','), "]"));
        newImageElement.setAttribute('data-sizes', 'auto');
        mainImageContainer.replaceChild(newImageElement, mainImageContainer.querySelector('img'));
      }
    }]);

    return FeaturedProductSection;
  }();

  var BackgroundVideoSection = /*#__PURE__*/function () {
    function BackgroundVideoSection(container) {
      _classCallCheck(this, BackgroundVideoSection);

      this.element = container;
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));

      this._loadScript().then(this._setupPlayer.bind(this));
    }

    _createClass(BackgroundVideoSection, [{
      key: "_loadScript",
      value: function _loadScript() {
        var _this = this;

        return new Promise(function (resolve, reject) {
          var script = document.createElement('script');
          document.body.appendChild(script);
          script.onload = resolve;
          script.onerror = reject;
          script.async = true;
          script.src = _this.options['videoType'] === 'youtube' ? '//www.youtube.com/iframe_api' : '//player.vimeo.com/api/player.js';
        });
      }
    }, {
      key: "onUnload",
      value: function onUnload() {
        if (this.player) {
          this.player.destroy(); // Both YouTube and Vimeo use the same function name
        }
      }
    }, {
      key: "_setupPlayer",
      value: function _setupPlayer() {
        var _this2 = this;

        var elementToInsert = this.element.querySelector('.ImageHero__VideoHolder');
        var playerLoadingInterval = setInterval(function () {
          if (_this2.options['videoType'] === 'youtube') {
            if (window.YT) {
              _this2.player = new YT.Player(elementToInsert, {
                videoId: _this2.options['videoId'],
                playerVars: {
                  showinfo: 0,
                  controls: 0,
                  fs: 0,
                  rel: 0,
                  height: '100%',
                  width: '100%',
                  iv_load_policy: 3,
                  html5: 1,
                  loop: 1,
                  playsinline: 1,
                  modestbranding: 1,
                  disablekb: 1,
                  origin: _this2.options['requestHost']
                },
                events: {
                  onReady: _this2._onYouTubeReady.bind(_this2),
                  onStateChange: _this2._onYouTubeStateChange.bind(_this2)
                }
              });
              clearInterval(playerLoadingInterval);
            }
          } else {
            if (window.Vimeo) {
              _this2.player = new Vimeo.Player(elementToInsert.parentNode, {
                id: _this2.options['videoId'],
                autoplay: true,
                autopause: false,
                muted: true,
                background: true,

                /*height: '100%',
                width: '100%',*/
                loop: true
              });
              clearInterval(playerLoadingInterval);
            }
          }
        }, 50);
      }
    }, {
      key: "_onYouTubeReady",
      value: function _onYouTubeReady(event) {
        this.player.mute();
        this.player.playVideo();
      }
    }, {
      key: "_onYouTubeStateChange",
      value: function _onYouTubeStateChange(event) {
        if (event.data === YT.PlayerState.ENDED) {
          this.player.playVideo();
        }
      }
    }]);

    return BackgroundVideoSection;
  }();

  var GiftCardSection = /*#__PURE__*/function () {
    function GiftCardSection(container) {
      _classCallCheck(this, GiftCardSection);

      this.element = container;

      this._createQrCode();

      this._setupPrint();
    }

    _createClass(GiftCardSection, [{
      key: "_createQrCode",
      value: function _createQrCode() {
        var qrCodeElement = document.getElementById('QrCode');
        new QRCode(qrCodeElement, {
          text: qrCodeElement.getAttribute('data-identifier'),
          width: 120,
          height: 120
        });
      }
    }, {
      key: "_setupPrint",
      value: function _setupPrint() {
        var printElement = document.getElementById('PrintGiftCard');

        if (printElement) {
          printElement.addEventListener('click', function () {
            window.print();
          });
        }
      }
    }]);

    return GiftCardSection;
  }();

  var HeaderSection = /*#__PURE__*/function () {
    function HeaderSection(container) {
      var _this = this;

      _classCallCheck(this, HeaderSection);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));
      this.lastScrollPosition = -1;
      this.isTouch = window.matchMedia('(-moz-touch-enabled: 1), (hover: none)').matches;

      if (this.options['isSticky']) {
        Stickyfill.addOne(this.element.parentNode);
      } // Set up the search bar


      this.searchBar = new SearchBar();

      this._attachListeners();

      this._verifyNavigationOverlap(); // We set again some CSS variables that are used for some calculations in CSS


      var mainLogo = this.element.querySelector('.Header__LogoImage--primary');

      if (mainLogo && !mainLogo.complete) {
        mainLogo.addEventListener('load', function () {
          fastdom.measure(function () {
            document.documentElement.style.setProperty('--header-height', _this.element.clientHeight + 'px');
            document.documentElement.style.setProperty('--header-is-not-transparent', _this.options['hasTransparentHeader'] ? 0 : 1);
          });
        });
      } else {
        fastdom.measure(function () {
          document.documentElement.style.setProperty('--header-height', _this.element.clientHeight + 'px');
          document.documentElement.style.setProperty('--header-is-not-transparent', _this.options['hasTransparentHeader'] ? 0 : 1);
        });
      }

      window.addEventListener('pageshow', this._checkTransparentHeader.bind(this));

      this._setupLocalizationPopovers();
    }

    _createClass(HeaderSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.element.removeEventListener('mouseleave', this._closeNavigationListener);
        this.element.removeEventListener('mouseenter', this._focusNavigationListener);
        this.element.removeEventListener('focusin', this._focusNavigationListener);
        this.delegateElement.off();
        window.removeEventListener('scroll', this._checkTransparentHeaderListener);
        window.removeEventListener('resize', this._verifyNavigationOverlapListener);

        if (this.options['isSticky']) {
          Stickyfill.removeOne(this.element.parentNode);
        }

        this.searchBar.destroy();
        this.localizationPopovers.forEach(function (localizationPopover) {
          localizationPopover.destroy();
        });
      }
    }, {
      key: "onSelect",
      value: function onSelect() {
        this._checkTransparentHeader();
      }
    }, {
      key: "onBlockSelect",
      value: function onBlockSelect(event) {
        var _this2 = this;

        var listItem = event.target.closest('.HorizontalList__Item');
        fastdom.mutate(function () {
          event.target.setAttribute('aria-hidden', 'false');

          if (listItem) {
            listItem.classList.add('is-expanded');
            Dom.getSiblings(listItem, '.is-expanded').forEach(function (item) {
              item.classList.remove('is-expanded');
            });
          }

          _this2.element.classList.remove('Header--transparent'); // This is needed to make sure everything is visible

        });
      }
    }, {
      key: "onBlockDeselect",
      value: function onBlockDeselect(event) {
        var listItem = event.target.closest('.HorizontalList__Item');
        fastdom.mutate(function () {
          event.target.setAttribute('aria-hidden', 'true');

          if (listItem) {
            listItem.classList.remove('is-expanded');
          }
        });

        this._checkTransparentHeader();
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._checkTransparentHeaderListener = this._checkTransparentHeader.bind(this);
        this._closeNavigationListener = this._closeNavigation.bind(this);
        this._focusNavigationListener = this._focusNavigation.bind(this);
        this._verifyNavigationOverlapListener = this._verifyNavigationOverlap.bind(this);
        this.element.addEventListener('mouseleave', this._closeNavigationListener);
        this.delegateElement.on('mouseenter', '.Header__MainNav .HorizontalList__Item, [aria-haspopup]', this._openMenu.bind(this), true);
        this.delegateElement.on('focusin', '[aria-haspopup]', this._openMenu.bind(this), true);
        this.delegateElement.on('focusout', '[aria-haspopup]', this._closeMenu.bind(this), false);
        this.delegateElement.on('click', '[data-action="toggle-search"]', this._closeNavigationListener);
        this.delegateElement.on('mouseleave', '.DropdownMenu [aria-haspopup]', this._closeMenu.bind(this), true);
        this.delegateElement.on('mouseenter', '.DropdownMenu [aria-haspopup]', this._adjustDropdownPosition.bind(this), true);

        if (this.isTouch) {
          this.delegateElement.on('click', '.Header__MainNav [aria-haspopup]', this._handleTouchMenu.bind(this));
        }

        if (this.options['hasTransparentHeader']) {
          this.element.addEventListener('mouseenter', this._focusNavigationListener);
          this.element.addEventListener('focusin', this._focusNavigationListener);
        }

        if (this.options['isSticky'] && this.options['hasTransparentHeader']) {
          window.addEventListener('scroll', this._checkTransparentHeaderListener);
        }

        if (this.options['navigationStyle'] === 'inline' || this.options['navigationStyle'] === 'logoLeft') {
          window.addEventListener('resize', this._verifyNavigationOverlapListener);
        }
      }
    }, {
      key: "_setupLocalizationPopovers",
      value: function _setupLocalizationPopovers() {
        // Prestige is an extremely complex theme, especially in the header due to the various layouts that power different
        // features. One issue that arises with this is that we output the localization elements twice in the DOM (with the
        // same ID as we're doing a capture in Liquid), and then depending on the screen size one layout is choosen. We therefore
        // have to de-duplicate the ID here. This is honestly not the cleanest code on earth, but I prefer handling this here
        // rather than duplicating too much Liquid
        this.localizationPopovers = [];
        Dom.nodeListToArray(document.querySelectorAll('#header-locale-popover')).forEach(function (item, index) {
          item.id = "".concat(item.id, "-").concat(index);
        });
        Dom.nodeListToArray(document.querySelectorAll('[aria-controls="header-locale-popover"]')).forEach(function (item, index) {
          item.setAttribute('aria-controls', "".concat(item.getAttribute('aria-controls'), "-").concat(index));
        });
        Dom.nodeListToArray(document.querySelectorAll('#header-currency-popover')).forEach(function (item, index) {
          item.id = "".concat(item.id, "-").concat(index);
        });
        Dom.nodeListToArray(document.querySelectorAll('[aria-controls="header-currency-popover"]')).forEach(function (item, index) {
          item.setAttribute('aria-controls', "".concat(item.getAttribute('aria-controls'), "-").concat(index));
        });
        var localePopoverElement1 = document.getElementById('header-locale-popover-0');

        if (localePopoverElement1) {
          this.localizationPopovers.push(new Popover(localePopoverElement1, {
            preferredAlignment: 'center',
            preferredPosition: 'bottom',
            threshold: 12
          }));
        }

        var localePopoverElement2 = document.getElementById('header-locale-popover-1');

        if (localePopoverElement2) {
          this.localizationPopovers.push(new Popover(localePopoverElement2, {
            preferredAlignment: 'center',
            preferredPosition: 'bottom',
            threshold: 12
          }));
        }

        var currencyPopoverElement1 = document.getElementById('header-currency-popover-0');

        if (currencyPopoverElement1) {
          this.localizationPopovers.push(new Popover(currencyPopoverElement1, {
            preferredAlignment: 'center',
            preferredPosition: 'bottom',
            threshold: 12
          }));
        }

        var currencyPopoverElement2 = document.getElementById('header-currency-popover-1');

        if (currencyPopoverElement2) {
          this.localizationPopovers.push(new Popover(currencyPopoverElement2, {
            preferredAlignment: 'center',
            preferredPosition: 'bottom',
            threshold: 12
          }));
        }
      }
    }, {
      key: "_focusNavigation",
      value: function _focusNavigation() {
        var _this3 = this;

        fastdom.mutate(function () {
          if (!_this3.isTouch || Responsive.matchesBreakpoint('desk')) {
            _this3.element.classList.remove('Header--transparent');
          }
        });
      }
    }, {
      key: "_closeNavigation",
      value: function _closeNavigation() {
        var _this4 = this;

        fastdom.mutate(function () {
          Dom.nodeListToArray(_this4.element.querySelectorAll('.is-expanded')).forEach(function (item) {
            item.classList.remove('is-expanded');
          });
          Dom.nodeListToArray(_this4.element.querySelectorAll('.Header__MainNav [aria-hidden="false"]')).forEach(function (item) {
            item.setAttribute('aria-hidden', 'true');
          });
        });

        if (this.options['hasTransparentHeader']) {
          this._checkTransparentHeader();
        }
      }
    }, {
      key: "_openMenu",
      value: function _openMenu(event, target) {
        if (event.type === 'mouseenter' && target !== event.target) {
          return;
        }

        fastdom.mutate(function () {
          target.classList.add('is-expanded');
          Dom.nodeListToArray(target.children, '.Header__MainNav [aria-hidden="true"]').forEach(function (item) {
            item.setAttribute('aria-hidden', 'false');
          });
          Dom.getSiblings(target, '.is-expanded').forEach(function (item) {
            item.classList.remove('is-expanded');
            Dom.nodeListToArray(item.children, '.Header__MainNav [aria-hidden="false"]').forEach(function (item) {
              item.setAttribute('aria-hidden', 'true');
            });
          });
        });
      }
    }, {
      key: "_closeMenu",
      value: function _closeMenu(event, target) {
        if (event.type === 'mouseleave' && target !== event.target) {
          return;
        }

        fastdom.mutate(function () {
          target.classList.remove('is-expanded');
          Dom.nodeListToArray(target.children, '.Header__MainNav [aria-hidden="false"]').forEach(function (item) {
            item.setAttribute('aria-hidden', 'true');
          });
        });
      }
    }, {
      key: "_adjustDropdownPosition",
      value: function _adjustDropdownPosition(event, target) {
        var nestedMenus = Dom.nodeListToArray(target.querySelectorAll('.DropdownMenu')),
            shouldOpenLeft = false;
        fastdom.measure(function () {
          var windowWidth = window.innerWidth,
              rightEdge = target.getBoundingClientRect().right;
          nestedMenus.forEach(function (item) {
            if (rightEdge + item.offsetWidth > windowWidth) {
              shouldOpenLeft = true;
            }
          });
        });
        fastdom.mutate(function () {
          if (shouldOpenLeft) {
            nestedMenus.forEach(function (item) {
              item.classList.add('DropdownMenu--reversed');
            });
          } else {
            nestedMenus.forEach(function (item) {
              item.classList.remove('DropdownMenu--reversed');
            });
          }
        });
      }
      /**
       * On touch devices where we display the standard menu (like landscape iPad or Surface) we need to do additional code to properly
       * handle the opening of menu. Especially, what we do is that if an item has a sub-menu, a click does not follow the link but instead open
       * the sub-menu. If this link is clicked a second twice, then the menu is followed
       */

    }, {
      key: "_handleTouchMenu",
      value: function _handleTouchMenu(event, target) {
        if (!target.classList.contains('is-expanded')) {
          event.preventDefault();
        }
      }
    }, {
      key: "_verifyNavigationOverlap",
      value: function _verifyNavigationOverlap() {
        var _this5 = this;

        var isOverlapping = false,
            mainTopMenu = this.element.querySelector('.Header__MainNav');
        fastdom.measure(function () {
          // To detect if the navigation is overlapping, we take the height of a single item and check if its height is taller than the parent
          if (mainTopMenu) {
            // Get the first element
            var firstNavElementHeight = Dom.outerHeightWithMargin(mainTopMenu.querySelector('.HorizontalList__Item')),
                mainNavHeight = mainTopMenu.scrollHeight;

            if (mainNavHeight > firstNavElementHeight) {
              isOverlapping = true;
            }
          }
        });
        this.element.classList.remove('Header--logoLeft', 'Header--inline', 'Header--center');
        this.element.classList.add("Header--".concat(this.options['navigationStyle']));
        this.element.clientWidth; // Forces a reflow

        fastdom.mutate(function () {
          if (isOverlapping) {
            _this5.element.classList.remove("Header--".concat(_this5.options['navigationStyle']));

            _this5.element.classList.add('Header--center'); // Check if still overlapping despite changing the mode


            if (mainTopMenu) {
              // Get the first element
              var itemTopSet = new Set();
              Array.from(mainTopMenu.querySelectorAll('.HorizontalList__Item')).forEach(function (item) {
                itemTopSet.add(item.getBoundingClientRect().top);
              });
              isOverlapping = itemTopSet.size > 1;
            }
          } else {
            _this5.element.classList.add("Header--".concat(_this5.options['navigationStyle']));

            _this5.element.classList.remove('Header--center');
          }

          var logo = _this5.element.querySelector('.Header__FlexItem--logo');

          logo.classList.toggle('Header__FlexItem--increaseSpace', isOverlapping);

          _this5.element.classList.add('Header--initialized');

          fastdom.measure(function () {
            document.documentElement.style.setProperty('--header-height', _this5.element.clientHeight + 'px');
          });
        });
      }
      /**
       * If the header mode is set to "transparent", we have to do extra work to automatically make it with fill colors when the
       * user starts scrolling. For performance we are using fastDOM to do that (which relies of requestAnimationFrame instead of
       * scroll listener)
       */

    }, {
      key: "_checkTransparentHeader",
      value: function _checkTransparentHeader() {
        var _this6 = this;

        if (!this.options['hasTransparentHeader']) {
          return;
        }

        var scrollThreshold = 10;
        fastdom.measure(function () {
          _this6.lastScrollPosition = window.pageYOffset;
        });
        fastdom.mutate(function () {
          if (_this6.lastScrollPosition <= scrollThreshold) {
            _this6.element.classList.add('Header--transparent');
          } else {
            _this6.element.classList.remove('Header--transparent');
          }
        });
      }
    }]);

    return HeaderSection;
  }();

  var FooterSection = /*#__PURE__*/function () {
    function FooterSection(container) {
      _classCallCheck(this, FooterSection);

      this.element = container;
      var localePopoverElement = document.getElementById('footer-locale-popover');

      if (localePopoverElement) {
        this.localePopover = new Popover(localePopoverElement, {
          preferredAlignment: 'center',
          preferredPosition: 'top',
          threshold: 12
        });
      }

      var currencyPopoverElement = document.getElementById('footer-currency-popover');

      if (currencyPopoverElement) {
        this.currencyPopover = new Popover(currencyPopoverElement, {
          preferredAlignment: 'center',
          preferredPosition: 'top',
          threshold: 12
        });
      }
    }

    _createClass(FooterSection, [{
      key: "onUnload",
      value: function onUnload() {
        if (this.localePopover) {
          this.localePopover.destroy();
        }

        if (this.currencyPopover) {
          this.currencyPopover.destroy();
        }
      }
    }]);

    return FooterSection;
  }();

  var ImageWithTextBlockSection = /*#__PURE__*/function () {
    function ImageWithTextBlockSection(container) {
      _classCallCheck(this, ImageWithTextBlockSection);

      this.element = container;
    }

    _createClass(ImageWithTextBlockSection, [{
      key: "onUnload",
      value: function onUnload() {}
    }]);

    return ImageWithTextBlockSection;
  }();

  var LoginSection = /*#__PURE__*/function () {
    function LoginSection(container) {
      _classCallCheck(this, LoginSection);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.timelineLite = new TimelineLite();
      this.customerLoginForm = this.element.querySelector('#customer_login');
      this.recoverPasswordForm = this.element.querySelector('#recover_customer_password');
      this.delegateElement.on('click', '[data-action="toggle-recover-form"]', this._showRecoverPassword.bind(this));
    }

    _createClass(LoginSection, [{
      key: "_showRecoverPassword",
      value: function _showRecoverPassword() {
        var isLoginActive = this.customerLoginForm.style.display === 'block';

        if (isLoginActive) {
          this.timelineLite.fromTo(this.customerLoginForm, 0.5, {
            autoAlpha: 1,
            display: 'block',
            y: 0
          }, {
            autoAlpha: 0,
            y: 20,
            display: 'none'
          }).fromTo(this.recoverPasswordForm, 0.5, {
            autoAlpha: 0,
            display: 'none',
            y: 20
          }, {
            autoAlpha: 1,
            display: 'block',
            y: 0,
            delay: 0.25
          });
        } else {
          this.timelineLite.fromTo(this.recoverPasswordForm, 0.5, {
            autoAlpha: 1,
            display: 'block',
            y: 0
          }, {
            autoAlpha: 0,
            y: 20,
            display: 'none'
          }).fromTo(this.customerLoginForm, 0.5, {
            autoAlpha: 0,
            display: 'none',
            y: 20
          }, {
            autoAlpha: 1,
            display: 'block',
            y: 0,
            delay: 0.25
          });
        }
      }
    }]);

    return LoginSection;
  }();

  var MapSection = /*#__PURE__*/function () {
    function MapSection(element) {
      _classCallCheck(this, MapSection);

      this.element = element;
      this.options = JSON.parse(element.getAttribute('data-section-settings'));

      if (this.options['apiKey'] && this.options['mapAddress']) {
        this._loadScript().then(this._initMap.bind(this));
      }
    }

    _createClass(MapSection, [{
      key: "_loadScript",
      value: function _loadScript() {
        var _this = this;

        return new Promise(function (resolve, reject) {
          var script = document.createElement('script');
          document.body.appendChild(script);
          script.onload = resolve;
          script.onerror = reject;
          script.async = true;
          script.src = "https://maps.googleapis.com/maps/api/js?key=".concat(_this.options['apiKey']);
        });
      }
    }, {
      key: "_initMap",
      value: function _initMap() {
        var _this2 = this;

        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
          address: this.options['mapAddress']
        }, function (results, status) {
          if (status !== google.maps.GeocoderStatus.OK) {
            if (Shopify.designMode) ;
          } else {
            var mapOptions = {
              zoom: _this2.options['zoom'],
              center: results[0].geometry.location,
              draggable: false,
              clickableIcons: false,
              scrollwheel: false,
              disableDoubleClickZoom: true,
              disableDefaultUI: true
            };
            var map = new google.maps.Map(_this2.element.querySelector('.FeaturedMap__GMap'), mapOptions),
                center = map.getCenter();
            map.setCenter(center);
            var icon = {
              path: "M32.7374478,5.617 C29.1154478,1.995 24.2994478,0 19.1774478,0 C14.0544478,0 9.23944778,1.995 5.61744778,5.617 C-1.08555222,12.319 -1.91855222,24.929 3.81344778,32.569 L19.1774478,54.757 L34.5184478,32.6 C40.2734478,24.929 39.4404478,12.319 32.7374478,5.617 Z M19.3544478,26 C15.4954478,26 12.3544478,22.859 12.3544478,19 C12.3544478,15.141 15.4954478,12 19.3544478,12 C23.2134478,12 26.3544478,15.141 26.3544478,19 C26.3544478,22.859 23.2134478,26 19.3544478,26 Z",
              fillColor: _this2.options['markerColor'],
              fillOpacity: 1,
              anchor: new google.maps.Point(15, 55),
              strokeWeight: 0,
              scale: 0.6
            };
            new google.maps.Marker({
              map: map,
              position: map.getCenter(),
              icon: icon
            });
            var styledMapType = new google.maps.StyledMapType(JSON.parse(_this2.element.querySelector('[data-gmap-style]').innerHTML));
            map.mapTypes.set('styled_map', styledMapType);
            map.setMapTypeId('styled_map');
            google.maps.event.addDomListener(window, 'resize', function () {
              google.maps.event.trigger(map, 'resize');
              map.setCenter(center);
            });
          }
        });
      }
    }]);

    return MapSection;
  }();

  var NewsletterPopupSection = /*#__PURE__*/function () {
    function NewsletterPopupSection(element) {
      _classCallCheck(this, NewsletterPopupSection);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.options = JSON.parse(element.getAttribute('data-section-settings')); // If the popup has been already displayed, we do not display it

      try {
        if (window.location.hash === '#newsletter-popup' && window.theme.pageType !== null) {
          this._openPopup();
        } else if (!this.options['showOnlyOnce'] || this.options['showOnlyOnce'] && localStorage.getItem('themePopup') === null) {
          setTimeout(this._openPopup.bind(this), this.options['apparitionDelay'] * 1000);
        }
      } catch (error) {// Some browsers (especially in private mode) throw an exception when trying to access local storage, so we protect ourselves here
      }

      this._attachListeners();
    }

    _createClass(NewsletterPopupSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.delegateElement.off();
      }
    }, {
      key: "onSelect",
      value: function onSelect() {
        this._openPopup();
      }
    }, {
      key: "onDeselect",
      value: function onDeselect() {
        this._closePopup();
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '[data-action="close-popup"]', this._closePopup.bind(this));
      }
    }, {
      key: "_openPopup",
      value: function _openPopup() {
        this.element.setAttribute('aria-hidden', 'false');
        localStorage.setItem('themePopup', 'true');
      }
    }, {
      key: "_closePopup",
      value: function _closePopup() {
        this.element.setAttribute('aria-hidden', 'true');
      }
    }]);

    return NewsletterPopupSection;
  }();

  var ProductRecommendationsSection = /*#__PURE__*/function () {
    function ProductRecommendationsSection(container) {
      _classCallCheck(this, ProductRecommendationsSection);

      this.element = container;
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));

      if (this.options['useRecommendations']) {
        this._loadRecommendations().then(this._createSlideshow.bind(this));
      } else {
        this._createSlideshow();
      }
    }

    _createClass(ProductRecommendationsSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.carousel.destroy();
      }
    }, {
      key: "_loadRecommendations",
      value: function _loadRecommendations() {
        var _this = this;

        var url = "".concat(window.routes.productRecommendationsUrl, "?section_id=").concat(this.element.getAttribute('data-section-id'), "&product_id=").concat(this.options['productId'], "&limit=").concat(this.options['recommendationsCount']);
        return fetch(url).then(function (response) {
          return response.text().then(function (content) {
            var container = document.createElement('div');
            container.innerHTML = content;
            _this.element.querySelector('.ProductRecommendations').innerHTML = container.querySelector('.ProductRecommendations').innerHTML;
          });
        });
      }
    }, {
      key: "_createSlideshow",
      value: function _createSlideshow() {
        var flickityElement = this.element.querySelector('[data-flickity-config]');

        if (!flickityElement) {
          return;
        }

        this.carousel = new Carousel(flickityElement); // Setup product item color swatch

        new ProductItemColorSwatch(this.element);
      }
    }]);

    return ProductRecommendationsSection;
  }();

  var ProductSection = /*#__PURE__*/function () {
    function ProductSection(container) {
      var _this = this;

      _classCallCheck(this, ProductSection);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));
      this.viewInSpaceElement = this.element.querySelector('[data-shopify-xr]');
      this.productVariants = new ProductVariants(container, this.options);
      this.productReviews = new ProductReviews(container);
      var productSlideshowElement = this.element.querySelector('.Product__Slideshow'); // If there is no image at all, there is nothing to init

      if (productSlideshowElement) {
        this.productSlideshow = new Carousel(productSlideshowElement, {
          onSelect: this._onImageChanged.bind(this),
          onSettle: this._onImageSettled.bind(this)
        }, {
          draggable: !Responsive.matchesBreakpoint('supports-hover')
        });
        this.mediaList = {}; // We keep track of a list of media element

        this.previouslySelectedMedia = null; // Keep track of the previously selected media
        // For each model and video, we register a media

        productSlideshowElement.querySelectorAll('[data-media-type="model"]').forEach(function (model) {
          _this.mediaList[model.getAttribute('data-media-id')] = new ProductModel(model, _this.options['stackProductImages']);
        });
        productSlideshowElement.querySelectorAll('[data-media-type="video"], [data-media-type="external_video"]').forEach(function (video) {
          _this.mediaList[video.getAttribute('data-media-id')] = new ProductVideo(video, _this.options['stackProductImages'], _this.options['enableVideoLooping']);
        });

        if (this.options['stackProductImages']) {
          this.slideshowNavDots = this.element.querySelector('.Product__SlideshowNav--dots');
          this.slideshowNavDotsItems = this.slideshowNavDots ? Dom.nodeListToArray(this.slideshowNavDots.querySelectorAll('a')) : [];
        }

        if (this.options['showThumbnails']) {
          this.slideshowNavThumbnails = this.element.querySelector('.Product__SlideshowNav--thumbnails');
          this.slideshowNavThumbnailsItems = this.slideshowNavThumbnails ? Dom.nodeListToArray(this.slideshowNavThumbnails.querySelectorAll('.Product__SlideshowNavImage')) : [];
        }

        this.slideshowImages = Dom.nodeListToArray(productSlideshowElement.querySelectorAll('.Carousel__Cell')); // Setup the mobile nav

        this._setupSlideshowMobileNav();
      }

      this.productWrapperElement = this.element.querySelector('.Product__Wrapper');
      this.productInfoElement = this.element.querySelector('.Product__Info');
      this.productAsideElement = this.element.querySelector('.Product__Aside');
      this.productGalleryElement = this.element.querySelector('.Product__Gallery');
      this.quickNav = this.element.querySelector('.Product__QuickNav');

      if (this.options['enableImageZoom']) {
        this.imageZoomInstance = new ProductImageZoom(this.element, this.productSlideshow);
      }

      Stickyfill.addOne(this.productInfoElement); // We have to re-order elements in the DOM

      var offscreenElement = this.element.querySelector('.Product__OffScreen');

      if (offscreenElement) {
        this.element.appendChild(offscreenElement);
      }

      this._setupDeviceFeatures();

      this._attachListeners();
    }

    _createClass(ProductSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.delegateElement.off('click');
        this.productReviews.destroy();

        if (this.productVariants) {
          this.productVariants.destroy();
        }

        if (this.productSlideshow) {
          this.productSlideshow.destroy();
        }

        if (this.options['enableImageZoom']) {
          this.imageZoomInstance.destroy();
        }

        if (this.carouselNavScrollSpy) {
          this.carouselNavScrollSpy.destroy();
        }

        if (this.quickNav) {
          window.removeEventListener('scroll', this._checkQuickNavListener);
        }

        if (this.productInfoScroller) {
          this.productInfoScroller.destroy();
        }

        if (this.productThumbnailsScroller) {
          this.productThumbnailsScroller.destroy();
        }

        if (window.ResizeObserver && this.productInfoResizeObserver) {
          this.productInfoResizeObserver.disconnect();
        }

        Stickyfill.removeOne(this.productInfoElement);
        document.removeEventListener('breakpoint:changed', this._onBreakpointChangedListener);
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._onBreakpointChangedListener = this._setupDeviceFeatures.bind(this);
        this._checkQuickNavListener = this._checkQuickNav.bind(this);
        this.delegateElement.on('click', '[data-action="toggle-social-share"]', this._toggleSocialShare.bind(this));
        this.delegateElement.on('variant:changed', this._updateSlideshowImage.bind(this));
        this.delegateElement.on('scrollspy:target:changed', this._onScrollTargetChanged.bind(this));
        this.delegateElement.on('model:played', this._onMediaPlayed.bind(this));
        this.delegateElement.on('video:played', this._onMediaPlayed.bind(this));
        this.delegateElement.on('model:paused', this._onMediaPaused.bind(this));
        this.delegateElement.on('video:paused', this._onMediaPaused.bind(this));
        document.addEventListener('breakpoint:changed', this._onBreakpointChangedListener);

        if (this.quickNav) {
          window.addEventListener('scroll', this._checkQuickNavListener);
        }

        if (!this.options['stackProductImages'] && this.options['showThumbnails']) {
          this.delegateElement.on('click', '.Product__SlideshowNavImage', this._switchToImage.bind(this));
        }
      }
    }, {
      key: "_setupSlideshowMobileNav",
      value: function _setupSlideshowMobileNav() {
        var _this2 = this;

        this.slideshowMobileNav = this.element.querySelector('.Product__SlideshowMobileNav');

        if (this.slideshowMobileNav) {
          var slideshowMobileNavDelegate = new domDelegate.Delegate(this.slideshowMobileNav); // Handle the dot

          slideshowMobileNavDelegate.on('click', '.dot', function (event, element) {
            _this2._slideWillChange();

            _this2.productSlideshow.selectCell(parseInt(element.getAttribute('data-index')));
          }); // Handle the buttons

          slideshowMobileNavDelegate.on('click', '.Product__SlideshowNavArrow', function (event, element) {
            _this2._slideWillChange();

            if (element.getAttribute('data-direction') === 'next') {
              _this2.productSlideshow.next();
            } else {
              _this2.productSlideshow.previous();
            }
          });
        }
      }
      /**
       * Update the main carousel image
       */

    }, {
      key: "_updateSlideshowImage",
      value: function _updateSlideshowImage(event) {
        var variant = event.detail.variant,
            previousVariant = event.detail.previousVariant;

        if (!variant || !variant['featured_media'] || previousVariant && previousVariant['featured_media'] && previousVariant['featured_media']['id'] === variant['featured_media']['id']) {
          return;
        } // We have two logic here: if we are on pocket mode, we switch using the carousel, otherwise we simulate a link to the anchor


        this._slideWillChange();

        if (Responsive.matchesBreakpoint('pocket') || !this.options['stackProductImages']) {
          for (var i = 0; i !== this.productSlideshow.flickityInstance.cells.length; ++i) {
            var cellElement = this.productSlideshow.flickityInstance.cells[i].element,
                mediaId = parseInt(cellElement.getAttribute('data-media-id'));

            if (mediaId === variant['featured_media']['id']) {
              this.productSlideshow.selectCell(parseInt(cellElement.getAttribute('data-media-position')) - 1);
            }
          }
        } else {
          document.querySelector("[href=\"#Media".concat(variant['featured_media']['id'], "\"]")).click(); //document.getElementById(`Media${variant['featured_media']['id']}`).scrollIntoView({behavior: 'smooth'});
        }
      }
      /**
       * This happens when a media is played
       */

    }, {
      key: "_onMediaPlayed",
      value: function _onMediaPlayed(event) {
        // Remove draggability
        this.productSlideshow.getFlickityInstance().options.draggable = false;
        this.productSlideshow.getFlickityInstance().unbindDrag(); // If there is a previously enabled media, we disable it

        if (this.previouslySelectedMedia && this.previouslySelectedMedia !== event.target) {
          this.mediaList[this.previouslySelectedMedia.getAttribute('data-media-id')].hasBeenDeselected();
        } // If the slideshow is configured to stack images, the "select" method from the carousel is not called, so we
        // have to keep track of it here


        if (this.options['stackProductImages']) {
          this.previouslySelectedMedia = event.target;
        }
      }
      /**
       * This happens when a given media is paused
       */

    }, {
      key: "_onMediaPaused",
      value: function _onMediaPaused() {
        // Enable draggability
        this.productSlideshow.getFlickityInstance().options.draggable = !Responsive.matchesBreakpoint('supports-hover');
        this.productSlideshow.getFlickityInstance().bindDrag();
      }
      /**
       * This method is called when a media changed in the slideshow
       */

    }, {
      key: "_handleMedia",
      value: function _handleMedia(item) {
        // First, we need to turn off the previous media (if any)
        if (this.previouslySelectedMedia && this.previouslySelectedMedia !== item) {
          switch (this.previouslySelectedMedia.getAttribute('data-media-type')) {
            case 'video':
            case 'external_video':
            case 'model':
              this.mediaList[this.previouslySelectedMedia.getAttribute('data-media-id')].hasBeenDeselected();
          } // If the previous media was a model, we need to adjust the "view in space" button to go back to initial value


          if (this.previouslySelectedMedia.getAttribute('data-media-type') === 'model' && this.viewInSpaceElement) {
            this.viewInSpaceElement.setAttribute('data-shopify-model3d-id', this.viewInSpaceElement.getAttribute('data-shopify-model3d-default-id'));
          }
        } // Then, we have to handle the currently selected media


        switch (item.getAttribute('data-media-type')) {
          case 'video':
          case 'external_video':
          case 'model':
            this.mediaList[item.getAttribute('data-media-id')].hasBeenSelected();
            break;
        } // If the media is a model, we need to adjust the "view in space" button


        if (item.getAttribute('data-media-type') === 'model' && this.viewInSpaceElement) {
          this.viewInSpaceElement.setAttribute('data-shopify-model3d-id', item.getAttribute('data-media-id'));
        } // We set the previously selected media to the currently new one, so that when it changes it can be properly accounted


        this.previouslySelectedMedia = item;
      }
      /**
       * Callback when the target changes
       */

    }, {
      key: "_onScrollTargetChanged",
      value: function _onScrollTargetChanged(event) {
        // The scrollspy emit also an "oldTarget", but when scrolling very fast with Firefox or Safari, it prevents the old to be removed, so we
        // manually iterate through all of them to remove it first
        if (this.options['stackProductImages']) {
          this.slideshowNavDotsItems.forEach(function (item) {
            return item.classList.remove('is-selected');
          });
          this.slideshowNavDotsItems[parseInt(event.detail.newTarget.getAttribute('data-media-position')) - 1].classList.add('is-selected');

          if (this.options['showThumbnails']) {
            this.slideshowNavThumbnailsItems.forEach(function (item) {
              return item.classList.remove('is-selected');
            });
            this.slideshowNavThumbnailsItems[parseInt(event.detail.newTarget.getAttribute('data-media-position')) - 1].classList.add('is-selected');
          }
        }
      }
    }, {
      key: "_switchToImage",
      value: function _switchToImage(event, target) {
        event.preventDefault();

        this._slideWillChange();

        for (var i = 0; i !== this.productSlideshow.flickityInstance.cells.length; ++i) {
          var cellElement = this.productSlideshow.flickityInstance.cells[i].element,
              mediaId = parseInt(cellElement.getAttribute('data-media-id'));

          if (mediaId === parseInt(target.getAttribute('data-media-id'))) {
            this.productSlideshow.selectCell(parseInt(cellElement.getAttribute('data-media-position')) - 1);
          }
        }
      }
      /**
       * Check the quick nav
       */

    }, {
      key: "_checkQuickNav",
      value: function _checkQuickNav() {
        var _this3 = this;

        var showAsideQuickNav = false;
        fastdom.measure(function () {
          showAsideQuickNav = window.scrollY >= _this3.productAsideElement.offsetTop - _this3.productAsideElement.clientHeight;
        });
        fastdom.mutate(function () {
          if (showAsideQuickNav) {
            _this3.quickNav.classList.add('is-flipped');
          } else {
            _this3.quickNav.classList.remove('is-flipped');
          }
        });
      }
      /**
       * Toggle the social share icons
       */

    }, {
      key: "_toggleSocialShare",
      value: function _toggleSocialShare(event, target) {
        target.classList.toggle('is-active');
        target.classList.toggle('RoundButton--secondaryState');
        target.setAttribute('aria-expanded', target.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
        target.nextElementSibling.setAttribute('aria-hidden', target.nextElementSibling.getAttribute('aria-hidden') === 'true' ? 'false' : 'true');
      }
    }, {
      key: "_onImageChanged",
      value: function _onImageChanged(event, cell) {
        // If cell is video or model, we hide the action list
        if (Responsive.matchesBreakpoint('pocket')) {
          var productGalleryActionListElement = this.element.querySelector('.Product__Gallery .Product__ActionList');

          if (productGalleryActionListElement) {
            if (cell.classList.contains('Product__SlideItem--image')) {
              productGalleryActionListElement.classList.remove('is-hidden');
            } else {
              productGalleryActionListElement.classList.add('is-hidden');
            }
          }
        } // If we have non-stacked with thumbnails, update it


        if (!this.options['stackProductImages'] && this.options['showThumbnails']) {
          var mediaId = cell.getAttribute('data-media-id');
          this.slideshowNavThumbnailsItems.forEach(function (thumbnail) {
            if (thumbnail.getAttribute('data-media-id') === mediaId) {
              thumbnail.classList.add('is-selected');
            } else {
              thumbnail.classList.remove('is-selected');
            }
          });
        } // If we have the mobile navigation, we also update it


        if (this.slideshowMobileNav) {
          var selectedIndex = parseInt(cell.getAttribute('data-media-position')) - 1; // The -1 is to make it 0 indexed

          Dom.nodeListToArray(this.slideshowMobileNav.querySelectorAll('.dot')).forEach(function (item, index) {
            if (index === selectedIndex) {
              item.classList.add('is-selected');
            } else {
              item.classList.remove('is-selected');
            }
          });
        }
      }
    }, {
      key: "_onImageSettled",
      value: function _onImageSettled(index, cell) {
        this._handleMedia(cell);

        if (Responsive.matchesBreakpoint('lap-and-up')) {
          var slides = this.element.querySelectorAll('.Product__SlideItem:not(.is-selected)');
          slides.forEach(function (slide) {
            slide.classList.add('Product__SlideItem--hidden');
          });
        }
      }
    }, {
      key: "_slideWillChange",
      value: function _slideWillChange() {
        if (Responsive.matchesBreakpoint('lap-and-up')) {
          var slides = this.element.querySelectorAll('.Product__SlideItem');
          slides.forEach(function (slide) {
            slide.classList.remove('Product__SlideItem--hidden');
          });
        }
      }
      /**
       * Verify when the screen size changes to create additional stuff on non pocket mode
       */

    }, {
      key: "_setupDeviceFeatures",
      value: function _setupDeviceFeatures(event) {
        var _this4 = this;

        var currentBreakpoint = event ? event.detail.currentBreakpoint : Responsive.getCurrentBreakpoint(),
            previousBreakpoint = event ? event.detail.previousBreakpoint : null;

        if (currentBreakpoint === previousBreakpoint) {
          return; // Nothing has changed, no specific setup to do
        }

        if (currentBreakpoint === 'phone' || currentBreakpoint === 'tablet') {
          if (this.carouselNavScrollSpy) {
            this.carouselNavScrollSpy.destroy();
          }

          if (this.productInfoScroller) {
            this.productInfoScroller.destroy();
          }

          if (this.productThumbnailsScroller) {
            this.productThumbnailsScroller.destroy();
          }

          if (this.productAsideElement) {
            this.productAsideElement.style.minHeight = null;
          } else {
            this.productWrapperElement.style.minHeight = null;
          }

          this.productInfoElement.parentNode.style.maxHeight = null;
        } else {
          // 1st: scrollspy for the dots and image
          if (this.slideshowImages && this.slideshowImages.length > 1) {
            var offsetTop = 0;

            if (this.options['stackProductImages'] && this.slideshowNavDots) {
              offsetTop = this.slideshowNavDots.firstElementChild.offsetTop;
            }

            if (this.options['showThumbnails'] && Responsive.matchesBreakpoint('desk')) {
              offsetTop = 250;
            }

            this.carouselNavScrollSpy = new ScrollSpy(this.element, this.slideshowImages, {
              rootMargin: "-".concat(offsetTop, "px 0px 0px 0px")
            });
          }

          var productInfoStyles = window.getComputedStyle(this.productInfoElement),
              productInfoPadding = parseInt(productInfoStyles.paddingTop) + parseInt(productInfoStyles.paddingBottom),
              productGalleryHeight = this.productGalleryElement ? parseInt(this.productGalleryElement.scrollHeight) : 0; // 2nd: making sure to set up enough space in aside part

          var calculateMinHeight = function calculateMinHeight() {
            if (_this4.productAsideElement) {
              _this4.productAsideElement.style.minHeight = "".concat(_this4.productInfoElement.scrollHeight - productInfoPadding - productGalleryHeight, "px");
              _this4.productInfoElement.closest('.Product__InfoWrapper').style.maxHeight = _this4.productAsideElement.offsetTop + _this4.productInfoElement.scrollHeight - productInfoPadding + 'px';
            } else {
              _this4.productWrapperElement.style.minHeight = "".concat(_this4.productInfoElement.scrollHeight - parseInt(productInfoStyles.paddingTop), "px");
            }
          };

          calculateMinHeight(); // This code actually works well, but if a merchant is using an app that dynamically adds content (such as ReCharge or any other widget-based app), this
          // will mess the min height. There is a clean solution to this issue, which is by using ResizeObserver. However it's only supported in Chrome for now,
          // but I feel it's already good to have a clean fix

          if (window.ResizeObserver) {
            this.productInfoResizeObserver = new ResizeObserver(function () {
              calculateMinHeight(); // We currently do not take advantage of the values returned by the observer as our calculation depends on other values
            });
            this.productInfoResizeObserver.observe(this.productInfoElement);
          } // 3rd: let's handle the scroll for the product info


          this.productInfoScroller = new OverflowScroller(this.productInfoElement); // 4th: let's handle the scroll for the thumbnails

          if (this.options['showThumbnails'] && this.slideshowNavThumbnails) {
            this.productThumbnailsScroller = new OverflowScroller(this.slideshowNavThumbnails);
          }
        }
      }
    }]);

    return ProductSection;
  }();

  var RecentlyViewedProductsSection = /*#__PURE__*/function () {
    function RecentlyViewedProductsSection(container) {
      _classCallCheck(this, RecentlyViewedProductsSection);

      this.element = container;
      this.options = JSON.parse(this.element.getAttribute('data-section-settings')); // Setup product item color swatch

      new ProductItemColorSwatch(this.element);

      this._fetchProducts();
    }

    _createClass(RecentlyViewedProductsSection, [{
      key: "onUnload",
      value: function onUnload() {
        if (this.carousel) {
          this.carousel.destroy();
        }
      }
      /**
       * In order to get the products to display, we hit the search template with the given IDS
       */

    }, {
      key: "_fetchProducts",
      value: function _fetchProducts() {
        var _this = this;

        var queryString = this._getSearchQueryString();

        if (queryString === '') {
          return;
        } // If we have a non empty query string we do a search query


        fetch("".concat(window.routes.searchUrl, "?section_id=").concat(this.element.getAttribute('data-section-id'), "&type=product&q=").concat(queryString), {
          credentials: 'same-origin',
          method: 'GET'
        }).then(function (response) {
          response.text().then(function (content) {
            var tempElement = document.createElement('div');
            tempElement.innerHTML = content; // Set the content

            _this.element.innerHTML = tempElement.querySelector('.Section').innerHTML; // Show the section

            _this.element.parentNode.style.display = 'block'; // And finally let's create the carousel !

            _this.carousel = new Carousel(_this.element.querySelector('[data-flickity-config]'));
          });
        });
      }
    }, {
      key: "_getSearchQueryString",
      value: function _getSearchQueryString() {
        var items = JSON.parse(localStorage.getItem('recentlyViewedProducts') || '[]'); // If we are on a product template, we make sure to remove the main product from the related product

        if (items.includes(this.options['productId'])) {
          items.splice(items.indexOf(this.options['productId']), 1);
        }

        return items.map(function (item) {
          return 'id:' + item;
        }).join(' OR ');
      }
    }]);

    return RecentlyViewedProductsSection;
  }();

  /**
   * This code is extracted from Slate
   */

  var SectionContainer = /*#__PURE__*/function () {
    function SectionContainer() {
      _classCallCheck(this, SectionContainer);

      this.constructors = [];
      this.instances = [];

      this._attachListeners();
    }

    _createClass(SectionContainer, [{
      key: "_attachListeners",
      value: function _attachListeners() {
        document.addEventListener('shopify:section:load', this._onSectionLoad.bind(this));
        document.addEventListener('shopify:section:unload', this._onSectionUnload.bind(this));
        document.addEventListener('shopify:section:select', this._onSelect.bind(this));
        document.addEventListener('shopify:section:deselect', this._onDeselect.bind(this));
        document.addEventListener('shopify:section:reorder', this._onReorder.bind(this));
        document.addEventListener('shopify:block:select', this._onBlockSelect.bind(this));
        document.addEventListener('shopify:block:deselect', this._onBlockDeselect.bind(this));
      }
    }, {
      key: "register",
      value: function register(type, constructor) {
        var _this = this;

        this.constructors[type] = constructor;
        Dom.nodeListToArray(document.querySelectorAll("[data-section-type=".concat(type, "]"))).forEach(function (container) {
          _this._createInstance(container, constructor);
        });
      }
      /**
       * Return an object from an array of objects that matches the provided key and value
       */

    }, {
      key: "_findInstance",
      value: function _findInstance(array, key, value) {
        for (var i = 0; i < array.length; i++) {
          if (array[i][key] === value) {
            return array[i];
          }
        }
      }
      /**
       * Remove an object from an array of objects by matching the provided key and value
       */

    }, {
      key: "_removeInstance",
      value: function _removeInstance(array, key, value) {
        var i = array.length;

        while (i--) {
          if (array[i][key] === value) {
            array.splice(i, 1);
            break;
          }
        }

        return array;
      }
    }, {
      key: "_onSectionLoad",
      value: function _onSectionLoad(event) {
        var container = event.target.querySelector('[data-section-id]');

        if (container) {
          this._createInstance(container);
        }
      }
    }, {
      key: "_onSectionUnload",
      value: function _onSectionUnload(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (!instance) {
          return;
        }

        if (typeof instance.onUnload === 'function') {
          instance.onUnload(event);
        }

        this.instances = this._removeInstance(this.instances, 'id', event.detail.sectionId);
      }
    }, {
      key: "_onSelect",
      value: function _onSelect(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (instance && typeof instance.onSelect === 'function') {
          instance.onSelect(event);
        }
      }
    }, {
      key: "_onDeselect",
      value: function _onDeselect(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (instance && typeof instance.onDeselect === 'function') {
          instance.onDeselect(event);
        }
      }
    }, {
      key: "_onReorder",
      value: function _onReorder(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (instance && typeof instance.onReorder === 'function') {
          instance.onReorder(event);
        }
      }
    }, {
      key: "_onBlockSelect",
      value: function _onBlockSelect(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (instance && typeof instance.onBlockSelect === 'function') {
          instance.onBlockSelect(event);
        }
      }
    }, {
      key: "_onBlockDeselect",
      value: function _onBlockDeselect(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (instance && typeof instance.onBlockDeselect === 'function') {
          instance.onBlockDeselect(event);
        }
      }
    }, {
      key: "_createInstance",
      value: function _createInstance(container, constructor) {
        var id = container.getAttribute('data-section-id'),
            type = container.getAttribute('data-section-type');
        constructor = constructor || this.constructors[type];

        if (typeof constructor === 'undefined') {
          return;
        }

        var instance = Object.assign(new constructor(container), {
          id: id,
          type: type,
          container: container
        });
        this.instances.push(instance);
      }
    }]);

    return SectionContainer;
  }();

  var ShopNowSection = /*#__PURE__*/function () {
    function ShopNowSection(container) {
      _classCallCheck(this, ShopNowSection);

      this.element = container;
      this.carousel = new Carousel(this.element.querySelector('[data-flickity-config]')); // Setup product item color swatch

      new ProductItemColorSwatch(this.element);
    }

    _createClass(ShopNowSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.carousel.destroy();
      }
    }]);

    return ShopNowSection;
  }();

  var ShopTheLookSection = /*#__PURE__*/function () {
    function ShopTheLookSection(container) {
      _classCallCheck(this, ShopTheLookSection);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.usePocketMode = Responsive.matchesBreakpoint('pocket');
      this.pocketActivatorButton = this.element.querySelector('[data-action="open-look"]');

      this._createOuterCarousel();

      this._createPocketPopovers();

      this._attachListeners();
    }

    _createClass(ShopTheLookSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.outerCarousel.destroy();
        this.innerCarousels.forEach(function (item) {
          item.forEach(function (innerItem) {
            return innerItem.destroy();
          });
        });
        this.popovers.forEach(function (item) {
          return item.destroy();
        });
        this.delegateElement.off();
      }
    }, {
      key: "onBlockSelect",
      value: function onBlockSelect(event) {
        this.outerCarousel.selectCell(event.target.getAttribute('data-slide-index'), true, !event.detail.load);
      }
      /**
       * Attach all the listeners
       */

    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '.ShopTheLook__Dot', this._onDotClicked.bind(this));
      }
      /**
       * There is one mobile and tablet popover per look, so we pre-create them
       */

    }, {
      key: "_createPocketPopovers",
      value: function _createPocketPopovers() {
        var _this = this;

        this.popovers = [];
        Dom.nodeListToArray(this.element.querySelectorAll('.Popover')).forEach(function (popover) {
          _this.popovers.push(new Popover(popover, {
            activator: _this.pocketActivatorButton,
            showOverlay: false,
            onOpen: _this._openPocketZoom.bind(_this),
            onClose: _this._closePocketZoom.bind(_this)
          }));
        });
      }
      /**
       * The outer carousel is the carousel that holds the main one (all the looks). Internally, it also creates
       * a sub-carousel for each inner carousel
       */

    }, {
      key: "_createOuterCarousel",
      value: function _createOuterCarousel() {
        var _this2 = this;

        this.outerCarousel = new Carousel(this.element.querySelector('.ShopTheLook'), {
          onSelect: this._onLookChanged.bind(this)
        });
        this.innerCarousels = new Array(this.outerCarousel.flickityInstance.cells.length);

        for (var i = 0; i !== this.innerCarousels.length; ++i) {
          this.innerCarousels[i] = [];
        } // We need to create ALL the carousels (both in desktop and mobile). Fortunately Flickity is quite fast, but
        // we have no other choices if we want to have proper animations everywhere.


        Dom.nodeListToArray(this.element.querySelectorAll('.ShopTheLook__ProductList')).forEach(function (item) {
          var lookIndex = parseInt(item.getAttribute('data-look-index'));

          _this2.innerCarousels[lookIndex].push(new Carousel(item, {
            onSelect: _this2._onProductChanged.bind(_this2)
          })); // By default, Flickity will append the carousel, hence making the "ViewButton" before the carousel. We need to manipulate it to move it after


          item.insertBefore(item.querySelector('.flickity-viewport'), item.querySelector('.ShopTheLook__ViewButton'));
        });
        this.outerCarousel.resize(); // Needed in case the products are taller than the image
      }
      /**
       * This function is called whenever the main look has changed, so that we can modify the popover activator
       */

    }, {
      key: "_onLookChanged",
      value: function _onLookChanged(selectedIndex, selectedCell) {
        // Then, we update the mobile button so that it opens the correct block
        this.pocketActivatorButton.setAttribute('aria-controls', "".concat(selectedCell.getAttribute('id'), "-popover"));
      }
      /**
       * This function is called whenever a product is changed in the list for a given look. This allows to focus the main dot
       */

    }, {
      key: "_onProductChanged",
      value: function _onProductChanged(selectedIndex, selectedCell) {
        var lookItem = this.outerCarousel.getSelectedCell(),
            activeDot = null;
        Dom.nodeListToArray(lookItem.querySelectorAll('.ShopTheLook__Dot')).forEach(function (dot, index) {
          dot.classList.remove('is-active'); // IE11 and lower does not support "toggle" with second parameter :(

          if (index === selectedIndex) {
            dot.classList.add('is-active');
            activeDot = dot;
          }
        }); // Update the link to the product (if using the desktop view)

        lookItem.querySelector('.ShopTheLook__ViewButton').setAttribute('href', selectedCell.getAttribute('data-product-url')); // We trigger an event so that when the dot change we can recalculate the position

        lookItem.dispatchEvent(new CustomEvent('product:changed', {
          detail: {
            dot: activeDot
          }
        }));
      }
      /**
       * This function is called whenever you explicitly click on a dot.
       *
       * On mobile and tablet, this must open the appropriate popver
       */

    }, {
      key: "_onDotClicked",
      value: function _onDotClicked(event, target) {
        var shouldAnimateCarousel = false,
            hasOnePopoverOpen = false,
            lookIndex = this.outerCarousel.getSelectedIndex();
        this.popovers.forEach(function (item) {
          if (item.isOpen) {
            hasOnePopoverOpen = true;
            shouldAnimateCarousel = true;
          }
        }); // Each inner carousel has a mobile AND desktop version, so we change both

        this.innerCarousels[lookIndex].forEach(function (innerCarousel) {
          innerCarousel.selectCell(parseInt(target.getAttribute('data-product-index')) - 1, false, shouldAnimateCarousel);
        });

        if (this.usePocketMode && !hasOnePopoverOpen) {
          this.popovers[lookIndex].open();
        }
      }
      /**
       * This is called when, on mobile, the popover is open. We must open the image in full resolution
       */

    }, {
      key: "_openPocketZoom",
      value: function _openPocketZoom(popover) {
        var _this3 = this;

        this._calculateImageTransform(popover);

        fastdom.mutate(function () {
          // We need to animate the header to avoid a slightly ugly effect if image overlap the header
          document.getElementById('shopify-section-header').style.cssText = 'transform: translateY(-100%); transition: transform 0.3s ease-in-out;';

          _this3.outerCarousel.flickityInstance.unbindDrag(); // Prevent changing the active slide


          _this3.outerCarousel.flickityInstance.element.classList.add('is-zoomed');

          _this3.outerCarousel.getSelectedCell().classList.add('is-expanded');
        });
      }
      /**
       * When the mobile zoom is open, and whenever the active dot changes, we need to potentially re-calculate the transform
       */

    }, {
      key: "_calculateImageTransform",
      value: function _calculateImageTransform(openPopover) {
        var _this4 = this;

        var selectedCell = this.outerCarousel.getSelectedCell();
        fastdom.measure(function () {
          // We first need to compute the initial transform and scale factor
          var scale = window.innerWidth / (selectedCell.offsetWidth - parseInt(window.getComputedStyle(selectedCell).paddingLeft) * 2),
              heightAfterScale = Math.round(selectedCell.offsetHeight * scale),
              // Height of the selected cell once the scale transform is applied
          hiddenImageHeight = Math.round(Math.max(heightAfterScale - (window.innerHeight - openPopover.element.offsetHeight), 0)),
              // Part of image that is below popover
          visibleImageHeight = heightAfterScale - hiddenImageHeight,
              // Part of the image that is visible in the viewport
          minTranslateY = Math.round(-(selectedCell.getBoundingClientRect().top - (heightAfterScale - selectedCell.offsetHeight) / 2)),
              // The minimum translate Y transform allowed so that image is visible
          maxTranslateY = Math.round(minTranslateY - hiddenImageHeight); // The maximum translate Y transform allowed so that image is visible

          _this4._calculateTransformForDotListener = function (event) {
            var dotTopPosition = Math.round((event.detail.dot.offsetTop + event.detail.dot.offsetHeight / 2) * scale),
                offsetToMove = Math.round(dotTopPosition - visibleImageHeight / 2),
                translateY = Math.min(Math.max(minTranslateY - offsetToMove, maxTranslateY), minTranslateY);
            fastdom.mutate(function () {
              _this4.outerCarousel.flickityInstance.viewport.style.transform = "translate3d(0, ".concat(Math.round(translateY), "px, 0) scale(").concat(scale, ")");
            });
          }; // We manually generate an event the first time to trigger the positioning


          selectedCell.addEventListener('product:changed', _this4._calculateTransformForDotListener);
          selectedCell.dispatchEvent(new CustomEvent('product:changed', {
            detail: {
              dot: selectedCell.querySelector('.ShopTheLook__Dot.is-active')
            }
          }));
        });
      }
      /**
       * Close the mobile zoom (which close the popover and remove any transform
       */

    }, {
      key: "_closePocketZoom",
      value: function _closePocketZoom() {
        var _this5 = this;

        var selectedCell = this.outerCarousel.getSelectedCell();
        selectedCell.removeEventListener('product:changed', this._calculateTransformForDotListener);
        fastdom.mutate(function () {
          document.getElementById('shopify-section-header').style.cssText = 'transform: translateY(0); transition: transform 0.3s ease-in-out 0.3s;';

          _this5.outerCarousel.flickityInstance.bindDrag();

          _this5.outerCarousel.flickityInstance.element.classList.remove('is-zoomed');

          _this5.outerCarousel.flickityInstance.viewport.style.transform = null;
          selectedCell.classList.remove('is-expanded');
        });
      }
    }]);

    return ShopTheLookSection;
  }();

  var SidebarMenuSection = /*#__PURE__*/function () {
    function SidebarMenuSection(container) {
      _classCallCheck(this, SidebarMenuSection);

      this.element = container;
      this.sidebarDrawer = new Drawer(container);
    }

    _createClass(SidebarMenuSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.sidebarDrawer.destroy();
      }
    }, {
      key: "onSelect",
      value: function onSelect() {
        this.sidebarDrawer.open();
      }
    }, {
      key: "onDeselect",
      value: function onDeselect() {
        this.sidebarDrawer.close();
      }
    }]);

    return SidebarMenuSection;
  }();

  var SlideshowSection = /*#__PURE__*/function () {
    function SlideshowSection(container) {
      _classCallCheck(this, SlideshowSection);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.slideshow = new Carousel(this.element.querySelector('[data-flickity-config]'), {
        onSelect: this._onSlideChanged.bind(this)
      });
      this.selectedSlide = null;
      this.shouldAnimate = true;
      this.timeline = new TimelineLite({
        delay: window.theme.showPageTransition ? 0.5 : 0
      });

      if (this.slideshow.flickityInstance.cells.length > 0) {
        this._transitionToSlide(this.slideshow.flickityInstance.selectedCell.element, true);
      }

      this._attachListeners();
    }

    _createClass(SlideshowSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.slideshow.destroy();
        this.timeline.kill();
        this.delegateElement.off();
        document.removeEventListener('breakpoint:changed', this._onBreakpointChangedListener);
      }
    }, {
      key: "onBlockSelect",
      value: function onBlockSelect(event) {
        if (this.slideshow.flickityInstance.options.autoPlay) {
          this.slideshow.flickityInstance.stopPlayer();
        }

        this.shouldAnimate = !event.detail.load;
        this.slideshow.selectCell(event.target.getAttribute('data-slide-index'), false, !event.detail.load);
      }
    }, {
      key: "onBlockDeselect",
      value: function onBlockDeselect() {
        this.shouldAnimate = true;

        if (this.slideshow.flickityInstance.options.autoPlay) {
          this.slideshow.flickityInstance.playPlayer();
        }
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._onBreakpointChangedListener = this._onBreakpointChanged.bind(this);
        this.delegateElement.on('mouseenter', '.Button', this._pauseSlideshow.bind(this), true);
        this.delegateElement.on('mouseleave', '.Button', this._resumeSlideshow.bind(this), true);
        document.addEventListener('breakpoint:changed', this._onBreakpointChangedListener);
      }
    }, {
      key: "_pauseSlideshow",
      value: function _pauseSlideshow() {
        if (this.slideshow.flickityInstance.options.autoPlay) {
          this.slideshow.flickityInstance.pausePlayer();
        }
      }
    }, {
      key: "_resumeSlideshow",
      value: function _resumeSlideshow() {
        if (this.slideshow.flickityInstance.options.autoPlay) {
          this.slideshow.flickityInstance.unpausePlayer();
        }
      }
    }, {
      key: "_onSlideChanged",
      value: function _onSlideChanged(index, element) {
        this._transitionToSlide(element);
      }
    }, {
      key: "_transitionToSlide",
      value: function _transitionToSlide(slide) {
        var _this = this;

        this.timeline.clear(); // First, we check if there is a previous slide selected, if that's the case

        if (this.selectedSlide) {
          this._slideLeave(this.selectedSlide);

          this.timeline.addLabel('enter', this.shouldAnimate ? '-=0.4' : 0);
        } // We get the next slide (if any) to preload it


        this._lazyLoadNextImage();

        this.timeline.fromTo(slide, this.selectedSlide && this.shouldAnimate ? 0.3 : 0, {
          autoAlpha: 0
        }, {
          autoAlpha: 1,
          ease: Cubic.easeInOut
        }, 'enter'); // The image may take 1s or more to load depending on the network, so we make sure to pause the player, and restart it once it has transitioned

        if (this.slideshow.flickityInstance.options.autoPlay && this.slideshow.flickityInstance.player.state === 'playing') {
          this.slideshow.flickityInstance.pausePlayer();
        }

        Dom.nodeListToArray(slide.querySelectorAll('.Slideshow__Image')).forEach(function (image) {
          if (image.classList.contains('Image--lazyLoading') || image.classList.contains('Image--lazyLoad')) {
            image.addEventListener('lazyloaded', _this._slideEnter.bind(_this, slide));
          } else {
            _this._slideEnter(slide);
          }
        });
        this.selectedSlide = slide;
      }
    }, {
      key: "_slideLeave",
      value: function _slideLeave(slide) {
        var content = slide.querySelector('.SectionHeader'),
            buttonWrapper = slide.querySelector('.SectionHeader__ButtonWrapper');
        this.timeline.fromTo(slide, this.shouldAnimate ? 0.3 : 0, {
          autoAlpha: 1
        }, {
          autoAlpha: 0,
          ease: Cubic.easeInOut,
          delay: this.shouldAnimate ? 0.35 : 0
        });

        if (content) {
          this.timeline.fromTo(content, this.shouldAnimate ? 0.4 : 0, {
            autoAlpha: 1,
            y: 0
          }, {
            autoAlpha: 0,
            y: 20,
            ease: Cubic.easeIn
          }, 0);
        }

        if (buttonWrapper) {
          this.timeline.fromTo(buttonWrapper, this.shouldAnimate ? 0.4 : 0, {
            autoAlpha: 1,
            y: 0
          }, {
            autoAlpha: 0,
            y: 10,
            ease: Cubic.easeIn
          }, 0);
        }
      }
    }, {
      key: "_slideEnter",
      value: function _slideEnter(slide) {
        var images = slide.querySelectorAll('.Slideshow__Image'),
            content = slide.querySelector('.SectionHeader'),
            buttonWrapper = slide.querySelector('.SectionHeader__ButtonWrapper');

        if (this.slideshow.flickityInstance.options.autoPlay && this.slideshow.flickityInstance.player.state === 'paused') {
          this.slideshow.flickityInstance.unpausePlayer();
        }

        if (window.CSS && window.CSS.supports('(object-fit: cover) or (-o-object-fit: cover)')) {
          if (window.theme.showImageZooming) {
            this.timeline.fromTo(images, this.shouldAnimate ? 1.2 : 0, {
              opacity: 0,
              scale: 1.2
            }, {
              opacity: 1,
              scale: 1,
              ease: Quad.easeOut
            }, 'enter');
          } else {
            this.timeline.fromTo(images, this.shouldAnimate ? 1.2 : 0, {
              opacity: 0
            }, {
              opacity: 1,
              ease: Quad.easeOut
            }, 'enter');
          }
        }

        if (content) {
          this.timeline.fromTo(content, this.shouldAnimate ? 0.8 : 0, {
            autoAlpha: 0,
            y: 30
          }, {
            autoAlpha: 1,
            y: 0,
            delay: this.shouldAnimate ? 0.8 : 0,
            ease: Cubic.easeOut
          }, 'enter');
        }

        if (buttonWrapper) {
          this.timeline.fromTo(buttonWrapper, this.shouldAnimate ? 0.8 : 0, {
            autoAlpha: 0,
            y: 20
          }, {
            autoAlpha: 1,
            y: 0,
            delay: this.shouldAnimate ? 0.8 : 0,
            ease: Cubic.easeOut
          }, 'enter');
        }
      }
    }, {
      key: "_lazyLoadNextImage",
      value: function _lazyLoadNextImage() {
        var currentIndex = this.slideshow.flickityInstance.selectedIndex,
            breakpoint = Responsive.getCurrentBreakpoint();

        if (this.slideshow.flickityInstance.cells.length - 1 > currentIndex) {
          var nextCellElement = this.slideshow.flickityInstance.cells[currentIndex + 1].element,
              imageContainers = Dom.nodeListToArray(nextCellElement.querySelectorAll('.Slideshow__ImageContainer')),
              imageToReveal = null;

          if (breakpoint === 'phone') {
            imageToReveal = imageContainers[0];
          } else {
            imageToReveal = imageContainers[1];
          }

          if (window.lazySizes && imageToReveal && imageToReveal.classList.contains('Image--lazyLoad')) {
            lazySizes.loader.unveil(imageToReveal.firstElementChild);
          }
        }
      }
    }, {
      key: "_onBreakpointChanged",
      value: function _onBreakpointChanged(event) {
        if (event.detail.previousBreakpoint === 'phone' && event.detail.currentBreakpoint !== 'phone' || event.detail.previousBreakpoint !== 'phone' && event.detail.currentBreakpoint === 'phone') {
          this.selectedSlide = null;

          this._transitionToSlide(this.slideshow.flickityInstance.selectedElement);
        }
      }
    }]);

    return SlideshowSection;
  }();

  var TestimonialsSection = /*#__PURE__*/function () {
    function TestimonialsSection(container) {
      _classCallCheck(this, TestimonialsSection);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.navItems = Dom.nodeListToArray(this.element.querySelectorAll('.TestimonialNav__Item'));
      this.carousel = new Carousel(this.element.querySelector('.TestimonialList'), {
        onSelect: this._testimonialChanged.bind(this)
      });

      this._attachListeners();
    }

    _createClass(TestimonialsSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.carousel.destroy();
        this.delegateElement.off('click');
      }
    }, {
      key: "onBlockSelect",
      value: function onBlockSelect(event) {
        this.carousel.selectCell(event.target.getAttribute('data-slide-index'), true);
      }
    }, {
      key: "onBlockDeselect",
      value: function onBlockDeselect() {
        this.carousel.unpausePlayer();
      }
    }, {
      key: "_testimonialClicked",
      value: function _testimonialClicked(event, target) {
        this.carousel.pausePlayer();
        this.carousel.selectCell(parseInt(target.getAttribute('data-index')));
        this.carousel.unpausePlayer();
      }
    }, {
      key: "_testimonialChanged",
      value: function _testimonialChanged(newIndex) {
        this.navItems.forEach(function (item, index) {
          item.classList.remove('is-selected'); // IE11 and lower does not support classList.toggle

          if (newIndex === index) {
            item.classList.add('is-selected');
          }
        });
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '.TestimonialNav__Item', this._testimonialClicked.bind(this));
      }
    }]);

    return TestimonialsSection;
  }();

  var TimelineSection = /*#__PURE__*/function () {
    function TimelineSection(container) {
      _classCallCheck(this, TimelineSection);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.items = Dom.nodeListToArray(this.element.querySelectorAll('.Timeline__Item'));
      this.navItems = Dom.nodeListToArray(this.element.querySelectorAll('.Timeline__NavItem'));

      this._attachListeners();
    }

    _createClass(TimelineSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.delegateElement.off('click');
      }
    }, {
      key: "onBlockSelect",
      value: function onBlockSelect(event) {
        this.navItems[parseInt(event.target.getAttribute('data-index'))].click(); // Simulate a click on the given nav item
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '.Timeline__NavItem', this._clickOnNavItem.bind(this));
      }
    }, {
      key: "_clickOnNavItem",
      value: function _clickOnNavItem(event, target) {
        var newItem = this.items[parseInt(target.getAttribute('data-index'))];

        if (newItem.classList.contains('is-selected')) {
          return;
        }

        var isContentLarger = false,
            navWrapper = target.parentNode,
            scrollableOffset = 0;
        fastdom.measure(function () {
          var scrollableWidth = navWrapper.scrollWidth,
              visibleWidth = navWrapper.offsetWidth;
          isContentLarger = visibleWidth < scrollableWidth;

          if (isContentLarger) {
            var beginBound = target.offsetLeft,
                endBound = beginBound + target.offsetWidth,
                closerToLeft = beginBound <= visibleWidth - endBound;
            var itemToUse = null;

            if (closerToLeft) {
              // If closer to left, we try to make the previous item visible (if possible)
              itemToUse = target.previousElementSibling || target;
            } else {
              // If closer to right, we try to make the next item visible (if possible)
              itemToUse = target.nextElementSibling || target;
            }

            var itemBeginBound = itemToUse.offsetLeft - navWrapper.scrollLeft,
                itemEndBound = itemBeginBound + itemToUse.offsetWidth;

            if (itemEndBound > visibleWidth) {
              // Element is not visible from the right, so we must move by a given amount so that endBound is within viewable screen
              scrollableOffset = itemEndBound - visibleWidth;
            } else if (itemBeginBound < 0) {
              // Element is not visible from the left, so we simply use the opposite of the negative offset
              scrollableOffset = itemBeginBound;
            }
          }
        });
        fastdom.mutate(function () {
          if (isContentLarger) {
            navWrapper.scrollBy({
              behavior: 'smooth',
              left: scrollableOffset
            });
          } // First we set the class on the selected item and remove it on siblings


          target.classList.add('is-selected');
          Dom.getSiblings(target, '.is-selected').forEach(function (item) {
            item.classList.remove('is-selected');
          }); // Then we slide to the appropriate element

          newItem.classList.add('is-selected');
          Dom.getSiblings(newItem, '.is-selected').forEach(function (item) {
            item.classList.remove('is-selected');
          });
        });
      }
    }]);

    return TimelineSection;
  }();

  var PriceRange = /*#__PURE__*/function (_HTMLElement) {
    _inherits(PriceRange, _HTMLElement);

    var _super = _createSuper(PriceRange);

    function PriceRange() {
      _classCallCheck(this, PriceRange);

      return _super.apply(this, arguments);
    }

    _createClass(PriceRange, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this = this;

        this.rangeLowerBound = this.querySelector('.price-range__range-group input:first-child');
        this.rangeHigherBound = this.querySelector('.price-range__range-group input:last-child');
        this.textInputLowerBound = this.querySelector('.price-range__input:first-child input');
        this.textInputHigherBound = this.querySelector('.price-range__input:last-child input'); // Select whole text on focus for text field to improve user experience

        this.textInputLowerBound.addEventListener('focus', function () {
          return _this.textInputLowerBound.select();
        });
        this.textInputHigherBound.addEventListener('focus', function () {
          return _this.textInputHigherBound.select();
        }); // Keep in sync the range with the text input fields

        this.textInputLowerBound.addEventListener('change', function (event) {
          event.target.value = Math.max(Math.min(parseInt(event.target.value), parseInt(_this.textInputHigherBound.value || event.target.max) - 1), event.target.min);
          _this.rangeLowerBound.value = event.target.value;

          _this.rangeLowerBound.parentElement.style.setProperty('--range-min', "".concat(parseInt(_this.rangeLowerBound.value) / parseInt(_this.rangeLowerBound.max) * 100, "%"));
        });
        this.textInputHigherBound.addEventListener('change', function (event) {
          event.target.value = Math.min(Math.max(parseInt(event.target.value), parseInt(_this.textInputLowerBound.value || event.target.min) + 1), event.target.max);
          _this.rangeHigherBound.value = event.target.value;

          _this.rangeHigherBound.parentElement.style.setProperty('--range-max', "".concat(parseInt(_this.rangeHigherBound.value) / parseInt(_this.rangeHigherBound.max) * 100, "%"));
        });
        this.rangeLowerBound.addEventListener('change', function (event) {
          _this.textInputLowerBound.value = event.target.value;

          _this.textInputLowerBound.dispatchEvent(new Event('change', {
            bubbles: true
          }));
        });
        this.rangeHigherBound.addEventListener('change', function (event) {
          _this.textInputHigherBound.value = event.target.value;

          _this.textInputHigherBound.dispatchEvent(new Event('change', {
            bubbles: true
          }));
        }); // We also have to bound the two range sliders

        this.rangeLowerBound.addEventListener('input', function (event) {
          event.target.value = Math.min(parseInt(event.target.value), parseInt(_this.textInputHigherBound.value || event.target.max) - 1); // Bound the value

          event.target.parentElement.style.setProperty('--range-min', "".concat(parseInt(event.target.value) / parseInt(event.target.max) * 100, "%"));
          _this.textInputLowerBound.value = event.target.value;
        });
        this.rangeHigherBound.addEventListener('input', function (event) {
          event.target.value = Math.max(parseInt(event.target.value), parseInt(_this.textInputLowerBound.value || event.target.min) + 1); // Bound the value

          event.target.parentElement.style.setProperty('--range-max', "".concat(parseInt(event.target.value) / parseInt(event.target.max) * 100, "%"));
          _this.textInputHigherBound.value = event.target.value;
        });
      }
    }]);

    return PriceRange;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  window.customElements.define('price-range', PriceRange);

  (function () {
    // First, we register all plugins that are used for all pages
    new Collapsible();
    new Modal();
    new Responsive();

    if (window.theme.pageType !== 'password' && window.theme.pageType !== 'gift_card') {
      new LoadingBar();
    }

    var sections = new SectionContainer();
    sections.register('header', HeaderSection);
    sections.register('footer', FooterSection);
    sections.register('sidebar-menu', SidebarMenuSection);
    sections.register('cart', CartSection);
    sections.register('newsletter-popup', NewsletterPopupSection); // Sections used on index

    sections.register('slideshow', SlideshowSection);
    sections.register('collection-list', CollectionListSection);
    sections.register('article-list', ArticleList);
    sections.register('featured-product', FeaturedProductSection);
    sections.register('image-with-text-block', ImageWithTextBlockSection);
    sections.register('timeline', TimelineSection);
    sections.register('map', MapSection);
    sections.register('featured-collections', FeaturedCollectionsSection);
    sections.register('shop-the-look', ShopTheLookSection);
    sections.register('testimonials', TestimonialsSection);
    sections.register('background-video', BackgroundVideoSection); // Sections used on product page

    sections.register('product', ProductSection);
    sections.register('product-recommendations', ProductRecommendationsSection); // Sections used on collection page

    sections.register('collection', CollectionSection); // Sections used on blog page

    sections.register('article-list', ArticleList); // Sections used on article page

    sections.register('article', ArticleSection); // Sections used on content pages

    sections.register('faq', FaqSection); // Sections used on login page

    sections.register('login', LoginSection); // Sections used on addresses page

    sections.register('addresses', AddressesSection); // Sections used on gift card page

    sections.register('gift-card', GiftCardSection); // Sections used on different pages

    sections.register('recently-viewed-products', RecentlyViewedProductsSection);
    sections.register('shop-now', ShopNowSection);
    /**
     * ----------------------------------------------------------------------------
     * FLICKITY
     *
     * Starting from iOS 11, Safari on iOS is experiencing a bug that prevents
     * event.preventDefault to be called on dynamically added listeners, which is
     * what Flickity is using.
     *
     * The bug is coming from iOS but it impacts indirectly Flickity. A temporary
     * fix has been suggested here: https://github.com/metafizzy/flickity/issues/740
     * and that we are using here as a temporary workaround, that should be removed
     * once the bug is fixed on iOS
     * ----------------------------------------------------------------------------
     */

    Flickity.defaults.dragThreshold = 7;

    (function () {
      var touchingCarousel = false,
          touchStartCoords;
      document.body.addEventListener('touchstart', function (e) {
        if (e.target.closest('.flickity-slider')) {
          touchingCarousel = true;
        } else {
          touchingCarousel = false;
          return;
        }

        touchStartCoords = {
          x: e.touches[0].pageX,
          y: e.touches[0].pageY
        };
      });
      document.body.addEventListener('touchmove', function (e) {
        if (!(touchingCarousel && e.cancelable)) {
          return;
        }

        var moveVector = {
          x: e.touches[0].pageX - touchStartCoords.x,
          y: e.touches[0].pageY - touchStartCoords.y
        };
        if (Math.abs(moveVector.x) > Flickity.defaults.dragThreshold) e.preventDefault();
      }, {
        passive: false
      });
    })();
    /**
     * ----------------------------------------------------------------------------
     * FLICKITY 2
     *
     * Starting from iOS 15, Safari on iOS automatically starts to expand/collapse
     * the bottom bar as soon as you do even a minor diagonal movement. This is causing
     * a performance issue on iOS15 as it does a lot of reflow. We therefore have to
     * patch Flickity to make sure they re-size the carousel only when the width is
     * changed, by ignoring the height
     * ----------------------------------------------------------------------------
     */


    (function () {
      if (window.Flickity) {
        var originalResizeMethod = window.Flickity.prototype.resize,
            lastWidth = window.innerWidth;

        window.Flickity.prototype.resize = function () {
          if (window.innerWidth === lastWidth && this.maxCellHeight > 0) {
            return;
          }

          lastWidth = window.innerWidth;
          originalResizeMethod.apply(this, arguments); // Call original method
        };
      }
    })();
    /**
     * ----------------------------------------------------------------------------
     * RTE
     * ----------------------------------------------------------------------------
     */


    (function () {
      // We wrap each RTE table by a specific class to allow wrapping
      Dom.nodeListToArray(document.querySelectorAll('.Rte table')).forEach(function (table) {
        table.outerHTML = '<div class="TableWrapper">' + table.outerHTML + '</div>';
      });
      Dom.nodeListToArray(document.querySelectorAll('.Rte iframe')).forEach(function (iframe) {
        // We scope the wrapping only for YouTube and Vimeo
        if (iframe.src.indexOf('youtube') !== -1 || iframe.src.indexOf('youtu.be') !== -1 || iframe.src.indexOf('vimeo') !== -1) {
          iframe.outerHTML = '<div class="VideoWrapper">' + iframe.outerHTML + '</div>'; // Re-set the src attribute on each iframe after page load for Chrome's "incorrect iFrame content on 'back'" bug.
          // https://code.google.com/p/chromium/issues/detail?id=395791. Need to specifically target video and admin bar

          iframe.src = iframe.src;
        }
      });
    })();
    /**
     * ----------------------------------------------------------------------------
     * UTILS
     * ----------------------------------------------------------------------------
     */


    (function () {
      var documentDelegate = new domDelegate.Delegate(document.body),
          announcementBar = document.querySelector('.AnnouncementBar');
      documentDelegate.on('click', '[href^="#"], [data-href]', function (event, target) {
        var selector = target.hasAttribute('href') ? target.getAttribute('href') : target.getAttribute('data-href');

        if (selector === '#' || selector === '#main') {
          return;
        }

        var element = document.querySelector(selector),
            offset = parseInt(target.getAttribute('data-offset') || 0);

        if (announcementBar) {
          offset -= announcementBar.clientHeight;
        }

        if (target.hasAttribute('data-focus-on-click')) {
          var prevScrollY = window.pageYOffset;
          element.focus({
            preventScroll: true
          }); // hack to fix scroll jump after focus

          if (window.pageYOffset !== prevScrollY) {
            window.scrollTo(window.pageXOffset, prevScrollY);
          }

          element.focus();
        }

        window.scrollTo({
          behavior: 'smooth',
          top: element.offsetTop - offset
        });
        event.preventDefault();
      });
    })();

    (function () {
      var windowWidth = window.innerWidth,
          headerSection = document.getElementById('shopify-section-header');
      window.addEventListener('resize', function () {
        var newWidth = -1;
        fastdom.measure(function () {
          newWidth = window.innerWidth;
        });
        fastdom.mutate(function () {
          if (newWidth === windowWidth) {
            return;
          }

          windowWidth = newWidth;
          document.documentElement.style.setProperty('--window-height', window.innerHeight + 'px');

          if (headerSection) {
            document.documentElement.style.setProperty('--header-height', headerSection.clientHeight + 'px');
          }
        });
      });
    })();

    (function () {
      function handleFirstTab(event) {
        if (event.keyCode === 9) {
          document.body.classList.add('is-tabbing');
          window.removeEventListener('keydown', handleFirstTab);
        }
      }

      window.addEventListener('keydown', handleFirstTab);
    })();
    /**
     * ----------------------------------------------------------------------------
     * ANIMATION
     *
     * Important: this has to be at the very end of the file
     * ----------------------------------------------------------------------------
     */


    if (window.theme.showPageTransition) {
      PageTransition.getInstance();
    }
  })();

})));

/*******
 *
 * Custom add to cart for upsell
 *
 *******/

function uAddToCart(id) {
  event.preventDefault(); // Prevent form to be submitted

  let formElement = {
   'items': [{
    'id': id,
    'quantity': 1
    }]
  };
  console.log(formElement)
  document.dispatchEvent(new CustomEvent('theme:loading:start')); // Then we add the product in Ajax

  //fetch(window.Shopify.routes.root + 'cart/add.js', {
  
  fetch("".concat(window.routes.cartAddUrl, ".js"), {
    body: JSON.stringify(formElement),
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header

    }
  }).then(function (response) {
    document.dispatchEvent(new CustomEvent('theme:loading:end'));
    var quantityElement = formElement.querySelector('[name="quantity"]');

    if (response.ok) {
      addToCartButton.removeAttribute('disabled'); // We simply trigger an event so the mini-cart can re-render

      _this4.element.dispatchEvent(new CustomEvent('product:added', {
        bubbles: true,
        detail: {
          variant: _this4.currentVariant,
          quantity: quantityElement ? parseInt(quantityElement.value) : 1
        }
      }));
    } else {
      response.json().then(function (content) {
        var errorMessageElement = document.createElement('span');
        errorMessageElement.className = 'ProductForm__Error Alert Alert--error';
        errorMessageElement.innerHTML = content['description'];
        addToCartButton.removeAttribute('disabled');
        addToCartButton.insertAdjacentElement('afterend', errorMessageElement);
        setTimeout(function () {
          errorMessageElement.remove();
        }, 2500);
      });
    }
  });
  event.preventDefault();
}