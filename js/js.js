$(function() {
	$(".icon").click(function() {
		$(this).next().fadeToggle()
	})
	$(".phone .list li").click(function() {
		$(this).parents(".phone").children(".list").fadeToggle()
	})
})

function checkMobile() {
	var mobile = $('#mobile').val();
	if(!(/^1[34578][0-9]{9}$/.test(mobile))) {
		$('#mobile').siblings('.zc_correct').show();
		$('#mobile').siblings('.zc_correct').children('img').attr('src', 'images/error.png');
		return false;
	} else {
		$('#mobile').siblings('.zc_correct').children('img').attr('src', 'images/correct.png');
		return true;
	}
}

function checkCode() {
	var _this = $(this);
	var icode = $('#icode').val();
	if(!(/^\d{6}$/.test(icode))) {
		$('#icode').siblings('.zc_correct').show();
		$('#icode').siblings('.zc_correct').children('img').attr('src', 'images/error.png');
		return false;
	} else {
		$('#icode').siblings('.zc_correct').children('img').attr('src', 'images/correct.png');
		return true;
	}
}
$("#mobile").on("blur keyup", function() {
	checkMobile();
});
$("#icode").on("blur keyup", function() {
	checkCode();
});

//		获取验证码的方法
waitingSecond = 60;

function showTime() {
	waitingSecond -= 1;
	$('#muserv1_code').val(waitingSecond + "秒");
	$('#muserv1_code').addClass('on_cc');
	$('#muserv1_code').attr('disabled', 'disabled');
	if(waitingSecond == 0) {
		stopClock();
		return;
	}
	setTimeout("showTime()", 1000);
}

function stopClock() {
	waitingSecond = 60;
	$('#muserv1_code').val('重新获取');
	$("#muserv1_code").removeAttr("disabled");
	$('#muserv1_code').removeClass('on_cc');
}
$("#muserv1_code").click(function() {
	showTime();
})
$(".zc_tel ul li").click(function() {
	$(this).addClass("curr").siblings().removeClass("curr")
})
$(".zc_submit").click(function(e) {
	if(checkMobile() == false || checkCode() == false) {
		e.preventDefault();
		return false;
	}
	$(".zc_con").hide();
	var winW = $(window).width();
	if(winW >= 780) {
		$(".registered_box").show();
		$(".zc_con1").hide();
	} else {
		$(".registered_box").hide();
		$(".zc_con1").show();
	}
});
$(".info_con ul li .sex_con").click(function() {
	$(this).addClass("curr").siblings().removeClass("curr")
})
$(function() {
	new uploadPreview({
		UpBtn: 'logoUp',
		DivShow: 'logoPreview',
		ImgShow: 'logoImg'
	})
	new uploadPreview({
		UpBtn: 'logoUp1',
		DivShow: 'logoPreview1',
		ImgShow: 'logoImg1'
	})
	new uploadPreview({
		UpBtn: 'logoUp2',
		DivShow: 'logoPreview2',
		ImgShow: 'logoImg2'
	})
	new uploadPreview({
		UpBtn: 'logoUp3',
		DivShow: 'logoPreview3',
		ImgShow: 'logoImg3'
	})
	new uploadPreview({
		UpBtn: 'logoUp4',
		DivShow: 'logoPreview4',
		ImgShow: 'logoImg4'
	})
	new uploadPreview({
		UpBtn: 'logoUp5',
		DivShow: 'logoPreview5',
		ImgShow: 'logoImg5'
	})
	new uploadPreview({
		UpBtn: 'logoUp6',
		DivShow: 'logoPreview6',
		ImgShow: 'logoImg6'
	})
	new uploadPreview({
		UpBtn: 'logoUp7',
		DivShow: 'logoPreview7',
		ImgShow: 'logoImg7'
	})
})