///Main js file

$(document).ready(function(){
  let today = new Date()
  let year = today.getFullYear()

  $(".copyright").html("Copyright &copy; " + year + " All rights reserved.");

  $(".copyright").hover(function(){
      $(".copyright").html("Nah JK, but please don't copy my website. If you won't that means you are a good person. :P");
  },
    function(){
      $(".copyright").html("Copyright &copy; " + year + " All rights reserved.");
    }

);


});
