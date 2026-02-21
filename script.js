gsap.registerPlugin(ScrollTrigger);

const sofa = document.getElementById("animated-sofa");

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
    }
});

tl.to(sofa, { rotationY: 90, scale: 1.1, ease: "none" })
  .to(sofa, { rotationY: 180, rotationX: 10, scale: 1, ease: "none" })
  .to(sofa, { rotationY: 270, rotationX: 0, scale: 1.1, ease: "none" })
  /* The Slow-Mo Landing: We increase the duration or add a pause */
  .to(sofa, { rotationY: 360, scale: 1.5, ease: "power2.inOut", duration: 2 });

// --- GOLD DUST EFFECT ---
function createDust() {
    const container = document.body;
    for (let i = 0; i < 50; i++) {
        const dust = document.createElement("div");
        dust.className = "dust";
        container.appendChild(dust);
        
        // Random placement
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        gsap.set(dust, { x: x, y: y, opacity: Math.random() });
        
        // Floating Animation
        gsap.to(dust, {
            y: "-=100",
            x: "+=" + (Math.random() * 50 - 25),
            opacity: 0,
            duration: 3 + Math.random() * 5,
            repeat: -1,
            delay: Math.random() * 5,
            ease: "sine.inOut"
        });
    }
}
createDust();
