function solution(n, control) {
  // * 🧚
  // 배열로 복사한 거 굳이 변수에 안담고 바로 return 해도 됨.
  return [...control].reduce((acc, cur) => {
    if (cur === "w") return acc + 1;
    if (cur === "s") return acc - 1;
    if (cur === "d") return acc + 10;
    if (cur === "a") return acc - 10;
  }, n);

  // & 다른 풀이
  // 1. 객체 활용
  const operations = {
    w: (n) => n + 1,
    s: (n) => n - 1,
    d: (n) => n + 10,
    a: (n) => n - 10,
  };
  return [...control].reduce((prev, op) => operations[op](prev), n);
}
