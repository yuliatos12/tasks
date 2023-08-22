// $(document).ready(function () {
//   $("img.marquee_panel_photo").each(function (index) {
//     const photoWidth = $(".marquee_container").width();
//     const photoPosition = index * photoWidth;
//
//     $(".marquee_photos").append(
//       '<img class="marquee_photo" style="left:'+photoPosition+';" src="'+$(this).attr('src')+'" alt="'+$(this).attr('alt')+'" width="1200" height="450"/>'
//     );
//     $('.marquee_photos').css('width', photoPosition+photoWidth);
//   });
//
//   $('.marquee_panels .marquee_panel').each(function(index) {
//     $('.marquee_nav').append('<a class="marquee_nav_item"></a>');
//   });
//
//   $('.marquee_nav a.marquee_nav_item').click(function(){
//     $('.marquee_nav a.marquee_nav_item').removeClass('selected');
//     $(this).addClass('selected');
//
//     const navClicked = $(this).index();
//     const marqueeWidth = $('.marquee_container').width();
//     const distanceToMove = marqueeWidth * (-1);
//     const newPhotoPosition = navClicked * distanceToMove + 'px';
//
//     $('.marquee_photos').animate({left : newPhotoPosition}, 1000);
//   })
//
//   $('.marquee_panels img').imgpreload(function(){
//     initializeMarquee();
// });
let currentPanel = 1;
let totalPanels = 0;
let autoPlay = true;
let timePassed = 0;
let timeToChange = 3;
let photoWidth = 0;
function autoAdvance() {
  if (timePassed == timeToChange) {
    timePassed = 0;
    if (autoPlay == true) {
      if(currentPanel == totalPanels) {
        $(".marquee_nav a.marquee_nav_item:nth-child(1)").trigger("click");
      } else {
        $(".marquee_nav a.marquee_nav_item:nth-child(" + (currentPanel + 1) + ")").trigger("click");
      }

    }
  } else {
    timePassed += 1;
  }
  $(".timePassed").html("timePassed = " + timePassed);
  $(".autoPlay").html("autoPlay = " + autoPlay);
}

$(document).ready(function () {
  // debug

  $(".autoPlay").html("autoPlay = " + autoPlay);
  $(".timePassed").html("timePassed = " + timePassed);
  $(".timeToChange").html("timeToChange = " + timeToChange);
  $(".currentPanel").html("currentPanel = " + currentPanel);
  //
  setInterval(autoAdvance, 1000);
  photoWidth = $('.marquee_container').width();

  $('.marquee_container').hover(
      function() {
        autoPlay = false;
        $(this).removeClass('autoplay');
      },
      function(){
        autoPlay = true;
        timePassed = 0;
        $(this).addClass('autoplay');
      }
  );

  $("img.marquee_panel_photo").each(function (index) {
    const photoWidth = $(".marquee_container").width();
    const photoPosition = index * photoWidth;

    $(".marquee_photos").append(
        '<img class="marquee_photo" src="' +
        $(this).attr("src") +
        '" alt="' +
        $(this).attr("alt") +
        '" width="1200" height="450"/>'
    );
  });
  $('.marquee_photos img:last-child').clone().insertBefore('.marquee_photos img:first-child');
  $('.marquee_photos img:nth-child(2)').clone().insertAfter('.marquee_photos img:last-child');

  $('.marquee_photos img').each(function (index) {
    const photoPosition = index * photoWidth;
    $(this).css('left',photoPosition + 'px');
    $('.marquee_photos').css('width',photoPosition + photoWidth + 'px');
  });

  $('.marquee_photos').css('left', '-' + photoWidth + 'px');


  $(".marquee_panels .marquee_panel").each(function (index) {
    $(".marquee_nav").append('<a class="marquee_nav_item"></a>');
    totalPanels = index + 1;
    $(".totalPanels").html("totalPanels = " + totalPanels);
  });

  $(".marquee_nav a.marquee_nav_item").click(function () {
    $(".marquee_nav a.marquee_nav_item").removeClass("selected");
    $(this).addClass("selected");

    const navClicked = $(this).index();

    const distanceToMove = photoWidth * -1;
    let newPhotoPosition = (navClicked * distanceToMove) - photoWidth + "px";

    if (currentPanel == totalPanels && navClicked == 0) {
      newPhotoPosition = (photoWidth * (totalPanels + 1) * -1) + 'px';
      $('.marquee_photos').animate({left: newPhotoPosition}, 1000, function () {
        $('.marquee_photos').css('left', '-' + photoWidth + 'px');
      });
    } else if (currentPanel == 1 && navClicked == (totalPanels - 1)){
      newPhotoPosition = '0px';
      $('.marquee_photos').animate({left: newPhotoPosition}, 1000, function () {
        $('.marquee_photos').css('left', '-' + (photoWidth * totalPanels) + 'px');
      });
    } else {
      $(".marquee_photos").animate({ left: newPhotoPosition }, 1000);
    }

    currentPanel = navClicked + 1;
    $(".currentPanel").html("currentPanel = " + currentPanel);
  });

  $(".marquee_panels img").imgpreload(function () {
    initializeMarquee();
  });

});

function initializeMarquee(){
	$('.marquee_nav a.marquee_nav_item:first').addClass('selected');
	$('.marquee_photos').fadeIn(500);
	setCaption();
}
