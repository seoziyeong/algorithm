const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  n = Number(input[0]);

  // * 🧚
  if (n % 2 === 0) {
    console.log(`${n} is even`);
  } else {
    console.log(`${n} is odd`);
  }

  // & 다른 풀이
  // 1. 삼항연산자
  const result = Number(line) % 2 ? "odd" : "even";
  console.log(line, "is", result);
});
