/*=================================================
            SEA FOOD HUT
            script.js - Part 1
==================================================*/

"use strict";

/*=================================================
            DOM ELEMENTS
==================================================*/

const header = document.querySelector("header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const backTop = document.querySelector(".back-top");
const loader = document.querySelector(".loader");

const navLinks = document.querySelectorAll(
    "nav a, .mobile-menu a"
);

/*=================================================
            LOADING SCREEN
==================================================*/

window.addEventListener("load", () => {

    if(loader){

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.transition = "0.6s";

    }

});


/*=================================================
            STICKY HEADER
==================================================*/

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});


/*=================================================
            MOBILE MENU
==================================================*/

if(menuToggle){

    menuToggle.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

        menuToggle.classList.toggle("open");

    });

}


/*=================================================
        CLOSE MENU WHEN LINK CLICKED
==================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if(mobileMenu){

            mobileMenu.classList.remove("active");

        }

        if(menuToggle){

            menuToggle.classList.remove("open");

        }

    });

});


/*=================================================
        CLOSE MENU WHEN CLICK OUTSIDE
==================================================*/

document.addEventListener("click",(e)=>{

    if(
        mobileMenu &&
        menuToggle &&
        !mobileMenu.contains(e.target) &&
        !menuToggle.contains(e.target)
    ){

        mobileMenu.classList.remove("active");

        menuToggle.classList.remove("open");

    }

});


/*=================================================
            BACK TO TOP BUTTON
==================================================*/

if(backTop){

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        backTop.style.opacity="1";
        backTop.style.visibility="visible";

    }else{

        backTop.style.opacity="0";
        backTop.style.visibility="hidden";

    }

});

backTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

}


/*=================================================
            ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section");

function activeMenu(){

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(

            link.getAttribute("href") === "#" + current

        ){

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll",activeMenu);


/*=================================================
            SMOOTH SCROLL
==================================================*/

navLinks.forEach(link=>{

    link.addEventListener("click",(e)=>{

        const href = link.getAttribute("href");

        if(href.startsWith("#")){

            e.preventDefault();

            const target = document.querySelector(href);

            if(target){

                window.scrollTo({

                    top:target.offsetTop - 80,

                    behavior:"smooth"

                });

            }

        }

    });

});


/*=================================================
            HEADER SHADOW
==================================================*/

window.addEventListener("scroll",()=>{

    if(window.scrollY > 60){

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.08)";

    }else{

        header.style.boxShadow = "none";

    }

});


/*=================================================
            ESC KEY CLOSE MENU
==================================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key === "Escape"){

        if(mobileMenu){

            mobileMenu.classList.remove("active");

        }

    }

});


/*=================================================
            END PART 1
==================================================*/
/*=================================================
            script.js - PART 2
==================================================*/


/*=================================================
            DARK MODE
==================================================*/

const darkToggle = document.querySelector(".dark-toggle");

if (darkToggle) {

    darkToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");

        }

    });

}

/* Load Saved Theme */

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

}


/*=================================================
        SCROLL REVEAL ANIMATION
==================================================*/

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/*=================================================
            ANIMATED COUNTERS
==================================================*/

const counters = document.querySelectorAll(".counter-number");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const section = document.querySelector(".counter");

    if (!section) return;

    if (window.scrollY + window.innerHeight >= section.offsetTop + 80) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 120;

            const updateCounter = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounters);


/*=================================================
        FLOATING BUBBLE GENERATOR
==================================================*/

const bubbleContainer = document.querySelector(".bubble-container");

if (bubbleContainer) {

    function createBubble() {

        const bubble = document.createElement("span");

        bubble.classList.add("bubble");

        const size = Math.random() * 50 + 20;

        bubble.style.width = size + "px";
        bubble.style.height = size + "px";

        bubble.style.left = Math.random() * 100 + "%";

        bubble.style.animationDuration =

            (Math.random() * 10 + 10) + "s";

        bubbleContainer.appendChild(bubble);

        setTimeout(() => {

            bubble.remove();

        }, 20000);

    }

    setInterval(createBubble, 800);

}


/*=================================================
        FLOATING HERO IMAGE
==================================================*/

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    window.addEventListener("mousemove", (e) => {

        const x =

            (window.innerWidth / 2 - e.clientX) / 40;

        const y =

            (window.innerHeight / 2 - e.clientY) / 40;

        heroImage.style.transform =

            `translate(${x}px, ${y}px)`;

    });

}


/*=================================================
        PARALLAX BACKGROUND
==================================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const scroll = window.pageYOffset;

    if (hero) {

        hero.style.backgroundPositionY =

            scroll * 0.4 + "px";

    }

});


/*=================================================
        BUTTON RIPPLE EFFECT
==================================================*/

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = this.getBoundingClientRect();

        ripple.style.left =

            e.clientX - rect.left + "px";

        ripple.style.top =

            e.clientY - rect.top + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/*=================================================
        IMAGE LAZY FADE-IN
==================================================*/

const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("loaded");

            imageObserver.unobserve(entry.target);

        }

    });

});

images.forEach(img => {

    imageObserver.observe(img);

});


/*=================================================
        END PART 2
==================================================*/
/*=================================================
            script.js - PART 3
==================================================*/


/*=================================================
            COUNTDOWN TIMER
==================================================*/

const countdown = document.querySelector(".countdown");

if (countdown) {

    const targetDate = new Date();

    targetDate.setDate(targetDate.getDate() + 7);

    function updateCountdown() {

        const now = new Date().getTime();

        const distance = targetDate - now;

        if (distance <= 0) {

            countdown.innerHTML = "<h3>Offer Expired</h3>";

            clearInterval(timer);

            return;

        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60)) /
            1000
        );

        countdown.querySelector(".days").textContent =
            String(days).padStart(2, "0");

        countdown.querySelector(".hours").textContent =
            String(hours).padStart(2, "0");

        countdown.querySelector(".minutes").textContent =
            String(minutes).padStart(2, "0");

        countdown.querySelector(".seconds").textContent =
            String(seconds).padStart(2, "0");

    }

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

}


/*=================================================
            TESTIMONIAL SLIDER
==================================================*/

const slider = document.querySelector(".testimonial-container");
const slides = document.querySelectorAll(".testimonial-card");

const prevBtn = document.querySelector(".prev-slide");
const nextBtn = document.querySelector(".next-slide");

let currentSlide = 0;

function showSlide(index){

    if(!slider || slides.length === 0) return;

    if(index >= slides.length){

        currentSlide = 0;

    }else if(index < 0){

        currentSlide = slides.length - 1;

    }else{

        currentSlide = index;

    }

    slider.style.transform =
        `translateX(-${currentSlide * 100}%)`;

}


/*=================================================
            NEXT BUTTON
==================================================*/

if(nextBtn){

    nextBtn.addEventListener("click",()=>{

        showSlide(currentSlide + 1);

    });

}


/*=================================================
            PREVIOUS BUTTON
==================================================*/

if(prevBtn){

    prevBtn.addEventListener("click",()=>{

        showSlide(currentSlide - 1);

    });

}


/*=================================================
            AUTO SLIDE
==================================================*/

let autoSlide = setInterval(()=>{

    showSlide(currentSlide + 1);

},5000);


/*=================================================
        STOP ON HOVER
==================================================*/

if(slider){

slider.addEventListener("mouseenter",()=>{

    clearInterval(autoSlide);

});

slider.addEventListener("mouseleave",()=>{

    autoSlide = setInterval(()=>{

        showSlide(currentSlide + 1);

    },5000);

});

}


/*=================================================
            DOT INDICATORS
==================================================*/

const dots = document.querySelectorAll(".slider-dots span");

function updateDots(){

    dots.forEach(dot=>{

        dot.classList.remove("active");

    });

    if(dots[currentSlide]){

        dots[currentSlide].classList.add("active");

    }

}

function changeSlide(index){

    showSlide(index);

    updateDots();

}

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        changeSlide(index);

    });

});


/*=================================================
            TOUCH SWIPE
==================================================*/

let touchStartX = 0;
let touchEndX = 0;

if(slider){

slider.addEventListener("touchstart",(e)=>{

    touchStartX = e.changedTouches[0].screenX;

});

slider.addEventListener("touchend",(e)=>{

    touchEndX = e.changedTouches[0].screenX;

    if(touchEndX < touchStartX - 50){

        showSlide(currentSlide + 1);

        updateDots();

    }

    if(touchEndX > touchStartX + 50){

        showSlide(currentSlide - 1);

        updateDots();

    }

});

}


/*=================================================
            KEYBOARD SUPPORT
==================================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key === "ArrowRight"){

        showSlide(currentSlide + 1);

        updateDots();

    }

    if(e.key === "ArrowLeft"){

        showSlide(currentSlide - 1);

        updateDots();

    }

});


/*=================================================
            INITIALIZE
==================================================*/

showSlide(0);
updateDots();


/*=================================================
            END PART 3
==================================================*/
/*=================================================
            script.js - PART 4
==================================================*/


/*=================================================
            MENU FILTER
==================================================*/

const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const category = button.dataset.filter;

        menuItems.forEach(item => {

            if (
                category === "all" ||
                item.dataset.category === category
            ) {

                item.style.display = "block";

                setTimeout(() => {

                    item.style.opacity = "1";
                    item.style.transform = "scale(1)";

                }, 100);

            } else {

                item.style.opacity = "0";

                item.style.transform = "scale(.8)";

                setTimeout(() => {

                    item.style.display = "none";

                }, 300);

            }

        });

    });

});


/*=================================================
            LIVE SEARCH
==================================================*/

const searchInput = document.querySelector(".live-search");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

    const value = searchInput.value.toLowerCase();

    menuItems.forEach(item=>{

        const title = item.querySelector("h3")
            .textContent
            .toLowerCase();

        if(title.includes(value)){

            item.style.display="block";

        }else{

            item.style.display="none";

        }

    });

});

}


/*=================================================
            WISHLIST
==================================================*/

const wishlistButtons =
document.querySelectorAll(".favorite");

wishlistButtons.forEach(button=>{

button.addEventListener("click",()=>{

    button.classList.toggle("active");

    if(button.classList.contains("active")){

        button.innerHTML="❤️";

    }else{

        button.innerHTML="🤍";

    }

});

});


/*=================================================
            CART COUNTER
==================================================*/

let cartCount = 0;

const cartNumber =
document.querySelector(".cart-count");

const addCartButtons =
document.querySelectorAll(".add-cart");

addCartButtons.forEach(button=>{

button.addEventListener("click",()=>{

    cartCount++;

    if(cartNumber){

        cartNumber.textContent=cartCount;

    }

    button.innerHTML="✓ Added";

    button.disabled=true;

    setTimeout(()=>{

        button.innerHTML="Add To Cart";

        button.disabled=false;

    },1500);

});

});


/*=================================================
        FLY TO CART ANIMATION
==================================================*/

addCartButtons.forEach(button=>{

button.addEventListener("click",(e)=>{

const cart=document.querySelector(".cart-icon");

if(!cart) return;

const clone=
button.parentElement
.querySelector("img")
.cloneNode(true);

clone.style.position="fixed";
clone.style.width="80px";
clone.style.height="80px";
clone.style.objectFit="cover";
clone.style.borderRadius="50%";

const rect=
button.parentElement
.querySelector("img")
.getBoundingClientRect();

clone.style.left=rect.left+"px";
clone.style.top=rect.top+"px";

clone.style.transition=".8s";

document.body.appendChild(clone);

setTimeout(()=>{

const cartRect=
cart.getBoundingClientRect();

clone.style.left=cartRect.left+"px";
clone.style.top=cartRect.top+"px";

clone.style.width="20px";
clone.style.height="20px";

clone.style.opacity=".2";

},20);

setTimeout(()=>{

clone.remove();

},850);

});

});


/*=================================================
            QUICK VIEW MODAL
==================================================*/

const modal =
document.querySelector(".quick-modal");

const modalImage =
document.querySelector(".modal-image");

const modalTitle =
document.querySelector(".modal-title");

const modalPrice =
document.querySelector(".modal-price");

const modalDesc =
document.querySelector(".modal-description");

const quickButtons =
document.querySelectorAll(".quick-view");

quickButtons.forEach(button=>{

button.addEventListener("click",()=>{

const card=
button.closest(".menu-card");

modalImage.src=
card.querySelector("img").src;

modalTitle.textContent=
card.querySelector("h3").textContent;

modalPrice.textContent=
card.querySelector(".price").textContent;

if(card.querySelector(".description")){

modalDesc.textContent=
card.querySelector(".description").textContent;

}

modal.classList.add("show");

});

});


/*=================================================
            CLOSE MODAL
==================================================*/

const closeModal =
document.querySelector(".close-modal");

if(closeModal){

closeModal.addEventListener("click",()=>{

modal.classList.remove("show");

});

}

window.addEventListener("click",(e)=>{

if(e.target===modal){

modal.classList.remove("show");

}

});


/*=================================================
            SHAKE CART
==================================================*/

function shakeCart(){

const cart=document.querySelector(".cart-icon");

if(!cart) return;

cart.classList.add("shake");

setTimeout(()=>{

cart.classList.remove("shake");

},500);

}

addCartButtons.forEach(button=>{

button.addEventListener("click",shakeCart);

});


/*=================================================
            END PART 4
==================================================*/
/*=================================================
            script.js - PART 5
==================================================*/


/*=================================================
            GALLERY FILTER
==================================================*/

const galleryButtons = document.querySelectorAll(".gallery-filter button");
const galleryItems = document.querySelectorAll(".gallery-item");

galleryButtons.forEach(button => {

    button.addEventListener("click", () => {

        galleryButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.dataset.filter;

        galleryItems.forEach(item => {

            if (
                filter === "all" ||
                item.dataset.category === filter
            ) {

                item.style.display = "block";

                setTimeout(() => {

                    item.style.opacity = "1";
                    item.style.transform = "scale(1)";

                }, 50);

            } else {

                item.style.opacity = "0";
                item.style.transform = "scale(.8)";

                setTimeout(() => {

                    item.style.display = "none";

                }, 300);

            }

        });

    });

});


/*=================================================
            IMAGE LIGHTBOX
==================================================*/

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const galleryImages = document.querySelectorAll(".gallery-item img");
const closeLightbox = document.querySelector(".lightbox-close");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        if (!lightbox || !lightboxImage) return;

        lightbox.classList.add("show");
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

    });

});

if (closeLightbox) {

    closeLightbox.addEventListener("click", () => {

        lightbox.classList.remove("show");

    });

}

window.addEventListener("click", e => {

    if (e.target === lightbox) {

        lightbox.classList.remove("show");

    }

});


/*=================================================
        RESERVATION FORM VALIDATION
==================================================*/

const reservationForm =
document.querySelector(".reservation-form");

if (reservationForm) {

reservationForm.addEventListener("submit", e => {

e.preventDefault();

const name =
reservationForm.querySelector("[name='name']").value.trim();

const phone =
reservationForm.querySelector("[name='phone']").value.trim();

const guests =
reservationForm.querySelector("[name='guests']").value;

const date =
reservationForm.querySelector("[name='date']").value;

const time =
reservationForm.querySelector("[name='time']").value;

if(
name === "" ||
phone === "" ||
guests === "" ||
date === "" ||
time === ""
){

showToast("Please fill all required fields.","error");
return;

}

showToast("Table reserved successfully!","success");

reservationForm.reset();

});

}


/*=================================================
        NEWSLETTER VALIDATION
==================================================*/

const newsletterForm =
document.querySelector(".newsletter-form");

if(newsletterForm){

newsletterForm.addEventListener("submit",e=>{

e.preventDefault();

const email=
newsletterForm.querySelector("input").value.trim();

const pattern =
/^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

if(!pattern.test(email)){

showToast("Please enter a valid email.","error");
return;

}

showToast("Subscribed successfully!","success");

newsletterForm.reset();

});

}


/*=================================================
        CONTACT FORM VALIDATION
==================================================*/

const contactForm =
document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit",e=>{

e.preventDefault();

const inputs =
contactForm.querySelectorAll("input, textarea");

let valid = true;

inputs.forEach(input=>{

if(input.value.trim()===""){

valid=false;

input.classList.add("error");

}else{

input.classList.remove("error");

}

});

if(!valid){

showToast("Please complete the contact form.","error");
return;

}

showToast("Message sent successfully!","success");

contactForm.reset();

});

}


/*=================================================
            TOAST NOTIFICATION
==================================================*/

function showToast(message,type="success"){

const toast=document.createElement("div");

toast.className=`toast ${type}`;

toast.textContent=message;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("show");

},100);

setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>{

toast.remove();

},400);

},3000);

}


/*=================================================
            ESC CLOSE LIGHTBOX
==================================================*/

document.addEventListener("keydown",e=>{

if(e.key==="Escape" && lightbox){

lightbox.classList.remove("show");

}

});


/*=================================================
            END PART 5
==================================================*/
/*=================================================
            script.js - PART 6
==================================================*/


/*=================================================
            CURSOR GLOW EFFECT
==================================================*/

const cursor = document.querySelector(".cursor-glow");

if(cursor){

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});

}


/*=================================================
            CONFETTI EFFECT
==================================================*/

function launchConfetti(){

for(let i=0;i<100;i++){

const confetti=document.createElement("span");

confetti.classList.add("confetti");

confetti.style.left=Math.random()*100+"vw";

confetti.style.animationDuration=
(Math.random()*3+2)+"s";

confetti.style.background=
`hsl(${Math.random()*360},80%,60%)`;

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},5000);

}

}


/*=================================================
        CELEBRATION BUTTONS
==================================================*/

document.querySelectorAll(".celebrate").forEach(button=>{

button.addEventListener("click",()=>{

launchConfetti();

});

});


/*=================================================
            PERFORMANCE
==================================================*/

const lazySections=
document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("loaded");

observer.unobserve(entry.target);

}

});

},{
threshold:.15
});

lazySections.forEach(section=>{

observer.observe(section);

});


/*=================================================
            IMAGE PRELOADING
==================================================*/

window.addEventListener("load",()=>{

document.querySelectorAll("img").forEach(img=>{

const image=new Image();

image.src=img.src;

});

});


/*=================================================
            ACCESSIBILITY
==================================================*/

document.querySelectorAll("button").forEach(button=>{

if(!button.getAttribute("aria-label")){

button.setAttribute(

"aria-label",

button.textContent.trim() || "Button"

);

}

});

document.querySelectorAll("input").forEach(input=>{

if(!input.getAttribute("aria-label")){

input.setAttribute(

"aria-label",

input.placeholder || "Input"

);

}

});


/*=================================================
            SCROLL PROGRESS BAR
==================================================*/

const progress=document.querySelector(".scroll-progress");

window.addEventListener("scroll",()=>{

if(!progress) return;

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=

document.documentElement.scrollHeight-
document.documentElement.clientHeight;

const percent=

(scrollTop/scrollHeight)*100;

progress.style.width=percent+"%";

});


/*=================================================
            RANDOM SPECIAL OFFER
==================================================*/

const offers=[

"20% OFF Today!",

"Free Drink with Seafood Combo!",

"Weekend Family Feast!",

"Buy 2 Get 1 Free!",

"Free Delivery Above $40!"

];

const offerText=document.querySelector(".offer-random");

if(offerText){

offerText.textContent=

offers[Math.floor(Math.random()*offers.length)];

}


/*=================================================
            SMOOTH PAGE FADE-IN
==================================================*/

window.addEventListener("load",()=>{

document.body.classList.add("page-loaded");

});


/*=================================================
            WINDOW RESIZE
==================================================*/

window.addEventListener("resize",()=>{

if(window.innerWidth>992){

if(mobileMenu){

mobileMenu.classList.remove("active");

}

}

});


/*=================================================
            HELPER FUNCTIONS
==================================================*/

function qs(selector){

return document.querySelector(selector);

}

function qsa(selector){

return document.querySelectorAll(selector);

}

function random(min,max){

return Math.floor(

Math.random()*(max-min+1)

)+min;

}


/*=================================================
            INITIALIZE WEBSITE
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

console.log("🌊 Sea Food Hut Loaded Successfully");

revealOnScroll();

startCounters();

});


/*=================================================
            END OF SCRIPT.JS
==================================================*/