onload = function(){
	let checkBtn = document.getElementsByClassName('checkBtn')[0];
	let form = document.getElementsByTagName('form')[0];
	let container = document.createElement('div');
	container.setAttribute('class','container');
	let input = document.getElementsByTagName('input')[0];
	let error = document.createElement('div');
	error.setAttribute('class','error');
	checkBtn.addEventListener('click', validator);
	let randomNum, nickname;
	let attemptNumber = 0;
	let tryAgainbtn = document.createElement('input');
	tryAgainbtn.setAttribute('type', 'button'); 
	tryAgainbtn.setAttribute('value', 'Try again');
	tryAgainbtn.addEventListener('click', reloadPage);

	function reloadPage(){
		location.reload();
	}

	function compareDigits(arr){
		for (let i = 0; i < arr.length; i++) {
			for (let j = i+1; j < arr.length; j++) {
				if (typeof arr[j] !== 'undefined' && arr[i] == arr[j]) {
					return false;
				}
			}
		}
		return true;
	}

	function countRamSheep(randomArr, playerArr){
		let rams = 0;
		let sheep = 0;

		for(let i = 0; i < randomArr.length; i++) {
			if (randomArr[i] == playerArr[i]) {
				rams++;
			}
		}

		for (let i = 0; i < randomArr.length; i++) {
			for (let j = 0; j < playerArr.length; j++) {
				if (i !== j && randomArr[i] == playerArr[j]) {
					sheep++;
				}
			}
		}
		attemptNumber++;
		writeMessage(rams, sheep);
	}

	function writeMessage(rams, sheep){
		let p = document.getElementsByClassName('try')[0];
		let wrapper = document.getElementsByClassName('wrapper')[0];
		let div = document.createElement('div');
		let numberSpan = document.createElement('span');
		let span = document.createElement('span');
		if (p) {
			wrapper.removeChild(p);
		}
		numberSpan.setAttribute('class','getNumber');
		numberSpan.appendChild(document.createTextNode(input.value));
		if (rams == 1) {
			span.appendChild(document.createTextNode(' You\'ve found ' + rams + ' ram and ' + sheep + ' sheep.'));
		} else if (rams == 4) {
			span.appendChild(document.createTextNode(' You\'ve found ' + rams + ' rams and ' + sheep + ' sheep. You\'ve won!'));
			nickname = prompt ('Baaaa! You\'ve won! Write your nickname, please:');
			makeList();
			checkBtn.setAttribute('style', 'display: none;');
			input.setAttribute('style', 'display: none;');
		} else {
			span.appendChild(document.createTextNode(' You\'ve found ' + rams + ' rams and ' + sheep + ' sheep.'));
		}
		container.appendChild(div);
		div.appendChild(numberSpan);
		div.appendChild(span);
	}

	function excludeNull(arr){
		if (arr[0] == 0) {
			return false;
		} else {
			return true;
		}
	}

	(function randomNumber(){
		randomNum = [];
		for (let i = 0; i < 4; i++) {
			randomNum[i] = Math.floor(Math.random() * 10);
		}
		if (!compareDigits(randomNum)){
			randomNumber();
		} else if (!excludeNull(randomNum)){
			randomNumber();
		} else {
			return randomNum;
		}
	}());

	function validator(){
		let errorTag = document.getElementsByClassName('error')[0];
		if (typeof errorTag !== 'undefined') {
			error.innerHTML = '';
		} 
		if (typeof document.getElementsByClassName('container')[0] == 'undefined') {
			form.insertBefore(container, input);
		}
		if (input.value == '') {
			error.appendChild(document.createTextNode('You should enter a number'));
			form.appendChild(error);
			return;
		} else if (input.value.length < 4 || input.value.length > 4 ) {
			error.appendChild(document.createTextNode('You should enter 4 digits'));
			form.appendChild(error);
			return;
		} 
		else {
			var playerNum = input.value.split('');
			if (!compareDigits(playerNum)) {
				error.appendChild(document.createTextNode('Digits can\'t be repeated'));
				form.appendChild(error);
				return;
			} else if (!excludeNull(playerNum)) {
				error.appendChild(document.createTextNode('The 1st digit can\'t be 0'));
				form.appendChild(error);
				return;
			}
			countRamSheep(randomNum, playerNum);
		}
		form.reset();
	}

	input.onkeypress = function(event){
		event = event || window.event;
		if (event.keyCode==13){
			validator();
			return false;
		}
	};

	input.value = '';

	function makeList() {
		let highScoreStorage = window.localStorage;
		attemptNumber = String(attemptNumber);
		highScoreStorage.setItem('player-' + nickname, attemptNumber);
		let hightScoreList = document.createElement('div');
		let title = document.createElement('h1');
		title.appendChild(document.createTextNode('Hight-Score List'));
		let ul = document.createElement('ul');
		let listArray = [];

		for (var i = 0; i < highScoreStorage.length; i++) {
			key = highScoreStorage.key(i);
			keys = key.split('-');
			if (keys[0] == 'player') {
				listArray.push(highScoreStorage.getItem(key) + '_' + keys[1]);
			}
		}
		listArray.sort(function(a, b) {
			return a.split('_')[0] - b.split('_')[0];
		});
		for (var i = 0; i < listArray.length; i++) {
			let listArrays = listArray[i].split('_');

			let li = document.createElement('li');
			if (listArrays[1] == nickname) {
				let strong = document.createElement('strong');
				strong.appendChild(document.createTextNode(listArrays[1] + " : " + listArrays[0]));
				li.appendChild(strong);
				ul.appendChild(li);
			} else {
				li.appendChild(document.createTextNode(listArrays[1] + " : " + listArrays[0]));
				ul.appendChild(li);
			}

		}
		hightScoreList.appendChild(title);
		hightScoreList.appendChild(ul);
		form.appendChild(hightScoreList);
		form.appendChild(tryAgainbtn);
	}
};