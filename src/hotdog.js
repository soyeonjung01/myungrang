const hotdog = [
{
  name : '트리플X치즈 핫도그',
  text : '체다치즈와 모짜렐라치즈가 듬뿍 들어간 핫도그에 잘 숙성된 짭짤한 고다치즈를 입혀 바삭하게 튀겨낸 핫도그',
  tag : ['#체다치즈', '#모짜렐라치즈', '#고다치즈', '#치즈x3'],
  img : process.env.PUBLIC_URL+'/images/menu/hotdog/hotdog01.PNG',
  detailimg : process.env.PUBLIC_URL+'/images/menu_detail/hotdog/hotdog01.PNG'
},
{
  name : '모짜맵구마 핫도그',
  text : '달콤한 고구마와 100% 모짜렐라치즈와 매콤한 할라피뇨소시지 세가지 조합의 핫도그',
  tag : ['#맵구마', '#spicy', '#sweet-potato'],
  img : process.env.PUBLIC_URL+'/images/menu/hotdog/hotdog02.PNG',
  detailimg : process.env.PUBLIC_URL+'/images/menu_detail/hotdog/hotdog02.PNG'
},
{
  name : '감자통모짜 핫도그',
  text : '100% 모짜렐라치즈에 고소하고 바삭한 감자가 어우러져 고급스러움을 더한 핫도그',
  tag : ['#감자', '#통모짜', '#Potato', '#Mozzarella'],
  img : process.env.PUBLIC_URL+'/images/menu/hotdog/hotdog03.PNG',
  detailimg : process.env.PUBLIC_URL+'/images/menu_detail/hotdog/hotdog03.PNG'
},
{
  name : '감자 핫도그',
  text : '오동통한 점보소시지와 고소하고 담백한 감자가 만나 더욱 고급스러운 핫도그',
  tag : ['#감자', '#potato'],
  img : process.env.PUBLIC_URL+'/images/menu/hotdog/hotdog04.PNG',
  detailimg : process.env.PUBLIC_URL+'/images/menu_detail/hotdog/hotdog04.PNG'
},
{
  name : '고구마통모짜 핫도그',
  text : '모짜렐라치즈의 진한 풍미와 달콤한 고구마가 가득한 환상적인 맛의 핫도그',
  tag : ['#고구마', '#통모짜', '#sweet-potato'],
  img : process.env.PUBLIC_URL+'/images/menu/hotdog/hotdog05.PNG',
  detailimg : process.env.PUBLIC_URL+'/images/menu_detail/hotdog/hotdog05.PNG'
},
{
  name : '맵반모짜 핫도그',
  text : '탱글탱글 할라피뇨 소시지로 매콥하게 즐기는 치즈 핫도그',
  tag : ['#매운소시지', '#치즈', '#매콤', '#고소'],
  img : process.env.PUBLIC_URL+'/images/menu/hotdog/hotdog06.PNG',
  detailimg : process.env.PUBLIC_URL+'/images/menu_detail/hotdog/hotdog06.PNG'
},
{
  name : '라면맵땅 핫도그',
  text : '매운 할라피뇨소시지 반 모짜렐라치즈 반! 불닭소스까지 더해 매콤한 추억의 라면땅 핫도그',
  tag : ['#라면땅', '#할라피뇨', '#불닭', '#매콤'],
  img : process.env.PUBLIC_URL+'/images/menu/hotdog/hotdog07.PNG',
  detailimg : process.env.PUBLIC_URL+'/images/menu_detail/hotdog/hotdog07.PNG'
},
{
  name : '모짜체다 핫도그',
  text : '고소한 모짜렐라와 담백한 체다치즈를 한번에 맛볼 수 있는 핫도그',
  tag : ['#모짜렐라', '#체다치즈', '#Mozzarella', '#cheddar-cheese'],
  img : process.env.PUBLIC_URL+'/images/menu/hotdog/hotdog08.PNG',
  detailimg : process.env.PUBLIC_URL+'/images/menu_detail/hotdog/hotdog08.PNG'
},
{
  name : '통모짜 핫도그',
  text : '처음부터 끝까지 진한 모짜렐라치즈의 풍미를 느낄 수 있는 핫도그',
  tag : ['#통모짜', '#whole-mozza'],
  img : process.env.PUBLIC_URL+'/images/menu/hotdog/hotdog09.PNG',
  detailimg : process.env.PUBLIC_URL+'/images/menu_detail/hotdog/hotdog09.PNG'
},
{
  name : '반반모짜 핫도그',
  text : '99% 자연산 모짜렐라 치즈가 듬뿍! 소시지와 치즈 맛을 동시에 즐길 수 있는 핫도그',
  tag : ['#모짜렐라', '#치즈', '#sausage'],
  img : process.env.PUBLIC_URL+'/images/menu/hotdog/hotdog10.PNG',
  detailimg : process.env.PUBLIC_URL+'/images/menu_detail/hotdog/hotdog10.PNG'
},
{
  name : '체다치즈 핫도그',
  text : '담백하고 짭짤한 체다치즈가 들어있는 핫도그',
  tag : ['#체다치즈', '#cheddar-cheese'],
  img : process.env.PUBLIC_URL+'/images/menu/hotdog/hotdog11.PNG',
  detailimg : process.env.PUBLIC_URL+'/images/menu_detail/hotdog/hotdog11.PNG'
},
{
  name : '점보 핫도그',
  text : '통통하고 더욱 맛있는 고급 소시지와 쫄깃한 반죽을 느낄 수 있는 핫도그',
  tag : ['#점보', '#fatty-sausage'],
  img : process.env.PUBLIC_URL+'/images/menu/hotdog/hotdog12.PNG',
  detailimg : process.env.PUBLIC_URL+'/images/menu_detail/hotdog/hotdog12.PNG'
},
{
  name : '할라피뇨 핫도그',
  text : '오동통하고 매콤한 할라피뇨 소시지로 식감을 살리고 느끼함은 줄인 매운 핫도그',
  tag : ['#할라피뇨', '#매운소시지', '#spicy'],
  img : process.env.PUBLIC_URL+'/images/menu/hotdog/hotdog13.PNG',
  detailimg : process.env.PUBLIC_URL+'/images/menu_detail/hotdog/hotdog13.PNG'
},
{
  name : '통가래떡 핫도그',
  text : '쌀떡이 통으로 들어가 있어 쫄깃한 맛이 일품인 핫도그',
  tag : ['#통가래떡', '#rice-cake'],
  img : process.env.PUBLIC_URL+'/images/menu/hotdog/hotdog14.PNG',
  detailimg : process.env.PUBLIC_URL+'/images/menu_detail/hotdog/hotdog14.PNG'
},
{
  name : '명랑 핫도그',
  text : '쌀가루를 넣어 쫄깃함을 더한 명랑 오리지널 핫도그',
  tag : ['#오리지날', '#original', '#corndog'],
  img : process.env.PUBLIC_URL+'/images/menu/hotdog/hotdog15.PNG',
  detailimg : process.env.PUBLIC_URL+'/images/menu_detail/hotdog/hotdog15.PNG'
}
]

export default hotdog