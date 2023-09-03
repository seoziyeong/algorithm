function solution(n) {
  // * 🧚
  // Math.pow() : 제곱
  var answer = 0;

  if (n % 2 == 1) {
    for (let i = 1; i <= n; i += 2) answer += i;
  } else {
    for (let i = 2; i <= n; i += 2) answer += Math.pow(i, 2);
  }

  return answer;

  // & 다른 풀이
  // 1. 반복문을 사용하지 않고 수식으로 짜기
  if (n % 2 === 1) return ((n + 1) / 2) * ((n + 1) / 2);
  else return (n * (n + 1) * (n + 2)) / 6;

  // 2. Array() n만큼 채운 배열 생성
  // .fill().map() : 배열 속 내용 채움
  // .reduce((누적값, 현재값, index, 요소) => {}, 초기값);
  const array = Array(n)
    .fill()
    .map((x, idx) => idx + 1);
  return n % 2 === 0
    ? array.reduce((a, b) => (b % 2 === 0 ? a + Math.pow(b, 2) : a), 0)
    : array.reduce((a, b) => (b % 2 === 0 ? a : a + b), 0);
}
