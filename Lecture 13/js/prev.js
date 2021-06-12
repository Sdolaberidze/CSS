$(document).ready(function () {
    
  $(".next").click(function (e) { 
    let checknext = $(".steps.active").next().length;  //შემდეგი ელემენტი გვაქ თი არა
   

    if( checknext > 0){                        //თუ შემდეგი ელემენტი ნულის ტოლი არაა  აქტივი დაემატება შემდეგ ელემნტს
       

    $(".steps.active").addClass("add").removeClass("active").next().addClass("active");
    }
    else{
        $(".next").html("finish");
        $(".prev").css("opacity","1")

    }
   
  });
  $(".prev").click(function (e) {                     //უკან წამოსვლა 
    let checknext = $(".steps.active").prev().length;

    if( checknext > 0){

    $(".steps.active").removeClass("active").prev().addClass("active");
    $(".next").html("next");
    }
    else{
        $(".prev").css("opacity","0");
        $(".next").css("opacity","1")
    }
  
  });





});