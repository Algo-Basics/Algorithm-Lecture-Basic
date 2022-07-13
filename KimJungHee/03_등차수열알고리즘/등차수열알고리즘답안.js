// 문제: 1부터 20까지의 정수 중 홀수의 합을 구하는 프로그램

// 등차수열(Arithmetic Sequences): 연속하는 두 수의 차이가 일정한 수열

// [1] Input
var sum = 0;
// [2] Process
var sequence = "";
for (let i = 1; i < 20; i++) {
  if (!(i % 2 !== 1)) {
    sum += i;
    sequence += i + " ";
  }
}
console.log(sequence);
//[3] Output
console.log("1부터 20까지의 홀수의 합" + sum);
