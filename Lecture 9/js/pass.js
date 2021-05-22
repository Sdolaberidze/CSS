let btn = document.querySelector(".btn")


btn.addEventListener("click", function() {

let input = document.querySelector('input')

if (input.type==="password" ) {

    input.setAttribute('type','text')
    btn.innerHTML= '<i class="bi bi-eye eye"></i>'
}

else{
    input.setAttribute('type','password')
    btn.innerHTML= '<i class="bi bi-eye-slash eye"></i>'
}


    
})