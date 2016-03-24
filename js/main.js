$(document).ready(function() {
  var speed = 2000;
  var colors=["#ffbadd","#b0d8fe","#dbb9fd"];

  function flash(index){
    if (index >= colors.length) {
      index = 0;
    }

    $("#hereLink").css("color",colors[index]);
    setTimeout(function() {
      flash(index + 1);
    }, speed);
  }
  flash(0);
});

var product01 = { name: "OUTER1", price: "10000원", src: "../image/outer/outer1.jpg"};
var product02 = { name: "OUTER2", price: "10000원", src: "../image/outer/outer2.jpg"};
var product03 = { name: "OUTER3", price: "10000원", src: "../image/outer/outer3.jpg"};
var product04 = { name: "OUTER4", price: "10000원", src: "../image/outer/outer4.jpg"};
var product05 = { name: "OUTER5", price: "10000원", src: "../image/outer/outer5.jpg"};
var product11 = { name: "TOP1", price: "10000원", src: "../image/top/top1.jpg"};
var product12 = { name: "TOP2", price: "10000원", src: "../image/top/top2.jpg"};
var product13 = { name: "TOP3", price: "10000원", src: "../image/top/top3.jpg"};
var product14 = { name: "TOP4", price: "10000원", src: "../image/top/top4.jpg"};
var product15 = { name: "TOP5", price: "10000원", src: "../image/top/top5.jpg"};
var product06 = { name: "BOTTOM1", price: "10000원", src: "../image/bottom/bottom1.jpg"};
var product07 = { name: "BOTTOM2", price: "10000원", src: "../image/bottom/bottom2.jpg"};
var product08 = { name: "BOTTOM3", price: "10000원", src: "../image/bottom/bottom3.jpg"};
var product09 = { name: "BOTTOM4", price: "10000원", src: "../image/bottom/bottom4.jpg"};
var product10 = { name: "BOTTOM5", price: "10000원", src: "../image/bottom/bottom5.jpg"};


var productList = [product01, product02, product03, product04, product05,
                   product06, product07, product08, product09, product10,
                   product11, product12, product13, product14, product15,
                   product16, product17, product18, product19, product20];

for (var i = 0; i < productList.length; i++) {
  document.cookie = "product"+(i+1)+"="+JSON.stringify(productList[i]);
}
