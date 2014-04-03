$(document).ready(function(){
  $('.edit').on('dblclick', function(){
  $(this).removeAttr("readonly");
});

  $('#add').click( function(){
    $('.edit').attr('readonly',"readonly");
  });
});

