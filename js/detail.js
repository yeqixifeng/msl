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
//Tab切换

//轮播
var gongong = 4
var size = 0
function move() {
    /*移动事件*/
    console.log('move')
    console.log(gongong)
    if (gongong >= 4 && gongong <= size) {
        $("#content .title-list ul").css({ left: -(gongong - 4) * 1.59 + 'rem' });
    }
}
$(".title-next").on("click", function () {
    /*向右按钮*/
    if (gongong < size) {
        gongong++;
        move();
    }

})
$(".title-back").on("click", function () {
    /*向左按钮*/
    if (gongong > 4) {
        gongong--;
        move();
    }

})
$(document).ready(function () {
    let getId = window.location.search.substr(1);
    let useId = getId+1;
    $.get("http://shuangtao.xiaoyuancms.com/meishule/course/detail",
        { id: getId },
        function (res) {
            console.log(getId)
            let data = res.data
            let course = data.course
            let info = data.info
            size = course.length
            for (let i = 0; i < course.length; i++) {
                $('.title-list ul').append(`
            <li id="${course[i].id}">${course[i].name}</li>
            `)
            }

            if (info.environment.length == 0) {
                $('.introduce-wrap').html(`
                <div class="introduce">
                <div class="i-banner">
                    <img src="http://shuangtao.xiaoyuancms.com${info.img}" alt="">
                </div>
                <div class="i-title">
                    <div class="i-title-1">${info.name}</div>
                    <div class="i-title-2">(${info.age})</div>
                </div>
                <div class="i-line"></div>
                <div class="i-course">
                    <div class="course">
                        <div class="course-1"></div>
                        <div class="course-2">课程简介</div>
                    </div>
                    <div class="course-3">
                        ${info.synopsis}
                    </div>
                </div>
            </div>
                `)
                $('.title-list ul li').eq(useId).click()
            }
            else if (info.environment.length == 1) {
                $('.introduce-wrap').html(`
                <div class="introduce">
                <div class="i-banner">
                    <img src="http://shuangtao.xiaoyuancms.com${info.img}" alt="">
                </div>
                <div class="i-title">
                    <div class="i-title-1">${info.name}</div>
                    <div class="i-title-2">(${info.age})</div>
                </div>
                <div class="i-line"></div>
                <div class="i-course">
                    <div class="course">
                        <div class="course-1"></div>
                        <div class="course-2">课程简介</div>
                    </div>
                    <div class="course-3">
                        ${info.synopsis}
                    </div>
                </div>
                <div class="i-environment">
                    <div class="course">
                        <div class="course-1"></div>
                        <div class="course-2">中心环境</div>
                    </div>
                    <div class="environment">
                        <div class="environment-1">
                            <img src="http://shuangtao.xiaoyuancms.com${info.environment[0].img}" alt="">
                        </div>
                    </div>
                </div>
            </div>
                `)
            }
            else if(info.environment){
                $('.introduce-wrap').html(`
                <div class="introduce">
                <div class="i-banner">
                    <img src="http://shuangtao.xiaoyuancms.com${info.img}" alt="">
                </div>
                <div class="i-title">
                    <div class="i-title-1">${info.name}</div>
                    <div class="i-title-2">(${info.age})</div>
                </div>
                <div class="i-line"></div>
                <div class="i-course">
                    <div class="course">
                        <div class="course-1"></div>
                        <div class="course-2">课程简介</div>
                    </div>
                    <div class="course-3">
                        ${info.synopsis}
                    </div>
                </div>
                <div class="i-environment">
                    <div class="course">
                        <div class="course-1"></div>
                        <div class="course-2">中心环境</div>
                    </div>
                    <div class="environment">
                        <div class="environment-1">
                            <img src="http://shuangtao.xiaoyuancms.com${info.environment[0].img}" alt="">
                        </div>
                        <div class="environment-1">
                            <img src="http://shuangtao.xiaoyuancms.com${info.environment[1].img}" alt="">
                        </div>
                    </div>
                </div>
            </div>
                `)
            }
            
        }, "json");

})
$(document).ready(function () {
    $(".title-list ul").on("click", 'li', function () {
        $(this).addClass('current').siblings().removeClass('current')
        let getId = $(this).attr("id")
        console.log(getId)
        $.get("http://shuangtao.xiaoyuancms.com/meishule/course/detail",
            { id: getId },
            function (res) {
                let newinfo = res.data
                let info = newinfo.info
                if (info.environment.length == 0) {
                    $('.introduce-wrap').html(`
                    <div class="introduce">
                    <div class="i-banner">
                        <img src="http://shuangtao.xiaoyuancms.com${info.img}" alt="">
                    </div>
                    <div class="i-title">
                        <div class="i-title-1">${info.name}</div>
                        <div class="i-title-2">(${info.age})</div>
                    </div>
                    <div class="i-line"></div>
                    <div class="i-course">
                        <div class="course">
                            <div class="course-1"></div>
                            <div class="course-2">课程简介</div>
                        </div>
                        <div class="course-3">
                            ${info.synopsis}
                        </div>
                    </div>
                </div>
                    `)
                }
                else if (info.environment.length == 1) {
                    $('.introduce-wrap').html(`
                    <div class="introduce">
                    <div class="i-banner">
                        <img src="http://shuangtao.xiaoyuancms.com${info.img}" alt="">
                    </div>
                    <div class="i-title">
                        <div class="i-title-1">${info.name}</div>
                        <div class="i-title-2">(${info.age})</div>
                    </div>
                    <div class="i-line"></div>
                    <div class="i-course">
                        <div class="course">
                            <div class="course-1"></div>
                            <div class="course-2">课程简介</div>
                        </div>
                        <div class="course-3">
                            ${info.synopsis}
                        </div>
                    </div>
                    <div class="i-environment">
                        <div class="course">
                            <div class="course-1"></div>
                            <div class="course-2">中心环境</div>
                        </div>
                        <div class="environment">
                            <div class="environment-1">
                                <img src="http://shuangtao.xiaoyuancms.com${info.environment[0].img}" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                    `)
                }
                else if(info.environment){
                    $('.introduce-wrap').html(`
                    <div class="introduce">
                    <div class="i-banner">
                        <img src="http://shuangtao.xiaoyuancms.com${info.img}" alt="">
                    </div>
                    <div class="i-title">
                        <div class="i-title-1">${info.name}</div>
                        <div class="i-title-2">(${info.age})</div>
                    </div>
                    <div class="i-line"></div>
                    <div class="i-course">
                        <div class="course">
                            <div class="course-1"></div>
                            <div class="course-2">课程简介</div>
                        </div>
                        <div class="course-3">
                            ${info.synopsis}
                        </div>
                    </div>
                    <div class="i-environment">
                        <div class="course">
                            <div class="course-1"></div>
                            <div class="course-2">中心环境</div>
                        </div>
                        <div class="environment">
                            <div class="environment-1">
                                <img src="http://shuangtao.xiaoyuancms.com${info.environment[0].img}" alt="">
                            </div>
                            <div class="environment-1">
                                <img src="http://shuangtao.xiaoyuancms.com${info.environment[1].img}" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                    `)
                }
            }, "json");
    });
})
