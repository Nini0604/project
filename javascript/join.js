$(function(){
  $("#join").validate({
    rules: {
      userId: {
        required : true,
        minlength : 5
      },
      password: {
        required : true,
        minlength : 5
      },
      repassword: {
        required : true,
        minlength : 5,
        equalTo : password
      },
      userName: {
        required : true,
        minlength : 2
      }
    },

    messages : {
      userId: {
        required : "필수 정보입니다.",
        minlength : "최소 {0}글자이상이어야 합니다.",
      },
      password: {
        required : "필수 정보입니다.",
        minlength : "최소 {0}글자이상이어야 합니다."
      },
      repassword: {
        required : "필수 정보입니다.",
        minlength : "최소 {0}글자이상이어야 합니다.",
        equalTo : "비밀번호가 일치하지 않습니다."
      },
      userName: {
        required : "필수 정보입니다.",
        minlength : "최소 {0}글자 이상이어야 합니다."
      }
    },

    submitHandler: function(form){
      var userName= $("#userName").val();
      var userId= $("#userId").val();
      var userpwd = $("#password").val();

      var index='{"userId":"'+userId+'","userName":"'+userName+'","userpwd":"'+userpwd+'"}';
      console.log(index);
      var user = JSON.parse(index);
      document.cookie = userId+"="+index;
    }
  });
});
