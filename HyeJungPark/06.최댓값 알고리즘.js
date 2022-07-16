// 최댓값 알고리즘
//[?] 주어진 데이터 중 가장 큰 값

// 알고리즘 => 절차지향?

(function () {
  //[0] 초기화 (Initialiaze) : 최댓값, 최솟값을 구할 때 초기화가 필요하다.
  let max = Number.MIN_SAFE_INTEGER; // 숫자 형식 데이터 중 가장 작은 값으로 초기화

  //[1] 입력
  let nums = [-2, -5, -3, -7, -1];
  let N = nums.length;
  //[2] 처리
  for (let i = 0; i < N; i++) {
    if (nums[i] > max) max = nums[i]; // data 배열에 max보다 더 큰 데이터가 있다면 해당 데이터로 max 재할당
  }
  //[3] 출력
  console.log(`최댓값 : ${max}`);
})();
