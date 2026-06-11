CREATE A NEW JS FOLDER THEN USE THE FOLLOWING CODE :


// SEARCH

const searchBox =
document.getElementById("searchBox");

if(searchBox){

searchBox.addEventListener(
"keyup",
() => {

const value =
searchBox.value.toLowerCase();

document
.querySelectorAll(".blog-card")
.forEach(card=>{

const title =
card
.querySelector("h2")
.innerText
.toLowerCase();

card.style.display =
title.includes(value)
? "block"
: "none";

});

});
}

// CATEGORY FILTER

const filters =
document.querySelectorAll(".filter-btn");

filters.forEach(btn=>{

btn.addEventListener("click",()=>{

document
.querySelector(".active")
.classList.remove("active");

btn.classList.add("active");

const filter =
btn.dataset.filter;

document
.querySelectorAll(".blog-card")
.forEach(card=>{

if(
filter==="all" ||
card.classList.contains(filter)
){
card.style.display="block";
}
else{
card.style.display="none";
}

});

});

});

// MOBILE MENU

const menuBtn =
document.getElementById("menuBtn");

const navLinks =
document.getElementById("navLinks");

menuBtn.addEventListener(
"click",
()=>{
navLinks.classList.toggle("show-menu");
}
);

// DARK / LIGHT MODE

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener(
"click",
()=>{

document.body.classList.toggle("light");

const icon =
themeToggle.querySelector("i");

if(
document.body.classList.contains("light")
){
icon.className =
"fa-solid fa-sun";
}
else{
icon.className =
"fa-solid fa-moon";
}

}
);

// BACK TO TOP

const topBtn =
document.getElementById("topBtn");

window.addEventListener(
"scroll",
()=>{

if(window.scrollY>400){
topBtn.style.display="flex";
}
else{
topBtn.style.display="none";
}

}
);

topBtn.addEventListener(
"click",
()=>{
window.scrollTo({
top:0,
behavior:"smooth"
});
}
);

// GSAP HERO ANIMATION

gsap.from(".hero h1",{

y:100,
opacity:0,
duration:1.5

});

gsap.from(".hero p",{

y:50,
opacity:0,
duration:1.5,
delay:.4

});

gsap.from(".btn",{

scale:0,
opacity:0,
duration:1,
delay:.8

});

// SCROLL REVEAL

ScrollReveal().reveal(
'.blog-card',
{
distance:'80px',
duration:1200,
interval:200,
origin:'bottom'
}
);

ScrollReveal().reveal(
'.filters',
{
distance:'50px',
duration:1000
}
);
