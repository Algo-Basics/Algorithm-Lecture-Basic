// 문제: 주어진(지정한 범위)데이터 순위(등수)를 구하는 로직

// 순위알고리즘(Rank Algorithm) :점수 데이터에 대한 순위 구하기

(function () {
  //[1] Input
  var scores = [90, 87, 100, 95, 80]; //등수 3,4,1,2,5
  var N = scores.length;
  var rankings = Array(N).fill(1); // 핵심: 모두 1로 초기화. 그리고 나보다 큰 정수가 나오면 하나씩 등수를 떨어뜨리는 작업

  //[2] Process
  for (let i = 0; i < N; i++) {
    rankings[i] = 1; //순위 배열을 매 회전마다 1등으로 초기화
    for (let j = 0; j < N; j++) {
      if (scores[i] < scores[j]) {
        //현재 i와 나머지들 j 비교
        rankings[i]++; //나보다 큰 점수가 나오면 순위 1증가
      }
    }
  }
  //[3] Output
  for (let i = 0; i < N; i++) {
    console.log(scores[i] + "점: " + rankings[i] + "등");
  }
})();
