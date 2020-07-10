$(document).ready(function(){
    // $("#flip").click(function(){
    //     $("#panel").slideDown(2000);
    // });

    // $("#flip").click(function(){
    //     $("#panel").slideUp(2000);
    // });
    
    $("#flip").click(function() {
        $("#panel").slideToggle(2000);
    });

    $("#stop").click(function() {
        $("#panel").stop();
    });
});