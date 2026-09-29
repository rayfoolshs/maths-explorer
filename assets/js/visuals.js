/*
 * Maths Explorer — visual examples for topic pages.
 * Each entry returns a self-contained HTML string (SVG + styled elements).
 * Every visual has role="img" and an aria-label so screen readers can describe it.
 */
(function () {
  "use strict";

  /* ------------------------------------------------------------- helpers */
  function chips(items, className) {
    return '<div class="viz-row ' + (className || "") + '">' +
      items.map(function (i) { return '<span class="viz-chip">' + i + "</span>"; }).join("") +
      "</div>";
  }

  function arrow(label) {
    return '<span class="viz-arrow" aria-hidden="true">' + (label || "\u2192") + "</span>";
  }

  // Ten-frame: specs is an array of 10 entries (colour string or null).
  function tenFrame(specs, label) {
    var cells = "";
    for (var i = 0; i < 10; i++) {
      var c = specs[i];
      cells += '<span class="tf-cell' + (c ? " tf-on" : "") + '"' + (c ? ' style="background:' + c + '"' : "") + "></span>";
    }
    return '<div class="tf" role="img" aria-label="' + (label || "ten frame") + '">' + cells + "</div>";
  }

  function dots(n, colour, label) {
    var s = "";
    for (var i = 0; i < n; i++) s += '<span class="dot" style="background:' + colour + '"></span>';
    return '<div class="dots" role="img" aria-label="' + (label || n + " counters") + '">' + s + "</div>";
  }

  function RED() { return "#EF4444"; }
  function BLUE() { return "#3B82F6"; }
  function ORANGE() { return "#F59E0B"; }
  function GREEN() { return "#22C55E"; }

  function labelledRow(items) {
    return '<div class="viz-row">' + items.map(function (it) {
      return '<div class="viz-tile"><span class="viz-tile-art">' + it.art + '</span><span class="viz-tile-label">' + it.label + "</span></div>";
    }).join("") + "</div>";
  }

  /* ------------------------------------------------------------ visuals */
  var VISUALS = {

    "numbers-to-120": function () {
      return '<div role="img" aria-label="Numbers placed in order from smallest to biggest: 9, 15, 21, 34">' +
        '<p class="viz-caption">Smallest \u2192 biggest</p>' +
        '<div class="viz-row viz-order">' +
        '<span class="viz-chip viz-chip--sm">9</span>' + arrow() +
        '<span class="viz-chip viz-chip--sm">15</span>' + arrow() +
        '<span class="viz-chip viz-chip--sm">21</span>' + arrow() +
        '<span class="viz-chip viz-chip--sm">34</span>' +
        "</div></div>";
    },

    "groups-of-10": function () {
      return '<div role="img" aria-label="Three ten frames, each holding ten counters, making thirty">' +
        '<p class="viz-caption">10 + 10 + 10 = 30</p>' +
        '<div class="viz-row">' +
        '<div class="viz-frame-wrap">' + tenFrame([RED(), RED(), RED(), RED(), RED(), RED(), RED(), RED(), RED(), RED()], "one group of ten") + '<span class="viz-frame-label">10</span></div>' +
        '<div class="viz-frame-wrap">' + tenFrame([BLUE(), BLUE(), BLUE(), BLUE(), BLUE(), BLUE(), BLUE(), BLUE(), BLUE(), BLUE()], "one group of ten") + '<span class="viz-frame-label">20</span></div>' +
        '<div class="viz-frame-wrap">' + tenFrame([GREEN(), GREEN(), GREEN(), GREEN(), GREEN(), GREEN(), GREEN(), GREEN(), GREEN(), GREEN()], "one group of ten") + '<span class="viz-frame-label">30</span></div>' +
        "</div></div>";
    },

    "add-subtract-20": function () {
      return '<div role="img" aria-label="Nine red and one blue counter make ten, then six more makes sixteen">' +
        '<p class="viz-caption">9 + 1 = 10, then 10 + 6 = 16</p>' +
        '<div class="viz-row">' +
        tenFrame([RED(), RED(), RED(), RED(), RED(), RED(), RED(), RED(), RED(), BLUE()], "nine red and one blue counter make ten") +
        '<span class="viz-op">+</span>' +
        dots(6, BLUE(), "six counters") +
        '<span class="viz-op">=</span>' +
        '<span class="viz-answer">16</span>' +
        "</div></div>";
    },

    "number-facts-10": function () {
      return '<div role="img" aria-label="A ten frame with six red and four blue counters filling it completely">' +
        '<p class="viz-caption">6 + 4 = 10</p>' +
        '<div class="viz-row">' +
        tenFrame([RED(), RED(), RED(), RED(), RED(), RED(), BLUE(), BLUE(), BLUE(), BLUE()], "six red and four blue counters make ten") +
        '<span class="viz-legend"><span class="viz-key" style="background:' + RED() + '"></span>6' +
        '<span class="viz-key" style="background:' + BLUE() + '"></span>4</span>' +
        "</div></div>";
    },

    "grouping-sharing": function () {
      return '<div role="img" aria-label="Twelve cookies shared into three equal groups of four">' +
        '<p class="viz-caption">12 shared into 3 groups = 4 each</p>' +
        '<div class="viz-row">' +
        ["", "", ""].map(function () {
          return '<div class="viz-group">' + "🍪🍪🍪🍪" + "</div>";
        }).join("") +
        "</div></div>";
    },

    "halves": function () {
      return '<div role="img" aria-label="A circle cut into two equal halves with one half shaded">' +
        '<p class="viz-caption">Two equal parts = one half each</p>' +
        '<div class="viz-row">' +
        '<svg viewBox="0 0 120 120" class="viz-svg viz-svg--sm" aria-hidden="true">' +
        '<circle cx="60" cy="60" r="52" fill="#FFF1D6" stroke="#E5A800" stroke-width="4"/>' +
        '<path d="M60 8 A52 52 0 0 0 60 112 Z" fill="#F59E0B" stroke="#E5A800" stroke-width="4"/>' +
        '<line x1="60" y1="8" x2="60" y2="112" stroke="#E5A800" stroke-width="4"/>' +
        "</svg>" +
        '<span class="viz-half-label">half<br><strong>½</strong></span>' +
        "</div></div>";
    },

    "equals-sign": function () {
      return '<div role="img" aria-label="A balance scale that stays level, with three plus two on one side and five on the other">' +
        '<p class="viz-caption">Both sides are the same \u2192 balanced</p>' +
        '<div class="viz-row">' +
        '<svg viewBox="0 0 260 130" class="viz-svg" aria-hidden="true">' +
        '<rect x="126" y="34" width="8" height="76" rx="3" fill="#8B5CF6"/>' +
        '<rect x="96" y="108" width="68" height="10" rx="5" fill="#8B5CF6"/>' +
        '<rect x="40" y="30" width="180" height="8" rx="4" fill="#8B5CF6"/>' +
        '<line x1="66" y1="38" x2="66" y2="66" stroke="#8B5CF6" stroke-width="3"/>' +
        '<line x1="194" y1="38" x2="194" y2="66" stroke="#8B5CF6" stroke-width="3"/>' +
        '<ellipse cx="66" cy="72" rx="34" ry="9" fill="#EDE9FE" stroke="#8B5CF6" stroke-width="3"/>' +
        '<ellipse cx="194" cy="72" rx="34" ry="9" fill="#EDE9FE" stroke="#8B5CF6" stroke-width="3"/>' +
        '<text x="66" y="77" text-anchor="middle" font-size="15" font-weight="700" fill="#5B21B6">3 + 2</text>' +
        '<text x="194" y="77" text-anchor="middle" font-size="15" font-weight="700" fill="#5B21B6">5</text>' +
        '<text x="130" y="24" text-anchor="middle" font-size="16" font-weight="700" fill="#5B21B6">=</text>' +
        "</svg>" +
        "</div></div>";
    },

    "repeating-patterns": function () {
      return '<div role="img" aria-label="A repeating pattern of red and blue circles; the repeating unit red-blue is highlighted, and the next circle is blue">' +
        '<p class="viz-caption">The repeating unit is <strong>🔴🔵</strong></p>' +
        '<div class="viz-row viz-seq">' +
        '<span class="viz-unit">🔴🔵</span>' +
        '<span class="viz-seq-rest">🔴🔵🔴</span>' +
        '<span class="viz-next">🔵</span>' +
        '<span class="viz-next-label">next!</span>' +
        "</div></div>";
    },

    "money": function () {
      return '<div role="img" aria-label="Australian coins 5c, 10c, 20c, 50c, one dollar and two dollars, and notes five, ten, twenty, fifty and one hundred dollars">' +
        '<p class="viz-caption">Coins: 5c, 10c, 20c, 50c, $1, $2</p>' +
        '<div class="viz-row viz-coins">' +
        ["5c", "10c", "20c", "50c", "$1", "$2"].map(function (v) {
          return '<span class="viz-coin">' + v + "</span>";
        }).join("") +
        "</div>" +
        '<p class="viz-caption viz-caption--gap">Notes: $5, $10, $20, $50, $100</p>' +
        '<div class="viz-row viz-notes">' +
        ["$5", "$10", "$20", "$50", "$100"].map(function (v) {
          return '<span class="viz-note">' + v + "</span>";
        }).join("") +
        "</div></div>";
    },

    "shapes-2d": function () {
      return '<div role="img" aria-label="A triangle with three sides and three corners, a square with four sides, a rectangle with four sides and a circle with none">' +
        '<div class="viz-row">' +
        '<svg viewBox="0 0 100 100" class="viz-svg viz-svg--sm" aria-hidden="true"><polygon points="50,12 90,88 10,88" fill="#DBEAFE" stroke="#3B82F6" stroke-width="5" stroke-linejoin="round"/></svg>' +
        '<svg viewBox="0 0 100 100" class="viz-svg viz-svg--sm" aria-hidden="true"><rect x="14" y="14" width="72" height="72" rx="6" fill="#DCFCE7" stroke="#22C55E" stroke-width="5"/></svg>' +
        '<svg viewBox="0 0 100 100" class="viz-svg viz-svg--sm" aria-hidden="true"><rect x="8" y="24" width="84" height="52" rx="6" fill="#FEF3C7" stroke="#F59E0B" stroke-width="5"/></svg>' +
        '<svg viewBox="0 0 100 100" class="viz-svg viz-svg--sm" aria-hidden="true"><circle cx="50" cy="50" r="40" fill="#F3E8FF" stroke="#8B5CF6" stroke-width="5"/></svg>' +
        "</div>" +
        '<div class="viz-row viz-shape-labels"><span>3 sides</span><span>4 sides</span><span>4 sides</span><span>0 corners</span></div>' +
        "</div>";
    },

    "objects-3d": function () {
      return '<div role="img" aria-label="A cube, a cylinder, a sphere and a cone">' +
        labelledRow([
          { art: "🧊", label: "cube" },
          { art: "🥫", label: "cylinder" },
          { art: "⚽", label: "sphere" },
          { art: "🍦", label: "cone" }
        ]) +
        "</div>";
    },

    "length-area": function () {
      function bar(units, colour, label) {
        var s = "";
        for (var i = 0; i < units; i++) s += '<span class="unit-cell" style="background:' + colour + '"></span>';
        return '<div class="measure-row"><span class="measure-name">' + label + '</span><span class="measure-bar">' + s + '</span><span class="measure-count">' + units + "</span></div>";
      }
      return '<div role="img" aria-label="A pencil three cubes long and a crayon five cubes long, so the crayon is longer">' +
        '<p class="viz-caption">Measured with the same unit (cubes)</p>' +
        bar(3, "#F59E0B", "pencil") +
        bar(5, "#3B82F6", "crayon") +
        '<p class="viz-caption">5 is more than 3, so the crayon is longer.</p>' +
        "</div>";
    },

    "capacity-mass": function () {
      return '<div role="img" aria-label="A cup holds less than a bottle, which holds less than a bucket. A rock is heavier than a feather.">' +
        '<p class="viz-caption">Capacity \u2014 how much it holds</p>' +
        '<div class="viz-row viz-containers">' +
        '<span class="viz-cont">🥃<small>cup</small></span>' + arrow("less than") +
        '<span class="viz-cont">🧴<small>bottle</small></span>' + arrow("less than") +
        '<span class="viz-cont viz-cont--lg">🪣<small>bucket</small></span>' +
        "</div>" +
        '<p class="viz-caption viz-caption--gap">Mass \u2014 how heavy</p>' +
        '<div class="viz-row viz-balance">' +
        '<span class="viz-cont">🪨<small>rock</small></span><span class="viz-heavy">heavier</span>' +
        '<span class="viz-cont">🪶<small>feather</small></span>' +
        "</div></div>";
    },

    "time": function () {
      return '<div role="img" aria-label="A clock face showing three o\'clock, and digital times three o\'clock and half past two">' +
        '<div class="viz-row">' +
        '<svg viewBox="0 0 120 120" class="viz-svg viz-svg--sm" aria-hidden="true">' +
        '<circle cx="60" cy="60" r="54" fill="#fff" stroke="#3B82F6" stroke-width="5"/>' +
        '<text x="60" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="#1E3A8A">12</text>' +
        '<text x="98" y="65" text-anchor="middle" font-size="14" font-weight="700" fill="#1E3A8A">3</text>' +
        '<text x="60" y="104" text-anchor="middle" font-size="14" font-weight="700" fill="#1E3A8A">6</text>' +
        '<text x="22" y="65" text-anchor="middle" font-size="14" font-weight="700" fill="#1E3A8A">9</text>' +
        '<line x1="60" y1="60" x2="92" y2="60" stroke="#14213D" stroke-width="6" stroke-linecap="round"/>' +
        '<line x1="60" y1="60" x2="60" y2="26" stroke="#EF4444" stroke-width="4" stroke-linecap="round"/>' +
        '<circle cx="60" cy="60" r="5" fill="#14213D"/>' +
        "</svg>" +
        '<div class="viz-digital"><span class="viz-clock">3:00</span><small>three o\'clock</small></div>' +
        '<div class="viz-digital"><span class="viz-clock">2:30</span><small>half past two</small></div>' +
        "</div></div>";
    },

    "directions": function () {
      var cells = ["🟢", "➡️", "➡️", "⬜", "⬜", "⬇️", "⬜", "⬜", "🏁"];
      return '<div role="img" aria-label="A grid showing a path: start, go right, right, then down, down to the finish">' +
        '<p class="viz-caption">Follow the path: right, right, down, down</p>' +
        '<div class="viz-pathgrid">' +
        cells.map(function (c) { return '<span class="pg-cell">' + c + "</span>"; }).join("") +
        "</div></div>";
    },

    "chance": function () {
      return '<div role="img" aria-label="A chance scale from zero impossible to one certain, with might happen in the middle">' +
        '<p class="viz-caption">How likely is it?</p>' +
        '<div class="chance-scale">' +
        '<div class="cs-bar"></div>' +
        '<div class="cs-labels"><span>0<br>impossible</span><span>maybe</span><span>1<br>certain</span></div>' +
        "</div>" +
        '<div class="viz-row viz-chance-chips"><span class="viz-chip viz-chip--sm">🌧️ might rain</span><span class="viz-chip viz-chip--sm">🌅 sun rises (certain)</span><span class="viz-chip viz-chip--sm">🦄 unicorn (impossible)</span></div>' +
        "</div>";
    },

    "data": function () {
      function row(emoji, count, label) {
        return '<div class="picto-row"><span class="picto-label">' + label + '</span><span class="picto-marks">' + emoji.repeat(count) + '</span><span class="picto-count">' + count + "</span></div>";
      }
      return '<div role="img" aria-label="A picture graph: apple five, banana three, grapes two">' +
        '<p class="viz-caption">Favourite fruit \u2014 picture graph</p>' +
        '<div class="picto">' +
        row("🍎", 5, "apple") + row("🍌", 3, "banana") + row("🍇", 2, "grapes") +
        "</div>" +
        '<p class="viz-caption">Most popular: 🍎 (5)</p>' +
        "</div>";
    },

    /* ============================ Year 2 ============================ */
    "2:numbers-to-1000": function () {
      var cells = "";
      for (var n = 96; n <= 105; n++) {
        cells += '<span class="h-cell' + (n === 100 ? " h-on" : "") + '">' + n + "</span>";
      }
      return '<div role="img" aria-label="A number chart from 96 to 105. After 99 comes 100, and the zeros hold the tens and ones places.">' +
        '<p class="viz-caption">After 99 comes 100</p>' +
        '<div class="hundreds">' + cells + "</div>" +
        '<p class="viz-caption">In 100, the zeros show there are no tens and no ones.</p>' +
        "</div>";
    },

    "2:skip-counting": function () {
      var seq = [9, 12, 15, 18, 21];
      var parts = [];
      seq.forEach(function (n, i) {
        parts.push('<span class="viz-chip viz-chip--sm">' + n + "</span>");
        if (i < seq.length - 1) parts.push('<span class="viz-jump">+3\u2192</span>');
      });
      return '<div role="img" aria-label="Skip counting by threes: 9, 12, 15, 18, 21">' +
        '<p class="viz-caption">Skip count by 3s</p>' +
        '<div class="viz-row">' + parts.join("") + "</div></div>";
    },

    "2:place-value": function () {
      function blocks(cls, count) {
        var s = "";
        for (var i = 0; i < count; i++) s += '<span class="' + cls + '"></span>';
        return s;
      }
      return '<div role="img" aria-label="The number 234 shown with base ten blocks: two hundreds, three tens and four ones">' +
        '<p class="viz-caption">234 = 200 + 30 + 4</p>' +
        '<div class="bt-row">' +
        '<div class="bt-col"><div class="bt-group">' + blocks("bt-100", 2) + '</div><span class="bt-caption">2 hundreds = 200</span></div>' +
        '<div class="bt-col"><div class="bt-group">' + blocks("bt-10", 3) + '</div><span class="bt-caption">3 tens = 30</span></div>' +
        '<div class="bt-col"><div class="bt-group">' + blocks("bt-1", 4) + '</div><span class="bt-caption">4 ones = 4</span></div>' +
        "</div></div>";
    },

    "2:number-facts-10": function () {
      return '<div role="img" aria-label="Working out 13 minus 5 by making ten: 13 minus 3 is 10, then 10 minus 2 is 8">' +
        '<p class="viz-caption">13 \u2212 5: make 10 first</p>' +
        '<div class="viz-row">' +
        '<span class="viz-chip">13</span><span class="viz-jump">\u22123\u2192</span>' +
        '<span class="viz-chip">10</span><span class="viz-jump">\u22122\u2192</span>' +
        '<span class="viz-answer">8</span>' +
        "</div>" +
        '<p class="viz-caption">5 is 3 + 2, so we take away 3, then 2.</p>' +
        "</div>";
    },

    "2:add-subtract": function () {
      return '<div role="img" aria-label="Working out 34 plus 25 by jumping: 34 plus 20 is 54, then plus 5 is 59">' +
        '<p class="viz-caption">34 + 25: add tens, then ones</p>' +
        '<div class="viz-row">' +
        '<span class="viz-chip">34</span><span class="viz-jump">+20\u2192</span>' +
        '<span class="viz-chip">54</span><span class="viz-jump">+5\u2192</span>' +
        '<span class="viz-answer">59</span>' +
        "</div></div>";
    },

    "2:arrays": function () {
      var d = "";
      for (var i = 0; i < 12; i++) d += '<span class="dot" style="background:#3B82F6"></span>';
      return '<div role="img" aria-label="An array with 3 rows and 4 columns of blue dots, 12 dots altogether">' +
        '<p class="viz-caption">3 rows of 4 = 12</p>' +
        '<div class="viz-row">' +
        '<div class="viz-array" style="grid-template-columns:repeat(4, 24px)">' + d + "</div>" +
        '<div class="viz-col-stack">' +
        '<span class="viz-chip viz-chip--sm">3 \u00d7 4 = 12</span>' +
        '<span class="viz-chip viz-chip--sm">12 \u00f7 3 = 4</span>' +
        "</div>" +
        "</div></div>";
    },

    "2:fractions": function () {
      function bar(parts, shaded, label) {
        var cells = "";
        for (var i = 0; i < parts; i++) cells += '<span class="frac-part' + (i < shaded ? " f-on" : "") + '"></span>';
        return '<div class="frac-strip"><div class="frac-label">' + label + '</div><div class="frac-bar">' + cells + "</div></div>";
      }
      return '<div role="img" aria-label="Fraction bars showing that one half equals two quarters equals four eighths">' +
        bar(2, 1, "1/2") + bar(4, 2, "2/4") + bar(8, 4, "4/8") +
        '<p class="viz-caption">All three shaded parts are the same amount.</p>' +
        "</div>";
    },

    "2:compare-numbers": function () {
      return '<div role="img" aria-label="45 is greater than 23. The greater than sign opens towards the bigger number.">' +
        '<p class="viz-caption">The wide end faces the bigger number</p>' +
        '<div class="viz-row viz-order">' +
        '<span class="viz-chip">45</span>' +
        '<span class="viz-op" aria-hidden="true">\u003e</span>' +
        '<span class="viz-chip">23</span>' +
        '<span class="viz-croc" aria-hidden="true">🐊</span>' +
        "</div>" +
        '<p class="viz-caption">45 is greater than 23, so 45 \u003e 23.</p>' +
        "</div>";
    },

    "2:patterns": function () {
      var seq = [5, 10, 15, "?", 20];
      var parts = [];
      seq.forEach(function (n, i) {
        parts.push('<span class="viz-chip viz-chip--sm' + (n === "?" ? " viz-chip--missing" : "") + '">' + n + "</span>");
        if (i < seq.length - 1) parts.push('<span class="viz-jump">+5\u2192</span>');
      });
      return '<div role="img" aria-label="A growing pattern: 5, 10, 15, question mark, 20. The rule is add five.">' +
        '<p class="viz-caption">Growing by 5 each time</p>' +
        '<div class="viz-row">' + parts.join("") + "</div>" +
        '<p class="viz-caption">The missing number is 15.</p>' +
        "</div>";
    },

    "2:money": function () {
      return '<div role="img" aria-label="Coins adding to one dollar: fifty cents plus twenty cents plus twenty cents plus ten cents equals one dollar">' +
        '<p class="viz-caption">50c + 20c + 20c + 10c = $1</p>' +
        '<div class="viz-row viz-coins">' +
        '<span class="viz-coin">50c</span><span class="viz-op">+</span>' +
        '<span class="viz-coin">20c</span><span class="viz-op">+</span>' +
        '<span class="viz-coin">20c</span><span class="viz-op">+</span>' +
        '<span class="viz-coin">10c</span><span class="viz-op">=</span>' +
        '<span class="viz-note">$1</span>' +
        "</div></div>";
    },

    "2:shapes-2d": function () {
      return '<div role="img" aria-label="A triangle, square, rectangle, pentagon, hexagon and circle">' +
        '<div class="viz-row">' +
        '<svg viewBox="0 0 100 100" class="viz-svg viz-svg--xs" aria-hidden="true"><polygon points="50,14 90,88 10,88" fill="#DBEAFE" stroke="#3B82F6" stroke-width="5" stroke-linejoin="round"/></svg>' +
        '<svg viewBox="0 0 100 100" class="viz-svg viz-svg--xs" aria-hidden="true"><rect x="14" y="14" width="72" height="72" rx="6" fill="#DCFCE7" stroke="#22C55E" stroke-width="5"/></svg>' +
        '<svg viewBox="0 0 100 100" class="viz-svg viz-svg--xs" aria-hidden="true"><rect x="8" y="26" width="84" height="48" rx="6" fill="#FEF3C7" stroke="#F59E0B" stroke-width="5"/></svg>' +
        '<svg viewBox="0 0 100 100" class="viz-svg viz-svg--xs" aria-hidden="true"><polygon points="50,10 90,38 74,86 26,86 10,38" fill="#FCE7F3" stroke="#EC4899" stroke-width="5" stroke-linejoin="round"/></svg>' +
        '<svg viewBox="0 0 100 100" class="viz-svg viz-svg--xs" aria-hidden="true"><polygon points="50,10 88,32 88,72 50,92 12,72 12,32" fill="#EDE9FE" stroke="#8B5CF6" stroke-width="5" stroke-linejoin="round"/></svg>' +
        '<svg viewBox="0 0 100 100" class="viz-svg viz-svg--xs" aria-hidden="true"><circle cx="50" cy="50" r="40" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="5"/></svg>' +
        "</div>" +
        '<div class="viz-row viz-shape-labels"><span>triangle<br>3 sides</span><span>square<br>4 sides</span><span>rectangle<br>4 sides</span><span>pentagon<br>5 sides</span><span>hexagon<br>6 sides</span><span>circle<br>0 corners</span></div>' +
        "</div>";
    },

    "2:objects-3d": function () {
      return '<div role="img" aria-label="A cube, a cylinder, a cone, a sphere and a rectangular prism">' +
        labelledRow([
          { art: "🧊", label: "cube" },
          { art: "🥫", label: "cylinder" },
          { art: "🍦", label: "cone" },
          { art: "⚽", label: "sphere" },
          { art: "📦", label: "rectangular prism" }
        ]) + "</div>";
    },

    "2:length-area": function () {
      function bar(units, colour, label) {
        var s = "";
        for (var i = 0; i < units; i++) s += '<span class="unit-cell" style="background:' + colour + '"></span>';
        return '<div class="measure-row"><span class="measure-name">' + label + '</span><span class="measure-bar">' + s + '</span><span class="measure-count">' + units + "</span></div>";
      }
      function areaGrid(cols, rows, colour) {
        var s = "";
        for (var i = 0; i < cols * rows; i++) s += '<span class="unit-cell" style="background:' + colour + '"></span>';
        return '<div class="measure-bar" style="display:grid;grid-template-columns:repeat(' + cols + ',28px);gap:3px">' + s + "</div>";
      }
      return '<div role="img" aria-label="A book is six cubes long and a pencil is four cubes long. A shape covered by nine squares has more area than one covered by six.">' +
        '<p class="viz-caption">Length \u2014 measured in the same unit</p>' +
        bar(6, "#22C55E", "book") + bar(4, "#F59E0B", "pencil") +
        '<p class="viz-caption viz-caption--gap">Area \u2014 how many squares cover it?</p>' +
        '<div class="viz-row">' + areaGrid(3, 3, "#3B82F6") + '<span class="viz-op">vs</span>' + areaGrid(3, 2, "#8B5CF6") + "</div>" +
        "</div>";
    },

    "2:capacity-mass": function () {
      return '<div role="img" aria-label="A bottle holds four cups and a jug holds seven cups, so the jug holds more. A rock is heavier than a feather.">' +
        '<p class="viz-caption">Capacity \u2014 how many cups it holds</p>' +
        '<div class="viz-row">' +
        '<span class="viz-cont">🍼<small>bottle = 4 cups</small></span>' +
        '<span class="viz-op" aria-hidden="true">\u003c</span>' +
        '<span class="viz-cont viz-cont--lg">🫗<small>jug = 7 cups</small></span>' +
        "</div>" +
        '<p class="viz-caption viz-caption--gap">Mass \u2014 how heavy</p>' +
        '<div class="viz-row viz-balance">' +
        '<span class="viz-cont">🪨<small>rock</small></span><span class="viz-heavy">heavier</span>' +
        '<span class="viz-cont">🪶<small>feather</small></span>' +
        "</div></div>";
    },

    "2:time": function () {
      var cal = '<span class="cal-cell cal-head">M</span><span class="cal-cell cal-head">T</span><span class="cal-cell cal-head">W</span><span class="cal-cell cal-head">T</span><span class="cal-cell cal-head">F</span><span class="cal-cell cal-head">S</span><span class="cal-cell cal-head">S</span>';
      for (var i = 1; i <= 14; i++) cal += '<span class="cal-cell' + (i === 12 ? " cal-on" : "") + '">' + i + "</span>";
      return '<div role="img" aria-label="A clock showing half past three, a digital clock showing quarter past six, and a calendar week">' +
        '<div class="viz-row">' +
        '<svg viewBox="0 0 120 120" class="viz-svg viz-svg--sm" aria-hidden="true">' +
        '<circle cx="60" cy="60" r="54" fill="#fff" stroke="#3B82F6" stroke-width="5"/>' +
        '<text x="60" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="#1E3A8A">12</text>' +
        '<text x="98" y="65" text-anchor="middle" font-size="14" font-weight="700" fill="#1E3A8A">3</text>' +
        '<text x="60" y="104" text-anchor="middle" font-size="14" font-weight="700" fill="#1E3A8A">6</text>' +
        '<text x="22" y="65" text-anchor="middle" font-size="14" font-weight="700" fill="#1E3A8A">9</text>' +
        '<line x1="60" y1="60" x2="84" y2="74" stroke="#14213D" stroke-width="6" stroke-linecap="round"/>' +
        '<line x1="60" y1="60" x2="60" y2="94" stroke="#EF4444" stroke-width="4" stroke-linecap="round"/>' +
        '<circle cx="60" cy="60" r="5" fill="#14213D"/>' +
        "</svg>" +
        '<div class="viz-digital"><span class="viz-clock">6:15</span><small>quarter past 6</small></div>' +
        "</div>" +
        '<p class="viz-caption viz-caption--gap">A calendar shows the days of a month</p>' +
        '<div class="viz-cal" aria-hidden="true">' + cal + "</div>" +
        "</div>";
    },

    "2:maps": function () {
      var cells = ["🏠", "➡️", "➡️", "⬜", "⬜", "⬇️", "⬜", "⬜", "🏫"];
      return '<div role="img" aria-label="A simple map showing a path from home to school: right, right, down, down">' +
        '<p class="viz-caption">A path from home to school</p>' +
        '<div class="viz-pathgrid">' +
        cells.map(function (c) { return '<span class="pg-cell">' + c + "</span>"; }).join("") +
        "</div></div>";
    },

    "2:chance": function () {
      return '<div role="img" aria-label="Events sorted into possible and impossible. Possible: rain tomorrow, rolling a four, picking a red apple. Impossible: a fish walking, rolling a seven on a one-to-six dice, the moon turning green.">' +
        '<div class="viz-two-col">' +
        '<div class="chance-col chance-col--possible"><h4>Possible ✅</h4><ul><li>🌧️ It rains tomorrow</li><li>🎲 Rolling a 4</li><li>🍎 Picking a red apple</li></ul></div>' +
        '<div class="chance-col chance-col--impossible"><h4>Impossible ❌</h4><ul><li>🐟 A fish walks to school</li><li>🎲 Rolling a 7 on a 1\u20136 dice</li><li>🌙 The moon turns green</li></ul></div>' +
        "</div></div>";
    },

    "2:data": function () {
      function row(emoji, count, label) {
        return '<div class="picto-row"><span class="picto-label">' + label + '</span><span class="picto-marks">' + emoji.repeat(count) + '</span><span class="picto-count">' + count + "</span></div>";
      }
      return '<div role="img" aria-label="A picture graph where one picture is one vote: apples five, bananas three, grapes two">' +
        '<p class="viz-caption">One picture = one vote</p>' +
        '<div class="picto">' + row("🍎", 5, "apple") + row("🍌", 3, "banana") + row("🍇", 2, "grapes") + "</div>" +
        '<p class="viz-caption">Most: apples (5). Least: grapes (2).</p>' +
        "</div>";
    }
  };

  window.Visuals = {
    forTopic: function (year, topicId) {
      var fn = VISUALS[year + ":" + topicId] || (String(year) === "1" ? VISUALS[topicId] : null);
      return fn ? fn() : null;
    }
  };
})();
