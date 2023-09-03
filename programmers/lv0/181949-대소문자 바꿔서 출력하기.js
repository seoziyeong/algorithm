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
  // for of; 문자열은 따로 배열화 할 필요 없음
  let result = [];
  for (let i of str) {
    if (i === i.toUpperCase()) {
      result.push(i.toLowerCase());
    } else {
      result.push(i.toUpperCase());
    }
  }
  console.log(result.join(""));
});
