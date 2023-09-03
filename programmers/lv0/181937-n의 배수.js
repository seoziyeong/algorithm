function solution(num, n) {
  if (num % n) return 0;
  else return 1;

  // & 다른 풀이
  // 1. 삼항연산자
  return num % n ? 0 : 1;
}
