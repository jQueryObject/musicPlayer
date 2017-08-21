;(function(window,document,$){
	'use strict';

	var $svg = $('#player-svg'),
		$svg_bg = $('.svg-bg',$svg),
		$svg_wrapper = $('.svg-wrapper',$svg),
		$svg_btn = $('.button',$svg).children(),
		$control = $('#player-bg').find('.control');
	$.each($control,function(i){
		$(this).on('click',function(){
			if(i){
				$svg_bg.attr('fill','#fff');
				$svg_wrapper.attr('fill','#958269');
				$svg_btn.attr('fill','#958269');
			}else{
				$svg_bg.attr('fill','#000');
				$svg_wrapper.attr('fill','#C59F1E');
				$svg_btn.attr('fill','#A2A4A5');
			}
		})
	});
})(window,document,jQuery)
