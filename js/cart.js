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
      $("#cartTable").append("<tr id ="+productList[i].name+">");
      $("#"+productList[i].name).append("<td class="+productList[i].name+"-Img></td>");
      cartImage(productList[i].name,productList[i].src);
      $("#"+productList[i].name).append("<td class="+productList[i].name+"-name>"+productList[i].name+"</td>");
      $("."+productList[i].name+"-name").append("<p class=prd-desc>"+productList[i].desc+"</p>");
      console.log(productList[i].desc);
      $("#"+productList[i].name).append("<td class=prd-price>"+productList[i].price+"</td>");
      $("#"+productList[i].name).append("<td class=prd-quantity>"+productList[i].quantity+"</td>");
    }
    price += productList[i].total;
  }
  addProductPrice(price);
}

function cartImage(name,imgSrc){
  $("."+name+"-Img").append("<img src="+imgSrc+" class='productImage'>");
  $('.productImage').attr({
    height:'auto',
    width:'100px',
    display:'inline',
    style: 'margin:5px;vertical-align:middle;border-radius:10px;'
  });
}

function addProductPrice(totalPrice){
  console.log("받은값:"+totalPrice);
  $("#sum").text(totalPrice +"원");
}

function pay(){
  alert(price+" 결제완료되었습니다.");
}
