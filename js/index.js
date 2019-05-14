
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
    $.get("http://shuangtao.xiaoyuancms.com/meishule/home/visit",
        function (res) {
            
        }, "json");
})
$(document).ready(function () {
    $.get("http://shuangtao.xiaoyuancms.com/meishule/home/info",
        function (res) {
            let data=res.data
            console.log(data)
            $('.i-text').html(data.brand.synopsis)
            for (let i = 0; i < data.course.length; i++) {
                $('.course-list').append(`
            <a href="detail.html?${data.course[i].id}">
                <div class="list">
                    <div class="l-banner">
                        <img src="http://shuangtao.xiaoyuancms.com${data.course[i].img}" alt="">
                    </div>
                    <div class="l-cont">
                        <div class="l-1">
                            <img src="http://shuangtao.xiaoyuancms.com${data.course[i].icon}" alt="">
                        </div>
                        <div class="l-2">${data.course[i].name}</div>
                        <div class="l-3">(${data.course[i].age})</div>
                    </div>
                    <div class="l-text"><text>课程简介：${data.course[i].synopsis}</text></div>
                </div>
            </a>
            `)
            }
        }, "json");
})
$(document).ready(function () {
    $.get("http://shuangtao.xiaoyuancms.com/meishule/home/banner",
        function (res) {
            let data=res.data
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                $('.swiper-wrapper').append(`
            <div class="swiper-slide">
                <img src="http://shuangtao.xiaoyuancms.com${data[i].img}" alt="">
            </div> 
            `)
            }
            var mySwiper = new Swiper('.swiper-container', {
                direction: 'horizontal',
                loop: true, // 循环模式选项
        
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            })
        }, "json");
})