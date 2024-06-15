// 1.piemērs     view-source:https://www.w3schools.com/js/tryit.asp?filename=tryjs_functions
// browserResize funkcija, () ir tukšas; funciju aprakstošās atvrerošā un aizverošā {} iekavas svarīgas.

function browserResize() {
    var afterResize = window.innerWidth;
    if ((xbeforeResize < (970) && afterResize >= (970)) || (xbeforeResize >= (970) && afterResize < (970)) ||
        (xbeforeResize < (728) && afterResize >= (728)) || (xbeforeResize >= (728) && afterResize < (728)) ||
        (xbeforeResize < (468) && afterResize >= (468)) || (xbeforeResize >= (468) && afterResize < (468))) {
        xbeforeResize = afterResize;

        if (document.getElementById("adngin-try_it_leaderboard-0")) {
            adngin.queue.push(function () {
                adngin.cmd.startAuction([
                    { placement: "adngin-try_it_leaderboard-0", adUnit: "try_it_leaderboard" },
                ]);
            });
        }

    }
    if (window.screen.availWidth <= 768) {
        restack(window.innerHeight > window.innerWidth);
    }
    fixDragBtn();
    showFrameSize();


}


// 2.piemērs       view-source:https://www.w3schools.com/js/tryit.asp?filename=tryjs_functions

submitTryit()
function submitTryit(n) {

    if (window.editor) {
        window.editor.save();
    }

    var text = document.getElementById("textareaCode").value;

    var ifr = document.createElement("iframe");
    ifr.setAttribute("frameborder", "0");
    ifr.setAttribute("id", "iframeResult");
    ifr.setAttribute("name", "iframeResult");

    ifr.setAttribute("allowfullscreen", "true");

    document.getElementById("iframewrapper").innerHTML = "";
    document.getElementById("iframewrapper").appendChild(ifr);

    var ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;
    ifrw.document.open();
    ifrw.document.write(text);
    ifrw.document.close();
    //23.02.2016: contentEditable is set to true, to fix text-selection (bug) in firefox.
    //(and back to false to prevent the content from being editable)
    //(To reproduce the error: Select text in the result window with, and without, the contentEditable statements below.)  
    if (ifrw.document.body && !ifrw.document.body.isContentEditable) {
        ifrw.document.body.contentEditable = true;
        ifrw.document.body.contentEditable = false;
    }

}

// 3.piemērs   view-source:https://www.w3schools.com/js/tryit.asp?filename=tryjs_functions

function fixDragBtn() {
    var textareawidth, leftpadding, dragleft, containertop, buttonwidth
    var containertop = Number(w3_getStyleValue(document.getElementById("container"), "top").replace("px", ""));
    if (stack != " horizontal") {
      document.getElementById("dragbar").style.width = "5px";    
      textareasize = Number(w3_getStyleValue(document.getElementById("textareawrapper"), "width").replace("px", ""));
      leftpadding = Number(w3_getStyleValue(document.getElementById("textarea"), "padding-left").replace("px", ""));
      buttonwidth = Number(w3_getStyleValue(document.getElementById("dragbar"), "width").replace("px", ""));
      textareaheight = w3_getStyleValue(document.getElementById("textareawrapper"), "height");
      dragleft = textareasize + leftpadding + (leftpadding / 2) - (buttonwidth / 2);
      document.getElementById("dragbar").style.top = containertop + "px";
      document.getElementById("dragbar").style.left = dragleft + "px";
      document.getElementById("dragbar").style.height = textareaheight;
      document.getElementById("dragbar").style.cursor = "col-resize";
      
    } else {
      document.getElementById("dragbar").style.height = "5px";
      if (window.getComputedStyle) {
          textareawidth = window.getComputedStyle(document.getElementById("textareawrapper"),null).getPropertyValue("height");
          textareaheight = window.getComputedStyle(document.getElementById("textareawrapper"),null).getPropertyValue("width");
          leftpadding = window.getComputedStyle(document.getElementById("textarea"),null).getPropertyValue("padding-top");
          buttonwidth = window.getComputedStyle(document.getElementById("dragbar"),null).getPropertyValue("height");
      } else {
          dragleft = document.getElementById("textareawrapper").currentStyle["width"];
      }
      textareawidth = Number(textareawidth.replace("px", ""));
      leftpadding = Number(leftpadding .replace("px", ""));
      buttonwidth = Number(buttonwidth .replace("px", ""));
      dragleft = containertop + textareawidth + leftpadding + (leftpadding / 2);
      document.getElementById("dragbar").style.top = dragleft + "px";
      document.getElementById("dragbar").style.left = "5px";
      document.getElementById("dragbar").style.width = textareaheight;
      document.getElementById("dragbar").style.cursor = "row-resize";        
    }
  }


  // 4.piemērs   view-source:https://www.w3schools.com/js/tryit.asp?filename=tryjs_functions

  function openMenu() {
    var x = document.getElementById("navbarDropMenu");
    var y = document.getElementById("menuOverlay");
    var z = document.getElementById("menuButton");
    if (z.className.indexOf("w3-text-gray") == -1) {
        z.className += " w3-text-gray";
    } else { 
        z.className = z.className.replace(" w3-text-gray", "");
    }
    if (z.className.indexOf("w3-gray") == -1) {
        z.className += " w3-gray";
    } else { 
        z.className = z.className.replace(" w3-gray", "");
    }
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
    if (y.className.indexOf("w3-show") == -1) {
        y.className += " w3-show";
    } else { 
        y.className = y.className.replace(" w3-show", "");
    }

}

// 5. piemērs   view-source:https://www.ludzasbiblio.lv/kulturvestures-datu-baze/

<script>
    function loadCSS(hf) {
        var ms=document.createElement("link");ms.rel="stylesheet";
        ms.href=hf;document.getElementsByTagName("head")[0].appendChild(ms);
    }
    loadCSS("https://www.ludzasbiblio.lv/wp-content/themes/theme/css/main.min.css");
	loadCSS("https://use.fontawesome.com/releases/v5.0.8/css/all.css"); 
    loadCSS("https://www.ludzasbiblio.lv/wp-content/themes/theme/css/changes.css");

</script>