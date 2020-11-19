/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var seconds = (+ new Date() - date.getTime()) / 1000;
	if(isIOS()){
		seconds += 8*60*60; //补偿ios系统的8小时时差
	}
	console.log(parseInt(seconds))
	if(parseInt(seconds) == 31622400){
		window.location.reload(true);
	}
	var days = Math.floor(seconds / (3600 * 24));
	if(days >= 366){
		days  = days % 366;
		config.names[0] = "23岁";
		config.lines = [
	        "子卓",
	        "花开一季，有落红为证",
	        "逝去的岁月，如何能托于烟尘",
	        "你的浅笑，是我永生眷恋",
	        "相思的真情，是否能明白一二",
	        "亲爱的宝贝，你是我的唯一",
	        "生日快乐。。。",
	    ];
	}
	seconds = seconds % (3600 * 24);

	var hours = Math.floor(seconds / 3600);
	if (days >= 0)
	{
		if (hours < 10) {
		hours = "0" + hours;
		}
		seconds = seconds % 3600;
		var minutes = Math.floor(seconds / 60);
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		seconds = Math.floor(seconds % 60);
		seconds = (seconds + "").replace(/\.\d*/, "");
		var result = " <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒";
		$("#clock").html(result);
	}
	
}

function isIOS(){
	let u = navigator.userAgent;
	let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 
}
