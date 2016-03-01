$(function() {
    $('#bird')
        .css('display', 'block')
        .velocity({ top: '-100%' }, { duration: 2500 });
    $('#howTo-button')
        .css('display', 'inline')
        .velocity('transition.slideLeftIn', { duration: 2500 });
    $('#play-button')
        .css('display', 'inline')
        .velocity('transition.slideRightIn', { duration: 2500 });
});