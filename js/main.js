gsap.registerPlugin(ScrollTrigger)

gsap.from("#headline",{
y:80,
opacity:0,
duration:1
})

gsap.from(".stat",{
y:40,
opacity:0,
stagger:0.3,
delay:0.5
})

gsap.to("#heroImage",{
scrollTrigger:{
trigger:"#hero",
start:"top top",
end:"bottom top",
scrub:true
},
x:400,
scale:1.3,
rotation:10
})

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight

let progress=(scrollTop/height)*100

document.getElementById("progressBar").style.width=progress+"%"

})