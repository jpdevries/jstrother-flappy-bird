$(function() {
    $('#bird').velocity({ translateY: "-100vh" },0,function(){
          $('#bird').css({visibility:'visible'}).velocity({ translateY: "0" },{duration:1000, easing:'ease-out'});
    });
    $('#howTo-button')
        .velocity('transition.slideLeftIn', { duration: 2500 });
    $('#play-button')
        .velocity('transition.slideRightIn', { duration: 2500 });
});