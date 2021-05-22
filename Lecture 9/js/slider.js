let next= document.querySelector(".next")
let previous= document.querySelector(".previous")
let item =document.querySelectorAll(".slider-item")

// next slider
next.addEventListener("click", function () {

let slider = document.querySelector(".slider-item");

if (slider.nextElementSibling != null) {
    
slider.nextElementSibling.classList.add("active")

    
}else{
    slider.classList.remove("active")
    item[item.length-1].classList.add("active")
}




    
})


//previous slider
previous.addEventListener("click", function () {

    let slider = document.querySelector(".slider-item");
    

if (slider.previousElementSibling != null) {
    slider.classList.remove("active")
    slider.previousElementSibling.classList.add("active")
    
    
}
else{
    slider.classList.remove("active")
    item[3].previousElementSibling.classList.add("active")}
    
    
        
    })