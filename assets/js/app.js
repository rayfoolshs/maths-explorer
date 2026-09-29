/*
 * Maths Explorer — app shell, hash router and page rendering.
 */
(function () {
  "use strict";

  var DATA = window.MATHS_CURRICULUM;

  /* ---------------------------------------------------------------- helpers */
  function h(tag, props, children) {
    var node = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach(function (k) {
        if (k === "class") node.className = props[k];
        else if (k === "text") node.textContent = props[k];
        else if (k === "html") node.innerHTML = props[k];
        else if (k === "onclick") node.addEventListener("click", props[k]);
        else if (k === "attrs") Object.keys(props.attrs).forEach(function (a) { node.setAttribute(a, props.attrs[a]); });
        else node.setAttribute(k, props[k]);
      });
    }
    (children || []).forEach(function (child) {
      if (child == null) return;
      node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    });
    return node;
  }

  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }

  function showToast(message, kind) {
    var existing = document.getElementById("toast");
    if (existing) existing.remove();
    var toast = h("div", {
      class: "toast" + (kind ? " toast--" + kind : ""),
      attrs: { id: "toast", role: "status", "aria-live": "polite" }
    }, [message]);
    document.body.appendChild(toast);
    requestAnimationFrame(function () { toast.classList.add("toast--show"); });
    setTimeout(function () {
      toast.classList.remove("toast--show");
      setTimeout(function () { if (toast.parentNode) toast.remove(); }, 400);
    }, 6000);
  }

  function findTopic(yearData, topicId) {
    for (var i = 0; i < yearData.topics.length; i++) {
      if (yearData.topics[i].id === topicId) return yearData.topics[i];
    }
    return null;
  }

  function getYearCard(yearId) {
    return DATA.yearCards.filter(function (c) { return c.year === yearId; })[0];
  }

  /* ------------------------------------------------------------- progress */
  var Progress = {
    KEY: "mathsExplorer.progress",
    all: function () {
      try { return JSON.parse(localStorage.getItem(Progress.KEY)) || {}; } catch (e) { return {}; }
    },
    get: function (year, topicId) { return Progress.all()[year + ":" + topicId]; },
    setBest: function (year, topicId, percent) {
      var store = Progress.all();
      var key = year + ":" + topicId;
      var best = store[key] || 0;
      if (percent > best) { store[key] = percent; best = percent; }
      try { localStorage.setItem(Progress.KEY, JSON.stringify(store)); } catch (e) { /* ignore */ }
      return best;
    },
    yearStars: function (year, topicCount) {
      var store = Progress.all();
      var earned = 0;
      Object.keys(store).forEach(function (k) {
        if (k.indexOf(year + ":") === 0) earned++;
      });
      return { earned: earned, total: topicCount };
    }
  };

  /* ------------------------------------------------------- shared builders */
  function readAloudButton(text) {
    var btn = h("button", { class: "speak-btn", attrs: { type: "button", "aria-label": "Read this aloud", title: "Read aloud" } }, ["\u{1F50A}"]);
    btn.addEventListener("click", function () { Speech.speak(text); });
    return btn;
  }

  function strandMeta(strandId) {
    return DATA.strands[strandId] || { name: strandId, icon: "\u{1F4D8}", colour: "#2563EB" };
  }

  function homeTip() {
    try { if (localStorage.getItem("mathsExplorer.tipDismissed") === "1") return null; } catch (e) { /* ignore */ }
    var tip = h("div", { class: "tip" }, [
      h("span", { class: "tip-icon", text: "\u{1F50A}" }),
      h("span", { class: "tip-text", text: "Read-aloud needs a browser with sound. If you hear nothing, open index.html in Chrome, Edge or Safari (not an embedded preview)." })
    ]);
    var test = h("button", { class: "btn btn--ghost", attrs: { type: "button" } }, ["Test sound"]);
    test.addEventListener("click", function () { Speech.speak("Read aloud is working. Great!"); });
    var dismiss = h("button", { class: "btn btn--ghost", attrs: { type: "button" } }, ["Got it"]);
    dismiss.addEventListener("click", function () {
      try { localStorage.setItem("mathsExplorer.tipDismissed", "1"); } catch (e) { /* ignore */ }
      tip.remove();
    });
    tip.appendChild(test);
    tip.appendChild(dismiss);
    return tip;
  }

  /* ---------------------------------------------------------------- pages */
  function renderHome(main) {
    clear(main);

    var hero = h("section", { class: "hero" }, [
      h("span", { class: "hero-emoji", text: "\u{1F9EE}" }),
      h("h1", { text: "Welcome to " + DATA.siteName }),
      h("p", { text: "Pick a year level to see what you will learn, what you will be able to do, and to try a quiz. Made for the Western Australian Mathematics curriculum." })
    ]);
    main.appendChild(hero);

    var readAll = h("div", { class: "center" }, []);
    var readBtn = h("button", { class: "btn btn--ghost", attrs: { type: "button" } }, ["\u{1F50A} Read this page"]);
    readBtn.addEventListener("click", function () {
      Speech.speak("Welcome to Maths Explorer. Pick a year level to begin.");
    });
    readAll.appendChild(readBtn);
    main.appendChild(readAll);

    var tip = homeTip();
    if (tip) main.appendChild(tip);

    var grid = h("div", { class: "year-grid", attrs: { style: "margin-top:24px" } });

    DATA.yearCards.forEach(function (card) {
      var badge = h("span", { class: "year-badge" + (card.available ? " year-badge--ready" : ""), text: card.available ? "Ready to explore" : "Coming soon" });
      var bar = h("span", { class: "year-bar", attrs: { style: "background:" + card.colour } });
      var inner = [
        bar,
        h("span", { class: "year-icon", text: card.icon }),
        h("span", { class: "year-label", text: card.label }),
        badge
      ];

      if (card.available) {
        var link = h("a", { class: "year-card", attrs: { href: "#/year/" + card.year, "aria-label": card.label + ", ready to explore" } }, inner);
        grid.appendChild(link);
      } else {
        var locked = h("div", { class: "year-card", attrs: { "aria-disabled": "true", role: "link", "aria-label": card.label + ", coming soon" } }, inner);
        grid.appendChild(locked);
      }
    });

    main.appendChild(grid);
  }

  function comingSoon(main, card) {
    clear(main);
    main.appendChild(h("a", { class: "back-link", attrs: { href: "#/" } }, ["\u2190 Back to all years"]));
    var box = h("div", { class: "card center" }, [
      h("div", { class: "result-emoji", text: "\u{1F6A7}" }),
      h("h1", { text: card.label + " is coming soon" }),
      h("p", { class: "muted", text: "We are building one year at a time. Year 1 is ready to explore right now!" }),
      h("a", { class: "btn", attrs: { href: "#/year/1" } }, ["Explore Year 1"])
    ]);
    main.appendChild(box);
  }

  function renderYear(main, yearId) {
    var card = getYearCard(yearId);
    var yearData = DATA.yearData[yearId];
    if (!card || !yearData) { comingSoon(main, card || { label: "This year" }); return; }

    clear(main);

    main.appendChild(h("a", { class: "back-link", attrs: { href: "#/" } }, ["\u2190 Back to all years"]));

    // Hero
    var heroTop = h("div", { class: "year-hero-top" }, [
      h("span", { class: "year-hero-icon", text: yearData.icon }),
      h("div", {}, [
        h("h1", { text: yearData.label, attrs: { style: "margin:0" } }),
        h("p", { class: "muted", text: yearData.tagline, attrs: { style: "margin:0" } })
      ])
    ]);
    var hero = h("section", { class: "year-hero", attrs: { style: "border-top-color:" + yearData.colour } }, [heroTop]);

    var listenBtn = h("button", { class: "btn btn--ghost", attrs: { type: "button", style: "margin-top:14px" } }, ["\u{1F50A} Listen"]);
    listenBtn.addEventListener("click", function () { Speech.speak(yearData.kidIntro); });
    hero.appendChild(h("p", { class: "kid-intro", text: yearData.kidIntro }));
    hero.appendChild(listenBtn);
    main.appendChild(hero);

    // What I'll be able to do
    var canDo = h("section", { class: "can-do" }, [
      h("h2", {}, ["\u2705 What I will be able to do"])
    ]);
    var ul = h("ul", {});
    yearData.canDo.forEach(function (item) {
      ul.appendChild(h("li", {}, [h("span", { class: "tick", text: "\u2713" }), h("span", { text: item })]));
    });
    canDo.appendChild(ul);
    var canDoRead = h("button", { class: "btn btn--ghost", attrs: { type: "button", style: "margin-top:14px" } }, ["\u{1F50A} Read list"]);
    canDoRead.addEventListener("click", function () { Speech.speak("By the end of " + yearData.label + ", you will be able to: " + yearData.canDo.join(". ")); });
    canDo.appendChild(canDoRead);
    main.appendChild(canDo);

    // Topics grouped by strand
    main.appendChild(h("h2", { class: "section-title" }, ["\u{1F4DA} What I am learning this year"]));

    Object.keys(DATA.strands).forEach(function (strandId) {
      var topics = yearData.topics.filter(function (t) { return t.strand === strandId; });
      if (!topics.length) return;
      var meta = strandMeta(strandId);

      var block = h("section", { class: "strand-block" });
      block.appendChild(h("div", { class: "strand-heading", attrs: { style: "background:" + meta.colour } }, [meta.icon, meta.name]));

      var grid = h("div", { class: "topic-grid" });
      topics.forEach(function (topic) {
        var best = Progress.get(yearId, topic.id);
        var stars = best ? window.Quiz.starString(window.Quiz.starsFor(best)) : "\u2606\u2606\u2606";
        var cardEl = h("a", { class: "topic-card", attrs: { href: "#/year/" + yearId + "/topic/" + topic.id } }, [
          h("span", { class: "topic-icon", text: topic.icon }),
          h("span", {}, [
            h("span", { class: "topic-name", text: topic.name }),
            h("span", { class: "topic-summary", text: topic.summary }),
            h("span", { class: "stars", attrs: { style: "color:#F59E0B", title: best ? "Best score " + best + "%" : "Not tried yet" }, text: stars })
          ])
        ]);
        grid.appendChild(cardEl);
      });
      block.appendChild(grid);
      main.appendChild(block);
    });

    // Grown-ups link
    main.appendChild(h("div", { class: "center", attrs: { style: "margin-top:28px" } }, [
      h("a", { class: "btn btn--ghost", attrs: { href: "#/year/" + yearId + "/grown-ups" } }, ["\u{1F468}\u200D\u{1F469}\u200D\u{1F467} For grown-ups: full curriculum details"])
    ]));
  }

  function renderTopic(main, yearId, topicId) {
    var yearData = DATA.yearData[yearId];
    var card = getYearCard(yearId);
    if (!yearData) { comingSoon(main, card || { label: "This year" }); return; }
    var topic = findTopic(yearData, topicId);
    if (!topic) { renderYear(main, yearId); return; }

    clear(main);

    main.appendChild(h("a", { class: "back-link", attrs: { href: "#/year/" + yearId } }, ["\u2190 Back to " + yearData.label]));

    var meta = strandMeta(topic.strand);

    // Header
    var header = h("div", { class: "topic-header" }, [
      h("span", { class: "topic-icon", text: topic.icon }),
      h("div", {}, [
        h("div", { class: "topic-strand", attrs: { style: "color:" + meta.colour }, text: meta.name }),
        h("h1", { text: topic.name, attrs: { style: "margin:0" } })
      ])
    ]);
    main.appendChild(header);

    var listenTopic = h("button", { class: "btn btn--ghost", attrs: { type: "button", style: "margin-bottom:18px" } }, ["\u{1F50A} Listen to this topic"]);
    listenTopic.addEventListener("click", function () {
      Speech.speak(topic.name + ". " + topic.learn.join(" "));
    });
    main.appendChild(listenTopic);

    // Learn
    var learnCard = h("section", { class: "card" }, [h("h2", {}, ["\u{1F4A1} Let's learn"])]);
    var learnList = h("div", { class: "learn-list" });
    topic.learn.forEach(function (text) {
      learnList.appendChild(h("div", { class: "learn-item" }, [
        readAloudButton(text),
        h("span", { class: "learn-text", text: text })
      ]));
    });
    learnCard.appendChild(learnList);
    main.appendChild(learnCard);

    // Example
    if (topic.example) {
      var ex = h("section", { class: "card" }, []);
      var exBox = h("div", { class: "example-box" }, [
        h("h3", {}, ["\u{1F9E9} Example: " + topic.example.prompt])
      ]);

      var viz = window.Visuals && window.Visuals.forTopic(yearId, topic.id);
      if (viz) {
        var vizWrap = h("div", { class: "example-visual" });
        vizWrap.innerHTML = '<div class="example-visual__caption">\u{1F440} Look at this</div>' + viz;
        exBox.appendChild(vizWrap);
      }

      var ol = h("ol", {});
      topic.example.steps.forEach(function (s) { ol.appendChild(h("li", { text: s })); });
      exBox.appendChild(ol);
      ex.appendChild(exBox);
      main.appendChild(ex);
    }

    // Quiz
    var quizCard = h("section", { class: "card" }, [h("h2", {}, ["\u{1F3AF} Your turn: quick quiz"])]);
    var quizMount = h("div", {});
    quizCard.appendChild(quizMount);
    main.appendChild(quizCard);

    window.Quiz.render(quizMount, {
      questions: topic.quiz,
      year: yearId,
      topicId: topic.id,
      onComplete: function (result) {
        return Progress.setBest(yearId, topic.id, result.percent);
      }
    });

    // Next steps
    main.appendChild(h("div", { class: "center", attrs: { style: "margin-top:20px" } }, [
      h("a", { class: "btn btn--ghost", attrs: { href: "#/year/" + yearId } }, ["\u{1F4DA} Back to all topics"])
    ]));
  }

  function renderGrownUps(main, yearId) {
    var yearData = DATA.yearData[yearId];
    var card = getYearCard(yearId);
    if (!yearData) { comingSoon(main, card || { label: "This year" }); return; }

    clear(main);
    main.appendChild(h("a", { class: "back-link", attrs: { href: "#/year/" + yearId } }, ["\u2190 Back to " + yearData.label]));

    var wrap = h("div", { class: "grownups" });
    wrap.appendChild(h("h1", {}, ["For grown-ups: " + yearData.label]));
    wrap.appendChild(h("div", { class: "notice", text: DATA.curriculumNote + ". The text below is quoted from the School Curriculum and Standards Authority documents. The learner pages use friendly, plain-language versions." }));

    wrap.appendChild(h("section", { class: "card" }, [
      h("h2", {}, ["\u{1F3C6} Achievement standard"]),
      h("div", { class: "prose", text: yearData.achievementStandard })
    ]));

    wrap.appendChild(h("section", { class: "card" }, [
      h("h2", {}, ["\u{1F4D8} Year level description"]),
      h("div", { class: "prose", text: yearData.yearLevelDescription })
    ]));

    var contentCard = h("section", { class: "card" }, [h("h2", {}, ["\u{1F4CB} Content by strand"])]);
    Object.keys(DATA.strands).forEach(function (strandId) {
      var topics = yearData.topics.filter(function (t) { return t.strand === strandId; });
      if (!topics.length) return;
      var meta = strandMeta(strandId);
      var group = h("div", { attrs: { style: "margin-bottom:16px" } }, [
        h("h3", { attrs: { style: "color:" + meta.colour }, text: meta.icon + " " + meta.name })
      ]);
      var ul = h("ul", {});
      topics.forEach(function (topic) {
        ul.appendChild(h("li", {}, [
          h("strong", { text: topic.name + ": " }),
          h("span", { text: topic.summary })
        ]));
      });
      group.appendChild(ul);
      contentCard.appendChild(group);
    });
    wrap.appendChild(contentCard);

    main.appendChild(wrap);
  }

  /* --------------------------------------------------------------- router */
  function route() {
    var main = document.getElementById("app");
    var hash = location.hash.replace(/^#\/?/, "");
    var parts = hash.split("/").filter(Boolean);

    Speech.stop();

    if (parts.length === 0) { renderHome(main); }
    else if (parts[0] === "year" && parts[1]) {
      if (parts[2] === "topic" && parts[3]) renderTopic(main, parts[1], parts[3]);
      else if (parts[2] === "grown-ups") renderGrownUps(main, parts[1]);
      else renderYear(main, parts[1]);
    } else { renderHome(main); }

    window.scrollTo(0, 0);
    var heading = main.querySelector("h1");
    if (heading) { heading.setAttribute("tabindex", "-1"); heading.focus({ preventScroll: true }); }
  }

  /* -------------------------------------------------------------- toolbar */
  function wireToolbar() {
    var root = document.documentElement;

    var btnText = document.getElementById("btn-text");
    var btnEasy = document.getElementById("btn-easyread");
    var btnContrast = document.getElementById("btn-contrast");
    var btnMotion = document.getElementById("btn-motion");
    var btnRead = document.getElementById("btn-read");
    var btnStop = document.getElementById("btn-stop");
    var btnReadLabel = btnRead.querySelector(".tool-label");

    function setPressed(btn, on) { btn.setAttribute("aria-pressed", on ? "true" : "false"); }

    function refresh() {
      var s = A11y.state;
      btnText.textContent = "\u{1F520} " + A11y.scaleLabel();
      setPressed(btnEasy, s.easyRead);
      setPressed(btnContrast, s.contrast);
      setPressed(btnMotion, s.reduceMotion);
    }

    btnText.addEventListener("click", function () { A11y.cycleTextSize(); refresh(); });
    btnEasy.addEventListener("click", function () { A11y.toggle("easyRead"); refresh(); });
    btnContrast.addEventListener("click", function () { A11y.toggle("contrast"); refresh(); });
    btnMotion.addEventListener("click", function () { A11y.toggle("reduceMotion"); refresh(); });

    btnRead.addEventListener("click", function () {
      var main = document.getElementById("app");
      Speech.speak(main ? main.innerText : document.body.innerText);
    });
    btnStop.addEventListener("click", function () { Speech.stop(); });

    Speech.onStatus(function (status) {
      if (!btnReadLabel) return;
      if (status === "start") {
        btnReadLabel.textContent = "Reading…";
      } else if (status === "end" || status === "empty") {
        btnReadLabel.textContent = "Read";
      } else if (status === "error" || status === "unsupported") {
        btnReadLabel.textContent = "Read";
        showToast("Read-aloud didn’t start. Check that your sound is on, and open the site in Chrome, Edge or Safari.", "error");
      }
    });

    if (!Speech.supported) {
      btnRead.disabled = true;
      btnStop.disabled = true;
      btnRead.title = "Read-aloud is not supported in this browser";
    }

    document.addEventListener("a11y:change", refresh);
    refresh();
  }

  /* ------------------------------------------------------------------ boot */
  document.addEventListener("DOMContentLoaded", function () {
    wireToolbar();
    window.addEventListener("hashchange", route);
    if (!location.hash) location.replace("#/");
    route();
  });
})();
