$(window).load(function() {
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
    $(".loader").delay(1500).fadeOut("slow");
    $(".overlayer").delay(1500).fadeOut("slow");
})
