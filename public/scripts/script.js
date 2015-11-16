$(window).load(function(){
  // trigger Masonry after all content is loaded
  var $container = $('#container').imagesLoaded(function() {
      $container.masonry({
      itemSelector: '.box',
      columnWidth: '.item',
      animationOptions: {
        duration: 400
      }
    });
  });
// $('#container').masonry({
//   itemSelector: '.box'
// });

});
