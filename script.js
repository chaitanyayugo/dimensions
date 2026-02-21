gsap.registerPlugin(ScrollTrigger);

// 1. FAIL-SAFE LOADER
window.addEventListener("load", dismissLoader);
setTimeout(dismissLoader, 2000); // Force dismiss after 2 seconds if load is slow

function dismissLoader() {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 800);
    }
}

// 2. DUST GENERATOR
const dustContainer = document.getElementById("dust-container");
for (let i = 0; i < 40; i++) {
    const d = document.createElement("div");
    d.className = "dust";
    const size = Math.random() * 3 + "px";
    d.style.width = size; d.style.height = size;
    dustContainer.appendChild(d);
    gsap.set(d, { x: Math.random() * innerWidth, y: Math.random() * innerHeight });
    gsap.to(d, {
        y: "-=100", opacity: 0,
        duration: 3 + Math.random() * 2,
        repeat: -1, ease: "linear"
    });
}

// 3. SOFA ROTATION
gsap.to("#animated-sofa", {
    rotationY: 360,
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
    }
});
