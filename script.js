// --- LOADING SCREEN LOGIC ---
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const body = document.body;
    
    // We add a tiny 500ms delay just to make the transition feel cinematic
    setTimeout(() => {
        // Trigger the CSS fade out
        loader.classList.add("fade-out");
        // Re-enable scrolling
        body.classList.remove("loading");
        
        // Refresh GSAP so it calculates the scroll heights correctly now that everything is loaded
        ScrollTrigger.refresh();
    }, 500); 
});

// ... your existing GSAP code starts here ...
gsap.registerPlugin(ScrollTrigger);

const sofa = document.getElementById("animated-sofa");
const shadow = document.getElementById("sofa-shadow");

// 1. BACKGROUND PARALLAX SCROLL
// Makes the background image move slightly as you scroll down
gsap.to(".artistic-bg", {
    y: "-15vh", // Moves the background up smoothly
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true
    }
});

// 2. THE 360 SOFA ROTATION (WITH SLOW-MO FRONT VIEW)
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 2, // The "weight/physics" of the scroll. Higher number = slower catch-up
    }
});

tl.to(sofa, { rotationY: 90, rotationZ: 5, scale: 1.1, ease: "none" }) // SIDE TILT
  .to(sofa, { rotationY: 180, rotationX: 15, scale: 1, ease: "none" }) // UPPER BACK
  .to(sofa, { rotationY: 270, rotationX: 0, rotationZ: -5, scale: 1.1, ease: "none" }) // OTHER SIDE TILT
  /* THE SLOW-MO LANDING */
  // Power2.out makes it decelerate smoothly as it hits 360 degrees
  .to(sofa, { rotationY: 360, rotationX: 0, rotationZ: 0, scale: 1.5, ease: "power2.out", duration: 3 });

// 3. SHADOW PHYSICS
// The shadow shrinks and fades when the sofa scales down (moves "away")
const shadowTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
    }
});

shadowTl.to(shadow, { scaleX: 0.8, opacity: 0.1, ease: "none" })
        .to(shadow, { scaleX: 0.6, opacity: 0.05, ease: "none" })
        .to(shadow, { scaleX: 0.8, opacity: 0.1, ease: "none" })
        .to(shadow, { scaleX: 1.2, opacity: 0.4, ease: "power2.out", duration: 3 });


// 4. GOLD DUST EFFECT
function createDust() {
    const container = document.body;
    for (let i = 0; i < 60; i++) {
        const dust = document.createElement("div");
        dust.className = "dust";
        container.appendChild(dust);
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        gsap.set(dust, { x: x, y: y, opacity: Math.random() });
        
        gsap.to(dust, {
            y: "-=150",
            x: "+=" + (Math.random() * 60 - 30),
            opacity: 0,
            duration: 3 + Math.random() * 5,
            repeat: -1,
            delay: Math.random() * 5,
            ease: "sine.inOut"
        });
    }
}
createDust();

