youpass = [];

youpass.get = function(url, params){
	if(url.indexOf("youtube.com") == -1){
		return 'Invalid YouTube URL.';
	}else{
		if(params == undefined){
			params == '';
		}
		var a = url.replace("watch?v=","v/");
		var b = '<iframe width="640" height="360" frameborder="0" src="' + a + '&' + params + '"></iframe>';
		var c = b.replace(/,/g,"&");
		return c;
	}
}

youpass.strip_id = function(url){
	if(url.indexOf("youtube.com") == -1){
		return 'Invalid YouTube URL.';
	}else{
		var a = url.replace("http://www.youtube.com/watch?v=","");
		var b = a.replace("youtube","");
		var c = b.replace("https","");
		var d = c.replace("watch?v=","");
		return d;
	}
}