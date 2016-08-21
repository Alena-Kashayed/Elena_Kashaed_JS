onload = function(){
	let firstInput = document.getElementsByTagName('input')[0];
	let secondInput = document.getElementsByTagName('input')[1];
	let textArea = document.getElementsByTagName('textarea')[0];

	firstInput.addEventListener('change', function(){
		textArea.style.color = firstInput.value;
	});

	secondInput.addEventListener('change', function(){
		textArea.style.backgroundColor = secondInput.value;
	});
}