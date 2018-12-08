// var os = require("os");
// var message = "The platform is ";

// function main(){
//    console.log(message + os.platform());
// }
// main();

// var express = require("express");
// var app = express();
// app.get("/", function(req, res){
//     res.send("<h1>Hello world</h1>");
//  }); 
// app.get("/name/:name", function(req, res){
//     var name = req.params.name;
//     res.send("<h1>Hello " + name + "</h1>");
//  });
//  app.get("/name/:google", function(req, res){
//     var google = req.params.google;
//     res.send(res.redirect('http://google.com'));
//  });
 
//  app.listen(3000, function(){
//     console.log("Example is running on port 3000");
//  });
// var Square = require("./module");
// var mySquareObject = new Square(5);

// function main() {
//    console.log(mySquareObject.getArea());
// }
// main();
// var fs = require('fs');

// function main(){
//    var file  = "hello.txt";
//    fs.appendFileSync(file, "Hello world\n");
// }
// main();
// var fs = require('fs');
// var dummyText = "Apple yep";

// function main() {
//    fs.writeFileSync("dummytext.txt", dummyText);
//    var text = fs.readFileSync("dummytext.txt").toString();
//    console.log(dummyText == text);
//    console.log(text);
//    fs.writeFileSync("undummytext.txt",
//        text.replace("Apple", "Microsoft")
//    );
// }
// main();
var obj = 
{
    "first_name": "Vardan",
    "last_name": "Hovsepyn",
    "age": 13,
    "tumo_student": true
}
var myJSON = JSON.stringify(obj);
var fs = requie('fs')

function main(){
    var file  = "obj.json";
    fs.appendFileSync(file, myJSON);
 }
 main();