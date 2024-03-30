// Onload Animation
function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4200);
}

loaderAnimation();

// Syncing GSAP with locomotive for smooth scrolling
gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// Cards JS
document.getElementById("cards").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};

// Custom Cursor
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#5b0684",
  "#5d0887",
  "#5f098b",
  "#620b8e",
  "#640d92",
  "#660e95",
  "#681098",
  "#6a129c",
  "#6c139f",
  "#6f15a3",
  "#7116a6",
  "#7318aa",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
// Typed JS for Intro
import Typed from "typed.js";
const typed = new Typed("#element", {
  strings: ["Web Developer.", "UI/UX Desginer.", "Freelancer."],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});
// Infinite Scroller
const scrollers = document.querySelectorAll(".scroller");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

// Swiper JS
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
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let mn = gsap.matchMedia();
mn.add("(min-width:800px)",()=>{
  gsap.from(".abt-title", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".abt-title",
      scroller: ".main",
      // markers: true,
      start: "top 70%",
      end: "top 40%",
      scrub: true,
    },
  });
  gsap.from(".left-abt ", {
    opacity: 0,
    x: -100,
    duration: 1,
    scrollTrigger: {
      trigger: ".left-abt",
      scroller: ".main",
      // markers: true,
      start: "top 60%",
      end: "top 40%",
      scrub: true,
    },
  });
  gsap.from(".right-abt ", {
    opacity: 0,
    scale: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".right-abt",
      scroller: ".main",
      // markers: true,
      start: "top 60%",
      end: "top 40%",
      scrub: true,
    },
  });
  gsap.from(".project-title ", {
    opacity: 0,
    x: 100,
    duration: 1,
    scrollTrigger: {
      trigger: ".project-title",
      scroller: ".main",
      // markers: true,
      start: "top 60%",
      end: "top 40%",
      scrub: true,
    },
  });
  gsap.from(".card  ", {
    opacity: 0,
    // scale: 0,
    // y: 100,
    duration: 1,
    stagger: 3,
    scrollTrigger: {
      trigger: ".card ",
      scroller: ".main",
      // markers: true,
      start: "top 70%",
      // end: "top -100%",
      scrub: 2,
    },
  });
  gsap.from(".see-more ", {
    opacity: 0,
    // scale: 0.2,
    x: 100,
    duration: 1,
  
    scrollTrigger: {
      trigger: ".see-more ",
      scroller: ".main",
      // markers: true,
      start: "top 70%",
      end: "top 50%",
      scrub: 1,
    },
  });
  gsap.from(".skills-title ", {
    opacity: 0,
    scale: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".skills-title",
      scroller: ".main",
      // markers: true,
      start: "top 60%",
      end: "top 20%",
      scrub: true,
    },
  });
  gsap.from(".scroller ", {
    opacity: 0,
    // scale:0,
    duration: 1,
    scrollTrigger: {
      trigger: ".scroller",
      scroller: ".main",
      // markers: true,
      start: "top 50%",
      end: "top 20%",
      scrub: true,
    },
  });
  gsap.from(".progress-card ", {
    opacity: 0,
    // scale: 0,
    // y: 100,
    duration: 1,
    stagger: 3,
    scrollTrigger: {
      trigger: ".progress-card ",
      scroller: ".main",
      // markers: true,
      start: "top 50%",
      end: "top 10%",
      scrub: 2,
    },
  });
  gsap.from(".pro-bar", {
    width: "0%",
    duration: 1,
    scrollTrigger: {
      trigger: ".progress-card ",
      scroller: ".main",
      // markers: true,
      start: "top 50%",
      end: "top 10%",
      scrub: 2,
    },
  });
  gsap.from(".test-title ", {
    opacity: 0,
    scale: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".test-title",
      scroller: ".main",
      // markers: true,
      start: "top 60%",
      end: "top 20%",
      scrub: true,
    },
  });
  gsap.from(".mySwiper ", {
    opacity: 0,
    scale: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".mySwiper",
      scroller: ".main",
      // markers: true,
      start: "top 60%",
      end: "top 30%",
      scrub: true,
    },
  });
  gsap.from(".thanks ", {
    opacity: 0,
    x: -100,
    duration: 1,
    scrollTrigger: {
      trigger: ".thanks",
      scroller: ".main",
      // markers: true,
      start: "top 60%",
      end: "top 10%",
      scrub: true,
    },
  });
  gsap.from(".form ", {
    opacity: 0,
    x: 100,
    duration: 1,
    scrollTrigger: {
      trigger: ".form",
      scroller: ".main",
      // markers: true,
      start: "top 60%",
      end: "top 10%",
      scrub: true,
    },
  });
  gsap.from(".social ", {
    opacity: 0,
    x: -100,
    duration: 1,
    scrollTrigger: {
      trigger: ".social",
      scroller: ".main",
      // markers: true,
      start: "top 80%",
      end: "top 60%",
      scrub: true,
    },
  });
  gsap.from(".hire ", {
    opacity: 0,
    x: 100,
    duration: 1,
    scrollTrigger: {
      trigger: ".hire",
      scroller: ".main",
      // markers: true,
      start: "top 80%",
      end: "top 60%",
      scrub: true,
    },
  });
  gsap.from(".copy ", {
    opacity: 0,
    y: -100,
    duration: 1,
    scrollTrigger: {
      trigger: ".copy",
      scroller: ".main",
      // markers: true,
      start: "top 90%",
      end: "top 75%",
      scrub: true,
    },
  });
  
});
// GSAP Animations
const tl = gsap.timeline();

tl.from(".logo,.nav-menu", {
  y: -200,
  duration: 1,
  delay: 4.2,
  opacity: 0,
  stagger: 0.3,
}).from(".intro-img", {
  scale: 0,
});
tl.from(".text p, #resume-button", {
  y: 100,
  opacity: 0,
  stagger: 0.3,
});
tl.from(".scroll-down h4", {
  scale: 0,
  opacity: 0,
});
tl.to(".scroll-down h4", {
  y: 30,
  repeat: -1,
  duration: 1,
  yoyo: true,
});

// const tl = gsap.timeline();


// SMTP for mail
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const msg = document.querySelector(".message");

function sendEmail() {
  const bodymsg = `Full Name: ${name.value} <br> Email: ${email.value} <br> Message: ${msg.value}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "fortest2708@gmail.com",
    Password: "D3695E2526E4D35BD4A2F951EE630418F265",
    To: "fortest2708@gmail.com",
    From: "fortest2708@gmail.com",
    Subject: "Subject",
    Body: bodymsg,
  }).then(console.log("Mail Has Been Sent!!"));
}

function showmenu() {
  const menu = document.querySelector(".menu");
  menu.style.display = "block";
}
