function solution(start, end) {
  // * 🧚
  var answer = [];
  for (let i = start; i <= end; i++) {
    answer.push(i);
  }
  return answer;

  // & 다른 풀이
  // 1. Array()
  return Array.from({ length: end - start + 1 }, () => {
    return start++;
  });
  // or
  return Array(end - start + 1)
    .fill(start)
    .map((x, idx) => x + idx);
}
