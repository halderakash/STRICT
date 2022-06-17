$(document).ready(function(){
    $('.back-to-top').click(function(){
        $('html,body').animate({scrollTop:0});
    });
    $(window).scroll(function(){
        var scrollar = $(this).scrollTop();

        if(scrollar > 500){
            $(".back-to-top").fadeIn(500);
        }
        else {
            $(".back-to-top").fadeOut(500);
        };
        if(scrollar > 200){
            $(".header-section").addClass("header-bg")
        }
        else{
            $(".header-section").removeClass("header-bg")
        }
    });
   
});

new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});