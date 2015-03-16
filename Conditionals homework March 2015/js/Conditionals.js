/*  Name:       Eric (Avery) Birchard
    Assignment: Conditionals homework
    Date:       15, March 2015
    Class:      SDI
    Term:       I
 */

/*  >, <, >=, <=
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
 */
/*var kidHeight = 42;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with parent


//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight) {
    //you can ride!
    console.log("You can ride the coaster!");
} else if(kidHeight > wParentHeight){
    //you can ride with a parent present
    console.log("You can ride, but only with a parent present!");
}else{
    //sorry you have growing to do
    console.log("Sorry kid you've got some growing to do first!");

}*/

var budget = 300;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less our budget AND if our paycheck is over 300
if(iPhonePrice < budget || wonLottery === true){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!!");
}