// Binary Search

//[?] 정렬되어 있는 데이터를 이진 검색 사용해 절반씩 나누어 검색하기
(() => {
  // input
  const data = [1, 3, 5, 7, 9, 11, 13]; // 이진 검색 알고리즘에서는 데이터가 정렬되도록 한다. (오름차순 정렬)
  const N = data.length;
  let search = 9;
  let flag = false; // flag : 표시, 상태 => 찾았는지 못찾았는지를 추적
  let index = -1; // 인덱스가 -1이라는 것은 없는 상태라는 것 (초기화) 찾았을 경우 찾은 인덱스를 저장!

  // process : 이진 검색 알고리즘
  let low = 0; // min 낮은 인덱스
  let high = N - 1; // max 높은 인덱스
  while (low <= high) {
    // low와 high가 만날 때까지 반복 실행 (conquer) => 계속 범위를 좁혀서 검색한다.
    // mid 값을 찾는다. low와 high의 중간 값.(divide)
    let mid = parseInt((low + high) / 2);

    // 1. mid 인덱스의 값이 찾고 있는 데이터와 같을 때
    if (data[mid] === search) {
      flag = true;
      index = mid;
      break;
    }
    // 2. mid 인덱스 값이 search 보다 클 때 : 찾을 데이터는 더 작은 범위에 있으므로, 범위를 좁힌다.
    else if (data[mid] > search) {
      high = mid - 1;
    }
    // 3. 그 외 : mid 인덱스 값이 serch보다 작으면 ... 찾을 데이터는 mid보다 더 큰 범위에 있으므로 low 값을 조절한다.
    else {
      low = mid + 1;
    }
  }

  // output
  if (flag) {
    console.log(`Search Data ${search} was found in index ${index}`);
  } else {
    console.log('찾지 못했습니다 ㅠㅠ.');
  }
})();
