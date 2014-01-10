youpass = [];

youpass.get = function(url, params){
	if(url.indexOf("youtube.com") == -1){
		return 'Invalid YouTube URL.';
	}else{
		if(params == undefined){
			params == '';
		}
		var a = url.replace("watch?v=","v/");
		var b = '<iframe width="640" height="360" type="application/x-shockwave-flash" frameborder="0" src="' + a + '&' + params + '"></iframe>';
		var c = b.replace(/,/g,"&");
		return c;
	}
}

// use the php version instead of this.
youpass.strip_id = function(url){
	if(url.indexOf("youtube.com") == -1){
		return 'Invalid YouTube URL.';
	}else{
		return url.substr(url.indexOf("=") + 1);
	}
}
