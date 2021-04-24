let Pricecard={
    name:"Apple watch",
    pic:"pic/watch.png",
    weight:200,
    price:300,
    quantity:4,

    value:function(){
        return  this.quantity*this.price;
      
    },
    compare: function(){
        if(this.quantity>0){
            return`"In  stock ${this.quantity}"`
        }
        else{
            return"out of stock"
        }
    },

}
Pricecard.value();
Pricecard.compare();

let Production:`<div class="card" style="width: 18rem;">
<img class="card-img-top" src="${Pricecard.pic}" alt="Card image cap">
<div class="card-body">
  <h5 class="${Pricecard.name}">Card title</h5>
  <p class="card-text">Price:${Pricecard.price}</p>
  <p class="card-text">Weight:${Pricecard.weight}</p>
  <p class="card-text">Quantity:${Pricecard.quantity</p>
    
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;


document.getElementById(card).innerHTML=Production;
