$(document).ready(function(){

  var showNote = function showNote(){
    var note = $('#note').val();

    $("#displayNote").append("<div class='item'>" + note + "<span class='icon-cancel'></span>" + "</div>");

    document.form.display.value = null;

    $(".item").click('.icon-cancel', function(){
   $(this).closest('div').fadeOut(900);
    });

  };

  $("#submit").click(showNote);
  $("input").keypress(function(word){
  if (word.which == 13) {
    $(this).show(showNote);
  return false;
  }
  });
});
