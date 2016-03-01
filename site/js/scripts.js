$(function() {
    $('#bird')
        .velocity({ translateY: "0vh" }, { duration: 10000 });
    $('#howTo-button')
        .css('display', 'inline')
        .velocity('transition.slideLeftIn', { duration: 2500 });
    $('#play-button')
        .css('display', 'inline')
        .velocity('transition.slideRightIn', { duration: 2500 });
});