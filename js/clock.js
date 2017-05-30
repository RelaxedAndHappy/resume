window.onload = function() {

		var i = 0;
		var aWeekName = ["one", "two", "three", "four", "five", "six", "seven"];
		var aNow = null;

	function toDouble(iNum) {
		if (iNum < 10) {
			return "0" + iNum;
		}else {
			return ""  + iNum;
		}
	};

	//获取当前时间，并返回为数组
	function getTimeArray() {
		var oDate = new Date();
		var aNumber = [];

		var iYear = oDate.getYear(),
			iMonth = oDate.getMonth(),
			iDay = oDate.getDate(),
			iHour = oDate.getHours(),
			iMinutes = oDate.getMinutes(),
			iSecond = oDate.getSeconds(),
			iWeek = (oDate.getDay() + 6 ) % 7;
	// console.log(iMonth)
	// console.log(iDay)
			if (iYear < 1900) {
				iYear += 1900;
			}

			var str = iYear + toDouble(iMonth + 1) + toDouble(iDay) + toDouble(iHour) + toDouble(iMinutes) + toDouble(iSecond) + iWeek;
			var arr = str.split("");
			for (i = 0; i < arr.length; i++) {
				aNumber[i] = parseInt(arr[i]);
			}
			console.log(aNumber);
			return aNumber;		
	};
	
	function setClock() {
		var oClock = document.getElementById("clock");
		var aImg = oClock.getElementsByTagName("img");
		var aImgNum = [];
		//筛选数所有是表示数字的图片
		for (i = 0; i < aImg.length; i++) {
			if (!isNaN(aImg[i].alt)) {
				aImgNum.push(aImg[i]);
			}
		}
		//添加星期的img
		aImgNum.push(aImg[aImg.length - 1]);
		console.log(aImgNum.length);

		 aNow = getTimeArray();

		 	for (i = 0; i < aImgNum.length; i++) {

		 		if (i === (aImgNum.length - 1)) {
		 			aImgNum[i].src = "img/time-img/" + aWeekName[aNow[i]] + ".png";
		 		}else {
		 			aImgNum[i].src = "img/time-img/" + aNow[i] + ".png";
		 		}

		 	}
	}

	setInterval(setClock, 1000);	

	//倒计时
	var oCountDown = document.getElementById("date");
	var oDay = document.getElementById("day");
	var oHour = document.getElementById("hour");
	var oMinutes = document.getElementById("minutes");
	var oSecond = document.getElementById("second");

	function updateTime() {

		var nowTime = new Date();
		var endTime = new Date(nowTime.getFullYear(), 11, 31, 23, 59, 59, 999);//设置今年最后时间;

		var millisecond = 24 * 60 * 60 * 1000;

		iRemain = (endTime.getTime() -  nowTime.getTime()) / 1000;//得到秒
		console.log(iRemain);

		//求出天数，取余的值就是天数一次类推
		d = parseInt(iRemain / 86400);
		iRemain %= 86400;
		h = parseInt(iRemain / 3600);
		iRemain %= 3600;
		m = parseInt(iRemain / 60);
		iRemain %= 60;
		s = parseInt(iRemain);

		oDay.innerHTML = d + "<span> 天</span>";
		oHour.innerHTML = h + "<span> 小时</span>";
		oMinutes.innerHTML = m + "<span> 分</span> ";
		oSecond.innerHTML = s + "<span> 秒</span>"; 
	} 
	setInterval(updateTime, 1000);
};

























