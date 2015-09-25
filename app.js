$(document).ready(function() {
    $('.fa-bars').click(function() {
        $('.menu').toggle();
    })
    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
        $(".change-this-class li a").click(function() {
            // Update '.change-this-class' to the class of your menu
            // Leave this empty, that's the magic sauce
        });
    }
});
