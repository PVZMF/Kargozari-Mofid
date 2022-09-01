/*begin p2m rezvan-ahmadbeigi*/
    function p3m_Js1() {
      var x = document.getElementById("p3m-DIV1");
      let y=document.getElementById("p3m-h3-1");
      if (x.style.display === "none") {
        x.style.display = "block";
        x.style.color="#6e7780";
        y.style.color="#004c6a";
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
        let y=document.getElementById("p3m-h3-4");
        if (x.style.display === "none") {
          x.style.display = "block";
          x.style.color="#6e7780";
          y.style.color="#004c6a";
        } else {
          x.style.display = "none";
        }
      }

/*end p2m rezvan-ahmadbeigi*/

/*start p6m rezvan-ahmadbeigi*/
/***************************************************** */
function func1(){
  let x=document.getElementById("rez1");
  let y=document.getElementById("rez2");
  let z=document.getElementById("rez3");
  x.style.display="block";
  y.style.display="none";
  z.style.display="none";
}

function func2(){
  let x=document.getElementById("rez1");
  let y=document.getElementById("rez2");
  let z=document.getElementById("rez3");
  x.style.display="none";
  y.style.display="block";
  z.style.display="none";
 
}

function func3(){
  let x=document.getElementById("rez1");
  let y=document.getElementById("rez2");
  let z=document.getElementById("rez3");
  x.style.display="none";
  y.style.display="none";
  z.style.display="block"; 
}


/*Begin Header_page1 Moghaddamfa*/
// Hamburger_menuMobile


/***************************************************** */
function func1(){
  let x=document.getElementById("rez1");
  let y=document.getElementById("rez2");
  let z=document.getElementById("rez3");
  let h=document.getElementById("rez4");
  x.style.display="block";
  y.style.display="none";
  z.style.display="none";
  h.style.display="none";
}

function func2(){
  let x=document.getElementById("rez1");
  let y=document.getElementById("rez2");
  let z=document.getElementById("rez3");
  let h=document.getElementById("rez4");
  x.style.display="none";
  y.style.display="block";
  z.style.display="none";
  h.style.display="none";
 
}

function func3(){
  let x=document.getElementById("rez1");
  let y=document.getElementById("rez2");
  let z=document.getElementById("rez3");
  let h=document.getElementById("rez4");
  x.style.display="none";
  y.style.display="none";
  z.style.display="block";
  h.style.display="none";
}

function func4(){
  let x=document.getElementById("rez1");
  let y=document.getElementById("rez2");
  let z=document.getElementById("rez3");
  let h=document.getElementById("rez4");
  x.style.display="none";
  y.style.display="none";
  z.style.display="none";
  h.style.display="block";
}

const header = document.getElementById("test");
const btns = header.getElementsByClassName("p6m-Days");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
  const current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active","");
  this.className +=" active";
  });
}

// ****************************************************************************************************************** //
/*Begin Header_page1 Moghaddamfa*/
// Hamburger_menuMobile
const btnHamburger = document.querySelector(".header_btnhamburger");
btnHamburger.addEventListener("click",collapse);
const menulist = document.querySelector(".header__menulist");
function collapse(){
  if(btnHamburger.classList.contains('header_btnhamburger-showmenu')){
    btnHamburger.classList.remove('header_btnhamburger-showmenu');
    menulist.classList.remove("header__menuMobile");
    document.querySelectorAll('.header__navitem').forEach(elem => elem.classList.remove('header_hideElement'));
    document.querySelector('.header__menuMobile_content').style.display = 'none';
    document.body.style.overflow = "auto";
    console.log("remove");
    
  }else{
    btnHamburger.classList.add('header_btnhamburger-showmenu');
    menulist.classList.add("header__menuMobile");
    document.querySelectorAll('.header__navitem').forEach(elem => elem.classList.add('header_hideElement'));
    document.querySelector('.header__menuMobile_content').style.display = 'flex';
    document.body.style.overflow = "hidden";
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

