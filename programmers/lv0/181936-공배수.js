function solution(number, n, m) {
  // * 🧚
  if (number % n == 0 && number % m == 0) return 1;
  return 0;
  // or
  return number % n == 0 && number % m == 0 ? 1 : 0;

  // & 다른 풀이
  return +!(number % n || number % m);
}
