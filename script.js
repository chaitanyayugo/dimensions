gsap.registerPlugin(ScrollTrigger);

const sofa = document.getElementById("animated-sofa");
const shadow = document.getElementById("sofa-shadow");

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Smooth physics lag for weight
    }
});

tl.to(sofa, { 
    x: "20vw", 
    rotationY: 60,  // SIDE VIEW
    rotationZ: 5,
    ease: "none" 
})
.to(sofa, { 
    x: "0vw", 
    rotationX: 45,  // UPPER VIEW
    rotationY: 0,
    scale: 1.2,
    ease: "none" 
})
.to(sofa, { 
    x: "-20vw", 
    rotationY: 180, // BACK VIEW (Simulated via Flip)
    rotationX: 0,
    scale: 0.8,
    ease: "none" 
})
.to(sofa, { 
    x: "15vw", 
    rotationY: -60, // OTHER SIDE
    rotationZ: -5,
    scale: 1.1,
    ease: "none" 
})
.to(sofa, { 
    x: "0vw", 
    rotationY: 0, 
    rotationX: 0, 
    rotationZ: 0, 
    scale: 1.4,     // FINAL FRONT VIEW
    ease: "none" 
});

// Shadow physics: Moves slightly opposite to sofa
gsap.to(shadow, {
    scaleX: 1.5,
    opacity: 0.5,
    scrollTrigger: {
        trigger: ".scroll-container",
        scrub: 1.5
    }
});
