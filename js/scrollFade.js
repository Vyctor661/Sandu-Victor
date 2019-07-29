// This is a function for a fading effect for the main title
$(window).scroll(function(){
    $(".fadeIn").css("opacity", 1 - $(window).scrollTop() / 150);
  });
$(window).scroll(function(){
    var minWid;
    minWid = 180 - $(window).scrollTop()*1.5;
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
