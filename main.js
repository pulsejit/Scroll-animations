
var controller = new ScrollMagic.Controller();


$(".project").each(function(){

 var picOverlay = $(this).find(".overlay");
 var projectInfo = $(this).find(".project-info");
 var samllTitle = $(this).find(".small-title");
 var projectLink = $(this).find(".project-link");
 var title = $(this).find("h4");

var animateIn = new TimelineMax();

animateIn
.fromTo(picOverlay, 2, {skewX:30, scale:1.5}, {skewX:0, xPercent:100, tranfromOrigin: "0% 100%", ease: Power4.easeOut})

.from(projectInfo, 1, {scaleY:0, transformOrigin: "bottom left"}, "-=1.5")

.from(title, .3,{autoAlpha: 0, y:30, ease:Power4.easeOut}, "-=.7")

.from(samllTitle, .3, {autoAlpha: 0, y:30, ease:Power4.easeOut}, "-=.7")

.from(projectLink, .7, {autoAlpha: 0, y:30, ease:Power4.easeOut}, "-=.7")

// make a scroll magic scene

var scene = new ScrollMagic.Scene({
    //Scene is a constractor so the first letter will be in clps also same goes for the constractor also
    triggerElement: this,
})

.addIndicators()

.setTween(animateIn).addTo(controller)
})
