$(document).ready(function() {
    $("#button1").click(function() {
        $("#div1").fadeIn(2000);
        $("#div2").fadeIn(2000);
        $("#div3").fadeIn(2000);
    });
    $("#button2").click(function(){
        $("div").fadeOut(3000);
    });

    $("#button3").click(function() {
        $("div").fadeToggle(2000);
    });

    $("#div1").on({
        click: function() {
        $(this).fadeTo("slow",0.2);
        }
    });

});