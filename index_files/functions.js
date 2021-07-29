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
	//if(isIOS()){
	//	seconds += 8*60*60 + 2; //补偿ios系统的8小时时差，测试之后发现差了2秒，这里补上
	//}
	if(parseInt(seconds) == 31622400){
		window.location.reload(true);
	}
	var days = Math.floor(seconds / (3600 * 24));
	if(days >= 366){
		days  = days % 366;
		config.names[0] = "23岁";
		// config.lines = [
	 //        "子卓~",
	 //        "廿二岁末 廿三岁初",
	 //        "成长不期而遇 生日从不逾期",
	 //        "美好的事物一定会在新的一年满怀惊喜",
	 //        "每一岁都奔走在自己的热爱里 按时长大",
	 //        "成为自己喜欢的样子 心中所想如愿以偿",
	 //        "历世事而不失少年意趣 保守坚定与热情",
	 //        "依然能够为世间那些真心实意而心动",
	 //        "不哭泣 不沮丧 有自由 有光芒",
	 //        "All the best on your special day!",
	 //    ];
	    // config.lines = [
	    //     "子卓",
	    //     "我爱讲冷笑话 是因为我希望",
	    //     "我们在一起时 你都是开心的",
	    //     "我没再问过你 抑郁情绪相关",
	    //     "因为我知需要 的是理解陪伴",
	    //     "每次你想吃东西 我会很心疼",
	    //     "我每次都会说走 并不是讲假",
	    //     "我希望你不用这么刻意地控制自己",
	    //     "遵从自己内心开心快乐才是最重要的",
	    //     "很多时候我不知道该怎么做 但我一直在",
	    //     "---------------------------21.04.13",
	    // ];
	    
	    config.lines = [
	        "子卓",
	        "那天晚上明明知道你有事 自己却还总是像个小孩子一样",
	        "真的不好意思 在学着照顾别人的感受 但总是没做好",
	        "以前我总喜欢讲冷笑话 是因为我希望你是开心快乐的",
	        "那时候自认为自己很懂你的情绪",
	        "想陪你渡过难关 不想让你感觉那么无助",
	        "因为自己以前就是很害怕别人骂我",
	        "只想有人能理解我 包容我 陪伴我",
	        "现在回头望 发现自己做的一塌糊涂 自己的问题更大 哎",
	        "但是很开心的是 我看到你比我坚强好多",
	        "不敢谈这话题 怕别人说我有病 一直相信自己能处理它",
	        "只是这次的失败打击有点大 但 没事 你都可以 我更可以",
	        "很多时候我不知道该怎么做 也常做错 但我一直都在",
	        "虽然目前看来 好像我在也没什么用 呼",
	        "那我就先隐身啦",
	        "---------------------------21.07.29",
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
	return isIOS;
}
