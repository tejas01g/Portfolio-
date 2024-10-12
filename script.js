// let dayNight = document.querySelector(".dayNight");
// let banner = document.querySelector(".banner");
// dayNight.addEventListener("click",()=>{
//     banner.classList.toggle("night");
// })


let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");
let sunIcon = document.querySelector('ion-icon[name="sunny-outline"]');
let moonIcon = document.querySelector('ion-icon[name="moon-outline"]');

dayNight.addEventListener("click", () => {
    banner.classList.toggle("night");

    // Toggle the icons when switching modes
    if (banner.classList.contains("night")) {
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
    } else {
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
    }
});

let typingEffect = new Typed('#text',{
    strings:["Tejasvi Garg","Youtuber","Coder"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000
})
