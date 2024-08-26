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
	aPos=gl.getAttribLocation(program,"a_pos");
	uRes=gl.getUniformLocation(program,"u_res");
	posBuff=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,posBuff);
	let positions=
	[
		10.0,20.0,
		80.0,20.0,
		10.0,30.0,
		10.0,30.0,
		80.0,20.0,
		80.0,30.0
	];
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(positions),gl.STATIC_DRAW);
	resizeCanvasToDisplaySize(gl.canvas);
	gl.viewport(0,0,gl.canvas.width,gl.canvas.height);
	gl.clearColor(0,0,0,1);
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.useProgram(program);
	gl.enableVertexAttribArray(aPos);
	gl.bindBuffer(gl.ARRAY_BUFFER,posBuff);
	let size=2;
	let type=gl.FLOAT;
	let normalize=false;
	let stride=0;
	let offset=0;
	gl.vertexAttribPointer(aPos,size,type,normalize,stride,offset);
	gl.uniform2f(uRes,gl.canvas.width,gl.canvas.height);
	let primitiveType=gl.TRIANGLES;
	let count=6;
	gl.drawArrays(primitiveType,offset,count);
}