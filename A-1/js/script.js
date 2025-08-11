$(function(){
  // 메뉴
  $("nav > ul > li").mouseenter(function(){
    $("nav > ul .sub").stop().slideDown();
  });
  $("nav > ul > li").mouseleave(function(){
    $(".sub").stop().slideUp();
  });

  // 슬라이드
  let i = 0;
  function slide () {
    if (i<2){
      i++;
    }else {
      i=0;
    }
    $(".slide ul").animate({marginTop: -300 * i}, 1000);
  }
  setInterval(slide, 3000);

  // 탭메뉴
  let t;
  $(".tab li").click(function(){
    $(".tab li").removeClass("on");
    $(this).addClass("on");
    t=$(this).index();
    $(".tabcon").hide();
    $(".tabcon").eq(t).show();
  });

  // 팝업
  $(".pop").click(function(){
    $(".popup").show();
  });
  $(".popup .close").click(function(){
    $(".popup").hide();
  });
});