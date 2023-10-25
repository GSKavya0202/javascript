const v1=3.45
let v2="kavya"
var v3="man"
console.table([v1,v2,v3])//3.45,'kavya','man'

//v1=2000
v2="sai"
v2="female"
console.table([v1,v2,v3])
/*v1=2000
  ^
TypeError: Assignment to constant variable. */

//if we comment out v1 and try now then the output will be 3.45,'sai','female'

v4="bengaluru"
console.log(v4)//bengaluru
v4="chennai"
console.log(v4)//chennai

let v5 //we have only declared the variable but not intiilized it 
console.log(v5)   //undefined

