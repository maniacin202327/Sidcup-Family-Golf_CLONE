// cursor animation.
let crsr = document.querySelector("#cursor")
let cr_blur = document.querySelector("#cr_blur")

document.addEventListener("mousemove", function(dets){

    const posX = dets.clientX;
    const posY = dets.clientY;

    crsr.style.left = `${posX}px`
    crsr.style.top = `${posY}px`
    
    cr_blur.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 8000, fill: "forwards" });

})

// nav_bar animation.
gsap.to("#nav", {
    backgroundColor: "#000000",
    height: "100px",
    duration: 0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

// page_scrolling animation.
gsap.to("#main", {
    backgroundColor: "#000000",
    duration: 1,
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -75%",
        scrub: 2
    }
})