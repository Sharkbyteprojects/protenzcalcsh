const testparamet = [[120, 8], [120, -3], [41, 3], [Math.random(), 2]]; /*Math.pow fail on exponent = 0. My module dosn't fail on this*/
for(let current of testparamet){
	const mymodulec = require("./potenz")(...current);
	const mathmodulec = Math.pow(...current);
	require('assert').strict.deepEqual(mymodulec, mathmodulec);
}