var cookieData = document.cookie;
var start = cookieData.indexOf("isLogined");
console.log(start);

if(start !== -1){
  var end = cookieData.indexOf(';', start);
  var isLoginID = cookieData.substring(start+10,end);
}

$( document ).ready(function() {
  var loginedID = JSON.parse(isLoginID);
  if(loginedID !== null){
    $('#join').css("display","none");
    $("#login a").removeAttr("href");
    $("#login a").text("LOGOUT");
    $(".welcome").text(loginedID.userName+"님, 반갑습니다");
  }
});

$( "#login" ).click(function() {
  console.log("dd");
  var today = new Date();
  today.setDate(today.getDate() - 1);
  document.cookie = "isLogined="+isLoginID+";expires=" + today.toGMTString() + ";";
  $("#login a").attr("href","login.html");
  $("#login a").text("LOGIN");
  $('#join').css("display","");
});
