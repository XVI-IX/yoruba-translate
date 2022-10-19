// import * as tf from '@tensorflow/tfjs';
const tf = require("@tensorflow/tfjs");

const word_index = {
  "<OOV>": 1, "o": 2, "yen": 3,
  "pa": 4, "tan": 5, "fan": 6, 
  "ina": 7, "bawo": 8, "ni": 9, 
  "ilekun": 10, "p\u1eb9l\u1eb9": 11, 
  "si": 12, "y\u1eb9n": 13, "se": 14, 
  "wa": 15, "nibe": 16, "kilode": 17, 
  "dab\u1ecd": 18, "ri": 19, "\u1ecd": 20, 
  "titi": 21, "a": 22, "tun": 23, 
  "pade": 24, "nigbamii": 25, "il\u1eb9kun": 26, 
  "de": 27, "sil\u1eb9kun": 28
}

let sequence = [];

let text = "Pa ina";
text = text.toLowerCase();
text = text.split(" ")

for (let i = 0; i < text.length; i++) {
  sequence.push(word_index[text[i]]);
}

console.log(sequence);

while (sequence.length < 20) {
  sequence.unshift(0);
}
console.log(sequence);
console.log(sequence.length);

const model = tf.loadLayersModel('./js model/model.json');

const padded_sequence = tf.tensor(sequence);
const prediction = model.predict(padded_sequence);

console.log(prediction);

