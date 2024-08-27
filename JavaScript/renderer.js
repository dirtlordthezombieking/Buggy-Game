let gl;
let aPos;
let uRes;
let posBuff;
function start()
{
	let canvas = document.querySelector("#canvas");
	gl = canvas.getContext("webgl");
	if(!gl)
	{
		document.getElementById("test").innerHTML="web gl not available";
		return;
	}
	var program=createShaderProgram(gl,basicVertex,basicFragment);
	if(!program)
	{
		return;
	}
}