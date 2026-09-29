/*
 * Maths Explorer — read-aloud with the Web Speech API.
 *
 * Improvements over a naive implementation:
 *  - Avoids the Chrome cancel()->speak() race by deferring the first utterance.
 *  - Chunks long text into sentences, so Chrome/Edge do not cut off after ~15s.
 *  - Reports status (start / end / error / unsupported) so the UI can tell the user.
 */
(function () {
  "use strict";

  var synth = window.speechSynthesis;
  var supported = !!synth && "SpeechSynthesisUtterance" in window;
  var chosenVoice = null;
  var statusHandler = null;
  var cancelRequested = false;

  function pickVoice() {
    if (!supported) return;
    var voices = synth.getVoices() || [];
    if (!voices.length) return;
    // Prefer a local Australian English voice, then any local English, then any English.
    chosenVoice =
      voices.find(function (v) { return /^en[-_]AU/i.test(v.lang) && v.localService; }) ||
      voices.find(function (v) { return /^en[-_]AU/i.test(v.lang); }) ||
      voices.find(function (v) { return /^en/i.test(v.lang) && v.localService; }) ||
      voices.find(function (v) { return /^en/i.test(v.lang); }) ||
      voices[0];
  }

  if (supported) {
    pickVoice();
    synth.onvoiceschanged = pickVoice;
  }

  function emit(status, detail) {
    if (typeof statusHandler === "function") {
      try { statusHandler(status, detail); } catch (e) { /* ignore */ }
    }
  }

  // Split text into sentence-sized chunks (max ~180 characters each).
  function chunk(text) {
    var clean = String(text || "").replace(/\s+/g, " ").trim();
    if (!clean) return [];
    var sentences = clean.match(/[^.!?]+[.!?]*/g) || [clean];
    var chunks = [];
    var current = "";
    sentences.forEach(function (sentence) {
      var piece = sentence.trim();
      if (!piece) return;
      if (current && (current + " " + piece).length > 180) {
        chunks.push(current);
        current = piece;
      } else {
        current = current ? current + " " + piece : piece;
      }
    });
    if (current) chunks.push(current);
    return chunks;
  }

  function makeUtterance(text) {
    var u = new SpeechSynthesisUtterance(text);
    u.lang = "en-AU";
    u.rate = 0.92;
    u.pitch = 1.05;
    u.volume = 1;
    if (chosenVoice) u.voice = chosenVoice;
    return u;
  }

  var Speech = {
    supported: supported,

    onStatus: function (fn) { statusHandler = fn; },

    voiceName: function () { return chosenVoice ? chosenVoice.name : null; },

    speak: function (text) {
      if (!supported) { emit("unsupported"); return; }

      cancelRequested = false;
      synth.cancel();

      var chunks = chunk(text);
      if (!chunks.length) { emit("empty"); return; }

      var index = 0;
      var started = false;
      var startTimer = null;

      function clearStartTimer() {
        if (startTimer) { clearTimeout(startTimer); startTimer = null; }
      }

      function next() {
        if (cancelRequested) return;
        if (index >= chunks.length) { emit("end"); return; }

        var utterance = makeUtterance(chunks[index]);
        index++;

        utterance.onstart = function () {
          if (!started) {
            started = true;
            clearStartTimer();
            emit("start");
          }
        };
        utterance.onend = function () { next(); };
        utterance.onerror = function (event) {
          clearStartTimer();
          emit("error", event && event.error ? event.error : "unknown");
        };

        synth.speak(utterance);
      }

      // If nothing has started within ~1.2s, assume the browser blocked or failed it.
      startTimer = setTimeout(function () {
        if (!started && !synth.speaking && !synth.pending) emit("error", "no-output");
      }, 1200);

      // Defer so the preceding cancel() has fully taken effect (Chrome race workaround).
      setTimeout(next, 40);
    },

    stop: function () {
      if (!supported) return;
      cancelRequested = true;
      synth.cancel();
      emit("end");
    }
  };

  window.Speech = Speech;
})();
