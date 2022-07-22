//[?] 원본 데이터 중에서 대상 데이터와 가장 가까운 값 구하기
(() => {
  // [1] 초기화
  let min = Number.MAX_SAFE_INTEGER;
  // [2] 입력
  let nums = [10, 20, 30, 37, 27, 17];
  let target = 25; // target과 nums 의 요소 중 가까운 값 구하기
  let near = 0; // 비교 후 가까운 값이 담기게 됨
  // [3] 처리
  for (let i = 0; i < N; i++) {
    let abs = Math.abs(target - nums[i]);
    if (min > abs) {
      min = abs;
      near = nums[i];
    }
  }
  // [4] 출력
  console.log('원본 데이터와의 근삿값 : ', near, '차이 : ', min);
})();
