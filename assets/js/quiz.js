/*
 * Maths Explorer — quiz engine
 * One question at a time, instant feedback, encouraging tone, no timers.
 */
(function () {
  "use strict";

  function starsFor(percent) {
    if (percent >= 80) return 3;
    if (percent >= 50) return 2;
    return 1;
  }

  function starString(n) {
    return "\u2605".repeat(n) + "\u2606".repeat(3 - n);
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  var ENCOURAGE = ["Great work!", "Nice one!", "You've got this!", "Well done!", "Keep going!"];

  function render(container, opts) {
    var questions = opts.questions || [];
    var year = opts.year;
    var topicId = opts.topicId;
    var onComplete = opts.onComplete || function () {};

    var index = 0;
    var correctCount = 0;

    container.innerHTML = "";

    var live = el("div", "visually-hidden");
    live.setAttribute("aria-live", "polite");
    container.appendChild(live);

    function draw() {
      container.innerHTML = "";
      container.appendChild(live);

      if (index >= questions.length) return drawResult();

      var q = questions[index];

      // Progress dots
      var progress = el("div", "quiz-progress");
      progress.setAttribute("role", "progressbar");
      progress.setAttribute("aria-valuemin", "1");
      progress.setAttribute("aria-valuemax", String(questions.length));
      progress.setAttribute("aria-valuenow", String(index + 1));
      progress.setAttribute("aria-label", "Question " + (index + 1) + " of " + questions.length);
      for (var i = 0; i < questions.length; i++) {
        progress.appendChild(el("span", "quiz-dot" + (i <= index ? " quiz-dot--done" : "")));
      }
      container.appendChild(progress);

      container.appendChild(el("p", "muted", "Question " + (index + 1) + " of " + questions.length));

      var qText = el("p", "quiz-question", q.q);
      container.appendChild(qText);

      var optionsWrap = el("div", "quiz-options");
      var feedback = el("div", "quiz-feedback");
      feedback.setAttribute("aria-live", "polite");

      var answered = false;

      q.options.forEach(function (optionText, optionIndex) {
        var btn = el("button", "quiz-option", optionText);
        btn.type = "button";
        btn.addEventListener("click", function () {
          if (answered) return;
          answered = true;

          var buttons = optionsWrap.querySelectorAll("button");
          buttons.forEach(function (b) { b.disabled = true; });

          var isCorrect = optionIndex === q.answer;
          if (isCorrect) {
            correctCount++;
            btn.classList.add("correct");
            live.textContent = "Correct. " + (q.explain || "");
            feedback.innerHTML = "";
            feedback.appendChild(el("span", "fb-icon", "\u2705"));
            feedback.appendChild(el("span", null, ENCOURAGE[index % ENCOURAGE.length] + " " + (q.explain || "")));
            Speech.speak("Correct! " + (q.explain || ""));
          } else {
            btn.classList.add("wrong");
            buttons[q.answer].classList.add("correct");
            feedback.innerHTML = "";
            feedback.appendChild(el("span", "fb-icon", "\u{1F4A1}"));
            feedback.appendChild(el("span", null, "Almost! The answer is " + q.options[q.answer] + ". " + (q.explain || "")));
            live.textContent = "Not quite. The answer is " + q.options[q.answer] + ". " + (q.explain || "");
            Speech.speak("Almost! The answer is " + q.options[q.answer] + ". " + (q.explain || ""));
          }

          var actions = el("div", "quiz-actions");
          var next = el("button", "btn", index + 1 >= questions.length ? "See my score" : "Next question \u2192");
          next.type = "button";
          next.addEventListener("click", function () {
            index++;
            draw();
          });
          actions.appendChild(next);
          container.appendChild(feedback);
          container.appendChild(actions);
          next.focus();
        });
        optionsWrap.appendChild(btn);
      });

      container.appendChild(optionsWrap);
    }

    function drawResult() {
      var total = questions.length;
      var percent = total ? Math.round((correctCount / total) * 100) : 0;
      var stars = starsFor(percent);
      var best = onComplete({ percent: percent, stars: stars, correct: correctCount, total: total });

      var wrap = el("div", "quiz-result");
      var emoji = stars === 3 ? "\u{1F31F}" : stars === 2 ? "\u{1F44F}" : "\u{1F4AA}";
      wrap.appendChild(el("span", "result-emoji", emoji));
      wrap.appendChild(el("div", "result-stars", starString(stars)));
      wrap.appendChild(el("div", "result-score", "You got " + correctCount + " out of " + total + "!"));
      var message = stars === 3 ? "Amazing! You really know this topic." :
                    stars === 2 ? "Well done! You are getting really good at this." :
                                  "Good try! Have another go and see if you can beat it.";
      wrap.appendChild(el("p", null, message));
      if (best != null) {
        wrap.appendChild(el("p", "muted", "Best score so far: " + best + "%"));
      }

      var actions = el("div", "quiz-actions center");
      var again = el("button", "btn btn--ghost", "\u{1F501} Try again");
      again.type = "button";
      again.addEventListener("click", function () {
        index = 0;
        correctCount = 0;
        draw();
        container.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      actions.appendChild(again);
      wrap.appendChild(actions);

      container.appendChild(wrap);
      Speech.speak("You got " + correctCount + " out of " + total + ". " + message);
      container.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    draw();
  }

  window.Quiz = { render: render, starsFor: starsFor, starString: starString };
})();
