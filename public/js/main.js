// styleswitcher
function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

window.onload = function(e) {
  var cookie = readCookie("style");
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);
}

window.onunload = function(e) {
  var title = getActiveStyleSheet();
  createCookie("style", title, 365);
}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);


$(function(){
	'use strict';

    // preloader
    $(".wrapper-load").fadeOut();

    // walkthrough
    $('.walkthrough-slider').carousel({
        indicators: true,
        duration: 120
    });

    // sidebar
	$(".side-left").sidenav();

    // sidebar
    $(".switcher-right").sidenav({
        edge: 'right'
    });

    // sidebar search
    $(".side-search").sidenav({
        edge: 'right'
    });

    // sidebar cart
    $('.side-cart').sidenav({
        edge: 'right'
    });

    // slider home
    $(".slide-show-home").owlCarousel({
        items: 1,
        navigation: true,
        slideSpeed: 1000,
        dots: true,
        paginationSpeed: 400,
        singleItem: true,
        loop: true
    });

    // all slider
	$(".slide-show").owlCarousel({
		items: 1,
		navigation: true,
		slideSpeed: 1000,
		dots: true,
		paginationSpeed: 400,
		singleItem: true,
		loop: true,
        autoplay: true
    });

    // carousel
    $(".slide-page").owlCarousel({
        items: 1,
        navigation: true,
        slideSpeed: 1000,
        dots: true,
        paginationSpeed: 400,
        singleItem: true,
        loop: true
    });    

    // modal
	$(".modal").modal();

    // tooltip
	$('.myTooltip').tooltip();

    // date
	$('.datepicker').datepicker();

    // testimonial
	$(".testimonial").owlCarousel({
		items: 1,
		navigation: true,
		slideSpeed: 1000,
		dots: true,
		paginationSpeed: 400,
		singleItem: true,
		autoplay: true,
		loop: true
	});

    // product-d-slide
    $(".b-seller-slide").owlCarousel({
        items: 2,
        slideSpeed: 1000,
        dots: true,
        paginationSpeed: 400,
        loop: false,
        margin: 10
    });

    // product-d-slide
    $(".product-d-slide").owlCarousel({
        items: 1,
        slideSpeed: 1000,
        dots: true,
        paginationSpeed: 400,
        loop: false,
        margin: 10
    });

    // slide walkthrough
    $(".wt-slide").owlCarousel({
        items: 1,
        navigation: true,
        slideSpeed: 1000,
        dots: true,
        paginationSpeed: 400,
        singleItem: true,
        loop: false
    });

    // tabs
	$('ul.tabs').tabs();

    // collapse
	$('.collapsible').collapsible();

    // link back
    $('.link-back').on('click', function() {
        window.history.back();
        return false;
    });

    // link to chat detail
    $('.wrap-chat-l .content-text').on('click', function() {
        window.location='chat-detail.html'
    });

    // time picker
    $('.timepicker').timepicker({
        isOpen: true,
    });

    // select
    $('select').formSelect();


});