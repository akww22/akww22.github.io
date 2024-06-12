$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    })
});

$('.menu-btn').click(function(){
    $('.navbar .menubar').toggleClass("active");
    $('.menu-btn i').toggleClass("active"); 
});
