// do 문을 사용하여 1부터 5까지 정수의 합

var sum = 0;
let i = 1;

do {
  sum = sum + i;
  i++;
} while (i < 6);

console.log("합계: " + sum);
