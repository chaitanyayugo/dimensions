gsap.registerPlugin(ScrollTrigger);

const sofa = document.getElementById("animated-sofa");

// The "360 Dimension" Rotation Timeline
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Keeps the rotation smooth and "heavy"
    }
});

tl.to(sofa, { 
    // 1. Rotate to the Right Side
    rotationY: 90, 
    scale: 1.1,
    ease: "none" 
})
.to(sofa, { 
    // 2. Rotate to the Back (180 degrees)
    rotationY: 180, 
    rotationX: 10, // Slight tilt to see the top-back
    scale: 1,
    ease: "none" 
})
.to(sofa, { 
    // 3. Rotate to the Left Side
    rotationY: 270, 
    rotationX: 0,
    scale: 1.1,
    ease: "none" 
})
.to(sofa, { 
    // 4. Return to Front with a Zoom
    rotationY: 360, 
    scale: 1.5,
    ease: "none" 
});
