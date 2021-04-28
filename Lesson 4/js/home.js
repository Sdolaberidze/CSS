let a="5.56";
let b="4.56";
let ab= Number(a)* Number(b);
let text="My name is Shako Dolaberidze";
document.getElementById("test").innerHTML=ab.toFixed(2) + "<br>" + text.slice(11, 16) ;
document.getElementById("test").innerHTML=`${ab.toFixed(2)  }  <br>  ${text.slice(11,16)}  `;

//------




let auto=["Ford", "Mustang", 5.4, ["V6", "V8"], {variant:"boss 302", variant2:"Shelby", variant3:"Saalen", year:["2018, 2022"]}];

let car=`<p> ${auto[0]}  ${auto[1]}  გამოდის   ${auto[2]} ${auto[3][1]}  ტიპის ძრავით, ასევე მისი მოდიფიკაციებია ${auto[4].variant},  ${auto[4].variant2}, საუკეთესო მოდელები გამოდიოდა <br>  ${auto[4].year}   </p>`

document.getElementById("car").innerHTML=car;




//------------------
let k=[1,2,4,5,4 ];

console.log(k[k.length-2]);


let get=[1,2,3,4,5,6,7,"Noc" ];

get.unshift(2);
get.push("SubNoc");
console.log(get);

let got=[1,2,3,4,5,6,7,"Noc" ];
get.shift();
get.pop();

console.log(got);




//------------------
let words=[1,2,4,5,"front-end" ];

for(i=0; i<words.length; i++){

    let frt=words[i];
    console.log(frt);
    if(frt=words[4]){
        console.log(frt.replace("front-end", "back -end" ))
    }

   

};

//--------------

let word=[ "Ford" ,"Mercedes","audi","bmw","porsche" ]

for(i=0; i<word.length; i++){

    let wordcar=word[i];
    console.log(wordcar);
    if(wordcar.length>4){
       // console.log (`<h3> ${wordcar} </h3> `),
         return `<h3> ${wordcar} </h3> `
    }
     
    else{
       // console.log (`<p> ${wordcar}  </p> `),
        return  `<p> ${wordcar}  </p> `
    }

    document.log("car")+=`${wordcar } </br>`
    
};
//-------



var Product={

    name:"mercedes",

    pic:"./pic/merc.png",


    price:[ 40000,50000],

    

};

let Production =`<div class="card" style="width: 18rem;">
<img class="card-img-top" src="${Product.pic}" alt="Card image cap">
<div class="card-body">
  <h5 class="${Product.name}">Card title</h5>
  <p class="card-text">Price:${Product.price[0]}</p>
  <p class="card-text">Weight:${Pricecard.price[1]}</p>
  
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;


document.getElementById("card").innerHTML=Production;



