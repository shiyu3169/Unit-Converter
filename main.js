// Select input field
const input = document.querySelector("#input");

// Select unit selections
const unit = document.querySelector("#unit");

const convert = () => {

    // Get value of user input and units
    const value = input.value;
    const unitValue = unit.value;
    const output = document.querySelector("#output");

    // Show output when there is a value
    (value !== "") ? 
      output.style.display = "block" : output.style.display = "none";

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

const card1 = document.querySelector("#card-1");
const card2 = document.querySelector("#card-2");
const card3 = document.querySelector("#card-3");

const convertLbs = value => {
    card1.querySelector('h4').textContent="Grams:"
    card2.querySelector('h4').textContent="Kilograms:"
    card3.querySelector('h4').textContent="Ounces:"

    card1.querySelector('div').textContent= value * 453.592
    card2.querySelector('div').textContent= value * 453.592 / 1000
    card3.querySelector('div').textContent= value * 16
}

const convertGrams = value => {
    card1.querySelector('h4').textContent="kilograms:"
    card2.querySelector('h4').textContent="Ounces:"
    card3.querySelector('h4').textContent="Lbs:"

    card1.querySelector('div').textContent= value * 1000;
    card2.querySelector('div').textContent= value * 0.035274;
    card3.querySelector('div').textContent= value * 0.00220462;
}

// Catch user input event and unit change
input.addEventListener("input", convert);
unit.addEventListener("input", convert);