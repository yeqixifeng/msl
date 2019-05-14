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
function join (){
    var username=$("#username").val();
    var gender=Number($("input[name='sex']:checked").val());
    var native=$("#native").val();
    var birth=$("#birth").val();
    var tel=$("#tel").val();
    var email=$("#email").val();
    var domicile=$("#province1  option:selected").text()+$("#city1  option:selected").text()+$("#county1  option:selected").text();
    var first_choice=$("#province2  option:selected").text()+$("#city2  option:selected").text()+$("#county2  option:selected").text();
    var second_choice=$("#province3  option:selected").text()+$("#city3  option:selected").text()+$("#county3  option:selected").text();
    var capital=$("#capital").val();
    var repay_year=$("#repay_year").val();
    var education=$("#education").val();
    var occupation=$("#occupation").val();
    $.post("http://shuangtao.xiaoyuancms.com/meishule/apply/apply", 
    { username: username, gender: gender,native: native,birth: birth,tel: tel,
    email: email,domicile: domicile,first_choice: first_choice,second_choice: second_choice,capital: capital,
    repay_year: repay_year,education: education,occupation: occupation },
   function(res){
     if(res.status==0){
         alert('提交成功')
     }
     else {
        alert(res.alert)
     }
   },"json");
}