// 문제: n명의 점수 중에서 80점 이상 95점 이하인 점수의 평균
// 평균 알고리즘 (Average Algorithm): 주어진 범위에 주어진 조건에 해당하는 자료들의 평균.

(function () {
  //[1] Input (입력) :n명의 성적
  var data = [90, 65, 78, 50, 95];
  var sum = 0; //합계 담는 그릇
  var count = 0; //개수 담는 그릇
  var N = data.length;
  //[2] Process(처리)
  var filteredScore = data.filter((n) => n >= 80 && n <= 95);

  for (i = 0; i < filteredScore.length; i++) {
    sum = sum + filteredScore[i];
    count = filteredScore.length;
  }

  //[3] Output(출력)
  var avg = sum / count;
  console.log(avg);
})();
