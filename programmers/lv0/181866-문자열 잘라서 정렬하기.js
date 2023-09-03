function solution(myString) {
  // * 🧚
  // x기준으로 잘라서(split), x 자르다가 생긴공백을 없애주고(filter), 오름차순 정렬(sort)
  var answer = myString
    .split("x")
    .filter((el) => el !== "")
    .sort();

  return answer;
}
