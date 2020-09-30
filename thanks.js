const thanks = `Thanks for Installing protenzcalcsh!${"\n"}protenzcalcsh <c> Sharkbyteprojects${"\n"}`;
console.log(thanks);
require("fs").unlink(__filename, (err) => {if(err){console.log(err);}});