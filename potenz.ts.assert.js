const testparamet = [
  [120, 8],
  [120, -3],
  [41, 3],
  [Math.random(), 2],
  [2, 0],
];
for (let current of testparamet) {
  const mymodulec = require("./potenz")(...current);
  const mathmodulec = Math.pow(...current);
  require("assert").strict.deepEqual(mymodulec, mathmodulec);
}
