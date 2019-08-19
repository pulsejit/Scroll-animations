
var controller = new ScrollMagic.Controller();
var animateIn = new TimelineMax();

animateIn
.fromTo(".overlay", 2, {skewX:30, scale:1.5}, {skewX:0, xPercent:100, tranfromOrigin: "0% 100%", ease: Power4.easeOut})

.from(".project-info", 1, {scaleY:0, transformOrigin: "bottom left"}, "-=1.5")

.from("h4", .3,{autoAlpha: 0, y:30, ease:Power4.easeOut}, "-=.7")

.from(".small-title", .3, {autoAlpha: 0, y:30, ease:Power4.easeOut}, "-=.7")

.from(".project-link", .7, {autoAlpha: 0, y:30, ease:Power4.easeOut}, "-=.7")

// make a scroll magic scene

var scene = new ScrollMagic.Scene({
    triggerElement: ".project"
})

.setTween(animateIn).addTo(controller)
