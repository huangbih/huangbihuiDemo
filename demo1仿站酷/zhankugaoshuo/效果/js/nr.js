$(document).ready(function() {
    $(".tab li").click(function() {
    $(".tab li").eq($(this).index()).addClass("cur").siblings().removeClass('cur');
    $(".t").hide().eq($(this).index()).show();
    //另一种方法: $("div").eq($(".tab li").index(this)).addClass("on").siblings().removeClass('on'); 

});
});

$(document).ready(function() {
    $(".tab2 li").click(function() {
        $(".tab2 li").eq($(this).index()).addClass("cur2").siblings().removeClass('cur2');
        $(".t2").hide().eq($(this).index()).show();
        //另一种方法: $("div").eq($(".tab li").index(this)).addClass("on").siblings().removeClass('on'); 

    });
});

$(document).ready(function() {
    $(".tab3 li").click(function() {
        $(".tab3 li").eq($(this).index()).addClass("cur3").siblings().removeClass('cur3');
        
        //另一种方法: $("div").eq($(".tab li").index(this)).addClass("on").siblings().removeClass('on'); 

    });
});

$(document).ready(function() {
    $(".bar4 li").click(function() {
        $(".bar4 li").eq($(this).index()).addClass("cur3").siblings().removeClass('cur3');
    });
});

$(document).ready(function() {
    $(".bar5 li").click(function() {
        $(".bar5 li").eq($(this).index()).addClass("cur3").siblings().removeClass('cur3');
    });
});

$(document).ready(function() {
    $(".bar6 li").click(function() {
        $(".bar6 li").eq($(this).index()).addClass("cur4").siblings().removeClass('cur4');
    });
});

$(document).ready(function() {
    $(".bar7 li").click(function() {
        $(".bar7 li").eq($(this).index()).addClass("cur5").siblings().removeClass('cur5');
    });
});