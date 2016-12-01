var productList = [];
var totalPrice = 0;
var price = 0;

window.onload = showCartList;

function showCartList(){
  var productStrList = (document.cookie).split(';');
  productList = [];
  for (var i = 0; i < productStrList.length; i++) {
    productList.push(JSON.parse(productStrList[i].substring(productStrList[i].indexOf('{'),productStrList[i].length)));
    if(productList[i].quantity > 0){
      $("#cart-table").append("<tr id ="+productList[i].name+">");
      $("#"+productList[i].name).append("<td class="+productList[i].name+"-img></td>");
      cartImage(productList[i].name,productList[i].src);
      $("#"+productList[i].name).append("<td class="+productList[i].name+"-name>"+productList[i].name+"</td>");
      $("."+productList[i].name+"-name").append("<p class=prod-desc>"+productList[i].desc+"</p>");
      $("#"+productList[i].name).append("<td class="+productList[i].name+"-price>"+productList[i].price+"</td>");
      $("#"+productList[i].name).append("<td class="+productList[i].name+"-qty>"+productList[i].quantity+"</td>");
      price += productList[i].total;
    }
  }
  addProductPrice(price);
}

function cartImage(name,imgSrc){
  $("."+name+"-img").append("<img src="+imgSrc+" class='prod-img'>");
  $('.prod-img').attr({
    height:'auto',
    width:'100px',
    display:'inline',
    style: 'margin:5px;vertical-align:middle;border-radius:10px;'
  });
}

function addProductPrice(totalPrice){
  $("#sum").text(totalPrice +"원");
}

function pay(){
  alert(price+"원 결제되었습니다.");
}
