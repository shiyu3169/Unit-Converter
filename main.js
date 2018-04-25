// hide output
// document.querySelector('#output').style.display="none";
// document.querySelector('#output').style.visibility="hidden";

// Catch user input
document.querySelector('#inputValue').addEventListener('input', convert);

// Catch unit selection
document.querySelector('#unit').addEventListener('input', convert);

function convert(e){

	// Test the function is called
	// console.log("function is called");

	// Get user input value
	let input = document.querySelector('#inputValue').value
	// let input = e.target.value;
	// console.log(input);

	// Get user's unit selection
	let unit = document.querySelector('#unit').value;
	// console.log(unit);

	// check the unit value
	switch(unit){
		case 'lbs':
			convertLbs(input);
			break;
		case 'grams':
			convertGrams(input);
			break;
		case 'kilograms':
			convertGrams(input);
			break;
		case 'meters':
			convertMeters(input);
			break;
	}

	//Show output
	// document.querySelector('#output').style.display="block";
	// document.querySelector('#output').style.visibility="visible";

	// // pounds to grams
	// document.querySelector('#gram').innerHTML = input * 453.592;

	// // Pounds to kilograms
	// document.querySelector('#kg').innerHTML = input * 453.592 / 1000;

	// // Piunds to ounces
	// document.querySelector('#oz').innerHTML = input * 16;
}

function convertLbs(num) {
	console.log('Value is: ' + num);
	document.querySelector('#output').innerHTML =
			// Grams
			'<div class="card bg-primary mb-2">' +
				'<div class="card-header">' +
					'<h4>Grams:</h4>' +
					'<div>' + num * 453.592 +'</div>' +
				'</div>' +
			'</div>' +
			// Kilograms
			'<div class="card bg-success mb-2">' +
				'<div class="card-header">' +
					'<h4>Kilograms:</h4>' +
					'<div>'+ num * 453.592 / 1000 +'</div>' +
				'</div>' +
			'</div>' +
			// Ounces
			'<div class="card bg-danger">' +
				'<div class="card-header">' +
					'<h4>Ounces:</h4>' +
					'<div>' + num * 16 +'</div>' +
				'</div>' +
			'</div>' 
}

function convertGrams(num) {
	document.querySelector('#output').innerHTML =
			// Grams
			'<div class="card bg-primary mb-2">' +
				'<div class="card-header">' +
					'<h4>Pounds:</h4>' +
					'<div>' + num * 0.00220462 +'</div>' +
				'</div>' +
			'</div>' +
			// Kilograms
			'<div class="card bg-success mb-2">' +
				'<div class="card-header">' +
					'<h4>Kilograms:</h4>' +
					'<div>'+ num / 1000 +'</div>' +
				'</div>' +
			'</div>' +
			// Ounces
			'<div class="card bg-danger">' +
				'<div class="card-header">' +
					'<h4>Ounces:</h4>' +
					'<div>' + num * 0.035274 +'</div>' +
				'</div>' +
			'</div>' 
}

function convertMeters(num){
	document.querySelector('#output').innerHTML =
			// Miles
			'<div class="card bg-primary mb-2">' +
				'<div class="card-header">' +
					'<h4>Miles:</h4>' +
					'<div>' + num * 0.000621371 +'</div>' +
				'</div>' +
			'</div>' +
			// Inches
			'<div class="card bg-success mb-2">' +
				'<div class="card-header">' +
					'<h4>Inches:</h4>' +
					'<div>'+ num * 39.370066559999998 +'</div>' +
				'</div>' +
			'</div>'
}