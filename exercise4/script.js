// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:
//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"
// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"
// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"



let age = Number(prompt("What is your age?"));
let bal = Number(prompt("What is your BAL currently?")); 

if(bal <= .08){
    if(age < 18){
        alert("Sorry, you are too young to drive this car. Powering off");
    } else if(age === 18){
        alert("Congratulations on your first year driving. Enjoy the ride!");
    } else if(age > 18) {
        alert("Powering On. Enjoy the ride!");
    }
}
else {
    alert("You are in no shape to drive! I'm calling a taxi");
}
