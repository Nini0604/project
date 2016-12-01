var pageUrl = window.location.href;
var cookieData = document.cookie;
var cookieArray = cookieData.split(";");
var productNum = pageUrl.split("?")[1].split("=")[1];

for (var i = 0; i < cookieArray.length; i++) {
  var isData = cookieArray[i].indexOf("product"+productNum);

  if(isData !== -1 ){
    var product = JSON.parse(cookieArray[i].split("=")[1].trim());
  }
}

$("#prod-detail-img").attr("src", product.src);
$("#prod-name").text(product.name);
$("#prod-desc").text(product.desc);
$("#prod-price").text(product.price);
$("#detailPrdImg").attr("src", product.detailImg);

function buyProduct(){
  alert(product.price+"원 결제되었습니다.");
}

function addProduct(){
  product.quantity++;
  product.total = product.price * product.quantity;
  var productIndex = JSON.stringify(product);
  document.cookie = "product"+productNum+"="+productIndex;
  location.href = "../html/cart.html";
}
