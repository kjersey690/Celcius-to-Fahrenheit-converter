// Listen for submit

document.querySelector('#temperature-form').addEventListener('submit', function(e){
	console.log('calculating...');
	
		

		
		

		setTimeout(calculate, 2000);
		e.preventDefault();
	});
document.querySelector('#results').style.display = 'none';

function calculate(){
	const value = document.querySelector('#degrees-celcius').value;
		const degrees = parseFloat(value);
		let fahrenheit = degrees + 32;
		document.getElementById('results').style.display = 'block';
		console.log(`${fahrenheit}`);
		document.getElementById('f').value = `${fahrenheit} F`;

		if(isNaN(value)){
			showError('Please check your numbers');
		}

}

function showError(error){
	document.getElementById('results').style.display = 'none';

	const card = document.querySelector('.card');
	const heading = document.querySelector('.heading');


	const errorDiv = document.createElement('div');
	errorDiv.className = 'alert alert-danger';
	errorDiv.appendChild(document.createTextNode(error));

	card.insertBefore(errorDiv, heading);

	setTimeout(clearError, 3000);

	function clearError(){
		document.querySelector('.alert').remove();
	}
}