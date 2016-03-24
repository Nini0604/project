var product01 = { name: "TOP1", price: "10000원", src: "../image/top/top1.jpg"};
var product02 = { name: "TOP2", price: "10000원", src: "../image/top/top2.jpg"};
var product03 = { name: "TOP3", price: "10000원", src: "../image/top/top3.jpg"};
var product04 = { name: "TOP4", price: "10000원", src: "../image/top/top4.jpg"};
var product05 = { name: "TOP5", price: "10000원", src: "../image/top/top5.jpg"};
var product06 = { name: "BOTTOM1", price: "10000원", src: "../image/bottom/bottom1.jpg"};
var product07 = { name: "BOTTOM2", price: "10000원", src: "../image/bottom/bottom2.jpg"};
var product08 = { name: "BOTTOM3", price: "10000원", src: "../image/bottom/bottom3.jpg"};
var product09 = { name: "BOTTOM4", price: "10000원", src: "../image/bottom/bottom4.jpg"};
var product10 = { name: "BOTTOM5", price: "10000원", src: "../image/bottom/bottom5.jpg"};
var product11 = { name: "BOTTOM1", price: "10000원", src: "../image/bottom/bottom1.jpg"};
var product12 = { name: "BOTTOM2", price: "10000원", src: "../image/bottom/bottom2.jpg"};
var product13 = { name: "BOTTOM3", price: "10000원", src: "../image/bottom/bottom3.jpg"};
var product14 = { name: "BOTTOM4", price: "10000원", src: "../image/bottom/bottom4.jpg"};
var product15 = { name: "BOTTOM5", price: "10000원", src: "../image/bottom/bottom5.jpg"};


var productList = [product01, product02, product03, product04, product05,
                   product06, product07, product08, product09, product10 ];

for (var i = 0; i < productList.length; i++) {
  document.cookie = "product"+(i+1)+"="+JSON.stringify(productList[i]);
}
