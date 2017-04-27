var App = (function () {

  //=== Use Strict ===//
  'use strict';

  //=== Private Variables ===//
  var gallery = $('#js-gallery');

  //=== Gallery Object ===//
  var Gallery = {
    zoom: function(imgContainer, img) {
      var containerHeight = imgContainer.outerHeight(),
      src = img.attr('src');
      
      if ( src.indexOf('/products/normal/') != -1 ) {
        // Set height of container
        imgContainer.css( "height", containerHeight );
        // Switch hero image src with large version
        img.attr('src', src.replace('/products/normal/', '/products/zoom/') );      
      }
    },
    switch: function(trigger, imgContainer) {
      var src = trigger.attr('href'),
      thumbs = trigger.siblings(),
			img = trigger.parent().prev().children();

      // Switch image source
      img.attr('src', src);
    }
  };

  //=== Public Methods ===//
  function init() {

    // Listen for clicks on anchors within gallery
    gallery.delegate('a', 'click', function(event) {
      var trigger = $(this);
      var triggerData = trigger.data("gallery");

      if ( triggerData === 'zoom') {
        var imgContainer = trigger.parent(),
        img = trigger.siblings();
        Gallery.zoom(imgContainer, img);
      } else if ( triggerData === 'thumb') {
        var imgContainer = trigger.parent().siblings();
        Gallery.switch(trigger, imgContainer);
      } else {
        return;
      }

      event.preventDefault();
    });

  }

  //=== Make Methods Public ===//
  return {
    init: init
  };

})();

App.init();