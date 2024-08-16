let navbar = document.querySelector(".navbar");

window.addEventListener("scroll",  () =>{
    let balo = window.scrollY
    if(balo >= 18){
        navbar.style.position = "fixed"
        navbar.style.margin = "0px"
    }
    if(balo <= 20){
        navbar.style.position = "sticky"
             navbar.style.margin = "20px"
    }
    console.log(balo)
})