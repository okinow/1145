/* Get real SIZE */
var realSize = function(wpWidth, wpHeight, elThick, elWidth, elHeight){
	if (wpWidth != undefined){
		var bxWidth = elWidth + elThick, rows, 
			columns =  Math.floor(wpWidth/bxWidth),
			width = wpWidth/columns;
			height =  (elHeight == undefined || elHeight == elWidth) ? width : (elHeight*(width-elThick))/elWidth;
			rows = Math.floor(wpHeight/height);
			return {width:(width-elThick), height:height, columns:columns, rows:rows};
	}
}
/* BODY setting */
$(function(){
var articleLeft = parseInt($('.list').css('margin-left').replace(/[^\d]+/g, ''));
var elThick = articleLeft*2,
	wpWidth = $(window).width()- (elThick+2),
	wpHeight = $(window).height(),
	elWidth = 100,
	elHeight = 120;
	$('.body').css({'margin-top':(articleLeft+50)+'px','margin-left':articleLeft+'px'});	
var S = realSize(wpWidth, wpHeight, elThick, elWidth, elHeight),
	data_length = S.columns * 5;
		$('.body .list')
			.css({width:S.width, height:S.height})
			.hoverIntent(function(){
							$(this).find('.game-name').slideDown(200, 'easeInOutCubic');							
						},
						function(){
							$(this).find('.game-name').slideUp(200, 'easeInOutCubic');
						})
			.click(function(){
				var href = $(this).find('a').attr('href');
				if (href != undefined) location.href = (href);
			});
});
/* Add the games */	
var ajaxAddItems = function(data_action, data_length){
	if (!ajax_is_on) {
		ajax_is_on = true;
		$.post(url_base + '?module=home&ajax=1&act='+data_action, {count:data_count, length:data_length}, function (dataResult){																										
			if (dataResult) {
				$('.list:last').after(dataResult);
				$('.list')
				.css({width:S.width, height:S.height})
				.hoverIntent(function(){
							$(this).find('.game-name').slideDown(200, 'easeInOutCubic');							
						},
						function(){
							$(this).find('.game-name').slideUp(200, 'easeInOutCubic');
						});
				data_count = data_count + data_length;
				ajax_is_on = false;
			}else $('.load-box').hide(0);
		});
	}
}
