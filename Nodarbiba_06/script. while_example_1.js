//https:/// https://www.w3schools.com/js/tryit.asp?filename=tryjs_while

let text = "";
let i = 0;

console.log("i = "+i);
console.log(i < 10);
console.log("text = "+text);

while (i < 10) {
  text += "<br>The number is " + i;  
  i++;

  console.log("i = "+i);
  console.log(i < 10);
  console.log("text = "+text);
}
document.getElementById("demo").innerHTML = text;