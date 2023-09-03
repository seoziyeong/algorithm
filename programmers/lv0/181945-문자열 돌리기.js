const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  // * 🧚
  for (let i of str) console.log(i);

  // & 다른 풀이
  // 1. forEach()
  [...str].forEach((c) => console.log(c));
});
