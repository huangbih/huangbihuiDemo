// 首页
$(function(){
    var pos = 0;
    var isRun = true;
    var nextFunc = function(){
        clearInterval(sit);
        if(isRun){
            isRun=false;
            if(Math.abs(pos) >= 2760 ){
                // alert(1800);
                var lastTemp = $(".box>li:last").clone(true);
                lastTemp.css({position:"absolute",left:0,top:0,background:'url("./img/01fc3f5f715bd511013f311036f926.jpg")'});
                $(".box").append(lastTemp);
                lastTemp.animate({left:"-1380px"},3000,function(){ lastTemp.remove() });
                pos = 1380;
                $(".box").css({marginLeft:pos+"px"});
            } 
            pos -=1380;
            $(".box").animate({marginLeft:pos+"px"},3000,function(){ isRun=true });  
        }
        console.log("pos",pos);
    }

    $("#next").click(nextFunc);

    var sit = setInterval(nextFunc, 3000);

    $(".slider").hover(function(){
        clearInterval(sit);
    },function(){
        sit = setInterval(nextFunc, 3000);
    });
});


// top
$(function(){
    $(window).bind("scroll",function(){
       var sctop = $(window).scrollTop();
      console.log(sctop);
      if(sctop >= 1000){
           $(".toTop").show();
       }else{
           $(".toTop").hide();

       }
    });
});

