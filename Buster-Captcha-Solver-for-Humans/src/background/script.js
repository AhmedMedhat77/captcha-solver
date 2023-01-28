(() => {
  var e,
    t,
    r = {
      872: (e) => {
        function t(e, t, r) {
          for (var n = 0; n < r.length; n++) e.setUint8(t + n, r.charCodeAt(n));
        }
        e.exports = function (e, r) {
          r = r || {};
          var n = e.numberOfChannels,
            i = e.sampleRate,
            o = r.float32 ? 3 : 1,
            a = 3 === o ? 32 : 16;
          return (function (e, r, n, i, o) {
            var a = o / 8,
              s = i * a,
              c = new ArrayBuffer(44 + e.length * a),
              u = new DataView(c);
            return (
              t(u, 0, "RIFF"),
              u.setUint32(4, 36 + e.length * a, !0),
              t(u, 8, "WAVE"),
              t(u, 12, "fmt "),
              u.setUint32(16, 16, !0),
              u.setUint16(20, r, !0),
              u.setUint16(22, i, !0),
              u.setUint32(24, n, !0),
              u.setUint32(28, n * s, !0),
              u.setUint16(32, s, !0),
              u.setUint16(34, o, !0),
              t(u, 36, "data"),
              u.setUint32(40, e.length * a, !0),
              1 === r
                ? (function (e, t, r) {
                    for (var n = 0; n < r.length; n++, t += 2) {
                      var i = Math.max(-1, Math.min(1, r[n]));
                      e.setInt16(t, i < 0 ? 32768 * i : 32767 * i, !0);
                    }
                  })(u, 44, e)
                : (function (e, t, r) {
                    for (var n = 0; n < r.length; n++, t += 4)
                      e.setFloat32(t, r[n], !0);
                  })(u, 44, e),
              c
            );
          })(
            2 === n
              ? (function (e, t) {
                  for (
                    var r = e.length + t.length,
                      n = new Float32Array(r),
                      i = 0,
                      o = 0;
                    i < r;

                  )
                    (n[i++] = e[o]), (n[i++] = t[o]), o++;
                  return n;
                })(e.getChannelData(0), e.getChannelData(1))
              : e.getChannelData(0),
            o,
            i,
            n,
            a
          );
        };
      },
      4314: function (e) {
        e.exports = (function (e) {
          var t = {};
          function r(n) {
            if (t[n]) return t[n].exports;
            var i = (t[n] = { i: n, l: !1, exports: {} });
            return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
          }
          return (
            (r.m = e),
            (r.c = t),
            (r.d = function (e, t, n) {
              r.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (r.r = function (e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (r.t = function (e, t) {
              if ((1 & t && (e = r(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var n = Object.create(null);
              if (
                (r.r(n),
                Object.defineProperty(n, "default", {
                  enumerable: !0,
                  value: e,
                }),
                2 & t && "string" != typeof e)
              )
                for (var i in e)
                  r.d(
                    n,
                    i,
                    function (t) {
                      return e[t];
                    }.bind(null, i)
                  );
              return n;
            }),
            (r.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return r.d(t, "a", t), t;
            }),
            (r.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (r.p = ""),
            r((r.s = 90))
          );
        })({
          17: function (e, t, r) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var n = r(18),
              i = (function () {
                function e() {}
                return (
                  (e.getFirstMatch = function (e, t) {
                    var r = t.match(e);
                    return (r && r.length > 0 && r[1]) || "";
                  }),
                  (e.getSecondMatch = function (e, t) {
                    var r = t.match(e);
                    return (r && r.length > 1 && r[2]) || "";
                  }),
                  (e.matchAndReturnConst = function (e, t, r) {
                    if (e.test(t)) return r;
                  }),
                  (e.getWindowsVersionName = function (e) {
                    switch (e) {
                      case "NT":
                        return "NT";
                      case "XP":
                      case "NT 5.1":
                        return "XP";
                      case "NT 5.0":
                        return "2000";
                      case "NT 5.2":
                        return "2003";
                      case "NT 6.0":
                        return "Vista";
                      case "NT 6.1":
                        return "7";
                      case "NT 6.2":
                        return "8";
                      case "NT 6.3":
                        return "8.1";
                      case "NT 10.0":
                        return "10";
                      default:
                        return;
                    }
                  }),
                  (e.getMacOSVersionName = function (e) {
                    var t = e
                      .split(".")
                      .splice(0, 2)
                      .map(function (e) {
                        return parseInt(e, 10) || 0;
                      });
                    if ((t.push(0), 10 === t[0]))
                      switch (t[1]) {
                        case 5:
                          return "Leopard";
                        case 6:
                          return "Snow Leopard";
                        case 7:
                          return "Lion";
                        case 8:
                          return "Mountain Lion";
                        case 9:
                          return "Mavericks";
                        case 10:
                          return "Yosemite";
                        case 11:
                          return "El Capitan";
                        case 12:
                          return "Sierra";
                        case 13:
                          return "High Sierra";
                        case 14:
                          return "Mojave";
                        case 15:
                          return "Catalina";
                        default:
                          return;
                      }
                  }),
                  (e.getAndroidVersionName = function (e) {
                    var t = e
                      .split(".")
                      .splice(0, 2)
                      .map(function (e) {
                        return parseInt(e, 10) || 0;
                      });
                    if ((t.push(0), !(1 === t[0] && t[1] < 5)))
                      return 1 === t[0] && t[1] < 6
                        ? "Cupcake"
                        : 1 === t[0] && t[1] >= 6
                        ? "Donut"
                        : 2 === t[0] && t[1] < 2
                        ? "Eclair"
                        : 2 === t[0] && 2 === t[1]
                        ? "Froyo"
                        : 2 === t[0] && t[1] > 2
                        ? "Gingerbread"
                        : 3 === t[0]
                        ? "Honeycomb"
                        : 4 === t[0] && t[1] < 1
                        ? "Ice Cream Sandwich"
                        : 4 === t[0] && t[1] < 4
                        ? "Jelly Bean"
                        : 4 === t[0] && t[1] >= 4
                        ? "KitKat"
                        : 5 === t[0]
                        ? "Lollipop"
                        : 6 === t[0]
                        ? "Marshmallow"
                        : 7 === t[0]
                        ? "Nougat"
                        : 8 === t[0]
                        ? "Oreo"
                        : 9 === t[0]
                        ? "Pie"
                        : void 0;
                  }),
                  (e.getVersionPrecision = function (e) {
                    return e.split(".").length;
                  }),
                  (e.compareVersions = function (t, r, n) {
                    void 0 === n && (n = !1);
                    var i = e.getVersionPrecision(t),
                      o = e.getVersionPrecision(r),
                      a = Math.max(i, o),
                      s = 0,
                      c = e.map([t, r], function (t) {
                        var r = a - e.getVersionPrecision(t),
                          n = t + new Array(r + 1).join(".0");
                        return e
                          .map(n.split("."), function (e) {
                            return new Array(20 - e.length).join("0") + e;
                          })
                          .reverse();
                      });
                    for (n && (s = a - Math.min(i, o)), a -= 1; a >= s; ) {
                      if (c[0][a] > c[1][a]) return 1;
                      if (c[0][a] === c[1][a]) {
                        if (a === s) return 0;
                        a -= 1;
                      } else if (c[0][a] < c[1][a]) return -1;
                    }
                  }),
                  (e.map = function (e, t) {
                    var r,
                      n = [];
                    if (Array.prototype.map)
                      return Array.prototype.map.call(e, t);
                    for (r = 0; r < e.length; r += 1) n.push(t(e[r]));
                    return n;
                  }),
                  (e.find = function (e, t) {
                    var r, n;
                    if (Array.prototype.find)
                      return Array.prototype.find.call(e, t);
                    for (r = 0, n = e.length; r < n; r += 1) {
                      var i = e[r];
                      if (t(i, r)) return i;
                    }
                  }),
                  (e.assign = function (e) {
                    for (
                      var t,
                        r,
                        n = e,
                        i = arguments.length,
                        o = new Array(i > 1 ? i - 1 : 0),
                        a = 1;
                      a < i;
                      a++
                    )
                      o[a - 1] = arguments[a];
                    if (Object.assign)
                      return Object.assign.apply(Object, [e].concat(o));
                    var s = function () {
                      var e = o[t];
                      "object" == typeof e &&
                        null !== e &&
                        Object.keys(e).forEach(function (t) {
                          n[t] = e[t];
                        });
                    };
                    for (t = 0, r = o.length; t < r; t += 1) s();
                    return e;
                  }),
                  (e.getBrowserAlias = function (e) {
                    return n.BROWSER_ALIASES_MAP[e];
                  }),
                  (e.getBrowserTypeByAlias = function (e) {
                    return n.BROWSER_MAP[e] || "";
                  }),
                  e
                );
              })();
            (t.default = i), (e.exports = t.default);
          },
          18: function (e, t, r) {
            "use strict";
            (t.__esModule = !0),
              (t.ENGINE_MAP =
                t.OS_MAP =
                t.PLATFORMS_MAP =
                t.BROWSER_MAP =
                t.BROWSER_ALIASES_MAP =
                  void 0),
              (t.BROWSER_ALIASES_MAP = {
                "Amazon Silk": "amazon_silk",
                "Android Browser": "android",
                Bada: "bada",
                BlackBerry: "blackberry",
                Chrome: "chrome",
                Chromium: "chromium",
                Electron: "electron",
                Epiphany: "epiphany",
                Firefox: "firefox",
                Focus: "focus",
                Generic: "generic",
                "Google Search": "google_search",
                Googlebot: "googlebot",
                "Internet Explorer": "ie",
                "K-Meleon": "k_meleon",
                Maxthon: "maxthon",
                "Microsoft Edge": "edge",
                "MZ Browser": "mz",
                "NAVER Whale Browser": "naver",
                Opera: "opera",
                "Opera Coast": "opera_coast",
                PhantomJS: "phantomjs",
                Puffin: "puffin",
                QupZilla: "qupzilla",
                QQ: "qq",
                QQLite: "qqlite",
                Safari: "safari",
                Sailfish: "sailfish",
                "Samsung Internet for Android": "samsung_internet",
                SeaMonkey: "seamonkey",
                Sleipnir: "sleipnir",
                Swing: "swing",
                Tizen: "tizen",
                "UC Browser": "uc",
                Vivaldi: "vivaldi",
                "WebOS Browser": "webos",
                WeChat: "wechat",
                "Yandex Browser": "yandex",
                Roku: "roku",
              }),
              (t.BROWSER_MAP = {
                amazon_silk: "Amazon Silk",
                android: "Android Browser",
                bada: "Bada",
                blackberry: "BlackBerry",
                chrome: "Chrome",
                chromium: "Chromium",
                electron: "Electron",
                epiphany: "Epiphany",
                firefox: "Firefox",
                focus: "Focus",
                generic: "Generic",
                googlebot: "Googlebot",
                google_search: "Google Search",
                ie: "Internet Explorer",
                k_meleon: "K-Meleon",
                maxthon: "Maxthon",
                edge: "Microsoft Edge",
                mz: "MZ Browser",
                naver: "NAVER Whale Browser",
                opera: "Opera",
                opera_coast: "Opera Coast",
                phantomjs: "PhantomJS",
                puffin: "Puffin",
                qupzilla: "QupZilla",
                qq: "QQ Browser",
                qqlite: "QQ Browser Lite",
                safari: "Safari",
                sailfish: "Sailfish",
                samsung_internet: "Samsung Internet for Android",
                seamonkey: "SeaMonkey",
                sleipnir: "Sleipnir",
                swing: "Swing",
                tizen: "Tizen",
                uc: "UC Browser",
                vivaldi: "Vivaldi",
                webos: "WebOS Browser",
                wechat: "WeChat",
                yandex: "Yandex Browser",
              }),
              (t.PLATFORMS_MAP = {
                tablet: "tablet",
                mobile: "mobile",
                desktop: "desktop",
                tv: "tv",
              }),
              (t.OS_MAP = {
                WindowsPhone: "Windows Phone",
                Windows: "Windows",
                MacOS: "macOS",
                iOS: "iOS",
                Android: "Android",
                WebOS: "WebOS",
                BlackBerry: "BlackBerry",
                Bada: "Bada",
                Tizen: "Tizen",
                Linux: "Linux",
                ChromeOS: "Chrome OS",
                PlayStation4: "PlayStation 4",
                Roku: "Roku",
              }),
              (t.ENGINE_MAP = {
                EdgeHTML: "EdgeHTML",
                Blink: "Blink",
                Trident: "Trident",
                Presto: "Presto",
                Gecko: "Gecko",
                WebKit: "WebKit",
              });
          },
          90: function (e, t, r) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var n,
              i = (n = r(91)) && n.__esModule ? n : { default: n },
              o = r(18);
            function a(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            }
            var s = (function () {
              function e() {}
              var t, r;
              return (
                (e.getParser = function (e, t) {
                  if ((void 0 === t && (t = !1), "string" != typeof e))
                    throw new Error("UserAgent should be a string");
                  return new i.default(e, t);
                }),
                (e.parse = function (e) {
                  return new i.default(e).getResult();
                }),
                (t = e),
                (r = [
                  {
                    key: "BROWSER_MAP",
                    get: function () {
                      return o.BROWSER_MAP;
                    },
                  },
                  {
                    key: "ENGINE_MAP",
                    get: function () {
                      return o.ENGINE_MAP;
                    },
                  },
                  {
                    key: "OS_MAP",
                    get: function () {
                      return o.OS_MAP;
                    },
                  },
                  {
                    key: "PLATFORMS_MAP",
                    get: function () {
                      return o.PLATFORMS_MAP;
                    },
                  },
                ]),
                null && a(t.prototype, null),
                r && a(t, r),
                e
              );
            })();
            (t.default = s), (e.exports = t.default);
          },
          91: function (e, t, r) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var n = c(r(92)),
              i = c(r(93)),
              o = c(r(94)),
              a = c(r(95)),
              s = c(r(17));
            function c(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var u = (function () {
              function e(e, t) {
                if ((void 0 === t && (t = !1), null == e || "" === e))
                  throw new Error("UserAgent parameter can't be empty");
                (this._ua = e),
                  (this.parsedResult = {}),
                  !0 !== t && this.parse();
              }
              var t = e.prototype;
              return (
                (t.getUA = function () {
                  return this._ua;
                }),
                (t.test = function (e) {
                  return e.test(this._ua);
                }),
                (t.parseBrowser = function () {
                  var e = this;
                  this.parsedResult.browser = {};
                  var t = s.default.find(n.default, function (t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t);
                      });
                    throw new Error("Browser's test function is not valid");
                  });
                  return (
                    t && (this.parsedResult.browser = t.describe(this.getUA())),
                    this.parsedResult.browser
                  );
                }),
                (t.getBrowser = function () {
                  return this.parsedResult.browser
                    ? this.parsedResult.browser
                    : this.parseBrowser();
                }),
                (t.getBrowserName = function (e) {
                  return e
                    ? String(this.getBrowser().name).toLowerCase() || ""
                    : this.getBrowser().name || "";
                }),
                (t.getBrowserVersion = function () {
                  return this.getBrowser().version;
                }),
                (t.getOS = function () {
                  return this.parsedResult.os
                    ? this.parsedResult.os
                    : this.parseOS();
                }),
                (t.parseOS = function () {
                  var e = this;
                  this.parsedResult.os = {};
                  var t = s.default.find(i.default, function (t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t);
                      });
                    throw new Error("Browser's test function is not valid");
                  });
                  return (
                    t && (this.parsedResult.os = t.describe(this.getUA())),
                    this.parsedResult.os
                  );
                }),
                (t.getOSName = function (e) {
                  var t = this.getOS().name;
                  return e ? String(t).toLowerCase() || "" : t || "";
                }),
                (t.getOSVersion = function () {
                  return this.getOS().version;
                }),
                (t.getPlatform = function () {
                  return this.parsedResult.platform
                    ? this.parsedResult.platform
                    : this.parsePlatform();
                }),
                (t.getPlatformType = function (e) {
                  void 0 === e && (e = !1);
                  var t = this.getPlatform().type;
                  return e ? String(t).toLowerCase() || "" : t || "";
                }),
                (t.parsePlatform = function () {
                  var e = this;
                  this.parsedResult.platform = {};
                  var t = s.default.find(o.default, function (t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t);
                      });
                    throw new Error("Browser's test function is not valid");
                  });
                  return (
                    t &&
                      (this.parsedResult.platform = t.describe(this.getUA())),
                    this.parsedResult.platform
                  );
                }),
                (t.getEngine = function () {
                  return this.parsedResult.engine
                    ? this.parsedResult.engine
                    : this.parseEngine();
                }),
                (t.getEngineName = function (e) {
                  return e
                    ? String(this.getEngine().name).toLowerCase() || ""
                    : this.getEngine().name || "";
                }),
                (t.parseEngine = function () {
                  var e = this;
                  this.parsedResult.engine = {};
                  var t = s.default.find(a.default, function (t) {
                    if ("function" == typeof t.test) return t.test(e);
                    if (t.test instanceof Array)
                      return t.test.some(function (t) {
                        return e.test(t);
                      });
                    throw new Error("Browser's test function is not valid");
                  });
                  return (
                    t && (this.parsedResult.engine = t.describe(this.getUA())),
                    this.parsedResult.engine
                  );
                }),
                (t.parse = function () {
                  return (
                    this.parseBrowser(),
                    this.parseOS(),
                    this.parsePlatform(),
                    this.parseEngine(),
                    this
                  );
                }),
                (t.getResult = function () {
                  return s.default.assign({}, this.parsedResult);
                }),
                (t.satisfies = function (e) {
                  var t = this,
                    r = {},
                    n = 0,
                    i = {},
                    o = 0;
                  if (
                    (Object.keys(e).forEach(function (t) {
                      var a = e[t];
                      "string" == typeof a
                        ? ((i[t] = a), (o += 1))
                        : "object" == typeof a && ((r[t] = a), (n += 1));
                    }),
                    n > 0)
                  ) {
                    var a = Object.keys(r),
                      c = s.default.find(a, function (e) {
                        return t.isOS(e);
                      });
                    if (c) {
                      var u = this.satisfies(r[c]);
                      if (void 0 !== u) return u;
                    }
                    var l = s.default.find(a, function (e) {
                      return t.isPlatform(e);
                    });
                    if (l) {
                      var f = this.satisfies(r[l]);
                      if (void 0 !== f) return f;
                    }
                  }
                  if (o > 0) {
                    var d = Object.keys(i),
                      g = s.default.find(d, function (e) {
                        return t.isBrowser(e, !0);
                      });
                    if (void 0 !== g) return this.compareVersion(i[g]);
                  }
                }),
                (t.isBrowser = function (e, t) {
                  void 0 === t && (t = !1);
                  var r = this.getBrowserName().toLowerCase(),
                    n = e.toLowerCase(),
                    i = s.default.getBrowserTypeByAlias(n);
                  return t && i && (n = i.toLowerCase()), n === r;
                }),
                (t.compareVersion = function (e) {
                  var t = [0],
                    r = e,
                    n = !1,
                    i = this.getBrowserVersion();
                  if ("string" == typeof i)
                    return (
                      ">" === e[0] || "<" === e[0]
                        ? ((r = e.substr(1)),
                          "=" === e[1]
                            ? ((n = !0), (r = e.substr(2)))
                            : (t = []),
                          ">" === e[0] ? t.push(1) : t.push(-1))
                        : "=" === e[0]
                        ? (r = e.substr(1))
                        : "~" === e[0] && ((n = !0), (r = e.substr(1))),
                      t.indexOf(s.default.compareVersions(i, r, n)) > -1
                    );
                }),
                (t.isOS = function (e) {
                  return this.getOSName(!0) === String(e).toLowerCase();
                }),
                (t.isPlatform = function (e) {
                  return this.getPlatformType(!0) === String(e).toLowerCase();
                }),
                (t.isEngine = function (e) {
                  return this.getEngineName(!0) === String(e).toLowerCase();
                }),
                (t.is = function (e, t) {
                  return (
                    void 0 === t && (t = !1),
                    this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
                  );
                }),
                (t.some = function (e) {
                  var t = this;
                  return (
                    void 0 === e && (e = []),
                    e.some(function (e) {
                      return t.is(e);
                    })
                  );
                }),
                e
              );
            })();
            (t.default = u), (e.exports = t.default);
          },
          92: function (e, t, r) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var n,
              i = (n = r(17)) && n.__esModule ? n : { default: n },
              o = /version\/(\d+(\.?_?\d+)+)/i,
              a = [
                {
                  test: [/googlebot/i],
                  describe: function (e) {
                    var t = { name: "Googlebot" },
                      r =
                        i.default.getFirstMatch(
                          /googlebot\/(\d+(\.\d+))/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/opera/i],
                  describe: function (e) {
                    var t = { name: "Opera" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:opera)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/opr\/|opios/i],
                  describe: function (e) {
                    var t = { name: "Opera" },
                      r =
                        i.default.getFirstMatch(
                          /(?:opr|opios)[\s/](\S+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/SamsungBrowser/i],
                  describe: function (e) {
                    var t = { name: "Samsung Internet for Android" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/Whale/i],
                  describe: function (e) {
                    var t = { name: "NAVER Whale Browser" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:whale)[\s/](\d+(?:\.\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/MZBrowser/i],
                  describe: function (e) {
                    var t = { name: "MZ Browser" },
                      r =
                        i.default.getFirstMatch(
                          /(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/focus/i],
                  describe: function (e) {
                    var t = { name: "Focus" },
                      r =
                        i.default.getFirstMatch(
                          /(?:focus)[\s/](\d+(?:\.\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/swing/i],
                  describe: function (e) {
                    var t = { name: "Swing" },
                      r =
                        i.default.getFirstMatch(
                          /(?:swing)[\s/](\d+(?:\.\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/coast/i],
                  describe: function (e) {
                    var t = { name: "Opera Coast" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:coast)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/opt\/\d+(?:.?_?\d+)+/i],
                  describe: function (e) {
                    var t = { name: "Opera Touch" },
                      r =
                        i.default.getFirstMatch(
                          /(?:opt)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/yabrowser/i],
                  describe: function (e) {
                    var t = { name: "Yandex Browser" },
                      r =
                        i.default.getFirstMatch(
                          /(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/ucbrowser/i],
                  describe: function (e) {
                    var t = { name: "UC Browser" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/Maxthon|mxios/i],
                  describe: function (e) {
                    var t = { name: "Maxthon" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/epiphany/i],
                  describe: function (e) {
                    var t = { name: "Epiphany" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/puffin/i],
                  describe: function (e) {
                    var t = { name: "Puffin" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/sleipnir/i],
                  describe: function (e) {
                    var t = { name: "Sleipnir" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/k-meleon/i],
                  describe: function (e) {
                    var t = { name: "K-Meleon" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/micromessenger/i],
                  describe: function (e) {
                    var t = { name: "WeChat" },
                      r =
                        i.default.getFirstMatch(
                          /(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/qqbrowser/i],
                  describe: function (e) {
                    var t = {
                        name: /qqbrowserlite/i.test(e)
                          ? "QQ Browser Lite"
                          : "QQ Browser",
                      },
                      r =
                        i.default.getFirstMatch(
                          /(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/msie|trident/i],
                  describe: function (e) {
                    var t = { name: "Internet Explorer" },
                      r = i.default.getFirstMatch(
                        /(?:msie |rv:)(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/\sedg\//i],
                  describe: function (e) {
                    var t = { name: "Microsoft Edge" },
                      r = i.default.getFirstMatch(
                        /\sedg\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/edg([ea]|ios)/i],
                  describe: function (e) {
                    var t = { name: "Microsoft Edge" },
                      r = i.default.getSecondMatch(
                        /edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/vivaldi/i],
                  describe: function (e) {
                    var t = { name: "Vivaldi" },
                      r = i.default.getFirstMatch(
                        /vivaldi\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/seamonkey/i],
                  describe: function (e) {
                    var t = { name: "SeaMonkey" },
                      r = i.default.getFirstMatch(
                        /seamonkey\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/sailfish/i],
                  describe: function (e) {
                    var t = { name: "Sailfish" },
                      r = i.default.getFirstMatch(
                        /sailfish\s?browser\/(\d+(\.\d+)?)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/silk/i],
                  describe: function (e) {
                    var t = { name: "Amazon Silk" },
                      r = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/phantom/i],
                  describe: function (e) {
                    var t = { name: "PhantomJS" },
                      r = i.default.getFirstMatch(
                        /phantomjs\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/slimerjs/i],
                  describe: function (e) {
                    var t = { name: "SlimerJS" },
                      r = i.default.getFirstMatch(
                        /slimerjs\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                  describe: function (e) {
                    var t = { name: "BlackBerry" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/(web|hpw)[o0]s/i],
                  describe: function (e) {
                    var t = { name: "WebOS Browser" },
                      r =
                        i.default.getFirstMatch(o, e) ||
                        i.default.getFirstMatch(
                          /w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,
                          e
                        );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/bada/i],
                  describe: function (e) {
                    var t = { name: "Bada" },
                      r = i.default.getFirstMatch(
                        /dolfin\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/tizen/i],
                  describe: function (e) {
                    var t = { name: "Tizen" },
                      r =
                        i.default.getFirstMatch(
                          /(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/qupzilla/i],
                  describe: function (e) {
                    var t = { name: "QupZilla" },
                      r =
                        i.default.getFirstMatch(
                          /(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/firefox|iceweasel|fxios/i],
                  describe: function (e) {
                    var t = { name: "Firefox" },
                      r = i.default.getFirstMatch(
                        /(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/electron/i],
                  describe: function (e) {
                    var t = { name: "Electron" },
                      r = i.default.getFirstMatch(
                        /(?:electron)\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/MiuiBrowser/i],
                  describe: function (e) {
                    var t = { name: "Miui" },
                      r = i.default.getFirstMatch(
                        /(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/chromium/i],
                  describe: function (e) {
                    var t = { name: "Chromium" },
                      r =
                        i.default.getFirstMatch(
                          /(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,
                          e
                        ) || i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/chrome|crios|crmo/i],
                  describe: function (e) {
                    var t = { name: "Chrome" },
                      r = i.default.getFirstMatch(
                        /(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/GSA/i],
                  describe: function (e) {
                    var t = { name: "Google Search" },
                      r = i.default.getFirstMatch(
                        /(?:GSA)\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: function (e) {
                    var t = !e.test(/like android/i),
                      r = e.test(/android/i);
                    return t && r;
                  },
                  describe: function (e) {
                    var t = { name: "Android Browser" },
                      r = i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/playstation 4/i],
                  describe: function (e) {
                    var t = { name: "PlayStation 4" },
                      r = i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/safari|applewebkit/i],
                  describe: function (e) {
                    var t = { name: "Safari" },
                      r = i.default.getFirstMatch(o, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/.*/i],
                  describe: function (e) {
                    var t =
                      -1 !== e.search("\\(")
                        ? /^(.*)\/(.*)[ \t]\((.*)/
                        : /^(.*)\/(.*) /;
                    return {
                      name: i.default.getFirstMatch(t, e),
                      version: i.default.getSecondMatch(t, e),
                    };
                  },
                },
              ];
            (t.default = a), (e.exports = t.default);
          },
          93: function (e, t, r) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var n,
              i = (n = r(17)) && n.__esModule ? n : { default: n },
              o = r(18),
              a = [
                {
                  test: [/Roku\/DVP/],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                    return { name: o.OS_MAP.Roku, version: t };
                  },
                },
                {
                  test: [/windows phone/i],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(
                      /windows phone (?:os)?\s?(\d+(\.\d+)*)/i,
                      e
                    );
                    return { name: o.OS_MAP.WindowsPhone, version: t };
                  },
                },
                {
                  test: [/windows /i],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(
                        /Windows ((NT|XP)( \d\d?.\d)?)/i,
                        e
                      ),
                      r = i.default.getWindowsVersionName(t);
                    return {
                      name: o.OS_MAP.Windows,
                      version: t,
                      versionName: r,
                    };
                  },
                },
                {
                  test: [/Macintosh(.*?) FxiOS(.*?)\//],
                  describe: function (e) {
                    var t = { name: o.OS_MAP.iOS },
                      r = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/macintosh/i],
                  describe: function (e) {
                    var t = i.default
                        .getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e)
                        .replace(/[_\s]/g, "."),
                      r = i.default.getMacOSVersionName(t),
                      n = { name: o.OS_MAP.MacOS, version: t };
                    return r && (n.versionName = r), n;
                  },
                },
                {
                  test: [/(ipod|iphone|ipad)/i],
                  describe: function (e) {
                    var t = i.default
                      .getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e)
                      .replace(/[_\s]/g, ".");
                    return { name: o.OS_MAP.iOS, version: t };
                  },
                },
                {
                  test: function (e) {
                    var t = !e.test(/like android/i),
                      r = e.test(/android/i);
                    return t && r;
                  },
                  describe: function (e) {
                    var t = i.default.getFirstMatch(
                        /android[\s/-](\d+(\.\d+)*)/i,
                        e
                      ),
                      r = i.default.getAndroidVersionName(t),
                      n = { name: o.OS_MAP.Android, version: t };
                    return r && (n.versionName = r), n;
                  },
                },
                {
                  test: [/(web|hpw)[o0]s/i],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(
                        /(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,
                        e
                      ),
                      r = { name: o.OS_MAP.WebOS };
                    return t && t.length && (r.version = t), r;
                  },
                },
                {
                  test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                  describe: function (e) {
                    var t =
                      i.default.getFirstMatch(
                        /rim\stablet\sos\s(\d+(\.\d+)*)/i,
                        e
                      ) ||
                      i.default.getFirstMatch(
                        /blackberry\d+\/(\d+([_\s]\d+)*)/i,
                        e
                      ) ||
                      i.default.getFirstMatch(/\bbb(\d+)/i, e);
                    return { name: o.OS_MAP.BlackBerry, version: t };
                  },
                },
                {
                  test: [/bada/i],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                    return { name: o.OS_MAP.Bada, version: t };
                  },
                },
                {
                  test: [/tizen/i],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(
                      /tizen[/\s](\d+(\.\d+)*)/i,
                      e
                    );
                    return { name: o.OS_MAP.Tizen, version: t };
                  },
                },
                {
                  test: [/linux/i],
                  describe: function () {
                    return { name: o.OS_MAP.Linux };
                  },
                },
                {
                  test: [/CrOS/],
                  describe: function () {
                    return { name: o.OS_MAP.ChromeOS };
                  },
                },
                {
                  test: [/PlayStation 4/],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(
                      /PlayStation 4[/\s](\d+(\.\d+)*)/i,
                      e
                    );
                    return { name: o.OS_MAP.PlayStation4, version: t };
                  },
                },
              ];
            (t.default = a), (e.exports = t.default);
          },
          94: function (e, t, r) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var n,
              i = (n = r(17)) && n.__esModule ? n : { default: n },
              o = r(18),
              a = [
                {
                  test: [/googlebot/i],
                  describe: function () {
                    return { type: "bot", vendor: "Google" };
                  },
                },
                {
                  test: [/huawei/i],
                  describe: function (e) {
                    var t = i.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                      r = { type: o.PLATFORMS_MAP.mobile, vendor: "Huawei" };
                    return t && (r.model = t), r;
                  },
                },
                {
                  test: [/nexus\s*(?:7|8|9|10).*/i],
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.tablet, vendor: "Nexus" };
                  },
                },
                {
                  test: [/ipad/i],
                  describe: function () {
                    return {
                      type: o.PLATFORMS_MAP.tablet,
                      vendor: "Apple",
                      model: "iPad",
                    };
                  },
                },
                {
                  test: [/Macintosh(.*?) FxiOS(.*?)\//],
                  describe: function () {
                    return {
                      type: o.PLATFORMS_MAP.tablet,
                      vendor: "Apple",
                      model: "iPad",
                    };
                  },
                },
                {
                  test: [/kftt build/i],
                  describe: function () {
                    return {
                      type: o.PLATFORMS_MAP.tablet,
                      vendor: "Amazon",
                      model: "Kindle Fire HD 7",
                    };
                  },
                },
                {
                  test: [/silk/i],
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.tablet, vendor: "Amazon" };
                  },
                },
                {
                  test: [/tablet(?! pc)/i],
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.tablet };
                  },
                },
                {
                  test: function (e) {
                    var t = e.test(/ipod|iphone/i),
                      r = e.test(/like (ipod|iphone)/i);
                    return t && !r;
                  },
                  describe: function (e) {
                    var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
                    return {
                      type: o.PLATFORMS_MAP.mobile,
                      vendor: "Apple",
                      model: t,
                    };
                  },
                },
                {
                  test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.mobile, vendor: "Nexus" };
                  },
                },
                {
                  test: [/[^-]mobi/i],
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.mobile };
                  },
                },
                {
                  test: function (e) {
                    return "blackberry" === e.getBrowserName(!0);
                  },
                  describe: function () {
                    return {
                      type: o.PLATFORMS_MAP.mobile,
                      vendor: "BlackBerry",
                    };
                  },
                },
                {
                  test: function (e) {
                    return "bada" === e.getBrowserName(!0);
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.mobile };
                  },
                },
                {
                  test: function (e) {
                    return "windows phone" === e.getBrowserName();
                  },
                  describe: function () {
                    return {
                      type: o.PLATFORMS_MAP.mobile,
                      vendor: "Microsoft",
                    };
                  },
                },
                {
                  test: function (e) {
                    var t = Number(String(e.getOSVersion()).split(".")[0]);
                    return "android" === e.getOSName(!0) && t >= 3;
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.tablet };
                  },
                },
                {
                  test: function (e) {
                    return "android" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.mobile };
                  },
                },
                {
                  test: function (e) {
                    return "macos" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.desktop, vendor: "Apple" };
                  },
                },
                {
                  test: function (e) {
                    return "windows" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.desktop };
                  },
                },
                {
                  test: function (e) {
                    return "linux" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.desktop };
                  },
                },
                {
                  test: function (e) {
                    return "playstation 4" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.tv };
                  },
                },
                {
                  test: function (e) {
                    return "roku" === e.getOSName(!0);
                  },
                  describe: function () {
                    return { type: o.PLATFORMS_MAP.tv };
                  },
                },
              ];
            (t.default = a), (e.exports = t.default);
          },
          95: function (e, t, r) {
            "use strict";
            (t.__esModule = !0), (t.default = void 0);
            var n,
              i = (n = r(17)) && n.__esModule ? n : { default: n },
              o = r(18),
              a = [
                {
                  test: function (e) {
                    return "microsoft edge" === e.getBrowserName(!0);
                  },
                  describe: function (e) {
                    if (/\sedg\//i.test(e)) return { name: o.ENGINE_MAP.Blink };
                    var t = i.default.getFirstMatch(
                      /edge\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                    return { name: o.ENGINE_MAP.EdgeHTML, version: t };
                  },
                },
                {
                  test: [/trident/i],
                  describe: function (e) {
                    var t = { name: o.ENGINE_MAP.Trident },
                      r = i.default.getFirstMatch(
                        /trident\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: function (e) {
                    return e.test(/presto/i);
                  },
                  describe: function (e) {
                    var t = { name: o.ENGINE_MAP.Presto },
                      r = i.default.getFirstMatch(
                        /presto\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: function (e) {
                    var t = e.test(/gecko/i),
                      r = e.test(/like gecko/i);
                    return t && !r;
                  },
                  describe: function (e) {
                    var t = { name: o.ENGINE_MAP.Gecko },
                      r = i.default.getFirstMatch(
                        /gecko\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
                {
                  test: [/(apple)?webkit\/537\.36/i],
                  describe: function () {
                    return { name: o.ENGINE_MAP.Blink };
                  },
                },
                {
                  test: [/(apple)?webkit/i],
                  describe: function (e) {
                    var t = { name: o.ENGINE_MAP.WebKit },
                      r = i.default.getFirstMatch(
                        /webkit\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                    return r && (t.version = r), t;
                  },
                },
              ];
            (t.default = a), (e.exports = t.default);
          },
        });
      },
      8257: (e, t, r) => {
        var n = r(9212),
          i = r(5637),
          o = TypeError;
        e.exports = function (e) {
          if (n(e)) return e;
          throw o(i(e) + " is not a function");
        };
      },
      9882: (e, t, r) => {
        var n = r(9212),
          i = String,
          o = TypeError;
        e.exports = function (e) {
          if ("object" == typeof e || n(e)) return e;
          throw o("Can't set " + i(e) + " as a prototype");
        };
      },
      4761: (e, t, r) => {
        var n = r(2447),
          i = TypeError;
        e.exports = function (e, t) {
          if (n(t, e)) return e;
          throw i("Incorrect invocation");
        };
      },
      2569: (e, t, r) => {
        var n = r(794),
          i = String,
          o = TypeError;
        e.exports = function (e) {
          if (n(e)) return e;
          throw o(i(e) + " is not an object");
        };
      },
      8578: (e) => {
        e.exports =
          "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView;
      },
      3977: (e, t, r) => {
        "use strict";
        var n,
          i,
          o,
          a = r(8578),
          s = r(8494),
          c = r(7583),
          u = r(9212),
          l = r(794),
          f = r(2870),
          d = r(3058),
          g = r(5637),
          p = r(57),
          m = r(3746),
          h = r(4615).f,
          v = r(2447),
          A = r(729),
          y = r(7496),
          w = r(3649),
          b = r(8284),
          x = r(2743),
          _ = x.enforce,
          S = x.get,
          M = c.Int8Array,
          E = M && M.prototype,
          O = c.Uint8ClampedArray,
          P = O && O.prototype,
          T = M && A(M),
          R = E && A(E),
          k = Object.prototype,
          B = c.TypeError,
          C = w("toStringTag"),
          I = b("TYPED_ARRAY_TAG"),
          F = "TypedArrayConstructor",
          N = a && !!y && "Opera" !== d(c.opera),
          L = !1,
          j = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8,
          },
          D = { BigInt64Array: 8, BigUint64Array: 8 },
          U = function (e) {
            var t = A(e);
            if (l(t)) {
              var r = S(t);
              return r && f(r, F) ? r[F] : U(t);
            }
          },
          z = function (e) {
            if (!l(e)) return !1;
            var t = d(e);
            return f(j, t) || f(D, t);
          };
        for (n in j) (o = (i = c[n]) && i.prototype) ? (_(o)[F] = i) : (N = !1);
        for (n in D) (o = (i = c[n]) && i.prototype) && (_(o)[F] = i);
        if (
          (!N || !u(T) || T === Function.prototype) &&
          ((T = function () {
            throw B("Incorrect invocation");
          }),
          N)
        )
          for (n in j) c[n] && y(c[n], T);
        if ((!N || !R || R === k) && ((R = T.prototype), N))
          for (n in j) c[n] && y(c[n].prototype, R);
        if ((N && A(P) !== R && y(P, R), s && !f(R, C)))
          for (n in ((L = !0),
          h(R, C, {
            get: function () {
              return l(this) ? this[I] : void 0;
            },
          }),
          j))
            c[n] && p(c[n], I, n);
        e.exports = {
          NATIVE_ARRAY_BUFFER_VIEWS: N,
          TYPED_ARRAY_TAG: L && I,
          aTypedArray: function (e) {
            if (z(e)) return e;
            throw B("Target is not a typed array");
          },
          aTypedArrayConstructor: function (e) {
            if (u(e) && (!y || v(T, e))) return e;
            throw B(g(e) + " is not a typed array constructor");
          },
          exportTypedArrayMethod: function (e, t, r, n) {
            if (s) {
              if (r)
                for (var i in j) {
                  var o = c[i];
                  if (o && f(o.prototype, e))
                    try {
                      delete o.prototype[e];
                    } catch (r) {
                      try {
                        o.prototype[e] = t;
                      } catch (e) {}
                    }
                }
              (R[e] && !r) || m(R, e, r ? t : (N && E[e]) || t, n);
            }
          },
          exportTypedArrayStaticMethod: function (e, t, r) {
            var n, i;
            if (s) {
              if (y) {
                if (r)
                  for (n in j)
                    if ((i = c[n]) && f(i, e))
                      try {
                        delete i[e];
                      } catch (e) {}
                if (T[e] && !r) return;
                try {
                  return m(T, e, r ? t : (N && T[e]) || t);
                } catch (e) {}
              }
              for (n in j) !(i = c[n]) || (i[e] && !r) || m(i, e, t);
            }
          },
          getTypedArrayConstructor: U,
          isView: function (e) {
            if (!l(e)) return !1;
            var t = d(e);
            return "DataView" === t || f(j, t) || f(D, t);
          },
          isTypedArray: z,
          TypedArray: T,
          TypedArrayPrototype: R,
        };
      },
      5766: (e, t, r) => {
        var n = r(2977),
          i = r(6782),
          o = r(1825),
          a = function (e) {
            return function (t, r, a) {
              var s,
                c = n(t),
                u = o(c),
                l = i(a, u);
              if (e && r != r) {
                for (; u > l; ) if ((s = c[l++]) != s) return !0;
              } else
                for (; u > l; l++)
                  if ((e || l in c) && c[l] === r) return e || l || 0;
              return !e && -1;
            };
          };
        e.exports = { includes: a(!0), indexOf: a(!1) };
      },
      2544: (e, t, r) => {
        var n = r(2938),
          i = r(5044),
          o = r(1324),
          a = r(1825),
          s = function (e) {
            var t = 1 == e;
            return function (r, s, c) {
              for (var u, l = o(r), f = i(l), d = n(s, c), g = a(f); g-- > 0; )
                if (d((u = f[g]), g, l))
                  switch (e) {
                    case 0:
                      return u;
                    case 1:
                      return g;
                  }
              return t ? -1 : void 0;
            };
          };
        e.exports = { findLast: s(0), findLastIndex: s(1) };
      },
      8173: (e, t, r) => {
        "use strict";
        var n = r(8494),
          i = r(4521),
          o = TypeError,
          a = Object.getOwnPropertyDescriptor,
          s =
            n &&
            !(function () {
              if (void 0 !== this) return !0;
              try {
                Object.defineProperty([], "length", {
                  writable: !1,
                }).length = 1;
              } catch (e) {
                return e instanceof TypeError;
              }
            })();
        e.exports = s
          ? function (e, t) {
              if (i(e) && !a(e, "length").writable)
                throw o("Cannot set read only .length");
              return (e.length = t);
            }
          : function (e, t) {
              return (e.length = t);
            };
      },
      9624: (e, t, r) => {
        var n = r(7386),
          i = n({}.toString),
          o = n("".slice);
        e.exports = function (e) {
          return o(i(e), 8, -1);
        };
      },
      3058: (e, t, r) => {
        var n = r(8191),
          i = r(9212),
          o = r(9624),
          a = r(3649)("toStringTag"),
          s = Object,
          c =
            "Arguments" ==
            o(
              (function () {
                return arguments;
              })()
            );
        e.exports = n
          ? o
          : function (e) {
              var t, r, n;
              return void 0 === e
                ? "Undefined"
                : null === e
                ? "Null"
                : "string" ==
                  typeof (r = (function (e, t) {
                    try {
                      return e[t];
                    } catch (e) {}
                  })((t = s(e)), a))
                ? r
                : c
                ? o(t)
                : "Object" == (n = o(t)) && i(t.callee)
                ? "Arguments"
                : n;
            };
      },
      3478: (e, t, r) => {
        var n = r(2870),
          i = r(929),
          o = r(6683),
          a = r(4615);
        e.exports = function (e, t, r) {
          for (var s = i(t), c = a.f, u = o.f, l = 0; l < s.length; l++) {
            var f = s[l];
            n(e, f) || (r && n(r, f)) || c(e, f, u(t, f));
          }
        };
      },
      926: (e, t, r) => {
        var n = r(6544);
        e.exports = !n(function () {
          function e() {}
          return (
            (e.prototype.constructor = null),
            Object.getPrototypeOf(new e()) !== e.prototype
          );
        });
      },
      57: (e, t, r) => {
        var n = r(8494),
          i = r(4615),
          o = r(4677);
        e.exports = n
          ? function (e, t, r) {
              return i.f(e, t, o(1, r));
            }
          : function (e, t, r) {
              return (e[t] = r), e;
            };
      },
      4677: (e) => {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      3746: (e, t, r) => {
        var n = r(9212),
          i = r(4615),
          o = r(9594),
          a = r(2296);
        e.exports = function (e, t, r, s) {
          s || (s = {});
          var c = s.enumerable,
            u = void 0 !== s.name ? s.name : t;
          if ((n(r) && o(r, u, s), s.global)) c ? (e[t] = r) : a(t, r);
          else {
            try {
              s.unsafe ? e[t] && (c = !0) : delete e[t];
            } catch (e) {}
            c
              ? (e[t] = r)
              : i.f(e, t, {
                  value: r,
                  enumerable: !1,
                  configurable: !s.nonConfigurable,
                  writable: !s.nonWritable,
                });
          }
          return e;
        };
      },
      2296: (e, t, r) => {
        var n = r(7583),
          i = Object.defineProperty;
        e.exports = function (e, t) {
          try {
            i(n, e, { value: t, configurable: !0, writable: !0 });
          } catch (r) {
            n[e] = t;
          }
          return t;
        };
      },
      8494: (e, t, r) => {
        var n = r(6544);
        e.exports = !n(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        });
      },
      2952: (e) => {
        var t = "object" == typeof document && document.all,
          r = void 0 === t && void 0 !== t;
        e.exports = { all: t, IS_HTMLDDA: r };
      },
      6668: (e, t, r) => {
        var n = r(7583),
          i = r(794),
          o = n.document,
          a = i(o) && i(o.createElement);
        e.exports = function (e) {
          return a ? o.createElement(e) : {};
        };
      },
      6768: (e) => {
        var t = TypeError;
        e.exports = function (e) {
          if (e > 9007199254740991) throw t("Maximum allowed index exceeded");
          return e;
        };
      },
      5331: (e) => {
        e.exports = {
          IndexSizeError: { s: "INDEX_SIZE_ERR", c: 1, m: 1 },
          DOMStringSizeError: { s: "DOMSTRING_SIZE_ERR", c: 2, m: 0 },
          HierarchyRequestError: { s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1 },
          WrongDocumentError: { s: "WRONG_DOCUMENT_ERR", c: 4, m: 1 },
          InvalidCharacterError: { s: "INVALID_CHARACTER_ERR", c: 5, m: 1 },
          NoDataAllowedError: { s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0 },
          NoModificationAllowedError: {
            s: "NO_MODIFICATION_ALLOWED_ERR",
            c: 7,
            m: 1,
          },
          NotFoundError: { s: "NOT_FOUND_ERR", c: 8, m: 1 },
          NotSupportedError: { s: "NOT_SUPPORTED_ERR", c: 9, m: 1 },
          InUseAttributeError: { s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1 },
          InvalidStateError: { s: "INVALID_STATE_ERR", c: 11, m: 1 },
          SyntaxError: { s: "SYNTAX_ERR", c: 12, m: 1 },
          InvalidModificationError: {
            s: "INVALID_MODIFICATION_ERR",
            c: 13,
            m: 1,
          },
          NamespaceError: { s: "NAMESPACE_ERR", c: 14, m: 1 },
          InvalidAccessError: { s: "INVALID_ACCESS_ERR", c: 15, m: 1 },
          ValidationError: { s: "VALIDATION_ERR", c: 16, m: 0 },
          TypeMismatchError: { s: "TYPE_MISMATCH_ERR", c: 17, m: 1 },
          SecurityError: { s: "SECURITY_ERR", c: 18, m: 1 },
          NetworkError: { s: "NETWORK_ERR", c: 19, m: 1 },
          AbortError: { s: "ABORT_ERR", c: 20, m: 1 },
          URLMismatchError: { s: "URL_MISMATCH_ERR", c: 21, m: 1 },
          QuotaExceededError: { s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1 },
          TimeoutError: { s: "TIMEOUT_ERR", c: 23, m: 1 },
          InvalidNodeTypeError: { s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1 },
          DataCloneError: { s: "DATA_CLONE_ERR", c: 25, m: 1 },
        };
      },
      6918: (e, t, r) => {
        var n = r(5897);
        e.exports = n("navigator", "userAgent") || "";
      },
      4061: (e, t, r) => {
        var n,
          i,
          o = r(7583),
          a = r(6918),
          s = o.process,
          c = o.Deno,
          u = (s && s.versions) || (c && c.version),
          l = u && u.v8;
        l && (i = (n = l.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
          !i &&
            a &&
            (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
            (n = a.match(/Chrome\/(\d+)/)) &&
            (i = +n[1]),
          (e.exports = i);
      },
      5690: (e) => {
        e.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];
      },
      668: (e, t, r) => {
        var n = r(7386),
          i = Error,
          o = n("".replace),
          a = String(i("zxcasd").stack),
          s = /\n\s*at [^:]*:[^\n]*/,
          c = s.test(a);
        e.exports = function (e, t) {
          if (c && "string" == typeof e && !i.prepareStackTrace)
            for (; t--; ) e = o(e, s, "");
          return e;
        };
      },
      1178: (e, t, r) => {
        var n = r(6544),
          i = r(4677);
        e.exports = !n(function () {
          var e = Error("a");
          return (
            !("stack" in e) ||
            (Object.defineProperty(e, "stack", i(1, 7)), 7 !== e.stack)
          );
        });
      },
      7263: (e, t, r) => {
        var n = r(7583),
          i = r(6683).f,
          o = r(57),
          a = r(3746),
          s = r(2296),
          c = r(3478),
          u = r(4451);
        e.exports = function (e, t) {
          var r,
            l,
            f,
            d,
            g,
            p = e.target,
            m = e.global,
            h = e.stat;
          if ((r = m ? n : h ? n[p] || s(p, {}) : (n[p] || {}).prototype))
            for (l in t) {
              if (
                ((d = t[l]),
                (f = e.dontCallGetSet ? (g = i(r, l)) && g.value : r[l]),
                !u(m ? l : p + (h ? "." : "#") + l, e.forced) && void 0 !== f)
              ) {
                if (typeof d == typeof f) continue;
                c(d, f);
              }
              (e.sham || (f && f.sham)) && o(d, "sham", !0), a(r, l, d, e);
            }
        };
      },
      6544: (e) => {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      1611: (e, t, r) => {
        var n = r(8987),
          i = Function.prototype,
          o = i.apply,
          a = i.call;
        e.exports =
          ("object" == typeof Reflect && Reflect.apply) ||
          (n
            ? a.bind(o)
            : function () {
                return a.apply(o, arguments);
              });
      },
      2938: (e, t, r) => {
        var n = r(6887),
          i = r(8257),
          o = r(8987),
          a = n(n.bind);
        e.exports = function (e, t) {
          return (
            i(e),
            void 0 === t
              ? e
              : o
              ? a(e, t)
              : function () {
                  return e.apply(t, arguments);
                }
          );
        };
      },
      8987: (e, t, r) => {
        var n = r(6544);
        e.exports = !n(function () {
          var e = function () {}.bind();
          return "function" != typeof e || e.hasOwnProperty("prototype");
        });
      },
      8262: (e, t, r) => {
        var n = r(8987),
          i = Function.prototype.call;
        e.exports = n
          ? i.bind(i)
          : function () {
              return i.apply(i, arguments);
            };
      },
      4340: (e, t, r) => {
        var n = r(8494),
          i = r(2870),
          o = Function.prototype,
          a = n && Object.getOwnPropertyDescriptor,
          s = i(o, "name"),
          c = s && "something" === function () {}.name,
          u = s && (!n || (n && a(o, "name").configurable));
        e.exports = { EXISTS: s, PROPER: c, CONFIGURABLE: u };
      },
      6887: (e, t, r) => {
        var n = r(9624),
          i = r(7386);
        e.exports = function (e) {
          if ("Function" === n(e)) return i(e);
        };
      },
      7386: (e, t, r) => {
        var n = r(8987),
          i = Function.prototype,
          o = i.call,
          a = n && i.bind.bind(o, o);
        e.exports = n
          ? a
          : function (e) {
              return function () {
                return o.apply(e, arguments);
              };
            };
      },
      5897: (e, t, r) => {
        var n = r(7583),
          i = r(9212),
          o = function (e) {
            return i(e) ? e : void 0;
          };
        e.exports = function (e, t) {
          return arguments.length < 2 ? o(n[e]) : n[e] && n[e][t];
        };
      },
      911: (e, t, r) => {
        var n = r(8257),
          i = r(8505);
        e.exports = function (e, t) {
          var r = e[t];
          return i(r) ? void 0 : n(r);
        };
      },
      7583: (e, t, r) => {
        var n = function (e) {
          return e && e.Math == Math && e;
        };
        e.exports =
          n("object" == typeof globalThis && globalThis) ||
          n("object" == typeof window && window) ||
          n("object" == typeof self && self) ||
          n("object" == typeof r.g && r.g) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      },
      2870: (e, t, r) => {
        var n = r(7386),
          i = r(1324),
          o = n({}.hasOwnProperty);
        e.exports =
          Object.hasOwn ||
          function (e, t) {
            return o(i(e), t);
          };
      },
      4639: (e) => {
        e.exports = {};
      },
      275: (e, t, r) => {
        var n = r(8494),
          i = r(6544),
          o = r(6668);
        e.exports =
          !n &&
          !i(function () {
            return (
              7 !=
              Object.defineProperty(o("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      5044: (e, t, r) => {
        var n = r(7386),
          i = r(6544),
          o = r(9624),
          a = Object,
          s = n("".split);
        e.exports = i(function () {
          return !a("z").propertyIsEnumerable(0);
        })
          ? function (e) {
              return "String" == o(e) ? s(e, "") : a(e);
            }
          : a;
      },
      434: (e, t, r) => {
        var n = r(9212),
          i = r(794),
          o = r(7496);
        e.exports = function (e, t, r) {
          var a, s;
          return (
            o &&
              n((a = t.constructor)) &&
              a !== r &&
              i((s = a.prototype)) &&
              s !== r.prototype &&
              o(e, s),
            e
          );
        };
      },
      9734: (e, t, r) => {
        var n = r(7386),
          i = r(9212),
          o = r(1314),
          a = n(Function.toString);
        i(o.inspectSource) ||
          (o.inspectSource = function (e) {
            return a(e);
          }),
          (e.exports = o.inspectSource);
      },
      4402: (e, t, r) => {
        var n = r(794),
          i = r(57);
        e.exports = function (e, t) {
          n(t) && "cause" in t && i(e, "cause", t.cause);
        };
      },
      2743: (e, t, r) => {
        var n,
          i,
          o,
          a = r(5307),
          s = r(7583),
          c = r(794),
          u = r(57),
          l = r(2870),
          f = r(1314),
          d = r(9137),
          g = r(4639),
          p = "Object already initialized",
          m = s.TypeError,
          h = s.WeakMap;
        if (a || f.state) {
          var v = f.state || (f.state = new h());
          (v.get = v.get),
            (v.has = v.has),
            (v.set = v.set),
            (n = function (e, t) {
              if (v.has(e)) throw m(p);
              return (t.facade = e), v.set(e, t), t;
            }),
            (i = function (e) {
              return v.get(e) || {};
            }),
            (o = function (e) {
              return v.has(e);
            });
        } else {
          var A = d("state");
          (g[A] = !0),
            (n = function (e, t) {
              if (l(e, A)) throw m(p);
              return (t.facade = e), u(e, A, t), t;
            }),
            (i = function (e) {
              return l(e, A) ? e[A] : {};
            }),
            (o = function (e) {
              return l(e, A);
            });
        }
        e.exports = {
          set: n,
          get: i,
          has: o,
          enforce: function (e) {
            return o(e) ? i(e) : n(e, {});
          },
          getterFor: function (e) {
            return function (t) {
              var r;
              if (!c(t) || (r = i(t)).type !== e)
                throw m("Incompatible receiver, " + e + " required");
              return r;
            };
          },
        };
      },
      4521: (e, t, r) => {
        var n = r(9624);
        e.exports =
          Array.isArray ||
          function (e) {
            return "Array" == n(e);
          };
      },
      9212: (e, t, r) => {
        var n = r(2952),
          i = n.all;
        e.exports = n.IS_HTMLDDA
          ? function (e) {
              return "function" == typeof e || e === i;
            }
          : function (e) {
              return "function" == typeof e;
            };
      },
      4451: (e, t, r) => {
        var n = r(6544),
          i = r(9212),
          o = /#|\.prototype\./,
          a = function (e, t) {
            var r = c[s(e)];
            return r == l || (r != u && (i(t) ? n(t) : !!t));
          },
          s = (a.normalize = function (e) {
            return String(e).replace(o, ".").toLowerCase();
          }),
          c = (a.data = {}),
          u = (a.NATIVE = "N"),
          l = (a.POLYFILL = "P");
        e.exports = a;
      },
      8505: (e) => {
        e.exports = function (e) {
          return null == e;
        };
      },
      794: (e, t, r) => {
        var n = r(9212),
          i = r(2952),
          o = i.all;
        e.exports = i.IS_HTMLDDA
          ? function (e) {
              return "object" == typeof e ? null !== e : n(e) || e === o;
            }
          : function (e) {
              return "object" == typeof e ? null !== e : n(e);
            };
      },
      6268: (e) => {
        e.exports = !1;
      },
      5871: (e, t, r) => {
        var n = r(5897),
          i = r(9212),
          o = r(2447),
          a = r(7786),
          s = Object;
        e.exports = a
          ? function (e) {
              return "symbol" == typeof e;
            }
          : function (e) {
              var t = n("Symbol");
              return i(t) && o(t.prototype, s(e));
            };
      },
      1825: (e, t, r) => {
        var n = r(97);
        e.exports = function (e) {
          return n(e.length);
        };
      },
      9594: (e, t, r) => {
        var n = r(6544),
          i = r(9212),
          o = r(2870),
          a = r(8494),
          s = r(4340).CONFIGURABLE,
          c = r(9734),
          u = r(2743),
          l = u.enforce,
          f = u.get,
          d = Object.defineProperty,
          g =
            a &&
            !n(function () {
              return 8 !== d(function () {}, "length", { value: 8 }).length;
            }),
          p = String(String).split("String"),
          m = (e.exports = function (e, t, r) {
            "Symbol(" === String(t).slice(0, 7) &&
              (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
              r && r.getter && (t = "get " + t),
              r && r.setter && (t = "set " + t),
              (!o(e, "name") || (s && e.name !== t)) &&
                (a
                  ? d(e, "name", { value: t, configurable: !0 })
                  : (e.name = t)),
              g &&
                r &&
                o(r, "arity") &&
                e.length !== r.arity &&
                d(e, "length", { value: r.arity });
            try {
              r && o(r, "constructor") && r.constructor
                ? a && d(e, "prototype", { writable: !1 })
                : e.prototype && (e.prototype = void 0);
            } catch (e) {}
            var n = l(e);
            return (
              o(n, "source") ||
                (n.source = p.join("string" == typeof t ? t : "")),
              e
            );
          });
        Function.prototype.toString = m(function () {
          return (i(this) && f(this).source) || c(this);
        }, "toString");
      },
      9021: (e) => {
        var t = Math.ceil,
          r = Math.floor;
        e.exports =
          Math.trunc ||
          function (e) {
            var n = +e;
            return (n > 0 ? r : t)(n);
          };
      },
      2764: (e, t, r) => {
        var n = r(8320);
        e.exports = function (e, t) {
          return void 0 === e ? (arguments.length < 2 ? "" : t) : n(e);
        };
      },
      4615: (e, t, r) => {
        var n = r(8494),
          i = r(275),
          o = r(7670),
          a = r(2569),
          s = r(8734),
          c = TypeError,
          u = Object.defineProperty,
          l = Object.getOwnPropertyDescriptor,
          f = "enumerable",
          d = "configurable",
          g = "writable";
        t.f = n
          ? o
            ? function (e, t, r) {
                if (
                  (a(e),
                  (t = s(t)),
                  a(r),
                  "function" == typeof e &&
                    "prototype" === t &&
                    "value" in r &&
                    g in r &&
                    !r[g])
                ) {
                  var n = l(e, t);
                  n &&
                    n[g] &&
                    ((e[t] = r.value),
                    (r = {
                      configurable: d in r ? r[d] : n[d],
                      enumerable: f in r ? r[f] : n[f],
                      writable: !1,
                    }));
                }
                return u(e, t, r);
              }
            : u
          : function (e, t, r) {
              if ((a(e), (t = s(t)), a(r), i))
                try {
                  return u(e, t, r);
                } catch (e) {}
              if ("get" in r || "set" in r) throw c("Accessors not supported");
              return "value" in r && (e[t] = r.value), e;
            };
      },
      6683: (e, t, r) => {
        var n = r(8494),
          i = r(8262),
          o = r(112),
          a = r(4677),
          s = r(2977),
          c = r(8734),
          u = r(2870),
          l = r(275),
          f = Object.getOwnPropertyDescriptor;
        t.f = n
          ? f
          : function (e, t) {
              if (((e = s(e)), (t = c(t)), l))
                try {
                  return f(e, t);
                } catch (e) {}
              if (u(e, t)) return a(!i(o.f, e, t), e[t]);
            };
      },
      9275: (e, t, r) => {
        var n = r(8356),
          i = r(5690).concat("length", "prototype");
        t.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return n(e, i);
          };
      },
      4012: (e, t) => {
        t.f = Object.getOwnPropertySymbols;
      },
      729: (e, t, r) => {
        var n = r(2870),
          i = r(9212),
          o = r(1324),
          a = r(9137),
          s = r(926),
          c = a("IE_PROTO"),
          u = Object,
          l = u.prototype;
        e.exports = s
          ? u.getPrototypeOf
          : function (e) {
              var t = o(e);
              if (n(t, c)) return t[c];
              var r = t.constructor;
              return i(r) && t instanceof r
                ? r.prototype
                : t instanceof u
                ? l
                : null;
            };
      },
      2447: (e, t, r) => {
        var n = r(7386);
        e.exports = n({}.isPrototypeOf);
      },
      8356: (e, t, r) => {
        var n = r(7386),
          i = r(2870),
          o = r(2977),
          a = r(5766).indexOf,
          s = r(4639),
          c = n([].push);
        e.exports = function (e, t) {
          var r,
            n = o(e),
            u = 0,
            l = [];
          for (r in n) !i(s, r) && i(n, r) && c(l, r);
          for (; t.length > u; ) i(n, (r = t[u++])) && (~a(l, r) || c(l, r));
          return l;
        };
      },
      112: (e, t) => {
        "use strict";
        var r = {}.propertyIsEnumerable,
          n = Object.getOwnPropertyDescriptor,
          i = n && !r.call({ 1: 2 }, 1);
        t.f = i
          ? function (e) {
              var t = n(this, e);
              return !!t && t.enumerable;
            }
          : r;
      },
      7496: (e, t, r) => {
        var n = r(7386),
          i = r(2569),
          o = r(9882);
        e.exports =
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function () {
                var e,
                  t = !1,
                  r = {};
                try {
                  (e = n(
                    Object.getOwnPropertyDescriptor(
                      Object.prototype,
                      "__proto__"
                    ).set
                  ))(r, []),
                    (t = r instanceof Array);
                } catch (e) {}
                return function (r, n) {
                  return i(r), o(n), t ? e(r, n) : (r.__proto__ = n), r;
                };
              })()
            : void 0);
      },
      6252: (e, t, r) => {
        var n = r(8262),
          i = r(9212),
          o = r(794),
          a = TypeError;
        e.exports = function (e, t) {
          var r, s;
          if ("string" === t && i((r = e.toString)) && !o((s = n(r, e))))
            return s;
          if (i((r = e.valueOf)) && !o((s = n(r, e)))) return s;
          if ("string" !== t && i((r = e.toString)) && !o((s = n(r, e))))
            return s;
          throw a("Can't convert object to primitive value");
        };
      },
      929: (e, t, r) => {
        var n = r(5897),
          i = r(7386),
          o = r(9275),
          a = r(4012),
          s = r(2569),
          c = i([].concat);
        e.exports =
          n("Reflect", "ownKeys") ||
          function (e) {
            var t = o.f(s(e)),
              r = a.f;
            return r ? c(t, r(e)) : t;
          };
      },
      5327: (e, t, r) => {
        var n = r(4615).f;
        e.exports = function (e, t, r) {
          r in e ||
            n(e, r, {
              configurable: !0,
              get: function () {
                return t[r];
              },
              set: function (e) {
                t[r] = e;
              },
            });
        };
      },
      3955: (e, t, r) => {
        var n = r(8505),
          i = TypeError;
        e.exports = function (e) {
          if (n(e)) throw i("Can't call method on " + e);
          return e;
        };
      },
      9137: (e, t, r) => {
        var n = r(7836),
          i = r(8284),
          o = n("keys");
        e.exports = function (e) {
          return o[e] || (o[e] = i(e));
        };
      },
      1314: (e, t, r) => {
        var n = r(7583),
          i = r(2296),
          o = "__core-js_shared__",
          a = n[o] || i(o, {});
        e.exports = a;
      },
      7836: (e, t, r) => {
        var n = r(6268),
          i = r(1314);
        (e.exports = function (e, t) {
          return i[e] || (i[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.26.1",
          mode: n ? "pure" : "global",
          copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",
          source: "https://github.com/zloirock/core-js",
        });
      },
      4193: (e, t, r) => {
        var n = r(4061),
          i = r(6544);
        e.exports =
          !!Object.getOwnPropertySymbols &&
          !i(function () {
            var e = Symbol();
            return (
              !String(e) ||
              !(Object(e) instanceof Symbol) ||
              (!Symbol.sham && n && n < 41)
            );
          });
      },
      6782: (e, t, r) => {
        var n = r(7486),
          i = Math.max,
          o = Math.min;
        e.exports = function (e, t) {
          var r = n(e);
          return r < 0 ? i(r + t, 0) : o(r, t);
        };
      },
      2977: (e, t, r) => {
        var n = r(5044),
          i = r(3955);
        e.exports = function (e) {
          return n(i(e));
        };
      },
      7486: (e, t, r) => {
        var n = r(9021);
        e.exports = function (e) {
          var t = +e;
          return t != t || 0 === t ? 0 : n(t);
        };
      },
      97: (e, t, r) => {
        var n = r(7486),
          i = Math.min;
        e.exports = function (e) {
          return e > 0 ? i(n(e), 9007199254740991) : 0;
        };
      },
      1324: (e, t, r) => {
        var n = r(3955),
          i = Object;
        e.exports = function (e) {
          return i(n(e));
        };
      },
      3248: (e, t, r) => {
        var n = r(2955),
          i = RangeError;
        e.exports = function (e, t) {
          var r = n(e);
          if (r % t) throw i("Wrong offset");
          return r;
        };
      },
      2955: (e, t, r) => {
        var n = r(7486),
          i = RangeError;
        e.exports = function (e) {
          var t = n(e);
          if (t < 0) throw i("The argument can't be less than 0");
          return t;
        };
      },
      2670: (e, t, r) => {
        var n = r(8262),
          i = r(794),
          o = r(5871),
          a = r(911),
          s = r(6252),
          c = r(3649),
          u = TypeError,
          l = c("toPrimitive");
        e.exports = function (e, t) {
          if (!i(e) || o(e)) return e;
          var r,
            c = a(e, l);
          if (c) {
            if (
              (void 0 === t && (t = "default"), (r = n(c, e, t)), !i(r) || o(r))
            )
              return r;
            throw u("Can't convert object to primitive value");
          }
          return void 0 === t && (t = "number"), s(e, t);
        };
      },
      8734: (e, t, r) => {
        var n = r(2670),
          i = r(5871);
        e.exports = function (e) {
          var t = n(e, "string");
          return i(t) ? t : t + "";
        };
      },
      8191: (e, t, r) => {
        var n = {};
        (n[r(3649)("toStringTag")] = "z"),
          (e.exports = "[object z]" === String(n));
      },
      8320: (e, t, r) => {
        var n = r(3058),
          i = String;
        e.exports = function (e) {
          if ("Symbol" === n(e))
            throw TypeError("Cannot convert a Symbol value to a string");
          return i(e);
        };
      },
      5637: (e) => {
        var t = String;
        e.exports = function (e) {
          try {
            return t(e);
          } catch (e) {
            return "Object";
          }
        };
      },
      8284: (e, t, r) => {
        var n = r(7386),
          i = 0,
          o = Math.random(),
          a = n((1).toString);
        e.exports = function (e) {
          return "Symbol(" + (void 0 === e ? "" : e) + ")_" + a(++i + o, 36);
        };
      },
      7786: (e, t, r) => {
        var n = r(4193);
        e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      7670: (e, t, r) => {
        var n = r(8494),
          i = r(6544);
        e.exports =
          n &&
          i(function () {
            return (
              42 !=
              Object.defineProperty(function () {}, "prototype", {
                value: 42,
                writable: !1,
              }).prototype
            );
          });
      },
      5307: (e, t, r) => {
        var n = r(7583),
          i = r(9212),
          o = n.WeakMap;
        e.exports = i(o) && /native code/.test(String(o));
      },
      3649: (e, t, r) => {
        var n = r(7583),
          i = r(7836),
          o = r(2870),
          a = r(8284),
          s = r(4193),
          c = r(7786),
          u = i("wks"),
          l = n.Symbol,
          f = l && l.for,
          d = c ? l : (l && l.withoutSetter) || a;
        e.exports = function (e) {
          if (!o(u, e) || (!s && "string" != typeof u[e])) {
            var t = "Symbol." + e;
            s && o(l, e) ? (u[e] = l[e]) : (u[e] = c && f ? f(t) : d(t));
          }
          return u[e];
        };
      },
      7442: (e, t, r) => {
        "use strict";
        var n = r(5897),
          i = r(2870),
          o = r(57),
          a = r(2447),
          s = r(7496),
          c = r(3478),
          u = r(5327),
          l = r(434),
          f = r(2764),
          d = r(4402),
          g = r(668),
          p = r(1178),
          m = r(8494),
          h = r(6268);
        e.exports = function (e, t, r, v) {
          var A = "stackTraceLimit",
            y = v ? 2 : 1,
            w = e.split("."),
            b = w[w.length - 1],
            x = n.apply(null, w);
          if (x) {
            var _ = x.prototype;
            if ((!h && i(_, "cause") && delete _.cause, !r)) return x;
            var S = n("Error"),
              M = t(function (e, t) {
                var r = f(v ? t : e, void 0),
                  n = v ? new x(e) : new x();
                return (
                  void 0 !== r && o(n, "message", r),
                  p && o(n, "stack", g(n.stack, 2)),
                  this && a(_, this) && l(n, this, M),
                  arguments.length > y && d(n, arguments[y]),
                  n
                );
              });
            if (
              ((M.prototype = _),
              "Error" !== b
                ? s
                  ? s(M, S)
                  : c(M, S, { name: !0 })
                : m && A in x && (u(M, x, A), u(M, x, "prepareStackTrace")),
              c(M, x),
              !h)
            )
              try {
                _.name !== b && o(_, "name", b), (_.constructor = M);
              } catch (e) {}
            return M;
          }
        };
      },
      4573: (e, t, r) => {
        "use strict";
        var n = r(7263),
          i = r(1324),
          o = r(1825),
          a = r(8173),
          s = r(6768),
          c = r(6544)(function () {
            return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
          }),
          u = !(function () {
            try {
              Object.defineProperty([], "length", { writable: !1 }).push();
            } catch (e) {
              return e instanceof TypeError;
            }
          })();
        n(
          { target: "Array", proto: !0, arity: 1, forced: c || u },
          {
            push: function (e) {
              var t = i(this),
                r = o(t),
                n = arguments.length;
              s(r + n);
              for (var c = 0; c < n; c++) (t[r] = arguments[c]), r++;
              return a(t, r), r;
            },
          }
        );
      },
      8487: (e, t, r) => {
        var n = r(7263),
          i = r(7583),
          o = r(1611),
          a = r(7442),
          s = "WebAssembly",
          c = i[s],
          u = 7 !== Error("e", { cause: 7 }).cause,
          l = function (e, t) {
            var r = {};
            (r[e] = a(e, t, u)),
              n({ global: !0, constructor: !0, arity: 1, forced: u }, r);
          },
          f = function (e, t) {
            if (c && c[e]) {
              var r = {};
              (r[e] = a(s + "." + e, t, u)),
                n(
                  { target: s, stat: !0, constructor: !0, arity: 1, forced: u },
                  r
                );
            }
          };
        l("Error", function (e) {
          return function (t) {
            return o(e, this, arguments);
          };
        }),
          l("EvalError", function (e) {
            return function (t) {
              return o(e, this, arguments);
            };
          }),
          l("RangeError", function (e) {
            return function (t) {
              return o(e, this, arguments);
            };
          }),
          l("ReferenceError", function (e) {
            return function (t) {
              return o(e, this, arguments);
            };
          }),
          l("SyntaxError", function (e) {
            return function (t) {
              return o(e, this, arguments);
            };
          }),
          l("TypeError", function (e) {
            return function (t) {
              return o(e, this, arguments);
            };
          }),
          l("URIError", function (e) {
            return function (t) {
              return o(e, this, arguments);
            };
          }),
          f("CompileError", function (e) {
            return function (t) {
              return o(e, this, arguments);
            };
          }),
          f("LinkError", function (e) {
            return function (t) {
              return o(e, this, arguments);
            };
          }),
          f("RuntimeError", function (e) {
            return function (t) {
              return o(e, this, arguments);
            };
          });
      },
      7391: (e, t, r) => {
        "use strict";
        var n = r(3977),
          i = r(2544).findLastIndex,
          o = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("findLastIndex", function (e) {
          return i(o(this), e, arguments.length > 1 ? arguments[1] : void 0);
        });
      },
      6205: (e, t, r) => {
        "use strict";
        var n = r(3977),
          i = r(2544).findLast,
          o = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("findLast", function (e) {
          return i(o(this), e, arguments.length > 1 ? arguments[1] : void 0);
        });
      },
      9494: (e, t, r) => {
        "use strict";
        var n = r(7583),
          i = r(8262),
          o = r(3977),
          a = r(1825),
          s = r(3248),
          c = r(1324),
          u = r(6544),
          l = n.RangeError,
          f = n.Int8Array,
          d = f && f.prototype,
          g = d && d.set,
          p = o.aTypedArray,
          m = o.exportTypedArrayMethod,
          h = !u(function () {
            var e = new Uint8ClampedArray(2);
            return i(g, e, { length: 1, 0: 3 }, 1), 3 !== e[1];
          }),
          v =
            h &&
            o.NATIVE_ARRAY_BUFFER_VIEWS &&
            u(function () {
              var e = new f(2);
              return e.set(1), e.set("2", 1), 0 !== e[0] || 2 !== e[1];
            });
        m(
          "set",
          function (e) {
            p(this);
            var t = s(arguments.length > 1 ? arguments[1] : void 0, 1),
              r = c(e);
            if (h) return i(g, this, r, t);
            var n = this.length,
              o = a(r),
              u = 0;
            if (o + t > n) throw l("Wrong length");
            for (; u < o; ) this[t + u] = r[u++];
          },
          !h || v
        );
      },
      2241: (e, t, r) => {
        "use strict";
        var n = r(7263),
          i = r(7583),
          o = r(5897),
          a = r(4677),
          s = r(4615).f,
          c = r(2870),
          u = r(4761),
          l = r(434),
          f = r(2764),
          d = r(5331),
          g = r(668),
          p = r(8494),
          m = r(6268),
          h = "DOMException",
          v = o("Error"),
          A = o(h),
          y = function () {
            u(this, w);
            var e = arguments.length,
              t = f(e < 1 ? void 0 : arguments[0]),
              r = f(e < 2 ? void 0 : arguments[1], "Error"),
              n = new A(t, r),
              i = v(t);
            return (
              (i.name = h), s(n, "stack", a(1, g(i.stack, 1))), l(n, this, y), n
            );
          },
          w = (y.prototype = A.prototype),
          b = "stack" in v(h),
          x = "stack" in new A(1, 2),
          _ = A && p && Object.getOwnPropertyDescriptor(i, h),
          S = !(!_ || (_.writable && _.configurable)),
          M = b && !S && !x;
        n(
          { global: !0, constructor: !0, forced: m || M },
          { DOMException: M ? y : A }
        );
        var E = o(h),
          O = E.prototype;
        if (O.constructor !== E)
          for (var P in (m || s(O, "constructor", a(1, E)), d))
            if (c(d, P)) {
              var T = d[P],
                R = T.s;
              c(E, R) || s(E, R, a(6, T.c));
            }
      },
      3192: function (e, t, r) {
        var n;
        e.exports =
          ((n = r(2751)),
          r(20),
          r(4716),
          r(6147),
          r(1575),
          (function () {
            var e = n,
              t = e.lib.BlockCipher,
              r = e.algo,
              i = [],
              o = [],
              a = [],
              s = [],
              c = [],
              u = [],
              l = [],
              f = [],
              d = [],
              g = [];
            !(function () {
              for (var e = [], t = 0; t < 256; t++)
                e[t] = t < 128 ? t << 1 : (t << 1) ^ 283;
              var r = 0,
                n = 0;
              for (t = 0; t < 256; t++) {
                var p = n ^ (n << 1) ^ (n << 2) ^ (n << 3) ^ (n << 4);
                (p = (p >>> 8) ^ (255 & p) ^ 99), (i[r] = p), (o[p] = r);
                var m = e[r],
                  h = e[m],
                  v = e[h],
                  A = (257 * e[p]) ^ (16843008 * p);
                (a[r] = (A << 24) | (A >>> 8)),
                  (s[r] = (A << 16) | (A >>> 16)),
                  (c[r] = (A << 8) | (A >>> 24)),
                  (u[r] = A),
                  (A =
                    (16843009 * v) ^ (65537 * h) ^ (257 * m) ^ (16843008 * r)),
                  (l[p] = (A << 24) | (A >>> 8)),
                  (f[p] = (A << 16) | (A >>> 16)),
                  (d[p] = (A << 8) | (A >>> 24)),
                  (g[p] = A),
                  r ? ((r = m ^ e[e[e[v ^ m]]]), (n ^= e[e[n]])) : (r = n = 1);
              }
            })();
            var p = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
              m = (r.AES = t.extend({
                _doReset: function () {
                  if (!this._nRounds || this._keyPriorReset !== this._key) {
                    for (
                      var e = (this._keyPriorReset = this._key),
                        t = e.words,
                        r = e.sigBytes / 4,
                        n = 4 * ((this._nRounds = r + 6) + 1),
                        o = (this._keySchedule = []),
                        a = 0;
                      a < n;
                      a++
                    )
                      a < r
                        ? (o[a] = t[a])
                        : ((u = o[a - 1]),
                          a % r
                            ? r > 6 &&
                              a % r == 4 &&
                              (u =
                                (i[u >>> 24] << 24) |
                                (i[(u >>> 16) & 255] << 16) |
                                (i[(u >>> 8) & 255] << 8) |
                                i[255 & u])
                            : ((u =
                                (i[(u = (u << 8) | (u >>> 24)) >>> 24] << 24) |
                                (i[(u >>> 16) & 255] << 16) |
                                (i[(u >>> 8) & 255] << 8) |
                                i[255 & u]),
                              (u ^= p[(a / r) | 0] << 24)),
                          (o[a] = o[a - r] ^ u));
                    for (
                      var s = (this._invKeySchedule = []), c = 0;
                      c < n;
                      c++
                    ) {
                      if (((a = n - c), c % 4)) var u = o[a];
                      else u = o[a - 4];
                      s[c] =
                        c < 4 || a <= 4
                          ? u
                          : l[i[u >>> 24]] ^
                            f[i[(u >>> 16) & 255]] ^
                            d[i[(u >>> 8) & 255]] ^
                            g[i[255 & u]];
                    }
                  }
                },
                encryptBlock: function (e, t) {
                  this._doCryptBlock(e, t, this._keySchedule, a, s, c, u, i);
                },
                decryptBlock: function (e, t) {
                  var r = e[t + 1];
                  (e[t + 1] = e[t + 3]),
                    (e[t + 3] = r),
                    this._doCryptBlock(
                      e,
                      t,
                      this._invKeySchedule,
                      l,
                      f,
                      d,
                      g,
                      o
                    ),
                    (r = e[t + 1]),
                    (e[t + 1] = e[t + 3]),
                    (e[t + 3] = r);
                },
                _doCryptBlock: function (e, t, r, n, i, o, a, s) {
                  for (
                    var c = this._nRounds,
                      u = e[t] ^ r[0],
                      l = e[t + 1] ^ r[1],
                      f = e[t + 2] ^ r[2],
                      d = e[t + 3] ^ r[3],
                      g = 4,
                      p = 1;
                    p < c;
                    p++
                  ) {
                    var m =
                        n[u >>> 24] ^
                        i[(l >>> 16) & 255] ^
                        o[(f >>> 8) & 255] ^
                        a[255 & d] ^
                        r[g++],
                      h =
                        n[l >>> 24] ^
                        i[(f >>> 16) & 255] ^
                        o[(d >>> 8) & 255] ^
                        a[255 & u] ^
                        r[g++],
                      v =
                        n[f >>> 24] ^
                        i[(d >>> 16) & 255] ^
                        o[(u >>> 8) & 255] ^
                        a[255 & l] ^
                        r[g++],
                      A =
                        n[d >>> 24] ^
                        i[(u >>> 16) & 255] ^
                        o[(l >>> 8) & 255] ^
                        a[255 & f] ^
                        r[g++];
                    (u = m), (l = h), (f = v), (d = A);
                  }
                  (m =
                    ((s[u >>> 24] << 24) |
                      (s[(l >>> 16) & 255] << 16) |
                      (s[(f >>> 8) & 255] << 8) |
                      s[255 & d]) ^
                    r[g++]),
                    (h =
                      ((s[l >>> 24] << 24) |
                        (s[(f >>> 16) & 255] << 16) |
                        (s[(d >>> 8) & 255] << 8) |
                        s[255 & u]) ^
                      r[g++]),
                    (v =
                      ((s[f >>> 24] << 24) |
                        (s[(d >>> 16) & 255] << 16) |
                        (s[(u >>> 8) & 255] << 8) |
                        s[255 & l]) ^
                      r[g++]),
                    (A =
                      ((s[d >>> 24] << 24) |
                        (s[(u >>> 16) & 255] << 16) |
                        (s[(l >>> 8) & 255] << 8) |
                        s[255 & f]) ^
                      r[g++]),
                    (e[t] = m),
                    (e[t + 1] = h),
                    (e[t + 2] = v),
                    (e[t + 3] = A);
                },
                keySize: 8,
              }));
            e.AES = t._createHelper(m);
          })(),
          n.AES);
      },
      1575: function (e, t, r) {
        var n, i, o, a, s, c, u, l, f, d, g, p, m, h, v, A, y, w, b;
        e.exports =
          ((n = r(2751)),
          r(6147),
          void (
            n.lib.Cipher ||
            ((i = n),
            (o = i.lib),
            (a = o.Base),
            (s = o.WordArray),
            (c = o.BufferedBlockAlgorithm),
            (u = i.enc),
            u.Utf8,
            (l = u.Base64),
            (f = i.algo.EvpKDF),
            (d = o.Cipher =
              c.extend({
                cfg: a.extend(),
                createEncryptor: function (e, t) {
                  return this.create(this._ENC_XFORM_MODE, e, t);
                },
                createDecryptor: function (e, t) {
                  return this.create(this._DEC_XFORM_MODE, e, t);
                },
                init: function (e, t, r) {
                  (this.cfg = this.cfg.extend(r)),
                    (this._xformMode = e),
                    (this._key = t),
                    this.reset();
                },
                reset: function () {
                  c.reset.call(this), this._doReset();
                },
                process: function (e) {
                  return this._append(e), this._process();
                },
                finalize: function (e) {
                  return e && this._append(e), this._doFinalize();
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: (function () {
                  function e(e) {
                    return "string" == typeof e ? b : y;
                  }
                  return function (t) {
                    return {
                      encrypt: function (r, n, i) {
                        return e(n).encrypt(t, r, n, i);
                      },
                      decrypt: function (r, n, i) {
                        return e(n).decrypt(t, r, n, i);
                      },
                    };
                  };
                })(),
              })),
            (o.StreamCipher = d.extend({
              _doFinalize: function () {
                return this._process(!0);
              },
              blockSize: 1,
            })),
            (g = i.mode = {}),
            (p = o.BlockCipherMode =
              a.extend({
                createEncryptor: function (e, t) {
                  return this.Encryptor.create(e, t);
                },
                createDecryptor: function (e, t) {
                  return this.Decryptor.create(e, t);
                },
                init: function (e, t) {
                  (this._cipher = e), (this._iv = t);
                },
              })),
            (m = g.CBC =
              (function () {
                var e = p.extend();
                function t(e, t, r) {
                  var n,
                    i = this._iv;
                  i ? ((n = i), (this._iv = void 0)) : (n = this._prevBlock);
                  for (var o = 0; o < r; o++) e[t + o] ^= n[o];
                }
                return (
                  (e.Encryptor = e.extend({
                    processBlock: function (e, r) {
                      var n = this._cipher,
                        i = n.blockSize;
                      t.call(this, e, r, i),
                        n.encryptBlock(e, r),
                        (this._prevBlock = e.slice(r, r + i));
                    },
                  })),
                  (e.Decryptor = e.extend({
                    processBlock: function (e, r) {
                      var n = this._cipher,
                        i = n.blockSize,
                        o = e.slice(r, r + i);
                      n.decryptBlock(e, r),
                        t.call(this, e, r, i),
                        (this._prevBlock = o);
                    },
                  })),
                  e
                );
              })()),
            (h = (i.pad = {}).Pkcs7 =
              {
                pad: function (e, t) {
                  for (
                    var r = 4 * t,
                      n = r - (e.sigBytes % r),
                      i = (n << 24) | (n << 16) | (n << 8) | n,
                      o = [],
                      a = 0;
                    a < n;
                    a += 4
                  )
                    o.push(i);
                  var c = s.create(o, n);
                  e.concat(c);
                },
                unpad: function (e) {
                  var t = 255 & e.words[(e.sigBytes - 1) >>> 2];
                  e.sigBytes -= t;
                },
              }),
            (o.BlockCipher = d.extend({
              cfg: d.cfg.extend({ mode: m, padding: h }),
              reset: function () {
                var e;
                d.reset.call(this);
                var t = this.cfg,
                  r = t.iv,
                  n = t.mode;
                this._xformMode == this._ENC_XFORM_MODE
                  ? (e = n.createEncryptor)
                  : ((e = n.createDecryptor), (this._minBufferSize = 1)),
                  this._mode && this._mode.__creator == e
                    ? this._mode.init(this, r && r.words)
                    : ((this._mode = e.call(n, this, r && r.words)),
                      (this._mode.__creator = e));
              },
              _doProcessBlock: function (e, t) {
                this._mode.processBlock(e, t);
              },
              _doFinalize: function () {
                var e,
                  t = this.cfg.padding;
                return (
                  this._xformMode == this._ENC_XFORM_MODE
                    ? (t.pad(this._data, this.blockSize),
                      (e = this._process(!0)))
                    : ((e = this._process(!0)), t.unpad(e)),
                  e
                );
              },
              blockSize: 4,
            })),
            (v = o.CipherParams =
              a.extend({
                init: function (e) {
                  this.mixIn(e);
                },
                toString: function (e) {
                  return (e || this.formatter).stringify(this);
                },
              })),
            (A = (i.format = {}).OpenSSL =
              {
                stringify: function (e) {
                  var t = e.ciphertext,
                    r = e.salt;
                  return (
                    r
                      ? s.create([1398893684, 1701076831]).concat(r).concat(t)
                      : t
                  ).toString(l);
                },
                parse: function (e) {
                  var t,
                    r = l.parse(e),
                    n = r.words;
                  return (
                    1398893684 == n[0] &&
                      1701076831 == n[1] &&
                      ((t = s.create(n.slice(2, 4))),
                      n.splice(0, 4),
                      (r.sigBytes -= 16)),
                    v.create({ ciphertext: r, salt: t })
                  );
                },
              }),
            (y = o.SerializableCipher =
              a.extend({
                cfg: a.extend({ format: A }),
                encrypt: function (e, t, r, n) {
                  n = this.cfg.extend(n);
                  var i = e.createEncryptor(r, n),
                    o = i.finalize(t),
                    a = i.cfg;
                  return v.create({
                    ciphertext: o,
                    key: r,
                    iv: a.iv,
                    algorithm: e,
                    mode: a.mode,
                    padding: a.padding,
                    blockSize: e.blockSize,
                    formatter: n.format,
                  });
                },
                decrypt: function (e, t, r, n) {
                  return (
                    (n = this.cfg.extend(n)),
                    (t = this._parse(t, n.format)),
                    e.createDecryptor(r, n).finalize(t.ciphertext)
                  );
                },
                _parse: function (e, t) {
                  return "string" == typeof e ? t.parse(e, this) : e;
                },
              })),
            (w = (i.kdf = {}).OpenSSL =
              {
                execute: function (e, t, r, n) {
                  n || (n = s.random(8));
                  var i = f.create({ keySize: t + r }).compute(e, n),
                    o = s.create(i.words.slice(t), 4 * r);
                  return (
                    (i.sigBytes = 4 * t), v.create({ key: i, iv: o, salt: n })
                  );
                },
              }),
            (b = o.PasswordBasedCipher =
              y.extend({
                cfg: y.cfg.extend({ kdf: w }),
                encrypt: function (e, t, r, n) {
                  var i = (n = this.cfg.extend(n)).kdf.execute(
                    r,
                    e.keySize,
                    e.ivSize
                  );
                  n.iv = i.iv;
                  var o = y.encrypt.call(this, e, t, i.key, n);
                  return o.mixIn(i), o;
                },
                decrypt: function (e, t, r, n) {
                  (n = this.cfg.extend(n)), (t = this._parse(t, n.format));
                  var i = n.kdf.execute(r, e.keySize, e.ivSize, t.salt);
                  return (n.iv = i.iv), y.decrypt.call(this, e, t, i.key, n);
                },
              })))
          ));
      },
      2751: function (e, t, r) {
        var n;
        e.exports =
          ((n =
            n ||
            (function (e, t) {
              var n;
              if (
                ("undefined" != typeof window &&
                  window.crypto &&
                  (n = window.crypto),
                "undefined" != typeof self && self.crypto && (n = self.crypto),
                "undefined" != typeof globalThis &&
                  globalThis.crypto &&
                  (n = globalThis.crypto),
                !n &&
                  "undefined" != typeof window &&
                  window.msCrypto &&
                  (n = window.msCrypto),
                !n && void 0 !== r.g && r.g.crypto && (n = r.g.crypto),
                !n)
              )
                try {
                  n = r(2480);
                } catch (e) {}
              var i = function () {
                  if (n) {
                    if ("function" == typeof n.getRandomValues)
                      try {
                        return n.getRandomValues(new Uint32Array(1))[0];
                      } catch (e) {}
                    if ("function" == typeof n.randomBytes)
                      try {
                        return n.randomBytes(4).readInt32LE();
                      } catch (e) {}
                  }
                  throw new Error(
                    "Native crypto module could not be used to get secure random number."
                  );
                },
                o =
                  Object.create ||
                  (function () {
                    function e() {}
                    return function (t) {
                      var r;
                      return (
                        (e.prototype = t),
                        (r = new e()),
                        (e.prototype = null),
                        r
                      );
                    };
                  })(),
                a = {},
                s = (a.lib = {}),
                c = (s.Base = {
                  extend: function (e) {
                    var t = o(this);
                    return (
                      e && t.mixIn(e),
                      (t.hasOwnProperty("init") && this.init !== t.init) ||
                        (t.init = function () {
                          t.$super.init.apply(this, arguments);
                        }),
                      (t.init.prototype = t),
                      (t.$super = this),
                      t
                    );
                  },
                  create: function () {
                    var e = this.extend();
                    return e.init.apply(e, arguments), e;
                  },
                  init: function () {},
                  mixIn: function (e) {
                    for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                    e.hasOwnProperty("toString") &&
                      (this.toString = e.toString);
                  },
                  clone: function () {
                    return this.init.prototype.extend(this);
                  },
                }),
                u = (s.WordArray = c.extend({
                  init: function (e, t) {
                    (e = this.words = e || []),
                      (this.sigBytes = null != t ? t : 4 * e.length);
                  },
                  toString: function (e) {
                    return (e || f).stringify(this);
                  },
                  concat: function (e) {
                    var t = this.words,
                      r = e.words,
                      n = this.sigBytes,
                      i = e.sigBytes;
                    if ((this.clamp(), n % 4))
                      for (var o = 0; o < i; o++) {
                        var a = (r[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
                        t[(n + o) >>> 2] |= a << (24 - ((n + o) % 4) * 8);
                      }
                    else
                      for (var s = 0; s < i; s += 4)
                        t[(n + s) >>> 2] = r[s >>> 2];
                    return (this.sigBytes += i), this;
                  },
                  clamp: function () {
                    var t = this.words,
                      r = this.sigBytes;
                    (t[r >>> 2] &= 4294967295 << (32 - (r % 4) * 8)),
                      (t.length = e.ceil(r / 4));
                  },
                  clone: function () {
                    var e = c.clone.call(this);
                    return (e.words = this.words.slice(0)), e;
                  },
                  random: function (e) {
                    for (var t = [], r = 0; r < e; r += 4) t.push(i());
                    return new u.init(t, e);
                  },
                })),
                l = (a.enc = {}),
                f = (l.Hex = {
                  stringify: function (e) {
                    for (
                      var t = e.words, r = e.sigBytes, n = [], i = 0;
                      i < r;
                      i++
                    ) {
                      var o = (t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                      n.push((o >>> 4).toString(16)),
                        n.push((15 & o).toString(16));
                    }
                    return n.join("");
                  },
                  parse: function (e) {
                    for (var t = e.length, r = [], n = 0; n < t; n += 2)
                      r[n >>> 3] |=
                        parseInt(e.substr(n, 2), 16) << (24 - (n % 8) * 4);
                    return new u.init(r, t / 2);
                  },
                }),
                d = (l.Latin1 = {
                  stringify: function (e) {
                    for (
                      var t = e.words, r = e.sigBytes, n = [], i = 0;
                      i < r;
                      i++
                    ) {
                      var o = (t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                      n.push(String.fromCharCode(o));
                    }
                    return n.join("");
                  },
                  parse: function (e) {
                    for (var t = e.length, r = [], n = 0; n < t; n++)
                      r[n >>> 2] |=
                        (255 & e.charCodeAt(n)) << (24 - (n % 4) * 8);
                    return new u.init(r, t);
                  },
                }),
                g = (l.Utf8 = {
                  stringify: function (e) {
                    try {
                      return decodeURIComponent(escape(d.stringify(e)));
                    } catch (e) {
                      throw new Error("Malformed UTF-8 data");
                    }
                  },
                  parse: function (e) {
                    return d.parse(unescape(encodeURIComponent(e)));
                  },
                }),
                p = (s.BufferedBlockAlgorithm = c.extend({
                  reset: function () {
                    (this._data = new u.init()), (this._nDataBytes = 0);
                  },
                  _append: function (e) {
                    "string" == typeof e && (e = g.parse(e)),
                      this._data.concat(e),
                      (this._nDataBytes += e.sigBytes);
                  },
                  _process: function (t) {
                    var r,
                      n = this._data,
                      i = n.words,
                      o = n.sigBytes,
                      a = this.blockSize,
                      s = o / (4 * a),
                      c =
                        (s = t
                          ? e.ceil(s)
                          : e.max((0 | s) - this._minBufferSize, 0)) * a,
                      l = e.min(4 * c, o);
                    if (c) {
                      for (var f = 0; f < c; f += a) this._doProcessBlock(i, f);
                      (r = i.splice(0, c)), (n.sigBytes -= l);
                    }
                    return new u.init(r, l);
                  },
                  clone: function () {
                    var e = c.clone.call(this);
                    return (e._data = this._data.clone()), e;
                  },
                  _minBufferSize: 0,
                })),
                m =
                  ((s.Hasher = p.extend({
                    cfg: c.extend(),
                    init: function (e) {
                      (this.cfg = this.cfg.extend(e)), this.reset();
                    },
                    reset: function () {
                      p.reset.call(this), this._doReset();
                    },
                    update: function (e) {
                      return this._append(e), this._process(), this;
                    },
                    finalize: function (e) {
                      return e && this._append(e), this._doFinalize();
                    },
                    blockSize: 16,
                    _createHelper: function (e) {
                      return function (t, r) {
                        return new e.init(r).finalize(t);
                      };
                    },
                    _createHmacHelper: function (e) {
                      return function (t, r) {
                        return new m.HMAC.init(e, r).finalize(t);
                      };
                    },
                  })),
                  (a.algo = {}));
              return a;
            })(Math)),
          n);
      },
      20: function (e, t, r) {
        var n, i, o;
        e.exports =
          ((n = r(2751)),
          (o = (i = n).lib.WordArray),
          (i.enc.Base64 = {
            stringify: function (e) {
              var t = e.words,
                r = e.sigBytes,
                n = this._map;
              e.clamp();
              for (var i = [], o = 0; o < r; o += 3)
                for (
                  var a =
                      (((t[o >>> 2] >>> (24 - (o % 4) * 8)) & 255) << 16) |
                      (((t[(o + 1) >>> 2] >>> (24 - ((o + 1) % 4) * 8)) &
                        255) <<
                        8) |
                      ((t[(o + 2) >>> 2] >>> (24 - ((o + 2) % 4) * 8)) & 255),
                    s = 0;
                  s < 4 && o + 0.75 * s < r;
                  s++
                )
                  i.push(n.charAt((a >>> (6 * (3 - s))) & 63));
              var c = n.charAt(64);
              if (c) for (; i.length % 4; ) i.push(c);
              return i.join("");
            },
            parse: function (e) {
              var t = e.length,
                r = this._map,
                n = this._reverseMap;
              if (!n) {
                n = this._reverseMap = [];
                for (var i = 0; i < r.length; i++) n[r.charCodeAt(i)] = i;
              }
              var a = r.charAt(64);
              if (a) {
                var s = e.indexOf(a);
                -1 !== s && (t = s);
              }
              return (function (e, t, r) {
                for (var n = [], i = 0, a = 0; a < t; a++)
                  if (a % 4) {
                    var s =
                      (r[e.charCodeAt(a - 1)] << ((a % 4) * 2)) |
                      (r[e.charCodeAt(a)] >>> (6 - (a % 4) * 2));
                    (n[i >>> 2] |= s << (24 - (i % 4) * 8)), i++;
                  }
                return o.create(n, i);
              })(e, t, n);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          }),
          n.enc.Base64);
      },
      1733: function (e, t, r) {
        e.exports = r(2751).enc.Utf8;
      },
      6147: function (e, t, r) {
        var n, i, o, a, s, c, u, l;
        e.exports =
          ((l = r(2751)),
          r(3653),
          r(5498),
          (o = (i = (n = l).lib).Base),
          (a = i.WordArray),
          (c = (s = n.algo).MD5),
          (u = s.EvpKDF =
            o.extend({
              cfg: o.extend({ keySize: 4, hasher: c, iterations: 1 }),
              init: function (e) {
                this.cfg = this.cfg.extend(e);
              },
              compute: function (e, t) {
                for (
                  var r,
                    n = this.cfg,
                    i = n.hasher.create(),
                    o = a.create(),
                    s = o.words,
                    c = n.keySize,
                    u = n.iterations;
                  s.length < c;

                ) {
                  r && i.update(r), (r = i.update(e).finalize(t)), i.reset();
                  for (var l = 1; l < u; l++) (r = i.finalize(r)), i.reset();
                  o.concat(r);
                }
                return (o.sigBytes = 4 * c), o;
              },
            })),
          (n.EvpKDF = function (e, t, r) {
            return u.create(r).compute(e, t);
          }),
          l.EvpKDF);
      },
      5498: function (e, t, r) {
        var n, i, o;
        e.exports =
          ((i = (n = r(2751)).lib.Base),
          (o = n.enc.Utf8),
          void (n.algo.HMAC = i.extend({
            init: function (e, t) {
              (e = this._hasher = new e.init()),
                "string" == typeof t && (t = o.parse(t));
              var r = e.blockSize,
                n = 4 * r;
              t.sigBytes > n && (t = e.finalize(t)), t.clamp();
              for (
                var i = (this._oKey = t.clone()),
                  a = (this._iKey = t.clone()),
                  s = i.words,
                  c = a.words,
                  u = 0;
                u < r;
                u++
              )
                (s[u] ^= 1549556828), (c[u] ^= 909522486);
              (i.sigBytes = a.sigBytes = n), this.reset();
            },
            reset: function () {
              var e = this._hasher;
              e.reset(), e.update(this._iKey);
            },
            update: function (e) {
              return this._hasher.update(e), this;
            },
            finalize: function (e) {
              var t = this._hasher,
                r = t.finalize(e);
              return t.reset(), t.finalize(this._oKey.clone().concat(r));
            },
          })));
      },
      4716: function (e, t, r) {
        var n;
        e.exports =
          ((n = r(2751)),
          (function (e) {
            var t = n,
              r = t.lib,
              i = r.WordArray,
              o = r.Hasher,
              a = t.algo,
              s = [];
            !(function () {
              for (var t = 0; t < 64; t++)
                s[t] = (4294967296 * e.abs(e.sin(t + 1))) | 0;
            })();
            var c = (a.MD5 = o.extend({
              _doReset: function () {
                this._hash = new i.init([
                  1732584193, 4023233417, 2562383102, 271733878,
                ]);
              },
              _doProcessBlock: function (e, t) {
                for (var r = 0; r < 16; r++) {
                  var n = t + r,
                    i = e[n];
                  e[n] =
                    (16711935 & ((i << 8) | (i >>> 24))) |
                    (4278255360 & ((i << 24) | (i >>> 8)));
                }
                var o = this._hash.words,
                  a = e[t + 0],
                  c = e[t + 1],
                  g = e[t + 2],
                  p = e[t + 3],
                  m = e[t + 4],
                  h = e[t + 5],
                  v = e[t + 6],
                  A = e[t + 7],
                  y = e[t + 8],
                  w = e[t + 9],
                  b = e[t + 10],
                  x = e[t + 11],
                  _ = e[t + 12],
                  S = e[t + 13],
                  M = e[t + 14],
                  E = e[t + 15],
                  O = o[0],
                  P = o[1],
                  T = o[2],
                  R = o[3];
                (O = u(O, P, T, R, a, 7, s[0])),
                  (R = u(R, O, P, T, c, 12, s[1])),
                  (T = u(T, R, O, P, g, 17, s[2])),
                  (P = u(P, T, R, O, p, 22, s[3])),
                  (O = u(O, P, T, R, m, 7, s[4])),
                  (R = u(R, O, P, T, h, 12, s[5])),
                  (T = u(T, R, O, P, v, 17, s[6])),
                  (P = u(P, T, R, O, A, 22, s[7])),
                  (O = u(O, P, T, R, y, 7, s[8])),
                  (R = u(R, O, P, T, w, 12, s[9])),
                  (T = u(T, R, O, P, b, 17, s[10])),
                  (P = u(P, T, R, O, x, 22, s[11])),
                  (O = u(O, P, T, R, _, 7, s[12])),
                  (R = u(R, O, P, T, S, 12, s[13])),
                  (T = u(T, R, O, P, M, 17, s[14])),
                  (O = l(
                    O,
                    (P = u(P, T, R, O, E, 22, s[15])),
                    T,
                    R,
                    c,
                    5,
                    s[16]
                  )),
                  (R = l(R, O, P, T, v, 9, s[17])),
                  (T = l(T, R, O, P, x, 14, s[18])),
                  (P = l(P, T, R, O, a, 20, s[19])),
                  (O = l(O, P, T, R, h, 5, s[20])),
                  (R = l(R, O, P, T, b, 9, s[21])),
                  (T = l(T, R, O, P, E, 14, s[22])),
                  (P = l(P, T, R, O, m, 20, s[23])),
                  (O = l(O, P, T, R, w, 5, s[24])),
                  (R = l(R, O, P, T, M, 9, s[25])),
                  (T = l(T, R, O, P, p, 14, s[26])),
                  (P = l(P, T, R, O, y, 20, s[27])),
                  (O = l(O, P, T, R, S, 5, s[28])),
                  (R = l(R, O, P, T, g, 9, s[29])),
                  (T = l(T, R, O, P, A, 14, s[30])),
                  (O = f(
                    O,
                    (P = l(P, T, R, O, _, 20, s[31])),
                    T,
                    R,
                    h,
                    4,
                    s[32]
                  )),
                  (R = f(R, O, P, T, y, 11, s[33])),
                  (T = f(T, R, O, P, x, 16, s[34])),
                  (P = f(P, T, R, O, M, 23, s[35])),
                  (O = f(O, P, T, R, c, 4, s[36])),
                  (R = f(R, O, P, T, m, 11, s[37])),
                  (T = f(T, R, O, P, A, 16, s[38])),
                  (P = f(P, T, R, O, b, 23, s[39])),
                  (O = f(O, P, T, R, S, 4, s[40])),
                  (R = f(R, O, P, T, a, 11, s[41])),
                  (T = f(T, R, O, P, p, 16, s[42])),
                  (P = f(P, T, R, O, v, 23, s[43])),
                  (O = f(O, P, T, R, w, 4, s[44])),
                  (R = f(R, O, P, T, _, 11, s[45])),
                  (T = f(T, R, O, P, E, 16, s[46])),
                  (O = d(
                    O,
                    (P = f(P, T, R, O, g, 23, s[47])),
                    T,
                    R,
                    a,
                    6,
                    s[48]
                  )),
                  (R = d(R, O, P, T, A, 10, s[49])),
                  (T = d(T, R, O, P, M, 15, s[50])),
                  (P = d(P, T, R, O, h, 21, s[51])),
                  (O = d(O, P, T, R, _, 6, s[52])),
                  (R = d(R, O, P, T, p, 10, s[53])),
                  (T = d(T, R, O, P, b, 15, s[54])),
                  (P = d(P, T, R, O, c, 21, s[55])),
                  (O = d(O, P, T, R, y, 6, s[56])),
                  (R = d(R, O, P, T, E, 10, s[57])),
                  (T = d(T, R, O, P, v, 15, s[58])),
                  (P = d(P, T, R, O, S, 21, s[59])),
                  (O = d(O, P, T, R, m, 6, s[60])),
                  (R = d(R, O, P, T, x, 10, s[61])),
                  (T = d(T, R, O, P, g, 15, s[62])),
                  (P = d(P, T, R, O, w, 21, s[63])),
                  (o[0] = (o[0] + O) | 0),
                  (o[1] = (o[1] + P) | 0),
                  (o[2] = (o[2] + T) | 0),
                  (o[3] = (o[3] + R) | 0);
              },
              _doFinalize: function () {
                var t = this._data,
                  r = t.words,
                  n = 8 * this._nDataBytes,
                  i = 8 * t.sigBytes;
                r[i >>> 5] |= 128 << (24 - (i % 32));
                var o = e.floor(n / 4294967296),
                  a = n;
                (r[15 + (((i + 64) >>> 9) << 4)] =
                  (16711935 & ((o << 8) | (o >>> 24))) |
                  (4278255360 & ((o << 24) | (o >>> 8)))),
                  (r[14 + (((i + 64) >>> 9) << 4)] =
                    (16711935 & ((a << 8) | (a >>> 24))) |
                    (4278255360 & ((a << 24) | (a >>> 8)))),
                  (t.sigBytes = 4 * (r.length + 1)),
                  this._process();
                for (var s = this._hash, c = s.words, u = 0; u < 4; u++) {
                  var l = c[u];
                  c[u] =
                    (16711935 & ((l << 8) | (l >>> 24))) |
                    (4278255360 & ((l << 24) | (l >>> 8)));
                }
                return s;
              },
              clone: function () {
                var e = o.clone.call(this);
                return (e._hash = this._hash.clone()), e;
              },
            }));
            function u(e, t, r, n, i, o, a) {
              var s = e + ((t & r) | (~t & n)) + i + a;
              return ((s << o) | (s >>> (32 - o))) + t;
            }
            function l(e, t, r, n, i, o, a) {
              var s = e + ((t & n) | (r & ~n)) + i + a;
              return ((s << o) | (s >>> (32 - o))) + t;
            }
            function f(e, t, r, n, i, o, a) {
              var s = e + (t ^ r ^ n) + i + a;
              return ((s << o) | (s >>> (32 - o))) + t;
            }
            function d(e, t, r, n, i, o, a) {
              var s = e + (r ^ (t | ~n)) + i + a;
              return ((s << o) | (s >>> (32 - o))) + t;
            }
            (t.MD5 = o._createHelper(c)), (t.HmacMD5 = o._createHmacHelper(c));
          })(Math),
          n.MD5);
      },
      3653: function (e, t, r) {
        var n, i, o, a, s, c, u, l;
        e.exports =
          ((i = (n = l = r(2751)).lib),
          (o = i.WordArray),
          (a = i.Hasher),
          (s = n.algo),
          (c = []),
          (u = s.SHA1 =
            a.extend({
              _doReset: function () {
                this._hash = new o.init([
                  1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                ]);
              },
              _doProcessBlock: function (e, t) {
                for (
                  var r = this._hash.words,
                    n = r[0],
                    i = r[1],
                    o = r[2],
                    a = r[3],
                    s = r[4],
                    u = 0;
                  u < 80;
                  u++
                ) {
                  if (u < 16) c[u] = 0 | e[t + u];
                  else {
                    var l = c[u - 3] ^ c[u - 8] ^ c[u - 14] ^ c[u - 16];
                    c[u] = (l << 1) | (l >>> 31);
                  }
                  var f = ((n << 5) | (n >>> 27)) + s + c[u];
                  (f +=
                    u < 20
                      ? 1518500249 + ((i & o) | (~i & a))
                      : u < 40
                      ? 1859775393 + (i ^ o ^ a)
                      : u < 60
                      ? ((i & o) | (i & a) | (o & a)) - 1894007588
                      : (i ^ o ^ a) - 899497514),
                    (s = a),
                    (a = o),
                    (o = (i << 30) | (i >>> 2)),
                    (i = n),
                    (n = f);
                }
                (r[0] = (r[0] + n) | 0),
                  (r[1] = (r[1] + i) | 0),
                  (r[2] = (r[2] + o) | 0),
                  (r[3] = (r[3] + a) | 0),
                  (r[4] = (r[4] + s) | 0);
              },
              _doFinalize: function () {
                var e = this._data,
                  t = e.words,
                  r = 8 * this._nDataBytes,
                  n = 8 * e.sigBytes;
                return (
                  (t[n >>> 5] |= 128 << (24 - (n % 32))),
                  (t[14 + (((n + 64) >>> 9) << 4)] = Math.floor(
                    r / 4294967296
                  )),
                  (t[15 + (((n + 64) >>> 9) << 4)] = r),
                  (e.sigBytes = 4 * t.length),
                  this._process(),
                  this._hash
                );
              },
              clone: function () {
                var e = a.clone.call(this);
                return (e._hash = this._hash.clone()), e;
              },
            })),
          (n.SHA1 = a._createHelper(u)),
          (n.HmacSHA1 = a._createHmacHelper(u)),
          l.SHA1);
      },
      6846: function (e, t, r) {
        var n;
        e.exports =
          ((n = r(2751)),
          (function (e) {
            var t = n,
              r = t.lib,
              i = r.WordArray,
              o = r.Hasher,
              a = t.algo,
              s = [],
              c = [];
            !(function () {
              function t(t) {
                for (var r = e.sqrt(t), n = 2; n <= r; n++)
                  if (!(t % n)) return !1;
                return !0;
              }
              function r(e) {
                return (4294967296 * (e - (0 | e))) | 0;
              }
              for (var n = 2, i = 0; i < 64; )
                t(n) &&
                  (i < 8 && (s[i] = r(e.pow(n, 0.5))),
                  (c[i] = r(e.pow(n, 1 / 3))),
                  i++),
                  n++;
            })();
            var u = [],
              l = (a.SHA256 = o.extend({
                _doReset: function () {
                  this._hash = new i.init(s.slice(0));
                },
                _doProcessBlock: function (e, t) {
                  for (
                    var r = this._hash.words,
                      n = r[0],
                      i = r[1],
                      o = r[2],
                      a = r[3],
                      s = r[4],
                      l = r[5],
                      f = r[6],
                      d = r[7],
                      g = 0;
                    g < 64;
                    g++
                  ) {
                    if (g < 16) u[g] = 0 | e[t + g];
                    else {
                      var p = u[g - 15],
                        m =
                          ((p << 25) | (p >>> 7)) ^
                          ((p << 14) | (p >>> 18)) ^
                          (p >>> 3),
                        h = u[g - 2],
                        v =
                          ((h << 15) | (h >>> 17)) ^
                          ((h << 13) | (h >>> 19)) ^
                          (h >>> 10);
                      u[g] = m + u[g - 7] + v + u[g - 16];
                    }
                    var A = (n & i) ^ (n & o) ^ (i & o),
                      y =
                        ((n << 30) | (n >>> 2)) ^
                        ((n << 19) | (n >>> 13)) ^
                        ((n << 10) | (n >>> 22)),
                      w =
                        d +
                        (((s << 26) | (s >>> 6)) ^
                          ((s << 21) | (s >>> 11)) ^
                          ((s << 7) | (s >>> 25))) +
                        ((s & l) ^ (~s & f)) +
                        c[g] +
                        u[g];
                    (d = f),
                      (f = l),
                      (l = s),
                      (s = (a + w) | 0),
                      (a = o),
                      (o = i),
                      (i = n),
                      (n = (w + (y + A)) | 0);
                  }
                  (r[0] = (r[0] + n) | 0),
                    (r[1] = (r[1] + i) | 0),
                    (r[2] = (r[2] + o) | 0),
                    (r[3] = (r[3] + a) | 0),
                    (r[4] = (r[4] + s) | 0),
                    (r[5] = (r[5] + l) | 0),
                    (r[6] = (r[6] + f) | 0),
                    (r[7] = (r[7] + d) | 0);
                },
                _doFinalize: function () {
                  var t = this._data,
                    r = t.words,
                    n = 8 * this._nDataBytes,
                    i = 8 * t.sigBytes;
                  return (
                    (r[i >>> 5] |= 128 << (24 - (i % 32))),
                    (r[14 + (((i + 64) >>> 9) << 4)] = e.floor(n / 4294967296)),
                    (r[15 + (((i + 64) >>> 9) << 4)] = n),
                    (t.sigBytes = 4 * r.length),
                    this._process(),
                    this._hash
                  );
                },
                clone: function () {
                  var e = o.clone.call(this);
                  return (e._hash = this._hash.clone()), e;
                },
              }));
            (t.SHA256 = o._createHelper(l)),
              (t.HmacSHA256 = o._createHmacHelper(l));
          })(Math),
          n.SHA256);
      },
      3145: function (e, t) {
        var r, n;
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self && self,
          (r = function (e) {
            "use strict";
            if (!globalThis.chrome?.runtime?.id)
              throw new Error(
                "This script should only be loaded in a browser extension."
              );
            if (
              void 0 === globalThis.browser ||
              Object.getPrototypeOf(globalThis.browser) !== Object.prototype
            ) {
              const t =
                  "The message port closed before a response was received.",
                r = (e) => {
                  const r = {
                    alarms: {
                      clear: { minArgs: 0, maxArgs: 1 },
                      clearAll: { minArgs: 0, maxArgs: 0 },
                      get: { minArgs: 0, maxArgs: 1 },
                      getAll: { minArgs: 0, maxArgs: 0 },
                    },
                    bookmarks: {
                      create: { minArgs: 1, maxArgs: 1 },
                      get: { minArgs: 1, maxArgs: 1 },
                      getChildren: { minArgs: 1, maxArgs: 1 },
                      getRecent: { minArgs: 1, maxArgs: 1 },
                      getSubTree: { minArgs: 1, maxArgs: 1 },
                      getTree: { minArgs: 0, maxArgs: 0 },
                      move: { minArgs: 2, maxArgs: 2 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      removeTree: { minArgs: 1, maxArgs: 1 },
                      search: { minArgs: 1, maxArgs: 1 },
                      update: { minArgs: 2, maxArgs: 2 },
                    },
                    browserAction: {
                      disable: {
                        minArgs: 0,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      enable: {
                        minArgs: 0,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                      getBadgeText: { minArgs: 1, maxArgs: 1 },
                      getPopup: { minArgs: 1, maxArgs: 1 },
                      getTitle: { minArgs: 1, maxArgs: 1 },
                      openPopup: { minArgs: 0, maxArgs: 0 },
                      setBadgeBackgroundColor: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      setBadgeText: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      setIcon: { minArgs: 1, maxArgs: 1 },
                      setPopup: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      setTitle: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                    },
                    browsingData: {
                      remove: { minArgs: 2, maxArgs: 2 },
                      removeCache: { minArgs: 1, maxArgs: 1 },
                      removeCookies: { minArgs: 1, maxArgs: 1 },
                      removeDownloads: { minArgs: 1, maxArgs: 1 },
                      removeFormData: { minArgs: 1, maxArgs: 1 },
                      removeHistory: { minArgs: 1, maxArgs: 1 },
                      removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                      removePasswords: { minArgs: 1, maxArgs: 1 },
                      removePluginData: { minArgs: 1, maxArgs: 1 },
                      settings: { minArgs: 0, maxArgs: 0 },
                    },
                    commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                    contextMenus: {
                      remove: { minArgs: 1, maxArgs: 1 },
                      removeAll: { minArgs: 0, maxArgs: 0 },
                      update: { minArgs: 2, maxArgs: 2 },
                    },
                    cookies: {
                      get: { minArgs: 1, maxArgs: 1 },
                      getAll: { minArgs: 1, maxArgs: 1 },
                      getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      set: { minArgs: 1, maxArgs: 1 },
                    },
                    devtools: {
                      inspectedWindow: {
                        eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                      },
                      panels: {
                        create: {
                          minArgs: 3,
                          maxArgs: 3,
                          singleCallbackArg: !0,
                        },
                        elements: {
                          createSidebarPane: { minArgs: 1, maxArgs: 1 },
                        },
                      },
                    },
                    downloads: {
                      cancel: { minArgs: 1, maxArgs: 1 },
                      download: { minArgs: 1, maxArgs: 1 },
                      erase: { minArgs: 1, maxArgs: 1 },
                      getFileIcon: { minArgs: 1, maxArgs: 2 },
                      open: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      pause: { minArgs: 1, maxArgs: 1 },
                      removeFile: { minArgs: 1, maxArgs: 1 },
                      resume: { minArgs: 1, maxArgs: 1 },
                      search: { minArgs: 1, maxArgs: 1 },
                      show: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                    },
                    extension: {
                      isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                      isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
                    },
                    history: {
                      addUrl: { minArgs: 1, maxArgs: 1 },
                      deleteAll: { minArgs: 0, maxArgs: 0 },
                      deleteRange: { minArgs: 1, maxArgs: 1 },
                      deleteUrl: { minArgs: 1, maxArgs: 1 },
                      getVisits: { minArgs: 1, maxArgs: 1 },
                      search: { minArgs: 1, maxArgs: 1 },
                    },
                    i18n: {
                      detectLanguage: { minArgs: 1, maxArgs: 1 },
                      getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
                    },
                    identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                    idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                    management: {
                      get: { minArgs: 1, maxArgs: 1 },
                      getAll: { minArgs: 0, maxArgs: 0 },
                      getSelf: { minArgs: 0, maxArgs: 0 },
                      setEnabled: { minArgs: 2, maxArgs: 2 },
                      uninstallSelf: { minArgs: 0, maxArgs: 1 },
                    },
                    notifications: {
                      clear: { minArgs: 1, maxArgs: 1 },
                      create: { minArgs: 1, maxArgs: 2 },
                      getAll: { minArgs: 0, maxArgs: 0 },
                      getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                      update: { minArgs: 2, maxArgs: 2 },
                    },
                    pageAction: {
                      getPopup: { minArgs: 1, maxArgs: 1 },
                      getTitle: { minArgs: 1, maxArgs: 1 },
                      hide: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      setIcon: { minArgs: 1, maxArgs: 1 },
                      setPopup: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      setTitle: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                      show: {
                        minArgs: 1,
                        maxArgs: 1,
                        fallbackToNoCallback: !0,
                      },
                    },
                    permissions: {
                      contains: { minArgs: 1, maxArgs: 1 },
                      getAll: { minArgs: 0, maxArgs: 0 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      request: { minArgs: 1, maxArgs: 1 },
                    },
                    runtime: {
                      getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                      getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                      openOptionsPage: { minArgs: 0, maxArgs: 0 },
                      requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                      sendMessage: { minArgs: 1, maxArgs: 3 },
                      sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                      setUninstallURL: { minArgs: 1, maxArgs: 1 },
                    },
                    sessions: {
                      getDevices: { minArgs: 0, maxArgs: 1 },
                      getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                      restore: { minArgs: 0, maxArgs: 1 },
                    },
                    storage: {
                      local: {
                        clear: { minArgs: 0, maxArgs: 0 },
                        get: { minArgs: 0, maxArgs: 1 },
                        getBytesInUse: { minArgs: 0, maxArgs: 1 },
                        remove: { minArgs: 1, maxArgs: 1 },
                        set: { minArgs: 1, maxArgs: 1 },
                      },
                      managed: {
                        get: { minArgs: 0, maxArgs: 1 },
                        getBytesInUse: { minArgs: 0, maxArgs: 1 },
                      },
                      sync: {
                        clear: { minArgs: 0, maxArgs: 0 },
                        get: { minArgs: 0, maxArgs: 1 },
                        getBytesInUse: { minArgs: 0, maxArgs: 1 },
                        remove: { minArgs: 1, maxArgs: 1 },
                        set: { minArgs: 1, maxArgs: 1 },
                      },
                    },
                    tabs: {
                      captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                      create: { minArgs: 1, maxArgs: 1 },
                      detectLanguage: { minArgs: 0, maxArgs: 1 },
                      discard: { minArgs: 0, maxArgs: 1 },
                      duplicate: { minArgs: 1, maxArgs: 1 },
                      executeScript: { minArgs: 1, maxArgs: 2 },
                      get: { minArgs: 1, maxArgs: 1 },
                      getCurrent: { minArgs: 0, maxArgs: 0 },
                      getZoom: { minArgs: 0, maxArgs: 1 },
                      getZoomSettings: { minArgs: 0, maxArgs: 1 },
                      goBack: { minArgs: 0, maxArgs: 1 },
                      goForward: { minArgs: 0, maxArgs: 1 },
                      highlight: { minArgs: 1, maxArgs: 1 },
                      insertCSS: { minArgs: 1, maxArgs: 2 },
                      move: { minArgs: 2, maxArgs: 2 },
                      query: { minArgs: 1, maxArgs: 1 },
                      reload: { minArgs: 0, maxArgs: 2 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      removeCSS: { minArgs: 1, maxArgs: 2 },
                      sendMessage: { minArgs: 2, maxArgs: 3 },
                      setZoom: { minArgs: 1, maxArgs: 2 },
                      setZoomSettings: { minArgs: 1, maxArgs: 2 },
                      update: { minArgs: 1, maxArgs: 2 },
                    },
                    topSites: { get: { minArgs: 0, maxArgs: 0 } },
                    webNavigation: {
                      getAllFrames: { minArgs: 1, maxArgs: 1 },
                      getFrame: { minArgs: 1, maxArgs: 1 },
                    },
                    webRequest: {
                      handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
                    },
                    windows: {
                      create: { minArgs: 0, maxArgs: 1 },
                      get: { minArgs: 1, maxArgs: 2 },
                      getAll: { minArgs: 0, maxArgs: 1 },
                      getCurrent: { minArgs: 0, maxArgs: 1 },
                      getLastFocused: { minArgs: 0, maxArgs: 1 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      update: { minArgs: 2, maxArgs: 2 },
                    },
                  };
                  if (0 === Object.keys(r).length)
                    throw new Error(
                      "api-metadata.json has not been included in browser-polyfill"
                    );
                  class n extends WeakMap {
                    constructor(e, t) {
                      super(t), (this.createItem = e);
                    }
                    get(e) {
                      return (
                        this.has(e) || this.set(e, this.createItem(e)),
                        super.get(e)
                      );
                    }
                  }
                  const i =
                      (t, r) =>
                      (...n) => {
                        e.runtime.lastError
                          ? t.reject(new Error(e.runtime.lastError.message))
                          : r.singleCallbackArg ||
                            (n.length <= 1 && !1 !== r.singleCallbackArg)
                          ? t.resolve(n[0])
                          : t.resolve(n);
                      },
                    o = (e) => (1 == e ? "argument" : "arguments"),
                    a = (e, t, r) =>
                      new Proxy(t, { apply: (t, n, i) => r.call(n, e, ...i) });
                  let s = Function.call.bind(Object.prototype.hasOwnProperty);
                  const c = (e, t = {}, r = {}) => {
                      let n = Object.create(null),
                        u = {
                          has: (t, r) => r in e || r in n,
                          get(u, l, f) {
                            if (l in n) return n[l];
                            if (!(l in e)) return;
                            let d = e[l];
                            if ("function" == typeof d)
                              if ("function" == typeof t[l])
                                d = a(e, e[l], t[l]);
                              else if (s(r, l)) {
                                let t = ((e, t) =>
                                  function (r, ...n) {
                                    if (n.length < t.minArgs)
                                      throw new Error(
                                        `Expected at least ${t.minArgs} ${o(
                                          t.minArgs
                                        )} for ${e}(), got ${n.length}`
                                      );
                                    if (n.length > t.maxArgs)
                                      throw new Error(
                                        `Expected at most ${t.maxArgs} ${o(
                                          t.maxArgs
                                        )} for ${e}(), got ${n.length}`
                                      );
                                    return new Promise((o, a) => {
                                      if (t.fallbackToNoCallback)
                                        try {
                                          r[e](
                                            ...n,
                                            i({ resolve: o, reject: a }, t)
                                          );
                                        } catch (i) {
                                          console.warn(
                                            `${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                                            i
                                          ),
                                            r[e](...n),
                                            (t.fallbackToNoCallback = !1),
                                            (t.noCallback = !0),
                                            o();
                                        }
                                      else
                                        t.noCallback
                                          ? (r[e](...n), o())
                                          : r[e](
                                              ...n,
                                              i({ resolve: o, reject: a }, t)
                                            );
                                    });
                                  })(l, r[l]);
                                d = a(e, e[l], t);
                              } else d = d.bind(e);
                            else if (
                              "object" == typeof d &&
                              null !== d &&
                              (s(t, l) || s(r, l))
                            )
                              d = c(d, t[l], r[l]);
                            else {
                              if (!s(r, "*"))
                                return (
                                  Object.defineProperty(n, l, {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: () => e[l],
                                    set(t) {
                                      e[l] = t;
                                    },
                                  }),
                                  d
                                );
                              d = c(d, t[l], r["*"]);
                            }
                            return (n[l] = d), d;
                          },
                          set: (t, r, i, o) => (
                            r in n ? (n[r] = i) : (e[r] = i), !0
                          ),
                          defineProperty: (e, t, r) =>
                            Reflect.defineProperty(n, t, r),
                          deleteProperty: (e, t) =>
                            Reflect.deleteProperty(n, t),
                        },
                        l = Object.create(e);
                      return new Proxy(l, u);
                    },
                    u = (e) => ({
                      addListener(t, r, ...n) {
                        t.addListener(e.get(r), ...n);
                      },
                      hasListener: (t, r) => t.hasListener(e.get(r)),
                      removeListener(t, r) {
                        t.removeListener(e.get(r));
                      },
                    }),
                    l = new n((e) =>
                      "function" != typeof e
                        ? e
                        : function (t) {
                            const r = c(
                              t,
                              {},
                              { getContent: { minArgs: 0, maxArgs: 0 } }
                            );
                            e(r);
                          }
                    ),
                    f = new n((e) =>
                      "function" != typeof e
                        ? e
                        : function (t, r, n) {
                            let i,
                              o,
                              a = !1,
                              s = new Promise((e) => {
                                i = function (t) {
                                  (a = !0), e(t);
                                };
                              });
                            try {
                              o = e(t, r, i);
                            } catch (e) {
                              o = Promise.reject(e);
                            }
                            const c =
                              !0 !== o &&
                              (u = o) &&
                              "object" == typeof u &&
                              "function" == typeof u.then;
                            var u;
                            if (!0 !== o && !c && !a) return !1;
                            return (
                              (c ? o : s)
                                .then(
                                  (e) => {
                                    n(e);
                                  },
                                  (e) => {
                                    let t;
                                    (t =
                                      e &&
                                      (e instanceof Error ||
                                        "string" == typeof e.message)
                                        ? e.message
                                        : "An unexpected error occurred"),
                                      n({
                                        __mozWebExtensionPolyfillReject__: !0,
                                        message: t,
                                      });
                                  }
                                )
                                .catch((e) => {
                                  console.error(
                                    "Failed to send onMessage rejected reply",
                                    e
                                  );
                                }),
                              !0
                            );
                          }
                    ),
                    d = ({ reject: r, resolve: n }, i) => {
                      e.runtime.lastError
                        ? e.runtime.lastError.message === t
                          ? n()
                          : r(new Error(e.runtime.lastError.message))
                        : i && i.__mozWebExtensionPolyfillReject__
                        ? r(new Error(i.message))
                        : n(i);
                    },
                    g = (e, t, r, ...n) => {
                      if (n.length < t.minArgs)
                        throw new Error(
                          `Expected at least ${t.minArgs} ${o(
                            t.minArgs
                          )} for ${e}(), got ${n.length}`
                        );
                      if (n.length > t.maxArgs)
                        throw new Error(
                          `Expected at most ${t.maxArgs} ${o(
                            t.maxArgs
                          )} for ${e}(), got ${n.length}`
                        );
                      return new Promise((e, t) => {
                        const i = d.bind(null, { resolve: e, reject: t });
                        n.push(i), r.sendMessage(...n);
                      });
                    },
                    p = {
                      devtools: { network: { onRequestFinished: u(l) } },
                      runtime: {
                        onMessage: u(f),
                        onMessageExternal: u(f),
                        sendMessage: g.bind(null, "sendMessage", {
                          minArgs: 1,
                          maxArgs: 3,
                        }),
                      },
                      tabs: {
                        sendMessage: g.bind(null, "sendMessage", {
                          minArgs: 2,
                          maxArgs: 3,
                        }),
                      },
                    },
                    m = {
                      clear: { minArgs: 1, maxArgs: 1 },
                      get: { minArgs: 1, maxArgs: 1 },
                      set: { minArgs: 1, maxArgs: 1 },
                    };
                  return (
                    (r.privacy = {
                      network: { "*": m },
                      services: { "*": m },
                      websites: { "*": m },
                    }),
                    c(e, p, r)
                  );
                };
              e.exports = r(chrome);
            } else e.exports = globalThis.browser;
          }),
          void 0 === (n = r.apply(t, [e])) || (e.exports = n);
      },
      7967: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, { message: () => o, revision: () => a, upgrade: () => s });
        var n = r(2667),
          i = r(3145);
        const o = "Add theme support",
          a = "20221211221603_add_theme_support";
        async function s() {
          const e = {
              appTheme: "auto",
              showContribPage: !0,
              contribPageLastOpen: 0,
              contribPageLastAutoOpen: 0,
            },
            { installTime: t } = await i.storage.local.get("installTime");
          return (
            (e.installTime = (0, n.Og)(t)),
            (e.storageVersion = a),
            i.storage.local.set(e)
          );
        }
      },
      4525: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, { message: () => i, revision: () => o, upgrade: () => a });
        var n = r(3145);
        const i = "Update services",
          o = "20221214080901_update_services";
        async function a() {
          const e = {},
            { witSpeechApiKeys: t } = await n.storage.local.get(
              "witSpeechApiKeys"
            );
          return (
            delete t.catalan,
            delete t.telugu,
            (e.witSpeechApiKeys = t),
            await n.storage.local.remove("ibmSpeechApiLoc"),
            (e.ibmSpeechApiUrl = ""),
            (e.microsoftSpeechApiLoc = "eastus"),
            (e.storageVersion = o),
            n.storage.local.set(e)
          );
        }
      },
      8170: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, { message: () => i, revision: () => o, upgrade: () => a });
        var n = r(3145);
        const i = "Revision description",
          o = "DlgF14Chrh";
        async function a() {
          const e = {},
            { speechService: t } = await n.storage.local.get("speechService");
          return (
            "googleSpeechApiDemo" === t &&
              (e.speechService = "witSpeechApiDemo"),
            (e.storageVersion = o),
            n.storage.local.set(e)
          );
        }
      },
      4294: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, { message: () => i, revision: () => o, upgrade: () => a });
        var n = r(3145);
        const i = "Add navigateWithKeyboard",
          o = "Lj3MYlSr4L";
        async function a() {
          const e = { navigateWithKeyboard: !1 };
          return (e.storageVersion = o), n.storage.local.set(e);
        }
      },
      9268: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, { message: () => i, revision: () => o, upgrade: () => a });
        var n = r(3145);
        const i = "Add IBM Watson Speech to Text API",
          o = "ONiJBs00o";
        async function a() {
          const e = { ibmSpeechApiLoc: "frankfurt", ibmSpeechApiKey: "" };
          return (e.storageVersion = o), n.storage.local.set(e);
        }
      },
      2669: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, { message: () => i, revision: () => o, upgrade: () => a });
        var n = r(3145);
        const i = "Add Microsoft Azure Speech to Text API",
          o = "UidMDYaYA";
        async function a() {
          const e = {
            microsoftSpeechApiLoc: "eastUs",
            microsoftSpeechApiKey: "",
          };
          return (e.storageVersion = o), n.storage.local.set(e);
        }
      },
      1087: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, { message: () => i, revision: () => o, upgrade: () => a });
        var n = r(3145);
        const i = "Initial version",
          o = "UoT3kGyBH";
        async function a() {
          const e = {
            speechService: "googleSpeechApiDemo",
            googleSpeechApiKey: "",
            installTime: new Date().getTime(),
            useCount: 0,
          };
          return (e.storageVersion = o), n.storage.local.set(e);
        }
      },
      6143: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, { message: () => i, revision: () => o, upgrade: () => a });
        var n = r(3145);
        const i = "Add autoUpdateClientApp option",
          o = "X3djS8vZC";
        async function a() {
          const e = { autoUpdateClientApp: !0 };
          return (e.storageVersion = o), n.storage.local.set(e);
        }
      },
      3637: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, { message: () => i, revision: () => o, upgrade: () => a });
        var n = r(3145);
        const i = "Add loadEnglishChallenge option",
          o = "ZtLMLoh1ag";
        async function a() {
          const e = { loadEnglishChallenge: !0 };
          return (e.storageVersion = o), n.storage.local.set(e);
        }
      },
      9616: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, { message: () => i, revision: () => o, upgrade: () => a });
        var n = r(3145);
        const i = "Add Wit Speech API and tryEnglishSpeechModel option",
          o = "nOedd0Txqd";
        async function a() {
          const e = { witSpeechApiKeys: {}, tryEnglishSpeechModel: !0 };
          return (e.storageVersion = o), n.storage.local.set(e);
        }
      },
      1850: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, { message: () => i, revision: () => o, upgrade: () => a });
        var n = r(3145);
        const i = "Add simulateUserInput option",
          o = "t335iRDhZ8";
        async function a() {
          const e = { simulateUserInput: !1 };
          return (e.storageVersion = o), n.storage.local.set(e);
        }
      },
      2667: (e, t, r) => {
        "use strict";
        r.d(t, {
          Mq: () => v,
          Og: () => p,
          Q: () => s,
          Qr: () => d,
          XF: () => m,
          Xf: () => c,
          fr: () => l,
          jA: () => g,
          jT: () => h,
          qs: () => u,
          sM: () => f,
        }),
          r(8487),
          r(6205),
          r(7391),
          r(9494),
          r(2241);
        var n = r(4314),
          i = r.n(n),
          o = r(5221),
          a = r(3145);
        function s(e, t) {
          return a.i18n.getMessage(e, t);
        }
        async function c({ fallback: e = !0 } = {}) {
          let t, r;
          if ("samsung" === o.W9) (t = "android"), (r = "");
          else
            try {
              ({ os: t, arch: r } = await a.runtime.getPlatformInfo());
            } catch (n) {
              if (!e) throw n;
              ({ os: t, arch: r } = await a.runtime.sendMessage({
                id: "getPlatform",
              }));
            }
          "win" === t ? (t = "windows") : "mac" === t && (t = "macos"),
            "MacIntel" !== navigator.platform ||
              ("ios" !== t && void 0 === navigator.standalone) ||
              (t = "ipados"),
            "x86-32" === r
              ? (r = "386")
              : "x86-64" === r
              ? (r = "amd64")
              : r.startsWith("arm") && (r = "arm"),
            "arm" === r && "macos" === t && (r = "amd64");
          const n = "windows" === t,
            i = "macos" === t,
            s = "linux" === t,
            c = "android" === t,
            u = "ios" === t,
            l = "ipados" === t,
            f = ["android", "ios", "ipados"].includes(t),
            d = "chrome" === o.W9,
            g = "edge" === o.W9,
            p = "firefox" === o.W9,
            m =
              ["chrome", "opera"].includes(o.W9) &&
              / opr\//i.test(navigator.userAgent),
            h = "safari" === o.W9,
            v = "samsung" === o.W9;
          return {
            os: t,
            arch: r,
            targetEnv: o.W9,
            isWindows: n,
            isMacos: i,
            isLinux: s,
            isAndroid: c,
            isIos: u,
            isIpados: l,
            isMobile: f,
            isChrome: d,
            isEdge: g,
            isFirefox: p,
            isOpera: m,
            isSafari: h,
            isSamsung: v,
          };
        }
        async function u() {
          let e, t;
          try {
            ({ name: e, version: t } = await a.runtime.getBrowserInfo());
          } catch (e) {}
          return (
            e ||
              ({ name: e, version: t } = i()
                .getParser(window.navigator.userAgent)
                .getBrowser()),
            (e = e.toLowerCase()),
            { name: e, version: t }
          );
        }
        async function l() {
          const [e] = await a.tabs.query({ lastFocusedWindow: !0, active: !0 });
          return e;
        }
        function f(e) {
          let t = "";
          const r = new Uint8Array(e),
            n = r.byteLength;
          for (var i = 0; i < n; i++) t += String.fromCharCode(r[i]);
          return window.btoa(t);
        }
        function d(e, t, r = 0, n = "document_start") {
          return a.tabs.executeScript(t, { frameId: r, runAt: n, code: e });
        }
        async function g(e, t = 0) {
          try {
            return (
              await a.tabs.executeScript(e, {
                frameId: t,
                runAt: "document_start",
                code: "true;",
              }),
              !0
            );
          } catch (e) {}
        }
        function p(e) {
          return e || (e = Date.now()), e - (e % 864e5);
        }
        function m(e, t) {
          return Math.floor(Math.random() * (t - e + 1)) + e;
        }
        async function h(e) {
          const t = new AudioContext(),
            r = await t.decodeAudioData(e);
          t.close();
          const n = new OfflineAudioContext(1, 16e3 * r.duration, 16e3),
            i = n.createBufferSource();
          return (
            i.connect(n.destination),
            (i.buffer = r),
            i.start(),
            n.startRendering()
          );
        }
        async function v({ audioBuffer: e, start: t, end: r }) {
          const n = e.sampleRate,
            i = e.numberOfChannels,
            o = n * t,
            a = n * r - o,
            s = new AudioContext(),
            c = s.createBuffer(i, a, n);
          s.close();
          const u = new Float32Array(a);
          for (var l = 0; l < i; l++)
            e.copyFromChannel(u, l, o), c.copyToChannel(u, l, 0);
          return c;
        }
      },
      5221: (e, t, r) => {
        "use strict";
        r.d(t, { Ow: () => a, W9: () => n, n_: () => o, pL: () => i });
        const n = "chrome",
          i = !0,
          o = { local: "20221214080901_update_services" },
          a = "0.3.0";
      },
      36: (e, t, r) => {
        var n = {
          "./local/20221211221603_add_theme_support.js": 7967,
          "./local/20221214080901_update_services.js": 4525,
          "./local/DlgF14Chrh.js": 8170,
          "./local/Lj3MYlSr4L.js": 4294,
          "./local/ONiJBs00o.js": 9268,
          "./local/UidMDYaYA.js": 2669,
          "./local/UoT3kGyBH.js": 1087,
          "./local/X3djS8vZC.js": 6143,
          "./local/ZtLMLoh1ag.js": 3637,
          "./local/nOedd0Txqd.js": 9616,
          "./local/t335iRDhZ8.js": 1850,
        };
        function i(e) {
          return o(e).then(r);
        }
        function o(e) {
          return Promise.resolve().then(() => {
            if (!r.o(n, e)) {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            }
            return n[e];
          });
        }
        (i.keys = () => Object.keys(n)),
          (i.resolve = o),
          (i.id = 36),
          (e.exports = i);
      },
      2480: () => {},
      5054: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"revisions":{"local":["UoT3kGyBH","ONiJBs00o","UidMDYaYA","nOedd0Txqd","ZtLMLoh1ag","t335iRDhZ8","X3djS8vZC","DlgF14Chrh","Lj3MYlSr4L","20221211221603_add_theme_support","20221214080901_update_services"],"sync":[]}}'
        );
      },
    },
    n = {};
  function i(e) {
    var t = n[e];
    if (void 0 !== t) return t.exports;
    var o = (n[e] = { exports: {} });
    return r[e].call(o.exports, o, o.exports, i), o.exports;
  }
  (i.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return i.d(t, { a: t }), t;
  }),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (i.t = function (r, n) {
      if ((1 & n && (r = this(r)), 8 & n)) return r;
      if ("object" == typeof r && r) {
        if (4 & n && r.__esModule) return r;
        if (16 & n && "function" == typeof r.then) return r;
      }
      var o = Object.create(null);
      i.r(o);
      var a = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var s = 2 & n && r; "object" == typeof s && !~e.indexOf(s); s = t(s))
        Object.getOwnPropertyNames(s).forEach((e) => (a[e] = () => r[e]));
      return (a.default = () => r), i.d(o, a), o;
    }),
    (i.d = (e, t) => {
      for (var r in t)
        i.o(t, r) &&
          !i.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      "use strict";
      i(4573), i(8487), i(2241);
      var e = i(872),
        t = i.n(e),
        r = i(3192),
        n = i.n(r),
        o = i(6846),
        a = i.n(o),
        s = i(1733),
        c = i.n(s);
      const u = function (e, t, r) {
        var n = null == e ? 0 : e.length;
        return n
          ? (function (e, t, r) {
              var n = -1,
                i = e.length;
              t < 0 && (t = -t > i ? 0 : i + t),
                (r = r > i ? i : r) < 0 && (r += i),
                (i = t > r ? 0 : (r - t) >>> 0),
                (t >>>= 0);
              for (var o = Array(i); ++n < i; ) o[n] = e[n + t];
              return o;
            })(e, (t = null == t ? 0 : t), (r = void 0 === r ? n : r))
          : [];
      };
      var l = Math.max;
      const f = function (e, t, r) {
        var n = null == e ? 0 : e.length;
        if (!n) return -1;
        var i = null == r ? 0 : r;
        return (
          i < 0 && (i = l(n + i, 0)),
          (function (e, t, r) {
            for (var n = r - 1, i = e.length; ++n < i; )
              if (e[n] === t) return n;
            return -1;
          })(e, t, i)
        );
      };
      var d = i(5221),
        g = i(3145);
      const p = {};
      async function m({ area: e = "local" } = {}) {
        if (p[e]) return !0;
        {
          const { storageVersion: t } = await g.storage[e].get(
            "storageVersion"
          );
          if (t && t === d.n_[e]) return (p[e] = !0), !0;
        }
        return !1;
      }
      async function h({ area: e = "local" } = {}) {
        if (!p[e])
          return new Promise((t, r) => {
            let n;
            const i = async function () {
                (await m({ area: e }))
                  ? (window.clearTimeout(o), t())
                  : n
                  ? r(new Error(`Storage (${e}) is not ready`))
                  : window.setTimeout(i, 30);
              },
              o = window.setTimeout(function () {
                n = !0;
              }, 6e4);
            i();
          });
      }
      const v = async function (e = null, { area: t = "local" } = {}) {
          return await h({ area: t }), g.storage[t].get(e);
        },
        A = async function (e, { area: t = "local" } = {}) {
          return await h({ area: t }), g.storage[t].set(e);
        };
      var y = i(3145);
      const w = {
        randomUUID:
          "undefined" != typeof crypto &&
          crypto.randomUUID &&
          crypto.randomUUID.bind(crypto),
      };
      let b;
      const x = new Uint8Array(16);
      function _() {
        if (
          !b &&
          ((b =
            "undefined" != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)),
          !b)
        )
          throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
          );
        return b(x);
      }
      const S = [];
      for (let e = 0; e < 256; ++e) S.push((e + 256).toString(16).slice(1));
      const M = function (e, t, r) {
        if (w.randomUUID && !t && !e) return w.randomUUID();
        const n = (e = e || {}).random || (e.rng || _)();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), t)) {
          r = r || 0;
          for (let e = 0; e < 16; ++e) t[r + e] = n[e];
          return t;
        }
        return (function (e, t = 0) {
          return (
            S[e[t + 0]] +
            S[e[t + 1]] +
            S[e[t + 2]] +
            S[e[t + 3]] +
            "-" +
            S[e[t + 4]] +
            S[e[t + 5]] +
            "-" +
            S[e[t + 6]] +
            S[e[t + 7]] +
            "-" +
            S[e[t + 8]] +
            S[e[t + 9]] +
            "-" +
            S[e[t + 10]] +
            S[e[t + 11]] +
            S[e[t + 12]] +
            S[e[t + 13]] +
            S[e[t + 14]] +
            S[e[t + 15]]
          ).toLowerCase();
        })(n);
      };
      var E = i(2667),
        O = i(3145);
      async function P({
        message: e,
        messageId: t,
        title: r,
        type: n = "info",
        timeout: i = 0,
      }) {
        r || (r = (0, E.Q)("extensionName")), t && (e = (0, E.Q)(t));
        const o = await O.notifications.create(`bc-notification-${n}`, {
          type: "basic",
          title: r,
          message: e,
          iconUrl: "/src/assets/icons/app/icon-64.png",
        });
        return (
          i &&
            window.setTimeout(() => {
              O.notifications.clear(o);
            }, i),
          o
        );
      }
      let T = 0;
      async function R({
        activeTab: e = null,
        setOpenerTab: t = !0,
        action: r = "auto",
      } = {}) {
        return (
          await (async function ({
            valueChange: e = 1,
            maxUseCount: t = 1 / 0,
            minInterval: r = 0,
          } = {}) {
            if (Date.now() - T >= r) {
              T = Date.now();
              const { useCount: r } = await v("useCount");
              r < t
                ? await A({ useCount: r + e })
                : r > t && (await A({ useCount: t }));
            }
          })({ valueChange: 1, maxUseCount: 1e3 }),
          (async function ({
            minUseCount: e = 0,
            minInstallDays: t = 0,
            minLastOpenDays: r = 0,
            minLastAutoOpenDays: n = 0,
            activeTab: i = null,
            setOpenerTab: o = !0,
            action: a = "auto",
          } = {}) {
            if (d.pL) {
              const s = await v([
                  "showContribPage",
                  "useCount",
                  "installTime",
                  "contribPageLastOpen",
                  "contribPageLastAutoOpen",
                ]),
                c = (0, E.Og)();
              if (
                s.showContribPage &&
                s.useCount >= e &&
                c - s.installTime >= 864e5 * t &&
                c - s.contribPageLastOpen >= 864e5 * r &&
                c - s.contribPageLastAutoOpen >= 864e5 * n
              )
                return (
                  await A({
                    contribPageLastOpen: c,
                    contribPageLastAutoOpen: c,
                  }),
                  (async function ({
                    action: e = "",
                    activeTab: t = null,
                    setOpenerTab: r = !0,
                    updateStats: n = !0,
                  } = {}) {
                    n && (await A({ contribPageLastOpen: (0, E.Og)() })),
                      t || (t = await (0, E.fr)());
                    let i = O.runtime.getURL("/src/contribute/index.html");
                    e && (i = `${i}?action=${e}`);
                    const o = { url: i, index: t.index + 1, active: !0 };
                    return (
                      r &&
                        t.id !== O.tabs.TAB_ID_NONE &&
                        "android" !== (await (0, E.Xf)()).os &&
                        (o.openerTabId = t.id),
                      O.tabs.create(o)
                    );
                  })({
                    action: a,
                    activeTab: i,
                    setOpenerTab: o,
                    updateStats: !1,
                  })
                );
            }
          })({
            minUseCount: 10,
            minInstallDays: 14,
            minLastOpenDays: 14,
            minLastAutoOpenDays: 365,
            activeTab: e,
            setOpenerTab: t,
            action: r,
          })
        );
      }
      const k =
          /^https:\/\/(?:www\.)?(?:google\.com|recaptcha\.net)\/recaptcha\/(?:api2|enterprise)\/bframe.*/,
        B = {
          ar: "ar-SA",
          af: "af-ZA",
          am: "am-ET",
          hy: "hy-AM",
          az: "az-AZ",
          eu: "eu-ES",
          bn: "bn-BD",
          bg: "bg-BG",
          ca: "ca-ES",
          "zh-HK": "cmn-Hans-HK",
          "zh-CN": "cmn-Hans-CN",
          "zh-TW": "cmn-Hant-TW",
          hr: "hr-HR",
          cs: "cs-CZ",
          da: "da-DK",
          nl: "nl-NL",
          "en-GB": "en-GB",
          en: "en-US",
          et: "et-EE",
          fil: "fil-PH",
          fi: "fi-FI",
          fr: "fr-FR",
          "fr-CA": "fr-CA",
          gl: "gl-ES",
          ka: "ka-GE",
          de: "de-DE",
          "de-AT": "de-DE",
          "de-CH": "de-DE",
          el: "el-GR",
          gu: "gu-IN",
          iw: "he-IL",
          hi: "hi-IN",
          hu: "hu-HU",
          is: "is-IS",
          id: "id-ID",
          it: "it-IT",
          ja: "ja-JP",
          kn: "kn-IN",
          ko: "ko-KR",
          lo: "lo-LA",
          lv: "lv-LV",
          lt: "lt-LT",
          ms: "ms-MY",
          ml: "ml-IN",
          mr: "mr-IN",
          mn: "mn-MN",
          no: "nb-NO",
          fa: "fa-IR",
          pl: "pl-PL",
          pt: "pt-PT",
          "pt-BR": "pt-BR",
          "pt-PT": "pt-PT",
          ro: "ro-RO",
          ru: "ru-RU",
          sr: "sr-RS",
          si: "si-LK",
          sk: "sk-SK",
          sl: "sl-SI",
          es: "es-ES",
          "es-419": "es-MX",
          sw: "sw-TZ",
          sv: "sv-SE",
          ta: "ta-IN",
          te: "te-IN",
          th: "th-TH",
          tr: "tr-TR",
          uk: "uk-UA",
          ur: "ur-IN",
          vi: "vi-VN",
          zu: "zu-ZA",
        },
        C = {
          ar: "ar-MS_Telephony",
          af: "",
          am: "",
          hy: "",
          az: "",
          eu: "",
          bn: "",
          bg: "",
          ca: "",
          "zh-HK": "",
          "zh-CN": "zh-CN_Telephony",
          "zh-TW": "zh-CN_Telephony",
          hr: "",
          cs: "cs-CZ_Telephony",
          da: "",
          nl: "nl-NL_Multimedia",
          "en-GB": "en-GB_Multimedia",
          en: "en-US_Multimedia",
          et: "",
          fil: "",
          fi: "",
          fr: "fr-FR_Multimedia",
          "fr-CA": "fr-CA_Multimedia",
          gl: "",
          ka: "",
          de: "de-DE_Multimedia",
          "de-AT": "de-DE_Multimedia",
          "de-CH": "de-DE_Multimedia",
          el: "",
          gu: "",
          iw: "",
          hi: "hi-IN_Telephony",
          hu: "",
          is: "",
          id: "",
          it: "it-IT_Multimedia",
          ja: "ja-JP_Multimedia",
          kn: "",
          ko: "ko-KR_Multimedia",
          lo: "",
          lv: "",
          lt: "",
          ms: "",
          ml: "",
          mr: "",
          mn: "",
          no: "",
          fa: "",
          pl: "",
          pt: "pt-BR_Multimedia",
          "pt-BR": "pt-BR_Multimedia",
          "pt-PT": "pt-BR_Multimedia",
          ro: "",
          ru: "",
          sr: "",
          si: "",
          sk: "",
          sl: "",
          es: "es-ES_Multimedia",
          "es-419": "es-LA_Telephony",
          sw: "",
          sv: "sv-SE_Telephony",
          ta: "",
          te: "",
          th: "",
          tr: "",
          uk: "",
          ur: "",
          vi: "",
          zu: "",
        },
        I = {
          ar: "ar-EG",
          af: "af-ZA",
          am: "am-ET",
          hy: "hy-AM",
          az: "az-AZ",
          eu: "eu-ES",
          bn: "bn-IN",
          bg: "bg-BG",
          ca: "ca-ES",
          "zh-HK": "zh-HK",
          "zh-CN": "zh-CN",
          "zh-TW": "zh-TW",
          hr: "hr-HR",
          cs: "cs-CZ",
          da: "da-DK",
          nl: "nl-NL",
          "en-GB": "en-GB",
          en: "en-US",
          et: "et-EE",
          fil: "fil-PH",
          fi: "fi-FI",
          fr: "fr-FR",
          "fr-CA": "fr-CA",
          gl: "gl-ES",
          ka: "ka-GE",
          de: "de-DE",
          "de-AT": "de-AT",
          "de-CH": "de-CH",
          el: "el-GR",
          gu: "gu-IN",
          iw: "he-IL",
          hi: "hi-IN",
          hu: "hu-HU",
          is: "is-IS",
          id: "id-ID",
          it: "it-IT",
          ja: "ja-JP",
          kn: "kn-IN",
          ko: "ko-KR",
          lo: "lo-LA",
          lv: "lv-LV",
          lt: "lt-LT",
          ms: "ms-MY",
          ml: "ml-IN",
          mr: "mr-IN",
          mn: "mn-MN",
          no: "nb-NO",
          fa: "fa-IR",
          pl: "pl-PL",
          pt: "pt-PT",
          "pt-BR": "pt-BR",
          "pt-PT": "pt-PT",
          ro: "ro-RO",
          ru: "ru-RU",
          sr: "sr-RS",
          si: "si-LK",
          sk: "sk-SK",
          sl: "sl-SI",
          es: "es-ES",
          "es-419": "es-MX",
          sw: "sw-TZ",
          sv: "sv-SE",
          ta: "ta-IN",
          te: "te-IN",
          th: "th-TH",
          tr: "tr-TR",
          uk: "uk-UA",
          ur: "",
          vi: "vi-VN",
          zu: "zu-ZA",
        },
        F = {
          ar: "arabic",
          af: "",
          am: "",
          hy: "",
          az: "",
          eu: "",
          bn: "bengali",
          bg: "",
          ca: "",
          "zh-HK": "",
          "zh-CN": "chinese",
          "zh-TW": "chinese",
          hr: "",
          cs: "",
          da: "",
          nl: "dutch",
          "en-GB": "english",
          en: "english",
          et: "",
          fil: "",
          fi: "finnish",
          fr: "french",
          "fr-CA": "french",
          gl: "",
          ka: "",
          de: "german",
          "de-AT": "german",
          "de-CH": "german",
          el: "",
          gu: "",
          iw: "",
          hi: "hindi",
          hu: "",
          is: "",
          id: "indonesian",
          it: "italian",
          ja: "japanese",
          kn: "kannada",
          ko: "korean",
          lo: "",
          lv: "",
          lt: "",
          ms: "malay",
          ml: "malayalam",
          mr: "marathi",
          mn: "",
          no: "",
          fa: "",
          pl: "polish",
          pt: "portuguese",
          "pt-BR": "portuguese",
          "pt-PT": "portuguese",
          ro: "",
          ru: "russian",
          sr: "",
          si: "sinhala",
          sk: "",
          sl: "",
          es: "spanish",
          "es-419": "spanish",
          sw: "",
          sv: "swedish",
          ta: "tamil",
          te: "",
          th: "thai",
          tr: "turkish",
          uk: "",
          ur: "urdu",
          vi: "vietnamese",
          zu: "",
        };
      var N = i(3145);
      let L, j;
      function D(e) {
        let t = -1;
        if (window !== window.top) {
          const e = window.parent.frames;
          for (let r = 0; r < e.length; r++)
            if (e[r] === window) {
              t = r;
              break;
            }
        }
        const r = window.frames[e];
        for (const e of document.querySelectorAll("iframe"))
          if (e.contentWindow === r) {
            let { left: r, top: n } = e.getBoundingClientRect();
            const i = window.devicePixelRatio;
            return { x: r * i, y: n * i, currentIndex: t };
          }
      }
      function U() {
        const e = function (e) {
            "resetCaptcha" === e.id &&
              (t(),
              (function (e) {
                const t = document.createElement("script");
                (t.onload = function (t) {
                  t.target.remove(),
                    document.dispatchEvent(
                      new CustomEvent("___resetCaptcha", { detail: e })
                    );
                }),
                  (t.src = chrome.runtime.getURL("/src/scripts/reset.js")),
                  document.documentElement.appendChild(t);
              })(e.challengeUrl));
          },
          t = function () {
            window.clearTimeout(r), chrome.runtime.onMessage.removeListener(e);
          },
          r = window.setTimeout(t, 1e4);
        chrome.runtime.onMessage.addListener(e);
      }
      function z(e) {
        const t = new URL(e.url);
        if ("en" !== t.searchParams.get("hl"))
          return t.searchParams.set("hl", "en"), { redirectUrl: t.toString() };
      }
      async function W() {
        const { loadEnglishChallenge: e, simulateUserInput: t } = await v([
          "loadEnglishChallenge",
          "simulateUserInput",
        ]);
        e || t
          ? N.webRequest.onBeforeRequest.hasListener(z) ||
            N.webRequest.onBeforeRequest.addListener(
              z,
              {
                urls: [
                  "https://google.com/recaptcha/api2/anchor*",
                  "https://google.com/recaptcha/api2/bframe*",
                  "https://www.google.com/recaptcha/api2/anchor*",
                  "https://www.google.com/recaptcha/api2/bframe*",
                  "https://google.com/recaptcha/enterprise/anchor*",
                  "https://google.com/recaptcha/enterprise/bframe*",
                  "https://www.google.com/recaptcha/enterprise/anchor*",
                  "https://www.google.com/recaptcha/enterprise/bframe*",
                  "https://recaptcha.net/recaptcha/api2/anchor*",
                  "https://recaptcha.net/recaptcha/api2/bframe*",
                  "https://www.recaptcha.net/recaptcha/api2/anchor*",
                  "https://www.recaptcha.net/recaptcha/api2/bframe*",
                  "https://recaptcha.net/recaptcha/enterprise/anchor*",
                  "https://recaptcha.net/recaptcha/enterprise/bframe*",
                  "https://www.recaptcha.net/recaptcha/enterprise/anchor*",
                  "https://www.recaptcha.net/recaptcha/enterprise/bframe*",
                ],
                types: ["sub_frame"],
              },
              ["blocking"]
            )
          : N.webRequest.onBeforeRequest.hasListener(z) &&
            N.webRequest.onBeforeRequest.removeListener(z);
      }
      function H(e) {
        const t = window.location.origin,
          r = e.requestHeaders;
        for (const e of r)
          if ("origin" === e.name.toLowerCase() && e.value === t) {
            r.splice(r.indexOf(e), 1);
            break;
          }
        return { requestHeaders: r };
      }
      async function V(e, t) {
        if ("witSpeechApiDemo" !== e) {
          //   const { witSpeechApiKeys: e } = await v("witSpeechApiKeys");
          //   console.log(
          //     e[t],
          //     e,
          //     t,
          //     "  if witSpeechApiDemo !== e) ",
          //     "inside function V"
          //   );
          let e = await fetch("http://localhost:3000/key");
          e = await e.json();

          console.log(e, t);

          return e[t];
        }
        {
          j ||
            (await (async function () {
              try {
                const e = await (await fetch("/secrets.txt")).text(),
                  t = a()(
                    (await (await fetch("/src/background/script.js")).text()) +
                      (await (await fetch("/src/solve/script.js")).text())
                  ).toString();
                j = JSON.parse(n().decrypt(e, t).toString(c()));
              } catch (e) {
                j = {};
                const { speechService: t } = await v("speechService");
                "witSpeechApiDemo" === t &&
                  (await A({ speechService: "witSpeechApi" }));
              }
              console.log(await A({ speechService: "witSpeechApi" }));
            })());

          const e = j.witApiKeys;
          if (e) {
            const r = e[t];
            return Array.isArray(r) ? r[(0, E.XF)(1, r.length) - 1] : r;
          }
        }
      }
      async function K(e, t) {
        console.log(e, t, "insiderasdasdasdasdasdasdasd");
        const r = {};
        n = await fetch("https://api.wit.ai/speech?v=20221114", {
          mode: "cors",
          method: "POST",
          headers: { Authorization: "Bearer " + e },
          body: new Blob([t], { type: "audio/wav" }),
        });
        let _Fb = new FormData();
        _Fb.append("audio", t);

        const _R = await fetch("http://localhost:3000/", {
          method: "POST",
          body: _Fb,
        })
          .then((res) => {
            console.log(res, "THIS IS RES FOR OUR FETCH (_R)");
          })
          .catch((err) => {
            console.log(err);
          });
        // console.log(_R, "THIS IS OUT FETCH (_R)");
        if (200 !== n.status) {
          if (429 !== n.status)
            throw new Error(`API response: ${n.status}, ${await n.text()}`);
          (r.errorId = "error_apiQuotaExceeded"), (r.errorTimeout = 6e3);
        } else {
          const e = JSON.parse((await n.text()).split("\r\n").at(-1)).text;
          e && (r.text = e.trim());
        }
        return r;
      }
      async function q(e, t, r, n) {
        const i = await fetch(
          `${e}/v1/recognize?model=${n}&profanity_filter=false`,
          {
            mode: "cors",
            method: "POST",
            headers: {
              Authorization: "Basic " + window.btoa("apikey:" + t),
              "X-Watson-Learning-Opt-Out": "true",
            },
            body: new Blob([r], { type: "audio/wav" }),
          }
        );
        if (200 !== i.status)
          throw new Error(`API response: ${i.status}, ${await i.text()}`);
        const o = (await i.json()).results;
        if (o && o.length) return o[0].alternatives[0].transcript.trim();
      }
      async function G(e, t, r, n) {
        const i = await fetch(
          `https://${e}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=${n}&format=detailed&profanity=raw`,
          {
            mode: "cors",
            method: "POST",
            headers: {
              "Ocp-Apim-Subscription-Key": t,
              "Content-type": "audio/wav; codec=audio/pcm; samplerate=16000",
            },
            body: new Blob([r], { type: "audio/wav" }),
          }
        );
        if (200 !== i.status)
          throw new Error(`API response: ${i.status}, ${await i.text()}`);
        const o = (await i.json()).NBest;
        if (o) return o[0].Lexical.trim();
      }
      async function $(e, r) {
        if ("notification" === e.id)
          P({
            message: e.message,
            messageId: e.messageId,
            title: e.title,
            type: e.type,
            timeout: e.timeout,
          });
        else if ("captchaSolved" === e.id) await R();
        else if ("transcribeAudio" === e.id) {
          !(function () {
            if (!N.webRequest.onBeforeSendHeaders.hasListener(H)) {
              const e = [
                  "https://google.com/*",
                  "https://www.google.com/*",
                  "https://recaptcha.net/*",
                  "https://www.recaptcha.net/*",
                  "https://api.wit.ai/*",
                  "https://speech.googleapis.com/*",
                  "https://*.speech-to-text.watson.cloud.ibm.com/*",
                  "https://*.stt.speech.microsoft.com/*",
                ],
                t = ["blocking", "requestHeaders"];
              "firefox" !== d.W9 &&
                Object.values(N.webRequest.OnBeforeSendHeadersOptions).includes(
                  "extraHeaders"
                ) &&
                t.push("extraHeaders"),
                N.webRequest.onBeforeSendHeaders.addListener(
                  H,
                  { urls: e, types: ["xmlhttprequest"] },
                  t
                );
            }
          })();
          try {
            return await (async function (e, r) {
              let n;
              const i = await fetch(e),
                o = await (async function (e) {
                  const r = await (0, E.jT)(e),
                    n = await (0, E.Mq)({
                      audioBuffer: r,
                      start: 1.5,
                      end: r.duration - 1.5,
                    });
                  return t()(n);
                })(await i.arrayBuffer()),
                { speechService: a, tryEnglishSpeechModel: s } = await v([
                  "speechService",
                  "tryEnglishSpeechModel",
                ]);
              if (["witSpeechApiDemo", "witSpeechApi"].includes(a)) {
                const e = F[r] || "english",
                  t = await V("witSpeechApi", "english");
                // if (!t) return void P({ messageId: "error_missingApiKey" });
                const i = await K(t, o);
                if (i.errorId)
                  return void P({
                    messageId: i.errorId,
                    timeout: i.errorTimeout,
                  });
                if (((n = i.text), !n && "english" !== e && s)) {
                  const e = await V(a, "english");
                  //   if (!e) return void P({ messageId: "error_missingApiKey" });
                  const t = await K(e, o);
                  if (t.errorId)
                    return void P({
                      messageId: t.errorId,
                      timeout: t.errorTimeout,
                    });
                  n = t.text;
                }
              } else if ("googleSpeechApi" === a) {
                const { googleSpeechApiKey: e } = await v("googleSpeechApiKey");
                // if (!e) return void P({ messageId: "error_missingApiKey" });
                const t = B[r] || "en-US";
                n = await (async function (e, t, r, n) {
                  const i = {
                    audio: { content: (0, E.sM)(t) },
                    config: {
                      encoding: "LINEAR16",
                      languageCode: r,
                      model: "video",
                      sampleRateHertz: 16e3,
                    },
                  };
                  !["en-US", "en-GB"].includes(r) &&
                    n &&
                    ((i.config.model = "default"),
                    (i.config.alternativeLanguageCodes = ["en-US"]));
                  const o = await fetch(
                    `https://speech.googleapis.com/v1p1beta1/speech:recognize?key=${e}`,
                    { mode: "cors", method: "POST", body: JSON.stringify(i) }
                  );
                  if (200 !== o.status)
                    throw new Error(
                      `API response: ${o.status}, ${await o.text()}`
                    );
                  const a = (await o.json()).results;
                  if (a) return a[0].alternatives[0].transcript.trim();
                })(e, o, t, s);
              } else if ("ibmSpeechApi" === a) {
                const { ibmSpeechApiUrl: e, ibmSpeechApiKey: t } = await v([
                  "ibmSpeechApiUrl",
                  "ibmSpeechApiKey",
                ]);
                if (!e) return void P({ messageId: "error_missingApiUrl" });
                if (!t) return void P({ messageId: "error_missingApiKey" });
                const i = C[r] || "en-US_Multimedia";
                (n = await q(e, t, o, i)),
                  n ||
                    ["en-US_Multimedia", "en-GB_Multimedia"].includes(i) ||
                    !s ||
                    (n = await q(e, t, o, "en-US_Multimedia"));
              } else if ("microsoftSpeechApi" === a) {
                const { microsoftSpeechApiLoc: e, microsoftSpeechApiKey: t } =
                  await v(["microsoftSpeechApiLoc", "microsoftSpeechApiKey"]);
                if (!t) return void P({ messageId: "error_missingApiKey" });
                const i = I[r] || "en-US";
                (n = await G(e, t, o, i)),
                  n ||
                    ["en-US", "en-GB"].includes(i) ||
                    !s ||
                    (n = await G(e, t, o, "en-US"));
              }
              if (n) return n;
              ["witSpeechApiDemo", "witSpeechApi"].includes(a)
                ? P({ messageId: "error_captchaNotSolvedWitai", timeout: 6e4 })
                : P({ messageId: "error_captchaNotSolved", timeout: 6e3 });
            })(e.audioUrl, e.lang);
          } finally {
            N.webRequest.onBeforeSendHeaders.hasListener(H) &&
              N.webRequest.onBeforeSendHeaders.removeListener(H);
          }
        } else if ("resetCaptcha" === e.id)
          await (async function (e, t, r) {
            (t = (await N.webNavigation.getFrame({ tabId: e, frameId: t }))
              .parentFrameId),
              (await (0, E.jA)(e, t))
                ? (await (0, E.Qr)(`(${U.toString()})()`, e, t),
                  await N.tabs.sendMessage(
                    e,
                    { id: "resetCaptcha", challengeUrl: r },
                    { frameId: t }
                  ))
                : await P({ messageId: "error_scriptsNotAllowed" });
          })(r.tab.id, r.frameId, e.challengeUrl);
        else {
          if ("getFramePos" === e.id)
            return (async function (e, t, r) {
              let n = 0,
                i = 0;
              for (
                ;
                -1 !==
                (t = (await N.webNavigation.getFrame({ tabId: e, frameId: t }))
                  .parentFrameId);

              ) {
                const [o] = await (0, E.Qr)(`(${D.toString()})(${r})`, e, t);
                (r = o.currentIndex), (n += o.x), (i += o.y);
              }
              return { x: n, y: i };
            })(r.tab.id, r.frameId, e.frameIndex);
          if ("getOsScale" === e.id) {
            let e = await N.tabs.getZoom(r.tab.id);
            const [[t, i]] = await N.tabs.executeScript(r.tab.id, {
              code: "[window.devicePixelRatio, window.innerWidth];",
              runAt: "document_start",
            });
            if ("firefox" === d.W9) {
              const r = (
                await ((n = await N.tabs.captureVisibleTab({
                  format: "jpeg",
                  quality: 10,
                })),
                new Promise((e) => {
                  const t = new Image();
                  (t.onload = () => {
                    e(t);
                  }),
                    (t.onerror = () => {
                      e();
                    }),
                    (t.onabort = () => {
                      e();
                    }),
                    (t.src = n);
                }))
              ).naturalWidth;
              Math.abs(r / i - t * e) < 0.005 && (e = 1);
            }
            return t / e;
          }
          if ("startClientApp" === e.id)
            L = N.runtime.connectNative("org.buster.client");
          else if ("stopClientApp" === e.id) L && L.disconnect();
          else {
            if ("messageClientApp" === e.id) {
              const t = { apiVersion: d.Ow, ...e.message };
              return (function (e, t, { timeout: r = 1e4 } = {}) {
                return new Promise((n, i) => {
                  const o = M();
                  t.id = o;
                  const a = function (e) {
                      e.id === o && (c(), n(e));
                    },
                    s = function () {
                      c(), i("No response from native app");
                    },
                    c = function () {
                      window.clearTimeout(u),
                        e.onMessage.removeListener(a),
                        e.onDisconnect.removeListener(s);
                    },
                    u = window.setTimeout(function () {
                      s();
                    }, r);
                  e.onMessage.addListener(a),
                    e.onDisconnect.addListener(s),
                    e.postMessage(t);
                });
              })(L, t);
            }
            if ("openOptions" === e.id) N.runtime.openOptionsPage();
            else {
              if ("getPlatform" === e.id) return (0, E.Xf)({ fallback: !1 });
              if ("getBrowser" === e.id) return (0, E.qs)();
              "optionChange" === e.id &&
                (await (async function () {
                  await W();
                })());
            }
          }
        }
        var n;
      }
      N.browserAction.onClicked.addListener(async function (e) {
        await N.runtime.openOptionsPage();
      }),
        N.runtime.onMessage.addListener(function (e, t, r) {
          return (function (e, t) {
            return "safari" === d.W9
              ? (e.then(function (e) {
                  void 0 === e && (e = null), t(e);
                }),
                !0)
              : e;
          })($(e, t), r);
        }),
        N.runtime.onInstalled.addListener(async function (e) {
          if (
            ["chrome", "edge", "opera"].includes(d.W9) &&
            ["install", "update"].includes(e.reason)
          ) {
            const e = await N.tabs.query({
              url: ["http://*/*", "https://*/*"],
              windowType: "normal",
            });
            for (const t of e) {
              const e = t.id,
                r = await N.webNavigation.getAllFrames({ tabId: e });
              for (const t of r) {
                const r = t.frameId;
                r &&
                  k.test(t.url) &&
                  (await N.tabs.insertCSS(e, {
                    frameId: r,
                    runAt: "document_idle",
                    file: "/src/solve/style.css",
                  }),
                  await N.tabs.executeScript(e, {
                    frameId: r,
                    runAt: "document_idle",
                    file: "/src/solve/script.js",
                  }));
              }
            }
            const t = await N.tabs.query({
              url: "http://127.0.0.1/buster/setup?session=*",
              windowType: "normal",
            });
            for (const e of t) await N.tabs.reload(e.id);
          }
        }),
        (async function () {
          (await m()) ||
            (await (async function () {
              if (
                await (async function ({ area: e = "local" } = {}) {
                  try {
                    return await g.storage[e].get(""), !0;
                  } catch (e) {
                    return !1;
                  }
                })({ area: "sync" })
              ) {
                const { storageVersion: e } = await y.storage.sync.get(
                  "storageVersion"
                );
                if (e && e.length < 14) {
                  const { storageVersion: e } = await y.storage.local.get(
                    "storageVersion"
                  );
                  if (!e || e.length < 14) {
                    const e = await y.storage.sync.get(null);
                    await y.storage.local.clear(),
                      await y.storage.local.set(e),
                      await y.storage.sync.clear();
                  }
                }
              }
            })(),
            await (async function ({ area: e = "local" } = {}) {
              return (async function (e, { area: t = "local" } = {}) {
                return (async function (e, { area: t = "local" } = {}) {
                  const r = await e.getAvailableRevisions({ area: t }),
                    n = await e.getCurrentRevision({ area: t }),
                    i = (a = null == (o = r) ? 0 : o.length)
                      ? o[a - 1]
                      : void 0;
                  var o, a;
                  if (n === i) return;
                  const s = u(r, f(r, n) + 1, f(r, i) + 1);
                  console.log(`Migrating storage (${t}): ${n} => ${i}`);
                  for (const r of s) {
                    const n = await e.getRevision({ area: t, revision: r });
                    console.log(
                      `Applying revision (${t}): ${n.revision} - ${n.message}`
                    ),
                      await n.upgrade();
                  }
                })(e, { area: t });
              })(
                {
                  getAvailableRevisions: async ({ area: e } = {}) =>
                    (await Promise.resolve().then(i.t.bind(i, 5054, 19)))
                      .revisions[e],
                  getCurrentRevision: async ({ area: e } = {}) =>
                    (await y.storage[e].get("storageVersion")).storageVersion,
                  getRevision: async ({ area: e, revision: t } = {}) =>
                    i(36)(`./${e}/${t}.js`),
                },
                { area: e }
              );
            })()),
            await W();
        })();
    })();
})();
