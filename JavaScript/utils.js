function loadJavaScript(src)
{
	document.getElementById("test").innerHTML="test js1d";
	let script=document.createElement("script");
	document.getElementById("test").innerHTML="test js2d";
	script.src=src;
	document.getElementById("test").innerHTML="test js3d";
	document.body.appendChild(script);
	document.getElementById("test").innerHTML="test js4d";
	return script;
}
function loadScript(src,type)
{
	let script=document.createElement("script");
	script.src=src;
	script.type=type;
	document.body.appendChild(script);
	return script;
}