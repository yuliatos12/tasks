$(document).ready(function () {
  $('.nav_menu .dropmenu').css('display', 'block');

  $('.nav_menu > ul').dropmenu({
      affect: 'slide',
      speed: 250,
      timeout: 0,
      nbsp : false
  });
  $('li').has('ul').find('> a').addClass('indicator');

});