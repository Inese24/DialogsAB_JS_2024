/* Kā izveidot funkciju Javascript, lai iegūtu teikumu no masīva?
ChatGPT. Lai JavaScript sistēmā izveidotu funkciju, kas savieno masīva elementus vienā teikumā, varat izmantot masīvu metodi. Tālāk ir sniegti detalizēti norādījumi par šīs funkcijas izveidi.join
*/

function arrayToSentence(arr) {
    // Join the array elements with a space
    let sentence = arr.join(' ');
    // Capitalize the first letter and add a period at the end
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
    return sentence;
}

// Example usage:
const words = ["this", "is", "a", "sentence"];
const sentence = arrayToSentence(words);
console.log(sentence); // Output: "This is a sentence."
