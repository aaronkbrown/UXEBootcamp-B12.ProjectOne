 $(function() {
         var pull = $('#pull');
         var menu     = $('nav a');

   $(pull).on('click', function(){
      menu.slideToggle(500);
         });
      });