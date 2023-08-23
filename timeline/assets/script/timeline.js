let timelineWidth = 0;
let panelWidth = 0;
let firstRun = true;
let totalPanels = 0;
let currentPanel = 0;

$(document).ready(function () {
    panelWidth = $('.timeline .panel').width();
    timelineWidth = $('.timeline').width();
    totalPanels = $('.timeline .panel').length;

    adjustLayout();

});

function adjustLayout() {
    $('.timeline .panel').each(function (index) {
        let newX = panelWidth * index;
        $(this).css('left', newX + 'px');

        let newLabel = $(this).find('.label').html();
        $('.timeline nav').append('<a href="#">' + newLabel + '</a>');
    });

    currentPanel = $('.timeline nav a:last-child').index();
    activateNav();
}

function activateNav() {
    $('.timeline nav a').on('click', function () {
       currentPanel = $(this).index();
        timelineWidth = $('.timeline').width();
       $('.timeline nav a').removeClass('selected');
       $(this).addClass('selected');

       let timelineOffset = (timelineWidth - panelWidth) * .5;
       let newPosition = ((currentPanel * panelWidth) * -1) + timelineOffset;

       $('.panel_slider').animate({left: newPosition + 'px'},1000);
    });
}

