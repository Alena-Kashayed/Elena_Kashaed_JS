var tags = [
		"cms", "javascript", "js", "ASP.NET MVC", ".net", ".net", "css", "wordpress", "xaml", "js", "http",
		"web", "asp.net", "asp.net MVC", "ASP.NET MVC", "wp", "javascript", "js", "cms", "html", "javascript",
		"http", "http", "CMS"
	];

var tagCloud = generateTagCloud(tags, 17, 42);

function generateTagCloud(tags, minFontSize, maxFontSize){
	let tagsArr = [];
	let maxNum = 0;
	let delta, container;
	for (let i = 0; i < tags.length; i++) {
		if (typeof tagsArr[tags[i]] !== 'undefined') {
			tagsArr[tags[i]] = tagsArr[tags[i]] + 1;
		} 	else {
				tagsArr[tags[i]] = 1;
			}		
	}
	for (elem in tagsArr) {
		if (tagsArr[elem] > maxNum) {
			maxNum = tagsArr[elem];
		}
	}
	delta = (maxFontSize - minFontSize) / (maxNum - 1);
	container = document.getElementsByClassName('container')[0];
	let attr = document.createAttribute('style');
	attr.value = 'border: solid 2px; width: 220px; height: 250px; padding: 5px;';
	container.setAttributeNode(attr);

	for (elem in tagsArr) {
		let tag = document.createElement('span');
		let content = document.createTextNode(elem + ' ');
		let attr = document.createAttribute('style');
		attr.value = 'font-size: ' + (minFontSize + delta * (tagsArr[elem] - 1)) + 'px;';
		tag.appendChild(content);
		tag.setAttributeNode(attr);
		container.appendChild(tag);
	}
}