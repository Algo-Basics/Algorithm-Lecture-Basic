//문제: 컬렉션 형태의 데이터를 특정 키 값으로 그룹화.

// 그룹 알고리즘(Group Algorithm): 특정 키 값에 해당하는 그룹화된 합계 리스트 만들기

//테스트용 레코드 JSON 배열

(function () {
  //[1] Input: 테스트용 레코드 JSON 배열
  let records = [
    { Name: "RADIO", Quantity: 3 },
    { Name: "TV", Quantity: 1 },
    { Name: "RADIO", Quantity: 2 },
    { Name: "DVD", Quantity: 4 },
  ]; // 입력 데이터
  let groups = []; // 출력 데이터
  let N = records.length; // 의사코드
  let total = 0;

  //[2] Process: Group 알고리즘 (SORT -> SUM -> GROUP)
  //[A] 그룹정렬: SORT
  //여기서 매개 변수인 a,b는 무엇일지 궁금해졌다.
  function compareName(a, b) {
    if (a.Name.toLowerCase() < b.Name.toLowerCase()) {
      return -1;
    }
    if (a.Name.toLowerCase() > b.Name.toLowerCase()) {
      return 1;
    }
    return 0;
  }
  records = records.sort(compareName);
  //[B] 그룹소계: GROUP
  for (let i = 0; i < records.length - 1; i++) {
    if (records[i].Name === records[i + 1].Name) {
      total = records[i].Quantity + records[i + 1].Quantity;
    }
  }
  //[3] Output
  console.log("[1] 정렬된 원본 데이터");
  for (let i = 0; i < records.length; i++) {
    console.log(records[i].Name + "-" + records[i].Quantity);
  }

  //total 까지 밖에 못구함. 배열 합치는거에서 막힘 ㅠㅠ
})();
