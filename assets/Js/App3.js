
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