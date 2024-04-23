// question25: alien color #1

//version that passes
let alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points!");
}

// version that falls (no output)

alien_color = "red";
if (alien_color == "green") {
    // No output because the condition is false
}

console.log("______________________________________________________________________");

// question26: alien color #2

// version that run the if block

alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 10 points.");
}

// versin that run the else block

alien_color = "yellow";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 10 points.");
}

console.log("______________________________________________________________________");

// question27: alien color #3

// green alien version

alien_color = "green";
if (alien_color == "green") {
    console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
} else if (alien_color == "red") {
    console.log("You earned 15 points.");
}

// yellow alien version

alien_color = "yellow";
if (alien_color == "green") {
    console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
} else if (alien_color == "red") {
    console.log("You earned 15 points.");
}

// red alien version

alien_color = "red";
if (alien_color == "green") {
    console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
} else if (alien_color == "red") {
    console.log("You earned 15 points.");
}