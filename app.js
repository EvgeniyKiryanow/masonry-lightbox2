$(window).load(function() {
    $(".loader").delay(1000).fadeOut("slow");
    $(".overlayer").delay(1000).fadeOut("slow");
})

$(".grid").imagesLoaded(function() {
    $(".grid").masonry({
        itemSelector: ".grid-item"
    });
});

lightbox.option({
    'wrapAround': true,
    'fadeDuration': 500,
    'imageFadeDuration': 500,
})