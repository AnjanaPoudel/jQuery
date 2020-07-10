$(document).ready(function(){
    $("button").click(function(){
        let txt = "";
        txt += "Width: " + $("div").width() + "<br>";
        txt += "Height: " + $("div").height() + "<br>";
        txt += "InnerWidth: " + $("div").innerWidth() + "<br>";
        txt += "InnerHeight: " + $("div").innerHeight() + "<br>";
        txt += "OuterWidth: " + $("div").outerWidth() + "<br>";
        txt += "OuterHeight: " + $("div").outerHeight() + "<br>";
        txt += "OuterWidth(with margin): " + $("div").outerWidth(true)+ "<br>";
        txt += "OuterHeight(with margin): " + $("div").outerHeight(true);
        $("div").html(txt);
    });
});