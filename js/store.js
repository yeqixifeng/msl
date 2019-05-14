$(".h-button").click(function () {
    $("#header").animate({
        left: '5.67rem'
    }, 500);
    $("#footer").animate({
        left: '5.67rem'
    }, 500);
    $("#content").animate({
        left: '5.67rem'
    }, 500);
    $(".h-button").hide();
    $(".h-cancel").show()
});
$(".h-cancel").click(function () {
    $("#header").animate({
        left: '0'
    }, 500);
    $("#footer").animate({
        left: '0'
    }, 500);
    $("#content").animate({
        left: '0'
    }, 500);
    $(".h-cancel").hide();
    $(".h-button").show()
});
$(document).ready(function () {
    
    $.get("http://shuangtao.xiaoyuancms.com/meishule/shop/info", function (res) {
        let data=res.data
        for (let i=0;i<data.length;i++) {
            $('.list').append(`
            <div class="list-space"></div>
            <div class="list-title">
                <div class="list-1"></div>
                <div class="list-2">${data[i].name}</div>
                <a class="list-3" href="https://uri.amap.com/marker?position=${data[i].longitude},${data[i].latitude}&name=${data[i].address}">
                    <img src="image/navigation.png" alt="">
                    <text>一键导航</text>
                
                </a>
            </div>
            <div class="list-address">中心地址：${data[i].address}</div>
            <div class="list-phone">中心电话：${data[i].phone}</div>
            <div class="list-line"></div>
            `)
        }
    }, "json");
})