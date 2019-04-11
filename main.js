// Select input field
var input = document.querySelector("#input");

// Select unit selections
var unit = document.querySelector("#unit");

// Catch user input event and unit change
input.addEventListener("input", convert);
unit.addEventListener("input", convert);

function convert() {

    // Get value of user input and units
    var value = input.value;
    var unitValue = unit.value;
    var output = document.querySelector("#output");

    // Show output when there is a value
    if(value !== "") {
        output.style.display = "block";
    } else {
        output.style.display = "none";
    }

    // check unit type
    switch(unitValue) {
        case "lbs":
            convertLbs(value);
            break;
        case "grams":
            convertGrams(value);
            break;
        case "kilograms":
            break;
        case "ounces":
            break;
        case "meters":
            break;
        case "miles":
            break;
        case "inches":
            break;
    }
}  

var card1 = document.querySelector("#card-1");
var card2 = document.querySelector("#card-2");
var card3 = document.querySelector("#card-3");

function convertLbs(value) {
    card1.querySelector('h4').textContent="Grams:"
    card2.querySelector('h4').textContent="Kilograms:"
    card3.querySelector('h4').textContent="Ounces:"

    card1.querySelector('div').textContent= value * 453.592
    card2.querySelector('div').textContent= value * 453.592 / 1000
    card3.querySelector('div').textContent= value * 16
}

function convertGrams(value) {
    card1.querySelector('h4').textContent="kilograms:"
    card2.querySelector('h4').textContent="Ounces:"
    card3.querySelector('h4').textContent="Lbs:"

    card1.querySelector('div').textContent= value * 1000;
    card2.querySelector('div').textContent= value * 0.035274;
    card3.querySelector('div').textContent= value * 0.00220462;
}