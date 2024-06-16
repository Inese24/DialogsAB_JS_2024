//funkcijas apraksta piemērs
function myFunction(p1, p2, p3) {
    return p1 * p2 + p3;
}

// funkcijas izmantošanas piemērs
let result = myFunction(4, 3, 5);
document.getElementById("demo").innerHTML = result;


result = myFunction(5, 6, 5);
document.getElementById("demo1").innerHTML = result;


result = myFunction(10, 8, 5);
document.getElementById("demo2").innerHTML = result;


let text = "vkmngoiajwekvbjdkdm,;x mcxJWbbD'wajōn ";
let symbolToFind = 'b';

console.log(indexOf(text, symbolToFind));
// atsauce uz pasaulē eksitējošu scrpitu bibliotēku

const myText = "I am a string";
const newString = myText.replace("string", "sausage");
