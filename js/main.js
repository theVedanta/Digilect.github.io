
let nav = document.querySelector("nav")
let ham = document.querySelector(".hamCont")
let mHam = document.querySelector(".ham")
let side = document.querySelector(".side")

ham.addEventListener("click", () => {
    mHam.classList.toggle("hamActive")
    side.classList.toggle("sideActive")
    nav.classList.toggle("sideActiveN")
});

let navLs = document.querySelectorAll(".nLs")
for(let navL of navLs) {
    navL.addEventListener("click", e => {
        side.classList.remove("sideActive")
        mHam.classList.remove("hamActive")
    });
};

window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 20) {
        nav.classList.add("dark")
    } else {
        nav.classList.remove("dark")
    }
});

// AOS -----------------------------------------
AOS.init();
