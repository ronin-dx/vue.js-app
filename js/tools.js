// 处理带T的时间
function verifiTDate(time, type) {
    var zoneDate = new Date(time).toJSON();
    var date1 = new Date(+new Date(zoneDate) + 8 * 3600 * 1000)
        .toISOString()
        .replace(/T/g, " ")
        .replace(/\.[\d]{3}Z/, "");
    let date2 = date1.split(" ").shift();
    switch (type) {
        // 返回完整的时间
        case 1:
            return date1;
            break;
        // 不返回时分秒
        case 2:
            return date2
            break;
    }
}

//截取url地址参数
function GetUrlData() {
    var url = location.search; //获取url中"?"符后的字串  
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}