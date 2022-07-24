//[?] 무작위 데이터를 ASC || DESC 정렬

// 선택 정렬 알고리즘 : 가장 작은 or 큰 데이터를 왼쪽으로 순서대로 이동시켜주는 방식.
// 강사님께서는 이 알고리즘이 교과서적인 코드를 쓸 수 있다고 하심.

(() => {
  // 입력 : 자료구조의 영역 (배열, 객체, 스택, 큐 , 트리, DB, ..)
  let data = [3, 2, 1, 5, 4];
  let N = data.length;
  // 처리
  for (let i = 0; i < N - 1; i++) {
    // 선택정렬 알고리즘에서 반복회수는 N - 1 만큼이다. (소개파일 보기~)
    for (let j = i + 1; j < N; j++) {
      // j번째는 현재 i의 바로 다음부터 비교하면서, N번째까지 비교한다.
      // 부등호의 방향에 따라 오름차순, 내림차순을 결정 (잘 파악하자.)
      // 이 코드에서는 i번째와 j번째를 비교했을 때 i번째가 더 크다면, 현재 i번째 데이터를 j번째와 바꾸고 j번째에 i번째를 넣는 즉 오름차순 정렬을 하고 있다!
      if (data[i] > data[j]) {
        // temp라는 임시 변수에 바꿀 데이터를 넣어주고, 작은 값을 앞으로 오도록 재할당.
        // 위치가 바뀐 데이터j번째에는 i번째 데이터였던 temp를 재할당한다. (SWAP)
        let temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
    }
    // console.log(i + 1, '회전: ', data);
  }
  // 출력 : UI의 영역
  for (let i = 0; i < N; i++) {
    // console.log(data[i]);
  }
})();

(() => {
  let data = [4, 5, 2, 3, 1];
  let N = data.length;
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      if (data[i] > data[j]) {
        let tmp = data[i];
        data[i] = data[j];
        data[j] = tmp;
      }
    }
    console.log(i + 1, '회전: ', data);
  }
})();
