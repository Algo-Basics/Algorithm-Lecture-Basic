// 문제 : n명의 점수 중에서 80점 이상인 점수의 합계

// 합계알고리즘 (Sum Algorithm): 주어진 범위에 주어진 조건에 해당하는 자료들의 합계

// [1] Input(입력)
var scores = [100, 75, 50, 37, 90, 95];
var sum = 0;

// [2] Process(처리)
for (i = 0; i < scores.length; i++) {
  if (scores[i] >= 80) {
    sum = sum + scores[i];
  }
}

// [3] Output(출력)
console.log(sum);
