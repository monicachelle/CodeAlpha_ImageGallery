

document.addEventListener("DOMContentLoaded", () => {

    initializeWebsite();

});



function initializeWebsite() {

    navbarScrollEffect();

    smoothScrolling();

    mobileMenu();

    scrollReveal();

    backToTop();

    pageLoader();

    initHeroSlideshow();

}

function initHeroSlideshow() {

    const hero = document.querySelector(".hero");

    const slides = Array.from(document.querySelectorAll(".hero-slide"));

    const prevButton = document.querySelector(".hero-nav-prev");

    const nextButton = document.querySelector(".hero-nav-next");

    const dots = Array.from(document.querySelectorAll(".hero-dot"));

    if (!hero || !slides.length || !prevButton || !nextButton || !dots.length) return;

    const heroImages = [

        "images/hero/hero1.png",

        "images/hero/hero2.png",

        "images/hero/hero3.png",

        "images/hero/hero4.png",

        "images/hero/hero5.png"

    ];

    let currentIndex = 0;

    let autoPlayTimer;

    const updateSlides = (nextIndex) => {

        const safeIndex = (nextIndex + slides.length) % slides.length;

        slides.forEach((slide, index) => {

            slide.classList.remove("is-active", "is-prev");

            if (index === safeIndex) {

                slide.classList.add("is-active");

            } else if (index === currentIndex) {

                slide.classList.add("is-prev");

            }

        });

        currentIndex = safeIndex;

        dots.forEach((dot, index) => {

            dot.classList.toggle("is-active", index === currentIndex);

            dot.setAttribute("aria-current", index === currentIndex ? "true" : "false");

        });

        resetAutoPlay();

    };

    const resetAutoPlay = () => {

        clearInterval(autoPlayTimer);

        autoPlayTimer = setInterval(() => {

            updateSlides(currentIndex + 1);

        }, 5000);

    };

    slides.forEach((slide, index) => {

        const image = slide.querySelector("img");

        if (image) {

            image.src = heroImages[index] || image.src;

        }

    });

    prevButton.addEventListener("click", () => {

        updateSlides(currentIndex - 1);

    });

    nextButton.addEventListener("click", () => {

        updateSlides(currentIndex + 1);

    });

    dots.forEach(dot => {

        dot.addEventListener("click", () => {

            updateSlides(Number(dot.dataset.slide));

        });

    });

    hero.addEventListener("mouseenter", () => {

        clearInterval(autoPlayTimer);

    });

    hero.addEventListener("mouseleave", resetAutoPlay);

    updateSlides(0);

}



function navbarScrollEffect() {

    const header = document.querySelector(".header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}



function smoothScrolling() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", e => {

            e.preventDefault();

            const target = document.querySelector(link.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

}



function mobileMenu() {

    const menuBtn = document.getElementById("menuBtn");

    const navLinks = document.querySelector(".nav-links");

    if (!menuBtn || !navLinks) return;

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("active")) {

            icon.className = "ri-close-line";

        } else {

            icon.className = "ri-menu-line";

        }

    });

}



function scrollReveal() {

    const revealItems = document.querySelectorAll(".reveal");

    const reveal = () => {

        revealItems.forEach(item => {

            const windowHeight = window.innerHeight;

            const top = item.getBoundingClientRect().top;

            if (top < windowHeight - 100) {

                item.classList.add("active");

            }

        });

    };

    window.addEventListener("scroll", reveal);

    reveal();

}



function backToTop() {

    const topBtn = document.getElementById("backToTop");

    if (!topBtn) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}



function pageLoader() {

    const loader = document.getElementById("loader");

    if (!loader) return;

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("hidden");

        }, 600);

    });

}



window.addEventListener("scroll", () => {

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-links a");

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



console.log("%cMonicaVerse", `
color:#D72638;
font-size:28px;
font-weight:bold;
`);


