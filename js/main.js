$(document).ready(function() {
    // ============= Portfolio Items ==========
    $('button[filter]').click(function() {
        if ($(this).attr("filter") == 'all') {
            $('button[filter]').removeClass('active');
            $(this).addClass('active');
            if ($(this).attr("val") == 'off') {

                $(this).addClass('active');
                $('button[filter]').attr('val', 'off');
                $(this).attr('val', 'on');
    
                $('.portfolio-images > div').hide(400);     
                $('.portfolio-images > div[filter]').show(400); 
            } 
        } else {
            $('button[filter]').removeClass('active');
            $(this).addClass('active');
            if ($(this).attr('val') == 'off') {
                $('button[filter]').attr('val', 'off');
                $(this).attr('val', 'on');

                $('.portfolio-images > div').hide(400);
                var filter = $(this).attr("filter");
                $('.portfolio-images > div[filter='+filter+']').show(400);
            }
        }   
    });


    // ========= MENU SLIDER SCROLL ===========
    $('ul.menu > li > a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top,
        },700);
    })

    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn(300);
        } else {
            $('#toTop').fadeOut(300);
        }
    });
    $('#toTop').on('click', function() {
        $('body, html').animate({
            scrollTop:0,
        }, 800);
    });


    // ========= ADAPTIVE MENU =========
    $('button.menu-icon').on('click', function() {
        $('nav').slideToggle(500);  
        $('nav > ul').css({
            'display':'flex',
            'flex-direction':'column',
        });
        if ($('.menu-icon').html() == '<i class="fas fa-bars"></i>') {
            $(this).html('<i class="far fa-times-circle"></i>');
        } else {
            $(this).html('<i class="fas fa-bars"></i>');
        }
    });


    // ========= Slick Slider ==========
    $('.workers').slick({
        infinite:true,
        slidesToShow:3,
        slidesToScroll:3,
        arrows:false,
        dots:true,
        dotsClass:'dots-style',
        responsive : [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:2,
                    vertical:true,
                }
            }
        ]
    });
});