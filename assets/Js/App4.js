// ****************************************************************************************************************** //
/*Begin Header_page1 Moghaddamfa*/
// Hamburger_menuMobile
const btnHamburger = document.querySelector(".header_btnhamburger");
btnHamburger.addEventListener("click",collapse);
const menulist = document.querySelector(".header__menulist");
function collapse(){
if(btnHamburger.classList.contains('header_btnhamburger-showmenu')){
  document.querySelector('.header__btnEasyTrader').style.display = "flex";
  btnHamburger.classList.remove('header_btnhamburger-showmenu');
  menulist.classList.remove("header__menuMobile");
  document.querySelectorAll('.header__navitem').forEach(elem => elem.classList.remove('header_hideElement'));
  document.querySelector('.header__menuMobile_content').style.display = 'none';
  document.body.style.overflowY = "auto";
}else{
  btnHamburger.classList.add('header_btnhamburger-showmenu');
  menulist.classList.add("header__menuMobile");
  document.querySelectorAll('.header__navitem').forEach(elem => elem.classList.add('header_hideElement'));
  document.querySelector('.header__btnEasyTrader').style.display = "none";
  document.querySelector('.header__menuMobile_content').style.display = 'flex';
  document.body.style.overflowY = "hidden";
}
}

//Mobilehidelist

document.querySelector(".header_havehidelist1").addEventListener("click",e => showlist(0));
document.querySelector(".header_havehidelist2").addEventListener("click",e => showlist(1));
document.querySelector(".header_havehidelist3").addEventListener("click",e => showlist(2));

function showlist(item){
const showitem = document.querySelectorAll(".header_Mobilehidelist")[item];
const svg = document.querySelectorAll(".header_svghidelist")[item];
if(showitem.classList.contains('header_hideElement')){
  showitem.classList.remove('header_hideElement');
  svg.classList.add('header__svgHideListRotate');
}else{
  showitem.classList.add('header_hideElement');
  svg.classList.remove('header__svgHideListRotate');
}
}

/*End Header_page1 Moghaddamfa*/
// ****************************************************************************************************************** //
