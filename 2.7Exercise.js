let value= false;
console.log("value is a " +typeof value)

value= Number(value) //explicitly converts the value variable to a number
console.log("value is a " +typeof value);

let value2= false;
console.log("value2 is a " +typeof value2)

value2= String(value2) //explicitly converts the value2 variable to a string
console.log("value2 is a " +typeof value2);

//more common example

let twoNums="202"
console.log("twoNums is a "+ typeof twoNums)
console.log(twoNums) //is number

twoNums=Number(twoNums)
console.log("twoNums is now a "+typeof twoNums)
console.log(Number(twoNums)) //is string
//Boolean Conversion
let iHaveNumKids=1
let iHaveKids=(Boolean(iHaveNumKids))
console.log( iHaveKids)

let iHaveNumPets=0
let iHavePets=(Boolean(iHaveNumPets))
console.log(iHavePets)
