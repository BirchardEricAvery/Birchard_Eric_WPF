/**
 Name:       Eric (Avery) Birchard
 Assignment: Expressions I
 Date:       3/11/15
 Class:      SDI 1503
 Term:       1
 */

//alert("test"); First js file test

//Fuel mileage calculator and gas left in tank

var startingGallons;      //number variable
var milesDriven;          //number variable
var vehicleType;          //sting variable
var isThereGasLeftOver;   //boolean variable
var fillUp;               //numerical variable for filling up tank in gallons
var mPG;                  //variable for miles per gallon
var isThereGasLeftOver;   //declaration of Boolean variable
var gU;                    //declare variable for gallons used
var SG;                    //start gallons
var MD;                     //miles driven
var FU;                     //gallons to fuel up

//2 examples of arithmetic operators + and -, /, *
//example of an array used as part of the calculation
//string variable as output
//2 assignment operators


//TODO: prompts
//data types number, string, boolean, array

vehicleType = prompt("What type of vehicle do you drive?");          //prompt for string input from user

var startingGallons = prompt("Starting fuel in tank");                   //prompt for number input from user

var milesDriven = prompt ("How many miles have you driven so far");       //prompt for number input for miles driven

var fillUp = prompt ("How many gallons did it take to fill your tank?"); //prompt for number of gallons it took to fill tank

// re-var, meaning my vars to shorter vars for calculations

V = vehicleType;        //Vehicle type is now V

sG = startingGallons;   //Starting Gallons is now SG

mD = milesDriven;       //Miles driven is now mD

fU = fillUp;            //fillUp is now FU


// Calculations for MPG and gallons used

gU = sG - fU;      //Gallons used arithmetic operation 2


mPG = mD/ fU;      //MPG calculation with parentheses prioritization arithmetic operation 2



//Your MPG is: (type of concatenation)

alert("Your" + V + " " + "MPG" + " " + "is:" + " " + mPG + " " + "using" + " " + gU + " " + "Gallons");

isThereGasLeftOver = true;  //boolean value

//array data variable outputs
var myArray;
myArray =  new Array();         //array variable
myArray[0] = "Vehicle type" + " ";
myArray[1] = "MPG," + " " + "and" + " ";
myArray[2] = "Gallons used.";

alert("Types of data used in this program:" + " " + myArray);



//TODO: console logs //with descriptive sentences

console.log(vehicleType);                   //string value for vehicle type
console.log(V);                             //assign sting to V for shorter reference
console.log(startingGallons);               //string input for starting gallons
console.log(sG);                            //assign string to SG for numerical value
console.log(milesDriven);                   //string value for miles driven
console.log(mD);                            //assign string to MD for numerical value
console.log(fillUp);                        //string variable for initial fill up.
console.log(fU);                            //assign fillUp to FU for numerical value
console.log(isThereGasLeftOver);            //assign boolean value true to variable is ThereGasLeftOver
console.log(gU);                             //Gallons used variable
console.log(mPG);                           //MPG variable for miles per gallon calculation
console.log(myArray[0], myArray[1], myArray[2]);   //array for console list purposes


//put in results in multi-lined comment /*
//
// */

//Save PDF flowchart as Birchard_Eric_Expressions_Flowchart.pdf in Expressions Assignment folder

//make a zip file of Birchard_Eric_Expressions_Assignment.zip for backup on FSO

//Make sure code is in the GitHub Repository
