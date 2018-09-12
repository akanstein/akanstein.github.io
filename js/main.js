
$(document).ready(function(){

    if($('#banner').is(':visible')){
        runSlides();
    }

});

function runSlides(){

        animotion('#first','bounceInUp','delay-2s');
        setTimeout(function(){
            animotion('#second','bounceInUp','delay-3s');
        }, 4000);

        setTimeout(function(){
            animotion('#third','bounceInUp','delay-5s');
        },8000);
        
        setTimeout(function(){
            animotion('#fourth','bounceInUp','delay-5s');
        },14000);
        
}

function animotion(element,animation,delay){
    $(element).removeClass('first');
    $(element).addClass(animation)
    .one('MSAnimationEnd webkitAnimationEnd mozAnimationEnd oanimationend animationend',
    function(){
        $(this).removeClass(animation);
        $(this).addClass('fadeOutUp '+ delay).
        one('MSAnimationEnd webkitAnimationEnd mozAnimationEnd oanimationend animationend',
        function(){
            $(element).addClass('first');
        });
    });   

}