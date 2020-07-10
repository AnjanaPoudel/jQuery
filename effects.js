

$(document).ready(function() {
$("#hide").click(function() {
    $("p").hide();
});

$("#show").click(function() {
    $("p").show(1000);
});

$("#togg").click(function() {
    $("p").toggle();
});
});