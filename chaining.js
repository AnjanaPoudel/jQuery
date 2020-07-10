$(document).ready(function(){
    $("button").click(function(){
        $("div").css("color","white")
        .slideUp(2000)
        .slideDown(2000)
        .animate({left:'100px',height:'250px',width:'250px'},"slow");
    });
});