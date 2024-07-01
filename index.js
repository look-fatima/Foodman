const menuBtn = document.getElementById("menu_btn");
const navLink = document.getElementById("nav_link");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click" ,(e) =>{
navLink.classList.toggle("open");

    const isOpen = navLink.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen? "ri-close-line" : "ri-menu-line")
});

navLink.addEventListener("click", (e) =>{
    navLink.classList.remove("open");
    menuBtnIcon.setAttribute("class" , "ri-menu-icon");
});


const scrollRevealOption = {
       distance: "50px",
       origin: "bottom" ,
       duration: 1000,
};

ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay:500,
});


ScrollReveal().reveal(".header_content .section_description", {
    ...scrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".header_content .header_btn", {
    ...scrollRevealOption,
    delay:1500,
});


ScrollReveal().reveal(".explore_image img", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".explore_content .section_header", {
    ...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".explore_content .section_description", {
    ...scrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".explore_content .explore_btn", {
    ...scrollRevealOption,
    delay:1500,
});


ScrollReveal().reveal(".banner_card",{
    ...scrollRevealOption,
    interval:500
});



ScrollReveal().reveal(".chef_image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".chef_content .section_header", {
    ...scrollRevealOption,
    delay:500,
});


ScrollReveal().reveal(".chef_content .section_description", {
    ...scrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".chef_list li", {
    ...scrollRevealOption,
    delay:1500,
    interval: 500,
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });