$(document).ready(function() {
  var speed = 2000;
  var colors=["#ffbadd","#b0d8fe","#dbb9fd"];

  function flash(index){
    if (index >= colors.length) {
      index = 0;
    }

    $("#hereLink").css("color",colors[index]);
    setTimeout(function() {
      flash(index + 1);
    }, speed);
  }

  flash(0);
});
