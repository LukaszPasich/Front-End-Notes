// hide all sub-menus first
$.fn.hideHtmlSubmenus = function(){ 
    $('#collapsable-navbar-html').hide();
    $('#collapsable-navbar-html-mobile').hide();
}

$.fn.hideCssSubmenus = function(){ 
    $('#collapsable-navbar-css').hide();
    $('#collapsable-navbar-css-mobile').hide();
}

$.fn.hideJsSubmenus = function(){ 
    $('#collapsable-navbar-js').hide();
    $('#collapsable-navbar-js-mobile').hide();
}


// hide all tabs and show letter A first
$('.html-tags').hide();
$('#html-tags-a').show();
$('div > p.alpha-nav-button:first').addClass('alpha-nav-button-active').removeClass('alpha-nav-button-inactive');


// hide all tag descriptions
$('.tag-collapsable').hide();


// html button
$('#nav-button-html').on('click', function() {

    $.fn.hideCssSubmenus();
    $.fn.hideJsSubmenus();

    if ($(window).width() > 991.98) {
        if ( $('#collapsable-navbar-html').is(':hidden') ) {
            $('#collapsable-navbar-html').slideDown(200);
        } else {
            $('#collapsable-navbar-html').hide(200);
        }
    } else {
        if ( $('#collapsable-navbar-html-mobile').is(':hidden') ) {
            $('#collapsable-navbar-html-mobile').slideDown(200);
        } else {
            $('#collapsable-navbar-html-mobile').hide(200);
        }
}});


// css button
$('#nav-button-css').on('click', function() {

    $.fn.hideHtmlSubmenus();
    $.fn.hideJsSubmenus();

    if ($(window).width() > 991.98) {
        if ( $('#collapsable-navbar-css').is(':hidden') ) {
            $('#collapsable-navbar-css').slideDown(200);
        } else {
            $('#collapsable-navbar-css').hide(200);
        }
    } else {
        if ( $('#collapsable-navbar-css-mobile').is(':hidden') ) {
            $('#collapsable-navbar-css-mobile').slideDown(200);
        } else {
            $('#collapsable-navbar-css-mobile').hide(200);
        }
}});


// js button
$('#nav-button-js').on('click', function() {

    $.fn.hideHtmlSubmenus();
    $.fn.hideCssSubmenus();

    if ($(window).width() > 991.98) {
        if ( $('#collapsable-navbar-js').is(':hidden') ) {
            $('#collapsable-navbar-js').slideDown(200);
        } else {
            $('#collapsable-navbar-js').hide(200);
        }
    } else {
        if ( $('#collapsable-navbar-js-mobile').is(':hidden') ) {
            $('#collapsable-navbar-js-mobile').slideDown(200);
        } else {
            $('#collapsable-navbar-js-mobile').hide(200);
        }
}});


// alpha-buttons
$('.alpha-nav-button').on('click', function(e) {

    // get the letter (text) and attribute from the alpha-nav button
    var $alphaLetter = $(this).text().toLowerCase();
    var $dataPage = $(this).attr('data-page');   // !POSSIBLY REDUNDANT LINE

    // reset all buttons to inactive, then add active class to the clicked on button
    $('.alpha-nav-button').addClass('alpha-nav-button-inactive').removeClass('alpha-nav-button-active');
    $(this).addClass('alpha-nav-button-active').removeClass('alpha-nav-button-inactive');

    // reset all html tags pages, then show the page by the letter selected from alpha-nav
    $('.html-tags').hide();
    $('#html-tags-' + $alphaLetter).show();

});

// collapse tags
$('.tag-collapse').on('click', function() {

    if ( $(this).next().is(':hidden') ) {
            $(this).next().slideDown(300);
        } else {
            $(this).next().slideUp(300);
        }
});


// innit
$.fn.hideHtmlSubmenus();
$.fn.hideCssSubmenus();
$.fn.hideJsSubmenus();


// count number of HTML tags
allElements = $('.element-name');
allElementsCount = allElements.length;
console.log('HTML tags count: ' + allElementsCount);

// count number of HTML attributes
allAttributes = $('.element-attribute-name');
allAttributesCount = allAttributes.length;
console.log('HTML attributes count: ' + allAttributesCount);

// count number of CSS properties
allProperties = $('.property-name');
allPropertiesCount = allProperties.length;
console.log('CSS properties count: ' + allPropertiesCount);
