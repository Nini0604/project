$(function(){
  $("#login").validate({
    rules: {
      id:{
        required : true
      },
      password:{
        required: true
      }
    },
    messages : {
      id:{
        required : true
      },
      password:{
        required: true
      }
    },
    submitHandler: function(){
      var inputId= $("#id").val();
      var inputPwd= $("#password").val();
      var canLogin = userList(inputId, inputPwd);

      if(canLogin){
        alert("로그인 성공");
      } else{
        alert("ID 또는 비밀번호가 틀립니다!");
      }
    }
  });
});

function userList(inputId, inputPwd){
  var userCookieList = (document.cookie).split(';');
  var userList = [];
  for (var i = 0; i < userCookieList.length; i++) {
    userList.push(JSON.parse(userCookieList[i].substring(userCookieList[i].indexOf('{'),userCookieList[i].length)));
    if(userList[i].userId == inputId && userList[i].userpwd == inputPwd){
      return true;
    } else{
      return false;
    }
  }
}
