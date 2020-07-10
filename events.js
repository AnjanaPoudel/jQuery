$(document).ready(function(){
    $("p").dblclick(function() {
        $(this).hide();
    });
    // $("#p1").mouseenter(function() {
    //     alert("you entered the mouse!");
    // });
    // $("#p1").mouseleave(function() {
    //     alert("Bye you now leave p1!");
    // });

//     $("#p1").hover(function() {
// document.getElementById("p2").innerHTML = "You entered p1!";
//     },
//     function() {
// document.getElementById("p2").innerHTML = "You leave p1!";
//     });

    $("input").focus(function() {
        $(this).css("background-color","teal");
    });
    $("input").blur(function() {
        $(this).css("background-color","white");
    });

    $("#p2").on({
        mouseenter: function(){
            $(this).css("background-color","yellow");
        },
        mouseleave: function(){
            $(this).css("background-color","red");
        },
        click: function(){
            $(this).css("background-color","blue");

        }
    });
});