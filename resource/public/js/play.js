/* Show game name */	
$('.list').hoverIntent(function(){
		$(this).find('.game-name').slideDown(200, 'easeInOutCubic');							
	},
	function(){
		$(this).find('.game-name').slideUp(200, 'easeInOutCubic');
	}).click(function(){
							var href = $(this).find('a').attr('href');
							if (href != undefined) location.href = (href);
						});