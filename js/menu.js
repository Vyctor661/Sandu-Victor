
$(document).ready(function(){
  // some testing here and there
  $("#home").click(function(){
    $(location).attr('href','#');
    $(window).attr('location','#');
  });
  $("#about").click(function(){
    $(location).attr('href','#');
    $(window).attr('location','#');
  });
  $("#cv").click(function(){
    $(location).attr('href','#');
    $(window).attr('location','#');
  });
  $("#contact").click(function(){
    $(location).attr('href','#footer');
    $(window).attr('location','#footer');
  });

  //Hide menu button when reached a scroll point.
  // function isScrolledOutsideView(elem)
  // {
  //     if( ($(window).height() * elem) / 100 < $(window).scrollTop()){
  //       return true;
  //     }else {
  //       return false;
  //     }
  // }
  //
  // $(window).scroll(function() {
  //     if(isScrolledOutsideView(70)) //Percentage of parralax height
  //     {
  //         $("#dropDown").hide();
  //     }else {
  //         $("#dropDown").show();
  //     }
  // });
});
