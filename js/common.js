function getLoginData() {
  var cookieData = document.cookie;
  var cookieArray = cookieData.split(";");
  var loginData;

  for (var i = 0; i < cookieArray.length; i++) {
    var isData = cookieArray[i].indexOf("isLogined");
    if(isData !== -1 ){
      loginData = cookieArray[i];
    }
  }
  if (loginData) {
    loginData = loginData.split("=")[1].trim();
    return loginData;
  }
  return null;
}

function loginNav(loginedID){
  $('#join').css("display","none");
  $("#login a").removeAttr("href");
  $("#login a").text("LOGOUT");
  $(".welcome").text(loginedID.userName+"님, 반갑습니다.");
}

function logoutNav(){
  $("#login a").attr("href","login.html");
  $("#login a").text("LOGIN");
  $('#join').css("display","");
}

$(document).ready(function() {
  var loginData = getLoginData();
  if(loginData){
    var loginedID = JSON.parse(loginData);
    if(loginedID){
      loginNav(loginedID);
    }
  }

  $("#login").click(function() {
    var today = new Date();
    today.setDate(today.getDate() - 1);
    document.cookie = "isLogined="+loginedID+";expires=" + today.toGMTString() + ";";
    logoutNav();
  });
});
