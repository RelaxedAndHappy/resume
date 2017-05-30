window.onload = function() {

	var oBtnPrev = document.getElementsByClassName("prev")[0],
		oBtnNext = document.getElementsByClassName("next")[0],
		oMarkLeft = document.getElementsByClassName("mark_left")[0],
		oMarkRight = document.getElementsByClassName("mark_right")[0];

	var oBigUl = document.getElementsByClassName("big_pic")[0],
		aBigLi = oBigUl.getElementsByTagName("li"),
		oSmallUl = document.getElementsByClassName("small_pic")[0].getElementsByTagName("ul")[0],
		aSmallLi = oSmallUl.getElementsByTagName("li");
	var i, iNow = 0, iMinZindex = 2;
	var oTxt = document.getElementsByClassName("text")[0];
	var oLength = document.getElementsByClassName("length")[0];
	var aTxt = ["新年快乐","对不起","我很抱歉","你死定了","你好","谢谢你","打的不错"];
	var aNum = ["1/6","2/6","3/6","4/6","5/6","6/6"];
		//小图片，ul的宽度
		oSmallUl.style.width = aSmallLi.length * aSmallLi[0].offsetWidth + "px";
		//左右按钮
		oBtnPrev.onmouseover = oMarkLeft.onmouseover =function() {
			startMove(oBtnPrev, "opacity", 100);
		};
		oBtnPrev.onmouseout = oMarkLeft.onmouseout = function() {
			startMove(oBtnPrev, "opacity", 0);
		};
		oBtnNext.onmouseover = oMarkRight.onmouseover = function() {
			startMove(oBtnNext, "opacity", 100);
		};
		oBtnNext.onmouseout = oMarkRight.onmouseout = function() {
			startMove(oBtnNext, "opacity", 0);
		};
		//小图移入移出
			for (i = 0; i < aSmallLi.length; i++) {
			aSmallLi[i].index = i;
			aSmallLi[i].onmouseover = function() {
				startMove(this, "opacity", 100);
			};
			aSmallLi[i].onmouseout = function() {
				if(this.index !== iNow) {
					startMove(this, "opacity", 50)
				}
			};

			aSmallLi[i].onclick = function() {
				//重复点击当前图片，大图不会下拉
				if (this.index === iNow) {return true}; 
				iNow = this.index;
				tab()
			};
		

			function tab() {
				for(i = 0; i < aSmallLi.length; i++) {
					startMove(aSmallLi[i], "opacity", 50);
				}
				startMove(aSmallLi[iNow], "opacity", 100);

				//点击小图大图下拉显示
				aBigLi[iNow].style.zIndex = iMinZindex++;
				aBigLi[iNow].style.height = 0;
				startMove(aBigLi[iNow], "height", oBigUl.offsetHeight);
				oTxt.innerHTML = aTxt[iNow];
				oLength.innerHTML = aNum[iNow];
				//小图滚动
				if(iNow === 0) {
					startMove(oSmallUl, "left", 0);
				}else if(iNow === (aSmallLi.length - 1)) {
					startMove(oSmallUl, "left", -(iNow - 2) * aSmallLi[0].offsetWidth)
				}else {
					startMove(oSmallUl, "left", -(iNow - 1) * aSmallLi[0].offsetWidth);
				}
			}

			//
			oBtnPrev.onclick = function() {
				iNow--;
				if (iNow === -1) {
					iNow = aSmallLi.length - 1;
				}
				tab();
			};
			oBtnNext.onclick = function() {
				iNow++;
				if(iNow === aSmallLi.length) {
					iNow = 0;
				}
				tab();
			};
		};

	//获取css属性
	function getStyle(obj, attr) {
		if (obj.currentStyle) {
			return obj.currentStyle[attr];
		}else {
			return getComputedStyle(obj, false)[attr]
		}
	}

	// 运动效果
	function startMove(obj, attr, iTarget) {
		clearInterval(obj.timer);

		obj.timer = setInterval(function() {
			if (attr === "opacity") {
				var iCur = parseFloat(getStyle(obj, attr)) * 100;
			}else {
				var iCur = parseInt(getStyle(obj, attr));
			}
			var iSpeed = (iTarget - iCur) /9;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

			if (iCur === iTarget) {
				clearInterval(obj.timer);
			}else {
				if (attr === "opacity") {
					obj.style.opacity = (iCur + iSpeed) / 100;
				}else {
					obj.style[attr] = iCur + iSpeed + "px"
				}
			}
		}, 30);
	};
};