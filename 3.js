var X = [1, 2, 3];
var Y = [2, 3];
// var Z = []
// var Z = X.filter((x) => !Y.includes(x));
iffor (let j = 0; j < Y.length; j++) {
  for (let i = 0; j < X.length; i++) {
    if (X[i] == Y[j]) {
      break;
    }
  }
  if (i == X.length) {
    return false;
  }
}
console.log(Z);
