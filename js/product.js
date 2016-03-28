
  var cookieData = document.cookie;
  var cookieArray = cookieData.split(";");

  for (var i = 0; i < cookieArray.length; i++) {
    var isData = cookieArray[i].indexOf("productPage");
    if(isData !== -1 ){
      var productNum = cookieArray[i].split("=")[1];

      for(var j = 0; j < cookieArray.length; j++) {
        var selectProduct = cookieArray[j].indexOf(productNum+"=");
        if(selectProduct !== -1){
          console.log(cookieArray[j]);
          var product = JSON.parse(cookieArray[j].split("=")[1].trim());
        }
      }

      $("#mainPrdImg").attr("src", product.src);
      $("#prd-name").text(product.name);
      $("#prd-desc").text(product.desc);
      $("#prd-price").text(product.price);
      $("#detailPrdImg").attr("src", product.detailImg);

      var expireDate = new Date();
      expireDate.setDate( expireDate.getDate() - 1 );
      document.cookie = "productPage=; expires="+expireDate.toGMTString();

    }
  }


function addProduct(){
  //JSON.stringify(product.name);
  product.quantity++; // 수량 1 추가
  console.log(product.quantity);
  product.total = product.price * product.quantity;
  console.log(product.total);
  var productIndex = JSON.stringify(product);
  console.log(productIndex);
  console.log(productNum);
  document.cookie = productNum+"="+productIndex;
}

//productObj.quantity++; // 수량 1 추가
//productObj.total = productObj.price * productObj.quantity;
