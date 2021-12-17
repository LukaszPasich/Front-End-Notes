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


// innit
$.fn.hideHtmlSubmenus();
$.fn.hideCssSubmenus();
$.fn.hideJsSubmenus();