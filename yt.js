fetch('https://www.youtube.com/@HiruTVPlus/live')
	.then((response) => {
	  return response.text();
	})
	.then((data) => {
	  num = data.indexOf('hlsManifestUrl');
	  //console.log(num);
	 hlsurl = data.slice(num);
	  console.log(hlsurl.substring(17, hlsurl.indexOf('"},"heartbeatParam')));
	//location.replace(hlsurl.substring(17, hlsurl.indexOf('"},"heartbeatParam')))
	

	});
