const arr = [1]
  if (arr.length < 2) {
    return arr;
  }
  let result = [];
  let left;
  let rigth;
  const count = Math.trunc(arr.length / 2);
  const myLength = arr.length - count;
  if (count * 2 !== arr.length) {
    left = arr.slice(0, count);
    rigth = arr.slice(myLength);
    arr.splice(0, count);
    arr.unshift(rigth);
    result = arr.flat();
    result.splice(myLength);
    result.push(left);
    result = result.flat();
} else {
    left = arr.slice(0, count);
    arr.splice(0, count);
    arr.push(left);
    result = arr.flat();
}



