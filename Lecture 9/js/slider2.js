let previous =document.querySelector(".previous");
let next = document.querySelector(".next");
let item = document.querySelectorAll(".slider-item")
let shift = document.querySelectorAll("span")   //ბათონების შემოტანა




//ფუნქცია რომელიც activeს გადაიყვანს შემდეგ სლაიდზე და წაშლი ძველზე

next.addEventListener("click", function () {
    


    let slider= document.querySelector(".slider-item.active")
    
    
    
    if (slider.nextElementSibling != null) {
        
        slider.classList.remove("active")
    slider.nextElementSibling.classList.add("active")
       
    
        
      
    }
   
    else{
        slider.classList.remove("active")
         item[0].classList.add("active")
    }
   // აქტიური ბატონის შემოტანა სლაიდერი ბატონის გადართვა სლაიდთან ერთად
   let  activebtn =document.querySelector("span.active")
    
   if (activebtn.nextElementSibling != null) {
        
   activebtn.classList.remove("active")
   activebtn.nextElementSibling.classList.add("active")
   

    
  
   }

  else{
    activebtn.classList.remove("active")
     shift[0].classList.add("active")
  }
   

    
})


// ფუნქცია რომელიც უკანა სალიდზე დაამატებს actives

previous.addEventListener("click" ,function () {

    let slider = document.querySelector(".slider-item.active");
    

    if (slider.previousElementSibling != null) {
        slider.classList.remove("active")
        slider.previousElementSibling.classList.add("active")
        
    }
    else{
        slider.classList.remove("active")
        item[3].classList.add("active")



    }
     // აქტიური ბატონის შემოტანა სლაიდერი ბატონის გადართვა სლაიდთან ერთად
   let  activebtn =document.querySelector("span.active")
   if (activebtn.previousElementSibling != null) {
    activebtn.classList.remove("active")
    activebtn.previousElementSibling.classList.add("active")
    
}
else{
    activebtn.classList.remove("active")
    shift[3].classList.add("active")


activebtn
}
   
})

/// switch buttons


// აქტიური ბატონის შემოტანა
let  activebtn =document.querySelector("span.active")


// შემოვიტანეც გადასართავები 
for (let index = 0; index < shift.length; index++) {
    const element = shift[index];
   
    element.addEventListener("click",function () {
        let active =document.querySelector("span.active")    //მოვძებნე აკტიური ბათონი და წავუშალეთ აქტივი
        let datasslide = this.getAttribute("data-slide")     /// წამოვიყონ მონიშული ბათონის data-slide
        active.classList.remove("active")
        element.classList.add("active")
        
        let slider= document.querySelector(".slider-item.active")  //დავასელქტეთ აქტიური კლას
         slider.classList.remove("active")                      //წაშლის აქტიურ კლასს
        item[datasslide].classList.add("active");          // რომელ ბათონსაც გავააქტიურებთ ის სლაიდი გააქტიურდება
        
      

       
        
        
    })
   
}



// ავტომატურად  დროით გადაცვლით ფუნქცია
let time =document.querySelector(".slider-container").getAttribute("data-interval") //წამოვიღოთ მითითებული დროის ინრევალი htmldan

console.log(time)
if (time != "false") {          //html-ში თუ გავუწერთ ფალსე აგარ იმუშავებს
setInterval(function(){


  
 
          
    


        let slider= document.querySelector(".slider-item.active")
        
        
        
        if (slider.nextElementSibling != null) {
            
            slider.classList.remove("active")
        slider.nextElementSibling.classList.add("active")
           
        
            
          
        }
       
        else{
            slider.classList.remove("active")
             item[0].classList.add("active")
        }
       // აქტიური ბატონის შემოტანა სლაიდერი ბატონის გადართვა სლაიდთან ერთად
       let  activebtn =document.querySelector("span.active")
        
       if (activebtn.nextElementSibling != null) {
            
       activebtn.classList.remove("active")
       activebtn.nextElementSibling.classList.add("active")
       
    
        
      
       }
    
      else{
        activebtn.classList.remove("active")
         shift[0].classList.add("active")
      }
       
    
    


}, time )

}


//  ალერთს გამოიტანს 5 წამშ
/*setTimeout(() => {

    alert("gamarjoba")
    
}, 5000);
*/



// 

let portfolio =document.querySelectorAll(".portfolio li")   //შემოვიტანეთ პორტფოლიოს ლისთი


for (let i = 0; i < portfolio.length; i++) {  
    const element = portfolio[i];
    
    element.addEventListener("click",function(){

       
        let active= document.querySelector(".portfolio .active")
        let dataclass= element.getAttribute("data-class")         //წამოვიღეთ რომელი დათა კლასია აქტიური რათა ეს კლასსი გავაქტირუოთ ინსაიდშ
        
        let insideact= document.querySelector(".content .active")  // წამოვიღეტ აქტიური ინსაიდი
        
        insideact.classList.remove("active")

        active.classList.remove("active")
        element.classList.add("active")

      document.querySelector(dataclass).classList.add("active")



    }
    
    
    )
    
}

let  btn = document.querySelector(".btn-ss");
btn.addEventListener("click",function(){
   
   window.scrollBy(0, 3000)


}
)