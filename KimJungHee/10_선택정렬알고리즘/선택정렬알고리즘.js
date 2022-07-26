// 무작위 데이터를 순서대로 [오름차순 | 내림차순] 정렬

//정렬 알고리즘 : 가장 작은/큰 데이터를 왼쪽으로 순서대로 이동

(function () {
  //[1] Input: Data Structure (Array,List,Stack,Queue,Tree,DB)
  let data = [3, 2, 1, 5, 4]; // 정렬되지 않은 데이터
  const N = data.length;
  let result = [];
  //[2] Process: Selection Sort (선택정렬) 알고리즘
  for (let i = 0; i < N; i++) {
    for (let j = 1; j < N - 1; j++) {
      if (data[i] > data[j]) {
        result.push(data[j]);
      }
    }
  }
  //[3] Output
})();
