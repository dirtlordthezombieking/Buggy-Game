function loadJavaScript(src)
{
	document.getElementById("test").innerHTML="test js1c";
	let sript=document.createElement('script');
	document.getElementById("test").innerHTML="test js2c";
	script.src=src;
	document.getElementById("test").innerHTML="test js3c";
	document.body.appendChild(script);
	document.getElementById("test").innerHTML="test js4c";
	return script;
}
function loadScript(src,type)
{
	let sript=document.createElement('script');
	script.src=src;
	script.type=type;
	document.body.appendChild(script);
	return script;
}