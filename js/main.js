///Main js file

$(document).ready(function(){
  let today = new Date()
  let year = today.getFullYear()

  $(".copyright").html("Copyright &copy; " + year + " All rights reserved.");

  $(".copyright").hover(function(){
      $(".copyright").html("Nah JK, but please don't copy my website.You are a good person if you didn't do it :p");
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
