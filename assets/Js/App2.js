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
/*start p8m2 rezvan-ahmadbeigi*/

function saturday1(){
let x=document.getElementById("p8m2-part1");
let y=document.getElementById("p8m2-part2");
let z=document.getElementById("p8m2-part3");
let h=document.getElementById("p8m2-part4");
let H=document.getElementById("p8m2-part5");
x.style.display="block";
y.style.display="none";
z.style.display="none";
h.style.display="none";
}

function sunday1(){
let x=document.getElementById("p8m2-part1");
let y=document.getElementById("p8m2-part2");
let z=document.getElementById("p8m2-part3");
let h=document.getElementById("p8m2-part4");
let H=document.getElementById("p8m2-part5");
x.style.display="none";
y.style.display="block";
z.style.display="none";
h.style.display="none";

}

function monday1(){
let x=document.getElementById("p8m2-part1");
let y=document.getElementById("p8m2-part2");
let z=document.getElementById("p8m2-part3");
let h=document.getElementById("p8m2-part4");
let H=document.getElementById("p8m2-part5");
x.style.display="none";
y.style.display="none";
z.style.display="block";
h.style.display="none";
}

function tuesday1(){
let x=document.getElementById("p8m2-part1");
let y=document.getElementById("p8m2-part2");
let z=document.getElementById("p8m2-part3");
let h=document.getElementById("p8m2-part4");
let H=document.getElementById("p8m2-part5");
x.style.display="none";
y.style.display="none";
z.style.display="none";
h.style.display="block";
}
function wednesday1(){
let x=document.getElementById("p8m2-part1");
let y=document.getElementById("p8m2-part2");
let z=document.getElementById("p8m2-part3");
let h=document.getElementById("p8m2-part4");
let H=document.getElementById("p8m2-part5");
x.style.display="none";
y.style.display="none";
z.style.display="none";
h.style.display="none";
H.style.display="block";
}
const header = document.getElementById("p8m2-days");
const btns = header.getElementsByClassName("p8m2-Days");
for (let i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function(){
const current = document.getElementsByClassName("active");
current[0].className = current[0].className.replace(" active","");
this.className +=" active";
});
}
/*end p8m2 rezvan-ahmadbeigi*/
// ****************************************************************************************************************** //

// ****************************************************************************************************************** //
/*Begin p5_page2 Moghaddamfar*/
document.querySelectorAll(".p5m2__logolist").forEach(function (elem, i){
    elem.style.transition = `all 1000ms cubic-bezier(.68,-0.55,.27,1.55) ${i*1000}ms`;
});

setTimeout(
    ()=>document.querySelectorAll(".p5m2__logolist").forEach(elem => elem.style.backgroundColor = "var(--color-mofid-green)"),1)
/*End p5_page2 Moghaddamfar*/
// ****************************************************************************************************************** //
  
// ****************************************************************************************************************** //
/*Begin p6_page2 Moghaddamfar*/
let allcart = document.querySelector(".p6m2__allCart");
function makecart(srclogo,color,type,total,month,year,years){
  let cart = document.querySelector(".p6m2__cart");
  let new_cart = cart.cloneNode(true);
  allcart.appendChild(new_cart);
  document.querySelectorAll(".p6m2__logo")[0].src = srclogo;
  document.querySelectorAll(".p6m2__shadow")[0].style.background = `linear-gradient(to bottom, var(${color}), rgba(0, 0, 0, 0))`;
  document.querySelectorAll(".p6m2_jvtypeInvect")[0].innerHTML = type;
  document.querySelectorAll(".p6m2__jvprice")[0].innerHTML = total;
  document.querySelectorAll(".p6m2__fontgreen")[0].innerHTML = month;
  document.querySelectorAll(".p6m2__fontgreen")[1].innerHTML = year;
  document.querySelectorAll(".p6m2__fontgreen")[2].innerHTML = years;
}
let src = ["..//assets/Images/hami.svg","..//assets/Images/nami.svg","..//assets/Images/pishro.svg","..//assets/Images/momtaz.svg","..//assets/Images/omid.svg"];
let color = ["--color-hami","--color-nami","--color-pishro","--color-momtaz","--color-omid"];
let type = "??????????";
let total = "124";
let month = "1988%";
let year = "??11.??%";
let years = "????11????.??%";
let cart = document.querySelector(".p6m2__cart");
let new_cart = cart.cloneNode(true);
for(let item=0;item<src.length;item++){
makecart(src[item], color[item], type, total, month, year, years);
}
/*End p5_page2 Moghaddamfar*/
// ****************************************************************************************************************** //

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// begin p2m1 ali foruz
$("#blue").click(function () {
  $("#red").show();
  $("#firoz").hide();
});
$("#green").click(function () {
  $("#red").hide();
  $("#firoz").show();
});
/////////////////////////////////////
// begin p4m1 ali foruz
$("#pish_cl").click(function () {
  $("#pish_ch").show();
  $("#mom_ch").hide();
});
$("#mom_cl").click(function () {
  $("#pish_ch").hide();
  $("#mom_ch").show();
});
let val = document.getElementById("swich");
let show_value1 = document.getElementById("num1");
let show_value2 = document.getElementById("num2");
let show_value3 = document.getElementById("num3");
function change(){
  show_value1.innerHTML = val.value;
  show_value2.innerHTML = val.value;
  show_value3.innerHTML = val.value;
  console.log(val.value)
}

//