let list = document.getElementsByClassName('list-item');
let counter = 1000;
var xhr = [];
for (let i = 1; i <= list.length; i++) {
	setTimeout(function(){	
		xhr[i] = new XMLHttpRequest();
		xhr[i].open('GET', 'json/data['+i+'].json', true);
		xhr[i].onload = function() {
			let listItem = document.getElementsByClassName('list-item')[i-1];

			if (xhr[i].status != 200) {
				listItem.innerHTML = xhr[i].status + ': ' + xhr[i].statusText; 
			} else {
				listItem.innerHTML = JSON.parse(xhr[i].responseText).title; 
			}
		}
		xhr[i].send();
	}, counter);
	counter = counter + 1000;
}