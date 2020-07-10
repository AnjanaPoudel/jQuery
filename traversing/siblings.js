$(document).ready(function(){
    // $("h2").siblings().css("border","2px solid green");
    // $("h2").siblings("h4").css("border","2px solid yellow");
    // $("h2").next().css("border","2px solid red");
    // $("span").nextAll().css("border","2px solid teal");
    $("span").nextUntil("h6").css("border","2px solid blue");

});