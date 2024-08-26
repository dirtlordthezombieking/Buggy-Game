function loadJavaScript(src)
{
	document.getElementById("test").innerHTML="test script 1";
	let script=document.createElement("script");
	document.getElementById("test").innerHTML="test script 2";
	script.src=src;
	document.getElementById("test").innerHTML="test script 3";
	script.type="text/javascript";
	document.getElementById("test").innerHTML="test script 4";
	//script.async=true;
	document.getElementById("test").innerHTML="test script 5";
	document.body.appendChild(script);
	document.getElementById("test").innerHTML="test script 6";
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