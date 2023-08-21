let startingItem = 3;
$(document).ready(function () {
    $('.carousel_data .carousel_item').each(function () {
        $('#carousel').append($(this).find('.image').html());
    });
    createCarousel();
});

function createCarousel() {
    $('div#carousel').roundabout({
        startingChild: startingItem,
        childSelector: 'img',
        tilt: -4.5,
        minOpacity:1,
        minScale: .45,
        duration: 1200,
        clickToFocus: true,
        clickToFocusCallback: showCaption
    });
    createBtns ();
}

function createBtns (){
    $('.nextItem').click(function(){
        hideCaption();
        $('div#carousel').roundabout('animateToNextChild', showCaption);
    });

    $('.prevItem').click(function(){
        hideCaption();
        $('div#carousel').roundabout('animateToPreviousChild', showCaption);
    });

    $('div#carousel img').click(function(){
        hideCaption();
    });
}
function hideCaption(){
    $('#captions').animate({'opacity':0}, 250);
}
function showCaption() {
    let childInFocus = $('div#carousel').data('roundabout').childInFocus;
    let setCaption = $('.carousel_data .carousel_item .caption:eq(' + childInFocus + ')').html();
    $('#captions').html(setCaption);
    let newHeight = $('#captions').height() + 'px';
    $('.caption_container').animate({'height': newHeight}, 100, function () {
        $('#captions').animate({'opacity': 1}, 250);
    });
}