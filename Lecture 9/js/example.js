let  btn = document.querySelector('.bg-danger ');

let  p= document.querySelectorAll('p')


btn.addEventListener('click', function(){
    let active = document.querySelectorAll(" .active");

 if (active[0].nextElementSibling != null) {                         //სანამ ნალის ტოლი გახდება მანამდე გადავა შემდეგ ელემეტზე და დაამატებს აქტივ კლასს
    active[0].classList.remove('active');
    active[0].nextElementSibling.classList.add('active');
   
     
 }   else
   {  
    active[0].classList.remove('active');
     p[0].classList.add('active')
    
   }






})
