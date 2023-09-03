function solution(ineq, eq, n, m) {
  // * 🧚
  if (eq === "=" && n === m) return 1;
  if (ineq === "<" && n < m) return 1;
  if (ineq === ">" && n > m) return 1;
  return 0;

  // & 다른 풀이
  // 1. 객체  만들기
  const operations = {
    ">=": (n, m) => n >= m,
    "<=": (n, m) => n <= m,
    ">!": (n, m) => n > m,
    "<!": (n, m) => n < m,
  };
  const op = operations[ineq + eq];
  return Number(op(n, m));

  // 2.
}
