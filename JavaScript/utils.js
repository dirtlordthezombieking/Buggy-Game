function loadJavaScript(src)
{
	document.getElementById("test").innerHTML="test js1";
	var sript=document.createElement("script");
	document.getElementById("test").innerHTML="test js2";
	script.src=src;
	document.getElementById("test").innerHTML="test js3";
	document.body.appendChild(script);
	document.getElementById("test").innerHTML="test js4";
	return script;
}
function loadScript(src,type)
{
	var sript=document.createElement("script");
	script.src=src;
	script.type=type;
	document.body.appendChild(script);
	return script;
}