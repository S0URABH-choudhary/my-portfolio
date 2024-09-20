var main = document.querySelector(".main");
var cursor = document.querySelector(".circle");
var contact_button = document.querySelector(".navbar-right")
var area = document.querySelector(".social-media" )
var contactarea = document.querySelector(".contact-form")

const movingball = () =>{
    main.addEventListener("mousemove", function(dets) {
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y,
            ease:"back.out",
            duration:1
        })
    });
}
movingball()

const shrink = () =>{
   area.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:0,
        })
    })
    area.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale:1
        })
    })
   contactarea.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:0,
        })
    })
    contactarea.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale:1
        })
    })
    contact_button.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:0
        })
        gsap.to(contact_button,{
            backgroundColor:"#209CEE"
        })
    })
    contact_button.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale:1
        })
        gsap.to(contact_button,{
            backgroundColor:"white"
        })
    })
}
shrink()

