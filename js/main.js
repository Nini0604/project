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

var product01 = { name: "에디터데님_jk", price: 10000, quantity: 0, total: 0, desc:"깔끔한 일자핏의 캐주얼한 청자켓:)", src: "../image/outer/outer1.jpg", detailImg:"../image/outer/outer1_01.jpg"};
var product02 = { name: "너라는 이유_bby", price: 10000, quantity: 0, total: 0, desc:"컬러감, 핏, 소재, 가격 전부 완벽해요!!", src: "../image/outer/outer2.jpg", detailImg:"../image/outer/outer2_01.jpg"};
var product03 = { name: "크림램블_cd", price: 10000, quantity: 0, total: 0, desc:"도트패턴이 매력적인 배색 가디건!!", src: "../image/outer/outer3.jpg", detailImg:"../image/outer/outer3_01.jpg"};
var product04 = { name: "올때메로나_jk", price: 10000, quantity: 0, total: 0, desc:"어깨선이 살짝 쳐진 나그랑 스타일에 박시한핏에 롱~한 기장감으로 체형커버 효과만점!", src: "../image/outer/outer4.jpg", detailImg:"../image/outer/outer4_01.jpg"};
var product05 = { name: "로맨틱베이지_cd", price: 10000, quantity: 0, total: 0, desc:"샤랄라~ 여자라면 누구나 한번쯤 꿈꾸는!입는 순간 패션피플이 되게 해주는 아이!!", src: "../image/outer/outer5.jpg", detailImg:"../image/outer/outer5_01.jpg"};
var product06 = { name: "데이지드림_t", price: 10000, quantity: 0, total: 0, desc:"기본중에 기본! 레이어드하기 좋아요!", src: "../image/top/top1.jpg", detailImg:"../image/top/top1_01.jpg"};
var product07 = { name: "달콤한마카롱_t", price: 10000, quantity: 0, total: 0, desc:"마카롱 같은 상큼상큼한 컬러!", src: "../image/top/top2.jpg", detailImg:"../image/top/top2_01.jpg"};
var product08 = { name: "망토쓴늑대_t", price: 10000, quantity: 0, total: 0, desc:"봄과 어울리는 화사한 컬러감과 부드럽고 가벼운 코튼으로 어디서나 입을 수 있는 캐쥬얼한 무드가 느껴지는 매력적인 후드티에요!", src: "../image/top/top3.jpg", detailImg:"../image/top/top3_01.jpg"};
var product09 = { name: "나팔줄무늬_t", price: 10000, quantity: 0, total: 0, desc:"베이직과 트랜디함 모두 잡은 티셧! 살랑살랑~ 나팔 소매로 가녀려보이는 실루엣을 연출해줘요", src: "../image/top/top4.jpg", detailImg:"../image/top/top4_01.jpg"};
var product10 = { name: "네가와준봄날_t", price: 10000, quantity: 0, total: 0, desc:"여성스러우면서 귀여운 느낌의 티셧! 쭈리면 소재로 부담없고 레터링과 수술디테일로 귀욤귀욤", src: "../image/top/top5.jpg", detailImg:"../image/top/top5_01.jpg"};
var product11 = { name: "일월십삼일_pt", price: 10000, quantity: 0, total: 0, desc: "허리선을 잡아주는 라인에 하이웨이스트구요~ 은은한 워싱을 줘서 포인트를 준 톡톡한 소재감과 색감이 매력적인 롤업 데님팬츠♥", src: "../image/bottom/bottom1.jpg", detailImg:"../image/bottom/bottom1_01.jpg"};
var product12 = { name: "바보같은새벽_sk", price: 10000, quantity: 0, total: 0, desc:"짱짱한 신축성으로 착용감 굿! 살짝 A라인으로 군살 커버도 OK!", src: "../image/bottom/bottom2.jpg", detailImg:"../image/bottom/bottom2_01.jpg"};
var product13 = { name: "난눈물이또_sk", price: 10000, quantity: 0, total: 0, desc:"플라워 패턴이 돋보이는 고급스러운 무드의 스커트♥", src: "../image/bottom/bottom3.jpg", detailImg:"../image/bottom/bottom3_01.jpg"};
var product14 = { name: "시선강탈_pt", price: 10000, quantity: 0, total: 0, desc:"딥한 블루 컬러로 부담 없이 슬림하게 데미지 디테일로 빈티지 매력 업~!", src: "../image/bottom/bottom4.jpg", detailImg:"../image/bottom/bottom4_01.jpg"};
var product15 = { name: "완벽한여친_sk", price: 10000, quantity: 0, total: 0, desc:"러블리한 레이스 스커트♥", src: "../image/bottom/bottom5.jpg", detailImg:"../image/bottom/bottom5_01.jpg"};
var product16 = { name: "널돌아선채로_ops", price: 10000, quantity: 0, total: 0, desc:"네크라인,소매 플리츠로 페미닌하고 핏부터 남다른 제작상품! 언니들게 강추♥", src: "../image/dress/dress1.jpg", detailImg:"../image/dress/dress1_01.jpg"};
var product17 = { name: "릴리콜_ops", price: 10000, quantity: 0, total: 0, desc:"페미닌한 플라워 패턴이 예뻐요~", src: "../image/dress/dress2.jpg", detailImg:"../image/dress/dress2_01.jpg"};
var product18 = { name: "스냅청_ops", price: 10000, quantity: 0, total: 0, desc:"마성의 매력을 가진 데님원피스:)", src: "../image/dress/dress3.jpg", detailImg:"../image/dress/dress3_01.jpg"};
var product19 = { name: "보호본능유발_ops", price: 10000, quantity: 0, total: 0, desc:"이름처럼, 입는 순간 청순가련한 매력으로 보호본능 제대로 자극하면서~! 반전뒷태로 매력지수 +100", src: "../image/dress/dress4.jpg", detailImg:"../image/dress/dress4_01.jpg"};
var product20 = { name: "쌓인베게위로_ops", price: 10000, quantity: 0, total: 0, desc:"트위드 소재로 고급스러움 듬~뿍! 미니한 기장감의 여성스러운 원피스♥", src: "../image/dress/dress5.jpg", detailImg:"../image/dress/dress5_01.jpg"};

var productList = [product01, product02, product03, product04, product05,
                   product06, product07, product08, product09, product10,
                   product11, product12, product13, product14, product15,
                   product16, product17, product18, product19, product20];

for (var i = 0; i < productList.length; i++) {
  if (i < 9) {
    document.cookie = "product"+("0"+(i+1))+"="+JSON.stringify(productList[i]);
  } else{
    document.cookie = "product"+(i+1)+"="+JSON.stringify(productList[i]);
  }
}
