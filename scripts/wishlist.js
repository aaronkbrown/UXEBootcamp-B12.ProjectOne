$(document).ready(function(){

  var showNote = function showNote(){
    var note = $('#note').val();

    $("#displayNote").append("<div class='item'>" + note + "</div>");

    document.form.display.value = null;

  };

  $("#submit").click(showNote);
  $("input").keypress(function(word){
  if (word.which == 13) {
    $(this).show(showNote);
  return false;
  }
  });
});