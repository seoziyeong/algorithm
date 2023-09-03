const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  // * 🧚
  console.log(`a = ${input[0]}`);
  console.log(`b = ${input[1]}`);

  // & 다른 풀이
  // 1. \nb : console.log 내에서 개행
  console.log(`a = ${Number(input[0])}\nb = ${Number(input[1])}`);
});
