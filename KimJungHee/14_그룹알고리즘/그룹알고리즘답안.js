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

  //[2] Process: Group 알고리즘 (SORT -> SUM -> GROUP)

  //[A] 그룹정렬: SORT -> 나하고 같은 그룹인지 따지기 편하게 하기 위해서 수행
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      if (records[i].Name > records[j].Name) {
        let temp = records[i];
        records[i] = records[j];
        records[j] = temp;
      }
    }
  }
  //[B] 그룹소계: GROUP -> 그룹 알고리즘이 적용된 곳.
  let groupCount = 0; //그룹수
  let subTotal = 0; //소계
  let newRecords = JSON.parse(JSON.stringify(records)); // 객체 복사 (Deep Copy)

  for (let i = 0; i < N; i++) {
    subTotal += newRecords[i].Quantity; //같은 상품명의 수량을 누적(SUM)
    if (
      i + 1 == N || //단락이면 아래 조건 무시
      newRecords[i].Name != newRecords[i + 1].Name
    ) {
      groups.push(newRecords[i]); // JSON 개체를 임시로 추가
      // 다음 레코드가 없거나, 현재 레코드와 다음 레코드가 다르면 저장
      groups[groupCount].Name = newRecords[i].Name; // 한 그룹의 키 지정.
      groups[groupCount].Quantity = subTotal; //소계
      groupCount++; // 그룹 수 증가
      subTotal = 0; //하나의 그룹이 완료되면 소계 초기화
    }
  }

  //[3] Output
  console.log("[1] 정렬된 원본 데이터");
  for (let i = 0; i < N; i++) {
    console.log(records[i].Name + "-" + records[i].Quantity);
  }
  console.log("[2] 이름으로 그룹화된 데이터");
  for (let i = 0; i < groupCount; i++) {
    console.log(groups[i].Name + "-" + groups[i].Quantity);
  }
})();
