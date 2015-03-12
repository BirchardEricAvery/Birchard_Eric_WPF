/**
 Name:       Eric (Avery) Birchard
 Assignment: Expressions I
 Date:       3/11/15
 Class:      SDI 1503
 Term:       1
 */

//alert("test"); First js file test

//Fuel mileage calculator and gas left in tank

//variables

//TODO: declare variables


var startingGallons      //number variable
var milesDriven          //number variable
var vehicleType          //sting variable
var isThereGasLeftOver   //boolean variable
var listedOUt = array()  //array variable for console output consolidation
var fillUp               //numerical variable for filling up tank in gallons
var MPG                  //variable for miles per gallon
var isThereGasLeftOver   //declaration of Boolean variable
var G                    //declare variable for gallons used

//2 examples of arithmetic operators + and -, /, *
//example of an array used as part of the calculation
//string variable as output
//2 assignment operators


//TODO: prompts
//data types number, string, boolean, array

vehicleType = prompt("What type of vehicle do you drive?");          //prompt for string input from user

startingGallons = prompt("Starting fuel in tank");                   //prompt for number input from user

milesDriven = prompt ("How many miles have you driven so far")       //prompt for number input for miles driven

fillUp = prompt ("How many gallons did it take to fill your tank?"); //prompt for number of gallons it took to fill tank


// re-var, meaning my vars to shorter vars for calculations

var V = vehicleType;        //Vehicle type is now V

var SG = startingGallons;   //Starting Gallons is now SG

var MD = milesDriven;       //Miles driven is now MD

var FU = fillUp;            //fillUp is now FU

isThereGasLeftOver = true;  //boolean value

// Calculations for MPG

var G = G = (SG - FU);      //Gallons used

var MPG = MD / (SG - FU);   //MPG calculation

//array data variable outputs
var array = array("Vehicle type" + " " + V,
    "Vehicle type" + " " + G,
    "Miles driven" + " " + MD,
    "Miles per gallon" + " " + MPG);  //super simplistic list array for console information


//Your MPG is: (type of concatenation)
alert("Your" + V + " " + "MPG" + " " + "is:" + " " + MPG);


//TODO: console logs //with descriptive sentences

console.log(vehicleType);                   //string value for vehicle type
console.log(V);                             //assign sting to V for shorter reference
console.log(startingGallons);               //string input for starting gallons
console.log(SG);                            //assign string to SG for numerical value
console.log(milesDriven);                   //string value for miles driven
console.log(MD);                            //assign string to MD for numerical value
console.log(fillUp);                        //string variable for initial fill up.
console.log(FU);                            //assign fillUp to FU for numerical value
console.log(isThereGasLeftOver);            //assign boolean value true to variable is ThereGasLeftOver
console.log(G);                             //Gallons used variable
console.log(MPG);                           //MPG variable for miles per gallon calculation
console.log(array);                         //array for console list purposes
console.log("End outputs, or display using alert" + " " +
" vehicle type" + " + V +" + " " +
"MPG" + " " + MPG);                         //output results put into console

//put in results in multi-lined comment /*
//
// */

//Save PDF flowchart as Birchard_Eric_Expressions_Flowchart.pdf in Expressions Assignment folder

//make a zip file of Birchard_Eric_Expressions_Assignment.zip for backup on FSO

//Make sure code is in the GitHub Repository