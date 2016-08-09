function generateDivElements(){
	let circleWrapper = document.createElement('div');
	circleWrapper.setAttribute('style', 
			'width: 500px; height: 500px; position: relative; margin-left: auto; margin-right: auto; border: 5px solid #6495c4; border-radius: 250px; 	   -webkit-border-radius: 250px; -moz-border-radius: 250px;');
	document.body.appendChild(circleWrapper);
	for (let i = 0; i < 5; i++) {
		let divElem = document.createElement('div');
		divElem.setAttribute('style', 
			'width: 50px; height: 50px; background-color: #add8e6; position: absolute;');
		circleWrapper.appendChild(divElem);
		
	}
	moveDivElements(circleWrapper.childNodes);
}

function moveDivElements(args) { 
	let radius = 250;  
	let speed = 100; 
	let f = 0;
	let s = 2 * Math.PI / 180; //calculate the angle
	for (let i = 0; i < args.length; i++) {	
		setInterval(function() { // function of movement 
			f += s; // increment of the argument
			args[i].style.top =   235 + radius * Math.sin(f + (i * 240)) + 'px';
			args[i].style.left =  235 + radius * Math.cos(f + (i * 240))  + 'px'; 
		}, speed);
	}
}

(function(){
	generateDivElements();
}());