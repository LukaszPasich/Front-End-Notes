$('#collapsable-navbar-html').hide();
$('#collapsable-navbar-html-mobile').hide();

$('#nav-button-html').on('click', function() {
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


