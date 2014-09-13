/*
 * Autor Leonardo López <leonard_156@hotmail.com>
 * @HijinLopez twitter
 * Tepache Hacklab 9 de septiembre de 2014
 */

(function($){
    $.fn.slideRight = function(options){
        
        var settings = $.extend( {
            speed           : 3000,
            effect_speed    : 1000
        }, options);

        return this.each(function(){
            var counter = 0;
            var Images = $(this).find('li');
            var cant_images =  Images.size();
            var width_img = Images.eq(counter).width();
            Images.hide();
            Images.eq(counter).show();
            setInterval(
                function(){
                    if(counter < cant_images - 1){
                        Images.eq(counter + 1).css({left : width_img});
                        Images.eq(counter + 1).show();
                        Images.eq(counter).animate({left:-width_img},settings.effect_speed);
                        counter++;
                        Images.eq(counter).animate({left : 0},settings.effect_speed);
                    }
                    else{
                        Images.eq(0).css({'left' : width_img});
                        Images.eq(counter).show();
                        Images.eq(counter).animate({left : -width_img},settings.effect_speed);
                        counter = 0;
                        Images.eq(counter).animate({left : 0},settings.effect_speed);
                    }
                },
                settings.speed
            );
        });
    }
}(jQuery));
