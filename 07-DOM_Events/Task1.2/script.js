onload = function toDoList(){
	let addBtn = document.getElementsByClassName('btnAdd')[0];
	let deleteBtn = document.getElementsByClassName('btnDelete')[0];
	let hideBtn = document.getElementsByClassName('btnHide')[0];
	let showBtn = document.getElementsByClassName('btnShow')[0];
	let input = document.getElementsByClassName('note')[0];
	let container = document.createElement('div');
	container.setAttribute('class', 'container');
	let form = document.getElementsByTagName('form')[0];
	let note = document.getElementsByClassName('note')[0];
	let index = 1;

	addBtn.addEventListener('click', addNote);

	function addNote(){ 
		if 	(typeof document.getElementsByClassName('container')[0] == 'undefined') {
				form.appendChild(container);
		}
		if (input.value !== '') {
			let div = document.createElement('div');
			div.appendChild(document.createTextNode(index + ') ' + input.value));
			container.appendChild(div);
			index++;
		} 
		form.reset();
	}

	deleteBtn.addEventListener('click', function(){
		if (container.childNodes.length !== 0 && !container.getAttribute('style', 'display: none')) {
			container.removeChild(container.lastChild);
		}
	});

	hideBtn.addEventListener('click', function(){
		if (container.childNodes.length !== 0) {
			container.setAttribute('style', 'display: none');
		}
	});

	showBtn.addEventListener('click', function(){
		if (container.childNodes.length !== 0) {
			container.removeAttribute('style', 'display: none');
		}
	});

	note.onkeypress = function(event){
		event = event || window.event;
		if (event.keyCode==13){
			addNote();
			return false;
		}
	};
};
