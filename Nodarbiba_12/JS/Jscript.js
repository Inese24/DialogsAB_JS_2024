/*var div = document.createElement('div');

setTimeout(() => {
    console.log(div);
}, 3010);

setTimeout(() => {
    div.innerHTML = '<p>CreateElement example</p>';
}, 5000);

setTimeout(() => {
    console.log(div);
}, 5010);

setTimeout(() => {
    document.body.appendChild(div);
}, 7000);
*/


// appendChild()  – append a node to a list of child nodes of a specified parent node.
/*
let div = document.createElement('div');
//div.id = 'content';
//div.className = 'note';

setTimeout(() => {
    console.log(div);
}, 3010);

setTimeout(() => {
    div.innerHTML = '<p>CreateElement example</p>';
}, 5000);

setTimeout(() => {
    console.log(div);
}, 5010);

setTimeout(() => {
    document.body.appendChild(div);
}, 7000);
*/


// JavaScript DocumentFragment
/*
let fragment = new DocumentFragment();
let languages = ['JS', 'TypeScript', 'Elm', 'Dart', 'Scala'];

let langEl = document.querySelector('#language');

languages.forEach((language) => {
    let li = document.createElement('li');
    li.innerHTML = language;
    fragment.appendChild(li);
})

setTimeout(() => {
    console.log(fragment);
}, 3010);

setTimeout(() => {
    fragment.innerHTML = '<p>CreateElement example</p>';
}, 5000);

setTimeout(() => {
    console.log(fragment);
}, 5010);

setTimeout(() => {
    document.body.appendChild(fragment);
}, 7000);
*/


// textContent – get and set the text content of a node.
// Reading textContent from a node   - nesanāca
/*
let text = node.textContent;
let note = document.getElementById('note');
console.log(note.textContent);


setTimeout(() => {
    console.log(div);
}, 3010);

setTimeout(() => {
    div.innerHTML = '<p>CreateElement example</p>';
}, 5000);

setTimeout(() => {
    console.log(div);
}, 5010);

setTimeout(() => {
    document.body.appendChild(div);
}, 7000);
*/

// JavaScript innerHTML


let content = element.innerHTML;
let menu = document.getElementById('menu');
console.log(menu.innerHTML);


setTimeout(() => {
    console.log(div);
}, 3010);

setTimeout(() => {
    div.innerHTML = '<p>CreateElement example</p>';
}, 5000);

setTimeout(() => {
    console.log(div);
}, 5010);

setTimeout(() => {
    document.body.appendChild(div);
}, 7000);


