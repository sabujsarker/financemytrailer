$(document).ready(function(){
    $(".spinner-spin ").click(function(){
        $(".menu").slideToggle(400);
    })
    $(".spinner-spin ").click(function(){
        $(".menu ").addClass("showMenu")
    })
})
$(window).scroll(function(){
    if($(window).scrollTop()>10){
        $(".menus") .addClass("menujq");
    }
    else{
        $(".menus").removeClass("menujq");
    }
})