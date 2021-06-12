$(document).ready(function () {
    
    let prev = $(".select").prev();   //ზედა მეზობლის დასელექტეა
     prev.css("color","green");

     let next = $(".select").next("h4");   // next შემდეგი ელემენტის დასელექტება
     $(".select").nextAll().css("color","green");   
     $(".select").nextUntil("h4").css("color","green");     //nextAll ყველას ასელექტებს  nextUntill("h4") ამ სელექტროამდე იმოქმედებს
      next.css("color","blue")  ;

      let parent = $(".select").parent(); //მშობელი კლასის დასელექტება
      $(".select").parents("body").css("background-color","grey") // მშობლის მშობლის დასელექტება
      parent.css("background-color","grey")
      


      $(".select").parent().append("<h3>sdasd </h3>")     // ელემენტის შექმნა append
      $(".select").parent().prepend("<h3>sdasd </h3>")    //თავში ამატებს
        
  
      $(".parent").children("h4").css("background-color","blue")    //შვილზე იმოქმედებს
 

      $(".parent").children().eq(0).css("background-color","blue")  //eq(0) ჩაილდზე პირველს დაასელქტებს
    
      $(".parent").find(".select").css("background-color","blue")   //find() მოძებნის იმ კლასს

    //  $(".parent").empty() -წაშლის
  //  $(".parent").remove() -ყველაფერს შლის
  $().on("click",".remove", function () {             //append-ით შექმნილს რომ შევხედოთ 1 ქლიქზე გაეშვება

    $(this).parents("card").remove();
    parent.width("300px");   //წამოიღებს ზომას , თუ მივუთითებთ ზომას ის ზომა გახდება
                          // innerWidth(),outerWidth()
});
       


});