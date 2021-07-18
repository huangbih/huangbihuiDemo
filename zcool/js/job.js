
$(function(){
    var pos = 0;
    var isRun = true;
    var nextFunc = function(){
        clearInterval(sit);
        if(isRun){
            isRun=false;
            if(Math.abs(pos) >= 1580 ){
                // alert(1800);
                var lastTemp = $(".box>li:last").clone(true);
                lastTemp.css({position:"absolute",left:0,top:0,background:'url("./img/08075f701b4211014252e8f153e8.jpg")'});
                $(".box").append(lastTemp);
                lastTemp.animate({left:"-790px"},3000,function(){ lastTemp.remove() });
                pos = 790;
                $(".box").css({marginLeft:pos+"px"});
            } 
            pos -=790;
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

top
$(function(){
    $(window).bind("scroll",function(){
       var sctop = $(window).scrollTop();
    //   console.log(sctop);
      if(sctop >= 1000){
           $(".toTop").show();
       }else{
           $(".toTop").hide();

       }
    });
});

$(document).ready(function(){
    $(window).bind("scroll",function(){
         var sctop = $(window).scrollTop();
        console.log("qqqq",sctop);
        if(Math.abs(sctop) <= 110 ){
            $(".side-left").css({position:"relative"});
        }
        if(Math.abs(sctop) >= 110 ){
            $(".side-left").css({position:"fixed",top:0});
        }
        if(Math.abs(sctop) >= 1495 ){
            $(".side-left").css({position:"relative",top:"1345px"});
            console.log("测试",sctop);
        }
    });	
  });	
