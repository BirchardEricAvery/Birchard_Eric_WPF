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

console.log("The Area of the Rectangle is" + " " + answer);  //reporting answer via console log

//Circumference of a circle C = 2 * pie * r, or 2 * 3.14 * x

//parameters of function

var r = prompt("What is the Radius of your circle?"); //Radius of your circle
parseInt(r);                        //making variable r a number

var t = 2;                          //two
var p = 3.14                        //pie
var x = calcC(t, p, r);             //putting function calcC into x

function calcC(t, p, r){            //making function calcC to calculation the area of a circle
    var circ = t * p * r;           //putting variables, or calculations into circ variable
    return circ;                    //returning, or spitting out circ variable
};

console.log("The circumference of the Circle is" + " " + x);   //logging x or area of a circle to console





//Result to print to console, the circumference of the circle is X":"
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