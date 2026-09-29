/*
 * Maths Explorer — accessibility controls
 * Persists preferences in localStorage and applies them to <html>.
 */
(function () {
  "use strict";

  var KEY = "mathsExplorer.a11y";
  var BASE_FONT = 16;                 // px
  var SCALES = [1, 1.15, 1.3];        // text size steps

  var defaults = { scaleIndex: 0, easyRead: false, contrast: false, reduceMotion: false };

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return Object.assign({}, defaults);
      return Object.assign({}, defaults, JSON.parse(raw));
    } catch (e) {
      return Object.assign({}, defaults);
    }
  }

  function save(state) {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  function apply(state) {
    var root = document.documentElement;
    var scale = SCALES[state.scaleIndex] || 1;
    root.style.fontSize = (BASE_FONT * scale) + "px";
    root.setAttribute("data-easyread", state.easyRead ? "true" : "false");
    root.setAttribute("data-contrast", state.contrast ? "true" : "false");
    root.setAttribute("data-motion", state.reduceMotion ? "off" : "on");
  }

  var state = load();
  apply(state);

  var A11y = {
    get state() { return Object.assign({}, state); },

    set: function (key, value) {
      state[key] = value;
      apply(state);
      save(state);
      document.dispatchEvent(new CustomEvent("a11y:change", { detail: Object.assign({}, state) }));
    },

    cycleTextSize: function () {
      return A11y.set("scaleIndex", (state.scaleIndex + 1) % SCALES.length);
    },

    toggle: function (key) {
      return A11y.set(key, !state[key]);
    },

    scaleLabel: function () {
      return ["Normal text", "Bigger text", "Biggest text"][state.scaleIndex];
    }
  };

  window.A11y = A11y;
})();
