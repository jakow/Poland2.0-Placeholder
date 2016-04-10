var easter_egg = new Konami(function() {
	$("#ed")
	.css("display", "block")
	.css("transform", "translateX(calc(100vw + 420px)) rotate(360deg)")
	.delay(2000).queue(function(next){
	    $(this)
	    .css("display", "none")
		.css("transform", "initial")
	    next();
	});
});