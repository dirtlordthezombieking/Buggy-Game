let gl;
let aPos;
let posBuff;
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
		if(!program)
		{
			return;
		}
		document.getElementById("test").innerHTML="step (1/)";
		aPos=gl.getAttribLocation(program,"a_pos");
		document.getElementById("test").innerHTML="step (1/)";
		posBuff=gl.createBuffer();
		document.getElementById("test").innerHTML="step (1/)";
		gl.bindBuffer(gl.ARRAY_BUFFER,posBuff);
		document.getElementById("test").innerHTML="step (1/)";
		let positions=
		[
			0.0,0.0,
			0.0,0.5,
			0.7,0.0
		];
		document.getElementById("test").innerHTML="step ( 1/17)";
		gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(positions),gl.STATIC_DRAW);
		document.getElementById("test").innerHTML="step ( 2/17)";
		resizeCanvasToDisplaySize(gl.canvas);
		gl.viewport(0,0,gl.canvas.width,gl.canvas.height);
		document.getElementById("test").innerHTML="step ( 3/17)";
		gl.clearColor(0,0,0,1);
		document.getElementById("test").innerHTML="step ( 4/17)";
		gl.clear(gl.COLOR_BUFFER_BIT);
		document.getElementById("test").innerHTML="step ( 5/17)";
		gl.useProgram(program);
		document.getElementById("test").innerHTML="step ( 6/17)";
		gl.enableVertexAttribArray(aPos);
		document.getElementById("test").innerHTML="step ( 7/17)";
		gl.bindBuffer(gl.ARRAY_BUFFER,posBuff);
		document.getElementById("test").innerHTML="step ( 8/17)";
		let size=2;
		document.getElementById("test").innerHTML="step ( 9/17)";
		let type=gl.FLOAT;
		document.getElementById("test").innerHTML="step (10/17)";
		let normalize=false;
		document.getElementById("test").innerHTML="step (11/17)";
		let stride=0;
		document.getElementById("test").innerHTML="step (12/17)";
		let offset=0;
		document.getElementById("test").innerHTML="step (13/17)";
		gl.vertexAttribPointer(aPos,size,type,normalize,stride,offset);
		document.getElementById("test").innerHTML="step (14/17)";
		let primitiveType=gl.TRIANGLES;
		document.getElementById("test").innerHTML="step (15/17)";
		let count=3;
		document.getElementById("test").innerHTML="step (16/17)";
		gl.drawArrays(primitiveType,offset,count);
		document.getElementById("test").innerHTML="step (17/17)";
	}
}