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
/*Begin p5_page2 Moghaddamfa*/
document.querySelectorAll(".p5m2__logolist").forEach(function (elem, i){
    elem.style.transition = `all 1000ms cubic-bezier(.68,-0.55,.27,1.55) ${i*1000}ms`;
});

setTimeout(
    ()=>document.querySelectorAll(".p5m2__logolist").forEach(elem => elem.style.backgroundColor = "var(--color-mofid-green)"),1)
    
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