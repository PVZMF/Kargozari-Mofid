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
  var x = document.getElementById("p3main-DIV2");
  let y = document.getElementById("p3main-h3-2");
  if (x.style.display === "none") {
    x.style.display = "block";
    x.style.color = "#6e7780";
    y.style.color = "#004c6a";
  } else {
    x.style.display = "none";
  }
}

function p3m_Js3() {
  var x = document.getElementById("p3main-DIV3");
  let y = document.getElementById("p3main-h3-3");
  if (x.style.display === "none") {
    x.style.display = "block";
    x.style.color = "#6e7780";
    y.style.color = "#004c6a";
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