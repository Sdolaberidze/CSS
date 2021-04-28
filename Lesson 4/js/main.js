let a=[1,23,45,56 ,"sdasd",["saxeli1","saxeli2"], {title:"testi"}];  // მასივის შექმნა
console.log(` ${a[1]} + ${a[2]} `);
console.log(a.toString().replace(",",""));  //მასივიდან ყველა ცვლადის წამოღება
console.log(a[0],a[1]);
console.log(a);
console.log(a[5][1], a[6].title ,"სდასდ")
console.log(a[a.length-1])   //ბოლო ელემენტის წამოღება
let age=[1,2,3,4,5,6,"732","sde" ,"sdasd",1]     //for  ციკლი რომელიც დაგვიწერს თუ რამდენია სიმბოლების რაოდენობა 
for(i=0; i<age.length; i++ ){
     console.log(age[i]);
     let age2 = age[i];

    
      if(age2.length>2){
           console.log("სიმბოლოების რაონდეიბ მეტია ორზე")
      }
       else{
            console.log("სიმბოლები ნაკლები ორზე")
       };



       document.getElementById("test").innerHTML += `${age2} <br> `;     ///+= წავა ციკლში რათა ჩამოწეროს რამოდენიმ
    

} 

let age3=[1,2,3,4,5,6];
age3.pop();    ///  ბოლოს მასივის წაშლა
age3.shift() ;   /// პირველი მასივის წაშლა  

/*age3.push(40);     // მასიბის ბოლოს დამატება
age3.unshift(34); */   // მასიბის დასაწყისში დამატება
console.log(age3)
