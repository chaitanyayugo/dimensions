gsap.registerPlugin(ScrollTrigger);

const sofa = document.getElementById("animated-sofa");
const shadow = document.getElementById("sofa-shadow");

window.addEventListener("load", () => {
    createDust();
    setTimeout(() => {
        document.getElementById("loader").classList.add("fade-out");
        document.body.classList.remove("loading");
        ScrollTrigger.refresh();
    }, 1200);
});

// Parallax Background
gsap.to(".artistic-bg", {
    y: "-15vh",
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true
    }
});

// Sofa Rotation Timeline for 6 Sections
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 2
    }
});

tl.to(sofa, { rotationY: 70, rotationX: 15, scale: 1.1 })      // Section 2
  .to(sofa, { rotationY: 150, rotationX: -10, scale: 0.95 })   // Section 3
  .to(sofa, { rotationY: 210, rotationX: 20, scale: 1.1 })     // Section 4
  .to(sofa, { rotationY: 280, rotationX: -5, scale: 1.2 })     // Section 5
  .to(sofa, { rotationY: 360, rotationX: 0, scale: 1.6, ease: "power2.out" }); // Section 6

// Shadow Physics
gsap.to(shadow, {
    scaleX: 0.6, opacity: 0.1,
    scrollTrigger: { trigger: ".scroll-container", scrub: 2 }
});

function createDust() {
    const container = document.getElementById("dust-container");
    for (let i = 0; i < 70; i++) {
        const d = document.createElement("div");
        d.className = "dust";
        container.appendChild(d);
        gsap.set(d, { 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight, 
            opacity: Math.random() 
        });
        gsap.to(d, {
            y: "-=180",
            x: "+=" + (Math.random() * 80 - 40),
            opacity: 0,
            duration: 4 + Math.random() * 6,
            repeat: -1,
            ease: "sine.inOut"
        });
    }
}
