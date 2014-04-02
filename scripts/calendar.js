//$(document).ready(function(){
function updateTime() {
  var future  = Date.parse("June 11, 2014");
  var now = new Date();
  var diff = future - now;

  var days  = Math.floor( diff / (1000*60*60*24) );
  var hours = Math.floor( diff / (1000*60*60) );
  var mins  = Math.floor( diff / (1000*60) );
  var secs  = Math.floor( diff / 1000 );


  var hh = hours - days  * 24;
  var mm = mins  - hours * 60;
  var ss = secs  - mins  * 60;

        document.getElementById("countdown")
            .innerHTML =
         days + 'd ' + hh + 'h ' + mm + 'm ' + ss + 's';
}
setInterval(function(){updateTime();}, 1000 );


//$(document).ready(function(){
    //var item = $('#event').val();
    //var date = $('#date').val();



    $('#enter').on('click', function(){
      var item = $('#event').val();
      var date = $('#date').val();
      $('#event').val('');
      $('#date').val('');
      $('#displayNote').append("<div class='item'>" + item + ' ' + date + "</div>");
    });
  //});



