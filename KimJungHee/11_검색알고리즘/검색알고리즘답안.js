//문제: 정렬되어 있는 데이터를 이진 검색(이분 탐색)을 사용하여 반씩 나눠서 검색

//검색 알고리즘(Search Alogrithm): 주어진 데이터에서 특정 데이터 찾기
(function () {
  //[1] Input
  const data = [1, 3, 5, 7, 9]; //오름차순으로 정렬되었다고 가정
  const N = data.length;
  const search = 3;
  let flag = false; //플래그 변수: 찾으면 true 찾지못하면 false (일반적으로 false를 기본값으로 둔다)
  let index = -1; //인덱스 변수: 찾은 위치를 저장할 그릇. (배열의 인덱스가 -1이면 없다라고 보통 표현)

  //[2] Process: 이진 검색(Binary Search)
  let low = 0; //min:낮은 인덱스
  let high = N - 1; // max: 높은 인덱스
  while (low <= high) {
    //low와 high가 만날때까지 반복 실행
    let mid = parseInt((low + high) / 2);
    if (data[mid] === search) {
      flag = true;
      index = mid; //찾으면 플래그, 인덱스 저장 후 종료
      break;
    } else if (data[mid] > search) {
      high = mid - 1; //찾을 데이터가 mid보다 작으면 왼쪽 영역으로 이동
    } else {
      low = mid + 1; // 찾을 데이터가 mid보다 크면 오른쪽 영역으로 이동
    }
  }
  //[3] Output
  if (flag) {
    console.log(search + "을 " + index + " 위치에서 찾았습니다.");
  } else {
    console.log("찾지 못했습니다.");
  }
})();
