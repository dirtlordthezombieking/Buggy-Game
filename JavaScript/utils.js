function loadJavaScript(src)
{
	let script=document.createElement("script");
	script.src=src;
	script.type="text/javascript";
	//script.async=true;
	document.body.appendChild(script);
	return script;
}
//https://raw.githubusercontent.com/dirtlordthezombieking/BuggyGame/
function loadScript(src,type)
{
	let script=document.createElement("script");
	script.src=src;
	script.type=type;
	script.async=true;
	document.body.appendChild(script);
	return script;
}