// --- 1. Loader Logic ---
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.add("fade-out");
        document.body.classList.remove("loading");
        ScrollTrigger.refresh();
    }, 1000);
});

gsap.registerPlugin(ScrollTrigger);

const sofa = document.getElementById("animated-sofa");
const shadow = document.getElementById("sofa-shadow");

// --- 2. Parallax Background ---
gsap.to(".artistic-bg", {
    y: "-10%",
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true
    }
});

// --- 3. 360° Rotation ---
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5
    }
});

tl.to(sofa, { rotationY: 90, rotationX: 5, scale: 1.1, ease: "none" })
  .to(sofa, { rotationY: 180, rotationX: -10, scale: 0.9, ease: "none" })
  .to(sofa, { rotationY: 270, rotationX: 5, scale: 1.1, ease: "none" })
  .to(sofa, { rotationY: 360, rotationX: 0, scale: 1.3, ease: "power2.inOut", duration: 2 });

// --- 4. Shadow Physics ---
gsap.to(shadow, {
    scaleX: 0.5, opacity: 0.05,
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top 50%",
        end: "bottom bottom",
        scrub: 1.5
    }
});

// --- 5. Gold Dust Particles ---
function createDust() {
    for (let i = 0; i < 40; i++) {
        const d = document.createElement("div");
        d.className = "dust";
        document.body.appendChild(d);
        gsap.set(d, { x: Math.random() * innerWidth, y: Math.random() * innerHeight, opacity: Math.random() });
        gsap.to(d, {
            y: "-=100", x: "+=30", opacity: 0,
            duration: 4 + Math.random() * 4,
            repeat: -1, ease: "sine.inOut"
        });
    }
}
createDust();


