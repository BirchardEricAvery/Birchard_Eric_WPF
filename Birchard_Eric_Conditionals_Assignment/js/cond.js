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
var avgSpeed
var gallonsPerDay
var costPerDay
var milesPerDay


//mPG variable input and making converting string to a number

mPG = prompt("What is your vehicles MPG");                  //prompt user for miles per gallon of their vehicle
parseInt(mPG);                                              //convert string to integer
console.log("Users input for variable mPG" + "  " + mPG);    //console log for MPG input
mpg = mPG;                                                  //moving mPG value into mpg variable

    // else statements and, or confirmation


if(mpg <= 0 || NaN  === false){                                                 //Or statement and boolean usage
    mpg = prompt("Wrong data type, please enter correct data type for approximate miles per gallon:");   //prompt for correct data usage
}else if(mpg === false){                                                        //else if statement for boolean value
    console.log("Incorrect data type for mpg");                                 //console log for incorrect data type
}else{alert("Correct data type input received:")  + "  " + mpg === true;         //confirmation of correct data type

}
parseInt(mpg);                                                                  //convert string to integer


//totalMiles variable input and converting string to a number

        totalMiles = prompt("What will be the total miles for planned trip?");          //prompt user for total miles driven
        parseInt(totalMiles);                                                           //convert string to integer
        console.log("Users input for variable totalMiles" + "  " + totalMiles);          //console log for totalMiles input
        tm = totalMiles;                                                                //moving totalMiles value into tm variable


    // else statements and, or confirmation

if(tm <= 0 || NaN  === false){                                                  //Or statement and boolean usage
    tm = prompt("Wrong data type, please enter correct data type for total miles for trip:");   //prompt for correct data usage
}else if(tm === false){                                                         //else if statement for boolean value
    console.log("Incorrect data type for tm, totalMiles");                      //console log for incorrect data type
}else{alert("Correct data type input received:") + " " + tm === true;           //confirmation of correct data type

}
parseInt(tm);                                                                   //convert string to integer


//CostPerGallon variable input and converting string to a number

        costPerGallon = prompt("What is the approximate cost in dollars per gallon of fuel?");           //prompt user for total cost per gallon of fuel
        parseInt(costPerGallon);                                                                         //convert string to integer
        console.log("Users input for variable costPerGallon" + "  " + costPerGallon);                     //console log for totalMiles input
        cost = costPerGallon;                                                                            //moving costPerGallon value into cost variable


    // else statements and, or confirmation

if(cost <= 0 || NaN  === false){                                                                           //Or statement and boolean usage
    cost = prompt("Wrong data type, please enter correct data type for approximate cost per gallon:");   //prompt for correct data usage
}else if(cost === false){                                              //else if statement for boolean value
    console.log("Incorrect data type for cost per gallon");            //console log for incorrect data type
}else{alert("Correct data type input received:") + cost === true;        //confirmation of correct data type

}
parseInt(cost);                                                        //convert string to integer


//stopS variable input and converting string to a number

        stopS = prompt("How many stops will you be making on the trip?");           //prompt user for the number of stops on the trip
        parseInt(stopS);                                                            //convert string to integer
        console.log("Users input for variable stopS" + "  " + stopS);                //console log for stopS input
        s = stopS;                                                                  //moving stopS value into s variable


// else statements and, or confirmation

if(s <= 0 || NaN  === false){                                       //Or statement and boolean usage
    s = prompt("Wrong data type, please enter correct data type for total stops on trip:");   //prompt for correct data usage
}else if(s === false){                                              //else if statement for boolean value
    console.log("Incorrect data type for s, stopS");                //console log for incorrect data type
}else{alert("Correct data type input received:") + s === true;      //confirmation of correct data type

}
parseInt(s);                                                        //convert string to integer



//stopS variable input and converting string to a number

avgSpeed = prompt("What is you planned average speed in miles per hour?");      //prompt user for average speed
parseInt(avgSpeed);                                                             //convert string to integer
console.log("Users input for variable avgSpeed" + "  " + avgSpeed);              //console log for avgSpeed input
as = avgSpeed;                                                                  //moving avgSpeed value into as variable


    // else statements and, or confirmation

if(as <= 0 || NaN  === false){                                      //Or statement and boolean usage
    as = prompt("Wrong data type, please enter correct data type for estimated average speed in miles per hour:");   //prompt for correct data usage
}else if(as === false){                                             //else if statement for boolean value
    console.log("Incorrect data type for as, avgSpeed");            //console log for incorrect data type
}else{alert("Correct data type input received:") + as === true;      //confirmation of correct data type

}
parseInt(as);                                                        //convert string to integer

//Calculations and display
milesPerDay = tm / s;
alert("miles per day" +  " " + milesPerDay);

hoursDrivingPerDay = milesPerDay / as;
alert("hours driving per day" +  " " + hoursDrivingPerDay);

gallonsPerDay = milesPerDay / mpg;
alert("gallons per day" + " " + gallonsPerDay);

costPerDay = gallonsPerDay * cost;
alert("cost per day" + " " + "$" + costPerDay);

mpg  =! false || true ? console.log("mpg, or miles per gallon input correct data type") : console.log("False input  received.  Data incomplete")

tm  =! false || true ? console.log("tm, or total miles input correct data type") : console.log("False input  received.  Data incomplete")

cost  =! false || true ? console.log("cost or approximate cost per gallon input correct data type") : console.log("False input  received.  Data incomplete")

s  =! false || true ? console.log("s, or number of stops input correct data type") : console.log("False input  received.  Data incomplete")

as  =! false || true ? console.log("as, or average speed input correct data type") : console.log("False input  received.  Data incomplete")

alert("Driving" + " " + milesPerDay + " " + "miles per day" + " " + "it will take" + " " + hoursDrivingPerDay +
 " " + "hours per day using" + " " + gallonsPerDay + " " + "gallons of fuel costing" + " $" + costPerDay +
" " + "a day to reach your destination.");

/*
Values input were 20mpg, 1000 miles, $2 per gallon, 4 stops, at 50mph.
Results returned were:
    250 miles per day
    5 hours driving per day
    12.5 gallons used per day

When entering empty strings I was prompted wrong data type, please enter correct data type
*/



