window.onload = function() {

	// ---------------------->>>>>>>>按钮提交效果



	// 获取输入框信息
	var search = document.getElementsByName("search")[0];
	// 获取按钮提交
	var sub = document.getElementsByName("submit");
	//遍历数组
	for (var i = 0; i < sub.length; i++) {
		// 为数组每一个元素设置单击响应函数
		sub[i].onclick = function() {
			// 输出搜索框中的内容
			alert(search.value);
		};
	};







	// ---------------------->>>>>>>>图片自动播放


	// 设置imgList宽度
	var imgList = document.getElementById("imgList");
	// 获取li个数
	var imgArr = imgList.getElementsByTagName("li");
	imgList.style.width = (1225 * (imgArr.length)) + "px";


	// 设置偏移量
	imgList.style.left = 0 + "px";
	// 设置navDiv宽度
	var navDiv = document.getElementById("navDiv");
	// 设置超链接个数
	var allA = navDiv.getElementsByTagName("a");
	navDiv.style.width = (25 * (imgArr.length)) + "px";
	// // 创建一个新的超链接《功能未完善》《功能未完善》《功能未完善》
	// var newA = document.createElement("a");
	// newA.href = "javascript:;";
	// // 当添加新的图片时，添加一个新的超链接《功能未完善》《功能未完善》《功能未完善》
	// if (img.length !== allA.length) {
	// 	// 将新的超链接作为navDiv的子元素
	// 	navDiv.appendChild(newA);

	// }

	// 设置默认图片索引
	var index = 0;
	// 默认选中的超链接为黑色
	allA[index].style.backgroundColor = "white";



	/*
	点击超链接切换到相应图片
	*/
	for (var i = 0; i < allA.length; i++) {

		// 为每一个超链接添加一个changeI属性,用于提供超链接的索引
		allA[i].changeI = i;
		// 为所有的超连接绑定单击响应函数
		allA[i].onclick = function() {
			// 当点击超链接时，关闭自动播放定时器
			clearInterval(timer);

			// 获取点击的超链接的索引
			index = this.changeI;
			// 切换图片
			/*
			第一张索引 0  left 0
			第二张索引 1  left -520
			第三张索引 2  left -1040
			
			总结  索引*-520=left
			*/
			// imgList.style.left = index * -520 + "px";
			// 设置选中的a
			setA();

			// 使用外部tools工具中的move函数切换图片
			/*
			 * 参数：
			 * 	obj:要执行动画的对象
			 * 	attr:要执行动画的样式，比如：left top width height
			 * 	target:执行动画的目标位置
			 * 	speed:移动的速度(正数向右移动，负数向左移动)
			 *  callback:回调函数，这个函数将会在动画执行完毕以后执行
			 */
			move(imgList, "left", -1225 * index, 20, function() {
				// 自动切换图片
				autoChange();



			});



		};

	}



	// 自动切换图片
	autoChange();


	// 创建一个方法用于选中的a
	function setA() {
		// 判断当前索引是否为最后一张索引
		if (index >= imgArr.length - 1) {
			index = 0;
			//通过将CSS修改left直接修改为0
			imgList.style.left = 0;
		}
		for (var i = 0; i < allA.length; i++) {
			// 将所有的a背景颜色设置为空串  如果设置为红色  此处为内联样式 优先级高 便不会出现a:hover效果 设置空串 默认是外部的白色
			allA[i].style.backgroundColor = "";
			// 修改正在点击的超链接的颜色
			allA[index].style.backgroundColor = "white";
		}

	}

	// 创建一个定时器标识
	var timer;
	// 创建一个函数用于开启自动切换图片
	function autoChange() {
		// 开启定时器
		timer = setInterval(function() {
			// 索引自增
			index++;
			// 判断index大小
			index %= imgArr.length;
			move(imgList, "left", -1225 * index, 20, function() {
				// 修改导航按钮
				setA();
			});
		}, 4000);
	};










	// 点击左右按钮切换图片
	var fangxiangleft = document.getElementById("fasleft");
	var fangxiangright = document.getElementById("fasright");

	var changefangxaing = 0;
	fangxiangleft.onclick = function() {
		clearInterval(timer);

		index--;
		console.log("当前索引" + index);
		console.log("当前位置" + imgList.style.left);
		console.log("索引" + imgArr.length);
		// 判断当前索引
		if (index < 0) {
			index = imgArr.length - 2;
			imgList.style.left = (index * -1225) + "px";
		}
		move(imgList, "left", -1225 * index, 20, function() {
			// 修改导航按钮
			setA();
		});

		imgList.style.left = (index * -1225) + "px";
		autoChange();
	};
	fangxiangright.onclick = function() {
		clearInterval(timer);
		// alert("当前索引:"+index);
		index++;
		console.log("当前索引" + index);
		console.log("当前位置" + imgList.style.left);


		// console.log(imgList.style.left);

		// 判断当前索引
		if (index > imgArr.length - 2) {
			index = 0;
			imgList.style.left = 0;
		}
		move(imgList, "left", -1225 * index, 20, function() {
			// 修改导航按钮
			setA();
		});
		// alert("当前"+changefangxaing);
		imgList.style.left = (index * -1225) + "px";
		autoChange();
		// changefangxaing++;
		// console.log(imgArr.length);


	};

}; //window
