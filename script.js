var main = document.querySelector(".main");
var cursor = document.querySelector(".circle");
var contact_button = document.querySelector(".contact-wrap")
var area = document.querySelectorAll(".links" )
var contactarea = document.querySelector(".contact-form")
var toggle = document.querySelector("#checkbox")
var body = document.querySelector("body")
var text  = document.querySelector(".text")
var skill = document.querySelectorAll(".skill-card")
var avtarbackground = document.querySelector(".window")
var sun = document.getElementById("sun")
var moon = document.getElementById("moon")
var cloud1 = document.getElementById("cloud-2")
var cloud2 = document.getElementById("cloud-1")
var stars = document.getElementById("stars")
var bluprints = document.querySelector(".blueprint")
var Status = document.getElementById("email-statue")
var contactform = document.getElementById("contact-form")



gsap.to(moon,{
    top:"20%",
    opacity:1,
    duration:1.5
})
gsap.to(stars,{
    opacity:1,
    duration:2,
    delay:.25
})



toggle.addEventListener("click",() => {
    if (!toggle.checked){
        body.classList.add("light-theme")
        gsap.to(avtarbackground,{
            backgroundColor:"skyblue"
        })
        gsap.to(sun,{
            top:"20%",
            opacity:1,
            duration:1.5
        })
        gsap.to(moon,{
            top:"-20%",
            opacity:0
        })
        gsap.to(stars,{
            opacity:0
        })
        gsap.to(cloud1,{
            left:"4%"
        })
        gsap.to(cloud2,{
            left:"35%"
        })
    }else{
        body.classList.remove("light-theme") 
        gsap.to(avtarbackground,{
            backgroundColor:"#2e4482d0"
        })  
        gsap.to(moon,{
            top:"20%",
            opacity:1,
            duration:1.5
        })
        gsap.to(stars,{
            opacity:1,
            duration:2,
            delay:.25
        })
        gsap.to(sun,{
            top:"-20%",
            opacity:0
        })
        gsap.to(cloud1,{
            left:"-40%"
        })
        gsap.to(cloud2,{
            left:"90%"
        })
    }
})

skill.forEach(skillelement => {
   skillelement.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:0,
    })
   }) 
   skillelement.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:1,
    })
   }) 
});

area.forEach(element => {
   element.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:0,
    })
   }) 
   element.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:1,
    })
   }) 
});


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
   bluprints.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:0,
        })
    })
    bluprints.addEventListener("mouseleave",function(){
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
        gsap.to(text,{
            color:"var(--secondary-color)"
        })
        gsap.to(cursor,{
            scale:0
        })
        gsap.to(contact_button,{
            backgroundColor:"var(--tertiary-color)",
        })
    })
    contact_button.addEventListener("mouseleave",function(){
        gsap.to(text,{
            color:"var(--primary-color)"
        })
        gsap.to(cursor,{
            scale:1
        })
        gsap.to(contact_button,{
            backgroundColor:"var(--secondary-color)"
        })
    })
}
shrink()

contactform.addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const form = event.target;
    const formData = new FormData(form);
    console.log(form)
  
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
  
      if (response.ok) {
        // Show a success message or update the UI
        Status.innerText = "Email sent successfully!";
        form.reset(); // Optional: Clear the form fields after submission
      } else {
        // Handle non-200 responses
        Status.innerText = "Failed to send email. Please try again.";
      }
    } catch (error) {
      console.error('Error:', error);
      Status.innerText = "An error occurred. Please try again.";
    }
  });
  
