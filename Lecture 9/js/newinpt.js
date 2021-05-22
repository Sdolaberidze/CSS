let btn = document.querySelector(".btn");
let div= document.querySelector(".input");



btn.addEventListener("click" , function () {

    let input= document.createElement("input");
    let dltbtn= document.createElement("btn");

    div.classList.add("form-group")

    input.classList.add("form-control")
    input.classList.add("form-control")
    input.setAttribute("type", "text")
    

     
    dltbtn.classList.add("btn","bg-danger")

    dltbtn.setAttribute("type","button")
    dltbtn.textContent="delete"


    div.appendChild(input)
    div.appendChild(dltbtn)




})

let delet =  document.querySelector(".btn bg-danger")

delet.addEventListener("click" ,function () {

    div.innerHTML= " "

    
})



