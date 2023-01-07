// console.log("Hello World!")// const functList = require('./functionCollection');
// // console.log(functList)
// const Person = {
//     name : "Akindele Daniel",
//     age : 22,
//     doings : "Student",
//     id : "U19AE1019"
// }
// // console.log(Person.age);

// function brief(){
//     console.log(`My name is ${Person.name} and I am ${Person.age} years of age`);
// }


// // console.log(functList)


// // module.export = {Person,brief}
// // console.log(module.export)





// const {factorial,sinValue, cosValue} = require('./functionCollection')//Destructuring... an object
// const {names} = require('./variables')
// // console.log(.cosValue(45));
// // console.log(disfunctions.sinValue(45));
// console.log(names,cosValue,sinValue,factorial)
// sinValue(30)
// sinValue(30)



// Built in Modules...
// 1.OS
// 2.PATH
// 3.FS
// 4.HTTP


const Os = require('os');
const UserInfo = Os.userInfo()
console.log(UserInfo)
console.log(Os.uptime());

const currentOs = {
    name : Os.type(),
    release : Os.release(),
    TotalMem : Os.totalmem(),
    freemem :Os.freemem()
}
console.log(currentOs)

// The Path Module

  
// Revision
 
const Person = require('./variables')

console.log(`${Person.person.name} is ${Person.person.age} years of age`);
