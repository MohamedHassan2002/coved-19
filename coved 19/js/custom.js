$(function(){
    $(".navbar-light .navbar-nav").on("click", ".nav-link" ,function(e){
      e.preventDefault();
     var destination = "#"+ $(this).data("scroll");
     var navHeight = ($(".navbar").outerHeight());
    $("html,body").animate({
      scrollTop : $(destination).offset().top - navHeight
    },500);

   });


});































































/*$(function(){
    $(".contant-1").click(function(){
        $(".contant-4").slideToggle("slow")
      });  
      // 
      $(".contant-2").click(function(){
        $(".contant-5").slideToggle("slow")
      });
      //
      $(".contant-3").click(function(){
        $(".contant-6").slideToggle("slow")
//////////////////////////////////////////////////
       $(".contant-1").click(function(){
           $(".contant-5 , .contant-6").slideUp("slow")});
             //////
             $(".contant-2").click(function(){
                $(".contant-4 , .contant-6").slideUp("slow")});
             ///////
             $(".contant-3").click(function(){
                $(".contant-4 , .contant-5").slideUp("slow")});
    });      
});*/
////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
/*$(function(){
    var newTask = $(".insert-task");
    $(".add-task").on("submit", function(e){
        e.preventDefault();
        if(newTask.val() != ""){
            $("<li class='list-group-item'>"+ newTask.val() +"</li>").appendTo("ul");
            newTask.val("");
        }
    });
    $("ul").on("click","li",function(){
        $(this).css("text-decoration","line-through").delay(200).fadeOut(400, function(){
        })
        $(this).remove();
    });
});*/

/////////////////////////////////////////////////////////////

/*$(function(){
      $(".blurelement").blur(function(){
         checkerror(); 
      });
      $(".submit").click(function(){
          checkerror();
      })


function checkerror()
{
    var emptyMail = $(".email").val() ;
          if (emptyMail == ""){
              $(".email").addClass("error");
              $("#emailHelp").slideDown(500);
              
          }else if(emptyMail.length <= 4){
            $(".email").addClass("error");
            $("#emailHelp").slideDown(500);
          }else{
              $(".email").addClass("success");
              $("#emailHelp").slideUp(500);
          }
          var emptyPassword = $(".Password").val() ;
        if (emptyPassword == ""){
            $(".Password").addClass("error");
            $("#passwordHelp").slideDown(500);

        }else if(emptyPassword.length <= 4){
          $(".Password").addClass("error");
          $("#passwordHelp").slideDown(500);

        }else{
            $(".Password").addClass("success");
            $("#passwordHelp").slideUp(500);

        }
}
 
    });*/
