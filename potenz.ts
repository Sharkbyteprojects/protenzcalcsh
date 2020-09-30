/*
<c>Sharkbyteprojects
Main App
Better Than Math.pow
*/
function proten(basis: number, exponent: number): number {
  let numbertom: number = 0;
  if (exponent != 0) {
    let multi: boolean = true;
    let first: boolean = true;
    let exponents: number = exponent;
    if (exponent < 0) {
      multi = false;
      exponents = exponent * -1;
    }
    for (let numb = 0; numb < exponents; numb++) {
      if (first) {
        numbertom = basis;
        first = false;
      } else {
        numbertom *= basis;
      }
    }
    if (!multi) {
      numbertom = 1 / numbertom;
    }
  }
  return numbertom;
}
module.exports = proten;