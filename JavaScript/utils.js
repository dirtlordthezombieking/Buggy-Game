function loadJavaScript(src)
{
	var sript=document.createElement('script');
	script.src=src;
	document.body.appendChild(script);
	return script;
}
function loadScript(src,type)
{
	var sript=document.createElement('script');
	script.src=src;
	script.type=type;
	document.body.appendChild(script);
	return script;
}