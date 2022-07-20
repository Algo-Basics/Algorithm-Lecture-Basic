// 문제: 주어진 데이터 중에서 가장 작은 짝수 값

//  최솟값 알고리즘(Min Alogorithm): 주어진범위 + 주어진 조건의 자료들의 가장 작은 값.

(function () {
  // [0] Initialize => 최댓값, 최솟값 알고리즘은 초기화가 반드시 필요 (해당 데이터에서 가장 큰 데이터를 넣는다)
  let min = Number.MAX_SAFE_INTEGER;
  //[1] Input
  var numbers = [2, 5, 3, 7, 1];
  //[2] Process
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min && numbers[i] % 2 === 0) {
      min = numbers[i];
    }
  }
  //[3] Output
  console.log("짝수 최솟값: " + min);
})();
