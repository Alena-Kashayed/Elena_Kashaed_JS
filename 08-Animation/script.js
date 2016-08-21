function draw(){
	let canvas = document.getElementById('head');
	if (canvas.getContext){
		let ctx = canvas.getContext('2d');

		//FACE
		ctx.beginPath();
		ctx.scale(150 / 125, 1);
		ctx.arc(185,250,80,0,Math.PI*2,true); 
		ctx.fillStyle = "#90CAD7";
		ctx.fill();
		ctx.lineWidth = 3;
		ctx.strokeStyle = "#22545F";
		ctx.stroke();

		//MOUTH
		ctx.moveTo(170, 305);
		ctx.save();
		ctx.rotate(10*Math.PI/180);
		ctx.ellipse(218,258, 12, 30, 90 * Math.PI/180, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.restore();

		//EYES
		ctx.moveTo(160, 215);
		ctx.scale(125 / 90, 1);
		ctx.arc(105,215,10,0,Math.PI*2,true); 
		ctx.stroke();
		ctx.moveTo(155, 215);
		ctx.arc(145,215,10,0,Math.PI*2,true); 
		ctx.stroke();
		ctx.beginPath();
		ctx.scale(35 / 90, 1);
		ctx.arc(264,215,10,0,Math.PI*2,true);
		ctx.fillStyle = "#22545F";
		ctx.fill();
		ctx.moveTo(365,215);
		ctx.arc(365,215,10,0,Math.PI*2,true);
		ctx.fill();

		//NOSE
		ctx.beginPath();
		ctx.lineWidth = 4;
		ctx.moveTo(325,260);
		ctx.lineTo(290,260);
		ctx.lineTo(318,215);
		ctx.stroke();
		ctx.restore();

		//HAT 
		ctx.beginPath();
		ctx.lineWidth = 2;
		ctx.scale(290 / 45, 1);
		ctx.arc(52,170,25,0,Math.PI*2,true); 
		ctx.strokeStyle = "#000000";
		ctx.fillStyle = "#396693";
		ctx.fill();
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(53, 40, 15, 1*Math.PI, 2 * Math.PI, true);
		ctx.bezierCurveTo(68, 35, 52, 5, 38, 40);
		ctx.lineTo(38,150);
		ctx.arc(53, 150, 15, 1*Math.PI, 2 * Math.PI, true);
		ctx.lineTo(68,40);
		ctx.fill();
		ctx.stroke();
	}

	let canvasBike = document.getElementById('bike');
	if (canvasBike.getContext){
		let ctx = canvasBike.getContext('2d');

		//WHEELS 
		ctx.beginPath();
		ctx.arc(150,250,70,0,Math.PI*2,true); 
		ctx.fillStyle = "#90CAD7";
		ctx.fill();
		ctx.lineWidth = 3;
		ctx.strokeStyle = "#3D8495";
		ctx.moveTo(490,250);
		ctx.arc(420,250,70,0,Math.PI*2,true); 
		ctx.fill();
		ctx.stroke();

		//HANDLEBAR 
		ctx.moveTo(420,250);
		ctx.lineTo(395,90);
		ctx.lineTo(440,50);
		ctx.moveTo(395,90);
		ctx.lineTo(340,110);
		ctx.moveTo(405,150);
		ctx.lineTo(240,150);
		ctx.lineTo(150,250);
		ctx.lineTo(280,250);
		ctx.lineTo(405,150);
		ctx.moveTo(280,250);
		ctx.lineTo(226,110);
		ctx.moveTo(190,110); //seat
		ctx.lineTo(255,110);
		ctx.moveTo(300,250); //pedals
		ctx.arc(280,250,20,0,Math.PI*2,true);
		ctx.moveTo(265,235);
		ctx.lineTo(250,220);
		ctx.moveTo(293,263);
		ctx.lineTo(310,280);
		ctx.stroke();
	}

	let canvasHouse = document.getElementById('house');
	if (canvasHouse.getContext){
		let ctx = canvasHouse.getContext('2d');

		//ROOF
		ctx.beginPath();
		ctx.moveTo(69, 209);
		ctx.lineTo(250, 22);
		ctx.lineTo(426, 209);
		ctx.fillStyle = "#975B5B";
		ctx.lineWidth = 3;
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(310, 150);//pipe
		ctx.lineTo(310, 58);
		ctx.bezierCurveTo(310, 58, 330, 49, 350, 58);
		ctx.lineTo(350, 150);
		ctx.moveTo(350, 58);
		ctx.bezierCurveTo(350, 64, 328, 67, 310, 60);
		ctx.fillStyle = "#975B5B";
		ctx.lineWidth = 3;
		ctx.fill();
		ctx.stroke();

		//WALLS
		ctx.fillRect(69, 210, 357, 265);
		ctx.strokeRect(69, 210, 357, 265);

		//WINDOWS 
		ctx.beginPath();
		ctx.fillStyle = "#000000";
		myWin(95, 240);
		myWin(270, 240);
		myWin(270, 350);
		function myWin(x, y) {
			let w = 60;
			let h = 40;
			ctx.fillRect(x, y, w, h);
			ctx.fillRect(x+63, y, w, h);
			ctx.fillRect(x+63, y+43, w, h);
			ctx.fillRect(x, y+43, w, h);
		}

		//DOOR 
		ctx.moveTo(110, 475);
		ctx.lineTo(110, 390);
		ctx.arc(155,410, 50, 1.15*Math.PI, 1.855 * Math.PI, false); 
		ctx.lineTo(200, 475);
		ctx.moveTo(155, 475);
		ctx.lineTo(155, 360);
		ctx.moveTo(144, 440);
		ctx.arc(140,440,5,0,Math.PI*2,true); 
		ctx.moveTo(174, 440);
		ctx.arc(170,440,5,0,Math.PI*2,true); 
		ctx.stroke();
	}
};