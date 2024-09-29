//0-100 
// My mark is 75 and in the output, it should display that the student got a "B" as their mean grade.
let mark = 75
if (mark>=0 && mark<=40) {
    console.log ("E");
}

// If my if conditional statement is false, it will move down to the else if conditional statements to find which grade the student got. 


else if (mark>=40 && mark<=49) {
    console.log ("D");
}

else if (mark>=49 && mark<=59) {
    console.log ("C");
}

else if (mark>=60 && mark<=79) {
    console.log ("B");
}

else if (mark>=79 && mark<=100) {
    console.log ("A");
}

// This is if the student didn't get the required grade / missed an exam
else {
    console.log("Invalid input");
}