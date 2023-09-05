function solution(num_list) {
  // * 🧚
  const strArr = [...String(num_list)];

  let odd = strArr.reduce((acc, cur) => (cur % 2 === 0 ? acc + cur : acc), "");
  let even = strArr.reduce((acc, cur) => (cur % 2 === 1 ? acc + cur : acc), "");

  return Number(odd) + Number(even);

  // & 다른 풀이
  // 1. filter()
  let sol = num_list.filter((el) => el % 2 === 1);
  let sol2 = num_list.filter((el) => el % 2 === 0);
  return Number(sol.join("")) + Number(sol2.join(""));
  // 2. reduce를 한 번에 쓰기
  const concat = (a, b) => parseInt(`${a}${b}`, 10);
  const [odd2, even2] = num_list.reduce(
    ([odd2, even2], num) => (num % 2 ? [concat(odd2, num), even2] : [odd2, concat(even2, num)]),
    [0, 0]
  );
  return odd + even;
  // or
  const [e, o] = num_list.reduce((p, c) => ((p[c % 2] += String(c)), p), [0, 0]);
  return +e + +o;
}
