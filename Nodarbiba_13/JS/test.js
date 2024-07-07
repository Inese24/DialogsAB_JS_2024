// https://javascript.info/while-for

< !DOCTYPE html > <html lang="en" data-theme-enabled="1"><head><script>window.currentUser = null;</script><script>window.shopCurrency = "EUR";</script><script>window.localCurrency = "EUR";</script><script>window.countryCode = "ru";</script><script>window.rateShopTo = {"EUR":0.9999999999999999,"USD":1.0819091802157759,"AMD":419.27046972168966};</script><title itemprop="name">Loops: while and for</title><link href="/pack/styles.255df14885d37c051cc9.css" rel="stylesheet"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes, minimum-scale=1.0"><meta name="apple-mobile-web-app-capable" content="yes"><script>if (window.devicePixelRatio > 1) document.cookie = 'pixelRatio=' + window.devicePixelRatio + ';path=/;expires=Tue, 19 Jan 2038 03:14:07 GMT';</script><link href="//fonts.googleapis.com/css?family=Open+Sans:bold,italic,bolditalic" rel="stylesheet"><link rel="apple-touch-icon-precomposed" href="/img/favicon/apple-touch-icon-precomposed.png"><link rel="canonical" href="https://javascript.info/while-for"><meta name="msapplication-TileColor" content="#222A2C"><meta name="msapplication-TileImage" content="/img/favicon/tileicon.png"><link rel="icon" href="/img/favicon/favicon.png"><meta itemprop="image" content="https://javascript.info/img/site_preview_en_512x512.png"><meta property="og:title" content="Loops: while and for"><meta property="og:image" content="https://javascript.info/img/site_preview_en_1200x630.png"><meta property="og:image:type" content="image/png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="fb:admins" content="100001562528165"><meta name="twitter:card" content="summary"><meta name="twitter:title" content="Loops: while and for"><meta name="twitter:site" content="@iliakan"><meta name="twitter:creator" content="@iliakan"><meta name="twitter:image" content="https://javascript.info/img/site_preview_en_512x512.png"><meta name="google-adsense-account" content="ca-pub-6204518652652613"><link rel="prev" href="/nullish-coalescing-operator"><link rel="next" href="/switch"><script>window.GA_ID = "UA-2056213-15";</script><script>window.YANDEX_METRIKA_ID = 32184394;</script><script>{function gtag() { dataLayer.push(arguments) }window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-2LWB61WGYJ")}</script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-2LWB61WGYJ"></script><script>window.metrika={reachGoal:function(){ }},window.yandex_metrika_callbacks=[function(){try{window.metrika = new Ya.Metrika({ id: YANDEX_METRIKA_ID, webvisor: !0, clickmap: !0, params: { user: window.currentUser && window.currentUser.id } }), metrika.trackLinks({ delay: 150 }), window.addEventListener("error", function (r) { window.metrika.reachGoal("JSERROR", { src: (r.filename || r.errorUrl) + ": " + (r.lineno || r.errorLine), stack: r.stack || r.error && r.error.stack, message: r.message }) })}catch(r){ }}];</script><script src="//mc.yandex.ru/metrika/watch.js" async></script><script>window.RECAPTCHA_ID = "6LfmLAEVAAAAAJMykMnf7aY8nkyTRmYi2ynx51R1";</script><script src="/pack/init.3da9f16acfd4e049de8d.js"></script><script src="/pack/head.743700e064ffa39b9257.js" defer></script><meta property="og:title" content="Loops: while and for"><meta property="og:type" content="article"><script src="/pack/tutorial.fc13907e128d5521bd97.js" defer></script><script src="/pack/footer.d6f704112fe33370ef57.js" defer></script></head><body class="no-icons"><script>window.fontTest();</script><div class="page-wrapper page-wrapper_sidebar_on"><!--[if IE]><div style="color:red;text-align:center">Sorry, Internet Explorer is not supported, please use a newer browser.</div><![endif]--><div class="sitetoolbar sitetoolbar_tutorial"><script>window.langs = [{"code":"ar","name":"Arabic"},{"code":"az","name":"Azerbaijani"},{"code":"bg","name":"Bulgarian"},{"code":"bn","name":"Bengali"},{"code":"bs","name":"Bosnian"},{"code":"ca","name":"Catalan"},{"code":"cs","name":"Czech"},{"code":"da","name":"Danish"},{"code":"de","name":"German"},{"code":"el","name":"Greek"},{"code":"en","name":"English"},{"code":"es","name":"Spanish"},{"code":"fa","name":"Persian (Farsi)"},{"code":"fi","name":"Finnish"},{"code":"fr","name":"French"},{"code":"he","name":"Hebrew"},{"code":"hi","name":"Hindi"},{"code":"hr","name":"Croatian"},{"code":"hu","name":"Hungarian"},{"code":"hy","name":"Armenian"},{"code":"id","name":"Indonesian"},{"code":"it","name":"Italian"},{"code":"ja","name":"Japanese"},{"code":"ka","name":"Georgian"},{"code":"kk","name":"Kazakh"},{"code":"km","name":"Central Khmer"},{"code":"ko","name":"Korean"},{"code":"ku","name":"Kurdish"},{"code":"ky","name":"Kyrgyz"},{"code":"lt","name":"Lithuanian"},{"code":"me","name":"Montenegrin"},{"code":"ml","name":"Malayalam"},{"code":"ms","name":"Malay"},{"code":"my","name":"Burmese"},{"code":"nl","name":"Dutch"},{"code":"no","name":"Norvegian"},{"code":"pa","name":"Punjabi"},{"code":"pl","name":"Polish"},{"code":"pt","name":"Portuguese"},{"code":"ro","name":"Romanian"},{"code":"ru","name":"Russian"},{"code":"si","name":"Sinhala"},{"code":"sk","name":"Slovak"},{"code":"sl","name":"Slovenian"},{"code":"sq","name":"Albanian"},{"code":"sr","name":"Serbian"},{"code":"ta","name":"Tamil"},{"code":"te","name":"Telugu"},{"code":"test","name":"Test"},{"code":"th","name":"Thai"},{"code":"tk","name":"Turkmen"},{"code":"tr","name":"Turkish"},{"code":"ug","name":"Uyghur"},{"code":"uk","name":"Ukrainian"},{"code":"ur","name":"Urdu"},{"code":"uz","name":"Uzbek"},{"code":"v2","name":"v2"},{"code":"vi","name":"Vietnamese"},{"code":"zh-hant","name":"Chinese Traditional"},{"code":"zh","name":"Chinese"}];</script><script>window.lang = "en";</script><script>{let t=navigator.languages||[];t=t.map(t=>t.toLowerCase());let o,i,n=[];for(let o of window.langs)for(let i of t)if(i===o.code||i.startsWith(o.code+"-")){n.push(o);break}if(!o&&"ru"!=lang&&"en"!=lang){n.find(t => "en" == t.code) && (o = `\n            According to your browser headers, you know English. Please help to <a href="https://github.com/javascript-tutorial/${lang}.javascript.info#readme">translate the tutorial</a>.\n            Thank you!\n          `, i = "notify-translate-tutorial-local")}if(o){let t=`<div class="notification notification_top notification_info sitetoolbar__notification" style="display:none" id="${i}">\n          <div class="notification__content">${o}</div>\n          <button class="notification__close" title="Close"></button>\n        </div>`;document.write(t),showTopNotification()}}</script><div class="sitetoolbar__content"><div class="sitetoolbar__lang-switcher"><button class="sitetoolbar__dropdown-button" data-dropdown-toggler>EN</button><div class="sitetoolbar__dropdown-wrap"><div class="sitetoolbar__dropdown-body"><div class="sitetoolbar__lang-switcher-body"><div class="supported-langs supported-langs_toolbar"><div class="supported-langs__container"><ul class="supported-langs__list" style="height:200px"><li class="supported-langs__item"><a class="supported-langs__link" href="https://ar.javascript.info/while-for"><span class="supported-langs__brief">AR</span><span class="supported-langs__title">عربي</span></a></li><li class="supported-langs__item supported-langs__item_current"><a class="supported-langs__link" href="https://javascript.info/while-for"><span class="supported-langs__brief">EN</span><span class="supported-langs__title">English</span></a></li><li class="supported-langs__item"><a class="supported-langs__link" href="https://es.javascript.info/while-for"><span class="supported-langs__brief">ES</span><span class="supported-langs__title">Español</span></a></li><li class="supported-langs__item"><a class="supported-langs__link" href="https://fa.javascript.info/while-for"><span class="supported-langs__brief">FA</span><span class="supported-langs__title">فارسی</span></a></li><li class="supported-langs__item"><a class="supported-langs__link" href="https://fr.javascript.info/while-for"><span class="supported-langs__brief">FR</span><span class="supported-langs__title">Français</span></a></li><li class="supported-langs__item"><a class="supported-langs__link" href="https://id.javascript.info/while-for"><span class="supported-langs__brief">ID</span><span class="supported-langs__title">Indonesia</span></a></li></ul><ul class="supported-langs__list" style="height:200px"><li class="supported-langs__item"><a class="supported-langs__link" href="https://it.javascript.info/while-for"><span class="supported-langs__brief">IT</span><span class="supported-langs__title">Italiano</span></a></li><li class="supported-langs__item"><a class="supported-langs__link" href="https://ja.javascript.info/while-for"><span class="supported-langs__brief">JA</span><span class="supported-langs__title">日本語</span></a></li><li class="supported-langs__item"><a class="supported-langs__link" href="https://ko.javascript.info/while-for"><span class="supported-langs__brief">KO</span><span class="supported-langs__title">한국어</span></a></li><li class="supported-langs__item"><a class="supported-langs__link" href="https://learn.javascript.ru/while-for"><span class="supported-langs__brief">RU</span><span class="supported-langs__title">Русский</span></a></li><li class="supported-langs__item"><a class="supported-langs__link" href="https://tr.javascript.info/while-for"><span class="supported-langs__brief">TR</span><span class="supported-langs__title">Türkçe</span></a></li><li class="supported-langs__item"><a class="supported-langs__link" href="https://uk.javascript.info/while-for"><span class="supported-langs__brief">UK</span><span class="supported-langs__title">Українська</span></a></li></ul><ul class="supported-langs__list" style="height:20px"><li class="supported-langs__item"><a class="supported-langs__link" href="https://zh.javascript.info/while-for"><span class="supported-langs__brief">ZH</span><span class="supported-langs__title">简体中文</span></a></li></ul></div><div class="supported-langs__text"><p>We want to make this open-source project available for people all around the world.</p> <p><a href="https://javascript.info/translate">Help to translate</a> the content of this tutorial to your language!</p>
    </div></div></div></div></div></div><div class="sitetoolbar__logo-wrap"><a class="sitetoolbar__link sitetoolbar__link_logo" href="/"><img class="sitetoolbar__logo sitetoolbar__logo_normal" src="/img/sitetoolbar__logo_en.svg" width="200" alt="" role="presentation" /><img class="sitetoolbar__logo sitetoolbar__logo_normal sitetoolbar__logo_dark" src="/img/sitetoolbar__logo_en-white.svg" width="200" alt="" role="presentation" /><img class="sitetoolbar__logo sitetoolbar__logo_small" src="/img/sitetoolbar__logo_small_en.svg" width="70" alt="" role="presentation" /><img class="sitetoolbar__logo sitetoolbar__logo_small sitetoolbar__logo_dark" src="/img/sitetoolbar__logo_small_en-white.svg" width="70" alt="" role="presentation" /><script>Array.prototype.forEach.call(document.querySelectorAll("img.sitetoolbar__logo"),function(e){let t=document.createElement("object");t.type="image/svg+xml",t.className=e.className,t.style.cssText="left:0;top:0;position:absolute",t.onload=function(){t.onload = null, e.style.visibility = "hidden"},t.data=e.src,e.parentNode.insertBefore(t,e)});</script></a></div><div class="sitetoolbar__nav-toggle-wrap"><button class="sitetoolbar__nav-toggle" type="button"></button></div><nav class="sitetoolbar__sections"><ul class="sitetoolbar__sections-list"></ul></nav><div class="sitetoolbar__right-button-wrap"><a class="sitetoolbar-right-button sitetoolbar-right-button_courses" href="https://github.com/sponsors/iliakan" rel="nofollow"><svg style="margin-bottom:-4px" height="20" width="20" viewBox="0 1028.4 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z" fill="#c0392b" /></svg></a></div><div class="sitetoolbar__right-button-wrap"><a class="sitetoolbar-right-button sitetoolbar-right-button_courses" href="/ebook"><span class="sitetoolbar-right-button__extra-text">Buy</span>EPUB/PDF</a></div><div class="sitetoolbar__login-wrap"><button class="sitetoolbar__login sitetoolbar__login_unready" data-action-login></button></div><div class="sitetoolbar__theme-switcher"><div class="theme-changer"><label class="theme-changer__label" for="theme-changer-input" data-tooltip="Change theme"><input class="theme-changer__input" type="checkbox" id="theme-changer-input" data-theme-changer="data-theme-changer" /><span class="theme-changer__icon theme-changer__icon_light-theme"></span><span class="theme-changer__icon theme-changer__icon_dark-theme"></span></label></div></div><div class="sitetoolbar__search-wrap"><div class="sitetoolbar__search-content"><button class="sitetoolbar__search-toggle" type="button"></button><form class="sitetoolbar__search" method="GET" action="/search"><div class="sitetoolbar__search-input"><div class="text-input"><input class="text-input__control" name="query" placeholder="Search on Javascript.info" required="required" type="text" /></div><button class="sitetoolbar__find" type="submit">Search</button></div></form></div></div></div><div class="tablet-menu"><div class="tablet-menu__line"><div class="tablet-menu__content"><form class="tablet-menu-search" action="/search/"><input class="tablet-menu-search__input" type="search" name="query" placeholder="Search in the tutorial" required="required" /><button class="tablet-menu-search__button" type="submit" name="type" value="articles">Search</button></form></div></div><div class="tablet-menu__line"><div class="tablet-menu__content"><a class="map" href="/tutorial/map" data-action="tutorial-map"><span class="map__text">Tutorial map</span></a></div></div><div class="tablet-menu__line"><div class="tablet-menu__content"><div class="theme-changer theme-changer_tablet-menu theme-changer_has-label"><label class="theme-changer__label" for="theme-changer-input-tablet" data-tooltip="Change theme"><input class="theme-changer__input" type="checkbox" id="theme-changer-input-tablet" data-theme-changer="data-theme-changer" /><span class="theme-changer__icon theme-changer__icon_light-theme"></span><span class="theme-changer__icon theme-changer__icon_dark-theme"></span><span class="theme-changer__label-text theme-changer__label-text_light-theme">Light theme</span><span class="theme-changer__label-text theme-changer__label-text_dark-theme">Dark theme</span></label></div></div></div><div class="tablet-menu__line"><div class="tablet-menu__content"><div class="share-icons"><span class="share-icons__title">Share</span><a class="share share_tw" href="https://twitter.com/share?url=https%3A%2F%2Fjavascript.info%2Fwhile-for" rel="nofollow"></a><a class="share share_fb" href="https://www.facebook.com/sharer/sharer.php?s=100&amp;p%5Burl%5D=https%3A%2F%2Fjavascript.info%2Fwhile-for" rel="nofollow"></a></div></div></div><div class="tablet-menu__line"><div class="tablet-menu__content"><select class="tablet-menu__nav input-select input-select input-select_small" onchange="if(this.value) window.location.href=this.value"><option value="https://ar.javascript.info/while-for">عربي</option><option value="https://javascript.info/while-for" selected>English</option><option value="https://es.javascript.info/while-for">Español</option><option value="https://fa.javascript.info/while-for">فارسی</option><option value="https://fr.javascript.info/while-for">Français</option><option value="https://id.javascript.info/while-for">Indonesia</option><option value="https://it.javascript.info/while-for">Italiano</option><option value="https://ja.javascript.info/while-for">日本語</option><option value="https://ko.javascript.info/while-for">한국어</option><option value="https://learn.javascript.ru/while-for">Русский</option><option value="https://tr.javascript.info/while-for">Türkçe</option><option value="https://uk.javascript.info/while-for">Українська</option><option value="https://zh.javascript.info/while-for">简体中文</option></select></div></div></div><progress class="tutorial-progress" data-sticky value="17" max="94" data-tooltip="Lesson 17 of 94"></progress></div><div class="page page_sidebar_on page_inner_padding"><script>if(localStorage.noSidebar){document.querySelector(".page").classList.remove("page_sidebar_on");let e=document.querySelector(".page-wrapper");e&&e.classList.remove("page-wrapper_sidebar_on")}setTimeout(function(){document.querySelector(".page").classList.add("page_sidebar-animation-on")});</script><div class="page__inner"><main class="main main_width-limit"><header class="main__header"><div class="main__header-inner"><div class="main__header-group"><ol class="breadcrumbs"><li class="breadcrumbs__item breadcrumbs__item_home"><a class="breadcrumbs__link" href="/"><span class="breadcrumbs__hidden-text">Tutorial</span></a></li><li class="breadcrumbs__item" id="breadcrumb-1"><a class="breadcrumbs__link" href="/js"><span>The JavaScript language</span></a></li><li class="breadcrumbs__item" id="breadcrumb-2"><a class="breadcrumbs__link" href="/first-steps"><span>JavaScript Fundamentals</span></a></li><script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Tutorial","item":"https://javascript.info/"},{"@type":"ListItem","position":2,"name":"The JavaScript language","item":"https://javascript.info/js"},{"@type":"ListItem","position":3,"name":"JavaScript Fundamentals","item":"https://javascript.info/first-steps"}]}</script></ol><div class="updated-at" data-tooltip="Last updated on June 19, 2022"><div class="updated-at__content">June 19, 2022</div></div></div><h1 class="main__header-title">Loops: while and for</h1></div></header><div class="content"><article class="formatted" itemscope itemtype="http://schema.org/TechArticle"><meta itemprop="name" content="Loops: while and for"><div itemprop="author" itemscope itemtype="http://schema.org/Person"><meta itemprop="email" content="iliakan@gmail.com"><meta itemprop="name" content="Ilya Kantor"></div><div itemprop="articleBody"><p>We often need to repeat actions.</p>
        <p>For example, outputting goods from a list one after another or just running the same code for each number from 1 to 10.</p>
        <p><em>Loops</em> are a way to repeat the same code multiple times.</p>
        <div class="important important_smart">
            <div class="important__header"><span class="important__type">The for…of and for…in loops</span></div>
            <div class="important__content"><p>A small announcement for advanced readers.</p>
                <p>This article covers only basic loops: <code>while</code>, <code>do..while</code> and <code>for(..;..;..)</code>.</p>
                <p>If you came to this article searching for other types of loops, here are the pointers:</p>
                <ul>
                    <li>See <a href="/object#forin">for…in</a> to loop over object properties.</li>
                    <li>See <a href="/array#loops">for…of</a> and <a href="/iterable">iterables</a> for looping over arrays and iterable objects.</li>
                </ul>
                <p>Otherwise, please read on.</p>
            </div></div>
        <h2><a class="main__anchor" name="the-while-loop" href="#the-while-loop">The “while” loop</a></h2><p>The <code>while</code> loop has the following syntax:</p>
        <div id="330hf18s0c" data-tr
            <div class="codebox code-example__codebox">

                <div class="codebox__code" data-code="1">
                    <pre class="line-numbers language-javascript"><code>while (condition) {
                        // code
                        // so-called &quot;loop body&quot;
                    }</code></pre>
                </div>
            </div>

        </div><p>While the <code>condition</code> is truthy, the <code>code</code> from the loop body is executed.</p>
        <p>For instance, the loop below outputs <code>i</code> while <code>i &lt; 3</code>:</p>
        <div id="fxhm53daqu" data-trusted="1" class="code-example">
            <div class="codebox code-example__codebox">

                <div class="toolbar codebox__toolbar">
                    <div class="toolbar__tool">
                        <a href="#" title="run" data-action="run" class="toolbar__button toolbar__button_run"></a>
                    </div>
                    <div class="toolbar__tool">
                        <a href="#" title="open in sandbox" target="_blank" data-action="edit" class="toolbar__button toolbar__button_edit"></a>
                    </div>
                </div>
                <div class="codebox__code" data-code="1">
                    <pre class="line-numbers language-javascript"><code>let i = 0;
                        while (i &lt; 3) { // shows 0, then 1, then 2
                            alert(i);
                        i++;
}</code></pre>
                </div>
            </div>

        </div><p>A single execution of the loop body is called <em>an iteration</em>. The loop in the example above makes three iterations.</p>
        <p>If <code>i++</code> was missing from the example above, the loop would repeat (in theory) forever. In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.</p>
        <p>Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by <code>while</code>.</p>
        <p>For instance, a shorter way to write <code>while (i != 0)</code> is <code>while (i)</code>:</p>
        <div id="xfcqa735xc" data-trusted="1" class="code-example" data-highlight="[{&quot;start&quot;:1,&quot;end&quot;:1}]">
            <div class="codebox code-example__codebox">

                <div class="toolbar codebox__toolbar">
                    <div class="toolbar__tool">
                        <a href="#" title="run" data-action="run" class="toolbar__button toolbar__button_run"></a>
                    </div>
                    <div class="toolbar__tool">
                        <a href="#" title="open in sandbox" target="_blank" data-action="edit" class="toolbar__button toolbar__button_edit"></a>
                    </div>
                </div>
                <div class="codebox__code" data-code="1">
                    <pre class="line-numbers language-javascript"><code>let i = 3;
                        while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
                            alert(i);
                        i--;
}</code></pre>
                </div>
            </div>

        </div><div class="important important_smart">
            <div class="important__header"><span class="important__type">Curly braces are not required for a single-line body</span></div>
            <div class="important__content"><p>If the loop body has a single statement, we can omit the curly braces <code>{…}</code>:</p>
                <div id="9wswipe84a" data-trusted="1" class="code-example" data-highlight="[{&quot;start&quot;:1,&quot;end&quot;:1}]">
                    <div class="codebox code-example__codebox">

                        <div class="toolbar codebox__toolbar">
                            <div class="toolbar__tool">
                                <a href="#" title="run" data-action="run" class="toolbar__button toolbar__button_run"></a>
                            </div>
                            <div class="toolbar__tool">
                                <a href="#" title="open in sandbox" target="_blank" data-action="edit" class="toolbar__button toolbar__button_edit"></a>
                            </div>
                        </div>
                        <div class="codebox__code" data-code="1">
                            <pre class="line-numbers language-javascript"><code>let i = 3;
                                while (i) alert(i--);</code></pre>
                        </div>
                    </div>

                </div></div></div>
        <h2><a class="main__anchor" name="the-do-while-loop" href="#the-do-while-loop">The “do…while” loop</a></h2><p>The condition check can be moved <em>below</em> the loop body using the <code>do..while</code> syntax:</p>
        <div id="g16afxwvp2" data-trusted="1" class="code-example">
            <div class="codebox code-example__codebox">

                <div class="codebox__code" data-code="1">
                    <pre class="line-numbers language-javascript"><code>do {
                        // loop body
                    } while (condition);</code></pre>
                </div>
            </div>

        </div><p>The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.</p>
        <p>For example:</p>
        <div id="m0xyll9mu6" data-trusted="1" class="code-example">
            <div class="codebox code-example__codebox">

                <div class="toolbar codebox__toolbar">
                    <div class="toolbar__tool">
                        <a href="#" title="run" data-action="run" class="toolbar__button toolbar__button_run"></a>
                    </div>
                    <div class="toolbar__tool">
                        <a href="#" title="open in sandbox" target="_blank" data-action="edit" class="toolbar__button toolbar__button_edit"></a>
                    </div>
                </div>
                <div class="codebox__code" data-code="1">
                    <pre class="line-numbers language-javascript"><code>let i = 0;
                        do {
                            alert(i);
                        i++;
} while (i &lt; 3);</code></pre>
                </div>
            </div>

        </div><p>This form of syntax should only be used when you want the body of the loop to execute <strong>at least once</strong> regardless of the condition being truthy. Usually, the other form is preferred: <code>while(…) {…}</code>.</p>
        <h2><a class="main__anchor" name="the-for-loop" href="#the-for-loop">The “for” loop</a></h2><p>The <code>for</code> loop is more complex, but it’s also the most commonly used loop.</p>
        <p>It looks like this:</p>
        <div id="ri28u5iyfo" data-trusted="1" class="code-example">
            <div class="codebox code-example__codebox">

                <div class="codebox__code" data-code="1">
                    <pre class="line-numbers language-javascript"><code>for (begin; condition; step) {
                        // ... loop body ...
                    }</code></pre>
                </div>
            </div>

        </div><p>Let’s learn the meaning of these parts by example. The loop below runs <code>alert(i)</code> for <code>i</code> from <code>0</code> up to (but not including) <code>3</code>:</p>
        <div id="74c5zcr2ig" data-trusted="1" class="code-example">
            <div class="codebox code-example__codebox">

                <div class="toolbar codebox__toolbar">
                    <div class="toolbar__tool">
                        <a href="#" title="run" data-action="run" class="toolbar__button toolbar__button_run"></a>
                    </div>
                    <div class="toolbar__tool">
                        <a href="#" title="open in sandbox" target="_blank" data-action="edit" class="toolbar__button toolbar__button_edit"></a>
                    </div>
                </div>
                <div class="codebox__code" data-code="1">
                    <pre class="line-numbers language-javascript"><code>for (let i = 0; i &lt; 3; i++) { // shows 0, then 1, then 2
                        alert(i);
}</code></pre>
                </div>
            </div>

        </div><p>Let’s examine the <code>for</code> statement part-by-part:</p>
        <table>
            <thead>
                <tr>
                    <th>part</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>begin</td>
                    <td><code>let i = 0</code></td>
                    <td>Executes once upon entering the loop.</td>
                </tr>
                <tr>
                    <td>condition</td>
                    <td><code>i &lt; 3</code></td>
                    <td>Checked before every loop iteration. If false, the loop stops.</td>
                </tr>
                <tr>
                    <td>body</td>
                    <td><code>alert(i)</code></td>
                    <td>Runs again and again while the condition is truthy.</td>
                </tr>
                <tr>
                    <td>step</td>
                    <td><code>i++</code></td>
                    <td>Executes after the body on each iteration.</td>
                </tr>
            </tbody>
        </table>
        <p>The general loop algorithm works like this:</p>
        <div id="5gahhr90xz" data-trusted="1" class="code-example">
            <div class="codebox code-example__codebox">

                <div class="codebox__code" data-code="1">
                    <pre class="line-numbers language-none"><code>Run begin
                        → (if condition → run body and run step)
                        → (if condition → run body and run step)
                        → (if condition → run body and run step)
                        → ...</code></pre>
                </div>
            </div>

        </div><p>That is, <code>begin</code> executes once, and then it iterates: after each <code>condition</code> test, <code>body</code> and <code>step</code> are executed.</p>
        <p>If you are new to loops, it could help to go back to the example and reproduce how it runs step-by-step on a piece of paper.</p>
        <p>Here’s exactly what happens in our case:</p>
        <div id="4lccj01hup" data-trusted="1" class="code-example">
            <div class="codebox code-example__codebox">

                <div class="codebox__code" data-code="1">
                    <pre class="line-numbers language-javascript"><code>// for (let i = 0; i &lt; 3; i++) alert(i)

                        // run begin
                        let i = 0
                        // if condition → run body and run step
                        if (i &lt; 3) {alert(i); i++ }
                        // if condition → run body and run step
                        if (i &lt; 3) {alert(i); i++ }
                        // if condition → run body and run step
                        if (i &lt; 3) {alert(i); i++ }
// ...finish, because now i == 3</code></pre>
                </div>
            </div>

        </div><div class="important important_smart">
            <div class="important__header"><span class="important__type">Inline variable declaration</span></div>
            <div class="important__content"><p>Here, the “counter” variable <code>i</code> is declared right in the loop. This is called an “inline” variable declaration. Such variables are visible only inside the loop.</p>
                <div id="scefienr6z" data-trusted="1" class="code-example" data-highlight="[{&quot;start&quot;:0,&quot;cols&quot;:[{&quot;start&quot;:5,&quot;end&quot;:8}]}]">
                    <div class="codebox code-example__codebox">

                        <div class="toolbar codebox__toolbar">
                            <div class="toolbar__tool">
                                <a href="#" title="run" data-action="run" class="toolbar__button toolbar__button_run"></a>
                            </div>
                            <div class="toolbar__tool">
                                <a href="#" title="open in sandbox" target="_blank" data-action="edit" class="toolbar__button toolbar__button_edit"></a>
                            </div>
                        </div>
                        <div class="codebox__code" data-code="1">
                            <pre class="line-numbers language-javascript"><code>for (let i = 0; i &lt; 3; i++) {
                                alert(i); // 0, 1, 2
}
                                alert(i); // error, no such variable</code></pre>
                        </div>
                    </div>

                </div><p>Instead of defining a variable, we could use an existing one:</p>
                <div id="yavyahcbrx" data-trusted="1" class="code-example">
                    <div class="codebox code-example__codebox">

                        <div class="toolbar codebox__toolbar">
                            <div class="toolbar__tool">
                                <a href="#" title="run" data-action="run" class="toolbar__button toolbar__button_run"></a>
                            </div>
                            <div class="toolbar__tool">
                                <a href="#" title="open in sandbox" target="_blank" data-action="edit" class="toolbar__button toolbar__button_edit"></a>
                            </div>
                        </div>
                        <div class="codebox__code" data-code="1">
                            <pre class="line-numbers language-javascript"><code>let i = 0;

                                for (i = 0; i &lt; 3; i++) { // use an existing variable
                                    alert(i); // 0, 1, 2
}

                                alert(i); // 3, visible, because declared outside of the loop</code></pre>
                        </div>
                    </div>

                </div></div></div>
        <h3><a class="main__anchor" name="skipping-parts" href="#skipping-parts">Skipping parts</a></h3><p>Any part of <code>for</code> can be skipped.</p>
        <p>For example, we can omit <code>begin</code> if we don’t need to do anything at the loop start.</p>
        <p>Like here:</p>
        <div id="da8qc77oi4" data-trusted="1" class="code-example">
            <div class="codebox code-example__codebox">

                <div class="toolbar codebox__toolbar">
                    <div class="toolbar__tool">
                        <a href="#" title="run" data-action="run" class="toolbar__button toolbar__button_run"></a>
                    </div>
                    <div class="toolbar__tool">
                        <a href="#" title="open in sandbox" target="_blank" data-action="edit" class="toolbar__button toolbar__button_edit"></a>
                    </div>
                </div>
                <div class="codebox__code" data-code="1">
                    <pre class="line-numbers language-javascript"><code>let i = 0; // we have i already declared and assigned

                        for (; i &lt; 3; i++) { // no need for &quot;begin&quot;
                            alert(i); // 0, 1, 2
}</code></pre>
                </div>
            </div>

        </div><p>We can also remove the <code>step</code> part:</p>
        <div id="btoxn3z48y" data-trusted="1" class="code-example">
            <div class="codebox code-example__codebox">

                <div class="toolbar codebox__toolbar">
                    <div class="toolbar__tool">
                        <a href="#" title="run" data-action="run" class="toolbar__button toolbar__button_run"></a>
                    </div>
                    <div class="toolbar__tool">
                        <a href="#" title="open in sandbox" target="_blank" data-action="edit" class="toolbar__button toolbar__button_edit"></a>
                    </div>
                </div>
                <div class="codebox__code" data-code="1">
                    <pre class="line-numbers language-javascript"><code>let i = 0;

                        for (; i &lt; 3;) {
                            alert(i++);
}</code></pre>
                </div>
            </div>

        </div><p>This makes the loop identical to <code>while (i &lt; 3)</code>.</p>
        <p>We can actually remove everything, creating an infinite loop:</p>
        <div id="42bsibbnxn" data-trusted="1" class="code-example">
            <div class="codebox code-example__codebox">

                <div class="codebox__code" data-code="1">
                    <pre class="line-numbers language-javascript"><code>for (;;) {
                        // repeats without limits
                    }</code></pre>
                </div>
            </div>

        </div><p>Please note that the two <code>for</code> semicolons <code>;</code> must be present. Otherwise, there would be a syntax error.</p>
        <h2><a class="main__anchor" name="breaking-the-loop" href="#breaking-the-loop">Breaking the loop</a></h2><p>Normally, a loop exits when its condition becomes falsy.</p>
        <p>But we can force the exit at any time using the special <code>break</code> directive.</p>
        <p>For example, the loop below asks the user for a series of numbers, “breaking” when no number is entered:</p>
        <div id="zxfz7g91wz" data-trusted="1" class="code-example" data-highlight="[{&quot;start&quot;:6,&quot;end&quot;:6}]">
            <div class="codebox code-example__codebox">

                <div class="toolbar codebox__toolbar">
                    <div class="toolbar__tool">
                        <a href="#" title="run" data-action="run" class="toolbar__button toolbar__button_run"></a>
                    </div>
                    <div class="toolbar__tool">
                        <a href="#" title="open in sandbox" target="_blank" data-action="edit" class="toolbar__button toolbar__button_edit"></a>
                    </div>
                </div>
                <div class="codebox__code" data-code="1">
                    <pre class="line-numbers language-javascript"><code>let sum = 0;

                        while (true) {

                            let value = +prompt(&quot;Enter a number&quot;, '');

                        if (!value) break; // (*)

                        sum += value;

}
                        alert( 'Sum: ' + sum );</code></pre>
                </div>
            </div>

        </div><p>The <code>break</code> directive is activated at the line <code>(*)</code> if the user enters an empty line or cancels the input. It stops the loop immediately, passing control to the first line after the loop. Namely, <code>alert</code>.</p>
        <p>The combination “infinite loop + <code>break</code> as needed” is great for situations when a loop’s condition must be checked not in the beginning or end of the loop, but in the middle or even in several places of its body.</p>
        <h2><a class="main__anchor" name="continue" href="#continue">Continue to the next iteration</a></h2><p>The <code>continue</code> directive is a “lighter version” of <code>break</code>. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).</p>
        <p>We can use it if we’re done with the current iteration and would like to move on to the next one.</p>
        <p>The loop below uses <code>continue</code> to output only odd values:</p>
        <div id="6yr6p7adqd" data-trusted="1" class="code-example" data-highlight="[{&quot;start&quot;:3,&quot;cols&quot;:[{&quot;start&quot;:2,&quot;end&quot;:27}]}]">
            <div class="codebox code-example__codebox">

                <div class="toolbar codebox__toolbar">
                    <div class="toolbar__tool">
                        <a href="#" title="run" data-action="run" class="toolbar__button toolbar__button_run"></a>
                    </div>
                    <div class="toolbar__tool">
                        <a href="#" title="open in sandbox" target="_blank" data-action="edit" class="toolbar__button toolbar__button_edit"></a>
                    </div>
                </div>
                <div class="codebox__code" data-code="1">
                    <pre class="line-numbers language-javascript"><code>for (let i = 0; i &lt; 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

                        alert(i); // 1, then 3, 5, 7, 9
}</code></pre>
                </div>
            </div>

        </div><p>For even values of <code>i</code>, the <code>continue</code> directive stops executing the body and passes control to the next iteration of <code>for</code> (with the next number). So the <code>alert</code> is only called for odd values.</p>
        <div class="important important_smart">
            <div class="important__header"><span class="important__type">The <code>continue</code> directive helps decrease nesting</span></div>
            <div class="important__content"><p>A loop that shows odd values could look like this:</p>
                <div id="w05jrscwag" data-trusted="1" class="code-example">
                    <div class="codebox code-example__codebox">

                        <div class="toolbar codebox__toolbar">
                            <div class="toolbar__tool">
                                <a href="#" title="run" data-action="run" class="toolbar__button toolbar__button_run"></a>
                            </div>
                            <div class="toolbar__tool">
                                <a href="#" title="open in sandbox" target="_blank" data-action="edit" class="toolbar__button toolbar__button_edit"></a>
                            </div>
                        </div>
                        <div class="codebox__code" data-code="1">
                            <pre class="line-numbers language-javascript"><code>for (let i = 0; i &lt; 10; i++) {

  if (i % 2) {
                                    alert(i);
  }

}</code></pre>
                        </div>
                    </div>

                </div><p>From a technical point of view, this is identical to the example above. Surely, we can just wrap the code in an <code>if</code> block instead of using <code>continue</code>.</p>
                <p>But as a side effect, this created one more level of nesting (the <code>alert</code> call inside the curly braces). If the code inside of <code>if</code> is longer than a few lines, that may decrease the overall readability.</p>
            </div></div>
        <div class="important important_warn">
            <div class="important__header"><span class="important__type">No <code>break/continue</code> to the right side of ‘?’</span></div>
            <div class="important__content"><p>Please note that syntax constructs that are not expressions cannot be used with the ternary operator <code>?</code>. In particular, directives such as <code>break/continue</code> aren’t allowed there.</p>
                <p>For example, if we take this code:</p>
                <div id="oj2yq201vv" data-trusted="1" class="code-example">
                    <div class="codebox code-example__codebox">

                        <div class="codebox__code" data-code="1">
                            <pre class="line-numbers language-javascript"><code>if (i &gt; 5) {
                                alert(i);
} else {
  continue;
}</code></pre>
                        </div>
                    </div>

                </div><p>…and rewrite it using a question mark:</p>
                <div id="vg77om6iln" data-trusted="1" class="code-example" data-highlight="[{&quot;start&quot;:0,&quot;cols&quot;:[{&quot;start&quot;:21,&quot;end&quot;:29}]}]">
                    <div class="codebox code-example__codebox">

                        <div class="codebox__code" data-code="1">
                            <pre class="line-numbers language-javascript"><code>(i &gt; 5) ? alert(i) : continue; // continue isn't allowed here</code></pre>
                        </div>
                    </div>

                </div><p>…it stops working: there’s a syntax error.</p>
                <p>This is just another reason not to use the question mark operator <code>?</code> instead of <code>if</code>.</p>
            </div></div>
        <h2><a class="main__anchor" name="labels-for-break-continue" href="#labels-for-break-continue">Labels for break/continue</a></h2><p>Sometimes we need to break out from multiple nested loops at once.</p>
        <p>For example, in the code below we loop over <code>i</code> and <code>j</code>, prompting for the coordinates <code>(i, j)</code> from <code>(0,0)</code> to <code>(2,2)</code>:</p>
        <div id="gqsn4myq4s" data-trusted="1" class="code-example">
            <div class="codebox code-example__codebox">

                <div class="toolbar codebox__toolbar">
                    <div class="toolbar__tool">
                        <a href="#" title="run" data-action="run" class="toolbar__button toolbar__button_run"></a>
                    </div>
                    <div class="toolbar__tool">
                        <a href="#" title="open in sandbox" target="_blank" data-action="edit" class="toolbar__button toolbar__button_edit"></a>
                    </div>
                </div>
                <div class="codebox__code" data-code="1">
                    <pre class="line-numbers language-javascript"><code>for (let i = 0; i &lt; 3; i++) {

  for (let j = 0; j &lt; 3; j++) {

                            let input = prompt(`Value at coords (${i},${j})`, '');

    // what if we want to exit from here to Done (below)?
  }
}

                        alert('Done!');</code></pre>
                </div>
            </div>

        </div><p>We need a way to stop the process if the user cancels the input.</p>
        <p>The ordinary <code>break</code> after <code>input</code> would only break the inner loop. That’s not sufficient – labels, come to the rescue!</p>
        <p>A <em>label</em> is an identifier with a colon before a loop:</p>
        <div id="0mmjlwinoe" data-trusted="1" class="code-example">
            <div class="codebox code-example__codebox">

                <div class="codebox__code" data-code="1">
                    <pre class="line-numbers language-javascript"><code>labelName: for (...) {
                        ...
}</code></pre>
                </div>
            </div>

        </div><p>The <code>break &lt;labelName&gt;</code> statement in the loop below breaks out to the label:</p>
        <div id="1ihsr1dy7k" data-trusted="1" class="code-example" data-highlight="[{&quot;start&quot;:7,&quot;cols&quot;:[{&quot;start&quot;:16,&quot;end&quot;:27}]},{&quot;start&quot;:0,&quot;cols&quot;:[{&quot;start&quot;:0,&quot;end&quot;:6}]}]">
            <div class="codebox code-example__codebox">

                <div class="toolbar codebox__toolbar">
                    <div class="toolbar__tool">
                        <a href="#" title="run" data-action="run" class="toolbar__button toolbar__button_run"></a>
                    </div>
                    <div class="toolbar__tool">
                        <a href="#" title="open in sandbox" target="_blank" data-action="edit" class="toolbar__button toolbar__button_edit"></a>
                    </div>
                </div>
                <div class="codebox__code" data-code="1">
                    <pre class="line-numbers language-javascript"><code>outer: for (let i = 0; i &lt; 3; i++) {

  for (let j = 0; j &lt; 3; j++) {

                            let input = prompt(`Value at coords (${i},${j})`, '');

                        // if an empty string or canceled, then break out of both loops
                        if (!input) break outer; // (*)

    // do something with the value...
  }
}

                        alert('Done!');</code></pre>
                </div>
            </div>

        </div><p>In the code above, <code>break outer</code> looks upwards for the label named <code>outer</code> and breaks out of that loop.</p>
        <p>So the control goes straight from <code>(*)</code> to <code>alert('Done!')</code>.</p>
        <p>We can also move the label onto a separate line:</p>
        <div id="hsbkgpbf9w" data-trusted="1" class="code-example">
            <div class="codebox code-example__codebox">

                <div class="codebox__code" data-code="1">
                    <pre class="line-numbers language-javascript"><code>outer:
                        for (let i = 0; i &lt; 3; i++) {... }</code></pre>
                </div>
            </div>

        </div><p>The <code>continue</code> directive can also be used with a label. In this case, code execution jumps to the next iteration of the labeled loop.</p>
        <div class="important important_warn">
            <div class="important__header"><span class="important__type">Labels do not allow to “jump” anywhere</span></div>
            <div class="important__content"><p>Labels do not allow us to jump into an arbitrary place in the code.</p>
                <p>For example, it is impossible to do this:</p>
                <div id="87i0033b5e" data-trusted="1" class="code-example">
                    <div class="codebox code-example__codebox">

                        <div class="codebox__code" data-code="1">
                            <pre class="line-numbers language-javascript"><code>break label; // jump to the label below (doesn't work)

                                label: for (...)</code></pre>
                        </div>
                    </div>

                </div><p>A <code>break</code> directive must be inside a code block. Technically, any labelled code block will do, e.g.:</p>
                <div id="4bfgv7b3jd" data-trusted="1" class="code-example">
                    <div class="codebox code-example__codebox">

                        <div class="codebox__code" data-code="1">
                            <pre class="line-numbers language-javascript"><code>label: {
  // ...
  break label; // works
  // ...
}</code></pre>
                        </div>
                    </div>

                </div><p>…Although, 99.9% of the time <code>break</code> is used inside loops, as we’ve seen in the examples above.</p>
                <p>A <code>continue</code> is only possible from inside a loop.</p>
            </div></div>
        <h2><a class="main__anchor" name="summary" href="#summary">Summary</a></h2><p>We covered 3 types of loops:</p>
        <ul>
            <li><code>while</code> – The condition is checked before each iteration.</li>
            <li><code>do..while</code> – The condition is checked after each iteration.</li>
            <li><code>for (;;)</code> – The condition is checked before each iteration, additional settings available.</li>
        </ul>
        <p>To make an “infinite” loop, usually the <code>while(true)</code> construct is used. Such a loop, just like any other, can be stopped with the <code>break</code> directive.</p>
        <p>If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the <code>continue</code> directive.</p>
        <p><code>break/continue</code> support labels before the loop. A label is the only way for <code>break/continue</code> to escape a nested loop to go to an outer one.</p>
    </div></article><div class="tasks formatted"><h2 class="tasks__title" id="tasks"><a class="tasks__title-anchor main__anchor main__anchor main__anchor_noicon" href="#tasks">Tasks</a></h2><div class="task tasks__task"><div class="task__header"><div class="task__title-wrap"><h3 class="task__title"><a class="main__anchor" href="#last-loop-value" name="last-loop-value">Last loop value</a></h3><a class="task__open-link" href="/task/loop-last-value" target="_blank"></a></div><div class="task__header-note"><span class="task__importance" title="How important is the task, from 1 to 5">importance: 3</span></div><div class="task__content"><div class="task__formatted"><p>What is the last value alerted by this code? Why?</p>
        <div id="7lyenw5ykf" data-trusted="1" class="code-example">
            <div class="codebox code-example__codebox">

                <div class="codebox__code" data-code="1">
                    <pre class="line-numbers language-javascript"><code>let i = 3;

                        while (i) {
                            alert(i--);
}</code></pre>
                </div>
            </div>

        </div></div><button class="task__solution" type="button">solution</button><div class="task__answer"><div class="task__answer-content"><div class="formatted"><p>The answer: <code>1</code>.</p>
            <div id="q9btxei2ht" data-trusted="1" class="code-example">
                <div class="codebox code-example__codebox">

                    <div class="toolbar codebox__toolbar">
                        <div class="toolbar__tool">
                            <a href="#" title="run" data-action="run" class="toolbar__button toolbar__button_run"></a>
                        </div>
                        <div class="toolbar__tool">
                            <a href="#" title="open in sandbox" target="_blank" data-action="edit" class="toolbar__button toolbar__button_edit"></a>
                        </div>
                    </div>
                    <div class="codebox__code" data-code="1">
                        <pre class="line-numbers language-javascript"><code>let i = 3;

                            while (i) {
                                alert(i--);
}</code></pre>
                    </div>
                </div>

            </div><p>Every loop iteration decreases <code>i</code> by <code>1</code>. The check <code>while(i)</code> stops the loop when <code>i = 0</code>.</p>
            <p>Hence, the steps of the loop form the following sequence (“loop unrolled”):</p>
            <div id="vk5ku248ke" data-trusted="1" class="code-example">
                <div class="codebox code-example__codebox">

                    <div class="codebox__code" data-code="1">
                        <pre class="line-numbers language-javascript"><code>let i = 3;

                            alert(i--); // shows 3, decreases i to 2

                            alert(i--) // shows 2, decreases i to 1

                            alert(i--) // shows 1, decreases i to 0

// done, while(i) check stops the loop</code></pre>
                    </div>
                </div>

            </div></div></div><button class="close-button task__answer-close" type="button" title="close"></button></div></div></div></div><div class="task tasks__task"><div class="task__header"><div class="task__title-wrap"><h3 class="task__title"><a class="main__anchor" href="#which-values-does-the-while-loop-show" name="which-values-does-the-while-loop-show">Which values does the while loop show?</a></h3><a class="task__open-link" href="/task/which-value-while" target="_blank"></a></div><div class="task__header-note"><span class="task__importance" title="How important is the task, from 1 to 5">importance: 4</span></div><div class="task__content"><div class="task__formatted"><p>For every loop iteration, write down which value it outputs and then compare it with the solution.</p>
                <p>Both loops <code>alert</code> the same values, or not?</p>
                <ol>
                    <li>
                        <p>The prefix form <code>++i</code>:</p>
                        <div id="eran8yz7kr" data-trusted="1" class="code-example">
                            <div class="codebox code-example__codebox">

                                <div class="codebox__code" data-code="1">
                                    <pre class="line-numbers language-javascript"><code>let i = 0;
                                        while (++i &lt; 5) alert( i );</code></pre>
                                </div>
                            </div>

                        </div></li>
                    <li>
                        <p>The postfix form <code>i++</code></p>
                        <div id="g5856ut7tn" data-trusted="1" class="code-example">
                            <div class="codebox code-example__codebox">

                                <div class="codebox__code" data-code="1">
                                    <pre class="line-numbers language-javascript"><code>let i = 0;
                                        while (i++ &lt; 5) alert( i );</code></pre>
                                </div>
                            </div>

                        </div></li>
                </ol>
            </div><button class="task__solution" type="button">solution</button><div class="task__answer"><div class="task__answer-content"><div class="formatted"><p>The task demonstrates how postfix/prefix forms can lead to different results when used in comparisons.</p>
                <ol>
                    <li>
                        <p><strong>From 1 to 4</strong></p>
                        <div id="tmumlp48zo" data-trusted="1" class="code-example">
                            <div class="codebox code-example__codebox">

                                <div class="toolbar codebox__toolbar">
                                    <div class="toolbar__tool">
                                        <a href="#" title="run" data-action="run" class="toolbar__button toolbar__button_run"></a>
                                    </div>
                                    <div class="toolbar__tool">
                                        <a href="#" title="open in sandbox" target="_blank" data-action="edit" class="toolbar__button toolbar__button_edit"></a>
                                    </div>
                                </div>
                                <div class="codebox__code" data-code="1">
                                    <pre class="line-numbers language-javascript"><code>let i = 0;
                                        while (++i &lt; 5) alert( i );</code></pre>
                                </div>
                            </div>

                        </div><p>The first value is <code>i = 1</code>, because <code>++i</code> first increments <code>i</code> and then returns the new value. So the first comparison is <code>1 &lt; 5</code> and the <code>alert</code> shows <code>1</code>.</p>
                        <p>Then follow <code>2, 3, 4…</code> – the values show up one after another. The comparison always uses the incremented value, because <code>++</code> is before the variable.</p>
                        <p>Finally, <code>i = 4</code> is incremented to <code>5</code>, the comparison <code>while(5 &lt; 5)</code> fails, and the loop stops. So <code>5</code> is not shown.</p>
                    </li>
                    <li>
                        <p><strong>From 1 to 5</strong></p>
                        <div id="yn4x1itvix" data-trusted="1" class="code-example">
                            <div class="codebox code-example__codebox">

                                <div class="toolbar codebox__toolbar">
                                    <div class="toolbar__tool">
                                        <a href="#" title="run" data-action="run" class="toolbar__button toolbar__button_run"></a>
                                    </div>
                                    <div class="toolbar__tool">
                                        <a href="#" title="open in sandbox" target="_blank" data-action="edit" class="toolbar__button toolbar__button_edit"></a>
                                    </div>
                                </div>
                                <div class="codebox__code" data-code="1">
                                    <pre class="line-numbers language-javascript"><code>let i = 0;
                                        while (i++ &lt; 5) alert( i );</code></pre>
                                </div>
                            </div>

                        </div><p>The first value is again <code>i = 1</code>. The postfix form of <code>i++</code> increments <code>i</code> and then returns the <em>old</em> value, so the comparison <code>i++ &lt; 5</code> will use <code>i = 0</code> (contrary to <code>++i &lt; 5</code>).</p>
                        <p>But the <code>alert</code> call is separate. It’s another statement which executes after the increment and the comparison. So it gets the current <code>i = 1</code>.</p>
                        <p>Then follow <code>2, 3, 4…</code></p>
                        <p>Let’s stop on <code>i = 4</code>. The prefix form <code>++i</code> would increment it and use <code>5</code> in the comparison. But here we have the postfix form <code>i++</code>. So it increments <code>i</code> to <code>5</code>, but returns the old value. Hence the comparison is actually <code>while(4 &lt; 5)</code> – true, and the control goes on to <code>alert</code>.</p>
                        <p>The value <code>i = 5</code> is the last one, because on the next step <code>while(5 &lt; 5)</code> is false.</p>
                    </li>
                </ol>
            </div></div><button class="close-button task__answer-close" type="button" title="close"></button></div></div></div></div><div class="task tasks__task"><div class="task__header"><div class="task__title-wrap"><h3 class="task__title"><a class="main__anchor" href="#which-values-get-shown-by-the-for-loop" name="which-values-get-shown-by-the-for-loop">Which values get shown by the &quot;for&quot; loop?</a></h3><a class="task__open-link" href="/task/which-value-for" target="_blank"></a></div><div class="task__header-note"><span class="task__importance" title="How important is the task, from 1 to 5">importance: 4</span></div><div class="task__content"><div class="task__formatted"><p>For each loop write down which values it is going to show. Then compare with the answer.</p>
                <p>Both loops <code>alert</code> same values or not?</p>
                <ol>
                    <li>
                        <p>The postfix form:</p>
                        <div id="h8oq5dmx9a" data-trusted="1" class="code-example">
                            <div class="codebox code-example__codebox">

                                <div class="codebox__code" data-code="1">
                                    <pre class="line-numbers language-javascript"><code>for (let i = 0; i &lt; 5; i++) alert( i );</code></pre>
                                </div>
                            </div>

                        </div></li>
                    <li>
                        <p>The prefix form:</p>
                        <div id="jp944wifiy" data-trusted="1" class="code-example">
                            <div class="codebox code-example__codebox">

                                <div class="codebox__code" data-code="1">
                                    <pre class="line-numbers language-javascript"><code>for (let i = 0; i &lt; 5; ++i) alert( i );</code></pre>
                                </div>
                            </div>

                        </div></li>
                </ol>
            </div><button class="task__solution" type="button">solution</button><div class="task__answer"><div class="task__answer-content"><div class="formatted"><p><strong>The answer: from <code>0</code> to <code>4</code> in both cases.</strong></p>
                <div id="454qko8uvd" data-trusted="1" class="code-example">
                    <div class="codebox code-example__codebox">

                        <div class="toolbar codebox__toolbar">
                            <div class="toolbar__tool">
                                <a href="#" title="run" data-action="run" class="toolbar__button toolbar__button_run"></a>
                            </div>
                            <div class="toolbar__tool">
                                <a href="#" title="open in sandbox" target="_blank" data-action="edit" class="toolbar__button toolbar__button_edit"></a>
                            </div>
                        </div>
                        <div class="codebox__code" data-code="1">
                            <pre class="line-numbers language-javascript"><code>for (let i = 0; i &lt; 5; ++i) alert( i );

                                for (let i = 0; i &lt; 5; i++) alert( i );</code></pre>
                        </div>
                    </div>

                </div><p>That can be easily deducted from the algorithm of <code>for</code>:</p>
                <ol>
                    <li>Execute once <code>i = 0</code> before everything (begin).</li>
                    <li>Check the condition <code>i &lt; 5</code></li>
                    <li>If <code>true</code> – execute the loop body <code>alert(i)</code>, and then <code>i++</code></li>
                </ol>
                <p>The increment <code>i++</code> is separated from the condition check (2). That’s just another statement.</p>
                <p>The value returned by the increment is not used here, so there’s no difference between <code>i++</code> and <code>++i</code>.</p>
            </div></div><button class="close-button task__answer-close" type="button" title="close"></button></div></div></div></div><div class="task tasks__task"><div class="task__header"><div class="task__title-wrap"><h3 class="task__title"><a class="main__anchor" href="#output-even-numbers-in-the-loop" name="output-even-numbers-in-the-loop">Output even numbers in the loop</a></h3><a class="task__open-link" href="/task/for-even" target="_blank"></a></div><div class="task__header-note"><span class="task__importance" title="How important is the task, from 1 to 5">importance: 5</span></div><div class="task__content"><div class="task__formatted"><p>Use the <code>for</code> loop to output even numbers from <code>2</code> to <code>10</code>.</p>
                <p><a href="#" onclick="event.preventDefault(); runDemo(this)">Run the demo</a></p></div><button class="task__solution" type="button">solution</button><div class="task__answer"><div class="task__answer-content"><div class="formatted"><div id="o5upc1ku3k" data-trusted="1" class="code-example" data-demo="1">
                    <div class="codebox code-example__codebox">

                        <div class="toolbar codebox__toolbar">
                            <div class="toolbar__tool">
                                <a href="#" title="run" data-action="run" class="toolbar__button toolbar__button_run"></a>
                            </div>
                            <div class="toolbar__tool">
                                <a href="#" title="open in sandbox" target="_blank" data-action="edit" class="toolbar__button toolbar__button_edit"></a>
                            </div>
                        </div>
                        <div class="codebox__code" data-code="1">
                            <pre class="line-numbers language-javascript"><code>for (let i = 2; i &lt;= 10; i++) {
  if (i % 2 == 0) {
                                    alert(i);
  }
}</code></pre>
                        </div>
                    </div>

                </div><p>We use the “modulo” operator <code>%</code> to get the remainder and check for the evenness here.</p>
                </div></div><button class="close-button task__answer-close" type="button" title="close"></button></div></div></div></div><div class="task tasks__task"><div class="task__header"><div class="task__title-wrap"><h3 class="task__title"><a class="main__anchor" href="#replace-for-with-while" name="replace-for-with-while">Replace &quot;for&quot; with &quot;while&quot;</a></h3><a class="task__open-link" href="/task/replace-for-while" target="_blank"></a></div><div class="task__header-note"><span class="task__importance" title="How important is the task, from 1 to 5">importance: 5</span></div><div class="task__content"><div class="task__formatted"><p>Rewrite the code changing the <code>for</code> loop to <code>while</code> without altering its behavior (the output should stay same).</p>
                    <div id="0wagc5w4l4" data-trusted="1" class="code-example">
                        <div class="codebox code-example__codebox">

                            <div class="toolbar codebox__toolbar">
                                <div class="toolbar__tool">
                                    <a href="#" title="run" data-action="run" class="toolbar__button toolbar__button_run"></a>
                                </div>
                                <div class="toolbar__tool">
                                    <a href="#" title="open in sandbox" target="_blank" data-action="edit" class="toolbar__button toolbar__button_edit"></a>
                                </div>
                            </div>
                            <div class="codebox__code" data-code="1">
                                <pre class="line-numbers language-javascript"><code>for (let i = 0; i &lt; 3; i++) {
                                    alert(`number ${i}!`);
}</code></pre>
                            </div>
                        </div>

                    </div></div><button class="task__solution" type="button">solution</button><div class="task__answer"><div class="task__answer-content"><div class="formatted"><div id="5dils0bmpu" data-trusted="1" class="code-example">
                        <div class="codebox code-example__codebox">

                            <div class="toolbar codebox__toolbar">
                                <div class="toolbar__tool">
                                    <a href="#" title="run" data-action="run" class="toolbar__button toolbar__button_run"></a>
                                </div>
                                <div class="toolbar__tool">
                                    <a href="#" title="open in sandbox" target="_blank" data-action="edit" class="toolbar__button toolbar__button_edit"></a>
                                </div>
                            </div>
                            <div class="codebox__code" data-code="1">
                                <pre class="line-numbers language-javascript"><code>let i = 0;
                                    while (i &lt; 3) {
                                        alert(`number ${i}!`);
                                    i++;
}</code></pre>
                            </div>
                        </div>

                    </div></div></div><button class="close-button task__answer-close" type="button" title="close"></button></div></div></div></div><div class="task tasks__task"><div class="task__header"><div class="task__title-wrap"><h3 class="task__title"><a class="main__anchor" href="#repeat-until-the-input-is-correct" name="repeat-until-the-input-is-correct">Repeat until the input is correct</a></h3><a class="task__open-link" href="/task/repeat-until-correct" target="_blank"></a></div><div class="task__header-note"><span class="task__importance" title="How important is the task, from 1 to 5">importance: 5</span></div><div class="task__content"><div class="task__formatted"><p>Write a loop which prompts for a number greater than <code>100</code>. If the visitor enters another number – ask them to input again.</p>
                        <p>The loop must ask for a number until either the visitor enters a number greater than <code>100</code> or cancels the input/enters an empty line.</p>
                        <p>Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.</p>
                        <p><a href="#" onclick="event.preventDefault(); runDemo(this)">Run the demo</a></p></div><button class="task__solution" type="button">solution</button><div class="task__answer"><div class="task__answer-content"><div class="formatted"><div id="7p9t01xirr" data-trusted="1" class="code-example" data-demo="1">
                            <div class="codebox code-example__codebox">

                                <div class="toolbar codebox__toolbar">
                                    <div class="toolbar__tool">
                                        <a href="#" title="run" data-action="run" class="toolbar__button toolbar__button_run"></a>
                                    </div>
                                    <div class="toolbar__tool">
                                        <a href="#" title="open in sandbox" target="_blank" data-action="edit" class="toolbar__button toolbar__button_edit"></a>
                                    </div>
                                </div>
                                <div class="codebox__code" data-code="1">
                                    <pre class="line-numbers language-javascript"><code>let num;

                                        do {
                                            num = prompt(& quot;Enter a number greater than 100?&quot;, 0);
} while (num &lt;= 100 &amp;&amp; num);</code></pre>
                                </div>
                            </div>

                        </div><p>The loop <code>do..while</code> repeats while both checks are truthy:</p>
                            <ol>
                                <li>The check for <code>num &lt;= 100</code> – that is, the entered value is still not greater than <code>100</code>.</li>
                                <li>The check <code>&amp;&amp; num</code> is false when <code>num</code> is <code>null</code> or an empty string. Then the <code>while</code> loop stops too.</li>
                            </ol>
                            <p>P.S. If <code>num</code> is <code>null</code> then <code>num &lt;= 100</code> is <code>true</code>, so without the 2nd check the loop wouldn’t stop if the user clicks CANCEL. Both checks are required.</p>
                        </div></div><button class="close-button task__answer-close" type="button" title="close"></button></div></div></div></div><div class="task tasks__task"><div class="task__header"><div class="task__title-wrap"><h3 class="task__title"><a class="main__anchor" href="#output-prime-numbers" name="output-prime-numbers">Output prime numbers</a></h3><a class="task__open-link" href="/task/list-primes" target="_blank"></a></div><div class="task__header-note"><span class="task__importance" title="How important is the task, from 1 to 5">importance: 3</span></div><div class="task__content"><div class="task__formatted"><p>An integer number greater than <code>1</code> is called a <a href="https://en.wikipedia.org/wiki/Prime_number">prime</a> if it cannot be divided without a remainder by anything except <code>1</code> and itself.</p>
                            <p>In other words, <code>n &gt; 1</code> is a prime if it can’t be evenly divided by anything except <code>1</code> and <code>n</code>.</p>
                            <p>For example, <code>5</code> is a prime, because it cannot be divided without a remainder by <code>2</code>, <code>3</code> and <code>4</code>.</p>
                            <p><strong>Write the code which outputs prime numbers in the interval from <code>2</code> to <code>n</code>.</strong></p>
                            <p>For <code>n = 10</code> the result will be <code>2,3,5,7</code>.</p>
                            <p>P.S. The code should work for any <code>n</code>, not be hard-tuned for any fixed value.</p>
                        </div><button class="task__solution" type="button">solution</button><div class="task__answer"><div class="task__answer-content"><div class="formatted"><p>There are many algorithms for this task.</p>
                            <p>Let’s use a nested loop:</p>
                            <div id="xg58evqka8" data-trusted="1" class="code-example">
                                <div class="codebox code-example__codebox">

                                    <div class="codebox__code" data-code="1">
                                        <pre class="line-numbers language-javascript"><code>For each i in the interval {
                                            check if i has a divisor from 1..i
                                            if yes =&gt; the value is not a prime
                                            if no =&gt; the value is a prime, show it
}</code></pre>
                                    </div>
                                </div>

                            </div><p>The code using a label:</p>
                            <div id="tonyayzacv" data-trusted="1" class="code-example">
                                <div class="codebox code-example__codebox">

                                    <div class="toolbar codebox__toolbar">
                                        <div class="toolbar__tool">
                                            <a href="#" title="run" data-action="run" class="toolbar__button toolbar__button_run"></a>
                                        </div>
                                        <div class="toolbar__tool">
                                            <a href="#" title="open in sandbox" target="_blank" data-action="edit" class="toolbar__button toolbar__button_edit"></a>
                                        </div>
                                    </div>
                                    <div class="codebox__code" data-code="1">
                                        <pre class="line-numbers language-javascript"><code>let n = 10;

                                            nextPrime:
                                            for (let i = 2; i &lt;= n; i++) { // for each i...

  for (let j = 2; j &lt; i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

                                            alert( i ); // a prime
}</code></pre>
                                    </div>
                                </div>

                            </div><p>There’s a lot of space to optimize it. For instance, we could look for the divisors from <code>2</code> to square root of <code>i</code>. But anyway, if we want to be really efficient for large intervals, we need to change the approach and rely on advanced maths and complex algorithms like <a href="https://en.wikipedia.org/wiki/Quadratic_sieve">Quadratic sieve</a>, <a href="https://en.wikipedia.org/wiki/General_number_field_sieve">General number field sieve</a> etc.</p>
                        </div></div><button class="close-button task__answer-close" type="button" title="close"></button></div></div></div></div></div></div><div class="page__nav-wrap"><a class="page__nav page__nav_prev" href="/nullish-coalescing-operator" data-tooltip="Nullish coalescing operator '??'"><span class="page__nav-text"><span class="page__nav-text-shortcut"></span></span><span class="page__nav-text-alternate">Previous lesson</span></a><a class="page__nav page__nav_next" href="/switch" data-tooltip="The &quot;switch&quot; statement"><span class="page__nav-text"><span class="page__nav-text-shortcut"></span></span><span class="page__nav-text-alternate">Next lesson</span></a></div><div class="article-tablet-foot tablet-only"><div class="article-tablet-foot__layout"><div class="share-icons"><span class="share-icons__title">Share</span><a class="share share_tw" href="https://twitter.com/share?url=https%3A%2F%2Fjavascript.info%2Fwhile-for" rel="nofollow"></a><a class="share share_fb" href="https://www.facebook.com/sharer/sharer.php?s=100&amp;p%5Burl%5D=https%3A%2F%2Fjavascript.info%2Fwhile-for" rel="nofollow"></a></div><div class="article-tablet-foot__map"><a class="map" href="/tutorial/map" data-action="tutorial-map"><span class="map__text">Tutorial map</span></a></div></div></div><div class="banner-bottom-sponsor"><div class="banner-bottom-sponsor__text"><a href="https://github.com/sponsors/iliakan">Support the development of the new version of the Modern JavaScript Tutorial 🚀</a></div><button class="banner-bottom-sponsor__close" data-banner-close="Sponsor" data-banner-close-message="This information will stay hidden for 1 week" title="hide for 1 week"></button></div><script>!!1&&"hideBannerSponsor"in localStorage&&+localStorage.hideBannerSponsor+145152e5>Date.now()||(document.querySelector(".banner-bottom-sponsor").style.display="flex");</script><div class="comments formatted" id="comments"><div class="comments__header"><h2 class="comments__header-title"><a href="#comments" name="comments">Comments</a></h2><div class="comments__read-before"><span class="comments__read-before-link">read this before commenting…</span><div class="comments__read-before-popup"><div class="comments__read-before-popup-i"><ul><li>If you have suggestions what to improve - please <a href="https://github.com/javascript-tutorial/en.javascript.info/issues/new">submit a GitHub issue</a> or a pull request instead of commenting.</li><li>If you can't understand something in the article – please elaborate.</li><li>To insert few words of code, use the <code>&lt;code&gt;</code> tag, for several lines – wrap them in <code>&lt;pre&gt;</code> tag, for more than 10 lines – use a sandbox (<a href='https://plnkr.co/edit/?p=preview'>plnkr</a>, <a href='https://jsbin.com'>jsbin</a>, <a href='http://codepen.io'>codepen</a>…)</li></ul></div></div></div></div><div id="disqus_thread"></div><script>var disqus_config = function() { if (!this.page) this.page = { }; Object.assign(this.page, {"url":"https:\/\/javascript.info\/while-for","identifier":"\/while-for"}); };</script><script>var disqus_shortname = "javascriptinfo";</script><script>var disqus_enabled = true;</script></div></main></div><div class="sidebar page__sidebar sidebar sidebar_sticky-footer"><button class="sidebar__toggle" data-sidebar-toggle></button><a class="map" href="/tutorial/map" data-action="tutorial-map" data-tooltip="Tutorial map"></a><div class="sidebar__inner"><div class="sidebar__content"><div class="sidebar__section"><h4 class="sidebar__section-title">Chapter</h4><nav class="sidebar__navigation"><ul class="sidebar__navigation-links"><li class="sidebar__navigation-link"><a class="sidebar__link" href="/first-steps">JavaScript Fundamentals</a></li></ul></nav></div><div class="sidebar__section"><h4 class="sidebar__section-title">Lesson navigation</h4><nav class="sidebar__navigation"><ul class="sidebar__navigation-links"><li class="sidebar__navigation-link"><a class="sidebar__link" href="#the-while-loop">The “while” loop</a></li><li class="sidebar__navigation-link"><a class="sidebar__link" href="#the-do-while-loop">The “do…while” loop</a></li><li class="sidebar__navigation-link"><a class="sidebar__link" href="#the-for-loop">The “for” loop</a></li><li class="sidebar__navigation-link"><a class="sidebar__link" href="#breaking-the-loop">Breaking the loop</a></li><li class="sidebar__navigation-link"><a class="sidebar__link" href="#continue">Continue to the next iteration</a></li><li class="sidebar__navigation-link"><a class="sidebar__link" href="#labels-for-break-continue">Labels for break/continue</a></li><li class="sidebar__navigation-link"><a class="sidebar__link" href="#summary">Summary</a></li></ul></nav></div><div class="sidebar__section"><nav class="sidebar__navigation"><ul class="sidebar__navigation-links"><li class="sidebar__navigation-link"><a class="sidebar__link" href="#tasks">Tasks (7)</a></li><li class="sidebar__navigation-link"><a class="sidebar__link" href="#comments">Comments</a></li></ul></nav></div><div class="sidebar__section"><div class="sidebar__section-title">Share</div><a class="share share_tw sidebar__share" href="https://twitter.com/share?url=https%3A%2F%2Fjavascript.info%2Fwhile-for" rel="nofollow"></a><a class="share share_fb sidebar__share" href="https://www.facebook.com/sharer/sharer.php?s=100&amp;p[url]=https%3A%2F%2Fjavascript.info%2Fwhile-for" rel="nofollow"></a></div><div class="sidebar__section"><a class="sidebar__link" href="https://github.com/javascript-tutorial/en.javascript.info/blob/master/1-js/02-first-steps/13-while-for" rel="nofollow">Edit on GitHub</a></div><div class="sidebar__section" id="sponsorBar"><div class="sidebar__section-title" id="sponsorBarTitle"></div><div id="sponsorBarContent"></div></div><script>window.initSponsorBar()</script></div></div></div></div></div><div class="page-footer"><ul class="page-footer__list"><li class="page-footer__item page-footer__item_copy">©&nbsp;2007—2024&nbsp; Ilya Kantor</li><li class="page-footer__item page-footer__item_about"><a class="page-footer__link" href="/about">about the project</a></li><li class="page-footer__item page-footer__item_contact"><a class="page-footer__link" href="/about#contact-us">contact us</a></li><li class="page-footer__item page-footer__item_terms"><a class="page-footer__link" href="/terms">terms of usage</a></li><li class="page-footer__item page-footer__item_privacy"><a class="page-footer__link" href="/privacy">privacy policy</a></li></ul></div></body></html>








https://clouddevs.com/javascript/guide-to-functions/


</pre> <h2><strong>Higher-Order Functions</strong></h2> <p><span style="font-weight: 400;">Higher-order functions are functions that take other functions as arguments, return a function as a result, or both. They are a significant part of functional programming in JavaScript and provide a powerful way to abstract and manage complexity in your code.</span></p> <p><span style="font-weight: 400;">Here&#8217;s an example of a higher-order function that takes a function as an argument:</span></p> <pre class="EnlighterJSRAW" data-enlighter-language="generic">```javascript
function greet(name, formatter) {
  return "Hello, " + formatter(name);
}

function upperCaseName(name) {
  return name.toUpperCase();
}

console.log(greet("Alice", upperCaseName));  // Prints: "Hello, ALICE"
```
</pre> <p><span style="font-weight: 400;">In this example, </span><b>`greet`</b><span style="font-weight: 400;"> is a higher-order function that takes a function </span><b>`formatter`</b><span style="font-weight: 400;"> as an argument. </span><b>`upperCaseName` </b><span style="font-weight: 400;">is passed as an argument, which converts the name to uppercase.</span></p> <h2><strong>Callback Functions</strong></h2> <p><span style="font-weight: 400;">A callback function is a function passed into another function as an argument, which is then invoked inside the outer function. Callbacks are frequently used in JavaScript for event handlers and timers.</span></p> <p><span style="font-weight: 400;">Here&#8217;s an example using the `setTimeout` function, which executes a callback function after a specified delay:</span></p> <pre class="EnlighterJSRAW" data-enlighter-language="generic">```javascript
function greet() {
  console.log("Hello, world!");
}

setTimeout(greet, 2000);  // Calls greet after 2 seconds
```




const colors = ['red', 'green', 'blue'];\ncolors.forEach(color =\u003E console.log(color));









