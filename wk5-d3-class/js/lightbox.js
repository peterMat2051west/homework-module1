$(document).ready(function () {

    $('.cliff-card img').click(function () {
        $('.backdrop').animate({'opacity': '.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        if ($('.box').contents('img')) {
            $('.box').contents().remove('img');
        }

        var img = $(this).clone();
        $('.box').append(img);
    });

    $('.close, .backdrop').click(function () {
        $('.backdrop').animate({'opacity': '0'}, 300, 'linear', function () {
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});
