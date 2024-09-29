// My speed limit will be 60 and the output should print "Ok"
let speed = 60

// If my speed is between 40 and 70, it's okay and within the speed limit.
if (speed>=40 && speed<=70) {
    console.log("Ok")
}

// I decided to increase the points to 2 instead of 1 for over speeding. If the speed exceeds 70, the person will get a demerit point.
else if (speed>=75 && speed<=100) {
    console.log("Demerit points:2")
}

// If the speed was above 100, the output should print " License Suspended"
else {
    console.log("License suspended")
}