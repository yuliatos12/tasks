$(document).ready(function (){
    $('#mapForm').change(function (){
       let selectedContinent = $('#mapForm option:selected').val();
       if (selectedContinent == 'ALL') {
          $('a.dot').show(1000);
       } else {
           $('a.dot[continent*='+selectedContinent+']').show(1000);
           $('a.dot[continent!='+selectedContinent+']').hide(1000);
       }
    });

    $('a.dot').click(function () {
        $('a.dot').removeClass('selected');
        $(this).addClass('selected');

        let city = '.city_detail#' + $(this).attr('city');
        let markup = $(city).html();

        $('.detail_container').fadeOut(500, function (){
            $('.detail_container .city_detail').html(markup);
            $('.detail_container').fadeIn(500);
        });
    });
});