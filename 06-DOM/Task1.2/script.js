onload = function getInputValue(){
	let inputs = document.getElementsByTagName('input');

	for (let i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener('blur', function(){
			console.log(inputs[i].value);
		})
	}
}
