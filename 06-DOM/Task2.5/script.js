onload = function treeViewList(){
	let treeView = document.getElementsByClassName('TreeView')[0];
	let titleList = treeView.getElementsByClassName('title');

	for (let i = 0; i < titleList.length; i++) {
		if (titleList[i].childNodes.length !== 0) {
			titleList[i].childNodes[1].style.display = 'none';
			titleList[i].addEventListener('click', function(){
				showHideSubList(i);
			});
		}
	}

	function showHideSubList(i){
		console.log(titleList);
		if (titleList[i].childNodes[1].style.display == 'none') {
			titleList[i].childNodes[1].style.display = 'block';
		} else {
			titleList[i].childNodes[1].style.display = 'none';
		}
	}
}
