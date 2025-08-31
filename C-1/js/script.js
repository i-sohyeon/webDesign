$(function(){
  // alert('test');
  // menu
  $("nav > ul > li").mouseenter(function(){
    $(this).children(".sub").stop().slideDown();
  });
  $("nav > ul > li").mouseleave(function(){
    $(this).children(".sub").stop().slideUp();
  });

  // slide
  let i = 0;
  function slide(){
    if(i<2){
      i++;
    } else {
      i = 0;
    }
    $(".slide > ul > li").fadeOut();
    $(".slide > ul > li").eq(i).fadeIn();
  }
  setInterval(slide, 3000);

  // tabcont
  let t;
  $(".tabs > ul > li").click(function(){
    $(".tabs > ul > li").removeClass("on");
    $(this).addClass("on");
    t = $(this).index();
    $(".tabcon").hide();
    $(".tabcon").eq(t).show();
  });

  // popup
  $(".pop").click(function(){
    $(".popup").show();
  });
  $(".popup .close").click(function(){
    $(".popup").hide();
  });
});