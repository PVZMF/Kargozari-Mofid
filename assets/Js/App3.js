
/*start p6m3 rezvan-ahmadbeigi*/

function saturday2(){
let x=document.getElementById("p6m3-part1");
let y=document.getElementById("p6m3-part2");
let z=document.getElementById("p6m3-part3");
let h=document.getElementById("p6m3-part4");
let H=document.getElementById("p6m3-part5");
x.style.display="block";
y.style.display="none";
z.style.display="none";
h.style.display="none";
}

function sunday2(){
let x=document.getElementById("p6m3-part1");
let y=document.getElementById("p6m3-part2");
let z=document.getElementById("p6m3-part3");
let h=document.getElementById("p6m3-part4");
let H=document.getElementById("p6m3-part5");
x.style.display="none";
y.style.display="block";
z.style.display="none";
h.style.display="none";

}

function monday2(){
let x=document.getElementById("p6m3-part1");
let y=document.getElementById("p6m3-part2");
let z=document.getElementById("p6m3-part3");
let h=document.getElementById("p6m3-part4");
let H=document.getElementById("p6m3-part5");
x.style.display="none";
y.style.display="none";
z.style.display="block";
h.style.display="none";
}

function tuesday2(){
let x=document.getElementById("p6m3-part1");
let y=document.getElementById("p6m3-part2");
let z=document.getElementById("p6m3-part3");
let h=document.getElementById("p6m3-part4");
let H=document.getElementById("p6m3-part5");
x.style.display="none";
y.style.display="none";
z.style.display="none";
h.style.display="block";
}
function wednesday2(){
let x=document.getElementById("p6m3-part1");
let y=document.getElementById("p6m3-part2");
let z=document.getElementById("p6m3-part3");
let h=document.getElementById("p6m3-part4");
let H=document.getElementById("p6m3-part5");
x.style.display="none";
y.style.display="none";
z.style.display="none";
h.style.display="none";
H.style.display="block";
}
const header = document.getElementById("p6m3-days");
const btns = header.getElementsByClassName("p6m3-Days");
for (let i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function(){
const current = document.getElementsByClassName("active");
current[0].className = current[0].className.replace(" active","");
this.className +=" active";
});
}
/*end p6m3 rezvan-ahmadbeigi*/

/*start p3m3 rezvan-ahmadbeigi*/
  function active(item){
    let list =[".p3m3__hami",".p3m3__Karmozd",".p3m3__sabad",".p3m3__etebar",".p3m3__pellekan"];
    document.querySelectorAll(list[item]).forEach(elem => elem.style.display = "block");
    list.splice(item,1);
    list.forEach(elem =>  document.querySelectorAll(elem).forEach(elem => elem.style.display = "none"));
  }
/*end p3m3 rezvan-ahmadbeigi*/


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
