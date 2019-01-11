!(function(e) {
  var t = {};
  function a(n) {
    if (t[n]) return t[n].exports;
    var i = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, a), (i.l = !0), i.exports;
  }
  (a.m = e),
    (a.c = t),
    (a.d = function(e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function(e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          a.d(
            n,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (a.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = ""),
    a((a.s = 0));
})([
  function(e, t, a) {
    "use strict";
    a.r(t);
    var n,
      i,
      o = [
        {
          title: "Expense Tracker",
          description:
            "A single-page application expense tracker with a back-end REST API for storing data. Aaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaa",
          image: "",
          links: [{ type: "github", path: "" }, { type: "site", path: "" }]
        },
        {
          title: "Where Do I Eat?",
          description:
            "A simple Google Maps client that tells the user where to eat based on location and distance.",
          image: "",
          links: []
        },
        {
          title: "Where Do I Eat?",
          description:
            "A simple Google Maps client that tells the user where to eat based on location and distance.",
          image: "",
          links: []
        },
        {
          title: "Where Do I Eat?",
          description:
            "A simple Google Maps client that tells the user where to eat based on location and distance.",
          image: "",
          links: []
        },
        {
          title: "Where Do I Eat?",
          description:
            "A simple Google Maps client that tells the user where to eat based on location and distance.",
          image: "",
          links: []
        }
      ],
      r = function(e, t) {
        var a =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return "<"
          .concat(e, " class='")
          .concat(a, "'>")
          .concat(t, "</")
          .concat(e, ">");
      };
    (n = document.getElementById("section-content")),
      ((i = document.createElement("ul")).id = "section-content-list"),
      n.appendChild(i),
      o.forEach(function(e) {
        var t = document.createElement("li");
        t.classList.add("section-content-item"),
          (t.innerHTML += r("h1", e.title)),
          (t.innerHTML += r("p", e.description)),
          i.appendChild(t);
      });
  }
]);
