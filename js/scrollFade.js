//File for all fading effects on the page
$(document).ready(function(){


  function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + 50;

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
  if(isScrolledIntoView(".container-about")){
    $(".container-about").animate({opacity: 1, marginTop: 0,marginBottom:0}, 1000);
  }
  if(isScrolledIntoView(".hobbies"))
    $(".hobbies").animate({opacity: 1, marginTop: 0,marginBottom:0}, 1000);

  if(isScrolledIntoView(".Skills")){
    $(".skillus").animate({opacity: 1, marginTop: 0,marginBottom:0}, 2000);
    $(".HTML").animate({width: 90+"%"}, 2000);
    $(".CSS").animate({width: 80+"%"}, 2000);
    $(".JS").animate({width: 50+"%"}, 2000);
    $(".JQuery").animate({width: 40+"%"}, 2000);
    $(".Git").animate({width: 75+"%"}, 2000);
}
  if(isScrolledIntoView(".Projects"))
    $(".Projects").animate({opacity: 1, marginTop: 0,marginBottom:0}, 1000);


});




});
