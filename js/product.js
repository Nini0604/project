var pageUrl = window.location.href;
var cookieData = document.cookie;
var cookieArray = cookieData.split(";");
var productNum = pageUrl.split("?")[1].split("=")[1];

for (var i = 0; i < cookieArray.length; i++) {
  var isData = cookieArray[i].indexOf("product"+productNum);

  if(isData !== -1 ){
    console.log(cookieArray[i]);
    var product = JSON.parse(cookieArray[i].split("=")[1].trim());
  }
}

$("#mainPrdImg").attr("src", product.src);
$("#prd-name").text(product.name);
$("#prd-desc").text(product.desc);
$("#prd-price").text(product.price);
$("#detailPrdImg").attr("src", product.detailImg);

function addProduct(){
  product.quantity++;
  product.total = product.price * product.quantity;
  var productIndex = JSON.stringify(product);
  document.cookie = "product"+productNum+"="+productIndex;
}
