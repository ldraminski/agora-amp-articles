//<![CDATA[

    var gazeta_pl;
    window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
        var t, r = (this.document || this.ownerDocument).querySelectorAll(e), o = this;
        do {
            for (t = r.length; 0 <= --t && r.item(t) !== o; )
                ;
        } while (t < 0 && (o = o.parentElement));return o
    }
    ),
    (gazeta_pl = gazeta_pl || {}).cgImportFrameStore = gazeta_pl.cgImportFrameStore || {
        loaded: !1,
        assets: "//static.im-g.pl/static/content/front/content-generator/master/",
        cgApiDomain: "",
        cgApiTemplate: "//{{domain}}/{{frame}}/{{placement}}/{{guid}}/?d={{service_domain}}",
        cgImportFrameDomain: "//exyzz.pl/",
        cgImportFileName: "import_frame",
        cgImportFrameTmpl: "?version={{version}}&frameId={{frame}}&placementId={{placement}}",
        importFrameVersion: [],
        catchClickVersion: [],
        cgFrameSuccess: 0,
        cgLoadedFrames: function() {
            var e, t, r, o = document.body.querySelectorAll('script[src*="exyzz.pl"]:not(.loaded), script[src*="importFrame-min"]:not(.loaded)'), i = o.length, n = [];
            for (r = 0; r < i; r++)
                e = o[r].src.split("frameId=")[1].split("&")[0],
                t = o[r].src.split("placementId=")[1].split('"')[0],
                -1 !== e && -1 !== t && n.push({
                    frameId: e,
                    placementId: t
                });
            return n
        }(),
        cgFrameErrors: 0,
        isAdb: void 0,
        isLanding: -1 !== document.body.className.indexOf("landing"),
        isMobile: ("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch) && -1 !== navigator.userAgent.toLowerCase().indexOf("mobile"),
        lazyload: !1,
        externalCSS: -1 !== window.location.href.indexOf("cgloadcss") || -1 !== document.referrer.indexOf("cgloadcss"),
        externalTemplateName: "template1",
        testApi: -1 !== window.location.href.indexOf("cgtestapi") || -1 !== document.referrer.indexOf("cgtestapi"),
        devmode: -1 !== window.location.href.indexOf("cgdevmode") || -1 !== document.referrer.indexOf("cgdevmode"),
        oneDomain: -1 !== window.location.href.indexOf("cgonedomain") || -1 !== document.referrer.indexOf("cgonedomain"),
        loadscript: -1 !== window.location.href.indexOf("cgloadscript"),
        testVariant: void 0,
        prefix: "",
        suffix: "",
        doNotAddToUTM_partners: ["ceneo", "ceneoagd", "ceneodziecko", "ceneouroda", "ceneoelektro", "ceneoelektro2", "ceneo_klimatyzatory", "ceneoelektro", "ceneomoda", "ceneokomunia", "ceneoapi", "ceneosport", "ceneokomputery", "ceneo_foteliki"],
        referrer: void 0,
        clicktype: 1,
        showAlert: !0,
        browser: function() {
            var e = navigator.userAgent;
            return {
                android: -1 !== e.indexOf("Mozilla") && -1 !== e.indexOf("Android ") && -1 !== e.indexOf("AppleWebKit") && -1 === e.indexOf("Chrome"),
                chrome: -1 !== e.indexOf("Mozilla") && -1 !== e.indexOf("AppleWebKit") && -1 !== e.indexOf("Chrome"),
                safari: (-1 !== e.indexOf("iPhone") || -1 !== e.indexOf("iPad ") || -1 !== e.indexOf("Macintosh")) && -1 !== e.indexOf("Safari/"),
                webview: -1 !== e.indexOf("FBID/tablet"),
                ie11: -1 !== e.indexOf("Trident/7.0")
            }
        }(),
        pageData: function() {
            var e = location.href.split("/")
              , t = []
              , r = {};
            try {
                r = {
                    articleId: (t = e[4].split(","))[2],
                    pageId: t[1],
                    pageRoot: e[3],
                    pageType: t[0],
                    text: t[3]
                }
            } catch (e) {}
            return r
        }(),
        addVariable: {
            reserved: "cp-flid-id-5",
            house: "cp-flid-id-5",
            cropp: "cp-flid-id-5",
            mohito: "cp-flid-id-5",
            sinsay: "cp-flid-id-5"
        },
        selector: "div.pin, li, div.__button, .bdtrck-list-item",
        notSupportIE11: ["nissancrosscarline_33901922", "nissanaftersales_33901732", "nissanqq_33911971"],
        addUtmTmplName: ["showroom_atex"],
        templatesMap: {
            template1: "native_galleries",
            template2: "native_galleries",
            template_link: "native2click",
            template_bar: "native2click",
            moodboard: "moodboard",
            likeabloger: "likeabloger",
            photo2click: "photo2click"
        },
        frameEdit: -1 !== window.location.href.indexOf("cgframeedit") || -1 !== document.referrer.indexOf("cgframeedit"),
        viewability: [{
            travelist: "https://ad.doubleclick.net/ddm/trackimp/N331001.148648GAZETA.PL/B10656687.254151439;dc_trk_aid=450156347;dc_trk_cid=120576078;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?"
        }, {
            travelist_no_lead: "https://ad.doubleclick.net/ddm/trackimp/N331001.148648GAZETA.PL/B10656687.254151439;dc_trk_aid=450156347;dc_trk_cid=120576078;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?"
        }]
    },
    gazeta_pl.extend = function(e) {
        var t, r, o = arguments.length;
        for (e = e || {},
        t = 1; t < o; t++)
            if (arguments[t])
                for (r in arguments[t])
                    arguments[t].hasOwnProperty(r) && (e[r] = arguments[t][r]);
        return e
    }
    ,
    gazeta_pl.cgImportFrameStore.importFrameVersion.push(2.15),
    gazeta_pl.cgCookies = {
        create: function(e, t, r) {
            var o, i = "";
            r && ((o = new Date).setTime(o.getTime() + 24 * r * 60 * 60 * 1e3),
            i = "; expires=" + o.toUTCString()),
            document.cookie = e + "=" + t + i + "; path=/"
        },
        readCgCookie: function(e) {
            var t = document.cookie.match(new RegExp(e + "=([^;]+)"));
            return t ? t[1] : void 0
        },
        read: function(e) {
            var t, r, o = e + "=", i = document.cookie.split(";"), n = i.length;
            for (t = 0; t < n; t++) {
                for (r = i[t]; " " === r.charAt(0); )
                    r = r.substring(1, r.length);
                if (0 === r.indexOf(o))
                    return r.substring(o.length, r.length)
            }
            return null
        },
        erase: function(e) {
            this.create(e, "", -1)
        }
    },
    gazeta_pl.dispatchEvent = {
        trigger: function(e, t, r) {
            var o = {};
            o = r.frameId && r.placementId ? {
                frame: r.frameId,
                placement: r.placementId,
                template: r.template,
                version: r.version
            } : r;
            var i = new CustomEvent(t,{
                detail: o,
                bubbles: !0,
                cancelable: !1
            });
            document.createEventObject ? e.fireEvent("on" + t, i) : e.dispatchEvent(i)
        }
    },
    gazeta_pl.cgImportFrameRuntime || (gazeta_pl.cgImportFrameRuntime = {
        processed: [],
        isFirstPage: !0
    }),
    gazeta_pl.cgImportFrame = {
        version: "IF_" + gazeta_pl.cgImportFrameStore.importFrameVersion[0],
        API_DOMAIN: "",
        API_URL: gazeta_pl.cgImportFrameStore.cgApiTemplate || "//{{domain}}/content-generator/published/frame/generate?frameId={{frame}}&placementId={{placement}}&guid={{guid}}&d={{service_domain}}",
        error_template: '<div class="cg_error"></div>',
        bigDataCookieName: "bwGuidv2",
        params: {},
        request: {},
        options: {},
        pageData: function() {
            // var e = window.location.href.split("/")
            //   , t = e[4].split(",");
            try {
                return {
                    pageRoot: e[3],
                    pageId: t[1],
                    pageType: t[0],
                    articleId: t[2]
                }
            } catch (e) {
                return {
                    pageRoot: "",
                    pageId: "",
                    pageType: "",
                    articleId: ""
                }
            }
        }(),
        init: function() {
            if (this.API_DOMAIN = gazeta_pl.cgApi.castLots(),
            void 0 === gazeta_pl.cgImportFrameStore.isAdb && (gazeta_pl.cgImportFrameStore.isAdb = !1,
            gazeta_pl.detectAdb.init()),
            gazeta_pl.cgImportFrame.make(),
            gazeta_pl.unitTestRunning)
                return !0
        },
        make: function() {
            this.setReferrer();
            var e, t, r = this.Script.getScriptParams();
            if (!r)
                return !1;
            if (r.guid = gazeta_pl.cgCookies.readCgCookie(this.bigDataCookieName),
            e = "-1" === r.placementId && "-1" === r.frameId,
            t = "-2" === r.placementId,
            !gazeta_pl.cgImportFrameStore.loaded) {
                gazeta_pl.cgImportFrameStore.loaded = !0,
                this.log();
                new gazeta_pl.cgImportFrame.Events.listeners;
                if (gazeta_pl.unitTestRunning)
                    return gazeta_pl.cgImportFrameStore.loaded
            }
            t ? (gazeta_pl.cgImportFrameStore.devmode && console.log("%c--ALIAS-- /aliasy/ecomm/module-" + r.frameId + ".htm", "color:darkgreen;background-color:#fff;font-weight:700;"),
            gazeta_pl.cgApi.makeRequest("/aliasy/ecomm/module-" + r.frameId + ".htm", r)) : e || gazeta_pl.cgApi.makeRequest(gazeta_pl.cgApi.prepareApiRequestUrl(r), r)
        },
        setReferrer: function() {
            void 0 === gazeta_pl.cgImportFrameStore.referrer && (gazeta_pl.cgImportFrameStore.referrer = document.referrer.toLowerCase()),
            document.referrer || gazeta_pl.unitTestRunning || Object.defineProperty(document, "referrer", {
                get: function() {
                    return window.location.href
                }
            })
        },
        log: function() {
            gazeta_pl.cgImportFrameStore.testApi && console.log("%c--CG TEST API enabled--", "color:yellow;background-color:purple;font-weight:700;"),
            gazeta_pl.cgImportFrameStore.devmode && (console.log("%c--" + gazeta_pl.cgImportFrame.version + "--", "color:blue;background-color:#fff;font-weight:700;"),
            console.log("%c--CG dev mode--", "color:#fff;background-color:green;font-weight:700;")),
            gazeta_pl.cgImportFrameStore.loadscript && console.log("%c--CG CatchClicks script test mode--", "color:#fff;background-color:red;font-weight:700;")
        }
    },
    gazeta_pl.cgImportFrame.Events = {
        busy: !1,
        listeners: function() {
            document.addEventListener("newArticleIsAdded", function() {
                this.Script.insertScriptsInNewArt()
            }
            .bind(gazeta_pl.cgImportFrame), !0),
            document.addEventListener("pageUrlChanged", function(e) {
                if (!this.Events.busy) {
                    var t;
                    for (t in this.Events.busy = !0,
                    gazeta_pl.cgImportFrameRuntime.isFirstPage = !1,
                    window.gazeta_pl.cgFramesGtmCache)
                        window.dataLayer.push(window.gazeta_pl.cgFramesGtmCache[t]);
                    setTimeout(function() {
                        window.gazeta_pl.cgFramesGtmCache = [],
                        this.Events.busy = !1,
                        gazeta_pl.cgImportFrameStore.lazyload && setTimeout(function() {
                            this.Helpers.lazyLoadImages()
                        }, 1e3)
                    }
                    .bind(this), 10)
                }
            }
            .bind(gazeta_pl.cgImportFrame), !1),
            document.addEventListener("cg_show_frame_success", function(e) {
                var t;
                if ("template_bar" === e.detail.template && this.Template_bar.init(e.detail),
                this.Analytics.sendPixelToFB(e.detail),
                gazeta_pl.cgImportFrameStore.isMobile && "frame-importer" !== e.detail.version && (t = document.querySelector('div[data-frameid="' + e.detail.frame + '"]')) && t.classList.add("bigimg"),
                gazeta_pl.cgImportFrameStore.loadscript && gazeta_pl.cgImportFrameStore.isMobile) {
                    document.querySelector('div[data-frameid="' + e.detail.frame + '"]');
                    console.warn("isAvanti.02", -1 !== location.href.indexOf("avanti24.pl"))
                }
            }
            .bind(gazeta_pl.cgImportFrame), !1)
        }
        .bind(this)
    },
    (gazeta_pl = gazeta_pl || {}).cgImportFrame.Script = {
        getCurrentScriptPath: function() {
            try {
                throw new Error
            } catch (e) {
                var t;
                return (t = (t = e.stack.split("\n")[1].split("/"))[t.length - 1].split(":"))[0] || ""
            }
        },
        getScriptParams: function(e) {
            gazeta_pl.unitTestRunning && (e = gazeta_pl.unitTestRunning.script);
            var t = e ? "div" : "script"
              , n = e || document.querySelector(t + "[src*='" + this.Script.getCurrentScriptPath() + "']:not(.loaded)")
              , r = function() {
                if (!n || "object" != typeof n)
                    return !1;
                var e, t, r = n.getAttribute("src").split("?")[1].split("&"), o = r.length, i = [];
                for (e = 0; e < o; e++)
                    i[(t = r[e].split("="))[0]] = t[1];
                return i
            }();
            return r ? (n.className = "loaded",
            {
                script: n,
                placementId: r.placementId,
                frameId: r.frameId,
                version: r.version
            }) : {}
        }
        .bind(gazeta_pl.cgImportFrame),
        replaceCurrentScriptByFrame: function(t, r, o, e) {
            var i = document.createElement("div")
              , n = t.script;
            if (!n)
                return !1;
            t.template = gazeta_pl.cgImportFrame.Script.getTemplateName(r),
            r && (this.Script.loadAssets(t.template),
            r = "\x3c!-- frame: " + t.frameId + "; placement: " + t.placementId + " --\x3e" + r,
            gazeta_pl.cgImportFrameStore.lazyload && !gazeta_pl.cgImportFrameRuntime.isFirstPage && (r = this.Helpers.enableLazyLoad(r))),
            "SCRIPT" === n.tagName ? window.requestAnimationFrame(function() {
                if (i.innerHTML = r || gazeta_pl.cgImportFrame.error_template,
                gazeta_pl.cgImportFrameStore.devmode && "avanti24.pl" === location.host) {
                    var e = i.querySelector('div[data-frameid="' + t.frameId + '"]');
                    !e || "template1" !== e.dataset.tmpl && "template2" !== e.dataset.tmpl || e.classList.add(gazeta_pl.cgImportFrameStore.prefix + "f-restyled")
                }
                gazeta_pl.cgImportFrameStore.isMobile && !gazeta_pl.cgImportFrameStore.isLanding && this.Helpers.removeSurplusProducts(i, 6),
                gazeta_pl.cgImportFrameStore.isMobile && "frame-importer" === t.version ? this.Helpers.removeSurplusProducts(i, 2) : gazeta_pl.cgImportFrameStore.isMobile || "frame-importer" !== t.version || this.Helpers.removeSurplusProducts(i, 3),
                n && n.parentNode && n.parentNode.replaceChild(i, n),
                o ? (gazeta_pl.dispatchEvent.trigger(document, "cg_show_frame_error", t),
                gazeta_pl.cgImportFrameStore.cgFrameErrors++) : (gazeta_pl.dispatchEvent.trigger(document, "cg_show_frame_success", t),
                gazeta_pl.cgImportFrameStore.cgFrameSuccess++,
                this.AdBlock.preventAdblock(i.parentNode),
                this.Analytics.gAnalytics(t))
            }
            .bind(this)) : t.replaceBy && n && window.requestAnimationFrame(function() {
                n.parentNode.replaceChild(t.replaceBy, n)
            })
        }
        .bind(gazeta_pl.cgImportFrame),
        insertScriptsInNewArt: function() {
            var e, t, r, o = gazeta_pl.cgImportFrameStore;
            for (t in o && o.cgImportFileName && (e = document.querySelectorAll('div[src*="' + gazeta_pl.cgImportFrameStore.cgImportFileName + '"]')),
            e || (e = document.querySelectorAll('div[src*="importFrame"]')),
            e)
                if ("object" == typeof e[t]) {
                    var i = document.createElement("script");
                    r = this.Script.getScriptParams(e[t]),
                    i.type = "text/javascript",
                    i.src = this.Script.makeScriptUrl(e[t].getAttribute("src")),
                    i.async = !0,
                    r.replaceBy = i,
                    this.Script.replaceCurrentScriptByFrame(r)
                }
        }
        .bind(gazeta_pl.cgImportFrame),
        makeScriptUrl: function(e) {
            return e.replace("//static.im-g.pl/static/content/front/content-generator/master/front/dist/", gazeta_pl.cgImportFrameStore.cgImportFrameDomain).replace("importFrame-min.js", gazeta_pl.cgImportFrameStore.cgImportFileName)
        },
        loadAssets: function(e) {
            if (!e)
                return !1;
            var t = gazeta_pl.cgImportFrameStore.assets
              , r = !!document.querySelector("#" + e)
              , o = !!document.querySelector("#cc")
              , i = !!document.querySelector("#" + e + "-js")
              , n = {
                template_bom: "gazeta_pl.bom-min.js"
            };
            if (gazeta_pl.cgImportFrameStore.devmode && (t = t.replace("/master/", "/dev/")),
            !r) {
                var a = document.createElement("link");
                a.rel = "stylesheet",
                a.type = "text/css",
                a.href = t + "src/templates/" + e + "/style.css",
                a.id = e,
                document.head.appendChild(a)
            }
            if (!o) {
                var s = document.createElement("script");
                s.src = t + "front/dist/cc-min.js",
                s.async = "async",
                s.id = "cc",
                document.head.appendChild(s)
            }
            if (n[e] && !i) {
                var c = document.createElement("script");
                c.src = t + "front/dist/" + n[e],
                c.async = "async",
                c.id = e + "-js",
                document.head.appendChild(c)
            }
        },
        getTemplateName: function(e) {
            if (!e)
                return "";
            var t = e.split('data-tmpl="');
            return t[1] ? t[1].split('"')[0] : "template1"
        },
        loadExternalScript: function(e, t) {
            var r = document.createElement("script");
            if (r.src = e,
            t && (r.id = t,
            document.querySelector("#" + t)))
                return !1;
            document.body.appendChild(r)
        }
    },
    gazeta_pl.cgImportFrame.Analytics = {
        gAnalytics: function(e) {
            if (window.cgIsRunning || !e || -1 !== gazeta_pl.cgImportFrameRuntime.processed.indexOf(e.frameId))
                return !1;
            gazeta_pl.cgImportFrameRuntime.processed.push(e.frameId);
            var t = {
                category: "Ramka",
                action: e.frameId,
                label: "Wyswietlenie",
                value: 0,
                nonInteraction: !0,
                event: "zdarzenie"
            };
            return gazeta_pl.cgImportFrameStore.testVariant && (t.variant = gazeta_pl.cgImportFrameStore.testVariant),
            "AndroidAnalytics"in window && AndroidAnalytics.dispatchEvent && AndroidAnalytics.dispatchEvent("Ramka", e.frameId, "Wyswietlenie", 0, !0),
            "dataLayer"in window && (document.querySelector(".loaded_article") ? (window.gazeta_pl.cgFramesGtmCache || (window.gazeta_pl.cgFramesGtmCache = []),
            window.gazeta_pl.cgFramesGtmCache.push(t)) : window.dataLayer.push(t)),
            gazeta_pl.unitTestRunning ? {
                dl: t,
                android: ["Ramka", e.frameId, "Wyswietlenie", 0, !0]
            } : void 0
        },
        sendPixelToFB: function(t) {
            setTimeout(function() {
                var o = document.querySelectorAll('div[data-frameid="' + t.frame + '"] li[class*="-product"]')
                  , e = function() {
                    var e, t = o.length, r = [];
                    for (e = 0; e < t; e++)
                        r.push(o[e].dataset.id);
                    return r
                }();
                "fbq"in window && e.length && fbq("track", "ViewContent", {
                    content_ids: e,
                    content_type: "product"
                })
            }, 50)
        },
        addToURL: function(e) {
            var t, r, o, i = e ? e.store : gazeta_pl.cgImportFrameStore, n = this.Analytics.getArticleData(e), a = e ? e.links : document.querySelectorAll('div[class*="-ad"] > ul > li[class*="-product"] a:not(.utm-added), .bdtrck-list-items a:not(.utm-added)'), s = a.length;
            if (a.length)
                for (r = 0; r < s; r++)
                    o = n,
                    t = e ? e.partner : a[r].closest("li, .bdtrck-list-items").dataset.partner,
                    t = this.Helpers.getPartnerName(t),
                    a[r] = this.Helpers.modifyProductLink(i, t, a[r], n),
                    -1 !== i.addUtmTmplName.indexOf(t) && (o = this.Helpers.getTemplateName(e ? e.tmpl : a[r].closest('[class*="-products"]').parentNode.dataset.tmpl),
                    -1 !== a[r].href.indexOf("utm_campaign=gazeta.pl") && (a[r].href = a[r].href.replace("utm_campaign=gazeta.pl", "utm_campaign=" + location.host)),
                    a[r] = this.Helpers.modifyProductLink(i, t, a[r], o));
            if (e)
                return a
        }
        .bind(gazeta_pl.cgImportFrame),
        getArticleData: function(e) {
            var t = e ? e.loadedArticle : document.querySelectorAll(".loaded_article")
              , r = t.length;
            return r ? t[r - 1].id.split("_")[1] : this.pageData.articleId
        }
        .bind(gazeta_pl.cgImportFrame)
    },
    gazeta_pl.cgImportFrame.Helpers = {
        enableLazyLoad: function(e) {
            return e.replace(/src/g, "data-src")
        },
        lazyLoadImages: function() {
            var e, t = document.querySelectorAll('ul[class*="-products"] img[data-src]'), r = t.length;
            for (e = 0; e < r; e++)
                t[e].setAttribute("src", t[e].getAttribute("data-src")),
                t[e].onload = void t[e].removeAttribute("data-src")
        },
        removeSurplusProducts: function(e, t) {
            var r, o = e.querySelectorAll("li"), i = o.length;
            for (r = 0; r < i; r++)
                t <= r && o[r].parentNode.removeChild(o[r])
        },
        getTemplateName: function(e) {
            var t, r = gazeta_pl.cgImportFrameStore.templatesMap;
            for (t in r)
                if (t === e)
                    return r[t];
            return ""
        },
        getPartnerName: function(e) {
            return e && -1 !== e.indexOf("_") && (e = e.split("_"),
            e = isNaN(Number(e[1])) ? e[0] + "_" + e[1] : e[0]),
            e
        },
        getUtmType: function(e) {
            return -1 === e.indexOf("utm_content") ? "utm_content" : -1 === e.indexOf("utm_term") ? "utm_term" : ""
        },
        modifyProductLink: function(e, t, r, o) {
            var i, n = !1;
            return -1 !== r.href.indexOf("?") && (n = !0),
            -1 === e.doNotAddToUTM_partners.indexOf(t) && (i = this.getUtmType(r.href)),
            i && (r.href += (n ? "&" : "?") + i + "=" + o,
            -1 === r.className.indexOf("utm-added") && (r.className += " utm-added")),
            r
        },
        viewabilitySupport: function(e, t) {
            var r, o;
            for (o in gazeta_pl.cgImportFrameStore.viewability)
                if (r = Object.keys(gazeta_pl.cgImportFrameStore.viewability[o]),
                -1 !== e.indexOf(r[0])) {
                    gazeta_pl.cgImportFrame.Viewability.addFrameToCheckViewability(t.frameId, r[0]);
                    break
                }
        },
        getObjectBy: function(e, t, r) {
            if (!e || !t || !r)
                return -1;
            var o, i, n = -1;
            for (i in e)
                if (e[o = Number(i)] && e[o][t] && e[o][t] === r) {
                    n = o;
                    break
                }
            return n
        }
    },
    gazeta_pl.cgImportFrame.AdBlock = {
        preventAdblock: function(e) {
            if (!e)
                return !1;
            gazeta_pl.cgImportFrameStore.suffix || (gazeta_pl.cgImportFrameStore.suffix = Date.now()),
            setTimeout(function() {
                if (-1 !== e.className.indexOf("art_embed")) {
                    for (; e.attributes.length; )
                        e.removeAttribute(e.attributes[0].name);
                    e.className = "a" + gazeta_pl.cgImportFrameStore.suffix
                }
            }, 150)
        }
    },
    (gazeta_pl = gazeta_pl || {}).cgApi = {
        API_TEST_DOMAIN: "YXBpLWNvbnRlbnQtZ2VuZXJhdG9yLXRlc3QuZ2F6ZXRhLnBs",
        API_DOMAIN: "",
        domains: ["YzJjMjQucGw=", "bW9kYWZhc2hpb24uY29tLnBs", "eHl6ei5wbA==", "eHl6em9ubGluZS5wbA==", "ZXh5enoucGw=", "YWJjdHJ6eXdlYi5wbA==", "ZGFrdHlsZW9ubGluZS5wbA==", "ZS1tb2RhMjQucGw=", "bW9kbml3eWdvZG5pLnBs", "a29yYWxlMjQucGw=", "a3VwdWplbXljaXVjaHkucGw="],
        randomize: function() {
            return gazeta_pl.cgImportFrameStore.testApi ? this.unbase64(this.API_TEST_DOMAIN) : this.unbase64(this.domains[Math.floor(Math.random() * this.domains.length)])
        },
        domains2Base64: function() {
            var e, t = [];
            for (e in this.domains)
                t.push(btoa(this.domains[e]));
            console.log('domains: [\n\t"' + t.join('",\n\t"') + '"\n],')
        },
        unbase64: function(e) {
            return atob(e)
        },
        castLots: function() {
            return gazeta_pl.cgApi && !gazeta_pl.cgImportFrameStore.cgApiDomain.length ? (gazeta_pl.cgImportFrameStore.oneDomain ? this.API_DOMAIN = gazeta_pl.cgApi.unbase64(gazeta_pl.cgApi.domains[0]) : this.API_DOMAIN = gazeta_pl.cgApi.randomize(),
            gazeta_pl.cgImportFrameStore.cgApiDomain = this.API_DOMAIN) : this.API_DOMAIN = gazeta_pl.cgImportFrameStore.cgApiDomain,
            this.API_DOMAIN
        },
        prepareApiRequestUrl: function(e) {
            return gazeta_pl.cgImportFrame.API_URL.replace("{{domain}}", gazeta_pl.cgImportFrame.API_DOMAIN).replace(/{{frame}}/g, e.frameId).replace(/{{placement}}/g, e.placementId).replace(/{{guid}}/g, e.guid || "").replace(/{{service_domain}}/g, location.host)
        },
        makeRequest: function(e, i) {
            var n = new XMLHttpRequest;
            n.open("GET", e, !0),
            n.onload = function() {
                var e, t, r = "", o = !1;
                if (200 <= n.status && n.status < 400) {
                    if (-1 !== (e = n.responseText).indexOf("-products") && -1 !== e.indexOf("-attachment_impression") ? r = e : (o = !0,
                    r = this.error_template,
                    console.warn(">>> import Frame error! (A)", i)),
                    gazeta_pl.unitTestRunning && gazeta_pl.dispatchEvent.trigger(document, "cg_show_frame_test", i),
                    gazeta_pl.cgImportFrameStore.browser.ie11 && gazeta_pl.cgImportFrameStore.notSupportIE11.length)
                        for (t in gazeta_pl.cgImportFrameStore.notSupportIE11)
                            if (-1 !== r.indexOf(gazeta_pl.cgImportFrameStore.notSupportIE11[t])) {
                                o = !(r = ""),
                                console.warn(">>> import Frame error! (C)", i);
                                break
                            }
                    gazeta_pl.cgImportFrame.Viewability && this.Helpers.viewabilitySupport(r, i)
                } else
                    o = !0,
                    r = this.error_template,
                    console.warn(">>> import Frame error (B)!", i);
                gazeta_pl.cgImportFrameStore.loadscript ? this.Script.replaceCurrentScriptByFrame(i, r, o, !0) : this.Script.replaceCurrentScriptByFrame(i, r, o)
            }
            .bind(this),
            n.onerror = function() {
                console.warn(">>> import Frame error (C)!", i, e),
                gazeta_pl.dispatchEvent.trigger(document, "cg_show_frame_error", i),
                this.Script.replaceCurrentScriptByFrame(i, this.error_template, !0)
            }
            .bind(this),
            n.send()
        }
        .bind(gazeta_pl.cgImportFrame)
    },
    function() {
        if ("function" == typeof window.CustomEvent)
            return;
        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var r = document.createEvent("CustomEvent");
            return r.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
            r
        }
        e.prototype = window.Event.prototype,
        window.CustomEvent = e
    }(),
    gazeta_pl.detectAdb = {
        init: function() {
            this.check()
        },
        check: function() {
            var i = document.createElement("div");
            i.className = "adsbox",
            i.innerHTML = "&nbsp;",
            document.body.appendChild(i),
            setTimeout(function() {
                var e, t = document.querySelectorAll('div[id^="div-gpt-ad"]'), r = t.length, o = [];
                for (e = 0; e < r; e++)
                    "none" === t[e].style.display && o.push(t[e]);
                (0 === i.offsetHeight || 2 < o.length || gazeta_pl.unitTestRunning) && (gazeta_pl.cgImportFrameStore.isAdb = !0,
                gazeta_pl.dispatchEvent.trigger(document, "adblock", {})),
                i.parentNode.removeChild(i)
            }, 100)
        }
    },
    function() {
        "use strict";
        if ("object" == typeof window)
            if ("IntersectionObserver"in window && "IntersectionObserverEntry"in window && "intersectionRatio"in window.IntersectionObserverEntry.prototype)
                "isIntersecting"in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                    get: function() {
                        return 0 < this.intersectionRatio
                    }
                });
            else {
                var h = window.document
                  , t = [];
                e.prototype.THROTTLE_TIMEOUT = 100,
                e.prototype.POLL_INTERVAL = null,
                e.prototype.USE_MUTATION_OBSERVER = !0,
                e.prototype.observe = function(t) {
                    if (!this._observationTargets.some(function(e) {
                        return e.element == t
                    })) {
                        if (!t || 1 != t.nodeType)
                            throw new Error("target must be an Element");
                        this._registerInstance(),
                        this._observationTargets.push({
                            element: t,
                            entry: null
                        }),
                        this._monitorIntersections(),
                        this._checkForIntersections()
                    }
                }
                ,
                e.prototype.unobserve = function(t) {
                    this._observationTargets = this._observationTargets.filter(function(e) {
                        return e.element != t
                    }),
                    this._observationTargets.length || (this._unmonitorIntersections(),
                    this._unregisterInstance())
                }
                ,
                e.prototype.disconnect = function() {
                    this._observationTargets = [],
                    this._unmonitorIntersections(),
                    this._unregisterInstance()
                }
                ,
                e.prototype.takeRecords = function() {
                    var e = this._queuedEntries.slice();
                    return this._queuedEntries = [],
                    e
                }
                ,
                e.prototype._initThresholds = function(e) {
                    var t = e || [0];
                    return Array.isArray(t) || (t = [t]),
                    t.sort().filter(function(e, t, r) {
                        if ("number" != typeof e || isNaN(e) || e < 0 || 1 < e)
                            throw new Error("threshold must be a number between 0 and 1 inclusively");
                        return e !== r[t - 1]
                    })
                }
                ,
                e.prototype._parseRootMargin = function(e) {
                    var t = (e || "0px").split(/\s+/).map(function(e) {
                        var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                        if (!t)
                            throw new Error("rootMargin must be specified in pixels or percent");
                        return {
                            value: parseFloat(t[1]),
                            unit: t[2]
                        }
                    });
                    return t[1] = t[1] || t[0],
                    t[2] = t[2] || t[0],
                    t[3] = t[3] || t[1],
                    t
                }
                ,
                e.prototype._monitorIntersections = function() {
                    this._monitoringIntersections || (this._monitoringIntersections = !0,
                    this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(window, "resize", this._checkForIntersections, !0),
                    r(h, "scroll", this._checkForIntersections, !0),
                    this.USE_MUTATION_OBSERVER && "MutationObserver"in window && (this._domObserver = new MutationObserver(this._checkForIntersections),
                    this._domObserver.observe(h, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }))))
                }
                ,
                e.prototype._unmonitorIntersections = function() {
                    this._monitoringIntersections && (this._monitoringIntersections = !1,
                    clearInterval(this._monitoringInterval),
                    this._monitoringInterval = null,
                    o(window, "resize", this._checkForIntersections, !0),
                    o(h, "scroll", this._checkForIntersections, !0),
                    this._domObserver && (this._domObserver.disconnect(),
                    this._domObserver = null))
                }
                ,
                e.prototype._checkForIntersections = function() {
                    var s = this._rootIsInDom()
                      , c = s ? this._getRootRect() : {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    };
                    this._observationTargets.forEach(function(e) {
                        var t = e.element
                          , r = f(t)
                          , o = this._rootContainsTarget(t)
                          , i = e.entry
                          , n = s && o && this._computeTargetAndRootIntersection(t, c)
                          , a = e.entry = new l({
                            time: window.performance && performance.now && performance.now(),
                            target: t,
                            boundingClientRect: r,
                            rootBounds: c,
                            intersectionRect: n
                        });
                        i ? s && o ? this._hasCrossedThreshold(i, a) && this._queuedEntries.push(a) : i && i.isIntersecting && this._queuedEntries.push(a) : this._queuedEntries.push(a)
                    }, this),
                    this._queuedEntries.length && this._callback(this.takeRecords(), this)
                }
                ,
                e.prototype._computeTargetAndRootIntersection = function(e, t) {
                    if ("none" != window.getComputedStyle(e).display) {
                        for (var r, o, i, n, a, s, c, l, d = f(e), m = _(e), p = !1; !p; ) {
                            var g = null
                              , u = 1 == m.nodeType ? window.getComputedStyle(m) : {};
                            if ("none" == u.display)
                                return;
                            if (m == this.root || m == h ? (p = !0,
                            g = t) : m != h.body && m != h.documentElement && "visible" != u.overflow && (g = f(m)),
                            g && (r = g,
                            o = d,
                            void 0,
                            i = Math.max(r.top, o.top),
                            n = Math.min(r.bottom, o.bottom),
                            a = Math.max(r.left, o.left),
                            s = Math.min(r.right, o.right),
                            l = n - i,
                            !(d = 0 <= (c = s - a) && 0 <= l && {
                                top: i,
                                bottom: n,
                                left: a,
                                right: s,
                                width: c,
                                height: l
                            })))
                                break;
                            m = _(m)
                        }
                        return d
                    }
                }
                ,
                e.prototype._getRootRect = function() {
                    var e;
                    if (this.root)
                        e = f(this.root);
                    else {
                        var t = h.documentElement
                          , r = h.body;
                        e = {
                            top: 0,
                            left: 0,
                            right: t.clientWidth || r.clientWidth,
                            width: t.clientWidth || r.clientWidth,
                            bottom: t.clientHeight || r.clientHeight,
                            height: t.clientHeight || r.clientHeight
                        }
                    }
                    return this._expandRectByRootMargin(e)
                }
                ,
                e.prototype._expandRectByRootMargin = function(r) {
                    var e = this._rootMarginValues.map(function(e, t) {
                        return "px" == e.unit ? e.value : e.value * (t % 2 ? r.width : r.height) / 100
                    })
                      , t = {
                        top: r.top - e[0],
                        right: r.right + e[1],
                        bottom: r.bottom + e[2],
                        left: r.left - e[3]
                    };
                    return t.width = t.right - t.left,
                    t.height = t.bottom - t.top,
                    t
                }
                ,
                e.prototype._hasCrossedThreshold = function(e, t) {
                    var r = e && e.isIntersecting ? e.intersectionRatio || 0 : -1
                      , o = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                    if (r !== o)
                        for (var i = 0; i < this.thresholds.length; i++) {
                            var n = this.thresholds[i];
                            if (n == r || n == o || n < r != n < o)
                                return !0
                        }
                }
                ,
                e.prototype._rootIsInDom = function() {
                    return !this.root || i(h, this.root)
                }
                ,
                e.prototype._rootContainsTarget = function(e) {
                    return i(this.root || h, e)
                }
                ,
                e.prototype._registerInstance = function() {
                    t.indexOf(this) < 0 && t.push(this)
                }
                ,
                e.prototype._unregisterInstance = function() {
                    var e = t.indexOf(this);
                    -1 != e && t.splice(e, 1)
                }
                ,
                window.IntersectionObserver = e,
                window.IntersectionObserverEntry = l
            }
        function l(e) {
            this.time = e.time,
            this.target = e.target,
            this.rootBounds = e.rootBounds,
            this.boundingClientRect = e.boundingClientRect,
            this.intersectionRect = e.intersectionRect || {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            },
            this.isIntersecting = !!e.intersectionRect;
            var t = this.boundingClientRect
              , r = t.width * t.height
              , o = this.intersectionRect
              , i = o.width * o.height;
            this.intersectionRatio = r ? Number((i / r).toFixed(4)) : this.isIntersecting ? 1 : 0
        }
        function e(e, t) {
            var r, o, i, n = t || {};
            if ("function" != typeof e)
                throw new Error("callback must be a function");
            if (n.root && 1 != n.root.nodeType)
                throw new Error("root must be an Element");
            this._checkForIntersections = (r = this._checkForIntersections.bind(this),
            o = this.THROTTLE_TIMEOUT,
            i = null,
            function() {
                i || (i = setTimeout(function() {
                    r(),
                    i = null
                }, o))
            }
            ),
            this._callback = e,
            this._observationTargets = [],
            this._queuedEntries = [],
            this._rootMarginValues = this._parseRootMargin(n.rootMargin),
            this.thresholds = this._initThresholds(n.threshold),
            this.root = n.root || null,
            this.rootMargin = this._rootMarginValues.map(function(e) {
                return e.value + e.unit
            }).join(" ")
        }
        function r(e, t, r, o) {
            "function" == typeof e.addEventListener ? e.addEventListener(t, r, o || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, r)
        }
        function o(e, t, r, o) {
            "function" == typeof e.removeEventListener ? e.removeEventListener(t, r, o || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, r)
        }
        function f(e) {
            var t;
            try {
                t = e.getBoundingClientRect()
            } catch (e) {}
            return t ? (t.width && t.height || (t = {
                top: t.top,
                right: t.right,
                bottom: t.bottom,
                left: t.left,
                width: t.right - t.left,
                height: t.bottom - t.top
            }),
            t) : {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            }
        }
        function i(e, t) {
            for (var r = t; r; ) {
                if (r == e)
                    return !0;
                r = _(r)
            }
            return !1
        }
        function _(e) {
            var t = e.parentNode;
            return t && 11 == t.nodeType && t.host ? t.host : t && t.assignedSlot ? t.assignedSlot.parentNode : t
        }
    }(),
    gazeta_pl.cgImportFrame.Viewability = gazeta_pl.cgImportFrame.Viewability || {
        mode: "observer",
        supportedFrames: [],
        pageSize: {
            width: window.innerWidth || document.documentElement.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight
        },
        processedPixels: [],
        percentVisibility: 1,
        observers: [],
        initiated: !1,
        scrollModeEventName: "optimizedScroll",
        addFrameToCheckViewability: function(e, t) {
            "scroll" !== this.mode || this.initiated || this.initScrollMode(),
            this.supportedFrames.push({
                frameId: e,
                partnerName: t
            }),
            "observer" === this.mode && setTimeout(function() {
                this.setObserver(document.querySelector('div[data-frameid="' + e + '"]'), e)
            }
            .bind(this), 500),
            gazeta_pl.cgImportFrameStore.devmode && console.warn(">>> Viewability enabled [" + this.mode + " mode]", Number(e))
        },
        setObserver: function(r, o) {
            this.observers[o] = new IntersectionObserver(function(e) {
                if (!0 === e[0].isIntersecting && -1 === this.processedPixels.indexOf(o)) {
                    this.processedPixels.push(o);
                    var t = gazeta_pl.cgImportFrame.Helpers.getObjectBy(this.supportedFrames, "frameId", o);
                    gazeta_pl.cgImportFrameStore.devmode && console.log(">>> Frame " + o + " is in viewport!\n", this.processedPixels, r),
                    this.sendPixel(t, r),
                    this.observers[o].unobserve(r)
                }
            }
            .bind(this),{
                threshold: [this.percentVisibility]
            }),
            this.observers[o].observe(r)
        },
        initScrollMode: function() {
            this.initiated = !0,
            gazeta_pl.Debounce ? gazeta_pl.Debounce.init() : this.scrollModeEventName = "scroll",
            this.onScroll()
        },
        onScroll: function() {
            var t, r;
            window.addEventListener(this.scrollModeEventName, function(e) {
                for (count = this.supportedFrames.length; count; )
                    count--,
                    t = this.supportedFrames[count].frameId,
                    r = document.querySelector('div[data-frameid="' + t + '"]'),
                    -1 === this.processedPixels.indexOf(t) && this.isInViewport(r) && (this.processedPixels.push(t),
                    this.sendPixel(count, r),
                    gazeta_pl.cgImportFrameStore.devmode && console.log("Frame " + t + " is in viewport!", this.processedPixels, r))
            }
            .bind(this), !1)
        },
        isInViewport: function(e) {
            if (!e)
                return !1;
            var t = e.getBoundingClientRect()
              , r = 0 <= t.top
              , o = 0 <= t.left
              , i = t.bottom <= this.pageSize.height
              , n = t.right <= this.pageSize.width;
            return r && o && i && n
        },
        sendPixel: function(e, t) {
            var r = document.createElement("img")
              , o = this.supportedFrames[e].partnerName
              , i = gazeta_pl.cgImportFrameStore.viewability.filter(function(e) {
                return Object.keys(e)[0] === o
            });
            i && i[0] && i[0][o] && (r.border = "0",
            r.height = "1",
            r.width = "1",
            r.alt = "Advertisement",
            r.src = i[0][o].replace("[timestamp]", Date.now().toString()),
            t.appendChild(r),
            gazeta_pl.cgImportFrameStore.devmode && console.log("\n>>> sendPixel\n", "PARTNER", o, "\n", i[0][o], r))
        }
    },
    (gazeta_pl = gazeta_pl || {}).cgImportFrame.Template_bar = {
        init: function(t) {
            if (!t.frame)
                return !1;
            if (document.querySelector("#gnl-toggle-" + t.frame + ":not(.done)").addEventListener("click", function(e) {
                e.target.classList.add("done"),
                document.getElementById("gnl-regul-" + t.frame).classList.toggle("visible")
            }, !0),
            document.querySelector("#gnl-close-" + t.frame + ":not(.done)").addEventListener("click", function(e) {
                e.target.classList.add("done"),
                document.getElementById("gnl-regul-" + t.frame).classList.toggle("visible")
            }, !0),
            gazeta_pl.cgImportFrameStore.isMobile) {
                var e, r = document.querySelectorAll('div[class*="-module-' + t.frame + '"]:not(.done)');
                if (r)
                    for (e in r)
                        r[e].className += " mobile done"
            }
        }
    },
    (1 === gazeta_pl.cgImportFrameStore.importFrameVersion.length || gazeta_pl.cgImportFrameStore.importFrameVersion[gazeta_pl.cgImportFrameStore.importFrameVersion.length - 1] > Math.max.apply(Math, gazeta_pl.cgImportFrameStore.catchClickVersion)) && gazeta_pl.cgImportFrame.init(),
    window.addEventListener("DOMContentLoaded", function(e) {
        gazeta_pl.cgImportFrameStore.frameEdit && !gazeta_pl.frameEditor && gazeta_pl.cgImportFrame.Script.loadExternalScript("//static.im-g.pl/static/content/front/content-generator/master/front/dist/gazeta_pl.frameEditor-min.js?t=" + Date.now(), "cg-frame-editor")
    });
    //]]>
    