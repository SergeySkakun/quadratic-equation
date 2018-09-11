module.exports = function solveEquation(equation) {
  let array = equation.split(" ");

  let a = +array[0];
  let b = +(array[3] + array[4]);
  let c = +(array[7]+ array[8]);
  let x1, x2;

  let D = b * b - 4 * a * c;

  x1 = Math.round((-b + Math.sqrt(D)) / (2 * a));
  x2 = Math.round((-b - Math.sqrt(D)) / (2 * a));

  return x1 < x2 ? [x1, x2] : [x2, x1];
}
