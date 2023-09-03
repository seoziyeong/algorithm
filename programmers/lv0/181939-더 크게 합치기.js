function solution(a, b) {
  // * 🧚
  let strA = a.toString();
  let strB = b.toString();

  if (strA + strB >= strB + strA) {
    return Number(strA + strB);
  } else {
    return Number(strB + strA);
  }

  // & 다른 풀이
  // 1. Math.max() : 배열에서 최댓값 구하기
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
  // 2. 삼항연산자
  var sum1 = `${a}` + `${b}`;
  var sum2 = `${b}` + `${a}`;
  return sum1 >= sum2 ? parseInt(sum1) : parseInt(sum2);
}
