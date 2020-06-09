var CryptoJS = require('crypto-js');

function f_formatDate(v, format) {
    if (!v)
        return "";
    var d = v;
    if (typeof v === 'string') {
        if (v.indexOf("/Date(") > -1)
            d = new Date(parseInt(v.replace("/Date(", "").replace(")/", ""), 10));
        else
            d = new Date(Date.parse(v.replace(/-/g, "/").replace("T", " ").split(".")[0]));
        // 用来处理出现毫秒的情况，截取掉.xxx，否则会出错
    } else if (typeof v === "number") {
        d = new Date(v);
    }
    var o = {
        "M+": d.getMonth() + 1,
        // month
        "d+": d.getDate(),
        // day
        "h+": d.getHours(),
        // hour
        "m+": d.getMinutes(),
        // minute
        "s+": d.getSeconds(),
        // second
        "q+": Math.floor((d.getMonth() + 3) / 3),
        // quarter
        "S": d.getMilliseconds()// millisecond
    };
    format = format || "yyyy-MM-dd";
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};

var DES3 = {
    iv: function() {
        return f_formatDate(new Date(), "yyyyMMdd")
    },
    encrypt: function(b, c, a) {
        if (c) {
            return (CryptoJS.TripleDES.encrypt(b, CryptoJS.enc.Utf8.parse(c), {
                iv: CryptoJS.enc.Utf8.parse(a || DES3.iv()),
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            })).toString()
        }
        return ""
    },
    decrypt: function(b, c, a) {
        if (c) {
            return CryptoJS.enc.Utf8.stringify(CryptoJS.TripleDES.decrypt(b, CryptoJS.enc.Utf8.parse(c), {
                iv: CryptoJS.enc.Utf8.parse(a || DES3.iv()),
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            })).toString()
        }
        return ""
    }
};

function f_random(size){
    var str = "",
    arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for(var i=0; i<size; i++){
        str += arr[Math.round(Math.random() * (arr.length-1))];
    }
    return str;
};

function strTobinary(str) {
	var result = [];
	var list = str.split("");
	for (var i = 0; i < list.length; i++) {
		if (i != 0) {
			result.push(" ");
		}
		var item = list[i];
		var binaryStr = item.charCodeAt().toString(2);
		result.push(binaryStr);
	};
	return result.join("");
};

function cipher() {
	var date = new Date();
	var timestamp = date.getTime().toString();
	var salt = f_random(24);
	var year = date.getFullYear().toString();
	var month = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date
			.getMonth()).toString();
	var day = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
			.toString();
	var iv = year + month + day;
	var enc = DES3.encrypt(timestamp, salt, iv).toString();
	var str = salt + iv + enc;
	var ciphertext = strTobinary(str);
	return {salt, ciphertext};
}

var decrypt = DES3.decrypt;
var res = cipher();
console.log(res);


