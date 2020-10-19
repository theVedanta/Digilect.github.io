
let btn = document.querySelector(".btn");

let formStuffs = document.querySelectorAll("form h1, form input, form button");
let hero = document.querySelector(".hero");
let over = document.querySelector(".over");

btn.addEventListener("click", e => {
    e.preventDefault();
    for(let formStuff of formStuffs) {
        formStuff.classList.add("goAway");
    };
    hero.style.transform = "scale(0.2)";
    hero.style.transition = "all 0.3s 0";
    hero.style.opacity = "0";

    over.style.opacity = "1";
    over.style.pointerEvents = "all";

    document.querySelector(".over img").classList.add("tick");

    document.querySelector(".over h1").classList.add("kuchBhi");
    document.querySelector(".over a").classList.add("kuchBhi");

});

// AOS -----------------------------------------
AOS.init();
