// 근삿값 알고리즘 : 데이터 안에서 N과 가장 가까운 값을 구하는 것.
// => 차잇값의 절댓값의 최솟값 : N과 데이터[i] 의 차잇값을 구하고,
// 그 절댓값들 중 가장 최소의 차이가 나는 값이 근삿값이라고 할 수 있다.

//[?] 원본 데이터 중에서 대상 데이터와 가장 가까운 값 구하기
(() => {
  // [1] 초기화
  // [2] 입력
  let nums = [10, 20, 30, 37, 27, 17];
  let target = 25; // target과 nums 의 요소 중 가까운 값 구하기
  let near = 0; // 비교 후 가까운 값이 담기게 됨
  let min = Number.MAX_SAFE_INTEGER; // 원본과 대상 데이터의 차잇값을 담기 위한 변수
  let N = nums.length;
  // [3] 처리
  for (let i = 0; i < N; i++) {
    // 차이의 절댓값을 구하기 위한 변수 abs
    let abs = Math.abs(target - nums[i]);
    // min과 abs를 비교했을 때 abs가 더 작다면 업데이트
    if (min > abs) {
      min = abs;
      near = nums[i];
    }
  }
  // [4] 출력
  console.log('원본 데이터와의 근삿값 : ', near, '차이 : ', min);
})();
