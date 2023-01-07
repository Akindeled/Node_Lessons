const path = require('path');
console.log(path)

try{
    console.log(path.dirname('C:\\Users\\Dan\\Desktop\\CS50M\\Courses\\C++ Programming Course - Beginner to Advanced.mp4'))
}catch(err){
    console.log(`Error : ${err}`)
}


// Path
// This is one of the built in module of the node js.
// It does contain method that includes :
    // join(),resolve(),dirname(),basename()etc...

    // join(): with this function you can have a complete path to a file when you provide the folders in order down to the file



    // Let us grab the home directory with the OS module

    const home = require('os').userInfo().homedir

    console.log(home)
    const path2document = path.join(home,path.sep,'Documents');
    console.log(path2document)
    

    // resolve returns an absolute path to a file when the folders to a file are given in order,
//  console.log(path.sep)//Separator in this system is returned

//   Please take not that the reason for all these path modules jargons is that the program will be running on different platform and the separator may vary from device to device