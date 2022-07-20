// 순위 알고리즘 : 점수 데이터에 대한 순위 구하기

//[?] 주어진 데이터의 순위를 구하기

// 1. scores 의 길이만큼 모두 1등으로 초기화
// 2. 요소를 비교하며 나보다 순위가 높은 데이터가 나오면 rankings의 값을 변경.

//... 2중 배열을 돌면서, 하나의 값과 그 다음 값들을 서로 비교해준다.
//... 현재 i위치의 값이 j위치의 값 보다 작으면, rankings의 i번째 인덱스가 순위가 증감하고
//... 반대의 경우 j번째 인덱스의 순위가 증감한다.

//... 이 풀이의 문제점은 scores에 같은 값이 들어있다면 등장한 순서에 따라 순위가 나뉘어버림.

(() => {
  //input
  let scores = [90, 87, 100, 95, 80];
  let rankings = Array(5).fill(1);
  let N = scores.length;
  //process
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (scores[i] < scores[j]) rankings[i]++;
      else rankings[j]++;
    }
  }
  //output
  for (let i = 0; i < N; i++) {
    console.log(`${scores[i]}점: ${rankings[i]}등`);
  }
})();
