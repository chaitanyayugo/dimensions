// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Target the sofa image
const sofa = document.getElementById("animated-sofa");

// Create a master timeline locked to the scrollbar
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // 1.5 second smoothing delay for realistic physics feel
    }
});

// Zig-Zag Animation Path
// The sofa moves left/right and rotates (rolls) smoothly as you scroll
tl.to(sofa, {
    x: "30vw", 
    rotation: 15, // Rolling effect
    scale: 1.1,
    ease: "power1.inOut"
})
.to(sofa, {
    x: "-30vw",
    rotation: -15, 
    scale: 0.9,
    ease: "power1.inOut"
})
.to(sofa, {
    x: "30vw",
    rotation: 15,
    scale: 1.1,
    ease: "power1.inOut"
})
.to(sofa, {
    x: "-30vw",
    rotation: -15,
    scale: 1,
    ease: "power1.inOut"
})
.to(sofa, {
    x: "0vw",
    rotation: 0,
    scale: 1.4, // Final scale up at the bottom of the page
    ease: "power1.inOut"
});

// Fade in content boxes as they enter the viewport
const contentBoxes = document.querySelectorAll('.content-box');
contentBoxes.forEach((box) => {
    gsap.fromTo(box, 
        { opacity: 0, y: 50 },
        { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            scrollTrigger: {
                trigger: box,
                start: "top 80%", // Triggers when box is 80% down the screen
                toggleActions: "play none none reverse"
            }
        }
    );
});