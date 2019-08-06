///Main js file


$(window).on('beforeunload', function() {
  $('body').hide();
  $(window).scrollTop(0);
});


$(document).ready(function(){


  let today = new Date()
  let year = today.getFullYear()

  $(".copyright").html("Copyright &copy; " + year + " All rights reserved.");

  $(".copyright").hover(function(){
      $(".copyright").html("Nah JK, but please be nice and don't copy my website. :p");
  },
    function(){
      $(".copyright").html("Copyright &copy; " + year + " All rights reserved.");
    }

);
});

function LoadPage(){
  $.get('http://a_site.com/a_page.html', function(data) {
    $('#siteloader').html(data);
  });
}
