// NAV

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-link-a");
// const LinksA = document.querySelectorAll("nav-link-a");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("active");
  gsap.fromTo(".nav-links", { yPercent: 5 }, { yPercent: 0 });
});

links.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
    links.classList.remove("active");
    console.log("removed");
  });
});

// CSS remains the same

// GSAP;
// SCROLL PAGES
const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-page",
    start: "70%",
    end: "100%",
    pin: true,
    pinSpacing: false,
    scrub: true,
    onUpdate: (self) => {
      const opacity = 1 - self.progress;
      gsap.to(".first-page", { opacity: opacity });
    },
  },
});

const tlH = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    scrub: true,
    start: "-90%",
    end: "40%",
  },
});

const timeline = gsap.timeline({
  defaults: { ease: "power4.out", duration: 5 },
});

// gsap.set("body", {
//   autoAlpha: 1,
// });

gsap.fromTo(
  ".logo",
  { scale: 0, opacity: 0 },
  { scale: 1, duration: 2, opacity: 1 }
);

// gsap.fromTo(
//   "nav",
//   { yPercent: -50, opacity: 0 },
//   { yPercent: 0, opacity: 1, duration: 1 },
//   "<"
// );

gsap.fromTo(
  ".header-content",
  { scale: 1.1 },
  { scale: 0.95, duration: 5, paddingTop: 20 },
  "<"
);

//HEADER TITLE
const logo = document.querySelector(".header-title-h2");
const letters = logo.textContent.split("");

logo.textContent = "";

letters.forEach((letter) => {
  logo.innerHTML += '<span class="letter">' + letter + "</span>";
});

gsap.set(".letter", { display: "inline-block" });
gsap.fromTo(logo, { opacity: 0 }, { opacity: 1 });
gsap.fromTo(
  ".letter",
  { y: "100%", opacity: 0 },
  { y: 0, opacity: 1, delay: 2, stagger: 0.05, ease: "back.out(3)" },
  "<"
);
//

gsap.fromTo(
  ".header-text-p",
  { opacity: 0 },
  { opacity: 1, duration: 3, stagger: 0.03 },
  "<50%"
);

// GALLERY
// const galleryDiv = document.querySelector(".header-gallery div");

gsap.fromTo(
  ".header-image",
  { yPercent: -50, opacity: 0 },
  { yPercent: 0, stagger: 0.3, skewY: 0, opacity: 1, duration: 0.05 },
  "<"
);

gsap.fromTo(
  ".btn",
  { yPercent: -10, opacity: 0 },
  { yPercent: 0, opacity: 1, duration: 0.01, ease: "power4.out" },
  "<90%"
);

// gsap.fromTo(
//   ".watch-pixel",
//   { backgroundColor: "inherit" },
//   { backgroundColor: "white", duration: 3 }
// );

const tlSecondPage = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    start: "0",
    end: "50%",
    // scrub: true,
  },
});

tlSecondPage.fromTo(
  ".watch-pixel",
  { backgroundColor: "inherit", opacity: 0 },
  { backgroundColor: "white", duration: 0.7, opacity: 1 }
);
tlSecondPage.fromTo(
  ".section-two-title",
  { color: "inherit", opacity: 0 },
  { color: "white", duration: 0.7, opacity: 1 },
  "<"
);

const textHighlight = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    // markers: { startColor: "blue", endColor: "white" },
    scrub: true,
    start: "10%",
    end: "40%",
  },
});

textHighlight.fromTo(
  ".highlight",
  { color: "#444" },
  { color: "rgba(255,255,255,1)", stagger: 1 },
  "<50%"
);

// SCROLL

const arrowScroll = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-content",
    // markers: { startColor: "blue", endColor: "white" },
    scrub: true,
    start: "-100%",
    end: "100%",
  },
});

arrowScroll.fromTo(
  ".scroll-content",
  { opacity: 0, yPercent: -50 },
  { opacity: 1, duration: 1, yPercent: 0, yoyo: true }
);

// ROADMAP
document.addEventListener("DOMContentLoaded", function () {
  const timelineLine = document.querySelector(".timeline-line");
  const timelineImage = document.querySelector(".timeline-image");

  const maxTimelineHeight =
    (document.querySelectorAll(".my-container").length - 1) * 100;

  window.addEventListener("scroll", () => {
    const scrollPercentage = (window.scrollY / maxTimelineHeight) * 65; //Adjust the speed as needed

    const adjustedPercentage = Math.min(100, scrollPercentage);
    timelineLine.style.height = `${adjustedPercentage}%`;
    timelineImage.style.top = `${adjustedPercentage}%`;
  });
});

// ///////////////////////////////////////////
// THIRD-PAGE

const tlthirdPage = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    start: "0%",
    end: "10%",
    // scrub: true,
    pin: true,
    pinSpacing: false,
  },
});

// tlthirdPage.fromTo(
//   ".third-page",
//   { opacity: 0 },
//   { opacity: 1, duration: 0.3 }
// );

tlthirdPage.fromTo(
  ".third-page",
  { opacity: 0, yPercent: 50 },
  { opacity: 1, duration: 1, yPercent: 0, stagger: 0.3, skewY: 0 }
);

// ///////////////////////////////////////////
// FOURTH-PAGE

const tlfourthPage = gsap.timeline({
  scrollTrigger: {
    trigger: ".fourth-page",
    start: "0%",
    end: "10%",
    // scrub: true,
    // pin: true,
    // pinSpacing: false,
  },
});

tlfourthPage.fromTo(
  ".card-about-us",
  { opacity: 0, xPercent: -50, skewY: 4 },
  { opacity: 1, duration: 0.5, stagger: 0.5, xPercent: 0, skewY: 0 }
);

// FAQ
document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle("active");

    if (button.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }

    // Close other open accordion items
    document.querySelectorAll(".accordion-header").forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.classList.remove("active");
        otherButton.nextElementSibling.style.maxHeight = 0;
      }
    });
  });
});

//
