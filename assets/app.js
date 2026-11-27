(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  function store(k, v) {
    try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; }
  }

  /* ---------- estado: idioma y tema ---------- */
  var lang = store("lang");
  if (lang !== "es" && lang !== "en") lang = (navigator.language || "es").slice(0, 2) === "en" ? "en" : "es";
  var theme = store("theme");
  if (theme !== "dark" && theme !== "light") theme = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", theme);
    var m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute("content", theme === "dark" ? "#0d1117" : "#ffffff");
  }

  /* ---------- helpers ---------- */
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }
  function fmt(n) {
    var s = String(n).replace(/\B(?=(\d{3})+(?!\d))/g, lang === "es" ? " " : ",");
    return s;
  }
  function norm(s) {
    return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }

  /* ---------- escritura del héroe ---------- */
  var heroTimer = 0;
  function typeInto(node, text, speed, done) {
    var i = 0;
    var cur = node.querySelector(".cur");
    (function step() {
      node.firstChild && node.firstChild.nodeType === 3 ? (node.firstChild.nodeValue = text.slice(0, i)) : node.insertBefore(document.createTextNode(text.slice(0, i)), node.firstChild);
      if (i++ < text.length) heroTimer = setTimeout(step, speed);
      else if (done) done();
    })();
  }
  function setHero(animate) {
    var D = DATA[lang];
    var name = $("#t-name"), role = $("#t-role"), focus = $("#t-focus");
    $("#t-cmd").textContent = D.cmd;
    $("#open-a").textContent = D.open[0];
    $("#open-b").textContent = D.open[1];
    clearTimeout(heroTimer);
    var cur = '<span class="cur"></span>';
    if (!animate || reduce) {
      name.textContent = D.name; role.textContent = D.role; focus.innerHTML = ""; focus.appendChild(document.createTextNode(D.focus));
      focus.insertAdjacentHTML("beforeend", cur);
      return;
    }
    name.textContent = ""; role.textContent = ""; focus.innerHTML = cur;
    typeInto(name, D.name, 45, function () {
      typeInto(role, D.role, 22, function () { typeInto(focus, D.focus, 22); });
    });
  }

  /* ---------- contenido ---------- */
  function renderI18n() {
    var D = DATA[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (n) {
      var k = n.getAttribute("data-i18n");
      if (D.ui[k] !== undefined) {
        if (k === "term.hint") n.innerHTML = D.ui[k]; else n.textContent = D.ui[k];
      }
    });
    $("#btn-lang").textContent = lang === "es" ? "EN" : "ES";
  }

  function renderAbout() {
    var box = $("#about-txt"); box.innerHTML = "";
    DATA[lang].about.forEach(function (t) { box.appendChild(el("p", "", t)); });
  }

  function renderMetrics() {
    var box = $("#metrics"); box.innerHTML = "";
    DATA[lang].metrics.forEach(function (m) {
      var d = el("div", "m"); d.style.setProperty("--c", m.c);
      var b = el("b", "", m.t ? m.t : "0");
      if (!m.t) { b.setAttribute("data-n", m.n); b.setAttribute("data-s", m.s || ""); }
      d.appendChild(b); d.appendChild(el("span", "", m.l)); d.appendChild(el("small", "", m.sub));
      box.appendChild(d);
    });
    var items = box.querySelectorAll("b[data-n]");
    function run() {
      items.forEach(function (b) {
        var n = +b.getAttribute("data-n"), s = b.getAttribute("data-s");
        if (reduce) { b.textContent = fmt(n) + s; return; }
        var t0 = null, dur = 1500;
        (function f(ts) {
          if (t0 === null) t0 = ts;
          var p = Math.min(1, (ts - t0) / dur), e = 1 - Math.pow(1 - p, 3);
          b.textContent = fmt(Math.round(n * e)) + (p === 1 ? s : "");
          if (p < 1) requestAnimationFrame(f);
        })(performance.now());
      });
    }
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { run(); io.disconnect(); } });
      }, { threshold: 0.4 });
      io.observe(box);
    } else run();
  }

  function renderStack() {
    var box = $("#stack-box"); box.innerHTML = "";
    DATA[lang].stack.forEach(function (r) {
      var row = el("div", "row"); row.appendChild(el("b", "", r[0]));
      var ul = el("ul", "tags"); ul.style.setProperty("--c", r[1]);
      r[2].forEach(function (t, i) { var li = el("li", "", t); li.style.transitionDelay = (i * 60) + "ms"; ul.appendChild(li); });
      row.appendChild(ul); box.appendChild(row);
    });
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { box.classList.add("in"); io.disconnect(); } });
      }, { threshold: 0.15 });
      io.observe(box);
    } else box.classList.add("in");
  }

  function renderProjects() {
    var box = $("#proj-box"); box.innerHTML = "";
    DATA[lang].projects.forEach(function (p) {
      var c = el("article", "proj"); c.style.setProperty("--c", p.c);
      c.appendChild(el("h3", "", p.title));
      c.appendChild(el("p", "t", p.tags));
      c.appendChild(el("p", "", p.desc));
      if (p.st[1]) {
        var a = el("a", "stat", p.st[0]); a.href = p.st[1]; a.rel = "noopener"; c.appendChild(a);
      } else c.appendChild(el("span", "stat", p.st[0]));
      box.appendChild(c);
    });
  }

  function renderLead() {
    var box = $("#lead-box"); box.innerHTML = "";
    DATA[lang].lead.forEach(function (l, i) {
      var li = el("li"); li.style.setProperty("--c", l.c); li.style.animationDelay = (i * 0.3) + "s";
      li.appendChild(el("time", "", l.time));
      var d = el("div"); d.appendChild(el("b", "", l.title)); d.appendChild(el("span", "", l.sub));
      li.appendChild(d); box.appendChild(li);
    });
  }

  /* ---------- preguntale a mi CV ---------- */
  var chat = $("#chat");
  function msg(text, who, src) {
    var m = el("div", "msg " + (who === "u" ? "u" : "b"), text);
    if (src) m.appendChild(el("small", "", src));
    chat.appendChild(m); chat.scrollTop = chat.scrollHeight;
    return m;
  }
  function answerLocal(q) {
    var words = norm(q).split(/[^a-z0-9]+/).filter(Boolean), best = -1, bs = 0;
    var n = DATA[lang].facts.length;
    for (var idx = 0; idx < n; idx++) {
      /* se puntúa con las palabras clave de ambos idiomas: preguntar en ES o EN funciona igual */
      var s = 0;
      ["es", "en"].forEach(function (L) {
        var f = DATA[L].facts[idx], ls = 0;
        f.k.forEach(function (key) {
          for (var i = 0; i < words.length; i++) {
            var w = words[i];
            if (key.length <= 3 ? w === key : w.indexOf(key) === 0) { ls++; break; }
          }
        });
        if (ls > s) s = ls;
      });
      if (s > bs) { bs = s; best = idx; }
    }
    return best >= 0 ? DATA[lang].facts[best].a : null;
  }
  function ask(q) {
    q = q.trim(); if (!q) return Promise.resolve(null);
    var A = DATA[lang].ask;
    msg(q, "u");
    var local = answerLocal(q);
    if (window.ASK_ENDPOINT) {
      var ctrl = new AbortController(); var to = setTimeout(function () { ctrl.abort(); }, 9000);
      return fetch(window.ASK_ENDPOINT, {
        method: "POST", headers: { "Content-Type": "application/json" }, signal: ctrl.signal,
        body: JSON.stringify({ question: q, lang: lang, facts: DATA[lang].facts.map(function (f) { return f.a; }) })
      }).then(function (r) { return r.json(); }).then(function (j) {
        clearTimeout(to); var t = (j && j.answer) || local || A.none; msg(t, "b", A.src); return t;
      }).catch(function () { var t = local || A.none; msg(t, "b", A.src); return t; });
    }
    var t = local || A.none; msg(t, "b", A.src); return Promise.resolve(t);
  }
  function renderAsk() {
    var A = DATA[lang].ask;
    $("#ask-hint").textContent = A.hint;
    $("#ask-input").placeholder = A.ph;
    var s = $("#ask-sugg"); s.innerHTML = "";
    A.sugg.forEach(function (q) {
      var b = el("button", "", q); b.type = "button";
      b.addEventListener("click", function () { ask(q); }); s.appendChild(b);
    });
    chat.innerHTML = ""; msg(A.intro, "b");
  }
  $("#ask-form").addEventListener("submit", function (e) {
    e.preventDefault(); var i = $("#ask-input"); var v = i.value; i.value = ""; ask(v);
  });

  /* ---------- terminal interactiva ---------- */
  var out = $("#term-out"), inp = $("#term-input"), hist = [], hi = 0;
  function print(text, cls) {
    String(text).split("\n").forEach(function (ln) {
      var p = el("p", cls || "o", ln); out.appendChild(p);
    });
    out.scrollTop = out.scrollHeight;
  }
  function printLinks(items) {
    var p = el("p", "o");
    items.forEach(function (it, i) {
      if (i) p.appendChild(document.createTextNode("  ·  "));
      var a = el("a", "", it[0]); a.href = it[1]; a.target = "_blank"; a.rel = "noopener"; p.appendChild(a);
    });
    out.appendChild(p); out.scrollTop = out.scrollHeight;
  }
  var CMDS = ["help", "whoami", "projects", "stack", "leadership", "contact", "cv", "ask", "lang", "theme", "clear", "ls"];
  function setLang(l) { lang = l; store("lang", l); renderAll(false); }
  function setTheme(t) { theme = t; store("theme", t); applyTheme(); }

  function run(line) {
    var D = DATA[lang], T = D.term;
    var parts = line.trim().split(/\s+/), cmd = (parts[0] || "").toLowerCase(), rest = parts.slice(1).join(" ");
    var p = el("p", "o"); p.appendChild(el("span", "g", "$ ")); p.appendChild(document.createTextNode(line)); out.appendChild(p);
    if (!cmd) return;
    switch (cmd) {
      case "help": print(T.help.join("\n")); break;
      case "whoami": print(D.name + "\n" + D.role + "\n" + D.focus); break;
      case "ls": print(D.projects.map(function (x) { return x.id + "/"; }).join("   ")); break;
      case "projects":
        D.projects.forEach(function (x, i) { print((i + 1) + ". " + x.title, "k"); print("   " + x.tags); }); break;
      case "stack": D.stack.forEach(function (r) { print(r[0] + ": " + r[2].join(", ")); }); break;
      case "leadership": D.lead.forEach(function (l) { print(l.time + "  " + l.title); }); break;
      case "contact":
        printLinks([["yenglealfarosebastian@gmail.com", "mailto:yenglealfarosebastian@gmail.com"],
          ["LinkedIn", "https://www.linkedin.com/in/sebastian-y-716389274"], ["GitHub", "https://github.com/sebastian-yengle08"]]); break;
      case "cv": print(T.cv); window.open("CV_Sebastian_Yengle.pdf", "_blank"); break;
      case "ask":
        if (!rest) { print("ask <" + (lang === "es" ? "texto" : "text") + ">", "e"); break; }
        var a = answerLocal(rest); print(a || D.ask.none); break;
      case "lang":
        if (rest === "es" || rest === "en") { setLang(rest); print(DATA[lang].term.langset); }
        else print("lang es|en", "e");
        break;
      case "theme":
        if (rest === "dark" || rest === "light") { setTheme(rest); print(T.themeset + rest); }
        else print("theme dark|light", "e");
        break;
      case "clear": out.innerHTML = ""; break;
      case "sudo":
        if (/hire[\s-]?me/i.test(rest)) { print(T.hire, "k"); break; }
      /* falls through */
      default: print(T.notfound + cmd, "e");
    }
  }
  $("#term-form").addEventListener("submit", function (e) {
    e.preventDefault(); var v = inp.value; inp.value = "";
    if (v.trim()) { hist.push(v); hi = hist.length; }
    run(v);
  });
  inp.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") { if (hi > 0) { hi--; inp.value = hist[hi]; } e.preventDefault(); }
    else if (e.key === "ArrowDown") { if (hi < hist.length) { hi++; inp.value = hist[hi] || ""; } e.preventDefault(); }
    else if (e.key === "Tab") {
      e.preventDefault(); var v = inp.value.toLowerCase();
      var m = CMDS.filter(function (c) { return c.indexOf(v) === 0; });
      if (m.length === 1) inp.value = m[0] + " ";
    }
  });
  $("#term-box").addEventListener("click", function () { inp.focus({ preventScroll: true }); });

  /* ---------- red neuronal de fondo ---------- */
  function network() {
    var c = $("#net"); if (!c || reduce) return;
    var ctx = c.getContext("2d"), w, h, pts = [], dpr = Math.min(window.devicePixelRatio || 1, 2);
    function size() {
      var r = c.getBoundingClientRect(); w = r.width; h = r.height;
      c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(70, (w * h) / 14000)); pts = [];
      for (var i = 0; i < n; i++) pts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 });
    }
    function col(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }
    var raf, visible = true;
    function frame() {
      if (!visible) { raf = 0; return; }
      ctx.clearRect(0, 0, w, h);
      var a1 = col("--a1"), a3 = col("--a3");
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i]; p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1;
        for (var j = i + 1; j < pts.length; j++) {
          var q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = dx * dx + dy * dy;
          if (d < 14000) { ctx.globalAlpha = (1 - d / 14000) * .6; ctx.strokeStyle = a1; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
        }
        ctx.globalAlpha = .9; ctx.fillStyle = i % 3 ? a1 : a3; ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, 6.283); ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    }
    size(); frame();
    window.addEventListener("resize", size);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) { visible = es[0].isIntersecting; if (visible && !raf) frame(); }).observe(c);
    }
  }

  /* ---------- arranque ---------- */
  function renderAll(animate) {
    renderI18n(); setHero(animate); renderAbout(); renderMetrics(); renderStack();
    renderProjects(); renderLead(); renderAsk();
  }
  $("#btn-lang").addEventListener("click", function () { setLang(lang === "es" ? "en" : "es"); });
  $("#btn-theme").addEventListener("click", function () { setTheme(theme === "dark" ? "light" : "dark"); });

  applyTheme(); renderAll(true); network();
  print(DATA[lang].term.welcome, "k");
})();
