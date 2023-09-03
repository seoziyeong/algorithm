const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  str = input[0];
  n = Number(input[1]);

  // * 🧚
  result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  console.log(result);

  // & 다른 풀이
  // 1. repeat() : str을 n번 반복
  console.log(str.repeat(n));
  // 2. process.stdout.write : 개행을 하지 않고 콘솔 출력
  for (i = 0; i < n; i++) {
    process.stdout.write(str);
  }
});
