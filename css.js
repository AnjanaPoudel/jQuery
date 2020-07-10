$(document).ready(function(){
    // $("#button1").click(function(){
    //     $("h1,p").addClass("test");
    //     $("div").addClass("demo");
    // });

    // $("#button2").click(function(){
    //     $("h1,p").removeClass("test");
    // });

    // $("#button3").click(function(){
    //     $("h1,p").toggleClass("test");
    // });

    $("#btn").click(function(){
        let x = $("h1").css("background-color");
        console.log("Background color: " + x);
    });

    $("#btn1").click(function(){
        $("p").css({"background-color":"green","font-size":"30px","color":"white"});
    });
});