$(".h-button").click(function () {
    $(".sidenav").show()
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
    $(".sidenav").hide();
    $(".h-cancel").hide();
    $(".h-button").show()
});

function app() {
    let city=$("#city  option:selected").text()
    let name=$("#name").val()
    let birthday=$("#birthday").val()
    let tel=$("#tel").val()
    $.post("http://shuangtao.xiaoyuancms.com/meishule/bespeak/bespeak",
        { city:city , name:name , birthday: birthday, tel:tel  },
        function (res) {
            if (res.status == 0) {
                alert('提交成功')
            }
            else {
                alert(res.alert)
            }
        }, "json");
}
$(document).ready(function () {
    $.get("http://shuangtao.xiaoyuancms.com/meishule/shop/info", function (res) {
        let data = res.data
        for (let i = 0; i < data.length; i++) {
            $('#city').append(`
            <option value="${data[i].name}">${data[i].name}</option>
            `)
        }
    }, "json");
})