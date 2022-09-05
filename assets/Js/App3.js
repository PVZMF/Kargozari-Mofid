// ***********************************************************************
// begin part3 main3  moradi
let myIdButton = ['p3m3__hami','p3m3__Karmozd','p3m3__sabad','p3m3__etebar','p3m3__pellekan'];

document.querySelector('.p3m3__active').classList.remove('.p3m3__active');

document.querySelector(`#${myIdButton[0]}`).addEventListener('click',par => active(0));
document.querySelector(`#${myIdButton[1]}`).addEventListener('click',par => active(1));
document.querySelector(`#${myIdButton[2]}`).addEventListener('click',par => active(2));
document.querySelector(`#${myIdButton[3]}`).addEventListener('click',par => active(3));
document.querySelector(`#${myIdButton[4]}`).addEventListener('click',par => active(4));



function active(par){
    // document.querySelector(`#${myIdButton[par]}`).classList.remove('p3m3__active');
    // document.querySelector(`.${myIdButton[par]}`).style.display='none';
    // document.querySelector(`#${myIdButton[par]}`).classList.add('p3m3__active');
    // document.querySelector(`.${myIdButton[par]}`).style.display='block';
}
// end part3 main3  moradi
// ***********************************************************************