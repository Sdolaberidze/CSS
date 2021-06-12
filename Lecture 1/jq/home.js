$(function () {
    $(".nav-link").click(function () { 

       let attr = $(this).data("name");    
        console.log(attr)
       $.ajax({
            type: "GET",
            url: attr,
            data: {"status":1, "id":52},
            dataType: "text",
            success: function (response) {
                $(".htm").html(response);
                
            }

          
        })
        .fail(function (response) {
           
            $(".htm").html(response.statusText);
            
        })
       

      // $(".htm").load(attr)
        
    });
       

});