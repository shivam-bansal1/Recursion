function fibs(num) {
  // Iterative function for fibonacci series
  let result = [0, 1];
  if (num < 2) return result.slice(0, -num);

  for (let i = 2; i < num; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

function fibsRec(num, result = [0, 1]) {
  // Recursive function for fibonacci series
  if (num < 2) return result.slice(0, -num);
  if (result.length === num) return result;

  return fibsRec(num, [
    ...result,
    result[result.length - 1] + result[result.length - 2],
  ]);
}

console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(8));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(8));
