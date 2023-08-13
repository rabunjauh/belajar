function positiveSum(arr) {
  // if (arr.length <= 0) {
  //   return 0;
  // }

  let result = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > 0) {
      result += arr[index];
    }
  }
  return result;
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);
