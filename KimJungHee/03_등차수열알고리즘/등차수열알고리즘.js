// 문제: 1부터 20까지의 정수 중 홀수의 합을 구하는 프로그램

// 등차수열: 연속하는 두 수의 차이가 일정한 수열

var sum = 0;

for (i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    sum = sum + i;
    console.log(sum);
  }
}

console.log(sum);
