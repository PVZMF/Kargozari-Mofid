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
/*Begin p4m4 Moghaddamfar*/

document.querySelectorAll(".p4m4__opt__item__btn").forEach((element,i) => element.addEventListener("click", ()=> aboutus(i)));

function aboutus(item){
  document.querySelectorAll(".p4m4__opt__item__btn").forEach((element,i)=> i==item?element.classList.add("p4m4__opt__item__btn-active"):element.classList.remove("p4m4__opt__item__btn-active"));
  switch(item){
  case 0:
    document.querySelector(".p4m4__opt__kargozariMofid").classList.remove("p4m4_hideelement");
    if (!document.querySelector(".p4m4__opt__EntekhabMofid").classList.contains("p4m4_hideelement")) document.querySelector(".p4m4__opt__EntekhabMofid").classList.add("p4m4_hideelement");
    if (!document.querySelector(".p4m4__opt__pardazeah").classList.contains("p4m4_hideelement")) document.querySelector(".p4m4__opt__pardazeah").classList.add("p4m4_hideelement");
  
    break;
  case 1:
    document.querySelector(".p4m4__opt__kargozariMofid").classList.add("p4m4_hideelement");
    document.querySelector(".p4m4__opt__EntekhabMofid").classList.remove("p4m4_hideelement");
    if (!document.querySelector(".p4m4__opt__pardazeah").classList.contains("p4m4_hideelement")) document.querySelector(".p4m4__opt__pardazeah").classList.add("p4m4_hideelement");
    break;
  case 2:
    document.querySelector(".p4m4__opt__kargozariMofid").classList.add("p4m4_hideelement");
    if (!document.querySelector(".p4m4__opt__EntekhabMofid").classList.contains("p4m4_hideelement")) document.querySelector(".p4m4__opt__EntekhabMofid").classList.add("p4m4_hideelement");
    document.querySelector(".p4m4__opt__pardazeah").classList.remove("p4m4_hideelement");
    break;
  }
}

let allperson = document.querySelector(".p4m4__kargozariMofid__listmanagers");
function addperson(srcimage,name,job){
  let person = document.querySelector(".p4m4__kargozariMofid__oneperson");
  let new_person = person.cloneNode(true);
  allperson.appendChild(new_person);
  document.querySelectorAll(".p4m4__kargozariMofid__image")[0].src = srcimage;
  document.querySelectorAll(".p4m4__kargozarimofid__name")[0].innerHTML = name;
  document.querySelectorAll(".p4m4__kargozariMofid__job")[0].innerHTML = job;
}
let srcimage = ["..//assets/Images/zamanifar.jpg","..//assets/Images/seifollahi.jpg","..//assets/Images/rsadeghi.jpg","..//assets/Images/r.vafaie.jpg"]
let name = ["زمانی فر","صیف اللهی","صادقی","وفایی"];
let job = ["مدیر ارشد دیجیتال","مدیر حساب مشتریان","مدیر بازاریابی","مدیر مالی"];
for(let item=0;item<srcimage.length;item++){
  addperson(srcimage[item], name[item],job[item]);
}
/*End p4m4 Moghaddamfar*/
// ****************************************************************************************************************** //
