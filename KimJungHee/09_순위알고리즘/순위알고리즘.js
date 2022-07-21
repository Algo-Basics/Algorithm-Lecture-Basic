// 문제: 주어진(지정한 범위)데이터 순위(등수)를 구하는 로직

// 순위알고리즘(Rank Algorithm) :점수 데이터에 대한 순위 구하기

(function () {
  //[1] Input
  var scores = [90, 87, 100, 95, 80]; //등수 3,4,1,2,5
  var N = scores.length;
  var rankings = Array(N).fill(1); // 핵심: 모두 1로 초기화. 그리고 나보다 큰 정수가 나오면 하나씩 등수를 떨어뜨리는 작업

  //[2] Process

  //[3] Output
  for (let i = 0; i < scores.length; i++) {
    console.log(scores[i] + "점: " + rankings[i] + "등");
  }
})();
