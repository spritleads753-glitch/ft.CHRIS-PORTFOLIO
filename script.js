window.addEventListener("load",()=>{

setTimeout(()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

loader.style.visibility="hidden";

},2500);

});/*
==========================================================
Chris Samuel Raj C Portfolio
Integrated Script.js
Version 2.0
==========================================================
*/

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       ELEMENTS
    =============================== */

    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-links a");

    const heroLeft = document.querySelector(".hero-left");
    const heroRight = document.querySelector(".hero-right");
    const heroImage = document.querySelector(".hero-image");

    const buttons = document.querySelectorAll(".primary-btn,.secondary-btn");

    const revealItems = document.querySelectorAll(
        ".hero-left,.hero-right,.tech-card"
    );

    /* ===============================
       HERO ENTRANCE
    =============================== */

    if(heroLeft && heroRight){

        heroLeft.style.opacity="0";
        heroRight.style.opacity="0";

        heroLeft.style.transform="translateX(-70px)";
        heroRight.style.transform="translateX(70px)";

        setTimeout(()=>{

            heroLeft.style.transition="1s ease";
            heroRight.style.transition="1s ease";

            heroLeft.style.opacity="1";
            heroRight.style.opacity="1";

            heroLeft.style.transform="translateX(0)";
            heroRight.style.transform="translateX(0)";

        },300);

    }

    /* ===============================
       FLOATING HERO IMAGE
    =============================== */

    if(heroImage){

        let angle=0;

        function floatingImage(){

            angle+=0.02;

            heroImage.style.transform=

            `translateY(${Math.sin(angle)*8}px)`;

            requestAnimationFrame(floatingImage);

        }

        floatingImage();

    }

    /* ===============================
       NAVBAR SCROLL
    =============================== */

    window.addEventListener("scroll",()=>{

        if(!navbar) return;

        if(window.scrollY>50){

            navbar.classList.add("scrolled");

        }

        else{

            navbar.classList.remove("scrolled");

        }

    });

    /* ===============================
       ACTIVE NAVIGATION
    =============================== */

    navLinks.forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.forEach(item=>{

                item.classList.remove("active");

            });

            link.classList.add("active");

        });

    });

    /* ===============================
       BUTTON RIPPLE
    =============================== */

    buttons.forEach(button=>{

        button.addEventListener("click",(e)=>{

            const ripple=document.createElement("span");

            ripple.className="ripple";

            const rect=button.getBoundingClientRect();

            ripple.style.left=(e.clientX-rect.left)+"px";

            ripple.style.top=(e.clientY-rect.top)+"px";

            button.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },600);

        });

    });

    /* ===============================
       SCROLL REVEAL
    =============================== */

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.2

    });

    revealItems.forEach(item=>{

        item.classList.add("hidden");

        observer.observe(item);

    });

    console.log("Portfolio Loaded Successfully");

});    /* ===============================
       HERO TITLE ANIMATION
    =============================== */

    const heroTitle = document.querySelector(".hero h1");
    const heroSubtitle = document.querySelector(".hero h2");
    const heroDescription = document.querySelector(".hero p");

    if(heroTitle){

        heroTitle.style.opacity="0";
        heroTitle.style.transform="translateY(50px)";

        setTimeout(()=>{

            heroTitle.style.transition="1s ease";

            heroTitle.style.opacity="1";
            heroTitle.style.transform="translateY(0)";

        },300);

    }

    if(heroSubtitle){

        heroSubtitle.style.opacity="0";
        heroSubtitle.style.transform="translateY(50px)";

        setTimeout(()=>{

            heroSubtitle.style.transition="1s ease";

            heroSubtitle.style.opacity="1";
            heroSubtitle.style.transform="translateY(0)";

        },600);

    }

    if(heroDescription){

        heroDescription.style.opacity="0";
        heroDescription.style.transform="translateY(50px)";

        setTimeout(()=>{

            heroDescription.style.transition="1s ease";

            heroDescription.style.opacity="1";
            heroDescription.style.transform="translateY(0)";

        },900);

    }


    /* ===============================
       BUTTON ENTRANCE
    =============================== */

    buttons.forEach((button,index)=>{

        button.style.opacity="0";

        button.style.transform="translateY(40px)";

        setTimeout(()=>{

            button.style.transition="0.8s ease";

            button.style.opacity="1";

            button.style.transform="translateY(0)";

        },1200+(index*200));

    });


    /* ===============================
       SOCIAL ICON ENTRANCE
    =============================== */

    const socials=document.querySelectorAll(".social-icons a");

    socials.forEach((icon,index)=>{

        icon.style.opacity="0";

        icon.style.transform="scale(.5)";

        setTimeout(()=>{

            icon.style.transition=".8s ease";

            icon.style.opacity="1";

            icon.style.transform="scale(1)";

        },1600+(index*120));

    });


    /* ===============================
       HERO GLOW PULSE
    =============================== */

    const heroGlow=document.querySelector(".hero-glow");

    if(heroGlow){

        let glow=0;

        function pulseGlow(){

            glow+=0.03;

            heroGlow.style.opacity=

            0.75+Math.sin(glow)*0.2;

            requestAnimationFrame(pulseGlow);

        }

        pulseGlow();

    }/* ===============================
   TECH CARDS HOVER
================================ */

const techCards = document.querySelectorAll(".tech-card");

techCards.forEach((card)=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.04)";

        card.style.boxShadow="0 0 30px rgba(138,43,226,.35)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

        card.style.boxShadow="";

    });

});


/* ===============================
   SOCIAL ICON HOVER
================================ */

const socialIcons=document.querySelectorAll(".social-icons a");

socialIcons.forEach((icon)=>{

    icon.addEventListener("mouseenter",()=>{

        icon.style.transform="translateY(-8px) rotate(8deg)";

    });

    icon.addEventListener("mouseleave",()=>{

        icon.style.transform="translateY(0) rotate(0deg)";

    });

});


/* ===============================
   BUTTON HOVER
================================ */

buttons.forEach((button)=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-6px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0)";

    });

});


/* ===============================
   NAVBAR SHADOW
================================ */

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.style.boxShadow="0 15px 40px rgba(0,0,0,.35)";

    }

    else{

        navbar.style.boxShadow="";

    }

});


/* ===============================
   IMAGE GLOW
================================ */

if(heroImage){

let glow=0;

function heroFloat(){

glow+=0.03;

heroImage.style.filter=

`drop-shadow(0 0 ${30+Math.sin(glow)*10}px rgba(138,43,226,.45))`;

requestAnimationFrame(heroFloat);

}

heroFloat();

}/* ===============================
   AMBIENT BACKGROUND GLOW
================================ */

const gradientOne = document.querySelector(".gradient-1");
const gradientTwo = document.querySelector(".gradient-2");

if (gradientOne && gradientTwo) {

    let time = 0;

    function animateBackground() {

        time += 0.01;

        gradientOne.style.transform =
            `translateY(${Math.sin(time) * 20}px)
             translateX(${Math.cos(time) * 15}px)
             scale(${1 + Math.sin(time) * 0.03})`;

        gradientTwo.style.transform =
            `translateY(${Math.cos(time) * 18}px)
             translateX(${Math.sin(time) * 12}px)
             scale(${1 + Math.cos(time) * 0.03})`;

        requestAnimationFrame(animateBackground);
    }

    animateBackground();
}


/* ===============================
   HERO GLOW BREATHING
================================ */

const glow = document.querySelector(".hero-glow");

if (glow) {

    let pulse = 0;

    function glowBreathing() {

        pulse += 0.025;

        glow.style.filter =
            `blur(${85 + Math.sin(pulse) * 12}px)`;

        requestAnimationFrame(glowBreathing);
    }

    glowBreathing();
}
document.querySelectorAll(".unlock-btn").forEach(button=>{

const text=button.querySelector(".unlock-text");

button.addEventListener("mouseenter",()=>{

text.innerHTML="✓ Access Granted";

setTimeout(()=>{

text.innerHTML="📄 Open PDF ↗";

},450);

});

button.addEventListener("mouseleave",()=>{

text.innerHTML="Unlock Credential";

});

});
const hamburger=document.getElementById("hamburger");

const nav=document.querySelector(".nav-links");

hamburger.onclick=()=>{

nav.classList.toggle("active");

}document.querySelectorAll(".nav-links a").forEach(link=>{

link.onclick=()=>{

nav.classList.remove("active");

}

});
