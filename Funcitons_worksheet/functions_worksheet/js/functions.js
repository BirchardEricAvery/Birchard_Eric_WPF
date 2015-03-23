/*  Name:       Eric Avery Birchard
    Assignment: Functions worksheet homework
    Date:       21 - , March 2015
    Class:      SDI
    Term:       I
 */
//Calculate the Area of a Rectangle

var answer = calcArea(5, 6);    //putting function calcArea into answer

 function calcArea(w, h) {      //making function calcArea using w & h variables
 var area = w * h;              //putting w & h into area

 return area;                   //function returning, or spitting out information via variable area

 };

 console.log("The Area of the Rectangle is:" + " " + answer); //reporting answer via console log


 //this is a function
 //function calcAreaF(width, height){
 //var area = width * height;
 //return area;
 //}


/*
//Anonymous function basic used for brevity

//var functionName = function(){
//code to run
}

var calcArea =function(width, height){ //defining
    //code the function runs
    var area = width * height;
    return area;
}
var a = calcArea(20, 30); //invoking happen after

console.log(a);
*/