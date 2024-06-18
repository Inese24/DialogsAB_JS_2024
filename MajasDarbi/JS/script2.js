
<script type="text/javascript" id="inlinehead-inline-script" nonce="seCRhpQRAxcrQDqXojGnAXNVld2L0QxcYSUBj5AG1Fg=">
    window["_webWorkerBundle"] = "/bundles/v1/edgeChromium/latest/web-worker.3695737ca2a99834640f.js";
    window["_authCookieName"] = "aace";
    !function(){
        "use strict";
    var e={ },t={ };
    function n(o){var i=t[o];
    if(void 0!==i)return i.exports;
    var r=t[o]={exports:{ }};
    return e[o](r,r.exports,n),r.exports
}

    function o(e){
        if("undefined"==typeof window||!window.document||window.isRenderServiceEnv)return;
    const t=window.trustedTypes;
    if(!t||!t.createPolicy)return;
    const n=window.trustedTypePolicies||(window.trustedTypePolicies={ });
    if(n[e])return n[e];
    const o=t.createPolicy(e,{
        createScriptURL:e=>{
    const t=function(e){
    const t=["ntp.msn.com","ntp.msn.cn","assets.msn.cn","assets.msn.com","www.bing.com","assets2.msn.com",document.location.hostname];
    let n;
    try{
        n = new URL(e, location.origin)
    }
    catch(e){return"about:blank#error"}
    if(n.hostname&&!t.includes(n.hostname))return"about:blank#error";
    return e
}
    (e);
    return t
} }
    );
    return n[e]=o,o
} }

    let i, r, s, a;
    function c() {
    if (!i) {
        const e = document.head.getAttribute("data-client-settings");
    e && (i = JSON.parse(e))
    } return i
}
    function l() {
    if (r) return r;
    const e = document.head.getAttribute("data-info");
    return r = ((/f:\s*([^;]+)/i.exec(e) || { })[1] || "").toLowerCase(), r
}
    n.g = function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
        return this || new Function("return this")()
    }
    catch (e) {
        if ("object" == typeof window) return window
    }
}
    (), function () {
        if (void 0 !== n) {
            const t = n.e, o = { };
    var e;
    const i = document.head.getAttribute("data-info");
    n.e = function (r) {
                return t(r).catch((function (t) {
                    const s = o.hasOwnProperty(r) ? o[r] : 2;
                    if (void 0 === e && (e = !!(i && i.indexOf("prg-afdretry-t") > -1)), e && 2 === s && (n.p = n.p.replace("/assets.", "/assets2.")), 1 === s) if (e) {
                        const e = new URL(n.p, window.location.href);
    n.p = e.href.replace(e.host, window.location.host)
                    }
    else n.p = n.p.replace("/assets.", "/assets2.");
    if (s < 1) throw t;
    return new Promise((function (e) {
        setTimeout((function () {
            o[r] = s - 1, e(n.e(r))
        }), 100)
    }))
                }))
            }
        }
    }
    (), function () {
            if (void 0 !== n && void 0 !== n.tu) {
                const e = n.tu;
    n.tu = function (t) {
                    return e(function (e) {
                        if ("string" != typeof e || "undefined" == typeof document) return e;
    const t = document.head.getAttribute("data-info");
                        if (!(t.indexOf("ntp-akh3t") >= 0 || t.indexOf("ntp-akh3c") >= 0)) return e;
    const n = "akmprotocol=";
                        var o = document.cookie.split("; ").find((e => 0 === e.indexOf(n)));
    if (o) {
                            const t = o.split("=");
    if (t[1]) return e + (e.indexOf("?") < 0 ? "?" : "&") + n + t[1]
                        }
    return e
                    }
    (t))
                }
            }
        }();
    function d(e) {
    try {
        return decodeURIComponent(e)
    }
    catch (e) { }
} function u(e, t) {
    if (!e) return null;
    if (t) return p(e);
    if (!s) {
        const e = "undefined" != typeof document && document.cookie.split("; ");
    s = { }; const t = e && e.length;
    for (let n = 0; n < t; n++) {
            const t = e[n].indexOf("=");
    s[e[n].slice(0, t).toLocaleLowerCase()] = d(e[n].slice(t + 1))
        }
    } const n = e.toLocaleLowerCase();
    return s[n] || null
}
    function p(e) {
    var t;
    const n = null === (t = document.cookie) || void 0 === t ? void 0 : t.match(`\\b${e}=([^;]*)`);
    return n ? d(n[1]) : null
}
    function h(e) {
    const t = u(e);
    return t && encodeURIComponent(t) || null
}
    var g;
    !function (e) {e[e.Alert = 0] = "Alert", e[e.NoAlert = 1] = "NoAlert", e[e.HighImpact = 2] = "HighImpact", e[e.Critical = 3] = "Critical"}(g || (g = { }));
    const m = new class {
        constructor(e = 20) {
        this.maxLength = 20, this.list = [], this.maxLength = e
    }
    push(e) {
        this.list.push(e), this.list.length > this.maxLength && this.list.shift()
    }
    get data() {
        return this.list
    }
};
    function f(e, t, n, o = g.Alert, i, r) {
    try {
        const s = c(), d = l(), p = function (e) {
            if (e) {
                const {pcsInfo: t, pageGenTime: n }
    = e, o = new Date(n).getTime(), i = !t || ["prod", "prod-ssr", "prod-ssrntp"].includes(t.env);
    a = i ? "browser.events.data.msn.com" : "events-sandbox.data.msn.com"; return {
        cors: "true", "content-type": "application/x-json-stream", "client-id": "NO_AUTH", "client-version": "1DS-Web-JS-2.2.2", apikey: i ? "0ded60c75e44443aa3484c42c1c43fe8-9fc57d3f-fdac-4bcf-b927-75eafe60192e-7279" : "f8857dedc6f54ca8962cfb713e01e7d7-e9250191-fe0b-446f-95ae-07516262f98c-7028", "upload-time": o, w: "0", anoncknm: "app_anon"
                }
            } return null
        }
    (s);
    let h = ""; p && p.apikey && "" !== p.apikey && (h = function (e) {
            if (e) {
                const t = e.indexOf("-");
                if (t > 0) return e.substring(0, t)
            } return ""
        }
    (p.apikey));
    const f = function (e, t, n, o, i, r, s = g.Alert) {
            if (n) {
        i = i || {};
    const {apptype: c, audienceMode: l, pagetype: d, pageGenTime: p, bundleInfo: h, deviceFormFactor: g = "", fd_muid: m, os: f } = n;
    i.pageGenTime = p, i.build = h && h.v, i.appType = c;
    const y = function (e, t, n) {
                    const o = n && "phone" === n.toLowerCase(), i = t && "enterprise" === t;
    return {
        bingHomepage: "binghomepage", mmx: "emmx", edge: "spartan", edgeChromium: i ? "entnews" : "anaheim", hybrid: "spartan", hub: o ? "prime_mobile" : "prime", microsoftNews: "msnews", office: "entnews", views: o ? "prime_mobile" : "prime", windowsShell: "windowsshell"
                    }
    [e]
                }
    (c, l, g), b = y || c, v = document.getElementsByTagName("html")[0].getAttribute("lang");
    let k, C = "", S = "muid";
    try {
                    if ("edgeChromium" === c && "object" == typeof window && window.location && window.location.search) {
                        const e = new URLSearchParams(window.location.search);
    k = e.has("startpage") ? "msedgdhp" : "msedgntp", "enterprise" === l ? k = "entnewsntp" : "xbox" === f && (k = "xboxntp")
                    }
    window && window.getCookieConsentRequired && "function" == typeof window.getCookieConsentRequired && window.getCookieConsentRequired() || (C = u("muid"))
                }
    catch { }
    C || (C = n.aid, S = "aid");
    const A = {
        name: "MS.News.Web.AppError", time: p, ver: "4.0", iKey: `o:${o}`, data: {
        baseData: { }, baseType: "MS.News.Web.Base", page: {
        name: "default", product: b, type: w(d), content: {category: "standaloneError" }, ocid: k
                        }, browser: {clientId: C, clientIdType: S }, flight: {id: r }, request: {activityId: n.aid, requestId: n.aid, afdMuid: m }, locale: {mkt: v }, extSchema: {id: e, severity: s, pb: i, message: t }
                    }
                };
    var a;
    if (C && "muid" === S) A.ext = {
        ...null == A ? void 0 : A.ext, user: {
        ...null == A || null === (a = A.ext) || void 0 === a ? void 0 : a.user, localId: `t:${C}`
                    }
                };=
    return A.data.flight.tmpl = "", "object" == typeof window && (window.isSSREnabled && (A.data.flight.tmpl += "; ssr - enabled: 1"), window.isSSRCompleted && (A.data.flight.tmpl += ";ssr - completed: 1")), A ? JSON.stringify(A) : null
            } return null
        }
    (t, e, s, h, n, d, o);
    if (r && !function (e) {
            if (null == e) return !1;
    return e.startsWith("2") || e.startsWith("3")
        }
    (null == s ? void 0 : s.aid)) return console.error(f), void console.error(`This App error Id: ${t} will not be sent due to app error sampling!`);
    if (p && f) {
        console.error(f), m.push(f);
    const e = "https://" + a + "/OneCollector/1.0" + function (e) { return "?" + Object.keys(e).map((function (t) { return t + "=" + encodeURIComponent(e[t]) })).join("&") }(p);
            if (i && !performance.getEntriesByType("visibility-state").some((e => "visible" === e.name))) {
                const t = () => {
        "visible" === document.visibilityState && navigator.sendBeacon(e, f)
    };
    document.addEventListener("visibilitychange", t, {once: !0 })
            } else navigator.sendBeacon(e, f)
        }
    }
    catch { }
}
    function w(e) {
        let t = e;
    switch (e) { case "windowsshellhp": t = "dhp"; break; case "video": t = "watch" }return t
}
    const y = 223300, b = 223301, v = 223306, k = 223307;
    function C(e, t) {
    const n = o(t);
    if (n) {
        const t = n.createScriptURL(e), o = t && t.toString();
    return t && "about:blank#error" !== o ? t : (f("URL is not trusted types compliant.", b, {customMessage: "Failed URL is: " + e }, g.NoAlert, !0), e)
    } return f("Trusted types policy is not available.", y, { }, g.NoAlert, !0), e
} function S(e) {
    if (window && window.trustedTypes) try {
        window.trustedTypes.createPolicy("default", {
            createScriptURL: (t, n, o) => {
                if (!e) return t;
                const i = ["ntp.msn.com", "ntp.msn.cn", "assets.msn.cn", "assets.msn.com", "www.bing.com", "assets2.msn.com", document.location.hostname];
                let r;
                try {
                    r = new URL(t, location.origin)
                }
                catch (e) {
                    return f("Trusted Types URL construction failed.", 223302, {
                        customMessage: {
                            failedUrl: t, sinkType: o, stack: (new Error).stack
                        }
                    }
                        , g.NoAlert, !0, !0), "about:blank#error@" + t
                }
                return r.hostname && !i.includes(r.hostname) ? (f("URL is not Trusted Types compliant. Host is not in allow list.", v, {
                    customMessage: {
                        failedUrl: t, sinkType: o, other: "We should block in this scenario but allow to learn the pattern now.", stack: (new Error).stack
                    }
                }
                    , g.NoAlert, !0, !0), t) : r.hostname ? (-1 !== t.indexOf("oneTrust") || f("URL is not Trusted Types compliant.", v, {
                        customMessage: {
                            failedUrl: t, sinkType: o, other: "URL passed domain validation but it requires a new policy to handle it.", stack: (new Error).stack
                        }
                    }
                        , g.NoAlert, !0, !0), t) : "blob:" !== r.protocol || 0 !== r.href.indexOf("blob:https://ntp.msn.com") && 0 !== r.href.indexOf("blob:https://ntp.msn.cn") ? (f("URL is not Trusted Types compliant. Host is missing.", v, {
                            customMessage: {
                                failedUrl: t, sinkType: o, other: "We should block in this scenario but allow to learn the pattern now.", stack: (new Error).stack
                            }
                        }
                            , g.NoAlert, !0, !0), t) : t
            }
            , createScript: (t, n, o) => e ? (t.indexOf("sa_inst.autosuggest.config.u") > -1 || f("Script is not trusted types compliant.", 223308, {
                customMessage: {
                    sinkType: o, violationSample: t.substring(0, 100), stack: (new Error).stack
                }
            }
                , g.NoAlert, !0, !0), t) : t, createHTML: (t, n, o) => {
                    if (!e) return t;
                    const i = (new Error).stack;
                    if ((null == i ? void 0 : i.indexOf("bing")) > -1 || (null == i ? void 0 : i.indexOf("oneTrust")) > -1) return t;
                    const r = t.substring(0, 100);
                    return -1 !== t.indexOf("vjs") ? t : -1 === t.indexOf("<") ? (f("HTML is not trusted types compliant.", k, { customMessage: { sinkType: o, violationSample: r, other: "Does not contain any HTML tags.", stack: i } }, g.NoAlert, !0, !0), t) : o && (o.indexOf("createContextualFragment") > -1 || o.indexOf("innerHTML") > -1) ? (f("HTML is not trusted types compliant.", k, { customMessage: { sinkType: o, violationSample: r, other: "createContextualFragment/innerHTML scenario.", stack: i } }, g.NoAlert, !0, !0), t) : o && o.indexOf("parseFromString") > -1 && 0 === t.indexOf("<VAST") ? (f("XML is not trusted types compliant.", k, { customMessage: { sinkType: o, violationSample: r, other: "XML scenario.", stack: i } }, g.NoAlert, !0, !0), t) : (f("HTML is not trusted types compliant.", k, { customMessage: { sinkType: o, violationSample: r, stack: i } }, g.NoAlert, !0, !0), t)
                }
        }
        )
    }
    catch (e) {
        f("Trusted Types [default-policy] error creating policy, policy may already exist", 223309, {
            customMessage: e
        }
            , g.NoAlert, !0, !0)
    }
    else f("Trusted Types API is not available.", 223304, {
        customMessage: "The Trusted Types API is not available when creating a default policy."
    }
    , g.NoAlert, !0, !0)
}
    function A() {
    return !("undefined" == typeof window || !window.document || !window.document.createElement || window.isRenderServiceEnv)
}
    let E = new Map; const x = Object.freeze({
        set(e, t) {
        return E.set(e, t), this
    }
    , get: function (e, t) {
        let n = E.get(e);
    return void 0 === n && t && (n = t(), E.set(e, n)), n
    }, clear() {
        E.clear()
    }
    , delete: e => E.delete(e), has: e => E.has(e)
}
    );
    const L = "__RequestDataInstance__";
    class P {
        constructor(e, t) {
        if (this.url = new URL(e.href), this.innerHeight = e.innerHeight, this.devicePixelRatio = e.devicePixelRatio, this.canUseCssGrid = e.canUseCssGrid, this.requestId = e.requestId, this.cookie = e.cookie, this.referer = e.referer, this.userAgent = e.userAgent, this.clientData = e.clientData, this.oneServiceHeaders = function (e) { try { if (e) return JSON.parse(e) } catch (e) { } }(e.oneServiceHeaders) || { }, this.isPssrMode = t, t) {
            const e = T("OSATE", this.cookie), t = !!e && "1" === e, n = T("OSAT", this.cookie);
    if (t && n || !e && !n) return this.msalAuthReady = !0, void (n && (this.oneServiceHeaders.Authorization = `Bearer ${n}`));
    this.msalAuthReady = !1, this.pssrRejectedReason = e && !t ? "interactiveLogin" : e && !n ? "missOSAT" : "missOSATE"
        }
    }
    static getInstance() {
        const e = x.get(L);
    return e || (n.g.TEST_ENV ? O({
        href: "http://localhost:8080/", innerHeight: 768, devicePixelRatio: 1, canUseCssGrid: !1, requestId: "0", cookie: "", userAgent: "", referer: "", oneServiceHeaders: ""
        }
    ) : O({
        href: "http://localhost:8080/", innerHeight: 0, devicePixelRatio: 0, canUseCssGrid: !1, requestId: "0", cookie: "", userAgent: "", referer: "", oneServiceHeaders: ""
        }
    ))
    }
    static resetInstance(e, t = !1) {
        const n = new P(e, t);
    return x.set(L, n), n
    }
}
    function T(e, t) {
    if (t && e) {
        const n = new RegExp("\\b" + e + "\\s*=\\s*([^;]*)", "i").exec(t);
        return n && n.length > 1 ? n[1] : null
    } return null
}
const O = P.resetInstance, R = () => P.getInstance();
    function I() {
    return A() ? window.location.search : R().url.search
}
    var M, _;
    !function (e) {
        e.Anon = "ANON", e.AppAnon = "APP_ANON", e.Unknown = ""
    }
    (M || (M = { })), function (e) {
        e.AnonCookieExists = "ace", e.AppAnonCookieExists = "aace"
    }
    (_ || (_ = { })); const q = "child";
    function N(e, t) {
    if (e) {
        const n = new RegExp("\\b" + t + "\\s*=\\s*([^;]*)", "i").exec(e); return n && n.length > 1 ? n[1] : null
    } return null
}
    function U(e) {
    try {
        if (e) return JSON.parse(e)
    }
    catch (e) { } return null
}
    var W;
    !function (e) {
        e.Adult = "adult", e.Enterprise = "enterprise", e.Kids = "kids"
    }
    (W || (W = { }));
    const F = "prg-";
    function D(e) {
    const t = F.length, n = []; return e && e.length && (e.forEach((e => {
        const o = e && e.trim();
        o && o.length >= t && o.substring(0, t).toLowerCase() === F && n.push(o.toLowerCase())
    }
    )), n.sort()), n
}
    function H(e) {
    var t;
    return document.head.dataset[e] || (null === (t = $()) || void 0 === t ? void 0 : t.dataset[e])
}
    let B;
    function $() {
    return void 0 === B && (B = document.getElementsByClassName("peregrine-widget-settings")[0] || null), B
}
    var V;
    !function (e) {
        e.Android = "android", e.Ios = "ios", e.Linux = "linux", e.Macos = "macos", e.Windows = "windows", e.Xbox = "xbox"
    }
    (V || (V = { }));
    const j = "data-client-settings", J = "Authorization"; var G, K;
    !function (e) {
        e.Presentation = "presentation"
    }
    (G || (G = { })), function (e) {
        e.Unknown = "Unknown", e.Portrait = "Portrait", e.Landscape = "Landscape"
    }
    (K || (K = { }));
    var X, z;
    !function (e) {
        e[e.Undefined = 0] = "Undefined", e[e.Basic = 1] = "Basic", e[e.Advanced = 2] = "Advanced", e[e.Premium = 3] = "Premium"
    }
    (X || (X = { })), function (e) {
        e.Init = "init", e.Config = "config", e.Targeted = "targeted", e.Sticky = "sticky", e.NoSticky = "no_sticky", e.Admin = "admin", e.Forced = "forced", e.Manual = "manual"
    }
    (z || (z = { }));
    new Set(["winp0dash", "winp1taskbar", "winp1taskbarent", "winp1taskbardirect", "winp1taskbardirectent", "winp1taskbarent", "winp2juntaskbar", "winp2juntaskbarent", "winp2", "winp2ent", "winp2fp", "winp2fpent", "winp2fptaskbar", "winp2fptaskbarent", "winp2fptaskbarhover", "winp2fptaskbarhoverent", "winp2widget", "winp2widgetent"]);
    const Q = new Set(["finance-app-win", "weather-app-win", "winpstoreapp"]), Y = (new Set(["msedgdhp", "msedgdhphdr", "msedgntphdr", "msedgntp", "msedgdhp", "entnewsntp"]), new Set(["hpmsn"]));
    function Z() {
    var e;
    return A() ? U(document.head.dataset.clientSettings || (null === (e = document.getElementsByClassName("peregrine-widget-settings")[0]) || void 0 === e ? void 0 : e.getAttribute(j))) : null
}
    const ee = "feed/personalize/settings";
    function te(e, t) {
    const n = t.replace(/[[\]]/g, "\\$&"), o = new RegExp("[?&]" + n + "(=([^&#]*)|&|#|$)").exec(e);
    if (!o) return null;
    const i = o[2];
    return decodeURIComponent(i.replace(/\+/g, " ")) || ""
}
    let ne = new class {
        constructor() {
        A() ? (this.isDebugEnabled = (te(window.location.href, "debug") || "").toLowerCase() in {
            1: 1, true: 1
        }
            || "vp" === (te(window.location.href, "reqsrc") || "").toLowerCase(), this.isDebugEnabled && !n.g.TEST_ENV && (window.webpackRequire = n)) : this.isDebugEnabled = !1
    }
    getLoggingService() {
        return null
    }
    isDebug() {
        return this.isDebugEnabled
    }
    setDebug(e) {
        this.isDebugEnabled = e
    }
    setTags(e) {
    }
    log(e, t) {
        this.isDebug() && console.info(e)
    }
    logError(e) {
        console.error(e)
    }
    logCallback(e) {
        this.isDebug() && console.info(e())
    }
    logObjects(...e) {
        this.isDebug() && console.log(...e)
    }
    logSingleObject(e, t) {
        this.isDebug() && console.log(e)
    }
}
    ;
    class oe {
        get supported() {
        return !!this.storage
    }
    constructor(e) {
        this.storage = e
    } getItem(e) {
        if (this.supported) return this.storage.getItem(e)
    }
    getObject(e, t) {
        const n = this.getItem(e);
    if (null != n) {
            const e = U(n);
    if (null != e) return e
        }
    return t
    }
    key(e) {
        if (this.supported && e >= 0) return this.storage.key(e)
    }
    keys() {
        return this.supported ? Object.keys(this.storage) : []
    }
    setObject(e, t) {
        void 0 !== t ? this.setItem(e, JSON.stringify(t)) : this.removeItem(e)
    }
    removeObject(e) {
        const t = this.removeItem(e);
    if (null != t) return U(t)
    }
    setItem(e, t, n = !0) {
        if (this.supported) try {
            if (!t) throw "Attempted to store null/undefined value: " + t;
    this.storage.setItem(e, t)
        }
    catch (e) {
                if (!n) throw e;
    ne.logError(e)
            }
    else if (!n) throw new Error("WebStorage not supported")
    }
    get length() {
        if (this.supported) return this.storage.length
    }
    removeItem(e) {
        if (this.supported) {
            const t = this.getItem(e);
    return this.storage.removeItem(e), t
        }
    }
    clear() {
        this.supported && this.storage.clear()
    }
    removeSubstringKeys(e) {
        if (!this.supported || !e) return;
    const t = [];
    for (let n = 0;
    n < this.storage.length;
    n++) {
            const o = this.key(n);
    o && o.includes(e) && t.push(o)
        }
    for (let e = 0; e < t.length;
    e++)this.removeItem(t[e])
    }
}
    function ie() {
    return re
}
    let re = new class extends oe {
        constructor() {
        let e = null;
    if (A()) try {
        e = localStorage
    }
    catch (e) {

    }
    super(e)
    }
};
    const se = "1s-tokens";
    var ae;
    let ce, le;
    function de() {
    return ce = pe(), ce && ce.accessToken ? ce : void 0
}
    function ue() {
    if (ce = pe(), !ce) return "notAvailable";
    const e = ce.expiresOn, t = new Date(e), n = "expired";
    if (!t.getTime()) return n;
    return t > new Date ? "valid" : n
}
    function pe() {
    return ce = ce || void 0 === ce && ie().getObject(se) || null, ce
}
    function he(e) {
        let t, n = !1;
    const o = function () {
        return n || (n = !0, t = e()), t
    };
    return o.cache = {
        clear: () => {
        n = !1, t = void 0

    }
    }
    , o
}
    !function (e) {
        e.NotAvailable = "notAvailable", e.Expired = "expired", e.Valid = "valid"
    }
    (ae || (ae = { }));
const ge = "currentaccount", me = he((() => {
    const e = u(ge, !0), t = e && U(e), {
        login_hint: n
    }
    = t || { };
    return n && t
}
    )
    )
    , fe = he((() => !!u(ge)));
    function we() {
    try {
        return localStorage
    }
    catch (e) {
        return null
    }
}
    const ye = "__PageExperimentInstance__";
    function be(e) {
        x.set(ye, e)
    }
    function ve(e) {
    if (!x.has(ye) && A()) {
        var t;
    be(ke(document.head.dataset.info || (null === (t = window.document.getElementsByClassName("peregrine-widget-settings")[0]) || void 0 === t || null === (t = t.dataset) || void 0 === t ? void 0 : t.info) || ""))
    } const n = x.get(ye);
    return n && n.has(e)
}
    function ke(e) {
    const t = (e || "").replace(/(^f:|;.* $) / g, "").split(",");
    return new Set(t)
}
const Ce = "uxlogin", Se = "uxlogout", Ae = "uxedit", Ee = "useRedirect", xe = "uxswitch", Le = he((() => {
    const e = we();
    return e && "1" === e.getItem(Ce) || A() && location.search && location.search.includes(`${Ce}=1`)
}
    )
    )
    ; const Pe = he((() => {
        const e = function () {
            try {
                return sessionStorage
            } catch (e) {
                return null
            }
        }
    ();
    return e && !!e.getItem(Se)
    }
    ));
const Te = he((() => {
    const e = we();
    return e && "1" === e.getItem(Ae)
}
    ));
const Oe = he((() => {
    const e = we(), t = !ve("prg-noredirect") && e && "1" === e.getItem(Ee) && function () {
        const e = document.head.dataset.clientSettings || "", {
        browser: t
        }
    = U(e) || { }, {
        browserType: n = ""
            }
    = t || { }; return !!/safari/i.test(n)
    }
    ();
    return t
}
    ));
const Re = he((() => {
    const e = we();
    return e && "1" === e.getItem(xe)
}
    ));
    const Ie = {
        outlookMobile: "OnOOutlookMobile", officeMobile: "OnOOfficeMobile", sapphire: "OnOStartApp", skype: "OnOSkype", winWeatherApp: "weather-app-win", xiaomiApp: "xmweather-", launcher: "launcherntp", launcherInterests: "launcherInterests", moto: "moto", swiftKey: "swiftKey", winMoneyApp: "finance-app-win"
}, Me = "superappdhp", _e = ["ios", "android", "ipados"];
    let qe = Xe("ocid").toLowerCase(), Ne = Xe("chpltfm"), [Ue, We] = Ne.toLowerCase().split("-");
    function Fe() {
    if (!A()) return !1;
    const e = window.sapphireWebViewBridge, t = window.webkit, n = e && e.send, o = t && t.messageHandlers && t.messageHandlers.send && t.messageHandlers.send.postMessage;
    return !(!n && !o)
}
    function De() {
    const e = Ne && "outlook" === Ue && _e.includes(We), t = qe === Ie.outlookMobile.toLowerCase();
    return e || t
}
    function He() {
    const e = Ne && ["office", "union"].includes(Ue) && _e.includes(We), t = qe === Ie.officeMobile.toLowerCase();
    return e || t
}
    function Be() {
    const e = qe === Ie.skype.toLowerCase() || "skype" === Ue;
    return A() && (null === (t = window.skypeWebviewBridge) || void 0 === t ? void 0 : t.isSkype) || e;
    var t
} function $e() {
    return Fe() || qe === Ie.sapphire.toLowerCase() || qe === Me.toLowerCase()
}
    function Ve() {
    const e = Xe("edge");
    return ("emmx" === Ue || "1" === e) && $e() || "mmx" === qe
}
    function je() {
    return "3rdp" === Ue || qe.startsWith(Ie.xiaomiApp) || qe === Ie.moto.toLowerCase() || Je()
}
    function Je() {
    return qe.toLowerCase() === Ie.swiftKey.toLowerCase() || "swiftkey" == Ue.toLowerCase()
}
    function Ge() {
    return -1 !== location.href.indexOf("huawei") || -1 !== location.href.indexOf("airfind") || -1 !== location.href.indexOf("aloha") || "vivo" === qe && je()
}
const Ke = he((() => Fe() || Be() || He() || De() || $e() || qe === Ie.winWeatherApp.toLowerCase() || qe === Ie.winMoneyApp.toLowerCase() || Ve() || je() || [Ie.launcher.toLowerCase(), Ie.launcherInterests.toLowerCase()].includes(qe) && $e() || Je() || Ge() || -1 !== location.href.indexOf("metaos=true")));
    function Xe(e) {
    try {
        return new URL(location.href).searchParams.get(e) || ""

    }
    catch (e) {
        return ""
    }
}
    const ze = Z() || { }, Qe = {
        newsAndInterests: 1, windowsNewsbar: 1, windowsNewsPlus: 1, winWidgets: 1, windowsShell: 1, windowsShellV2: 1, distribution: 1, superApp: 1, channeldesktop: 1, channelmobile: 1, edgeMobile: 1
}
    , Ye = {
        edgeChromium: 1
    }
    , Ze = {
        winWidgets: 1
    }
    , et = {
        edgeChromium: 1, shopping: 1, newsAndInterests: 1, windowsNewsbar: 1, windowsNewsPlus: 1, winWidgets: 1, windowsShell: 1, windowsShellV2: 1
    }
    , tt = {
        edgeChromium: 1, channeldesktop: 1, channelmobile: 1, cgHomePage: 1, distribution: 1, newsAndInterests: 1, windowsNewsbar: 1, windowsNewsPlus: 1, winWidgets: 1, windowsShell: 1, windowsShellV2: 1, superApp: 1, edgeMobile: 1
    }
    , nt = he((() => ze && ze.apptype)), ot = (he((() => A() && nt() in Ze)), he((() => A() && !Ke() && !(nt() in Qe) && !st() && !at()))), it = he((() => ot() && !(nt() in Ye)));
he((() => ot() && (!(nt() in Ye) || !fe()))), he((() => ot() && !ut() && !pt()));
    function rt() {
    return pt() || ut()
}
const st = he((() => {
    const e = !(nt() in et) && ht() && function () {
        const e = new URLSearchParams(I()).get("ocid") || (null == ze ? void 0 : ze.ocid), t = null == e ? void 0 : e.toLowerCase(), n = !Y.has(t) && "homePage" !== nt() && !Q.has(t);
    return n
    }
    () && !function () {
            const e = "windows" == nt() && "windowshp" == (ze && ze.pagetype) && (A() ? window.location.href : R().url.href).includes(`${ee}`);
    return e
        }
    ();
    return e
}
    ))

</script>
