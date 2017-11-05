/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'https://raw.githubusercontent.com/prayashm97/prayashm97.github.io/staging/assets/particles.json', function () {
  console.log('callback - particles.js config loaded')
})

var cbpAnimatedHeader = (function () {
  var docElem = document.documentElement,
    header = $('#header-nav'),
    didScroll = false,
    changeHeaderOn = 300

  function init () {
    window.addEventListener('scroll', function (event) {
      if(!didScroll) {
				didScroll = true
				setTimeout(scrollPage, 250)
			}
		}, false)
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			// classie.add( header, 'cbp-af-header-shrink' );
      header.addClass( "header-nav-shrink" );
      $('#particles-js').hide();
		}
		else {
			// classie.remove( header, 'cbp-af-header-shrink' );
      header.removeClass( "header-nav-shrink" );
      $('#particles-js').show();
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();

var $root = $('html, body')
$('a').click(function() {
    var href = $.attr(this, 'href')
    $root.animate({
        scrollTop: $(href).offset().top - 130
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});
