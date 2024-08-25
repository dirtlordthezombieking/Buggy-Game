function loadJavaScript(src)
{
	document.getElementById("test").innerHTML="test js1b";
	let sript=document.createElement("script");
	document.getElementById("test").innerHTML="test js2b";
	script.src=src;
	document.getElementById("test").innerHTML="test js3b";
	document.body.appendChild(script);
	document.getElementById("test").innerHTML="test js4b";
	return script;
}
function loadScript(src,type)
{
	let sript=document.createElement("script");
	script.src=src;
	script.type=type;
	document.body.appendChild(script);
	return script;
}