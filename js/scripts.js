$(document).ready(function () {
    var trigger = document.getElementById('toggle');
    var box = document.getElementById('menu');

    toggle.addEventListener('click', function () {
        box.classList.toggle('active');
    })
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['', ' '],
        autoplay: true,
        dots: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },

            1000: {
                items: 5
            }
        }
    });
});
