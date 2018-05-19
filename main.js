var premierDiv = document.querySelector('.premier-section');
var castleDiv = document.querySelector('.castle-section');
var premierButton = document.querySelector('.premier');
var castleButton = document.querySelector('.castle-rock');
var premierDetails = document.querySelector('.premier-details');
var castleDetails = document.querySelector('.castle-details');
var premierChevron = document.querySelector('.left-chevron-premier');
var castleChevron = document.querySelector('.left-chevron-castle');

// script that fades in elements on scroll

$(document).ready(function () {
    $(window).scroll(function () {
        $('.fade-in').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1'
                }, 1200);
            }

        });
    });
});

// script that slides in project title from left on scroll

$(document).ready(function () {
    $(window).scroll(function () {
        $('.slide-left').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'margin-left': '0px'
                }, 1000);
            }

        });
    });
});

// script that slides in items from right on scroll

$(document).ready(function () {
    $(window).scroll(function () {
        $('.slide-right').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({
                    'margin-right': '50%'
                }, 1000);
                console.log('slide right sucks')
            }

        });
    });
});
