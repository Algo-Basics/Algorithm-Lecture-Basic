// 문제: 주어진 데이터에서 가장 많이 나타난(중복된) 값

// 최빈값 알고리즘(Mode Algorithm): 점수 인덱스(0 ~ n)의 개수(Count)의 최댓값(Max)

(function () {
  //[1] Input
  const scores = [1, 3, 4, 3, 5]; //0부터 5까지만 들어온다고 가정.
  let indexes = Array(scores.length + 1).fill(0); // 0~5까지 점수 인덱스의 개수 저장
  let max = Number.MIN_SAFE_INTEGER; // MAX 알고리즘 적용
  let mode = 0; // 최빈값이 담길 그릇.
  //[2] Process
  for (let i = 0; i < scores.length; i++) {
    indexes[scores[i]]++;
  }
  for (let j = 0; j < indexes.length; j++) {
    if (indexes[j] > max) {
      max = indexes[j];
    }
  }
  mode = indexes.indexOf(max);

  //[3] Output
  console.log("최빈값 " + mode + "-> " + max + "번 나타남");
})();
