$(document).ready(function(){
    // $("li").parent().css("border","2px solid red");
    // $("li").parents().css("border","2px solid red");
    $("li").parents("ul,div").css("border","2px solid red");
    // $("li").parentsUntil("div").css("border","2px solid red");


});