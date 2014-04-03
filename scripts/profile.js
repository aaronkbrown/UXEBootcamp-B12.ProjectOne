$(document).ready(function(){
  $('.edit').on('click', function(){
  $(this).removeAttr("readonly");
});

  $('#add').click( function(){
    $('.edit').attr('readonly',"readonly");
  });
});

