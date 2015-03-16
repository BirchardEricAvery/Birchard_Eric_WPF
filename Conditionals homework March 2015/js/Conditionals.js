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
Equality Operators
==  Equality 6 "6"          True
=== Strict Equality 6 "6"   False
!=  Inequality a != b       True
 */
var kidHeight = 42;
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

}