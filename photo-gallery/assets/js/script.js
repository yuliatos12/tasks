$(document).ready(function () {

  $(".gallery_thumbnails a").click(function (e) {
    e.preventDefault();

    const photoCaption = $(this).attr('title');
    const photoFullSize = $(this).attr('href');
    const photoPreview = photoFullSize.replace("_fullsize", "_preview");

    $('.gallery_caption').slideUp(500);
    $('.gallery_preview').fadeOut(500, function () {

      $('.gallery_preload_area').html('<img src="' + photoPreview + '"/>');
      $('.gallery_preload_area img').imgpreload(function () {
        $('.gallery_preview').html(
          '<a data-fancybox="gallery" class="overlaylink" data-caption="'+photoCaption+'" title="' +
            photoCaption +
            '" href="' +
            photoFullSize +
            '"  style="background-image: url(' +
            photoPreview +
            ');"></a>'
        );
        $('.gallery_preview').fadeIn(500);
        $('.gallery_caption').html(
          '<p><a data-fancybox="gallery" class="overlaylink" title="' +
            photoCaption +
            '" href="' +
            photoFullSize +
            '" >View larger</a></p><p>' +
            photoCaption +
            "</p>"
        );
        $('.gallery_caption').slideDown(500);

        // setFancyBox();
        updateThumbnails();
      });
    });
  });
  const firstPhotoCaption = $('.gallery_thumbnails a').first().attr('title');
  var firstPhotoFullsize = $('.gallery_thumbnails a').first().attr('href');
  var firstPhotoPreview = firstPhotoFullsize.replace("_fullsize", "_preview");
  $(".gallery_preview").html(
    '<a data-fancybox="gallery" class="overlayLink" title="' +
    firstPhotoCaption +
      '" href="' +
      firstPhotoFullsize +
      '" style="background-image:url(' +
      firstPhotoPreview +
      ');"></a>'
  );
  $(".gallery_caption").html(
    '<p><a data-fancybox="gallery" class="overlayLink" title="' +
    firstPhotoCaption +
      '" href="' +
      firstPhotoFullsize +
      '">View larger</a></p><p>' +
      firstPhotoCaption +
      '<a href="' +
      firstPhotoFullsize +
      '" style="background-image:url(' +
      firstPhotoPreview +
      ');"></a></p>'
  );
  updateThumbnails();
//   setFancyBox();
});

// function setFancyBox() {
//   $("a.overlaylink").fancybox({
//     'titlePosition' : 'over',
//     'overlayColor' : '#000',
//     'overlayOpacity' : 0.8,
//     'transitionIn' : 'elastic',
//     'transitionOut' : 'elastic',
//     'autoScale' : true
//   });

// }

function updateThumbnails() {
  $(".gallery_thumbnails a").each(function () {
    if ($(".gallery_preview a").attr("href") == $(this).attr("href")) {
      $(this).addClass("selected");
      $(this).children().fadeTo(250, 0.4);
    } else {
      $(this).removeClass("selected");
      $(this).children().css("opacity", "1");
    }
  });
}
