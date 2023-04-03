$(function(){
    gsap.registerPlugin(GSDevTools);
    let section = $("section");
    section.css("box-shadow","4px 4px 10px rgba(0,0,0,0.4)")
    // console.log(section);
    let tl0 = gsap.timeline({
        id: "animation0"
    });
    tl0.from(section, {x: 100, opacity: 0, stagger: 0.5})
    GSDevTools.create({
        animation0: "animation0"
    });
});