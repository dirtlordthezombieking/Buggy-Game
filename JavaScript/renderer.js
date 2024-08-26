let gl;

function start()
{
	document.getElemntById("test").innerHTML="retrieving web gl";
	let canvas = document.querySelector("#canvas");
	gl = canvas.getContext("webgl");
	if(!gl)
	{
		document.getElemntById("test").innerHTML="web gl not available";
	}
	else
	{
		document.getElemntById("test").innerHTML="successfully retrieved web gl";
	}
}