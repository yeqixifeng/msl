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
$(document).ready(function(){
    $.get("http://shuangtao.xiaoyuancms.com/meishule/Brand/info", function(res){
        
    let data=res.data
        $('.in-cont1').html(data.synopsis)
        $('.in-cont2').html(data.solgan)
        $('.in-cont3').html(data.cartoon_content)
      },"json");
})