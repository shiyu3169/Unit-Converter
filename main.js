// hide output
// document.querySelector('#output').style.display="none";
document.querySelector('#output').style.visibility="hidden";

// Catch user input
document.querySelector('#inputValue').addEventListener('input', convert);

function convert(e){
	// Test the function is called
	// console.log("function is called");

	// Get user input value
	// let input = document.querySelector('#inputValue').value
	let input = e.target.value;
	// console.log(input);

	//Show output
	// document.querySelector('#output').style.display="block";
	document.querySelector('#output').style.visibility="visible";

	// pounds to grams
	document.querySelector('#gram').innerHTML = input * 453.592;

	// Pounds to kilograms
	document.querySelector('#kg').innerHTML = input * 453.592 / 1000;

	// Piunds to ounces
	document.querySelector('#oz').innerHTML = input * 16;
}