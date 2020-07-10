$(document).ready(function() {
    $("#b1").click(function(){
        $("#p1").text("this is changed paragraph");
    });
    $("#b2").click(function() {
        $("#p2").html("<b>hello people!</b>");
    });
    $("#b3").click(function(){
        $("#test").val("tom and jerry");
    });
    $("#b4").click(function(){
        $("#linkk").attr("href","https://www.youtube.com");
    });
});