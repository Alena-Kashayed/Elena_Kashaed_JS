function generateDivElements(){
	let number = Math.round(Math.random() * 10);
	for (let i = 0; i < number; i++) {
		let tagDiv = document.createElement('div');
		let widthVal = Math.round(Math.random() * 80 + 20);
		let heightVal = Math.round(Math.random() * 80 + 20);
		let rColor = Math.round(Math.random() * 255);
		let gColor = Math.round(Math.random() * 255);
		let bColor = Math.round(Math.random() * 255);
		let rBorderColor = Math.round(Math.random() * 255);
		let gBorderColor = Math.round(Math.random() * 255);
		let bBorderColor = Math.round(Math.random() * 255);
		let positionNum = Math.round(Math.random() * 4);
		let borderRadiusVal = Math.round(Math.random() * 100);
		let borderWidthVal = Math.round(Math.random() * 19 + 1);
		let position = new Array('absolute', 'fixed', 'relative', 'static', 'inherit');
		let strong = document.createElement('strong');
		let content = document.createTextNode('div');
		strong.appendChild(content);
		tagDiv.appendChild(strong);
		tagDiv.setAttribute('style', 
			'width: ' + widthVal + 'px; ' + 
			'height: ' + heightVal + 'px; ' +
			'background-color: rgb(' + rColor + ', ' + gColor + ', ' + bColor + '); ' +
			'position: ' + position[positionNum] + '; ' +
			'border-radius: ' + borderRadiusVal + 'px; ' + 
			'border-color: rgb(' + rBorderColor + ', ' + gBorderColor + ', ' + bBorderColor + '); ' +
			'border-width: ' + borderWidthVal + 'px;');
		document.body.appendChild(tagDiv);
	}
}

(function(){
	generateDivElements();
})();