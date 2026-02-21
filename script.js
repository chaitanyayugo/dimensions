console.log("Dimensions Script Loaded...");

gsap.registerPlugin(ScrollTrigger);

const sofa = document.getElementById("animated-sofa");
const shadow = document.getElementById("sofa-shadow");

// Safe Loader & Dust Init
window.addEventListener("load", () => {
    createDust();
    setTimeout(() => {
        document.getElementById("loader").classList.add("fade-out");
        document.body.classList.remove("loading");
        ScrollTrigger.refresh();
    }, 1000);
});

// 3D Rotation Timeline
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5
    }
});

tl.to(sofa, { rotationY: 90, rotationX: 10, scale: 1.1 })
  .to(sofa, { rotationY: 180, rotationX: -10, scale: 1.0 })
  .to(sofa, { rotationY: 270, rotationX: 10, scale: 1.1 })
  .to(sofa, { rotationY: 360, rotationX: 0, scale: 1.5, ease: "power2.out" });

// Shadow Physics
gsap.to(shadow, {
    scaleX: 0.4, opacity: 0.1,
    scrollTrigger: {
        trigger: ".scroll-container", scrub: 1.5
    }
});

// Fixed Dust Generator
function createDust() {
    const container = document.getElementById("dust-container");
    for (let i = 0; i < 60; i++) {
        const d = document.createElement("div");
        d.className = "dust";
        container.appendChild(d);
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        gsap.set(d, { x: x, y: y, opacity: Math.random() });
        
        gsap.to(d, {
            y: "-=150",
            x: "+=" + (Math.random() * 60 - 30),
            opacity: 0,
            duration: 4 + Math.random() * 5,
            repeat: -1,
            ease: "sine.inOut"
        });
    }
}


