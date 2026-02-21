gsap.registerPlugin(ScrollTrigger);

const sofa = document.getElementById("animated-sofa");
const shadow = document.getElementById("sofa-shadow");

window.addEventListener("load", () => {
    // 1. Start Dust when page loads
    createDust();

    // 2. Dismiss Loader
    setTimeout(() => {
        document.getElementById("loader").classList.add("fade-out");
        document.body.classList.remove("loading");
        ScrollTrigger.refresh();
    }, 1500);
});

// 3. Parallax Background
gsap.to(".artistic-bg", {
    y: "-25vh",
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true
    }
});

// 4. Enhanced 3D Rotation & Size
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5
    }
});

tl.to(sofa, { rotationY: 95, rotationX: 12, rotationZ: 8, scale: 1.2, ease: "none" })
  .to(sofa, { rotationY: 180, rotationX: -20, scale: 1.0, ease: "none" })
  .to(sofa, { rotationY: 265, rotationX: 12, rotationZ: -8, scale: 1.2, ease: "none" })
  .to(sofa, { rotationY: 360, rotationX: 0, rotationZ: 0, scale: 1.6, ease: "power2.out", duration: 2 });

// 5. Shadow Intensity Physics
gsap.to(shadow, {
    scaleX: 0.5, opacity: 0.1,
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5
    }
});

// 6. Dust Generator (Fixed)
function createDust() {
    const dustCount = 60;
    for (let i = 0; i < dustCount; i++) {
        const d = document.createElement("div");
        d.className = "dust";
        document.body.appendChild(d);
        
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        
        gsap.set(d, { x: startX, y: startY, opacity: Math.random() });
        
        gsap.to(d, {
            y: "-=" + (100 + Math.random() * 200),
            x: "+=" + (Math.random() * 100 - 50),
            opacity: 0,
            duration: 4 + Math.random() * 6,
            repeat: -1,
            delay: Math.random() * 5,
            ease: "sine.inOut"
        });
    }
}
