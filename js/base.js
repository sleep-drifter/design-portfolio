//var $ = jQuery.noConflict();
/*jshint devel:true */
var prev;
var $window;
var nav;
var scroller;
jQuery( document ).ready( function() {
    prev = 0;
    nav = $('header');
    scroller = $('.arrow-container');



var flkty;
var textInfo = $('#slido');
  $('.flickity-slideshow').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    adaptiveHeight: true,
    imagesLoaded: true,
    // autoPlay: 4000,
    wrapAround: true,
    on: {
    change: function( index ) {
        //console.log(flkty.selectedElements);
        var index = flkty.selectedIndex
        console.log(index)
        var active = $('.flickity-slideshow .slide-item').eq(index);
        var attr = active.attr('info-text')
        textInfo.text(attr)
      }
    }

  });

flkty = $('.flickity-slideshow').data('flickity')

// lottie
var animation1 = bodymovin.loadAnimation({
  container: document.getElementById('lottie-1'), // Required
  path: 'lottie/twirl.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  //name: "Hello World", // Name for future reference. Optional.
})

var animation2 = bodymovin.loadAnimation({
  container: document.getElementById('lottie-2'), // Required
  path: 'lottie/bolt.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  //name: "Hello World", // Name for future reference. Optional.
})

var animation3 = bodymovin.loadAnimation({
  container: document.getElementById('lottie-3'), // Required
  path: 'lottie/melol.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  //name: "Hello World", // Name for future reference. Optional.
})

animation1.setSpeed(1.25)
animation2.setSpeed(1.25)
animation3.setSpeed(1.25)
  

}); // end of ready

$(window).on('scroll', function(){
  var scrollTop = $(this).scrollTop();
  //console.log(scrollTop);

  nav.toggleClass('anchored', scrollTop < 300);
  if(scroller.length === 1){
  	scroller.toggleClass('hidden', scrollTop > 300);
  }
  
  // prev = scrollTop;
});


