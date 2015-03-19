/*

 Name:       Eric (Avery) Birchard
 Assignment: Conditionals 2
 Date:       18, March 2015
 Class:      SDI
 Term:       I

 */


var mPG
var totalMiles
var costPerGallon
var stopS
 /*var gallonsPerDay
 var costPerDay
 var milesPerDay
 var avgSpeed
 */

//mPG variable input and making converting string to a number

mPG = prompt("What is your vehicles MPG");          //prompt user for miles per gallon of their vehicle
parseInt(mPG);                                      //convert string to integer
console.log("Users input for variable mPG" + mPG);  //console log for MPG input
mpg = mPG;                                          //moving mPG value into mpg variable

// else statements and, or confirmation


if(mpg <= 0 || NaN  === false){                                         //Or statement and boolean usage
    mpg = prompt("Wrong data type, please enter correct data type:");   //prompt for correct data usage
}else if(mpg === false){                                                //else if statement for boolean value
    console.log("Incorrect data type");                                 //console log for incorrect data type
}else{alert("Correct data type input received:") + mpg === true;        //confirmation of correct data type

}

parseInt(mpg);                                                          //convert string to integer



//totalMiles variable input and converting string to a number

        totalMiles = prompt("What will be the total miles driven?");    //prompt user for total miles driven
        parseInt(totalMiles);                                           //convert string to integer
        console.log("Users input for variable mPG" + totalMiles);       //console log for totalMiles input
        tm = totalMiles;                                                //moving totalMiles value into tm variable

//CostPerGallon variable input and converting string to a number

        costPerGallon = prompt("What is the approximate cost per gallon of fuel?");    //prompt user for total cost per gallon of fuel
        parseInt(costPerGallon);                                                       //convert string to integer
        console.log("Users input for variable mPG" + costPerGallon);                   //console log for totalMiles input
        cost = costPerGallon;                                                          //moving costPerGallon value into cost variable

//stopS variable input and converting string to a number

        stopS = prompt("How many stops will you be making on the trip?");  //prompt user for the number of stops on the trip
        parseInt(stopS);                                                   //convert string to integer
        console.log("Users input for variable mPG" + stopS);               //console log for stopS input
        s = stopS;                                                         //moving stopS value into s variable


        alert("test s" + " " + s);








/*





//2 different arithmetic operators + - * /

//2 conditional statements - with an else if or more look up NaN
//diamond if number true, not true = ! true

//1 ternary conditional statement ?;
//var elvisLives = Math.PI > 4 ? "Yep" : "Nope";

//1 logical operator && || !

//3 prompts with validation
//Number(mpg)  •	parseInt(x)

//validation college blank, prompt saying you forgot something, collect that info and put into a variable


//concatenations

//console.logs

//multi-lined comment of test value results, eg typed in 5 for length and my calculation gave 30 for the area




//compress Birchard_Eric_Conditionals_Assignment.zip to FSO

//notes

/*      Comparisons
 >, <, >=, <=
 != not equal to
 = assignment
 == equal to comparing
 // if, else two blocks of code...else if multiple blocks


 Equality Operators/ pairs
 ==  Equality 6 "6"          True
 === Strict Equality 6 "6"   False
 !=  Inequality a != b       True
 Logical Operators


 Compare pairs (boolean)/ relational
 &&  And             between expressions, boolean, not just a variable
 a === b && b === c
 ||  Or (double pipe)
 ^   Exclusive Or (XOR)  one or the other, not both
 !   Not

 Ternaries
 ?       Return a value
 */
/*var kidHeight = 42;
 var minHeight = 48;
 var wParentHeight = 45; //the height of the kid with parent


 //if the child is old enough, print to the console "you can ride!"
 //if the kid is over 48 inches in height

 if(kidHeight > minHeight) {

 console.log("You can ride the coaster!");
 } else if(kidHeight > wParentHeight){

 console.log("You can ride, but only with a parent present!");
 }else{

 console.log("Sorry kid you've got some growing to do first!");

 }
 var budget = 300;
 var iPhonePrice = 199.99;
 var wonLottery = true;

 //if the price of the phone is less our budget AND if our paycheck is over 300
 if(iPhonePrice < budget || wonLottery === true){
 console.log("We can buy the phone!");
 }else{
 console.log("No phone for you!!");
 }*/

//Conditional Logic - Ternary Operators

//var gpa = 48;

//if the gpa the min 2.0 score, the student can graduate

/*if(gpa > 2.0){
 console.log("You can graduate!")
 }else{
 console.log("GPA is too low!")
 }

 // (gpa > 2.0) ? console.log("You can graduate!"):console.log("GPA too low!");
 var age = 11;
 var book;
 If the child is under 10, they get Green Eggs and Ham, otherwise they get The Time Machine

 book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";

 console.log("book");

var age = prompt("Enter age:", "");
 var isOverSixty = parseInt(age) > 60;
 console.log("Older than 60: " + isOverSixty);


*/
