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
	let uColour = gl.getUniformLocation(program,"u_colour");
	for(var i=0;i<50;i++)
	{
		setRectangle(gl,randomInt(300),randomInt(300),randomInt(300),randomInt(300));
	gl.uniform4f(colorUniformLocation,Math.random(),Math.random(),Math.random(),1);
		gl.drawArrays(gl.TRIANGLES,0,6);
	}
}
function randomInt(range)
{
	return Math.floor(Math.random()*range);
}
function setRectangle(gl,x,y,width,height)
{
	var x1=x;
	var x2=x+width;
	var y1=y;
	var y2=y+height;
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array
	(
		[
			x1,y1,
			x2,y1,
			x1,y2,
			x1,y2,
			x2,y1,
			x2,y2
		]
	),gl.STATIC_DRAW);
}