$(function (){
  // alert("test");
  // menu
  $("nav > ul > li").mouseenter(function(){
    $(this).children(".sub").stop().slideDown();
  });
  $("nav > ul > li").mouseleave(function(){
    $(".sub").stop().slideUp();
  });

  // slide
  let i;
  function slide(){
    if(i < 2){
      i++;
    } else {
      i=0;
    }
    $(".slide > ul").animate({marginTop: -400 * i}, 1000);
  }
  setInterval(slide, 3000);

  // tab
  let t;
  $(".tabs > ul > li").click(function(){
    $(".tabs > ul > li").removeClass("on");
    $(this).addClass("on");
    t = $(this).index();
    $(".tabcon").hide();
    $(".tabcon").eq(t).show();
    return false;
  });

  // popup
  $(".pop").click(function(){
    $(".popup").show();
  });
  $(".button-box > button").click(function(){
    $(".popup").hide();
  });
});