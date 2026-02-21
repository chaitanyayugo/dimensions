gsap.registerPlugin(ScrollTrigger);

const sofa = document.getElementById("animated-sofa");
const shadow = document.getElementById("sofa-shadow");

window.addEventListener("load", () => {
    createDust();
    setTimeout(() => {
        document.getElementById("loader").classList.add("fade-out");
        document.body.classList.remove("loading");
        ScrollTrigger.refresh();
    }, 1000);
});

// Sofa Rotation Mapping
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 2
    }
});

tl.to(sofa, { rotationY: 80, rotationX: 10, scale: 1.1 })      // Sec 2
  .to(sofa, { rotationY: 160, rotationX: -15, scale: 0.95 })   // Sec 3
  .to(sofa, { rotationY: 220, rotationX: 15, scale: 1.1 })     // Sec 4
  .to(sofa, { rotationY: 300, rotationX: -5, scale: 1.25 })    // Sec 5
  .to(sofa, { rotationY: 360, rotationX: 0, scale: 1.6, ease: "power2.out" }); // Sec 6

// Fixed Dust Function
function createDust() {
    const container = document.getElementById("dust-container");
    for (let i = 0; i < 60; i++) {
        const d = document.createElement("div");
        d.className = "dust";
        container.appendChild(d);
        gsap.set(d, { x: Math.random() * innerWidth, y: Math.random() * innerHeight, opacity: Math.random() });
        gsap.to(d, {
            y: "-=150", opacity: 0,
            duration: 4 + Math.random() * 4,
            repeat: -1, ease: "sine.inOut"
        });
    }
}
