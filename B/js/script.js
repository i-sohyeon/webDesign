$(function(){
// 메뉴
$("nav > ul > li").mouseover(function(){
  $("nav .sub, .navBg").stop().slideDown();
});
$("nav > ul > li").mouseleave(function(){
  $("nav .sub, .navBg").stop().slideUp();
});

// 슬라이드
let i = 0;
function slide() {
  if(i<2){
    i++;
  }else {
    i=0;
  }
  $(".slide ul li").fadeOut();
  $(".slide ul li").eq(i).fadeIn();
}
setInterval(slide, 3000);

// 탭메뉴
let t;
$(".tabmenu > li").click(function(){
  // alert("test");
  $(".tabmenu > li").removeClass("on");
  $(this).addClass("on");
  t=$(this).index();
  $(".tabcon").hide();
  $(".tabcon").eq(t).show();
});

return false;
});
