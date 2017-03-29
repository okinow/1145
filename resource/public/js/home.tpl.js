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
		if (c != "" && c != undefined) location.href=(url_base+c);
	}
});