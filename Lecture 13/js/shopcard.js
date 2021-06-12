$(document).ready(function () {
  
 


    $(".add").click(function (e) { 
      let price=   $(this).parents(".card").children(".price").text()
      let imgsrc=  $(this).parents(".card").find("img").attr("src")
      let title =   $(this).parents(".card").find(".card-text").text()
      $(".empty").css("opacity","1")



     
  

        $(".shop").append(

          

     `  
        <div class="card" style="width:10rem;">
    <img src="${imgsrc}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <h5 class="card-title price">${price}</h5>
       <div class="btn remove btn-danger ">remove</div>
    </div>
  
 
  
  `
  

          );
        $(document).on("click",".remove",function () {  
          $(this).parents(".card").remove()

          let check = $(".card").length                // არის თუ არა eleement შიგნით

          console.log(check)
          if(check ==0){                                 //წაიშალოს emptyბათონი თუ არა არის შიგნით
            $(".empty").css("display","none")
            

          }




        })

        $(document).on("click",".empty", function () {               // გაასუფთავებს ყველა ქარდს თვითონ გაქრება

          $(this).css("opacity","0").parent().children(".card").remove()
          
        })

      



        
       
        
    });


    
  
 



});