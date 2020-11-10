
var firstNum = prompt("What is your first number?");
var lastNum = prompt("What is your second number?");
var which = prompt("Which action do you want to do? (answer with +, -, /, or, *)")

if (which === "+"){
    alert(Number(firstNum) + Number(lastNum));
}

else if (which === "-"){
    alert(Number(firstNum) - Number(lastNum));
}

else if (which === "/") {
    alert(Number(firstNum) / Number(lastNum));
}

else if (which === "*") {
    alert(Number(firstNum)*Number(lastNum));
}

else {
    alert("Invalid");
}