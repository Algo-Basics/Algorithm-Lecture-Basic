// 문제: 주어진 데이터 중에서 가장 큰 값

//  최댓값 알고리즘(Max Algorithm): <주어진 범위 + 주어진 조건>의 자료들의 가장 큰 값

(function () {
  // [0] Initialize => 최댓값, 최솟값 알고리즘은 초기화가 반드시 필요 (해당 데이터에서 가장 작은 데이터를 넣는다)
  var max = Number.MIN_SAFE_INTEGER; // 숫자 형식의 데이터 중 가장 작은 값으로 초기화
  // Number.MIN_SAFE_INTEGER => 가장 작은 값 불러옴
  //[1] Input
  var numbers = [-2, -5, -3, -7, -1];
  var N = numbers.length;
  //[2] Process
  max = Math.max(...numbers);
  /*
 * Spread Operator(전개 연산자)는 ES6 문법으로 '...' 이렇게 점 3개로 표현하고
 * 객체나 배열의 원소들을 하나씩 꺼내어서 펼쳐서 리턴합니다.
 * 즉, Math.max(...arr)와 같이 작성해주면 실제로는 Math.max(1, 2, 3, 4, 5)와 같이 실행되게 됩니다.
​ */

  //[3] Output
  console.log("최댓값: " + max);
})();
