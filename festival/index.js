//-------------------------------------//
// init Isotope

var $grid = $('.grid').isotope({
    itemSelector: 'none', // select none at first
    masonry: {
      columnWidth: '.grid__col-sizer',
      gutter: '.grid__gutter-sizer',
    },
    percentPosition: true,
    stagger: 30,
    // nicer reveal transition
    visibleStyle: { transform: 'translateY(0)', opacity: 1 },
    hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
  });
  
  // initial items reveal
  $grid.imagesLoaded( function() {
    $grid.removeClass('are-images-unloaded');
    $grid.isotope( 'option', { itemSelector: '.grid__item' });
    var $items = $grid.find('.grid__item');
    $grid.isotope( 'appended', $items );
  });
  
  //-------------------------------------//
  // hack CodePen to load pens as pages
  
  var nextPenSlugs = [
    '202252c2f5f192688dada252913ccf13',
    'a308f05af22690139e9a2bc655bfe3ee',
    '6c9ff23039157ee37b3ab982245eef28',
  ];
  
  function getPenPath() {
    var slug = nextPenSlugs[ this.loadCount ];
    if ( slug ) {
      return '/desandro/debug/' + slug;
    }
  }
  
  //-------------------------------------//
  // init Infinte Scroll
  
  // get Isotope instance
  var iso = $grid.data('isotope');
  
  $grid.infiniteScroll({
    path: getPenPath,
    append: '.grid__item',
    outlayer: iso,
    status: '.page-load-status',
  });
  