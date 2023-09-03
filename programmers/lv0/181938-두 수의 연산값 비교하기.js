function solution(a, b) {
  // * 🧚
  return Math.max(Number(`${a}${b}`), a * b * 2);

  // & 다른 풀이
  // 1. 삼항연산자
  let num1 = parseInt(a + "" + b + "");
  let num2 = 2 * a * b;
  return num1 > num2 ? num1 : num2;
}
