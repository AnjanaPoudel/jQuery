$(document).ready(function() {
    // $("button").click(function(){
    //     $("#box").animate({left:'300px',
    // width: '150px',
    // // height: '150px',
    // height: 'toggle',
    // opacity: '0.5'
    // });
    // });

    $("#button1").click(function() {
        $("div").animate({height:'150px'},"slow");
        $("div").animate({width:'150px'},"slow");
        $("div").animate({height:'100px'},"slow");
        $("div").animate({width:'100px'},"slow");

    });

    $("#button2").click(function() {
        $("div").animate({left:'200px',fontSize:'3em',height:'200px',width:'300px'},"slow");
    });


});