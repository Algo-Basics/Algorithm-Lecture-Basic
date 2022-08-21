// 그룹 알고리즘 : 특정 키 값에 해당하는 그룹화된 합계 리스트.
// SORT --> SUM ==> GROUP

// 컬렉션 데이터를 특정 키 값으로 그룹화

(() => {
  //[1] input : 샘플 JSON 데이터
  let records = [
    {
      Name: 'RADIO',
      Quantity: 3,
    },
    {
      Name: 'TV',
      Quantity: 1,
    },
    {
      Name: 'RADIO',
      Quantity: 2,
    },
    {
      Name: 'DVD',
      Quantity: 4,
    },
  ];
  let groups = [];
  let N = records.length;

  //[2-1] : 그룹으로 정렬 = sort (삽입정렬 알고리즘 사용)
  for (let i = 1; i < N; i++) {
    let temp = records[i];
    let j = i - 1;
    while (j >= 0 && records[j].Name > temp.Name) {
      records[j + 1] = records[j];
      j--;
    }
    records[j + 1] = temp;
  }

  //[2-2] : 각 그룹에 대한 소계 **
  let groupCount = 0;
  let subtotal = 0;
  // Deep Copy : JSON 문자열화 => 파싱 : 이전 참조를 제거한 뒤 새로운 객체 생성
  let newRecords = JSON.parse(JSON.stringify(records));
  for (let i = 0; i < N; i++) {
    subtotal += newRecords[i].Quantity; // 같은 상품명의 수량을 누적.
    if (i + 1 === N || newRecords[i].Name !== newRecords[i + 1].Name) {
      groups.push(newRecords[i]);
      groups[groupCount].Name = newRecords[i].Name;
      groups[groupCount].Quantity = subtotal;
      groupCount++;
      subtotal = 0;
    }
  }

  //[3] output
  console.log(`[1] 정렬된 원본 데이터: `);
  for (let i = 0; i < N; i++) {
    console.log(`${records[i].Name} - ${records[i].Quantity}`);
  }
  console.log(groups);
})();

// 그룹화하는 부분 잘 이해가 안된다.
