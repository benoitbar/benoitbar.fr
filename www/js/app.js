$(document).foundation();
jQuery(function($) {
  $(window).lazyLoadXT();

  var $grid = $('#grid'),
    $sizer = $grid.find('.shuffle__sizer');
  setTimeout(function() {
    $grid.shuffle({
      itemSelector: '.columns',
      sizer: $sizer
    });
  }, 100);
});
