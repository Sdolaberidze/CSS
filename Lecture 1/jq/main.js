$(function () {
     
$.ajax({
    type: "method",
    url: "url",
    data: "data",
    dataType: "dataType",
    success: function (response) {
        
    }
});

$.ajax({
    type:"GET",           // რომელი მეთოდით მოგვაქ html
    url:"index2.html"   ,             // მისამართი საიდან მოგვქ
    data : {"status":1, "id":52},
    dataType:"text",
  /*   success:function(resp){                 //ამით დაგვიბრუდენბა პასუხი

       console.log(resp)                     
       $(".htm").html(resp)                     //წამოვიღეთ სხვა htmlში ჩაწერილი და დავამატეთ htm კლასშ

    }*/
    


})
    .done(function (response) {   //წარმატებული რესფონსი
        console.log(response)
         history.pushState(null, '', response)

    }) 
   .fail(function (response) {       //წარუმატებელი რესფონსი
       console.log(response.status)         //წამოიღებს 404ს
       console.log(response.statusText)    
       $(".htm").html("გვერდი ვერ მოიძებნა")     //გამოიტანს გვერდი ვერ მოიძებნა
       
   })

    $(".htm").load("index2.html")          ///მოთხოვნას აგზავნის მოაქვს რესფონსი
   
});