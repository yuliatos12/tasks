$(document).ready(function () {
    $('.faq_question').click(function () {
        if ($(this).parent().is('.open')) {
            $(this).closest('.faq').find('.faq_answer_container').animate({'height': '0'}, 500);
            $(this).closest('.faq').find('.letter_a').fadeOut(500);
            $(this).closest('.faq').find('.letter_q').animate({'left':'25px'});
            $(this).closest('.faq').removeClass('open');
        } else {
            let newHeight = $(this).closest('.faq').find('.faq_answer').height() + 'px';
            $(this).closest('.faq').find('.faq_answer_container').animate({'height': newHeight}, 500);
            $(this).closest('.faq').find('.letter_a').fadeIn(500);
            $(this).closest('.faq').find('.letter_q').animate({'left': '10px'});
            $(this).closest('.faq').addClass('open');
        }
    });
    findAnchor();
    $('.faq').each(function () {
        $(this).append('<div class="letter_q"></div><div class="letter_a"></div>');
    });

});

function findAnchor() {
    if (location.href.indexOf('#') != -1) {
        let anchor = location.hash;
        let faqToFind = anchor + '.faq_question';
        $(faqToFind).trigger('click');
    }
}