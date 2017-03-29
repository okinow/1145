/*SWF box - sorting*/
var wWIDTH = $(window).width(),
	wHeight = $(window).height(),
	SWFBoxWidth = $('.swf').width() + 20,
	SWFBoxHeight = $('.SWF-box').height();
var S = {cols336:356, cols300:320, cols200:220, cols160:180, cols120:140, cols100:120};
/*
1. cols336 & cols300 & cols336
2. cols160 + S.cols120
3. cols100
*/
var C =[
	'SWFBoxWidth',
	'S.cols100 + SWFBoxWidth',
	'S.cols120 + SWFBoxWidth',
	'S.cols160 + SWFBoxWidth',
	'S.cols200 + SWFBoxWidth',
	'S.cols120 + SWFBoxWidth + S.cols100',//220
	'S.cols160 + SWFBoxWidth + S.cols100',//260
	'S.cols160 + SWFBoxWidth + S.cols120',//280
	'S.cols300 + SWFBoxWidth',//300
	'S.cols200 + SWFBoxWidth + S.cols120',//320
	'S.cols336 + SWFBoxWidth',//336
	'S.cols200 + SWFBoxWidth + S.cols160',//360
	'S.cols120 + S.cols100 + SWFBoxWidth + S.cols160',//380
	'S.cols300 + SWFBoxWidth + S.cols100',//400
	'S.cols300 + SWFBoxWidth + S.cols120',//420
	'S.cols336 + SWFBoxWidth + S.cols100',//436
	'S.cols336 + SWFBoxWidth + S.cols120',//456
	'S.cols300 + SWFBoxWidth + S.cols160',//460
	'S.cols336 + SWFBoxWidth + S.cols160',//496
	'S.cols300 + SWFBoxWidth + S.cols200',//500
	'S.cols300 + SWFBoxWidth + S.cols100 + S.cols120',//520
	'S.cols300 + SWFBoxWidth + S.cols100 + S.cols160',//570
	'S.cols300 + SWFBoxWidth + S.cols120 + S.cols160',//580
	'S.cols336 + SWFBoxWidth + S.cols100 + S.cols120',//556
	'S.cols336 + SWFBoxWidth + S.cols100 + S.cols160',//596
	'S.cols200 + S.cols100 + SWFBoxWidth + S.cols300',//600
	'S.cols336 + SWFBoxWidth + S.cols160 + S.cols120',//616
	'S.cols300 + SWFBoxWidth + S.cols200 + S.cols120',//620
	'S.cols336 + SWFBoxWidth + S.cols120 + S.cols200',//656
	'S.cols160 + S.cols200 + SWFBoxWidth + S.cols300',//660
	'S.cols160 + S.cols200 + SWFBoxWidth + S.cols336',//696
	'S.cols160 + S.cols200 + SWFBoxWidth + S.cols100 + S.cols300',//760
	'S.cols160 + S.cols200 + SWFBoxWidth + S.cols100 + S.cols336',//760
	'S.cols160 + S.cols200 + S.cols100 + SWFBoxWidth + S.cols300 + S.cols120',//760
	'S.cols160 + S.cols200 + S.cols100 + SWFBoxWidth + S.cols336 + S.cols120'//760
	];
/* Setting */	
var marginBoth = 0,
	fullScreen = wWIDTH - marginBoth;

/*Sorting function*/	
var fnSorting = function(classList){
	var _left=0,
		classList = classList.replace(/S\./g, '.').replace(/\+/g, ', ').replace('SWFBoxWidth', '.colsSWF'),
		items = classList.split(', ');
	$.each(items, function(idx, ID){
		$(ID)
			.show(0)
			.css({left:_left});
		_left = _left + $(ID).width();
		if (ID == '.colsSWF') _left = _left + $('.swf').width();
		if(idx==0) $(ID).css('border-left', '0');
		if(idx==(items.length-1)) $(ID).css('border-right', '0');
	});
	$('.SWF-box').css({width:_left+2});
}
var isCreated = false;
$.each(C.reverse(), function(idx, val){
	if (fullScreen >= eval(val) && !isCreated) {
		fnSorting(val);
		isCreated = true;
	}			   
});
if (wHeight - SWFBoxHeight > 20){
	$('.pBOX').css({'margin-top':(wHeight - SWFBoxHeight)/2});
}
/* Load bottom the ads */
var SWFheader = $('.SWF-header').height(),
	swf = $('.swf').height(),
	pum6 = $('.pum6').height();
var widthBottom = SWFBoxWidth-20,
	heightBottom = SWFBoxHeight - (SWFheader + swf);
if (heightBottom <=0) { $('.SWFbottom').remove(); $('.swf').css({'margin-bottom':10, border:'1px solid #0c0c61', boxSizing:'border-box'}) }
else if (widthBottom >= 738){
	if (heightBottom > 110 + pum6) {
		$('ul.bt-ads').show(0).css({width:728, height:90, 'margin-top':(heightBottom-(110 + pum6))/2});
		$('.pum6').show(0);
	}else if(heightBottom > 110){
		$('ul.bt-ads').show(0).css({width:728, height:90, 'margin-top':(heightBottom-110)/2});
	}else if(heightBottom > 80){
		$('ul.bt-ads').show(0).css({width:468, height:60, 'margin-top':(heightBottom-80)/2});
	}else if(heightBottom > 50){
		$('.pum6').show(0).css({'border-bottom':'0', 'margin-top':(heightBottom-60)/2});
	}
}else if(widthBottom >= 488){
	if(heightBottom > 80 + pum6){
		$('ul.bt-ads').show(0).css({width:468, height:60, 'margin-top':(heightBottom-(80+pum6))/2});
		$('.pum6').show(0);
	}else if(heightBottom > 80){
		$('ul.bt-ads').show(0).css({width:468, height:60, 'margin-top':(heightBottom-80)/2});
	}else if(heightBottom > 50){
		$('.pum6').show(0).css({'border-bottom':'0', 'margin-top':(heightBottom-60)/2});
	}
}else $('.pum6').show(0).css({'border-bottom':'0', 'margin-top':(heightBottom-60)/2});


/* Show game name */	
$('.list').hoverIntent(function(){
		$(this).find('.game-name').slideDown(200, 'easeInOutCubic');							
	},
	function(){
		$(this).find('.game-name').slideUp(200, 'easeInOutCubic');
	});