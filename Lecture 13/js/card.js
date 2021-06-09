$(function () {
     $(".colors").click(function (e) { 
       let dataclass=  $(this).attr("data-class");
       console.log(dataclass)
       $(".img").attr("src",dataclass);


         
     });
    



});