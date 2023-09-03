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
  const a = Number(input[0]);
  const b = Number(input[1]);
  const result = Number(input[0]) + Number(input[1]);
  console.log(`${a} + ${b} = ${result}`);

  // & 다른 풀이
  // 1. split()
  let [q, z] = [...line.split(" ").map((v) => +v)];
  console.log(`${q} + ${z} = ${q + z}`);
});
