$(function(){
        $('a').each(function(){
            if ($(this).prop('href') == window.location.href) {
                $(this).addClass('on'); $(this).parents('li').addClass('on');
            }
        });
    });