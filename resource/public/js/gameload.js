//Game loading
var txtGameLoadBox = '<div id="gameload-box"><ul class="g-logo"><a href="http://friv25.tua.one" target="_blank">FRIV 10</a><em>Quality games every day!</em><li class="processbar"><span class="g-line"></span></li></ul></div>';
var percentage = 0;
var objGameFlash = $('object[class!="unity"]').get(0);
var b_version = navigator.appVersion;
var percentInt = setInterval("getPercentage()", 20);
$(objGameFlash).before(txtGameLoadBox);
var prarentGameLoadHeight = $(objGameFlash).height();
$('div#gameload-box .g-logo').css({'margin-top':(prarentGameLoadHeight-115)/2});
// Get Perventage
function getPercentage() {
	if(objGameFlash){
		try{
			if (b_version.indexOf('MSIE') != -1){
				percentage++;
				$('object').removeAttr('data')
			} else percentage = objGameFlash.PercentLoaded();
			if (percentage < 0 || typeof(percentage) == 'undefined') percentage = 100;
		}catch(e){}
	}else{
		percentage = 100;
	}
	if (percentage == 100){
		clearInterval(percentInt);
		$('div#gameload-box').remove();
	}
	$('div#gameload-box .processbar .g-line').css({width:percentage+'%'});
}