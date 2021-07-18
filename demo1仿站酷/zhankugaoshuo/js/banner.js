/*轮播图js*/
/*封装play函数，利用定时器自动向左播放下一张*/
$(function () {
    var timer = null;
    var liW = $(".banner ul li:first").innerWidth();//求一个li的宽度
    var n = 0;//用来管理给第几个span添加类.on
    timer = setInterval(function () {
        /*
            1.先将ul向左移动一个li的宽度，再将第一个li带出去
            2.在执行完1后(形成一个动画队列)，将ul的left回归到0，再将带出去的li追加回ul的最后
        */
        play();
    },2000)
    function play() {
        $(".banner ul").animate({left: -liW},function () {/*回调函数*/
            $(this).css("left",0).find("li:first").appendTo(this);
        })
        n++;
        if(n>4){/*if(n>$(".banner ul li").length)-1*/   /*$(".banner ul li").length)表示li的个数*/
            n = 0;
        }
        $(".banner .num span").eq(n).addClass("on").siblings().removeClass("on");
    }
    /*当鼠标移动到轮播图区域，轮播暂停*/
    $(".banner").hover(function () {
        clearInterval(timer);
    },function () {
        timer = setInterval(function () {
            play();
        },2000)
    })
    /*点击next向右箭头*/
    $(".next").click(function () {
        play();
    })
    /*点击prev向左箭头*/
    $(".prev").click(function () {
        /*
            看当前显示的图片前面的
            1.先把ul往左移出一个li的宽度，同时，将最后一个li追加到ul最前头
            2.执行动画：ul的left变为0，将最后一个li带回
        */
        /*$(".banner ul").css("left",-liW).find("li:last").prependTo(this);*//*此处不能用this,当前this指的是prev按钮*/
        $(".banner ul").css("left",-liW).find("li:last").prependTo(".banner ul");
        $(".banner ul").animate({left:0})
        /*解决点击prev时，span跟着一起变化*/
        n--;
        if(n<0){
            n = 4;/*n = $(".banner ul li").length)-1*/
        }
        $(".banner .num span").eq(n).addClass("on").siblings().removeClass("on");
    })
    /*点击span进行切换
       当前轮播到第几张，放在n中存储，当点击span时，会得到span的index值
       1.判断得到的index值是大于n还是小于n
       如果小于n：通过for循环执行n到index的次数(不包括index,++)的向左循环切换效果
       如果大于n：通过for循环执行n到index的次数(不包括index,--)的向右循环切换效果
       2.将index赋值给n，进行span的切换
    */
    $(".banner .num span").each(function (index) {/*用each遍历*/
        $(this).click(function () {
            if(n < index){
                for(var i = n;i<index;i++){
                    $(".banner ul").animate({left: -liW},100,function () {/*回调函数*/
                        $(this).css("left",0).find("li:first").appendTo(this);
                    })
                }
            }else if(n>index){
                for(var i = n;i>index;i--){
                    $(".banner ul").css("left",-liW).find("li:last").prependTo(".banner ul");
                    $(".banner ul").animate({left:0},100);
                }
            }
            n = index;
            $(".banner .num span").eq(n).addClass("on").siblings().removeClass("on");
        })

    })

})