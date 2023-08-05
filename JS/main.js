"use strict";

//  ========== Upbtn ========== 
let mybutton = document.getElementById("myBtn");


//  ========== FeedBack (Wrapper) ========== 
let wrapper = document.querySelector(".wrapper");
let makePledge = document.querySelector(".makePledge");
let returnback = document.querySelector(".return");
let btnPopup = document.getElementById("btnFeedback-popup");
let iconClose = document.getElementById("icon-close");


//  ========== Intro-Text ========== 
let centertext = document.getElementById("centerText");
let quote = document.getElementById("quote");
let person = document.getElementById("person");


// ========== Intro-Text (centertext and quote fade) ========== 
window.addEventListener("scroll",changeOpacity);
function changeOpacity(){
    let value = window.scrollY;
    centertext.style.opacity = 1 - value/250;
    quote.style.opacity = value/600;
    person.style.opacity = value/600;
} 

//  ========== Upbtn (Hide the botton) ==========
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
//  ========== Upbtn (scroll to top (onclick)) ========== 
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//  ========== FeedBack (Wrapper) ==========
returnback.addEventListener("click", wrapperAdd);
makePledge.addEventListener("click", wrapperRemove);
btnPopup.addEventListener("click", wrapperAddPopup);
iconClose.addEventListener("click", wrapperRemovePopup);

function wrapperAdd(){
  wrapper.classList.add("active");
}
function wrapperRemove(){
  wrapper.classList.remove("active");
}
function wrapperAddPopup(){
  wrapper.classList.add("active-popup");
}
function wrapperRemovePopup(){
  wrapper.classList.remove("active-popup");
}
//  ========== FeedBack (Wrapper) ==========