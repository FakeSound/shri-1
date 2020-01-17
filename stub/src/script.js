var $ = jQuery = window.jQuery = require('jquery'),
    EAccordion = require('./blocks/e-accordion/e-accordion'),
    OnOffSwitch = require('./blocks/onoffswitch/onoffswitch');

$(document).ready(function(){
    EAccordion.init($);
    OnOffSwitch.init($);
});