
var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.

function checkDriverAge() {
    age = Number.prompt("What is your age?");
    if(age === 18){
        alert("Congratulations on your first year of driving!")
    } else if (age < 18) {
        alert("Sorry, but you are too young to drive, powering off");
    } else if(age > 150) {
        alert("Aren't you too old to drive? You're like " + age + " years old!!");
    } else {
        alert("Powering on, enjoy your ride!");
    }
}

checkDriverAge();

// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?


//2. Create another function that does the same thing, assign it to checkDriverAge2 variable using Function Expression.
let checkDriverAge2 = () => {
    age = Number.prompt("What is your age?");
    if(age === 18){
        alert("Congratulations on your first year of driving!")
    } else if (age < 18) {
        alert("Sorry, but you are too young to drive, powering off");
    } else if(age > 150) {
        alert("Aren't you too old to drive? You're like " + age + " years old!!");
    } else {
        alert("Powering on, enjoy your ride!");
    }    
}

checkDriverAge2();


//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!" 

function checkDriverAge3 (age) {
    if(age === 18){
        alert("Congratulations on your first year of driving!")
    } else if (age < 18) {
        alert("Sorry, but you are too young to drive, powering off");
    } else if(age > 150) {
        alert("Aren't you too old to drive? You're like " + age + " years old!!");
    } else {
        alert("Powering on, enjoy your ride!");
    }     
}