window.onload = function() {


	var oDiv = document.getElementById("block");
	// var aA = document.getElementsByTagName("a");
	var oTxt = document.getElementById("txt");
	var oBtn = document.getElementById("btn");
	var i = 0;
	
	oBtn.addEventListener("click", add);

	function add(){
	
		if (oTxt.value === " ") {
			alert("请输入")
		}else {
			var oA = document.createElement("a"); 
				oA.innerHTML = oTxt.value;
				oDiv.appendChild(oA);
				oTxt.value = "";
		}
		aa();
	}
	//问题点击添加会出现短暂暂停
	function aa() {

		var aA = document.getElementsByTagName("a");
		for (i = 0; i < aA.length; i++) {
			aA[i].pause = 1;
			aA[i].time = null;
			init(aA[i]);
			aA[i].onmouseover = function() {
				this.pause = 0;//鼠标移入为flase
			};
			aA[i].onmouseout = function() {
				this.pause = 1;
			};
		}

	}
	aa();

	setInterval(startMove, 30);


	function startMove() {
		var aA = document.getElementsByTagName("a");
		for (i = 0; i < aA.length; i++) {
			if (aA[i].pause) { //当输入移出时
				doMove(aA[i]);
			}
		}
	};
	//图片向上移动
	function doMove(obj) {

		//由下向上
		// if (obj.offsetTop <= -obj.offsetHeight) {
		// 	obj.style.top = oDiv.offsetHeight + "px";
		// 	init(obj);
		// }else {
		// 	obj.style.top = obj.offsetTop - obj.iSpeed + "px";
		// }
		//由右向左
		if (obj.offsetLeft <= -obj.offsetWidth) {
			obj.style.left = oDiv.offsetWidth + "px";
			init(obj);
		}else {
			obj.style.left = obj.offsetLeft - obj.iSpeed + "px";
		}
	};

	//随机位置

	function init(obj) {
		
		var iLeft = parseInt(Math.random() * oDiv.offsetWidth);//随机的宽度
		var size = Math.random() * 1 + 1;//文字大小
		var iTimer = parseInt(Math.random() * 1500); //随机间隔时间
		var colorStr = "#" + ((Math.random() * 16777218 + 0.5) >> 0).toString(16);
		obj.pause = 0;

		obj.style.fontSize = 12 * size + "px";
		obj.style.color = colorStr;

		// if ((iLeft - obj.offsetWidth) > 0) {
		// 	console.log(obj.offsetWidth);
		// 	obj.style.left = iLeft - obj.offsetWidth + "px";
		// }else {
		// 	obj.style.left = iLeft + "px";
		// }
		
		var iTop = parseInt(Math.random() * oDiv.offsetHeight);
		if ((iTop - obj.offsetHeight) > 0) {
			obj.style.top = iTop - obj.offsetHeight + "px";
		}else {
			obj.style.top = iTop + "px";
		}

		//时间间隔，是A标签不会同时开始移动
		obj.time = setTimeout(function() {
			obj.pause = 1;
		}, iTimer);
		//移动速度
		obj.iSpeed = Math.ceil(Math.random() * 5) + 2;
	}; 

};
