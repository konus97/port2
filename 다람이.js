$(function(){
    
    $(".con").on("mouseenter",function(){
       vid= $(this).find("video").get(0);
       vid.play();

       $(this).stop().animate({width:"35%"});
       $(this).children("h3").stop().animate({right:"10px"});
       $(this).children("p").stop().animate({right:"10px"});
       $(this).children("video").stop().animate({opacity:"1"});

    });






    $(".con").on("mouseleave",function(){    
        vid= $(this).find("video").get(0);
        vid.pause();

        $(this).stop().animate({width:"200px"});
        $(this).children("h3").stop().animate({right:"-200px"});
        $(this).children("p").stop().animate({right:"-300px"});
        $(this).children("video").stop().animate({opacity:"0"});
       
    });
});