gsap.registerPlugin(ScrollTrigger);

const sofa = document.getElementById("animated-sofa");

window.addEventListener("load", () => {
    createDust();
    setTimeout(() => {
        document.getElementById("loader").classList.add("fade-out");
        document.body.classList.remove("loading");
        ScrollTrigger.refresh();
    }, 1000);
});

// Sofa Rotation Timeline
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 2
    }
});

tl.to(sofa, { rotationY: 90, rotationX: 5, scale: 1.1 })
  .to(sofa, { rotationY: 180, rotationX: -5, scale: 0.95 })
  .to(sofa, { rotationY: 270, rotationX: 5, scale: 1.1 })
  .to(sofa, { rotationY: 360, rotationX: 0, scale: 1.4, ease: "power2.out" });

function createDust() {
    const container = document.getElementById("dust-container");
    for (let i = 0; i < 50; i++) {
        const d = document.createElement("div");
        d.className = "dust";
        container.appendChild(d);
        gsap.set(d, { x: Math.random() * innerWidth, y: Math.random() * innerHeight, opacity: Math.random() });
        gsap.to(d, {
            y: "-=100", opacity: 0,
            duration: 3 + Math.random() * 3,
            repeat: -1, ease: "sine.inOut"
        });
    }
}
}
