$(function() {
	$(".icon").click(function(e) {
		e.stopPropagation();
		$(this).next().fadeToggle();
	});
	$("body").click(function() {
		$(".icon").next().hide();
	});
	$(window).scroll(function() {
		$(".icon").next().hide();
	});
	$(".phone .list li").click(function() {
		$(this).parents(".phone").children(".list").fadeToggle()
	})
})

//手机号码验证
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

function checkEmail() {
	var email = $('#email').val();
	if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))) {
		$('#email').siblings('.zc_correct').show();
		$('#email').siblings('.zc_correct').children('img').attr('src', 'images/error.png');
		return false;
	} else {
		$('#email').siblings('.zc_correct').children('img').attr('src', 'images/correct.png');
		return true;
	}
}

function checkNames() {
	var names = $('#names').val();
	if(!(/^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/.test(names))) {
		$('#names').siblings('.zc_correct').show();
		$('#names').siblings('.zc_correct').children('img').attr('src', 'images/error.png');
		return false;
	} else {
		$('#names').siblings('.zc_correct').children('img').attr('src', 'images/correct.png');
		return true;
	}
}

function checkIdcode() {
	var code = $('#code').val();
	if(!(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(code))) {
		$('#code').siblings('.zc_correct').show();
		$('#code').siblings('.zc_correct').children('img').attr('src', 'images/error.png');
		return false;
	} else {
		$('#code').siblings('.zc_correct').children('img').attr('src', 'images/correct.png');
		return true;
	}
}

function checkSeat() {
	var seat = $('#seat').val();
	if(!(/^([\u4e00-\u9fa5]{2,40})$/.test(seat))) {
		$('#seat').siblings('.zc_correct').show();
		$('#seat').siblings('.zc_correct').children('img').attr('src', 'images/error.png');
		return false;
	} else {
		$('#seat').siblings('.zc_correct').children('img').attr('src', 'images/correct.png');
		return true;
	}
}

function checkNum() {
	var mobile = $('#num').val();
	if(!(/^(0|[1-9][0-9]*)$/.test(mobile))) {
		$('#num').siblings('.zc_correct').show();
		$('#num').siblings('.zc_correct').children('img').attr('src', 'images/error.png');
		return false;
	} else {
		$('#num').siblings('.zc_correct').children('img').attr('src', 'images/correct.png');
		return true;
	}
}
var code;

function createCode() {
	code = "";
	var codeLength = 4; //验证码的长度
	var checkCode = document.getElementById("checkCode");
	var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
		'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
	for(var i = 0; i < codeLength; i++) {
		var charNum = Math.floor(Math.random() * 52);
		code += codeChars[charNum];
	}
	if(checkCode) {
		checkCode.className = "code";
		checkCode.innerHTML = code;
	}
}

function validateCode() {
	var inputCode = document.getElementById("inputCode").value;
	if(inputCode.length <= 0) {
		$('#inputCode').siblings('.zc_correct').show().children('img').attr('src', 'images/error.png');
		$("#muserv1_code").attr("disabled","disabled").css("background","#ccc")
		return false;
	} else if(inputCode.toUpperCase() != code.toUpperCase()) {
		$('#inputCode').siblings('.zc_correct').children('img').attr('src', 'images/error.png');
		$("#muserv1_code").attr("disabled","disabled").css("background","#ccc")
		return false;
	} else {
		$('#inputCode').siblings('.zc_correct').children('img').attr('src', 'images/correct.png');
		$("#muserv1_code").removeAttr("disabled").css("background","#eb6100")
		return true;
	}
}
//信息填写对错判断
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
$("#email").on("blur keyup", function() {
	checkEmail();
});
$("#names").on("blur keyup", function() {
	checkNames();
});
$("#code").on("blur keyup", function() {
	checkIdcode();
});
$("#seat").on("blur keyup", function() {
	checkSeat();
});
$("#num").on("blur keyup", function() {
	checkNum();
});
$("#inputCode").on("blur keyup", function() {
	validateCode();
});
$("#muserv1_code").on("click", function() {
	var phonenum = $("#mobile").val();
	$.ajax({
		url: "https://sms.chongdonglvxing.com/sendVerifyCode",
		data: {
			tel: phonenum
		},
		type: "POST",
		success: function(data) {
			if(data.code == 20000) {
				$("#muserv1_code").css("background","#ccc")
				showTime();
			} else {
				alert("请输入正确手机号")
			}
			console.log(data)
		}
	})
})
$("#myform").on("click", function() {
		var phonenum = $("#mobile").val();
		var code = $("#icode").val();
		$.ajax({
			url: "https://sms.chongdonglvxing.com/verifyCode",
			data: {
				tel: phonenum,
				verify: code
			},
			type: "POST",
			success: function(data,e) {
				if(data.code !== 20000|| checkMobile() == false || checkCode() == false || validateCode() == false) {
					alert("请填写正确信息")
					e.preventDefault();
					return false;

				} else {
					$(".registered_phone").hide();
					$(".registered_box").show();
				}
//				if(data.code == 20000) {
//					alert("OK");
//					$(".registered_phone").hide();
//					$(".registered_box").show();
//				} else {
//					e.preventDefault();
//					return false;
//					alert("error!")
//				}
				console.log(data)
			}
		})
	})
	//下一步判断信息是否填写正确
//$(".zc_submit").click(function(e) {
//	if(checkMobile() == false || checkCode() == false || validateCode() == false) {
//		alert("请填写正确信息")
//		e.preventDefault();
//		return false;
//
//	} else {
//		$(".registered_phone").hide();
//		$(".registered_box").show();
//	}
//});
$("#submite").on("click", function() {
	var names = $("#names").val();
	var sex = $("#sex").val();
	var code = $("#code").val();
	var email = $("#email").val();
	var seat = $("#seat").val();
	var num = $("#num").val();
	var language = $("#language").val();
	var line = $("#line").val();
	var tcm = $("#tcm").val();
	var logoUp4 = $("#logoUp4").val();
	var logoUp5 = $("#logoUp5").val();
	$.ajax({
		url: "https://api.chongdonglvxing.com/v1/tc/register",
		data: {
			tc_type: tcm,
			real_name: names,
			gender: sex,
			card_num: code,
			email: email,
			address: seat,
			work_year: num,
			language: language,
			good_line: line,
			positive_pic: logoUp4,
			back_pic: logoUp5

		},
		type: "POST",
		success: function(data) {
			if(data.code == 20000) {
				window.open("http://www.chongdonglvxing.com");
			} else {
				alert("错误")
			}
			console.log(data)
		}
	})
})
$(".zc_tel ul li").click(function() {
		$(this).addClass("curr").siblings().removeClass("curr")
	})
	//获取验证码的方法
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

//男女选择
$(".info_left ul li .sex_con").click(function() {
	$(this).addClass("curr").siblings().removeClass("curr")
})
$(".info_right ul li .sex_con").click(function() {
	$(this).toggleClass("curr")
})
$("#tc_type .sex_nan").click(function() {
	$("#tcm").val("1");
})
$("#tc_type .sex_nv").click(function() {
	$("#tcm").val("2");
})
$("#sex_all .sex_nan").click(function() {
	$("#sex").val("1");
})
$("#sex_all .sex_nv").click(function() {
	$("#sex").val("2");
})
var hb_arr = [];
//设置点击事件
$("#sex_cons .sex_con").off("click").on("click", function() {
		$(this).toggleClass("curr");
		var name = $(this).data("name");
		for(i = 0; i < hb_arr.length; i++) {
			if(hb_arr[i] == name) {
				hb_arr.splice(i, 1);
				$("#line").val(hb_arr.join(","));
				return false;
			}
		}
		hb_arr.push(name);
		$("#line").val(hb_arr.join(","));
	})
	//上传图片
$(function() {
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

})