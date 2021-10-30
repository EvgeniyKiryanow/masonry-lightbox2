Instruction

First add Jquery current version 3.6.0
- <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
Add lightbox2
1)<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/css/lightbox.css">
2)<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/js/lightbox.min.js"></script>
Preloader img 
- <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
Masonry 
- <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>

html masonry must have =>
wraper than a(link to img) img with two data
1)data-tittle = out title
2)data-lightbox = if we wont use lightbox for this image

Example => in html code

In app.js => 

Preloader delay 
$(window).load(function() {
    $(".loader").delay(1000).fadeOut("slow");
    $(".overlayer").delay(1000).fadeOut("slow");
})

Masonry option with preloader 
$(".grid").imagesLoaded(function() {
    $(".grid").masonry({
        itemSelector: ".grid-item"
    });
});

Lightbox option 
lightbox.option({
    'wrapAround': true,
    'fadeDuration': 500,
    'imageFadeDuration': 500,
})
