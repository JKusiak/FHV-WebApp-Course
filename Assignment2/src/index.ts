import square from "./ts/square";
import sum from "./ts/sum";

document.writeln("The sum of 10 and 5 is ", sum(10, 5).toString(), "<br/>");
document.writeln("The square of 12 is ", square(12).toString(), "<br/>");
document.writeln("Some square function that should be equal to 10000 and in reality also is ", square(100).toString(), "<br/>");
document.writeln("And one more square function call to get a planned type error ", square(25), "<br/>");
if(0==0){
    console.log("I just invoked a linting error");
}


