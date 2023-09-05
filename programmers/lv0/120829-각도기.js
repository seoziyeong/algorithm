function solution(angle) {
  // * 🧚
  if (angle < 90) return 1;
  if (angle == 90) return 2;
  if (angle < 180) return 3;
  return 4;

  // & 다른 풀이
  // 1. filter()
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
  // 2. 중첩 삼항연산자
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
  // 3. switch문
}
