// console.log('This is HTTP Built in Module');

// const myHTTP = require('http')
// const server = myHTTP.createServer((req,res)=>{
//     res.write("Welcome to my portal")
//     res.end
// })
// console.log(server)
// server.listen(8000)
// // console.log(myHTTP)

// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//     console.log(req)
//   res.write('Hello World!'); 
//   //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080



// Let us see how it works here..

// const http = require('http')
// http.createServer(function(req,res){
//     console.log(req);
//     res.write("Awesome Me...Akindele Daniel")
//     res.end()

// }).listen(8000)
const markupDefault = `
<div class="head">
<style>
    .head{
        padding: 20px 30px;
        color: aliceblue;
        background: rgb(2, 54, 99);
        letter-spacing: 2px;
        text-align: center;
        text-transform: uppercase;
    }
</style>
<h1>Hello World</h1>
</div>

`
const markupMission = `
<div class="head">
<style>
    .head{
        padding: 20px 30px;
        background: aliceblue;
        color: rgb(2, 54, 99);
        letter-spacing: 2px;
    }
</style>
<h1>We are who we are</h1>
</div>

`
const Default = `
<div class="head">
<style>
    .head{
       width:200px;
       height:50px;
       position:absolute;
       top:50%;
       left:50%;
       margin-left:-100px;
       margin-top:-25px;
       background: rgb(2, 54, 99);
       color:aliceblue;
       letter-spacing:3px;  
    }
</style>
<h1>Page requested not found</h1>
</div>

`

const http = require('http')//The required built module.
http.createServer(function(req,res){//This module accepts a function as a paramter
// The function accepts default res and req as parameters
    // Take note that the req has a url variable
    // if(req.url)
    if(req.url == '/'){
        res.end(markupDefault)
    }
    if(req.url == '/mission'){
        res.end(`${markupDefault}${markupMission}`)
    }
    res.end(Default)//Default case
}).listen(3000)