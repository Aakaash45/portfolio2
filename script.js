/* =========================================
   TYPING ANIMATION
========================================= */

const words = [
    "ECE Student",
    "Python Learner",
    "Embedded Systems",
    "RPA Learner",
    "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!isDeleting){

        typing.textContent = currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            isDeleting = true;

            setTimeout(typeEffect,1500);

            return;
        }

    }

    else{

        typing.textContent = currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            isDeleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,isDeleting ? 60 : 120);

}

typeEffect();

/* =========================================
   BACK TO TOP BUTTON
========================================= */

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

}

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

/* =========================================
   NAVBAR SHADOW
========================================= */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.boxShadow="0 5px 20px rgba(0,171,240,.3)";

    }

    else{

        header.style.boxShadow="none";

    }

});

/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/* =========================================
   FADE-IN ON SCROLL
========================================= */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.2});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="all 1s ease";

observer.observe(section);

});

/* =========================================
   BUTTON RIPPLE EFFECT
========================================= */

const buttons=document.querySelectorAll("button");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});

/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log("Portfolio Loaded Successfully!");
