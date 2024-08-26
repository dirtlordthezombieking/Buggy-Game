let gl;
let aPos;
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
		document.getElementById("test").innerHTML="successfully retrieved web gl:\n\tLoading GL shader program \"basic\"...";
		var program=createShaderProgram(gl,basicVertex,basicFragment);
		let inLog=document.getElementById("test").innerHTML+":\n";
		document.getElementById("test").innerHTML=inLog+"successfully loaded basic shader";
		aPos=gl.getAttribLocation(program"a_pos");
	}
}