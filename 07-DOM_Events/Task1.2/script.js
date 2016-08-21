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
			let label = document.createElement('label');
			let checkboxInput = document.createElement('input');
			checkboxInput.setAttribute('name', index);
			checkboxInput.setAttribute('type','checkbox');
			label.appendChild(checkboxInput);
			label.setAttribute('name', index);
			label.appendChild(document.createTextNode(' ' + input.value));
			container.appendChild(label);
			index++;
		} 
		form.reset();
	}

	deleteBtn.addEventListener('click', function(){
		if (container.childNodes.length !== 0) {
			for (let i = 0; i < container.childNodes.length; i++) {
				let  item = container.getElementsByTagName('label')[i];
				if (item.getElementsByTagName('input')[0].checked && !item.getAttribute('style', 'display: none')) {
					container.removeChild(item);
					i--;
					container.childNodes.length-1;
				}
			}	
		}
	});

	hideBtn.addEventListener('click', function(){
		if (container.childNodes.length !== 0) {
			for (let i = 0; i < container.childNodes.length; i++) {
				let  item = container.getElementsByTagName('label')[i];
				if (item.getElementsByTagName('input')[0].checked) {
					item.setAttribute('style', 'display: none');
				}
			}
		}
	});

	showBtn.addEventListener('click', function(){
		if (container.childNodes.length !== 0) {
			for (let i = 0; i < container.childNodes.length; i++) {
				let  item = container.getElementsByTagName('label')[i];
				if (item.getElementsByTagName('input')[0].checked) {
					item.removeAttribute('style', 'display: none');
				}
			}
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
