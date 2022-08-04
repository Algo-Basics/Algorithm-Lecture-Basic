// 두 개의 정수배열 합치기

// 병합알고리즘 : 오름차순 정렬된 정수 배열 하나로 병합.
(() => {
  //[1] input
  let first = [1, 3, 5];
  let second = [2, 4];
  let M = first.length;
  let N = second.length;
  let merge = Array(M + N).fill(0); // 병합된 배열
  let i = 0;
  let j = 0;
  let k = 0;

  //[2] process
  // 둘 중 하나라도 배열의 끝에 도달할 때까지
  // Q. 첫번째 while문의 조건이 왜 &&일까. i가 M까지 도달하고, j 가 N에 도달하기 전에는 종료되지 않는다.
  while (i < M && j < N) {
    if (first[i] < second[j]) {
      merge[k++] = first[i++];
    } else {
      merge[k++] = second[j++];
    }
  }
  // 첫 번째 배열이 끝에 도달할 때까지 : 앞의 while문이 종료되지 않았다면 마저 종료되도록 나머지 부분을 채움
  while (i < M) {
    merge[k++] = first[i++];
  }
  // 두 번째 배열이 끝에 도달할 때까지 : 만약 앞에서 j가 N에 도달했다면 while문이 실행되지 않는다.
  while (j < N) {
    merge[k++] = second[j++];
  }

  //[3] output
  for (let i = 0; i < M + N; i++) {
    console.log(merge[i]);
  }
})();
