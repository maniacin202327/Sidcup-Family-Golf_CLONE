// cursor animation.
let crsr = document.querySelector("#cursor")
let cr_blur = document.querySelector("#cr_blur")
let in_h3 = document.querySelectorAll("#nav h3")
let in_card = document.querySelectorAll("#card_Container .card")
let in_greenDiv = document.querySelectorAll("#green_div h2")
let in_quote = document.querySelectorAll("#quotation_div p")

document.addEventListener("mousemove", function(dets){

    const posX = dets.clientX;
    const posY = dets.clientY;
   
    crsr.animate({
        left: `${posX+2}px`,
        top: `${posY+10}px`
    }, {duration: 1000, fill: "forwards" });
    
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
gsap.from("#about_Us, #aboutUs_text", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger: "#about_Us",
        scroller: 'body',
        start: "top 60%",
        end: "top 55%",
        scrub: 3,
        // markers: true
    }
})
gsap.from("#card_Container, .card", {
    scale: 0.9,
    duration: 1,
    stagger: 0.1,
    scrollTrigger:{
        trigger: "#card_Container",
        scroller: 'body',
        start: "top 65%",
        end: "top 60%",
        scrub: 2,
        // markers: true
    }
})
gsap.from("#green_div", {
    y: 80,
    duration: 2,
    opacity: 0,
    scrollTrigger:{
        trigger: "#green_div",
        scroller: 'body',
        start: "top 70%",
        end: "top 65%",
        scrub: 3,
        // markers: true
    }
})
gsap.from("#quotation_div", {
    scale: 0.9,
    duration: 1,
    scrollTrigger:{
        trigger: "#quotation_div",
        scroller: 'body',
        start: "top 55%",
        end: "top 45%",
        scrub: 3,
        // markers: true
    }
})
gsap.from("#colon1", {
    y: -100,
    x: -100,
    duration: 7,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: 'body',
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
        // markers: true
    }
})
gsap.from("#colon2", {
    y: 100,
    x: 100,
    duration: 7,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: 'body',
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
        // markers: true
    }
})
gsap.from("#page4 h1", {
    y: 50,
    duration: 8,
    scrollTrigger:{
        trigger: "#page4 h1",
        scroller: 'body',
        start: "top 75%",
        end: "top 70%",
        scrub: 3
        // markers: true
    }
})
gsap.from("#footer h2", {
    y: 50,
    duration: 2,
    scrollTrigger:{
        trigger: "#footer",
        scroller: 'body',
        start: "top 75%",
        end: "top 70%",
        scrub: 3
        // markers: true
    }
})