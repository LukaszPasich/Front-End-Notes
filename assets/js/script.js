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
var alphaNavChildren = $('.alphabet-inner').children();
var alphaNavChildrenLength = alphaNavChildren.length;
var alphaNavFirstChildText = alphaNavChildren.slice(0,1).text().toLowerCase().replace(" ","-");

$('.html-tags').hide();

if (alphaNavChildrenLength !== 26) {
    $('#html-tags-' + alphaNavFirstChildText).show();
    $('div > p.alpha-nav-button:first').addClass('non-alpha-nav-button-active').removeClass('non-alpha-nav-button-inactive');
} else {
    $('#html-tags-a').show();
    $('div > p.alpha-nav-button:first').addClass('alpha-nav-button-active').removeClass('alpha-nav-button-inactive');
};


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
    var $alphaLetter = $(this).text().toLowerCase().replaceAll(' ', '-');
    var $dataPage = $(this).attr('data-page');   // !POSSIBLY REDUNDANT LINE

    // reset all buttons to inactive, then add active class to the clicked on button
    $('.alpha-nav-button').addClass('alpha-nav-button-inactive').removeClass('alpha-nav-button-active');
    $('.alpha-nav-button').addClass('non-alpha-nav-button-inactive').removeClass('non-alpha-nav-button-active');
    $(this).addClass('alpha-nav-button-active').removeClass('alpha-nav-button-inactive');
    $(this).addClass('non-alpha-nav-button-active').removeClass('non-alpha-nav-button-inactive');

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


// Time
var today = new Date();

var day = today.getDay();
var date = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();

let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let yearMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let weekDaysSliced = firstThreeLetters(weekDays);
let yearMonthsSliced = firstThreeLetters(yearMonths);
let yearSliced = year.toString().slice(2,4);

// Slices week days and months names to their first 3 letters
function firstThreeLetters(array) {
    let slicedArray = [];
    for (let a in array) {
        let aSliced = array[a].slice(0,3);
        slicedArray.push(aSliced);
    }
    return slicedArray;
}

var dateTh;
date === 1 || date === 21 || date === 31 ? dateTh = "st"
    : date === 2 || date === 22 ? dateTh = "nd"
    : date === 3 ? dateTh = "rd"
    : dateTh = "th"

$('#today-example').text(today);   // used in Date() object definition
$('#current-time').text(weekDays[day] + ", " + date + dateTh + " " + yearMonths[month] + " " + year);
$('#current-time-mobile').text(weekDaysSliced[day] + ", " + date + dateTh + " " + yearMonthsSliced[month] + " '" + yearSliced);
