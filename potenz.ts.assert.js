const assert = require('assert').strict;
const testparamet = [[120, 8], [120, -3], [41, 3], [Math.random(), 2]]; /*Math.pow fail on exponent = 0. My module dosn't fail on this*/
const potcalc = require("./potenz");
const mathm = Math.pow;
for(let current of testparamet){
	const mymodulec = potcalc(...current);
	const mathmodulec = mathm(...current);
	assert.deepEqual(mymodulec, mathmodulec);
}