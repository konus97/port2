$(function(){
    let baseline = -300;
    let pos1 = $("#con1").offset().top+baseline;
    let pos2 = $("#con2").offset().top+baseline;
    let pos3 = $("#con3").offset().top+baseline;
    let pos4 = $("#con4").offset().top+baseline;
    let pos5 = $("#con4_2").offset().top+baseline;
    let pos6 = $("#con5").offset().top+baseline;
    
    

    $(window).on ("scroll",function(){
       let scroll = $(this).scrollTop();

       if (scroll>=pos1 && scroll<pos2){
            $("#navi li").removeClass("on");
            $("#navi li").eq(0).addClass("on")
       }else if(scroll>=pos2 && scroll<pos3){
        $("#navi li").removeClass("on");
        $("#navi li").eq(1).addClass("on")
       
       }else if(scroll>=pos3 && scroll<pos4){
        $("#navi li").removeClass("on");
        $("#navi li").eq(2).addClass("on")
       
       }else if(scroll>=pos4 && scroll<pos5){
        $("#navi li").removeClass("on");
        $("#navi li").eq(3).addClass("on")
        

      }else if(scroll>=pos5 && scroll<pos6){
        $("#navi li").removeClass("on");
        $("#navi li").eq(4).addClass("on")
       

       }else {
        $("#navi li").removeClass("on");
        $("#navi li").eq(5).addClass("on")
       };
    })

    $("#navi li").on("click",function(){
        let target = $(this).children("a").attr("href");
        let pos = $(target).offset().top;
        /*alert(pos);*/
        $("html,body").stop().animate({scrollTop:pos},1000)
   });

   $("#nav li").on("mouseenter",function(){
      $(this).children(".underline").stop().animate({height:"13px"})
   });
   $("#nav li").on("mouseleave",function(){
      $(this).children(".underline").stop().animate({height:"0px"})
   })

   /*모바일 메뉴바*/
   let j = 0;
  

   $("#con1 .m_navi").on("click", function () {
       if (j == 0) {
           $(".menu").stop().animate({ right: "0px" });
           j = 1;
           $("#con1 .m_navi div").stop().css({ background: "#fbdc96" });
       } else {
           $(".menu").stop().animate({ right: "-100%" });
           j = 0;
           $("#con1 .m_navi div").stop().css({ background: "#222" });
       
       }
   })

   $("#con1 .m_navi").on("mouseenter", function () {
       $("#con1 .m_navi div").first().stop().animate({marginLeft:"-5px"});
       $("#con1 .m_navi div:nth-of-type(2").stop().animate({marginLeft:"10px"});
       $("#con1 .m_navi div").last().stop().animate({marginLeft:"-5px"});
   
      
   });
   $("#con1 .m_navi").on("mouseleave", function () {
    $("#con1 .m_navi div").first().stop().animate({marginLeft:"0px"});
       $("#con1 .m_navi div:nth-of-type(2").stop().animate({marginLeft:"0px"});
       $("#con1 .m_navi div").last().stop().animate({marginLeft:"0px"});
      
   });

   $(".menu_right a").on("mouseenter",function(){
      $(this).css({color:"#fcdd96",fontWeight:"300"})
   });
   $(".menu_right a").on("mouseleave",function(){
    $(this).css({color:"#fff",fontWeight:"100"})
 });


   /*스킬 mouse*/
   
   $(".skill1 li").on("mouseenter",function(){
    $(this).children("img").stop().css({display:"none"})
    $(this).children("p").css({opacity:"1",display:"block"})
    $(this).stop().animate({borderRadius:"50%"})
   });
   $(".skill1 li").on("mouseleave",function(){
    $(this).children("img").stop().css({display:"block"})
    $(this).children("p").css({display:"none"})
    $(this).stop().animate({borderRadius:"15px"})
   });
   
   $(".skill2 li").on("mouseenter",function(){
    $(this).children("img").stop().css({display:"none"});
    $(this).children("p").css({opacity:"1",display:"block"});
    $(this).stop().animate({borderRadius:"50%"});
   });
   $(".skill2 li").on("mouseleave",function(){
    $(this).children("img").stop().css({display:"block"});
    $(this).children("p").css({display:"none"});
    $(this).stop().animate({borderRadius:"15px"})
   });
  


    /*타이핑문자*/
    $(document).ready(function(){
      var typingBool = false; 
      var typingIdx=0; 
      var liIndex = 0;
      var liLength = $(".typing-txt>ul>li").length;
    
      // 타이핑될 텍스트를 가져온다 
      var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
      typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
      if(typingBool==false){ // 타이핑이 진행되지 않았다면 
          typingBool=true; 
          var tyInt = setInterval(typing,100); // 반복동작 
      } 
          
      function typing(){ 
        if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
          $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
          typingIdx++; 
        } else{ //한문장이끝나면
          //다음문장으로.. 마지막문장이면 다시 첫번째 문장으로 
          if(liIndex>=liLength-1){
            liIndex=0;
          }else{
            liIndex++; 
          }
          
          //다음문장을 타이핑하기위한 셋팅
              typingIdx=0;
              typingBool = false; 
              typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
            
          //다음문장 타이핑전 1초 쉰다
              clearInterval(tyInt);
              setTimeout(function(){
                  $(".typing").html('');
                tyInt = setInterval(typing,100);
              },1000);
          } 
      }  
    
    })

    /*fade*/
    
     /*big*/
     let total =$(".bigfade li").length
     let i=0;
     setInterval(function(){
       
         if(i == total -1){
             i=0;
         }else{
             
             i = i+1;
         }
         $(".bigfade li").stop().fadeOut(3000);
         $(".bigfade li").eq(i).stop().fadeIn(3000);
        
     },3500)

      /*small*/
      
      let k=0;
      setInterval(function(){
          if(k ==5){
              k=0;
          }else{
              k = k+1;
          }
          $(".smallfade li").stop().fadeOut(3000);
          $(".smallfade li").eq(k).stop().fadeIn(3000);
         


          
      },3500)


      /*post*/
      $(".post1 li,.post2 li").on("mouseenter",function(){
        $(this).stop().animate({padding:"0px",height:"100%"})
      });
      $(".post1 li,.post2 li").on("mouseleave",function(){
        $(this).stop().animate({padding:"1%"})
      });
      
      

});
