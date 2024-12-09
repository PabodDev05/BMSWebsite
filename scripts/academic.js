$(document).ready(function() {
    $(window).on('scroll', function() {
        $('.fade-in').each(function() {
            var elementPosition = $(this).offset().top;
            var windowPosition = $(window).scrollTop() + $(window).height();

            if (elementPosition < windowPosition) {
                $(this).addClass('visible');
            }
        });
    });
    // Trigger scroll event to animate elements that are already in view on load
    $(window).scroll();
});
