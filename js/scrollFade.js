//File for all fading effects on the page
$(document).ready(function(){

  function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

  $(window).scroll(function(){
      $(".fadeIn").css("opacity", 1 - $(window).scrollTop()/200);
    });
  $(window).scroll(function(){
      var minWid;
      minWid = 200 - $(window).scrollTop();
      if(minWid < 0){
        minWid = 0;
      }
      var minPad;
      minPad = 0 - $(window).scrollTop();
      if(minPad < -240){
        minPad = -240;
      }
      $(".profileImage").css("width", minWid + "px");
      $(".profileImage").css("margin-top", minPad + "px");

  });
$(window).scroll(function(){
    $(".nav").css("opacity", 1-$(window).scrollTop()/400 );
    $(".navContainer").css("top", 80 - $(window).scrollTop()/30 + "%" );
});


///This is for content cards
$(window).scroll(function(){
  if(isScrolledIntoView(".fromLeft")){
    $(".card-left").animate({marginLeft: "0%", opacity: 1}, 400);
    $(".card-right").animate({marginLeft: "0%", opacity: 1}, 400);
  }
});
});
