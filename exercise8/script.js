// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

let user = {
    username:"Bobby",
    password: "Bobby123"
}

// 2. Create an array which contains the object you have made above and name the array "database".

let database = [
    {
        username: "Francisco",
        password: "Francisco14512741209=-128593785238-0)^&^*&%"
    }
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

let newsfeed = [
    {
        username: "Stefano",
        timeline: "Nov 12 2020"
    },

    {
        username: "Robert",
        timeline: "Jan 15 2019"
    },

    {
        username: "Fief Lord Emmanuel",
        timeline: "Aug 20th 1845"

    }
];

let userNameInput = prompt("What's your Username?");
let passWordInput = prompt("What's your Password?");

function signIn (userN, pass) {
    if(userN === database[0].username &&
       pass === database[0].password) {
           
       }
}