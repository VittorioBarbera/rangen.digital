document.querySelector("#btn-generate").addEventListener("click", generateRandomNumber);


function generateRandomNumber() {

    let randomNumber = "";

    if (document.getElementById("n1").value >= 0 && document.getElementById("n2").value > document.getElementById("n1").value) {

        randomNumber = getRandomNumber();
    }
    else {

        randomNumber = "Invalid Values";
    }

    document.querySelector("#number").textContent = randomNumber;

}


function getRandomNumber() {

    const n1 = document.getElementById("n1").value;
    const n2 = document.getElementById("n2").value;

    var diff = n2 - n1 + 1;

    var numGenIndex = parseInt(Math.random() * diff);
    var number = parseInt(numGenIndex) + parseInt(n1);

    return number;

}