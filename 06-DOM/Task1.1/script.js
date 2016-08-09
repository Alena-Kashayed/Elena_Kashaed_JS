function selectDivByTagName(){
	let divList = document.getElementsByTagName('div');
	let counter = 0;
	console.log('All the div nodes that are directly inside other div elements (using querySelectorAll())');
	for (let i = 0; i < divList.length; i++) {
		if (divList[i].parentNode instanceof HTMLDivElement) {
			console.log(divList[i]);
			counter++;
		}
	}
	console.log('The number of elements is ' + counter);
}

function selectDivBySelectorAll(){
	console.log('All the div nodes that are directly inside other div elements (using getElementsByTagName())');
	let selectedDivList = document.querySelectorAll('div > div');
	for (let i = 0; i < selectedDivList.length; i++) {
		console.log(selectedDivList[i]);
	}
	console.log('The number of elements is ' + selectedDivList.length);
}

(function(){
	selectDivByTagName();
	selectDivBySelectorAll();
})();