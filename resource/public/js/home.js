$(window).ready(function(){
	/*Search Box*/
	$(".search-box input:first")
		.keyup(function (a) {
		var b = a.keyCode ? a.keyCode : a.which;
		if (b == 13) {
			var c = $(".search-box")
				.find("input:first")
				.val()
				.replace(/^[\s]+|[\s]+$/, "")
				.replace(/\./g, "_")
				.replace(
				/\'|\"|\^|\%|\)|\(|\;|\:|\?|\>|\<|\,|\.|\/|\$|\#|\@|\!|\~|\\/g,
				"")
				.replace(/[\s]+/g, "-") + "/";
			if (c != "/" && c != undefined) location.href=(url_base+c);
		}
	});
	$(".search-box input:last")
		.click(function(){
			var c = $(".search-box")
				.find("input:first")
				.val()
				.replace(/^[\s]+|[\s]+$/, "")
				.replace(/\./g, "_")
				.replace(
				/\'|\"|\^|\%|\)|\(|\;|\:|\?|\>|\<|\,|\.|\/|\$|\#|\@|\!|\~|\\/g,
				"")
				.replace(/[\s]+/g, "-") + "/";
			if (c != "/" && c != undefined) location.href=(url_base+c);
	});
	$('.logo h1').click(function(){
		location.href=(url_base);
	});	
	/*Load more*/
	$(window).scroll(function(){
	  if  ($(window).scrollTop() == $(document).height() - $(window).height()){
		ajaxAddItems('add', data_length);
	  }
	});
	
	/*Add more*/
	if (data_count < (S.columns * S.rows)+S.columns) {
		data_more = ((S.columns * S.rows)+S.columns) - data_count;
		ajaxAddItems('add', data_more);
	}else{
		if (data_count%S.columns != 0 && tag_name==0){
			var rows = Math.ceil(data_count/S.columns),
			games_numbs = rows * S.columns,
			data_more = games_numbs-data_count;
			ajaxAddItems('add', data_more);		
		}
	}	
});