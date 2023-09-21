
var msg1 = document.getElementById("msg1");
var guessed = document.getElementById("guessed");
var msg = document.getElementById("msg");

var i = 0;

function pop() {
    var res = Math.floor(Math.random() * 10) + 1;

    if (i < 50) {
        i++;
    }
    document.getElementById("msg1").innerHTML = "Number of Guesses are : " + i;

    var guesses = document.getElementById("input-container").value;

    if (guesses < 1 || guesses > 10) {
        alert("Enter A Number Between The Given Range")
    }
    else if (guesses > res) {
        document.getElementById("msg").innerHTML = "Number too big, try again! ";
        document.getElementById("guessed").innerHTML = "Number Guessed is :  " + guesses;
        document.getElementById("generated").innerHTML = "Number Generated was :  " + res;
    }
    else if (guesses < res) {
        document.getElementById("msg").innerHTML = "Number too small, try again! ";
        document.getElementById("guessed").innerHTML = "Number Guessed is :  " + guesses;
        document.getElementById("generated").innerHTML = "Number Generated was :  " + res;
    }

    else if (guesses == res) {
        document.getElementById("msg").innerHTML = "Congratulations You Won! ";
        document.getElementById("guessed").innerHTML = "Number Guessed is :  " + guesses;
        document.getElementById("generated").innerHTML = "Number Generated was :  " + res;
    }
}
