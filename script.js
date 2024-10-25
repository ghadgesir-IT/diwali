$(document).ready(function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = $(".slide");
        slides.hide(); // Hide all slides
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; } // Reset to first slide
        slides.eq(slideIndex - 1).fadeIn(); // Show current slide
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }

    window.plusSlides = function(n) {
        slideIndex += n;
        if (slideIndex > slides.length) { slideIndex = 1; }
        if (slideIndex < 1) { slideIndex = slides.length; }
        $(".slide").hide(); // Hide all slides
        $(".slide").eq(slideIndex - 1).fadeIn(); // Show current slide
    };
});
