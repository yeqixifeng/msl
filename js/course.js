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
    $.get("http://shuangtao.xiaoyuancms.com/meishule/Course/info",
    { page: 1, limit: 6 },
     function (res) {
        console.log(res) 
        let data=res.data
        for (let i = 1; i <=data.total; i++){
            $('.page').append(`
                <div class="p-index">${i}</div>
            `)
        }
        for (let i = 0; i < data.info.length; i++) {
            $('.course-list').append(`
            <a href="detail.html?${data.info[i].id}">
                <div class="list">
                    <div class="l-banner">
                        <img src="http://shuangtao.xiaoyuancms.com${data.info[i].img}" alt="">
                    </div>
                    <div class="l-cont">
                        <div class="l-1">
                            <img src="http://shuangtao.xiaoyuancms.com${data.info[i].icon}" alt="">
                        </div>
                        <div class="l-2">${data.info[i].name}</div>
                        <div class="l-3">(${data.info[i].age})</div>
                    </div>
                    <div class="l-text"><text>课程简介：${data.info[i].synopsis}</text></div>
                </div>
            </a>
            `)
        }
        
    }, "json");
})
$('.page').on('click','.p-index',function () {
    let page=$(this).index()+1
    $.get("http://shuangtao.xiaoyuancms.com/meishule/Course/info",
    { page: page, limit: 6 },
     function (res) {
        let data=res.data
        $('.course-list').html("")
        for (let i = 0; i < data.info.length; i++) {
            $('.course-list').append(`
            <a href="detail.html${data.info[i].id}">
                <div class="list">
                    <div class="l-banner">
                        <img src="http://shuangtao.xiaoyuancms.com${data.info[i].img}" alt="">
                    </div>
                    <div class="l-cont">
                        <div class="l-1">
                            <img src="http://shuangtao.xiaoyuancms.com${data.info[i].icon}" alt="">
                        </div>
                        <div class="l-2">${data.info[i].name}</div>
                        <div class="l-3">(${data.info[i].age})</div>
                    </div>
                    <div class="l-text"><text>课程简介：${data.info[i].synopsis}</text></div>
                </div>
            </a>
            `)
        }
       
    }, "json");
})
