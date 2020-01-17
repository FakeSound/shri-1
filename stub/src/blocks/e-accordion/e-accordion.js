module.exports = {
    init: function($){
        $('body').on('click', '.e-accordion__short', function(){
            $(this)
                .siblings('.e-accordion__more')
                .toggleClass('e-accordion__more_shown');
        });        
    }
}