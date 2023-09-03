function solution(my_string, overwrite_string, s) {
  // * 🧚
  // splice() : 배열의 요소를 삭제하거나 교체
  // splice(시작index, 교체할 길이, 교체할 내용)
  const strArr = [...my_string];
  strArr.splice(s, overwrite_string.length, overwrite_string);
  return strArr.join("");
}
