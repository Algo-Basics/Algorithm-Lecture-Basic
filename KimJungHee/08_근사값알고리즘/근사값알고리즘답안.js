// 문제: 원본 데이터 중에서 대상 데이터와 가장 가까운 값

// 근사값 알고리즘(Near Alogrithm): 가까운 값을 구한다. -> 차잇값의 절대값의 최솟값

(function () {
  // [0] Initialize
  let min = Number.MAX_SAFE_INTEGER;
  // [1] Input
  var numbers = [10, 20, 30, 27, 17]; //예상 결과 값: 27
  var target = 25; //target과 가장 가까운 값
  var near = 0;
  // [2] Process: Near
  for (let i = 0; i < numbers.length; i++) {
    var abs = Math.abs(numbers[i] - target);
    if (abs < min) {
      min = abs;
      near = numbers[i]; // 바로 numbers[i]로 찾는다. 따로 index 찾지말고
    }
  }
  // [3] Output
  console.log(target + "와/과 가장 가까운 값 " + near + "(차이: " + min + ")");
})();
