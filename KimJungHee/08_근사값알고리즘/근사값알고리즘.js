// 문제: 원본 데이터 중에서 대상 데이터와 가장 가까운 값

// 근사값 알고리즘(Near Alogrithm): 가까운 값을 구한다. -> 차잇값의 절대값의 최솟값

(function () {
  // [0] Initialize
  let min = Number.MAX_SAFE_INTEGER;
  let arr = [];
  // [1] Input
  var numbers = [10, 20, 30, 27, 17]; //예상 결과 값: 27
  var target = 25; //target과 가장 가까운 값
  // [2] Process: Near
  for (i = 0; i < numbers.length; i++) {
    var near = Math.abs(target - numbers[i]);
    arr.push(near);
  }
  resultIndex = arr.indexOf(Math.min(...arr));
  result = numbers[resultIndex];
  // [3] Output
  console.log(result);
})();
