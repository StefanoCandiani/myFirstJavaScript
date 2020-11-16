
//Notes

function sayHello(numTimes) {
    for(let i = 0; i < numTimes; i++){
        console.log("Hello!");
    };
    
}

var sayBye = function() {
    console.log("Bye!");
}

sayBye();

function sing() {
    console.log("AAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
    console.log("TEEEEEEEEEEEEEEEEE");
}

sing();

function sing2() {
    console.log("LAAAAAA DEEEEEE DOOOOOO");
    console.log("LAAAAAAAAAA");
}

sing2();

function sing3(song) {
    console.log(song);
}

sing3("Laaaaaaaa deeeeeeee Daaaa");
sing3("Badum Tsaaaaa");
sing3("WE WILL WE WILL ROCK YOU!!")

function multiply(a,b) {
    console.log(a * b);
    return(a * b);
}

multiply(5, 10);

function multiply2(a, b) {
    if (Number.a > 10 || Number.b > 10) {
        return "that's too hard!";
    } else {
        return (Number.a * Number.b);
    }
} 

alert(multiply(prompt("Num 1"), prompt("Num2")));



