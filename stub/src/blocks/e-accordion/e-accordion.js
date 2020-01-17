module.exports = {
    init: function($){
        $(document).on('click', '.e-accordion__short', function(){
            $(this)
                .siblings('.e-accordion__more')
                .toggleClass('e-accordion__more_shown');
        });        
    }
}