/*begin p2m rezvan-ahmadbeigi*/
function p3m_Js1() {
  var x = document.getElementById("p3m-DIV1");
  let y = document.getElementById("p3m-h3-1");
  if (x.style.display === "none") {
    x.style.display = "block";
    x.style.color = "#6e7780";
    y.style.color = "#004c6a";
  } else {
    x.style.display = "none";
  }
}

    function p3m_Js2() {
        var x = document.getElementById("p3m-DIV2");
        let y=document.getElementById("p3m-h3-2");
        if (x.style.display === "none") {
          x.style.display = "block";
          x.style.color="#6e7780";
          y.style.color="#004c6a";
        } else {
          x.style.display = "none";
        }
      }

      function p3m_Js3() {
        var x = document.getElementById("p3m-DIV3");
        let y=document.getElementById("p3m-h3-3");
        if (x.style.display === "none") {
          x.style.display = "block";
          x.style.color="#6e7780";
          y.style.color="#004c6a";
        } else {
          x.style.display = "none";
        }
      }

function p3m_Js4() {
  var x = document.getElementById("p3m-DIV4");
  let y = document.getElementById("p3m-h3-4");
  if (x.style.display === "none") {
    x.style.display = "block";
    x.style.color = "#6e7780";
    y.style.color = "#004c6a";
  } else {
    x.style.display = "none";
  }
}

/*end p2m rezvan-ahmadbeigi*/

/*start p6m rezvan-ahmadbeigi*/
/***************************************************** */

function saturday(){
  let x=document.getElementById("p6m-part1");
  let y=document.getElementById("p6m-part2");
  let z=document.getElementById("p6m-part3");
  let h=document.getElementById("p6m-part4");
  let f=document.getElementById("p6m-part5");
  x.style.display="block";
  y.style.display="none";
  z.style.display="none";
  h.style.display="none";
  f.style.display="none";
}

function sunday(){
  let x=document.getElementById("p6m-part1");
  let y=document.getElementById("p6m-part2");
  let z=document.getElementById("p6m-part3");
  let h=document.getElementById("p6m-part4");
  let f=document.getElementById("p6m-part5");
  x.style.display="none";
  y.style.display="block";
  z.style.display="none";
  h.style.display="none";
  f.style.display="none";
 
}

function monday(){
  let x=document.getElementById("p6m-part1");
  let y=document.getElementById("p6m-part2");
  let z=document.getElementById("p6m-part3");
  let h=document.getElementById("p6m-part4");
  let f=document.getElementById("p6m-part5");
  x.style.display="none";
  y.style.display="none";
  z.style.display="block";
  h.style.display="none";
  f.style.display="none";
}

function tuesday(){
  let x=document.getElementById("p6m-part1");
  let y=document.getElementById("p6m-part2");
  let z=document.getElementById("p6m-part3");
  let h=document.getElementById("p6m-part4");
  let f=document.getElementById("p6m-part5");
  x.style.display="none";
  y.style.display="none";
  z.style.display="none";
  h.style.display="block";
  f.style.display="none";
}
function wednesday(){
  let x=document.getElementById("p6m-part1");
  let y=document.getElementById("p6m-part2");
  let z=document.getElementById("p6m-part3");
  let h=document.getElementById("p6m-part4");
  let f=document.getElementById("p6m-part5");
  x.style.display="none";
  y.style.display="none";
  z.style.display="none";
  h.style.display="none";
  f.style.display="block";
}

const header = document.getElementById("p6m-days");
const btns = header.getElementsByClassName("p6m-Days");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
  const current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active","");
  this.className +=" active";
  });
}
/*end p6m rezvan-ahmadbeigi*/
// ****************************************************************************************************************** //
/*Begin Header_page1 Moghaddamfa*/
// Hamburger_menuMobile
const btnHamburger = document.querySelector(".header_btnhamburger");
btnHamburger.addEventListener("click",collapse);
const menulist = document.querySelector(".header__menulist");
function collapse(){
  if(btnHamburger.classList.contains('header_btnhamburger-showmenu')){
    btnHamburger.classList.remove('header_btnhamburger-showmenu');
    document.querySelector(".header__menuMobile_list-active").classList.add("header__menuMobile_list");
    document.querySelector(".header__menuMobile_list").classList.remove("header__menuMobile_list-active");
    document.querySelector('.header__menuMobile__logo').classList.add('header_hideElement');
    document.querySelectorAll('.header_svghidelist').forEach(elem => elem.style.display = "none");
    document.querySelector('#header__btnEasyTrader').style.display = "flex";
    document.querySelector('.header__menuMobile_content-active').classList.add("header__menuMobile_content");
    document.querySelector('.header__menuMobile_content').classList.remove("header__menuMobile_content-active");
    // document.querySelector('.header__menuMobile_list').childNodes.forEach(elem => {if(elem !== '#text "\n'){elem.classList.remove("header__li-active")}});
    document.querySelector('.header__menuMobile__search').classList.add('header_hideElement');
    document.querySelector('.header__menuMobile__footer').classList.add('header_hideElement');
    document.querySelector('#header__call').classList.remove('header_hideElement');
    document.querySelector('#header__search').classList.remove('header_hideElement');
    document.body.style.overflowY = "auto";
  }else{
    btnHamburger.classList.add('header_btnhamburger-showmenu');
    document.querySelector(".header__menuMobile_list").classList.add("header__menuMobile_list-active");
    document.querySelector(".header__menuMobile_list-active").classList.remove("header__menuMobile_list");
    document.querySelector('.header__menuMobile__logo').classList.remove('header_hideElement');
    document.querySelectorAll('.header_svghidelist').forEach(elem => elem.style.display = "block");
    document.querySelector('#header__btnEasyTrader').style.display = "none";
    document.querySelector('.header__menuMobile_content').classList.add("header__menuMobile_content-active");
    document.querySelector('.header__menuMobile_content-active').classList.remove("header__menuMobile_content");
    document.querySelector('.header__menuMobile_list-active').childNodes.forEach(elem => {if(elem.nodeType=="1"){elem.classList.add("header__li-active")}});
    document.querySelector('.header__menuMobile__search').classList.remove('header_hideElement');
    document.querySelector('.header__menuMobile__footer').classList.remove('header_hideElement');
    document.querySelector('#header__call').classList.add('header_hideElement');
    document.querySelector('#header__search').classList.add('header_hideElement');
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

// ****************************************************************************************************************** //
// begin p8m  moradi/
document.querySelector(".p8m__btn_bourse").addEventListener("click",showBorseView());
document.querySelector(".p8m__btn_pellekan").addEventListener("click",showPelekan());

function showBorseView(){
  document.querySelector(".p8m__btn_bourse").style.color="#00A796";
  document.querySelector(".p8m__btn_bourse").style.borderBottomColor="#00A796";
  document.querySelector('.p8m__btn_pellekan').style.color="black";
  document.querySelector('.p8m__btn_pellekan').style.borderBottomColor="#f2f3f6";
  document.querySelector('.p8m__image_bourse_pellekan').src= "../assets/Images/bourse-view.webp";
  document.querySelector('#p8m__bourse').style.display="block";
  document.querySelector('#p8m__pellekan').style.display="none";
}
function showPelekan(){
  document.querySelector('.p8m__btn_pellekan').style.color="#00A796";
  document.querySelector('.p8m__btn_pellekan').style.borderBottomColor="#00A796";
  document.querySelector(".p8m__btn_bourse").style.color="black";
  document.querySelector(".p8m__btn_bourse").style.borderBottomColor="#f2f3f6";
  document.querySelector('.p8m__image_bourse_pellekan').src= "../assets/Images/pellekan.webp";
  document.querySelector('#p8m__pellekan').style.display="block";
  document.querySelector('#p8m__bourse').style.display="none";
}
// end p8m  moradi/

// ****************************************************************************************************************** //

