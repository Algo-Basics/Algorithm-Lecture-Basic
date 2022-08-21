// IIFE 즉시실행함수

// 평균 알고리즘 : 주어진 범위, 주어진 조건에 해당하는 데이터들의 평균

//[?] n 명의 점수 중 80 이상 95 이하의 점수 평균
(function () {
  //[1] 입력 : n명의 성적
  let data = [90, 65, 78, 50, 95];
  let sum = 0; // 합계를 담는 그릇
  let cnt = 0; // 개수를 담는 그릇
  let L = data.length;
  let avg = 0;

  //[2] 처리 : avg = sum / cnt
  for (let i = 0; i < L; i++) {
    if (data[i] >= 80 && data[i] <= 95) {
      cnt++;
      sum += data[i];
    }
  }

  if (sum !== 0 && cnt !== 0) {
    avg = sum / cnt;
  }

  //[3] 출력
  console.log(avg.toFixed(2)); // Number.toFixed(n) : Number의 소수점 n 번째 자리까지 표시
})();
