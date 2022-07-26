(() => {
  const data = [1, 3, 5, 7, 9, 11, 13];
  const N = data.length;
  let search = 9;
  let flag = false;
  let index = -1;

  let low = 0;
  let high = N - 1;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);

    if (data[mid] === search) {
      flag = true;
      index = mid;
      break;
    } else if (data[mid] > search) {
      high = mid - 1;
    } else {
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
