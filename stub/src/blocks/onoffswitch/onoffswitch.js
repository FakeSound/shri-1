module.exports = {
    init: function($){
        $(document).on('click', '.onoffswitch', function(){
            var defClass = 'theme_color_project-default',
                invClass = 'theme_color_project-inverse',
                $default = $('.' + defClass),
                $inverse = $('.' + invClass);

            $(this).toggleClass('onoffswitch_checked');

            $default
                .toggleClass(defClass)
                .toggleClass(invClass);

            $inverse
                .toggleClass(defClass)
                .toggleClass(invClass);
        });        
    }
}