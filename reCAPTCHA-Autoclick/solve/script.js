(()=> {
  var e= {
    4314:function(e) {
      e.exports=function(e) {
        var t= {};
        function r(n) {
          if(t[n])return t[n].exports;
          var i=t[n]= {
            i:n,l:!1,exports: {
            }
          };
          return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports
        }
        return r.m=e,r.c=t,r.d=function(e,t,n) {
          r.o(e,t)||Object.defineProperty(e,t, {
            enumerable:!0,get:n
          })
        },
        r.r=function(e) {
          "undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag, {
            value:"Module"
          }),
          Object.defineProperty(e,"__esModule", {
            value:!0
          })
        },
        r.t=function(e,t) {
          if(1&t&&(e=r(e)),8&t)return e;
          if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;
          var n=Object.create(null);
          if(r.r(n),Object.defineProperty(n,"default", {
            enumerable:!0,value:e
          }),
          2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t) {
            return e[t]
          }
          .bind(null,i));
          return n
        },
        r.n=function(e) {
          var t=e&&e.__esModule?function() {
            return e.default
          }
          :function() {
            return e
          };
          return r.d(t,"a",t),t
        },
        r.o=function(e,t) {
          return Object.prototype.hasOwnProperty.call(e,t)
        },
        r.p="",r(r.s=90)
      }
      ( {
        17:function(e,t,r) {
          "use strict";
          t.__esModule=!0,t.default=void 0;
          var n=r(18),i=function() {
            function e() {
            }
            return e.getFirstMatch=function(e,t) {
              var r=t.match(e);
              return r&&r.length>0&&r[1]||""
            },
            e.getSecondMatch=function(e,t) {
              var r=t.match(e);
              return r&&r.length>1&&r[2]||""
            },
            e.matchAndReturnConst=function(e,t,r) {
              if(e.test(t))return r
            },
            e.getWindowsVersionName=function(e) {
              switch(e) {
                case"NT":return"NT";
                case"XP":case"NT 5.1":return"XP";
                case"NT 5.0":return"2000";
                case"NT 5.2":return"2003";
                case"NT 6.0":return"Vista";
                case"NT 6.1":return"7";
                case"NT 6.2":return"8";
                case"NT 6.3":return"8.1";
                case"NT 10.0":return"10";
                default:return
              }
            },
            e.getMacOSVersionName=function(e) {
              var t=e.split(".").splice(0,2).map((function(e) {
                return parseInt(e,10)||0
              }));
              if(t.push(0),10===t[0])switch(t[1]) {
                case 5:return"Leopard";
                case 6:return"Snow Leopard";
                case 7:return"Lion";
                case 8:return"Mountain Lion";
                case 9:return"Mavericks";
                case 10:return"Yosemite";
                case 11:return"El Capitan";
                case 12:return"Sierra";
                case 13:return"High Sierra";
                case 14:return"Mojave";
                case 15:return"Catalina";
                default:return
              }
            },
            e.getAndroidVersionName=function(e) {
              var t=e.split(".").splice(0,2).map((function(e) {
                return parseInt(e,10)||0
              }));
              if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0
            },
            e.getVersionPrecision=function(e) {
              return e.split(".").length
            },
            e.compareVersions=function(t,r,n) {
              void 0===n&&(n=!1);
              var i=e.getVersionPrecision(t),o=e.getVersionPrecision(r),s=Math.max(i,o),a=0,u=e.map([t,r],(function(t) {
                var r=s-e.getVersionPrecision(t),n=t+new Array(r+1).join(".0");
                return e.map(n.split("."),(function(e) {
                  return new Array(20-e.length).join("0")+e
                }))
                .reverse()
              }));
              for(n&&(a=s-Math.min(i,o)),s-=1;
              s>=a;
              ) {
                if(u[0][s]>u[1][s])return 1;
                if(u[0][s]===u[1][s]) {
                  if(s===a)return 0;
                  s-=1
                }
                else if(u[0][s]<u[1][s])return-1
              }
            },
            e.map=function(e,t) {
              var r,n=[];
              if(Array.prototype.map)return Array.prototype.map.call(e,t);
              for(r=0;
              r<e.length;
              r+=1)n.push(t(e[r]));
              return n
            },
            e.find=function(e,t) {
              var r,n;
              if(Array.prototype.find)return Array.prototype.find.call(e,t);
              for(r=0,n=e.length;
              r<n;
              r+=1) {
                var i=e[r];
                if(t(i,r))return i
              }
            },
            e.assign=function(e) {
              for(var t,r,n=e,i=arguments.length,o=new Array(i>1?i-1:0),s=1;
              s<i;
              s++)o[s-1]=arguments[s];
              if(Object.assign)return Object.assign.apply(Object,[e].concat(o));
              var a=function() {
                var e=o[t];
                "object"==typeof e&&null!==e&&Object.keys(e).forEach((function(t) {
                  n[t]=e[t]
                }))
              };
              for(t=0,r=o.length;
              t<r;
              t+=1)a();
              return e
            },
            e.getBrowserAlias=function(e) {
              return n.BROWSER_ALIASES_MAP[e]
            },
            e.getBrowserTypeByAlias=function(e) {
              return n.BROWSER_MAP[e]||""
            },
            e
          }
          ();
          t.default=i,e.exports=t.default
        },
        18:function(e,t,r) {
          "use strict";
          t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0,t.BROWSER_ALIASES_MAP= {
            "Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"
          },
          t.BROWSER_MAP= {
            amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"
          },
          t.PLATFORMS_MAP= {
            tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"
          },
          t.OS_MAP= {
            WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"
          },
          t.ENGINE_MAP= {
            EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"
          }
        },
        90:function(e,t,r) {
          "use strict";
          t.__esModule=!0,t.default=void 0;
          var n,i=(n=r(91))&&n.__esModule?n: {
            default:n
          },
          o=r(18);
          function s(e,t) {
            for(var r=0;
            r<t.length;
            r++) {
              var n=t[r];
              n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)
            }
          }
          var a=function() {
            function e() {
            }
            var t,r;
            return e.getParser=function(e,t) {
              if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string");
              return new i.default(e,t)
            },
            e.parse=function(e) {
              return new i.default(e).getResult()
            },
            t=e,r=[ {
              key:"BROWSER_MAP",get:function() {
                return o.BROWSER_MAP
              }
            },
            {
              key:"ENGINE_MAP",get:function() {
                return o.ENGINE_MAP
              }
            },
            {
              key:"OS_MAP",get:function() {
                return o.OS_MAP
              }
            },
            {
              key:"PLATFORMS_MAP",get:function() {
                return o.PLATFORMS_MAP
              }
            }
            ],null&&s(t.prototype,null),r&&s(t,r),e
          }
          ();
          t.default=a,e.exports=t.default
        },
        91:function(e,t,r) {
          "use strict";
          t.__esModule=!0,t.default=void 0;
          var n=u(r(92)),i=u(r(93)),o=u(r(94)),s=u(r(95)),a=u(r(17));
          function u(e) {
            return e&&e.__esModule?e: {
              default:e
            }
          }
          var c=function() {
            function e(e,t) {
              if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty");
              this._ua=e,this.parsedResult= {
              },
              !0!==t&&this.parse()
            }
            var t=e.prototype;
            return t.getUA=function() {
              return this._ua
            },
            t.test=function(e) {
              return e.test(this._ua)
            },
            t.parseBrowser=function() {
              var e=this;
              this.parsedResult.browser= {
              };
              var t=a.default.find(n.default,(function(t) {
                if("function"==typeof t.test)return t.test(e);
                if(t.test instanceof Array)return t.test.some((function(t) {
                  return e.test(t)
                }));
                throw new Error("Browser's test function is not valid")
              }));
              return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser
            },
            t.getBrowser=function() {
              return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()
            },
            t.getBrowserName=function(e) {
              return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""
            },
            t.getBrowserVersion=function() {
              return this.getBrowser().version
            },
            t.getOS=function() {
              return this.parsedResult.os?this.parsedResult.os:this.parseOS()
            },
            t.parseOS=function() {
              var e=this;
              this.parsedResult.os= {
              };
              var t=a.default.find(i.default,(function(t) {
                if("function"==typeof t.test)return t.test(e);
                if(t.test instanceof Array)return t.test.some((function(t) {
                  return e.test(t)
                }));
                throw new Error("Browser's test function is not valid")
              }));
              return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os
            },
            t.getOSName=function(e) {
              var t=this.getOS().name;
              return e?String(t).toLowerCase()||"":t||""
            },
            t.getOSVersion=function() {
              return this.getOS().version
            },
            t.getPlatform=function() {
              return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()
            },
            t.getPlatformType=function(e) {
              void 0===e&&(e=!1);
              var t=this.getPlatform().type;
              return e?String(t).toLowerCase()||"":t||""
            },
            t.parsePlatform=function() {
              var e=this;
              this.parsedResult.platform= {
              };
              var t=a.default.find(o.default,(function(t) {
                if("function"==typeof t.test)return t.test(e);
                if(t.test instanceof Array)return t.test.some((function(t) {
                  return e.test(t)
                }));
                throw new Error("Browser's test function is not valid")
              }));
              return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform
            },
            t.getEngine=function() {
              return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()
            },
            t.getEngineName=function(e) {
              return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""
            },
            t.parseEngine=function() {
              var e=this;
              this.parsedResult.engine= {
              };
              var t=a.default.find(s.default,(function(t) {
                if("function"==typeof t.test)return t.test(e);
                if(t.test instanceof Array)return t.test.some((function(t) {
                  return e.test(t)
                }));
                throw new Error("Browser's test function is not valid")
              }));
              return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine
            },
            t.parse=function() {
              return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this
            },
            t.getResult=function() {
              return a.default.assign( {
              },
              this.parsedResult)
            },
            t.satisfies=function(e) {
              var t=this,r= {
              },
              n=0,i= {
              },
              o=0;
              if(Object.keys(e).forEach((function(t) {
                var s=e[t];
                "string"==typeof s?(i[t]=s,o+=1):"object"==typeof s&&(r[t]=s,n+=1)
              })),
              n>0) {
                var s=Object.keys(r),u=a.default.find(s,(function(e) {
                  return t.isOS(e)
                }));
                if(u) {
                  var c=this.satisfies(r[u]);
                  if(void 0!==c)return c
                }
                var l=a.default.find(s,(function(e) {
                  return t.isPlatform(e)
                }));
                if(l) {
                  var d=this.satisfies(r[l]);
                  if(void 0!==d)return d
                }
              }
              if(o>0) {
                var f=Object.keys(i),g=a.default.find(f,(function(e) {
                  return t.isBrowser(e,!0)
                }));
                if(void 0!==g)return this.compareVersion(i[g])
              }
            },
            t.isBrowser=function(e,t) {
              void 0===t&&(t=!1);
              var r=this.getBrowserName().toLowerCase(),n=e.toLowerCase(),i=a.default.getBrowserTypeByAlias(n);
              return t&&i&&(n=i.toLowerCase()),n===r
            },
            t.compareVersion=function(e) {
              var t=[0],r=e,n=!1,i=this.getBrowserVersion();
              if("string"==typeof i)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(n=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(n=!0,r=e.substr(1)),t.indexOf(a.default.compareVersions(i,r,n))>-1
            },
            t.isOS=function(e) {
              return this.getOSName(!0)===String(e).toLowerCase()
            },
            t.isPlatform=function(e) {
              return this.getPlatformType(!0)===String(e).toLowerCase()
            },
            t.isEngine=function(e) {
              return this.getEngineName(!0)===String(e).toLowerCase()
            },
            t.is=function(e,t) {
              return void 0===t&&(t=!1),this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)
            },
            t.some=function(e) {
              var t=this;
              return void 0===e&&(e=[]),e.some((function(e) {
                return t.is(e)
              }))
            },
            e
          }
          ();
          t.default=c,e.exports=t.default
        },
        92:function(e,t,r) {
          "use strict";
          t.__esModule=!0,t.default=void 0;
          var n,i=(n=r(17))&&n.__esModule?n: {
            default:n
          },
          o=/version\/(\d+(\.?_?\d+)+)/i,s=[ {
            test:[/googlebot/i],describe:function(e) {
              var t= {
                name:"Googlebot"
              },
              r=i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||i.default.getFirstMatch(o,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/opera/i],describe:function(e) {
              var t= {
                name:"Opera"
              },
              r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/opr\/|opios/i],describe:function(e) {
              var t= {
                name:"Opera"
              },
              r=i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||i.default.getFirstMatch(o,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/SamsungBrowser/i],describe:function(e) {
              var t= {
                name:"Samsung Internet for Android"
              },
              r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/Whale/i],describe:function(e) {
              var t= {
                name:"NAVER Whale Browser"
              },
              r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/MZBrowser/i],describe:function(e) {
              var t= {
                name:"MZ Browser"
              },
              r=i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(o,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/focus/i],describe:function(e) {
              var t= {
                name:"Focus"
              },
              r=i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(o,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/swing/i],describe:function(e) {
              var t= {
                name:"Swing"
              },
              r=i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(o,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/coast/i],describe:function(e) {
              var t= {
                name:"Opera Coast"
              },
              r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(e) {
              var t= {
                name:"Opera Touch"
              },
              r=i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/yabrowser/i],describe:function(e) {
              var t= {
                name:"Yandex Browser"
              },
              r=i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/ucbrowser/i],describe:function(e) {
              var t= {
                name:"UC Browser"
              },
              r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/Maxthon|mxios/i],describe:function(e) {
              var t= {
                name:"Maxthon"
              },
              r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/epiphany/i],describe:function(e) {
              var t= {
                name:"Epiphany"
              },
              r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/puffin/i],describe:function(e) {
              var t= {
                name:"Puffin"
              },
              r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/sleipnir/i],describe:function(e) {
              var t= {
                name:"Sleipnir"
              },
              r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/k-meleon/i],describe:function(e) {
              var t= {
                name:"K-Meleon"
              },
              r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/micromessenger/i],describe:function(e) {
              var t= {
                name:"WeChat"
              },
              r=i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/qqbrowser/i],describe:function(e) {
              var t= {
                name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"
              },
              r=i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/msie|trident/i],describe:function(e) {
              var t= {
                name:"Internet Explorer"
              },
              r=i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/\sedg\//i],describe:function(e) {
              var t= {
                name:"Microsoft Edge"
              },
              r=i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/edg([ea]|ios)/i],describe:function(e) {
              var t= {
                name:"Microsoft Edge"
              },
              r=i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/vivaldi/i],describe:function(e) {
              var t= {
                name:"Vivaldi"
              },
              r=i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/seamonkey/i],describe:function(e) {
              var t= {
                name:"SeaMonkey"
              },
              r=i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/sailfish/i],describe:function(e) {
              var t= {
                name:"Sailfish"
              },
              r=i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/silk/i],describe:function(e) {
              var t= {
                name:"Amazon Silk"
              },
              r=i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/phantom/i],describe:function(e) {
              var t= {
                name:"PhantomJS"
              },
              r=i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/slimerjs/i],describe:function(e) {
              var t= {
                name:"SlimerJS"
              },
              r=i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e) {
              var t= {
                name:"BlackBerry"
              },
              r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/(web|hpw)[o0]s/i],describe:function(e) {
              var t= {
                name:"WebOS Browser"
              },
              r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/bada/i],describe:function(e) {
              var t= {
                name:"Bada"
              },
              r=i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/tizen/i],describe:function(e) {
              var t= {
                name:"Tizen"
              },
              r=i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/qupzilla/i],describe:function(e) {
              var t= {
                name:"QupZilla"
              },
              r=i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/firefox|iceweasel|fxios/i],describe:function(e) {
              var t= {
                name:"Firefox"
              },
              r=i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/electron/i],describe:function(e) {
              var t= {
                name:"Electron"
              },
              r=i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/MiuiBrowser/i],describe:function(e) {
              var t= {
                name:"Miui"
              },
              r=i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/chromium/i],describe:function(e) {
              var t= {
                name:"Chromium"
              },
              r=i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/chrome|crios|crmo/i],describe:function(e) {
              var t= {
                name:"Chrome"
              },
              r=i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/GSA/i],describe:function(e) {
              var t= {
                name:"Google Search"
              },
              r=i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:function(e) {
              var t=!e.test(/like android/i),r=e.test(/android/i);
              return t&&r
            },
            describe:function(e) {
              var t= {
                name:"Android Browser"
              },
              r=i.default.getFirstMatch(o,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/playstation 4/i],describe:function(e) {
              var t= {
                name:"PlayStation 4"
              },
              r=i.default.getFirstMatch(o,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/safari|applewebkit/i],describe:function(e) {
              var t= {
                name:"Safari"
              },
              r=i.default.getFirstMatch(o,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/.*/i],describe:function(e) {
              var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;
              return {
                name:i.default.getFirstMatch(t,e),version:i.default.getSecondMatch(t,e)
              }
            }
          }
          ];
          t.default=s,e.exports=t.default
        },
        93:function(e,t,r) {
          "use strict";
          t.__esModule=!0,t.default=void 0;
          var n,i=(n=r(17))&&n.__esModule?n: {
            default:n
          },
          o=r(18),s=[ {
            test:[/Roku\/DVP/],describe:function(e) {
              var t=i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);
              return {
                name:o.OS_MAP.Roku,version:t
              }
            }
          },
          {
            test:[/windows phone/i],describe:function(e) {
              var t=i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);
              return {
                name:o.OS_MAP.WindowsPhone,version:t
              }
            }
          },
          {
            test:[/windows /i],describe:function(e) {
              var t=i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=i.default.getWindowsVersionName(t);
              return {
                name:o.OS_MAP.Windows,version:t,versionName:r
              }
            }
          },
          {
            test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(e) {
              var t= {
                name:o.OS_MAP.iOS
              },
              r=i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/macintosh/i],describe:function(e) {
              var t=i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=i.default.getMacOSVersionName(t),n= {
                name:o.OS_MAP.MacOS,version:t
              };
              return r&&(n.versionName=r),n
            }
          },
          {
            test:[/(ipod|iphone|ipad)/i],describe:function(e) {
              var t=i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");
              return {
                name:o.OS_MAP.iOS,version:t
              }
            }
          },
          {
            test:function(e) {
              var t=!e.test(/like android/i),r=e.test(/android/i);
              return t&&r
            },
            describe:function(e) {
              var t=i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=i.default.getAndroidVersionName(t),n= {
                name:o.OS_MAP.Android,version:t
              };
              return r&&(n.versionName=r),n
            }
          },
          {
            test:[/(web|hpw)[o0]s/i],describe:function(e) {
              var t=i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r= {
                name:o.OS_MAP.WebOS
              };
              return t&&t.length&&(r.version=t),r
            }
          },
          {
            test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e) {
              var t=i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||i.default.getFirstMatch(/\bbb(\d+)/i,e);
              return {
                name:o.OS_MAP.BlackBerry,version:t
              }
            }
          },
          {
            test:[/bada/i],describe:function(e) {
              var t=i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);
              return {
                name:o.OS_MAP.Bada,version:t
              }
            }
          },
          {
            test:[/tizen/i],describe:function(e) {
              var t=i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);
              return {
                name:o.OS_MAP.Tizen,version:t
              }
            }
          },
          {
            test:[/linux/i],describe:function() {
              return {
                name:o.OS_MAP.Linux
              }
            }
          },
          {
            test:[/CrOS/],describe:function() {
              return {
                name:o.OS_MAP.ChromeOS
              }
            }
          },
          {
            test:[/PlayStation 4/],describe:function(e) {
              var t=i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);
              return {
                name:o.OS_MAP.PlayStation4,version:t
              }
            }
          }
          ];
          t.default=s,e.exports=t.default
        },
        94:function(e,t,r) {
          "use strict";
          t.__esModule=!0,t.default=void 0;
          var n,i=(n=r(17))&&n.__esModule?n: {
            default:n
          },
          o=r(18),s=[ {
            test:[/googlebot/i],describe:function() {
              return {
                type:"bot",vendor:"Google"
              }
            }
          },
          {
            test:[/huawei/i],describe:function(e) {
              var t=i.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r= {
                type:o.PLATFORMS_MAP.mobile,vendor:"Huawei"
              };
              return t&&(r.model=t),r
            }
          },
          {
            test:[/nexus\s*(?:7|8|9|10).*/i],describe:function() {
              return {
                type:o.PLATFORMS_MAP.tablet,vendor:"Nexus"
              }
            }
          },
          {
            test:[/ipad/i],describe:function() {
              return {
                type:o.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"
              }
            }
          },
          {
            test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function() {
              return {
                type:o.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"
              }
            }
          },
          {
            test:[/kftt build/i],describe:function() {
              return {
                type:o.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"
              }
            }
          },
          {
            test:[/silk/i],describe:function() {
              return {
                type:o.PLATFORMS_MAP.tablet,vendor:"Amazon"
              }
            }
          },
          {
            test:[/tablet(?! pc)/i],describe:function() {
              return {
                type:o.PLATFORMS_MAP.tablet
              }
            }
          },
          {
            test:function(e) {
              var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);
              return t&&!r
            },
            describe:function(e) {
              var t=i.default.getFirstMatch(/(ipod|iphone)/i,e);
              return {
                type:o.PLATFORMS_MAP.mobile,vendor:"Apple",model:t
              }
            }
          },
          {
            test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function() {
              return {
                type:o.PLATFORMS_MAP.mobile,vendor:"Nexus"
              }
            }
          },
          {
            test:[/[^-]mobi/i],describe:function() {
              return {
                type:o.PLATFORMS_MAP.mobile
              }
            }
          },
          {
            test:function(e) {
              return"blackberry"===e.getBrowserName(!0)
            },
            describe:function() {
              return {
                type:o.PLATFORMS_MAP.mobile,vendor:"BlackBerry"
              }
            }
          },
          {
            test:function(e) {
              return"bada"===e.getBrowserName(!0)
            },
            describe:function() {
              return {
                type:o.PLATFORMS_MAP.mobile
              }
            }
          },
          {
            test:function(e) {
              return"windows phone"===e.getBrowserName()
            },
            describe:function() {
              return {
                type:o.PLATFORMS_MAP.mobile,vendor:"Microsoft"
              }
            }
          },
          {
            test:function(e) {
              var t=Number(String(e.getOSVersion()).split(".")[0]);
              return"android"===e.getOSName(!0)&&t>=3
            },
            describe:function() {
              return {
                type:o.PLATFORMS_MAP.tablet
              }
            }
          },
          {
            test:function(e) {
              return"android"===e.getOSName(!0)
            },
            describe:function() {
              return {
                type:o.PLATFORMS_MAP.mobile
              }
            }
          },
          {
            test:function(e) {
              return"macos"===e.getOSName(!0)
            },
            describe:function() {
              return {
                type:o.PLATFORMS_MAP.desktop,vendor:"Apple"
              }
            }
          },
          {
            test:function(e) {
              return"windows"===e.getOSName(!0)
            },
            describe:function() {
              return {
                type:o.PLATFORMS_MAP.desktop
              }
            }
          },
          {
            test:function(e) {
              return"linux"===e.getOSName(!0)
            },
            describe:function() {
              return {
                type:o.PLATFORMS_MAP.desktop
              }
            }
          },
          {
            test:function(e) {
              return"playstation 4"===e.getOSName(!0)
            },
            describe:function() {
              return {
                type:o.PLATFORMS_MAP.tv
              }
            }
          },
          {
            test:function(e) {
              return"roku"===e.getOSName(!0)
            },
            describe:function() {
              return {
                type:o.PLATFORMS_MAP.tv
              }
            }
          }
          ];
          t.default=s,e.exports=t.default
        },
        95:function(e,t,r) {
          "use strict";
          t.__esModule=!0,t.default=void 0;
          var n,i=(n=r(17))&&n.__esModule?n: {
            default:n
          },
          o=r(18),s=[ {
            test:function(e) {
              return"microsoft edge"===e.getBrowserName(!0)
            },
            describe:function(e) {
              if(/\sedg\//i.test(e))return {
                name:o.ENGINE_MAP.Blink
              };
              var t=i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);
              return {
                name:o.ENGINE_MAP.EdgeHTML,version:t
              }
            }
          },
          {
            test:[/trident/i],describe:function(e) {
              var t= {
                name:o.ENGINE_MAP.Trident
              },
              r=i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:function(e) {
              return e.test(/presto/i)
            },
            describe:function(e) {
              var t= {
                name:o.ENGINE_MAP.Presto
              },
              r=i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:function(e) {
              var t=e.test(/gecko/i),r=e.test(/like gecko/i);
              return t&&!r
            },
            describe:function(e) {
              var t= {
                name:o.ENGINE_MAP.Gecko
              },
              r=i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          },
          {
            test:[/(apple)?webkit\/537\.36/i],describe:function() {
              return {
                name:o.ENGINE_MAP.Blink
              }
            }
          },
          {
            test:[/(apple)?webkit/i],describe:function(e) {
              var t= {
                name:o.ENGINE_MAP.WebKit
              },
              r=i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);
              return r&&(t.version=r),t
            }
          }
          ];
          t.default=s,e.exports=t.default
        }
      })
    },
    8257:(e,t,r)=> {
      var n=r(9212),i=r(5637),o=TypeError;
      e.exports=function(e) {
        if(n(e))return e;
        throw o(i(e)+" is not a function")
      }
    },
    9882:(e,t,r)=> {
      var n=r(9212),i=String,o=TypeError;
      e.exports=function(e) {
        if("object"==typeof e||n(e))return e;
        throw o("Can't set "+i(e)+" as a prototype")
      }
    },
    4761:(e,t,r)=> {
      var n=r(2447),i=TypeError;
      e.exports=function(e,t) {
        if(n(t,e))return e;
        throw i("Incorrect invocation")
      }
    },
    2569:(e,t,r)=> {
      var n=r(794),i=String,o=TypeError;
      e.exports=function(e) {
        if(n(e))return e;
        throw o(i(e)+" is not an object")
      }
    },
    8578:e=> {
      e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView
    },
    3977:(e,t,r)=> {
      "use strict";
      var n,i,o,s=r(8578),a=r(8494),u=r(7583),c=r(9212),l=r(794),d=r(2870),f=r(3058),g=r(5637),m=r(57),p=r(3746),A=r(4615).f,v=r(2447),h=r(729),b=r(7496),y=r(3649),w=r(8284),x=r(2743),M=x.enforce,S=x.get,E=u.Int8Array,_=E&&E.prototype,O=u.Uint8ClampedArray,P=O&&O.prototype,T=E&&h(E),R=_&&h(_),k=Object.prototype,F=u.TypeError,C=y("toStringTag"),N=w("TYPED_ARRAY_TAG"),B="TypedArrayConstructor",L=s&&!!b&&"Opera"!==f(u.opera),I=!1,j= {
        Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8
      },
      D= {
        BigInt64Array:8,BigUint64Array:8
      },
      W=function(e) {
        var t=h(e);
        if(l(t)) {
          var r=S(t);
          return r&&d(r,B)?r[B]:W(t)
        }
      },
      U=function(e) {
        if(!l(e))return!1;
        var t=f(e);
        return d(j,t)||d(D,t)
      };
      for(n in j)(o=(i=u[n])&&i.prototype)?M(o)[B]=i:L=!1;
      for(n in D)(o=(i=u[n])&&i.prototype)&&(M(o)[B]=i);
      if((!L||!c(T)||T===Function.prototype)&&(T=function() {
        throw F("Incorrect invocation")
      },
      L))for(n in j)u[n]&&b(u[n],T);
      if((!L||!R||R===k)&&(R=T.prototype,L))for(n in j)u[n]&&b(u[n].prototype,R);
      if(L&&h(P)!==R&&b(P,R),a&&!d(R,C))for(n in I=!0,A(R,C, {
        get:function() {
          return l(this)?this[N]:void 0
        }
      }),
      j)u[n]&&m(u[n],N,n);
      e.exports= {
        NATIVE_ARRAY_BUFFER_VIEWS:L,TYPED_ARRAY_TAG:I&&N,aTypedArray:function(e) {
          if(U(e))return e;
          throw F("Target is not a typed array")
        },
        aTypedArrayConstructor:function(e) {
          if(c(e)&&(!b||v(T,e)))return e;
          throw F(g(e)+" is not a typed array constructor")
        },
        exportTypedArrayMethod:function(e,t,r,n) {
          if(a) {
            if(r)for(var i in j) {
              var o=u[i];
              if(o&&d(o.prototype,e))try {
                delete o.prototype[e]
              }
              catch(r) {
                try {
                  o.prototype[e]=t
                }
                catch(e) {
                }
              }
            }
            R[e]&&!r||p(R,e,r?t:L&&_[e]||t,n)
          }
        },
        exportTypedArrayStaticMethod:function(e,t,r) {
          var n,i;
          if(a) {
            if(b) {
              if(r)for(n in j)if((i=u[n])&&d(i,e))try {
                delete i[e]
              }
              catch(e) {
              }
              if(T[e]&&!r)return;
              try {
                return p(T,e,r?t:L&&T[e]||t)
              }
              catch(e) {
              }
            }
            for(n in j)!(i=u[n])||i[e]&&!r||p(i,e,t)
          }
        },
        getTypedArrayConstructor:W,isView:function(e) {
          if(!l(e))return!1;
          var t=f(e);
          return"DataView"===t||d(j,t)||d(D,t)
        },
        isTypedArray:U,TypedArray:T,TypedArrayPrototype:R
      }
    },
    5766:(e,t,r)=> {
      var n=r(2977),i=r(6782),o=r(1825),s=function(e) {
        return function(t,r,s) {
          var a,u=n(t),c=o(u),l=i(s,c);
          if(e&&r!=r) {
            for(;
            c>l;
            )if((a=u[l++])!=a)return!0
          }
          else for(;
          c>l;
          l++)if((e||l in u)&&u[l]===r)return e||l||0;
          return!e&&-1
        }
      };
      e.exports= {
        includes:s(!0),indexOf:s(!1)
      }
    },
    2544:(e,t,r)=> {
      var n=r(2938),i=r(5044),o=r(1324),s=r(1825),a=function(e) {
        var t=1==e;
        return function(r,a,u) {
          for(var c,l=o(r),d=i(l),f=n(a,u),g=s(d);
          g-- >0;
          )if(f(c=d[g],g,l))switch(e) {
            case 0:return c;
            case 1:return g
          }
          return t?-1:void 0
        }
      };
      e.exports= {
        findLast:a(0),findLastIndex:a(1)
      }
    },
    8173:(e,t,r)=> {
      "use strict";
      var n=r(8494),i=r(4521),o=TypeError,s=Object.getOwnPropertyDescriptor,a=n&&!function() {
        if(void 0!==this)return!0;
        try {
          Object.defineProperty([],"length", {
            writable:!1
          })
          .length=1
        }
        catch(e) {
          return e instanceof TypeError
        }
      }
      ();
      e.exports=a?function(e,t) {
        if(i(e)&&!s(e,"length").writable)throw o("Cannot set read only .length");
        return e.length=t
      }
      :function(e,t) {
        return e.length=t
      }
    },
    9624:(e,t,r)=> {
      var n=r(7386),i=n( {
      }
      .toString),o=n("".slice);
      e.exports=function(e) {
        return o(i(e),8,-1)
      }
    },
    3058:(e,t,r)=> {
      var n=r(8191),i=r(9212),o=r(9624),s=r(3649)("toStringTag"),a=Object,u="Arguments"==o(function() {
        return arguments
      }
      ());
      e.exports=n?o:function(e) {
        var t,r,n;
        return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t) {
          try {
            return e[t]
          }
          catch(e) {
          }
        }
        (t=a(e),s))?r:u?o(t):"Object"==(n=o(t))&&i(t.callee)?"Arguments":n
      }
    },
    3478:(e,t,r)=> {
      var n=r(2870),i=r(929),o=r(6683),s=r(4615);
      e.exports=function(e,t,r) {
        for(var a=i(t),u=s.f,c=o.f,l=0;
        l<a.length;
        l++) {
          var d=a[l];
          n(e,d)||r&&n(r,d)||u(e,d,c(t,d))
        }
      }
    },
    926:(e,t,r)=> {
      var n=r(6544);
      e.exports=!n((function() {
        function e() {
        }
        return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype
      }))
    },
    57:(e,t,r)=> {
      var n=r(8494),i=r(4615),o=r(4677);
      e.exports=n?function(e,t,r) {
        return i.f(e,t,o(1,r))
      }
      :function(e,t,r) {
        return e[t]=r,e
      }
    },
    4677:e=> {
      e.exports=function(e,t) {
        return {
          enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t
        }
      }
    },
    3746:(e,t,r)=> {
      var n=r(9212),i=r(4615),o=r(9594),s=r(2296);
      e.exports=function(e,t,r,a) {
        a||(a= {
        });
        var u=a.enumerable,c=void 0!==a.name?a.name:t;
        if(n(r)&&o(r,c,a),a.global)u?e[t]=r:s(t,r);
        else {
          try {
            a.unsafe?e[t]&&(u=!0):delete e[t]
          }
          catch(e) {
          }
          u?e[t]=r:i.f(e,t, {
            value:r,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable
          })
        }
        return e
      }
    },
    2296:(e,t,r)=> {
      var n=r(7583),i=Object.defineProperty;
      e.exports=function(e,t) {
        try {
          i(n,e, {
            value:t,configurable:!0,writable:!0
          })
        }
        catch(r) {
          n[e]=t
        }
        return t
      }
    },
    8494:(e,t,r)=> {
      var n=r(6544);
      e.exports=!n((function() {
        return 7!=Object.defineProperty( {
        },
        1, {
          get:function() {
            return 7
          }
        })
        [1]
      }))
    },
    2952:e=> {
      var t="object"==typeof document&&document.all,r=void 0===t&&void 0!==t;
      e.exports= {
        all:t,IS_HTMLDDA:r
      }
    },
    6668:(e,t,r)=> {
      var n=r(7583),i=r(794),o=n.document,s=i(o)&&i(o.createElement);
      e.exports=function(e) {
        return s?o.createElement(e): {
        }
      }
    },
    6768:e=> {
      var t=TypeError;
      e.exports=function(e) {
        if(e>9007199254740991)throw t("Maximum allowed index exceeded");
        return e
      }
    },
    5331:e=> {
      e.exports= {
        IndexSizeError: {
          s:"INDEX_SIZE_ERR",c:1,m:1
        },
        DOMStringSizeError: {
          s:"DOMSTRING_SIZE_ERR",c:2,m:0
        },
        HierarchyRequestError: {
          s:"HIERARCHY_REQUEST_ERR",c:3,m:1
        },
        WrongDocumentError: {
          s:"WRONG_DOCUMENT_ERR",c:4,m:1
        },
        InvalidCharacterError: {
          s:"INVALID_CHARACTER_ERR",c:5,m:1
        },
        NoDataAllowedError: {
          s:"NO_DATA_ALLOWED_ERR",c:6,m:0
        },
        NoModificationAllowedError: {
          s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1
        },
        NotFoundError: {
          s:"NOT_FOUND_ERR",c:8,m:1
        },
        NotSupportedError: {
          s:"NOT_SUPPORTED_ERR",c:9,m:1
        },
        InUseAttributeError: {
          s:"INUSE_ATTRIBUTE_ERR",c:10,m:1
        },
        InvalidStateError: {
          s:"INVALID_STATE_ERR",c:11,m:1
        },
        SyntaxError: {
          s:"SYNTAX_ERR",c:12,m:1
        },
        InvalidModificationError: {
          s:"INVALID_MODIFICATION_ERR",c:13,m:1
        },
        NamespaceError: {
          s:"NAMESPACE_ERR",c:14,m:1
        },
        InvalidAccessError: {
          s:"INVALID_ACCESS_ERR",c:15,m:1
        },
        ValidationError: {
          s:"VALIDATION_ERR",c:16,m:0
        },
        TypeMismatchError: {
          s:"TYPE_MISMATCH_ERR",c:17,m:1
        },
        SecurityError: {
          s:"SECURITY_ERR",c:18,m:1
        },
        NetworkError: {
          s:"NETWORK_ERR",c:19,m:1
        },
        AbortError: {
          s:"ABORT_ERR",c:20,m:1
        },
        URLMismatchError: {
          s:"URL_MISMATCH_ERR",c:21,m:1
        },
        QuotaExceededError: {
          s:"QUOTA_EXCEEDED_ERR",c:22,m:1
        },
        TimeoutError: {
          s:"TIMEOUT_ERR",c:23,m:1
        },
        InvalidNodeTypeError: {
          s:"INVALID_NODE_TYPE_ERR",c:24,m:1
        },
        DataCloneError: {
          s:"DATA_CLONE_ERR",c:25,m:1
        }
      }
    },
    6918:(e,t,r)=> {
      var n=r(5897);
      e.exports=n("navigator","userAgent")||""
    },
    4061:(e,t,r)=> {
      var n,i,o=r(7583),s=r(6918),a=o.process,u=o.Deno,c=a&&a.versions||u&&u.version,l=c&&c.v8;
      l&&(i=(n=l.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!i&&s&&(!(n=s.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=s.match(/Chrome\/(\d+)/))&&(i=+n[1]),e.exports=i
    },
    5690:e=> {
      e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]
    },
    668:(e,t,r)=> {
      var n=r(7386),i=Error,o=n("".replace),s=String(i("zxcasd").stack),a=/\n\s*at [^:]*:[^\n]*/,u=a.test(s);
      e.exports=function(e,t) {
        if(u&&"string"==typeof e&&!i.prepareStackTrace)for(;
        t--;
        )e=o(e,a,"");
        return e
      }
    },
    1178:(e,t,r)=> {
      var n=r(6544),i=r(4677);
      e.exports=!n((function() {
        var e=Error("a");
        return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)
      }))
    },
    7263:(e,t,r)=> {
      var n=r(7583),i=r(6683).f,o=r(57),s=r(3746),a=r(2296),u=r(3478),c=r(4451);
      e.exports=function(e,t) {
        var r,l,d,f,g,m=e.target,p=e.global,A=e.stat;
        if(r=p?n:A?n[m]||a(m, {
        })
        :(n[m]|| {
        })
        .prototype)for(l in t) {
          if(f=t[l],d=e.dontCallGetSet?(g=i(r,l))&&g.value:r[l],!c(p?l:m+(A?".":"#")+l,e.forced)&&void 0!==d) {
            if(typeof f==typeof d)continue;
            u(f,d)
          }
          (e.sham||d&&d.sham)&&o(f,"sham",!0),s(r,l,f,e)
        }
      }
    },
    6544:e=> {
      e.exports=function(e) {
        try {
          return!!e()
        }
        catch(e) {
          return!0
        }
      }
    },
    1611:(e,t,r)=> {
      var n=r(8987),i=Function.prototype,o=i.apply,s=i.call;
      e.exports="object"==typeof Reflect&&Reflect.apply||(n?s.bind(o):function() {
        return s.apply(o,arguments)
      })
    },
    2938:(e,t,r)=> {
      var n=r(6887),i=r(8257),o=r(8987),s=n(n.bind);
      e.exports=function(e,t) {
        return i(e),void 0===t?e:o?s(e,t):function() {
          return e.apply(t,arguments)
        }
      }
    },
    8987:(e,t,r)=> {
      var n=r(6544);
      e.exports=!n((function() {
        var e=function() {
        }
        .bind();
        return"function"!=typeof e||e.hasOwnProperty("prototype")
      }))
    },
    8262:(e,t,r)=> {
      var n=r(8987),i=Function.prototype.call;
      e.exports=n?i.bind(i):function() {
        return i.apply(i,arguments)
      }
    },
    4340:(e,t,r)=> {
      var n=r(8494),i=r(2870),o=Function.prototype,s=n&&Object.getOwnPropertyDescriptor,a=i(o,"name"),u=a&&"something"===function() {
      }
      .name,c=a&&(!n||n&&s(o,"name").configurable);
      e.exports= {
        EXISTS:a,PROPER:u,CONFIGURABLE:c
      }
    },
    6887:(e,t,r)=> {
      var n=r(9624),i=r(7386);
      e.exports=function(e) {
        if("Function"===n(e))return i(e)
      }
    },
    7386:(e,t,r)=> {
      var n=r(8987),i=Function.prototype,o=i.call,s=n&&i.bind.bind(o,o);
      e.exports=n?s:function(e) {
        return function() {
          return o.apply(e,arguments)
        }
      }
    },
    5897:(e,t,r)=> {
      var n=r(7583),i=r(9212),o=function(e) {
        return i(e)?e:void 0
      };
      e.exports=function(e,t) {
        return arguments.length<2?o(n[e]):n[e]&&n[e][t]
      }
    },
    911:(e,t,r)=> {
      var n=r(8257),i=r(8505);
      e.exports=function(e,t) {
        var r=e[t];
        return i(r)?void 0:n(r)
      }
    },
    7583:(e,t,r)=> {
      var n=function(e) {
        return e&&e.Math==Math&&e
      };
      e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function() {
        return this
      }
      ()||Function("return this")()
    },
    2870:(e,t,r)=> {
      var n=r(7386),i=r(1324),o=n( {
      }
      .hasOwnProperty);
      e.exports=Object.hasOwn||function(e,t) {
        return o(i(e),t)
      }
    },
    4639:e=> {
      e.exports= {
      }
    },
    275:(e,t,r)=> {
      var n=r(8494),i=r(6544),o=r(6668);
      e.exports=!n&&!i((function() {
        return 7!=Object.defineProperty(o("div"),"a", {
          get:function() {
            return 7
          }
        })
        .a
      }))
    },
    5044:(e,t,r)=> {
      var n=r(7386),i=r(6544),o=r(9624),s=Object,a=n("".split);
      e.exports=i((function() {
        return!s("z").propertyIsEnumerable(0)
      }))
      ?function(e) {
        return"String"==o(e)?a(e,""):s(e)
      }
      :s
    },
    434:(e,t,r)=> {
      var n=r(9212),i=r(794),o=r(7496);
      e.exports=function(e,t,r) {
        var s,a;
        return o&&n(s=t.constructor)&&s!==r&&i(a=s.prototype)&&a!==r.prototype&&o(e,a),e
      }
    },
    9734:(e,t,r)=> {
      var n=r(7386),i=r(9212),o=r(1314),s=n(Function.toString);
      i(o.inspectSource)||(o.inspectSource=function(e) {
        return s(e)
      }),
      e.exports=o.inspectSource
    },
    4402:(e,t,r)=> {
      var n=r(794),i=r(57);
      e.exports=function(e,t) {
        n(t)&&"cause"in t&&i(e,"cause",t.cause)
      }
    },
    2743:(e,t,r)=> {
      var n,i,o,s=r(5307),a=r(7583),u=r(794),c=r(57),l=r(2870),d=r(1314),f=r(9137),g=r(4639),m="Object already initialized",p=a.TypeError,A=a.WeakMap;
      if(s||d.state) {
        var v=d.state||(d.state=new A);
        v.get=v.get,v.has=v.has,v.set=v.set,n=function(e,t) {
          if(v.has(e))throw p(m);
          return t.facade=e,v.set(e,t),t
        },
        i=function(e) {
          return v.get(e)|| {
          }
        },
        o=function(e) {
          return v.has(e)
        }
      }
      else {
        var h=f("state");
        g[h]=!0,n=function(e,t) {
          if(l(e,h))throw p(m);
          return t.facade=e,c(e,h,t),t
        },
        i=function(e) {
          return l(e,h)?e[h]: {
          }
        },
        o=function(e) {
          return l(e,h)
        }
      }
      e.exports= {
        set:n,get:i,has:o,enforce:function(e) {
          return o(e)?i(e):n(e, {
          })
        },
        getterFor:function(e) {
          return function(t) {
            var r;
            if(!u(t)||(r=i(t)).type!==e)throw p("Incompatible receiver, "+e+" required");
            return r
          }
        }
      }
    },
    4521:(e,t,r)=> {
      var n=r(9624);
      e.exports=Array.isArray||function(e) {
        return"Array"==n(e)
      }
    },
    9212:(e,t,r)=> {
      var n=r(2952),i=n.all;
      e.exports=n.IS_HTMLDDA?function(e) {
        return"function"==typeof e||e===i
      }
      :function(e) {
        return"function"==typeof e
      }
    },
    4451:(e,t,r)=> {
      var n=r(6544),i=r(9212),o=/#|\.prototype\./,s=function(e,t) {
        var r=u[a(e)];
        return r==l||r!=c&&(i(t)?n(t):!!t)
      },
      a=s.normalize=function(e) {
        return String(e).replace(o,".").toLowerCase()
      },
      u=s.data= {
      },
      c=s.NATIVE="N",l=s.POLYFILL="P";
      e.exports=s
    },
    8505:e=> {
      e.exports=function(e) {
        return null==e
      }
    },
    794:(e,t,r)=> {
      var n=r(9212),i=r(2952),o=i.all;
      e.exports=i.IS_HTMLDDA?function(e) {
        return"object"==typeof e?null!==e:n(e)||e===o
      }
      :function(e) {
        return"object"==typeof e?null!==e:n(e)
      }
    },
    6268:e=> {
      e.exports=!1
    },
    5871:(e,t,r)=> {
      var n=r(5897),i=r(9212),o=r(2447),s=r(7786),a=Object;
      e.exports=s?function(e) {
        return"symbol"==typeof e
      }
      :function(e) {
        var t=n("Symbol");
        return i(t)&&o(t.prototype,a(e))
      }
    },
    1825:(e,t,r)=> {
      var n=r(97);
      e.exports=function(e) {
        return n(e.length)
      }
    },
    9594:(e,t,r)=> {
      var n=r(6544),i=r(9212),o=r(2870),s=r(8494),a=r(4340).CONFIGURABLE,u=r(9734),c=r(2743),l=c.enforce,d=c.get,f=Object.defineProperty,g=s&&!n((function() {
        return 8!==f((function() {
        }),
        "length", {
          value:8
        })
        .length
      })),
      m=String(String).split("String"),p=e.exports=function(e,t,r) {
        "Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!o(e,"name")||a&&e.name!==t)&&(s?f(e,"name", {
          value:t,configurable:!0
        })
        :e.name=t),g&&r&&o(r,"arity")&&e.length!==r.arity&&f(e,"length", {
          value:r.arity
        });
        try {
          r&&o(r,"constructor")&&r.constructor?s&&f(e,"prototype", {
            writable:!1
          })
          :e.prototype&&(e.prototype=void 0)
        }
        catch(e) {
        }
        var n=l(e);
        return o(n,"source")||(n.source=m.join("string"==typeof t?t:"")),e
      };
      Function.prototype.toString=p((function() {
        return i(this)&&d(this).source||u(this)
      }),
      "toString")
    },
    9021:e=> {
      var t=Math.ceil,r=Math.floor;
      e.exports=Math.trunc||function(e) {
        var n=+e;
        return(n>0?r:t)(n)
      }
    },
    2764:(e,t,r)=> {
      var n=r(8320);
      e.exports=function(e,t) {
        return void 0===e?arguments.length<2?"":t:n(e)
      }
    },
    4615:(e,t,r)=> {
      var n=r(8494),i=r(275),o=r(7670),s=r(2569),a=r(8734),u=TypeError,c=Object.defineProperty,l=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",g="writable";
      t.f=n?o?function(e,t,r) {
        if(s(e),t=a(t),s(r),"function"==typeof e&&"prototype"===t&&"value"in r&&g in r&&!r[g]) {
          var n=l(e,t);
          n&&n[g]&&(e[t]=r.value,r= {
            configurable:f in r?r[f]:n[f],enumerable:d in r?r[d]:n[d],writable:!1
          })
        }
        return c(e,t,r)
      }
      :c:function(e,t,r) {
        if(s(e),t=a(t),s(r),i)try {
          return c(e,t,r)
        }
        catch(e) {
        }
        if("get"in r||"set"in r)throw u("Accessors not supported");
        return"value"in r&&(e[t]=r.value),e
      }
    },
    6683:(e,t,r)=> {
      var n=r(8494),i=r(8262),o=r(112),s=r(4677),a=r(2977),u=r(8734),c=r(2870),l=r(275),d=Object.getOwnPropertyDescriptor;
      t.f=n?d:function(e,t) {
        if(e=a(e),t=u(t),l)try {
          return d(e,t)
        }
        catch(e) {
        }
        if(c(e,t))return s(!i(o.f,e,t),e[t])
      }
    },
    9275:(e,t,r)=> {
      var n=r(8356),i=r(5690).concat("length","prototype");
      t.f=Object.getOwnPropertyNames||function(e) {
        return n(e,i)
      }
    },
    4012:(e,t)=> {
      t.f=Object.getOwnPropertySymbols
    },
    729:(e,t,r)=> {
      var n=r(2870),i=r(9212),o=r(1324),s=r(9137),a=r(926),u=s("IE_PROTO"),c=Object,l=c.prototype;
      e.exports=a?c.getPrototypeOf:function(e) {
        var t=o(e);
        if(n(t,u))return t[u];
        var r=t.constructor;
        return i(r)&&t instanceof r?r.prototype:t instanceof c?l:null
      }
    },
    2447:(e,t,r)=> {
      var n=r(7386);
      e.exports=n( {
      }
      .isPrototypeOf)
    },
    8356:(e,t,r)=> {
      var n=r(7386),i=r(2870),o=r(2977),s=r(5766).indexOf,a=r(4639),u=n([].push);
      e.exports=function(e,t) {
        var r,n=o(e),c=0,l=[];
        for(r in n)!i(a,r)&&i(n,r)&&u(l,r);
        for(;
        t.length>c;
        )i(n,r=t[c++])&&(~s(l,r)||u(l,r));
        return l
      }
    },
    112:(e,t)=> {
      "use strict";
      var r= {
      }
      .propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,i=n&&!r.call( {
        1:2
      },
      1);
      t.f=i?function(e) {
        var t=n(this,e);
        return!!t&&t.enumerable
      }
      :r
    },
    7496:(e,t,r)=> {
      var n=r(7386),i=r(2569),o=r(9882);
      e.exports=Object.setPrototypeOf||("__proto__"in {
      }
      ?function() {
        var e,t=!1,r= {
        };
        try {
          (e=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),t=r instanceof Array
        }
        catch(e) {
        }
        return function(r,n) {
          return i(r),o(n),t?e(r,n):r.__proto__=n,r
        }
      }
      ():void 0)
    },
    6252:(e,t,r)=> {
      var n=r(8262),i=r(9212),o=r(794),s=TypeError;
      e.exports=function(e,t) {
        var r,a;
        if("string"===t&&i(r=e.toString)&&!o(a=n(r,e)))return a;
        if(i(r=e.valueOf)&&!o(a=n(r,e)))return a;
        if("string"!==t&&i(r=e.toString)&&!o(a=n(r,e)))return a;
        throw s("Can't convert object to primitive value")
      }
    },
    929:(e,t,r)=> {
      var n=r(5897),i=r(7386),o=r(9275),s=r(4012),a=r(2569),u=i([].concat);
      e.exports=n("Reflect","ownKeys")||function(e) {
        var t=o.f(a(e)),r=s.f;
        return r?u(t,r(e)):t
      }
    },
    5327:(e,t,r)=> {
      var n=r(4615).f;
      e.exports=function(e,t,r) {
        r in e||n(e,r, {
          configurable:!0,get:function() {
            return t[r]
          },
          set:function(e) {
            t[r]=e
          }
        })
      }
    },
    3955:(e,t,r)=> {
      var n=r(8505),i=TypeError;
      e.exports=function(e) {
        if(n(e))throw i("Can't call method on "+e);
        return e
      }
    },
    9137:(e,t,r)=> {
      var n=r(7836),i=r(8284),o=n("keys");
      e.exports=function(e) {
        return o[e]||(o[e]=i(e))
      }
    },
    1314:(e,t,r)=> {
      var n=r(7583),i=r(2296),o="__core-js_shared__",s=n[o]||i(o, {
      });
      e.exports=s
    },
    7836:(e,t,r)=> {
      var n=r(6268),i=r(1314);
      (e.exports=function(e,t) {
        return i[e]||(i[e]=void 0!==t?t: {
        })
      })
      ("versions",[]).push( {
        version:"3.26.1",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"
      })
    },
    4193:(e,t,r)=> {
      var n=r(4061),i=r(6544);
      e.exports=!!Object.getOwnPropertySymbols&&!i((function() {
        var e=Symbol();
        return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41
      }))
    },
    6782:(e,t,r)=> {
      var n=r(7486),i=Math.max,o=Math.min;
      e.exports=function(e,t) {
        var r=n(e);
        return r<0?i(r+t,0):o(r,t)
      }
    },
    2977:(e,t,r)=> {
      var n=r(5044),i=r(3955);
      e.exports=function(e) {
        return n(i(e))
      }
    },
    7486:(e,t,r)=> {
      var n=r(9021);
      e.exports=function(e) {
        var t=+e;
        return t!=t||0===t?0:n(t)
      }
    },
    97:(e,t,r)=> {
      var n=r(7486),i=Math.min;
      e.exports=function(e) {
        return e>0?i(n(e),9007199254740991):0
      }
    },
    1324:(e,t,r)=> {
      var n=r(3955),i=Object;
      e.exports=function(e) {
        return i(n(e))
      }
    },
    3248:(e,t,r)=> {
      var n=r(2955),i=RangeError;
      e.exports=function(e,t) {
        var r=n(e);
        if(r%t)throw i("Wrong offset");
        return r
      }
    },
    2955:(e,t,r)=> {
      var n=r(7486),i=RangeError;
      e.exports=function(e) {
        var t=n(e);
        if(t<0)throw i("The argument can't be less than 0");
        return t
      }
    },
    2670:(e,t,r)=> {
      var n=r(8262),i=r(794),o=r(5871),s=r(911),a=r(6252),u=r(3649),c=TypeError,l=u("toPrimitive");
      e.exports=function(e,t) {
        if(!i(e)||o(e))return e;
        var r,u=s(e,l);
        if(u) {
          if(void 0===t&&(t="default"),r=n(u,e,t),!i(r)||o(r))return r;
          throw c("Can't convert object to primitive value")
        }
        return void 0===t&&(t="number"),a(e,t)
      }
    },
    8734:(e,t,r)=> {
      var n=r(2670),i=r(5871);
      e.exports=function(e) {
        var t=n(e,"string");
        return i(t)?t:t+""
      }
    },
    8191:(e,t,r)=> {
      var n= {
      };
      n[r(3649)("toStringTag")]="z",e.exports="[object z]"===String(n)
    },
    8320:(e,t,r)=> {
      var n=r(3058),i=String;
      e.exports=function(e) {
        if("Symbol"===n(e))throw TypeError("Cannot convert a Symbol value to a string");
        return i(e)
      }
    },
    5637:e=> {
      var t=String;
      e.exports=function(e) {
        try {
          return t(e)
        }
        catch(e) {
          return"Object"
        }
      }
    },
    8284:(e,t,r)=> {
      var n=r(7386),i=0,o=Math.random(),s=n(1..toString);
      e.exports=function(e) {
        return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)
      }
    },
    7786:(e,t,r)=> {
      var n=r(4193);
      e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator
    },
    7670:(e,t,r)=> {
      var n=r(8494),i=r(6544);
      e.exports=n&&i((function() {
        return 42!=Object.defineProperty((function() {
        }),
        "prototype", {
          value:42,writable:!1
        })
        .prototype
      }))
    },
    5307:(e,t,r)=> {
      var n=r(7583),i=r(9212),o=n.WeakMap;
      e.exports=i(o)&&/native code/.test(String(o))
    },
    3649:(e,t,r)=> {
      var n=r(7583),i=r(7836),o=r(2870),s=r(8284),a=r(4193),u=r(7786),c=i("wks"),l=n.Symbol,d=l&&l.for,f=u?l:l&&l.withoutSetter||s;
      e.exports=function(e) {
        if(!o(c,e)||!a&&"string"!=typeof c[e]) {
          var t="Symbol."+e;
          a&&o(l,e)?c[e]=l[e]:c[e]=u&&d?d(t):f(t)
        }
        return c[e]
      }
    },
    7442:(e,t,r)=> {
      "use strict";
      var n=r(5897),i=r(2870),o=r(57),s=r(2447),a=r(7496),u=r(3478),c=r(5327),l=r(434),d=r(2764),f=r(4402),g=r(668),m=r(1178),p=r(8494),A=r(6268);
      e.exports=function(e,t,r,v) {
        var h="stackTraceLimit",b=v?2:1,y=e.split("."),w=y[y.length-1],x=n.apply(null,y);
        if(x) {
          var M=x.prototype;
          if(!A&&i(M,"cause")&&delete M.cause,!r)return x;
          var S=n("Error"),E=t((function(e,t) {
            var r=d(v?t:e,void 0),n=v?new x(e):new x;
            return void 0!==r&&o(n,"message",r),m&&o(n,"stack",g(n.stack,2)),this&&s(M,this)&&l(n,this,E),arguments.length>b&&f(n,arguments[b]),n
          }));
          if(E.prototype=M,"Error"!==w?a?a(E,S):u(E,S, {
            name:!0
          })
          :p&&h in x&&(c(E,x,h),c(E,x,"prepareStackTrace")),u(E,x),!A)try {
            M.name!==w&&o(M,"name",w),M.constructor=E
          }
          catch(e) {
          }
          return E
        }
      }
    },
    4573:(e,t,r)=> {
      "use strict";
      var n=r(7263),i=r(1324),o=r(1825),s=r(8173),a=r(6768),u=r(6544)((function() {
        return 4294967297!==[].push.call( {
          length:4294967296
        },
        1)
      })),
      c=!function() {
        try {
          Object.defineProperty([],"length", {
            writable:!1
          })
          .push()
        }
        catch(e) {
          return e instanceof TypeError
        }
      }
      ();
      n( {
        target:"Array",proto:!0,arity:1,forced:u||c
      },
      {
        push:function(e) {
          var t=i(this),r=o(t),n=arguments.length;
          a(r+n);
          for(var u=0;
          u<n;
          u++)t[r]=arguments[u],r++;
          return s(t,r),r
        }
      })
    },
    8487:(e,t,r)=> {
      var n=r(7263),i=r(7583),o=r(1611),s=r(7442),a="WebAssembly",u=i[a],c=7!==Error("e", {
        cause:7
      })
      .cause,l=function(e,t) {
        var r= {
        };
        r[e]=s(e,t,c),n( {
          global:!0,constructor:!0,arity:1,forced:c
        },
        r)
      },
      d=function(e,t) {
        if(u&&u[e]) {
          var r= {
          };
          r[e]=s(a+"."+e,t,c),n( {
            target:a,stat:!0,constructor:!0,arity:1,forced:c
          },
          r)
        }
      };
      l("Error",(function(e) {
        return function(t) {
          return o(e,this,arguments)
        }
      })),
      l("EvalError",(function(e) {
        return function(t) {
          return o(e,this,arguments)
        }
      })),
      l("RangeError",(function(e) {
        return function(t) {
          return o(e,this,arguments)
        }
      })),
      l("ReferenceError",(function(e) {
        return function(t) {
          return o(e,this,arguments)
        }
      })),
      l("SyntaxError",(function(e) {
        return function(t) {
          return o(e,this,arguments)
        }
      })),
      l("TypeError",(function(e) {
        return function(t) {
          return o(e,this,arguments)
        }
      })),
      l("URIError",(function(e) {
        return function(t) {
          return o(e,this,arguments)
        }
      })),
      d("CompileError",(function(e) {
        return function(t) {
          return o(e,this,arguments)
        }
      })),
      d("LinkError",(function(e) {
        return function(t) {
          return o(e,this,arguments)
        }
      })),
      d("RuntimeError",(function(e) {
        return function(t) {
          return o(e,this,arguments)
        }
      }))
    },
    7391:(e,t,r)=> {
      "use strict";
      var n=r(3977),i=r(2544).findLastIndex,o=n.aTypedArray;
      (0,n.exportTypedArrayMethod)("findLastIndex",(function(e) {
        return i(o(this),e,arguments.length>1?arguments[1]:void 0)
      }))
    },
    6205:(e,t,r)=> {
      "use strict";
      var n=r(3977),i=r(2544).findLast,o=n.aTypedArray;
      (0,n.exportTypedArrayMethod)("findLast",(function(e) {
        return i(o(this),e,arguments.length>1?arguments[1]:void 0)
      }))
    },
    9494:(e,t,r)=> {
      "use strict";
      var n=r(7583),i=r(8262),o=r(3977),s=r(1825),a=r(3248),u=r(1324),c=r(6544),l=n.RangeError,d=n.Int8Array,f=d&&d.prototype,g=f&&f.set,m=o.aTypedArray,p=o.exportTypedArrayMethod,A=!c((function() {
        var e=new Uint8ClampedArray(2);
        return i(g,e, {
          length:1,0:3
        },
        1),3!==e[1]
      })),
      v=A&&o.NATIVE_ARRAY_BUFFER_VIEWS&&c((function() {
        var e=new d(2);
        return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]
      }));
      p("set",(function(e) {
        m(this);
        var t=a(arguments.length>1?arguments[1]:void 0,1),r=u(e);
        if(A)return i(g,this,r,t);
        var n=this.length,o=s(r),c=0;
        if(o+t>n)throw l("Wrong length");
        for(;
        c<o;
        )this[t+c]=r[c++]
      }),
      !A||v)
    },
    2241:(e,t,r)=> {
      "use strict";
      var n=r(7263),i=r(7583),o=r(5897),s=r(4677),a=r(4615).f,u=r(2870),c=r(4761),l=r(434),d=r(2764),f=r(5331),g=r(668),m=r(8494),p=r(6268),A="DOMException",v=o("Error"),h=o(A),b=function() {
        c(this,y);
        var e=arguments.length,t=d(e<1?void 0:arguments[0]),r=d(e<2?void 0:arguments[1],"Error"),n=new h(t,r),i=v(t);
        return i.name=A,a(n,"stack",s(1,g(i.stack,1))),l(n,this,b),n
      },
      y=b.prototype=h.prototype,w="stack"in v(A),x="stack"in new h(1,2),M=h&&m&&Object.getOwnPropertyDescriptor(i,A),S=!(!M||M.writable&&M.configurable),E=w&&!S&&!x;
      n( {
        global:!0,constructor:!0,forced:p||E
      },
      {
        DOMException:E?b:h
      });
      var _=o(A),O=_.prototype;
      if(O.constructor!==_)for(var P in p||a(O,"constructor",s(1,_)),f)if(u(f,P)) {
        var T=f[P],R=T.s;
        u(_,R)||a(_,R,s(6,T.c))
      }
    },
    3145:function(e,t) {
      var r,n;
      "undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=function(e) {
        "use strict";
        if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");
        if(void 0===globalThis.browser||Object.getPrototypeOf(globalThis.browser)!==Object.prototype) {
          const t="The message port closed before a response was received.",r=e=> {
            const r= {
              alarms: {
                clear: {
                  minArgs:0,maxArgs:1
                },
                clearAll: {
                  minArgs:0,maxArgs:0
                },
                get: {
                  minArgs:0,maxArgs:1
                },
                getAll: {
                  minArgs:0,maxArgs:0
                }
              },
              bookmarks: {
                create: {
                  minArgs:1,maxArgs:1
                },
                get: {
                  minArgs:1,maxArgs:1
                },
                getChildren: {
                  minArgs:1,maxArgs:1
                },
                getRecent: {
                  minArgs:1,maxArgs:1
                },
                getSubTree: {
                  minArgs:1,maxArgs:1
                },
                getTree: {
                  minArgs:0,maxArgs:0
                },
                move: {
                  minArgs:2,maxArgs:2
                },
                remove: {
                  minArgs:1,maxArgs:1
                },
                removeTree: {
                  minArgs:1,maxArgs:1
                },
                search: {
                  minArgs:1,maxArgs:1
                },
                update: {
                  minArgs:2,maxArgs:2
                }
              },
              browserAction: {
                disable: {
                  minArgs:0,maxArgs:1,fallbackToNoCallback:!0
                },
                enable: {
                  minArgs:0,maxArgs:1,fallbackToNoCallback:!0
                },
                getBadgeBackgroundColor: {
                  minArgs:1,maxArgs:1
                },
                getBadgeText: {
                  minArgs:1,maxArgs:1
                },
                getPopup: {
                  minArgs:1,maxArgs:1
                },
                getTitle: {
                  minArgs:1,maxArgs:1
                },
                openPopup: {
                  minArgs:0,maxArgs:0
                },
                setBadgeBackgroundColor: {
                  minArgs:1,maxArgs:1,fallbackToNoCallback:!0
                },
                setBadgeText: {
                  minArgs:1,maxArgs:1,fallbackToNoCallback:!0
                },
                setIcon: {
                  minArgs:1,maxArgs:1
                },
                setPopup: {
                  minArgs:1,maxArgs:1,fallbackToNoCallback:!0
                },
                setTitle: {
                  minArgs:1,maxArgs:1,fallbackToNoCallback:!0
                }
              },
              browsingData: {
                remove: {
                  minArgs:2,maxArgs:2
                },
                removeCache: {
                  minArgs:1,maxArgs:1
                },
                removeCookies: {
                  minArgs:1,maxArgs:1
                },
                removeDownloads: {
                  minArgs:1,maxArgs:1
                },
                removeFormData: {
                  minArgs:1,maxArgs:1
                },
                removeHistory: {
                  minArgs:1,maxArgs:1
                },
                removeLocalStorage: {
                  minArgs:1,maxArgs:1
                },
                removePasswords: {
                  minArgs:1,maxArgs:1
                },
                removePluginData: {
                  minArgs:1,maxArgs:1
                },
                settings: {
                  minArgs:0,maxArgs:0
                }
              },
              commands: {
                getAll: {
                  minArgs:0,maxArgs:0
                }
              },
              contextMenus: {
                remove: {
                  minArgs:1,maxArgs:1
                },
                removeAll: {
                  minArgs:0,maxArgs:0
                },
                update: {
                  minArgs:2,maxArgs:2
                }
              },
              cookies: {
                get: {
                  minArgs:1,maxArgs:1
                },
                getAll: {
                  minArgs:1,maxArgs:1
                },
                getAllCookieStores: {
                  minArgs:0,maxArgs:0
                },
                remove: {
                  minArgs:1,maxArgs:1
                },
                set: {
                  minArgs:1,maxArgs:1
                }
              },
              devtools: {
                inspectedWindow: {
                  eval: {
                    minArgs:1,maxArgs:2,singleCallbackArg:!1
                  }
                },
                panels: {
                  create: {
                    minArgs:3,maxArgs:3,singleCallbackArg:!0
                  },
                  elements: {
                    createSidebarPane: {
                      minArgs:1,maxArgs:1
                    }
                  }
                }
              },
              downloads: {
                cancel: {
                  minArgs:1,maxArgs:1
                },
                download: {
                  minArgs:1,maxArgs:1
                },
                erase: {
                  minArgs:1,maxArgs:1
                },
                getFileIcon: {
                  minArgs:1,maxArgs:2
                },
                open: {
                  minArgs:1,maxArgs:1,fallbackToNoCallback:!0
                },
                pause: {
                  minArgs:1,maxArgs:1
                },
                removeFile: {
                  minArgs:1,maxArgs:1
                },
                resume: {
                  minArgs:1,maxArgs:1
                },
                search: {
                  minArgs:1,maxArgs:1
                },
                show: {
                  minArgs:1,maxArgs:1,fallbackToNoCallback:!0
                }
              },
              extension: {
                isAllowedFileSchemeAccess: {
                  minArgs:0,maxArgs:0
                },
                isAllowedIncognitoAccess: {
                  minArgs:0,maxArgs:0
                }
              },
              history: {
                addUrl: {
                  minArgs:1,maxArgs:1
                },
                deleteAll: {
                  minArgs:0,maxArgs:0
                },
                deleteRange: {
                  minArgs:1,maxArgs:1
                },
                deleteUrl: {
                  minArgs:1,maxArgs:1
                },
                getVisits: {
                  minArgs:1,maxArgs:1
                },
                search: {
                  minArgs:1,maxArgs:1
                }
              },
              i18n: {
                detectLanguage: {
                  minArgs:1,maxArgs:1
                },
                getAcceptLanguages: {
                  minArgs:0,maxArgs:0
                }
              },
              identity: {
                launchWebAuthFlow: {
                  minArgs:1,maxArgs:1
                }
              },
              idle: {
                queryState: {
                  minArgs:1,maxArgs:1
                }
              },
              management: {
                get: {
                  minArgs:1,maxArgs:1
                },
                getAll: {
                  minArgs:0,maxArgs:0
                },
                getSelf: {
                  minArgs:0,maxArgs:0
                },
                setEnabled: {
                  minArgs:2,maxArgs:2
                },
                uninstallSelf: {
                  minArgs:0,maxArgs:1
                }
              },
              notifications: {
                clear: {
                  minArgs:1,maxArgs:1
                },
                create: {
                  minArgs:1,maxArgs:2
                },
                getAll: {
                  minArgs:0,maxArgs:0
                },
                getPermissionLevel: {
                  minArgs:0,maxArgs:0
                },
                update: {
                  minArgs:2,maxArgs:2
                }
              },
              pageAction: {
                getPopup: {
                  minArgs:1,maxArgs:1
                },
                getTitle: {
                  minArgs:1,maxArgs:1
                },
                hide: {
                  minArgs:1,maxArgs:1,fallbackToNoCallback:!0
                },
                setIcon: {
                  minArgs:1,maxArgs:1
                },
                setPopup: {
                  minArgs:1,maxArgs:1,fallbackToNoCallback:!0
                },
                setTitle: {
                  minArgs:1,maxArgs:1,fallbackToNoCallback:!0
                },
                show: {
                  minArgs:1,maxArgs:1,fallbackToNoCallback:!0
                }
              },
              permissions: {
                contains: {
                  minArgs:1,maxArgs:1
                },
                getAll: {
                  minArgs:0,maxArgs:0
                },
                remove: {
                  minArgs:1,maxArgs:1
                },
                request: {
                  minArgs:1,maxArgs:1
                }
              },
              runtime: {
                getBackgroundPage: {
                  minArgs:0,maxArgs:0
                },
                getPlatformInfo: {
                  minArgs:0,maxArgs:0
                },
                openOptionsPage: {
                  minArgs:0,maxArgs:0
                },
                requestUpdateCheck: {
                  minArgs:0,maxArgs:0
                },
                sendMessage: {
                  minArgs:1,maxArgs:3
                },
                sendNativeMessage: {
                  minArgs:2,maxArgs:2
                },
                setUninstallURL: {
                  minArgs:1,maxArgs:1
                }
              },
              sessions: {
                getDevices: {
                  minArgs:0,maxArgs:1
                },
                getRecentlyClosed: {
                  minArgs:0,maxArgs:1
                },
                restore: {
                  minArgs:0,maxArgs:1
                }
              },
              storage: {
                local: {
                  clear: {
                    minArgs:0,maxArgs:0
                  },
                  get: {
                    minArgs:0,maxArgs:1
                  },
                  getBytesInUse: {
                    minArgs:0,maxArgs:1
                  },
                  remove: {
                    minArgs:1,maxArgs:1
                  },
                  set: {
                    minArgs:1,maxArgs:1
                  }
                },
                managed: {
                  get: {
                    minArgs:0,maxArgs:1
                  },
                  getBytesInUse: {
                    minArgs:0,maxArgs:1
                  }
                },
                sync: {
                  clear: {
                    minArgs:0,maxArgs:0
                  },
                  get: {
                    minArgs:0,maxArgs:1
                  },
                  getBytesInUse: {
                    minArgs:0,maxArgs:1
                  },
                  remove: {
                    minArgs:1,maxArgs:1
                  },
                  set: {
                    minArgs:1,maxArgs:1
                  }
                }
              },
              tabs: {
                captureVisibleTab: {
                  minArgs:0,maxArgs:2
                },
                create: {
                  minArgs:1,maxArgs:1
                },
                detectLanguage: {
                  minArgs:0,maxArgs:1
                },
                discard: {
                  minArgs:0,maxArgs:1
                },
                duplicate: {
                  minArgs:1,maxArgs:1
                },
                executeScript: {
                  minArgs:1,maxArgs:2
                },
                get: {
                  minArgs:1,maxArgs:1
                },
                getCurrent: {
                  minArgs:0,maxArgs:0
                },
                getZoom: {
                  minArgs:0,maxArgs:1
                },
                getZoomSettings: {
                  minArgs:0,maxArgs:1
                },
                goBack: {
                  minArgs:0,maxArgs:1
                },
                goForward: {
                  minArgs:0,maxArgs:1
                },
                highlight: {
                  minArgs:1,maxArgs:1
                },
                insertCSS: {
                  minArgs:1,maxArgs:2
                },
                move: {
                  minArgs:2,maxArgs:2
                },
                query: {
                  minArgs:1,maxArgs:1
                },
                reload: {
                  minArgs:0,maxArgs:2
                },
                remove: {
                  minArgs:1,maxArgs:1
                },
                removeCSS: {
                  minArgs:1,maxArgs:2
                },
                sendMessage: {
                  minArgs:2,maxArgs:3
                },
                setZoom: {
                  minArgs:1,maxArgs:2
                },
                setZoomSettings: {
                  minArgs:1,maxArgs:2
                },
                update: {
                  minArgs:1,maxArgs:2
                }
              },
              topSites: {
                get: {
                  minArgs:0,maxArgs:0
                }
              },
              webNavigation: {
                getAllFrames: {
                  minArgs:1,maxArgs:1
                },
                getFrame: {
                  minArgs:1,maxArgs:1
                }
              },
              webRequest: {
                handlerBehaviorChanged: {
                  minArgs:0,maxArgs:0
                }
              },
              windows: {
                create: {
                  minArgs:0,maxArgs:1
                },
                get: {
                  minArgs:1,maxArgs:2
                },
                getAll: {
                  minArgs:0,maxArgs:1
                },
                getCurrent: {
                  minArgs:0,maxArgs:1
                },
                getLastFocused: {
                  minArgs:0,maxArgs:1
                },
                remove: {
                  minArgs:1,maxArgs:1
                },
                update: {
                  minArgs:2,maxArgs:2
                }
              }
            };
            if(0===Object.keys(r).length)throw new Error("api-metadata.json has not been included in browser-polyfill");
            class n extends WeakMap {
              constructor(e,t) {
                super(t),this.createItem=e
              }
              get(e) {
                return this.has(e)||this.set(e,this.createItem(e)),super.get(e)
              }
            }
            const i=(t,r)=>(...n)=> {
              e.runtime.lastError?t.reject(new Error(e.runtime.lastError.message)):r.singleCallbackArg||n.length<=1&&!1!==r.singleCallbackArg?t.resolve(n[0]):t.resolve(n)
            },
            o=e=>1==e?"argument":"arguments",s=(e,t,r)=>new Proxy(t, {
              apply:(t,n,i)=>r.call(n,e,...i)
            });
            let a=Function.call.bind(Object.prototype.hasOwnProperty);
            const u=(e,t= {
            },
            r= {}) => {
              let n = Object.create(null),
              c = {
                has:(t,r)=>r in e||r in n,get(c,l,d) {
                  if(l in n)return n[l];
                  if(!(l in e))return;
                  let f=e[l];
                  if("function"==typeof f)if("function"==typeof t[l])f=s(e,e[l],t[l]);
                  else if(a(r,l)) {
                    let t=((e,t)=>function(r,...n) {
                      if(n.length<t.minArgs)throw new Error(`Expected at least $ {
                        t.minArgs
                      }
                      $ {
                        o(t.minArgs)
                      }
                      for $ {
                        e
                      }
                      (), got $ {
                        n.length
                      }
                      `);
                      if(n.length>t.maxArgs)throw new Error(`Expected at most $ {
                        t.maxArgs
                      }
                      $ {
                        o(t.maxArgs)
                      }
                      for $ {
                        e
                      }
                      (), got $ {
                        n.length
                      }
                      `);
                      return new Promise(((o,s)=> {
                        if(t.fallbackToNoCallback)try {
                          r[e](...n,i( {
                            resolve:o,reject:s
                          },
                          t))
                        }
                        catch(i) {
                          console.warn(`$ {
                            e
                          }
                          API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,i),r[e](...n),t.fallbackToNoCallback=!1,t.noCallback=!0,o()
                        }
                        else t.noCallback?(r[e](...n),o()):r[e](...n,i( {
                          resolve:o,reject:s
                        },
                        t))
                      }))
                    })
                    (l,r[l]);
                    f=s(e,e[l],t)
                  }
                  else f=f.bind(e);
                  else if("object"==typeof f&&null!==f&&(a(t,l)||a(r,l)))f=u(f,t[l],r[l]);
                  else {
                    if(!a(r,"*"))return Object.defineProperty(n,l, {
                      configurable:!0,enumerable:!0,get:()=>e[l],set(t) {
                        e[l]=t
                      }
                    }),
                    f;
                    f=u(f,t[l],r["*"])
                  }
                  return n[l]=f,f
                },
                set:(t,r,i,o)=>(r in n?n[r]=i:e[r]=i,!0),defineProperty:(e,t,r)=>Reflect.defineProperty(n,t,r),deleteProperty:(e,t)=>Reflect.deleteProperty(n,t)
              },
              l=Object.create(e);
              return new Proxy(l,c)
            },
            c=e=>( {
              addListener(t,r,...n) {
                t.addListener(e.get(r),...n)
              },
              hasListener:(t,r)=>t.hasListener(e.get(r)),removeListener(t,r) {
                t.removeListener(e.get(r))
              }
            }),
            l=new n((e=>"function"!=typeof e?e:function(t) {
              const r=u(t, {
              },
              {
                getContent: {
                  minArgs:0,maxArgs:0
                }
              });
              e(r)
            })),
            d=new n((e=>"function"!=typeof e?e:function(t,r,n) {
              let i,o,s=!1,a=new Promise((e=> {
                i=function(t) {
                  s=!0,e(t)
                }
              }));
              try {
                o=e(t,r,i)
              }
              catch(e) {
                o=Promise.reject(e)
              }
              const u=!0!==o&&((c=o)&&"object"==typeof c&&"function"==typeof c.then);
              var c;
              if(!0!==o&&!u&&!s)return!1;
              return(u?o:a).then((e=> {
                n(e)
              }),
              (e=> {
                let t;
                t=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",n( {
                  __mozWebExtensionPolyfillReject__:!0,message:t
                })
              }))
              .catch((e=> {
                console.error("Failed to send onMessage rejected reply",e)
              })),
              !0
            })),
            f=( {
              reject:r,resolve:n
            },
            i)=> {
              e.runtime.lastError?e.runtime.lastError.message===t?n():r(new Error(e.runtime.lastError.message)):i&&i.__mozWebExtensionPolyfillReject__?r(new Error(i.message)):n(i)
            },
            g=(e,t,r,...n)=> {
              if(n.length<t.minArgs)throw new Error(`Expected at least $ {
                t.minArgs
              }
              $ {
                o(t.minArgs)
              }
              for $ {
                e
              }
              (), got $ {
                n.length
              }
              `);
              if(n.length>t.maxArgs)throw new Error(`Expected at most $ {
                t.maxArgs
              }
              $ {
                o(t.maxArgs)
              }
              for $ {
                e
              }
              (), got $ {
                n.length
              }
              `);
              return new Promise(((e,t)=> {
                const i=f.bind(null, {
                  resolve:e,reject:t
                });
                n.push(i),r.sendMessage(...n)
              }))
            },
            m= {
              devtools: {
                network: {
                  onRequestFinished:c(l)
                }
              },
              runtime: {
                onMessage:c(d),onMessageExternal:c(d),sendMessage:g.bind(null,"sendMessage", {
                  minArgs:1,maxArgs:3
                })
              },
              tabs: {
                sendMessage:g.bind(null,"sendMessage", {
                  minArgs:2,maxArgs:3
                })
              }
            },
            p= {
              clear: {
                minArgs:1,maxArgs:1
              },
              get: {
                minArgs:1,maxArgs:1
              },
              set: {
                minArgs:1,maxArgs:1
              }
            };
            return r.privacy= {
              network: {
                "*":p
              },
              services: {
                "*":p
              },
              websites: {
                "*":p
              }
            },
            u(e,m,r)
          };
          e.exports=r(chrome)
        }
        else e.exports=globalThis.browser
      },
      void 0===(n=r.apply(t,[e]))||(e.exports=n)
    }
  },
  t= {
  };
  function r(n) {
    var i=t[n];
    if(void 0!==i)return i.exports;
    var o=t[n]= {
      exports: {
      }
    };
    return e[n].call(o.exports,o,o.exports,r),o.exports
  }
  r.n=e=> {
    var t=e&&e.__esModule?()=>e.default:()=>e;
    return r.d(t, {
      a:t
    }),
    t
  },
  r.d=(e,t)=> {
    for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n, {
      enumerable:!0,get:t[n]
    })
  },
  r.g=function() {
    if("object"==typeof globalThis)return globalThis;
    try {
      return this||new Function("return this")()
    }
    catch(e) {
      if("object"==typeof window)return window
    }
  }
  (),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=> {
    "use strict";
    r(8487);
    const e= {
      local:"20221214080901_update_services"
    },
    t="0.3.0";
    var n=r(3145);
    const i= {
    };
    async function o( {
      area:t="local"
    }
    = {
    })
    {
      if(!i[t])return new Promise(((r,o)=> {
        let s;
        const a=async function() {
          await async function( {
            area:t="local"
          }
          = {
          })
          {
            if(i[t])return!0;
            {
              const {
                storageVersion:r
              }
              =await n.storage[t].get("storageVersion");
              if(r&&r===e[t])return i[t]=!0,!0
            }
            return!1
          }
          ( {
            area:t
          })
          ?(window.clearTimeout(u),r()):s?o(new Error(`Storage ($ {
            t
          })
          is not ready`)):window.setTimeout(a,30)
        },
        u=window.setTimeout((function() {
          s=!0
        }),
        6e4);
        a()
      }))
    }
    const s=async function(e=null, {
      area:t="local"
    }
    = {
    })
    {
      return await o( {
        area:t
      }),
      n.storage[t].get(e)
    };
    r(4573),r(6205),r(7391),r(9494),r(2241),r(4314);
    var a=r(3145);
    function u(e,t) {
      return a.i18n.getMessage(e,t)
    }
    function c(e, {
      timeout:t=6e4,throwError:r=!0,observerOptions:n=null,rootNode:i=null
    }
    = {
    })
    {
      return new Promise(((o,s)=> {
        const a=(i=i||document).querySelector(e);
        if(a)return void o(a);
        const u=new MutationObserver((function(t,r) {
          const n=i.querySelector(e);
          n&&(r.disconnect(),window.clearTimeout(l),o(n))
        })),
        c= {
          childList:!0,subtree:!0
        };
        n&&Object.assign(c,n),u.observe(i,c);
        const l=window.setTimeout((function() {
          u.disconnect(),r?s(new Error(`DOM node not found: $ {
            e
          }
          `)):o()
        }),
        t)
      }))
    }
    function l(e,t) {
      return Math.random()*(t-e)+e
    }
    function d(e) {
      return new Promise((t=>window.setTimeout(t,e)))
    }
    var f=r(3145);
    function g(e) {
      const t=.1*e;
      return d((r=e-t,n=e+t,Math.floor(Math.random()*(n-r+1))+r));
      var r,n
    }
    async function m( {
      start:e=!0,stop:t=!0,checkResponse:r=!0
    }
    = {
    })
    {
      e&&await f.runtime.sendMessage( {
        id:"startClientApp"
      });
      const n=await f.runtime.sendMessage( {
        id:"messageClientApp",message: {
          command:"ping"
        }
      });
      if(t&&await f.runtime.sendMessage( {
        id:"stopClientApp"
      }),
      r&&(!n.success||"pong"!==n.data))throw new Error(`Client app response: $ {
        n.data
      }
      `);
      return n
    }
    var p=r(3145);
    let A=!1,v=null;
    function h( {
      working:e=!0
    }
    = {
    })
    {
      A=e,v&&(e?v.classList.add("working"):v.classList.remove("working"))
    }
    function b() {
      return p.runtime.sendMessage( {
        id:"resetCaptcha",challengeUrl:window.location.href
      })
    }
    function y() {
      if(w()) {
        if(!document.querySelector(".solver-controls")) {
          const e=document.createElement("div");
          e.classList.add("solver-controls");
          const t=document.createElement("button");
          t.classList.add("rc-button"),t.setAttribute("tabindex","0"),t.setAttribute("title",u("buttonLabel_reset")),t.id="reset-button",t.addEventListener("click",b),e.appendChild(t),document.querySelector(".rc-footer").appendChild(e)
        }
        return
      }
      const e=document.querySelector("#recaptcha-help-button");
      if(e) {
        e.remove();
        const t=document.querySelector(".help-button-holder");
        t.tabIndex=document.querySelector("audio#audio-source")?0:2;
        const r=t.attachShadow( {
          mode:"closed",delegatesFocus:!0
        }),
        n=document.createElement("link");
        //n.setAttribute("rel","stylesheet"),n.setAttribute("href",p.runtime.getURL("solve/solver-button.css"))
        r.appendChild(n),v=document.createElement("button"),v.setAttribute("tabindex","0"),v.setAttribute("title",u("buttonLabel_solve")),v.id="solver-button",A&&v.classList.add("working"),v.addEventListener("click",T),r.appendChild(v)
      }
    }
    function w( {
      timeout:e=0
    }
    = {
    })
    {
      const t=".rc-doscaptcha-body";
      return e?new Promise((r=> {
        c(t, {
          timeout:e,throwError:!1
        })
        .then((e=>r(Boolean(e))))
      }))
      :Boolean(document.querySelector(t))
    }
    function x(e) {
      const t= {
        code:"Enter",key:"Enter",keyCode:13,which:13,view:window,bubbles:!0,composed:!0,cancelable:!0
      };
      e.focus(),e.dispatchEvent(new KeyboardEvent("keydown",t)),e.dispatchEvent(new KeyboardEvent("keypress",t)),e.click()
    }
    async function M(e, {
      forward:t=!0
    }
    = {
    })
    {
      if(document.activeElement!==e) {
        for(t||(await _( {
          command:"pressKey",data:"shift"
        }),
        await g(300));
        document.activeElement!==e;
        )await _( {
          command:"tapKey",data:"tab"
        }),
        await g(300);
        t||(await _( {
          command:"releaseKey",data:"shift"
        }),
        await g(300))
      }
    }
    async function S(e, {
      navigateForward:t=!0
    }
    = {
    })
    {
      await M(e, {
        forward:t
      }),
      await g(200),await _( {
        command:"tapKey",data:"enter"
      })
    }
    async function E(e,t,r) {
      const n=await async function(e,t,r) {
        let {
          x:n,y:i,width:o,height:s
        }
        =await async function(e,t,r) {
          let {
            left:n,top:i,width:o,height:s
          }
          =e.getBoundingClientRect();
          const a=await O(),u=window.devicePixelRatio;
          n*=u,i*=u,o*=u,s*=u,n+=a.x+t.left+window.screenX*u,i+=a.y+t.top+window.screenY*u;
          const {
            os:c
          }
          =await p.runtime.sendMessage( {
            id:"getPlatform"
          });
          return["windows","macos"].includes(c)&&(n/=r,i/=r,o/=r,s/=r), {
            x:n,y:i,width:o,height:s
          }
        }
        (e,t,r);
        return {
          x:Math.round(n+o*l(.4,.6)),y:Math.round(i+s*l(.4,.6))
        }
      }
      (e,t,r);
      await _( {
        command:"moveMouse",...n
      }),
      await g(100),await _( {
        command:"clickMouse"
      })
    }
    async function _(e) {
      const t=await p.runtime.sendMessage( {
        id:"messageClientApp",message:e
      });
      if(!t.success)throw new Error(`Client app response: $ {
        t.text
      }
      `);
      return t
    }
    async function O() {
      if(window!==window.top) {
        let e;
        const t=window.parent.frames;
        for(let r=0;
        r<t.length;
        r++)if(t[r]===window) {
          e=r;
          break
        }
        return await p.runtime.sendMessage( {
          id:"getFramePos",frameIndex:e
        })
      }
      return {
        x:0,y:0
      }
    }
    async function P(e,t) {
      if(w())return;
      const {
        navigateWithKeyboard:r
      }
      =await s("navigateWithKeyboard");
      let n,i,o=!0;
      e&&(r||!t.clientX&&!t.clientY?o=!1:(i=await async function() {
        return p.runtime.sendMessage( {
          id:"getOsScale"
        })
      }
      (),n=await async function(e,t) {
        const r=await O(),n=window.devicePixelRatio;
        let i=t;
        return {
          left:e.screenX*i-e.clientX*n-r.x-window.screenX*n,top:e.screenY*i-e.clientY*n-r.y-window.screenY*n
        }
      }
      (t,i)));
      const a="audio#audio-source";
      let u=document.querySelector(a);
      if(!u) {
        const t=document.querySelector("#recaptcha-audio-button");
        e?o?await E(t,n,i):(t.focus(),await S(t)):x(t);
        const r=await Promise.race([new Promise((e=> {
          c(a, {
            timeout:1e4,throwError:!1
          })
          .then((t=> {
            g(500).then((()=>e( {
              audioEl:t
            })))
          }))
        })),
        new Promise((e=> {
          w( {
            timeout:1e4
          })
          .then((t=>e( {
            blocked:t
          })))
        }))
        ]);
        if(r.blocked)return;
        u=r.audioEl
      }
      if(e) {
        const e=function() {
          u.muted=!0
        },
        t=function() {
          r(),u.muted=!1
        };
        u.addEventListener("playing",e, {
          capture:!0,once:!0
        }),
        u.addEventListener("ended",t, {
          capture:!0,once:!0
        });
        const r=function() {
          window.clearTimeout(s),u.removeEventListener("playing",e, {
            capture:!0,once:!0
          }),
          u.removeEventListener("ended",t, {
            capture:!0,once:!0
          })
        },
        s=window.setTimeout(t,1e4),a=document.querySelector(".rc-audiochallenge-play-button > button");
        o?await E(a,n,i):await S(a)
      }
      const l=u.src,d=document.documentElement.lang,f=await p.runtime.sendMessage( {
        id:"transcribeAudio",audioUrl:l,lang:d
      });
      if(!f)return;
      const m=document.querySelector("#audio-response");
      e?(o?await E(m,n,i):await M(m),await g(200),await _( {
        command:"typeText",data:f
      }))
      :m.value=f;
      const A=document.querySelector("#recaptcha-verify-button");
      e?o?await E(A,n,i):await S(A):x(A),p.runtime.sendMessage( {
        id:"captchaSolved"
      })
    }
    function T(e) {
      e.preventDefault(),e.stopImmediatePropagation(),e.isTrusted&&!A&&(h( {
        working:!0
      }),
      async function(e) {
        const {
          simulateUserInput:r,autoUpdateClientApp:n
        }
        =await s(["simulateUserInput","autoUpdateClientApp"]);
        if(r)try {
          let e;
          try {
            e=await m( {
              stop:!1,checkResponse:!1
            })
          }
          catch(e) {
            throw p.runtime.sendMessage( {
              id:"notification",messageId:"error_missingClientApp"
            }),
            p.runtime.sendMessage( {
              id:"openOptions"
            }),
            e
          }
          if(!e.success&&!e.apiVersion!==t) {
            if(!n||"1"===e.apiVersion)throw p.runtime.sendMessage( {
              id:"notification",messageId:"error_outdatedClientApp"
            }),
            p.runtime.sendMessage( {
              id:"openOptions"
            }),
            new Error("Client app outdated");
            try {
              p.runtime.sendMessage( {
                id:"notification",messageId:"info_updatingClientApp"
              });
              const e=await p.runtime.sendMessage( {
                id:"messageClientApp",message: {
                  command:"installClient",data:t
                }
              });
              if(!e.success)throw new Error(`Client app update failed: $ {
                e.data
              }
              `);
              await p.runtime.sendMessage( {
                id:"stopClientApp"
              }),
              await d(1e4),await m( {
                stop:!1
              }),
              await p.runtime.sendMessage( {
                id:"messageClientApp",message: {
                  command:"installCleanup"
                }
              })
            }
            catch(e) {
              throw p.runtime.sendMessage( {
                id:"notification",messageId:"error_clientAppUpdateFailed"
              }),
              p.runtime.sendMessage( {
                id:"openOptions"
              }),
              e
            }
          }
        }
        catch(e) {
          return console.log(e.toString()),void await p.runtime.sendMessage( {
            id:"stopClientApp"
          })
        }
        try {
          await P(r,e)
        }
        finally {
          r&&await p.runtime.sendMessage( {
            id:"stopClientApp"
          })
        }
      }
      (e).catch((e=> {
        throw p.runtime.sendMessage( {
          id:"notification",messageId:"error_internalError"
        }),
        console.log(e.toString()),e
      }))
      .finally((()=> {
        h( {
          working:!1
        })
      })))
    }
    new MutationObserver(y).observe(document, {
      childList:!0,subtree:!0
    }),
    y()
  })
  ()
})
();