kon = function() {
	$("#ed")
	.css({
		display: 'block',
		// transform: 'translateX(calc(100vw + 420px)) rotate(360deg)',
		
	})
	.transition({
		//translate: ['100vw + 420px',0],
		rotate: '360deg',
		duration: 2000,
	})
	.delay(2000).queue(function(next){
	    $(this)
	 //    .css("display", "none")
		// .css("transform", "initial")
	    next();
	});
}

var easter_egg = new Konami(kon);

// $("#box").css({ x: '30px' });               // Move right
// $("#box").css({ y: '60px' });               // Move down
// $("#box").css({ translate: [60,30] });      // Move right and down
// $("#box").css({ rotate: '30deg' });         // Rotate clockwise
// $("#box").css({ scale: 2 });                // Scale up 2x (200%)
// $("#box").css({ scale: [2, 1.5] });         // Scale horiz and vertical
// $("#box").css({ skewX: '30deg' });          // Skew horizontally
// $("#box").css({ skewY: '30deg' });          // Skew vertical
// $("#box").css({ perspective: 100, rotateX: 30 }); // Webkit 3d rotation
// $("#box").css({ rotateY: 30 });
// $("#box").css({ rotate3d: [1, 1, 0, 45] });