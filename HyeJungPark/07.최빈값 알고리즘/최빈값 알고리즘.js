// 최빈값 알고리즘 : 가장 많이 등장하는 데이터를 찾는 알고리즘 - 점수 인덱스 갯수의 최댓값을 구한다!

// 해설 코드
(() => {
  let scores = [1, 3, 4, 4, 5];
  let indexes = Array(6).fill(0);
  let max = Number.MIN_SAFE_INTEGER;
  let mode = 0;

  for (let i = 0; i < scores.length; i++) {
    indexes[scores[i]]++;
  }

  for (let i = 0; i < indexes.length; i++) {
    if (indexes[i] > max) {
      max = indexes[i];
      mode = i;
    }
  }

  console.log('최빈값: ', mode, '=>', max, '번 등장');
})();

// 내가 작성한 코드
// (() => {
//   const scores = [1, 3, 4, 4, 5];
//   const indexes = new Array(Math.max(...scores) + 1).fill(0);
//   for (let score of scores) {
//     indexes[score]++;
//   }
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let i = 0; i < indexes.length; i++) {
//     if (max < indexes[i]) max = i;
//   }
//   console.log(indexes);
//   console.log('가장 많이 나온 값은:', max);
// })();
