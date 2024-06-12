
function toCelsius(f) {
  return (5/9) * (f-32);
}

let value = toCelsius(77);
document.getElementById("demo").innerHTML = value;

/*
let value = toCelsius();
document.getElementById("demo1").innerHTML = value;
*/