$(document).ready(function(){
    // $("#b1").click(function(){
    //     $("#p1").append(" "+"<b>this is appended text</b>");
    // });
    // $("#b2").click(function(){
    //     $("ol").append("<li>Dharan</li>");
    // });
    // $("#b3").click(function(){
    //     $("#p2").prepend("<b>prended text</b>");
    // });
    // $("#b4").click(function(){
    //     $("ul").prepend("<li>Nadipur</li>");
    // });

    // $("#btn1").click(function(){
    //     $("img").after("some text after");
    // });
    // // $("#btn2").click(function(){
    // //     $("img").before("some text before");
    // // });


    // $("#remov").click(function(){
    //     $("#div1").remove();
    // });

    $("#remov").click(function(){
        // $("#div1").empty();
        // $("p").remove(".test");
        $("p").remove(".test,.demo");
    });

});
// const severals = function() {
//     let txt1 = "<p>I </p>";
//     let txt2 = $("<p></p>").text("love");
//     let txt3 = document.createElement("b");
//     txt3.innerHTML = "<b>jQuery</b>";
//     $("img").after(txt1,txt2,txt3);
// }