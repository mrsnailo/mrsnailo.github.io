var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
 // Main.
 var $main = $('#main'),
 exifDatas = {};

// Thumbs.
$main.children('.thumb').each(function () {

 var $this = $(this),
     $image = $this.find('.image'), $image_img = $image.children('img'),
     x;

 // No image? Bail.
 if ($image.length == 0)
     return;

 // Image.
 // This sets the background of the "image" <span> to the image pointed to by its child
 // <img> (which is then hidden). Gives us way more flexibility.

 // Set background.
 $image.css('background-image', 'url(' + $image_img.attr('src') + ')');

 // Set background position.
 if (x = $image_img.data('position'))
     $image.css('background-position', x);

 // Hide original img.
 $image_img.hide();

 // Hack: IE<11 doesn't support pointer-events, which means clicks to our image never
 // land as they're blocked by the thumbnail's caption overlay gradient. This just forces
 // the click through to the image.
 if (skel.vars.IEVersion < 11)
     $this
         .css('cursor', 'pointer')
         .on('click', function () {
             $image.trigger('click');
         });

 // EXIF data					
 EXIF.getData($image_img[0], function () {
     exifDatas[$image_img.data('name')] = getExifDataMarkup(this);
 });

});