let gl;

function start()
{
	document.getElementById("test").innerHTML="retrieving web gl";
	let canvas = document.querySelector("#canvas");
	gl = canvas.getContext("webgl");
	if(!gl)
	{
		document.getElementById("test").innerHTML="web gl not available";
	}
	else
	{
		document.getElementById("test").innerHTML="successfully retrieved web gl:\n\tloading shader program \"basic\"";
		var program=createShaderProgram(gl,"basic-");
		let inLog=document.getElementById("test").innerHTML+":\n";
		document.getElementById("test").innerHTML=inLog+"successfully loaded basic shader";
	}
}