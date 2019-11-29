$(document).ready(function() {

    $('button[filter="wd"]').click(function() {
        if ($(this).attr("val") == 'off') {

            $('button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');

            $('.portfolio-images > div').hide(400);     
            $('.portfolio-images > div[filter="wd"]').show(400); 
        }  
    });

    $('button[filter="ud"]').click(function() {
        if ($(this).attr("val") == 'off') {
            
            $('button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');

            $('.portfolio-images > div').hide(400);     
            $('.portfolio-images > div[filter="ud"]').show(400); 
        }  
    });

    $('button[filter="moc"]').click(function() {
        if ($(this).attr("val") == 'off') {
            
            $('button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');

            $('.portfolio-images > div').hide(400);     
            $('.portfolio-images > div[filter="moc"]').show(400); 
        }  
    });

    $('button[filter="all"]').click(function() {
        if ($(this).attr("val") == 'off') {

            $('button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');

            $('.portfolio-images > div').hide(400);     
            $('.portfolio-images > div[filter]').show(400); 
        }  
    });
});