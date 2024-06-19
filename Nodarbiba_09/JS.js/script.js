window.name = "N09";
/*
var counter = 1;
var showCounter = () => console.log(counter);

console.log(counter);
console.log(window.counter);

showCounter();
window.showCounter();
*/

/*
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);
console.log(window.outerHeight);
console.log(document.documentElement.clientWidth);
*/

/*
// https://developer.mozilla.org/en-US/docs/Web/API/Window/resizeBy
// https://developer.mozilla.org/en-US/docs/Web/API/Window/resizeTo
console.log(window.innerWidth);
window.resizeTo(500,100);
console.log(window.innerWidth);
*/

//window.open("https://rtu.lv", "RTU");
//window.open("https://lu.lv", "LU");
//window.open("http://127.0.0.1:5500/Nodarbiba_08/", "N08");
// drošības pēc lokālu failu aplūkošana ir bloķēta
//window.open("file:///C:/Users/some.html", "local");
//window.focus();


let jsWindow = window.open(
    //"https://rtu.lv",
    "http://127.0.0.1:5500/Nodarbiba_08/index.html",
    //"RTU",
    "N08",
    'height=600,width=800');

setTimeout(() => {
    jsWindow.resizeTo(600, 300);
}, 3000);

setTimeout(() => {
    jsWindow.close();
}, 6000);