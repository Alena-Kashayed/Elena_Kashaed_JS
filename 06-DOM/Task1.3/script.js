onload = function() {
	let input = document.getElementsByTagName('input')[0];
	input.addEventListener('change', function(){
		document.body.style.backgroundColor = input.value;
	});
}