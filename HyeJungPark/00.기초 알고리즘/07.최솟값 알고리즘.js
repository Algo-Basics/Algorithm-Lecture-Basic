// 최솟값 알고리즘 : 주어진 범위, 주어진 조건에서의 최솟값

//[?] 주어진 데이터 중 가장 작은 [짝수] 값
(() => {
  //[0] 초기화
  let min = Number.MAX_SAFE_INTEGER; //안전한 가장 큰 숫자 값으로 초기화
  //[1] input
  let nums = [2, 5, 3, 7, 1];
  let N = nums.length;
  //[2] process
  for (let i = 0; i < N; i++) {
    if (nums[i] < min && nums[i] % 2 === 0) min = nums[i];
  }
  //[3] output
  console.log('짝수 최솟값 : ', min);
})();
