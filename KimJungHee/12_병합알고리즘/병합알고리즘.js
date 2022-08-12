// 문제: 2개의 정수 배열 합치기: 단, 2개의 배열은 오름차순으로 정렬되있다고 가정.

// 병합 알고리즘: 오름차순으로 정렬되어 있는 정수 배열을 하나로 병합

(function () {
  //[1] Input
  const first = [1, 3, 5];
  const second = [2, 4];
  let M = first.length;
  let N = second.length;
  let merge = []; //병합된 배열을 담을 그릇
  let i = 0;
  let j = 0;
  let k = 0; //i j k 인덱스 담을 그릇 초기화.
  //[2] Process
  while (i < M && j < N) {
    // 둘 중 하나라도 배열의 끝에 도달할 때 까지
    if (first[i] < second[j]) {
      // 더 작은 값을 merge 배열에 저장
      merge[k] = first[i];
      k++;
      i++;
      //작은 값 대입후 각각 인덱스 증가
    } else {
      merge[k++] = second[j++];
    }
  }
  while (i < M) {
    //첫번째 배열이 끝까지 도달할 때 까지. j가 다 채워진 경우
    merge[k++] = first[i++];
  }
  while (j < N) {
    // 두번째 배열이 끝까지 도달할 때까지. i가 다 채워진 경우
    merge[k++] = second[j++];
  }
  //[3] Output
  for (let i = 0; i < M + N; i++) {
    console.log(merge[i]);
  }
})();
