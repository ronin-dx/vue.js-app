
// 切换Tabbar操作
function tabbarChange(e) {
    console.log('接收到的e：', e);
    switch (e) {
        case 0:
            window.location.href = '/views/tabbar/index1.html'
            break;
        case 1:
            window.location.href = '/views/tabbar/index2.html'
            break;
        case 2:
            window.location.href = '/views/tabbar/index3.html'
            break;
        case 3:
            window.location.href = '/views/tabbar/index4.html'
            break;
    }
}