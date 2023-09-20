//last IG post
// tests here: https://reqbin.com/

var token = 'IGQWRQQ3VranVoTDJlREFjQUI2Wk9nWnFJVXFUOC1oNExMTmxiWlhORi1yS0N3MkpJNVMwWFJKX05Iel9oWnMtWFl6azBBOS1vSXhWczhCMWt2bDRLQ0x4QTI5aTVUal85M0NyaUExOGRuQQZDZD';
var igBase = 'https://graph.instagram.com/v17.0/me?fields=media&access_token='+token;

var mediaCount = 0;
var createIGPost = function (igObj) {
  console.log(igObj);
  var thumbnail;
  if(igObj.media_type != 'VIDEO'){
    thumbnail = igObj.media_url;
  } else {
    thumbnail = igObj.thumbnail_url;
  }
  
  
  //$('#theDiv').prepend('<img src="'+thumbnail+'" />')
  
}

// var runMedia = function (mediaIDs) {
//   console.log(mediaIDs)
//   var mediaArray = mediaIDs.media.data;

//   for (var i = mediaArray.length - 1; i >= 0; i--) {
    
//     if(i < 3 ){
//       var igURL = 'https://graph.instagram.com/' + mediaArray[i].id + '?fields=media_type,media_url,permalink,thumbnail_url,timestamp&access_token='+token;
//       fetch(igURL)
//         .then(response => response.json())
//         .then(json => createIGPost(json))

//       //console.log(mediaCount)    
      
//       //medias.push(mediaArray[i])
//       //createIGPost(mediaArray[i].id)
//     }
//   }
//   //console.log(medias)
// }
//fetch code
// var fetcher = fetch(igBase)
//    .then(response => response.json())
//    .then(json => runMedia(json))
  
// output: {"success":"true"}

//var $ = jQuery.noConflict();
/*jshint devel:true */
var prev;
var $window;
var nav;
var scroller;
jQuery( document ).ready( function() {
    prev = 0;
    // nav = $('header');
    // scroller = $('.arrow-container');
    var trap = $('.trap');
    var tipOption = $('.tip-options > span');
    var error = $('.error-message');
    var thanks = $('.thank-you');

    tipOption.click(function(){
      if($(this).hasClass('active')){

      } else {
        tipOption.removeClass('active')
        $(this).addClass('active')
        thanks.addClass('hidden');
      }
      trap.addClass('active');
    });
    trap.click(function(){
      if($(this).hasClass('active')){
        thanks.removeClass('hidden');
        console.log('asdasdasd')
        thanks.removeClass('hidden');
        thanks.text('Thank you. Your choice has been judged.');
        thanks.css('color', '#000');
        $('nav h1:not(.thank-you), nav h2, nav div' ).css('opacity',0.25)
        $('nav').delay( 2500 ).fadeOut( 250 );
      } else {
        thanks.text('Please choose a tip option first...');
        thanks.removeClass('hidden');
        thanks.css('color', 'red');
      } 
    });



// var flkty;
// var textInfo = $('#slido');
//   $('.flickity-slideshow').flickity({
//     // options
//     cellAlign: 'left',
//     contain: true,
//     prevNextButtons: false,
//     adaptiveHeight: true,
//     imagesLoaded: true,
//     // autoPlay: 4000,
//     wrapAround: true,
//     on: {
//     change: function( index ) {
//         //console.log(flkty.selectedElements);
//         var index = flkty.selectedIndex
//         console.log(index)
//         var active = $('.flickity-slideshow .slide-item').eq(index);
//         var attr = active.attr('info-text')
//         textInfo.text(attr)
//       }
//     }

//   });

// flkty = $('.flickity-slideshow').data('flickity')

// lottie
// var animation1 = bodymovin.loadAnimation({
//   container: document.getElementById('lottie-1'), // Required
//   path: 'lottie/melol.json', // Required
//   renderer: 'svg', // Required
//   loop: true, // Optional
//   autoplay: true, // Optional
//   //name: "Hello World", // Name for future reference. Optional.
// })

// var animation2 = bodymovin.loadAnimation({
//   container: document.getElementById('lottie-2'), // Required
//   path: 'lottie/bolt.json', // Required
//   renderer: 'svg', // Required
//   loop: true, // Optional
//   autoplay: true, // Optional
//   //name: "Hello World", // Name for future reference. Optional.
// })

// var animation3 = bodymovin.loadAnimation({
//   container: document.getElementById('lottie-3'), // Required
//   path: 'lottie/van.json', // Required
//   renderer: 'svg', // Required
//   loop: true, // Optional
//   autoplay: true, // Optional
//   //name: "Hello World", // Name for future reference. Optional.
// })

var animation3 = bodymovin.loadAnimation({
  container: document.getElementById('lottie-4'), // Required
  path: 'lottie/twirl.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  //name: "Hello World", // Name for future reference. Optional.
})

// animation1.setSpeed(1.25)
// animation2.setSpeed(1.25)
animation3.setSpeed(1.25)




// console.log(latestIGPosts)
// console.log('wow')
// fetch(igURL)
//    .then(response => response.json())
//    .then(json => console.log(JSON.stringify(json)))


}); // end of ready
