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

var header = document.getElementById("test");
var btns = header.getElementsByClassName("p6m-Days");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace("active","");
  this.className +="active";
  });
}

