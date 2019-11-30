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

    // ========= Slick Slider ==========
    $('.workers').slick({
        infinite:true,
        slidesToShow:3,
        slidesToScroll:3,
        arrows:false,
        dots:true,
        dotsClass:'dots-style',
    });
});