function solution(str1, str2) {
  // * 🧚
  var answer = "";
  for (let i = 0; i < str1.length; i++) {
    answer += str1[i];
    answer += str2[i];
  }
  return answer;

  // & 다른 풀이
  // 1. map(), join()
  return [...str1].map((x, idx) => x + str2[idx]).join("");
  // 2. reduce()
  return [...str1].reduce((prev, char, i) => prev + char + str2[i], "");
}
