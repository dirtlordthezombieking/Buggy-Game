function loadJavaScript(src)
{
	let script=document.createElement("script");
	script.src=src;
	script.type="text/javascript";
	script.async=true;
	document.body.appendChild(script);
	return script;
}
//https://github.com/dirtlordthezombieking/Buggy-Game/blob/dirtlordthezombieking-patch-6/JavaScript%2Frenderer.js
function loadScript(src,type)
{
	let script=document.createElement("script");
	script.src=src;
	script.type=type;
	script.async=true;
	document.body.appendChild(script);
	return script;
}