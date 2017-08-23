$(document).ready(function(){
	var elWrap = $('.chars');
	var	visual = $('.slider');
	var	carousel = visual.children('.slide-wrap');
	var	visible = 1;
		itemWidth = carousel.children().outerWidth(),
		itemsTotal = carousel.children().length,
		autoChange = 5000,
		btnNext = $('.slider__arrow--right'),
		btnPrev = $('.slider__arrow--left');

	visual.css({'width': visible * itemWidth + 'px'});
	
	carousel.css({'width': itemsTotal * itemWidth,	'left': 0});
	
	function changeLeft () {
		var item = carousel.children().eq(0);
		btnNext.off('click', changeLeft);		
		carousel.animate({left: -itemWidth}, 1500, function() {
			item.appendTo(carousel);		
			carousel.css({"left": 0 });	
			btnNext.on('click', changeLeft);
		});
	}	
	
	function changeRight () {
		var item = $(carousel).children().eq(-1);
		item.prependTo(carousel);
		carousel.css({"left": -itemWidth});		
		btnPrev.off('click', changeRight);		
		carousel.animate({left: 0}, 1500, function() {
			btnPrev.on('click', changeRight);
		});
	}	
	
	var interval = setInterval(changeLeft, autoChange);

	btnNext.on('click', changeLeft);	
	btnPrev.on('click', changeRight);	
	
	elWrap.mouseover(function() {
		clearInterval(interval);
	});
	
	elWrap.mouseout(function() {
		interval = setInterval(changeLeft, autoChange);
	});	
});

