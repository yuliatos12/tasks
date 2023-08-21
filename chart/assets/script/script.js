let barSpacing = 0;
let barWidth = 0;
let chartHeight = 0;
let chartHeightArea = 0;
let chartScale = 0;
let maxValue = 0;
let highestYlabel = 0;
let valueMultiplier = 0;

$(document).ready(function(){

    chartHeight = Number($('.chart-area').height());
    barWidth = $('.chart-area .chart-bar').width();
    highestYlabel = Number($('.chart-y-axis p').first().html());
    chartHeightArea = chartHeight - Number($('p.axis-value').first().height());
    chartScale = chartHeightArea / highestYlabel;
    barSpacing = Number($('.chart-area').attr('data-bar-spacing'));
    positionBars();

});

function positionBars(){
    $('.chart-area .chart-bar').each(function(index) {
        let barPosition = (barWidth * index) + (index * barSpacing) + barSpacing;

        $(this).css('left', barPosition + 'px');
        $(this).html('<p>' + $(this).attr('data-bar-value') + '</p>');
        $('.chart-x-axis').append('<p style="left:'+(barPosition - (barWidth / 2)) + 'px; " >' + $(this).attr('data-label') + '</p>');

        let barValue = Number($(this).attr('data-bar-value'));

        if(barValue > maxValue) {
            maxValue = barValue;
            valueMultiplier = maxValue / highestYlabel;
        }

    });
    animateChart();
}

function animateChart(){

    $('.chart-area .chart-bar').each(function(index) {
        let revisedValue = Number($(this).attr('data-bar-value')) * chartScale;
        let newDelay = 125 * index;
        $(this).delay(newDelay).animate({height: revisedValue},1000, function(){
            $(this).children('p').delay(500).fadeIn(250);
        });
    });

   $('.valueMultiplier').html('valueMultiplier = '+valueMultiplier);
   $('.highestYlabel').html('highestYlabel = '+highestYlabel);
   $('.maxValue').html('maxValue = ' +maxValue);
   $('.chartHeight').html('chartHeight = '+chartHeight);
   $('.chartHeightArea').html('chartHeightArea = '+chartHeightArea);
   $('.chartScale').html('chartScale = '+chartScale);
}