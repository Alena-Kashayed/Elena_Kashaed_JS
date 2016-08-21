var slider = {
	slides: ['images/01.jpg',
			'images/02.jpg',
			'images/03.jpg',
			'images/04.jpg',
			'images/05.jpg',
			'images/06.jpg'],
	index: 0, // current slide for visialisation 
	set: function(image) { // setting of slide background 
		document.getElementById("scr").style.backgroundImage = "url("+image+")";
	},
	init: function() { // sets image slide with 0 index
		this.set(this.slides[this.index]);
	},
	left: function() { // step 1 slide to the left
		this.index--;
		if (this.index < 0) {
			this.index = this.slides.length-1;
		}
		this.set(this.slides[this.index]);
	},
	right: function() { // step 1 slide to the right
		this.index++;
		if (this.index == this.slides.length) {
			this.index = 0;
		}
		this.set(this.slides[this.index]);		
	}
};

onload = function makeSlider(){
	let leftBtn = document.getElementsByClassName('left')[0];
	let rightBtn = document.getElementsByClassName('right')[0];
	slider.init();

	setInterval(function() { // 5 sec interval
		slider.right();
	},5000);
	
	leftBtn.addEventListener('click', function() {
		slider.left();
	});
	rightBtn.addEventListener('click', function() {
		slider.right();
	});
}