let img = document.createElement("img");   // ელემენტის შექმნა გადავცემთ ტაგს
let h1  = document.createElement("h1")
img.setAttribute('src','pic/car.jpeg' )
img.setAttribute('alt','pic/car.jpeg' )

h1.textContent=" i am "                     //ტექსტის ჩამატება


let htms= document.querySelector('.write');

htms.appendChild(img);
htms.appendChild(h1);

    //ჩაემატება ზევით შექმნილი იმგ ტეგი


let newinput =    document.querySelector(".btn")

newinput.addEventListener('click' ,function(){        //ინფუთს შექმნის ფუნქცია

let input = document.createElement("input");
let div= document.createElement("div");


div.classList.add("form-group");   ///    divის შიგნით კიდევ შეიქმნება ახალი დივ


input.classList.add("form-control");

input.setAttribute("type", "number");


htms.appendChild(input);
htms.appendChild(div);

}




)


let testp=document.querySelector(".test");

console.log(testp.nextElementSibling)                        //გვიბრუნებს შემდეგ ელემენტს
console.log(testp.previousElementSibling)                    //  გვიბრუნებს წინა მეზობელს

console.log(testp.parentElement)                         //დააბრუნებს მშობელს 

//----



 
