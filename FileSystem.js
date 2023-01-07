const fileSytem = require('fs');
/*#############  Reading Files with readFileSync  ##########*/
const Path = require('path')
const filePath = Path.join(__dirname,'sample.txt');
const filePath_two = Path.join(__dirname,'AnotherSample.txt');
const thistext_two = fileSytem.readFileSync(filePath_two,'utf8')
const thistext = fileSytem.readFileSync(filePath,'utf8')//This function accept two parameters,the filepath and the encodeing method
// try{
    // console.log(JSON.parse(thistext));//At the moment let me conclude that I can only parse string that were originally object...contain the curly braces
    // console.log('\n\n\n\n\n\n\n')
    // console.log(thistext_two);
// }
// catch(err){
    // console.log(err)
// }
//This function receives the file path...
// This module the FS does the work of C(create) R(read) U(update) D(delete) R(rename)


/*#############  Writing Files with writeFileSync  ##########*/
//this function accept the filepath and then write to the file whatever provided in the function parameter space.
// if file is not available it does create it.

// Calling the fileSystem of the above
const Akindele = JSON.stringify(require(`${__dirname}${Path.sep}variables.js`))
console.log(Akindele)
const AkinObj = JSON.parse(Akindele)
console.log('\n\n\n')
console.log(AkinObj)
console.log('\n\n\n')
console.log(AkinObj.person.name)
// const AkinObj = JSON.parse(AkinObj)
fileSytem.writeFileSync(`${__dirname}${Path.sep}log.txt`,Akindele)

//In string literals,you don't need contanenation


// The function overwrites everything in the file...please take caution

//Take note this function doesn't write object to the file,you have to stringify with JSON.stringify(Akindele)

// The impilcation of this is that we can get a file,write an object as a string to it after converting to string




// This read and write function also have the asynchronous form of the function

fileSytem.readFile(filePath,'utf8',function(err,result){
    if(err){
        console.log(err)
    }
    else{
        console.log(result);
    }
})
fileSytem.writeFile(filePath,Akindele,function(err,result){
    if(err){
        return
    }
    else{
        console.log(result)
    }
})
// Need not be for 'utf8'