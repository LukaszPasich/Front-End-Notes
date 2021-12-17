$('#collapsable-navbar-html').hide();

$('#nav-button-html').on('click', function() {
    if ( $('#collapsable-navbar-html').is(':hidden') ) {
        $('#collapsable-navbar-html').slideDown(200);
      } else {
        $('#collapsable-navbar-html').hide(200);
      }
});

