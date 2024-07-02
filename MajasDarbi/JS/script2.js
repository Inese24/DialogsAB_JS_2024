


{
    let t = e;
    switch (e) {
        case "windowsshellhp": t = "dhp"; break; case "video": t = "watch"
    }return t
}
const y = 223300, b = 223301, v = 223306, k = 223307;


clear(){
    this.supported && this.storage.clear()

}
removeSubstringKeys(e){
    if (!this.supported || !e) return; const t = []; for (let n = 0; n < this.storage.length; n++) {
        const o = this.key(n); o && o.includes(e) && t.push(o)
    }
    for (let e = 0; e < t.length; e++)this.removeItem(t[e])
}

function ie() {
    return re
}
let re = new class extends oe {
    constructor() {
        let e = null; if (A()) try { e = localStorage } catch (e) { } super(e)
    }
};




removeObject(e){
    const t = this.removeItem(e); if (null != t) return U(t)
}
setItem(e, t, n = !0){
    if (this.supported) try {
        if (!t) throw "Attempted to store null/undefined value: " + t; this.storage.setItem(e, t)
    }
        catch (e) {
            if (!n) throw e; ne.logError(e)
        }
    else if (!n) throw new Error("WebStorage not supported")
}
get length(){
    if (this.supported) return this.storage.length
}



function appendProtocolQSP(url) {
    return url;

}
function appendScript(url, async, defer) {
    let s = document.createElement("script"); s.type = "text/javascript";
    const w = window.trustedTypesURLValidation;
    s.src = appendProtocolQSP(w ? w(url, "bundleUrlPolicy") : url);
    if (async) {
        s.async = true;
    }
    if (defer) {
        s.defer = true;
    }
    s.onerror = () => onErrorHandler(s.src); s.nonce = "zqA6zjDHl/81SsvN21bK94VALHNLP0zWUj8+lCPnIws="; s.crossOrigin = "anonymous"; document.body.appendChild(s);
}





!function () {
    "use strict"; var e = {}, t = {}; function n(o) {
        var i = t[o]; if (void 0 !== i) return i.exports; var r = t[o] = { exports: {} }; return e[o](r, r.exports, n), r.exports
    }
    function o(e) {
        if ("undefined" == typeof window || !window.document || window.isRenderServiceEnv) return; 
        const t = window.trustedTypes; if (!t || !t.createPolicy) return; 
        const n = window.trustedTypePolicies || (window.trustedTypePolicies = {}); 
        if (n[e]) return n[e]; const o = t.createPolicy(e, {
            createScriptURL: e => {
                const t = function (e) {
                    const t = ["ntp.msn.com", "ntp.msn.cn", "assets.msn.cn", "assets.msn.com", 
                        "www.bing.com", "assets2.msn.com", "assets2.msn.cn", "www.clarity.ms", 
                        "int.msn.com", "r.bing.com", "business.bing.com", "staticview.msn.com", 
                        "staticview.msn.cn", document.location.hostname]; let n; try {
                        n = new URL(e, location.origin)
                    }
                    catch (e) {
                        return "about:blank#error"
                    }
                    if (n.hostname && !t.includes(n.hostname)) return "about:blank#error"; return e
                }
                    (e); return t
            }
        }); return n[e] = o, o
    }
    let i, r, s, a;
    function c() {
        if (!i) {
            const e = document.head.getAttribute("data-client-settings"); e && (i = JSON.parse(e))
        }
        return i
    }
    function l() hasOwnProperty(r) ? o[r] : 2; if (void 0 === e && (e = !!(i && i.indexOf("prg-afdretry-t") > -1)), e && 2 === s && (n.p = n.p.replace("/assets.", "/assets2.")), 1 === s) if (e)
    }


// anonīma funkcija
const Q = new Set(["finance-app-win", "weather-app-win", "winpstoreapp"]),
    Y = (new Set(["msedgdhp", "msedgdhphdr", "msedgntphdr", "msedgntp", "msedgdhp", "entnewsntp"]),
        new Set(["hpmsn"]));

function Z() {
    var e;
    return A() ? U(document.head.dataset.clientSettings ||
        (null === (e = document.getElementsByClassName("peregrine-widget-settings")[0]) ||
            void 0 === e ? void 0 : e.getAttribute(j))) : null
}
console.log(e)

const ee = "feed/personalize/settings"; function te(e, t) {
    const n = t.replace(/[[\]]/g, "\\$&"), o = new RegExp("[?&]" + n + "(=([^&#]*)|&|#|$)").exec(e);
    if (!o) return null;
    const i = o[2];
    return decodeURIComponent(i.replace(/\+/g, " ")) || ""
}
let ne = new class




    // setTimeout

    document.head.appendChild(dn), (() => {
        try {
            if ("hidden" === document.visibilityState && new URLSearchParams(location.search).has("prerender")) return;
            ((/^f:\s*([^;]+)/i.exec(document.head.dataset.info) || {
            })
            [1] || "").toLowerCase().split(", ").includes("prg- sent - early - log") && f("Early Log - No Alert", 19018, {
                timeToSendEarlyLog: performance.now()
            }
                , g.NoAlert)
        } catch (e) { }
    })(),
        window.onErrorHandler = en, void 0 !== window.onunhandledrejection && (window.onunhandledrejection = rn),
        window.onerror = tn, window.trustedTypesURLValidation = C,
        function (e = ["vendors", "common", "microsoft"], t = "Error when loading bundle(s): ", n = 5e5, o, i) {
            Vt().then((() => {
                setTimeout((() => {
                    const n = window.webpackJsonp; if (n) {
                        const r = n.length, s = e.length + 1; if (r < s) {
                            if (r === s - 1) e = ["experience"]; else {
                                n.slice(0, s).forEach((t => {
                                    t.length && t[0][0] && e.splice(e.indexOf(t[0][0]), 1)
                                }))
                            }
                            jt(20202), f(t + e.toString(), 20202, {}), i && (jt(o), i(o, {
                                customMessage: e.toString()

                            }))
                        }
                    }
                }),
                    n)
            }))
        }
            (["vendors", "common", "microsoft"], "Error when loading bundle(s): ", 5e5, 19003, ((e, t) => {
                Zt(e, t)
            }));
