let gl;
let aPos;
let aTexCoord;
let uColour;
let uRes;
let posBuff;
let program;
let image;
function start()
{
	logMessage("start started");
	let canvas = document.querySelector("#canvas");
	gl = canvas.getContext("webgl");
	if(!gl)
	{
		document.getElementById("test").innerHTML="web gl not available";
		return;
	}
	program=createShaderProgram(gl,basicVertex,basicFragment);
	if(!program)
	{
		return;
	}
	resizeCanvasToDisplaySize(gl.canvas);
	logMessage("image load started");
	loadImage("images/stand in.png",function(img)
	{
		image=img;
		logMessage("image loaded");
		draw();
	});
}
function draw()
{
	logMessage("draw started");
	aPos=gl.getAttribLocation(program,"a_pos");
	aTexCoord=gl.getAttribLocation(program,"a_texCoord");
	uRes=gl.getUniformLocation(program,"u_res");
	uColour = gl.getUniformLocation(program,"u_colour");
	logMessage("values set");
//texcord
	let texCoordBuff=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,texCoordBuff);
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array
	(
		[
			0.0,0.0,
			1.0,0.0,
			0.0,1.0,
			0.0,1.0,
			1.0,0.0,
			1.0,1.0
		]
	),gl.STATIC_DRAW);
	gl.enableVertexAttribArray(aTexCoord);
	gl.vertexAttribPointer(aTexCoord,2,gl.FLOAT,false,0,0);
//texture
	let text=new Texture
//	let texture=gl.createTexture();
//	gl.bindTexture(gl.TEXTURE_2D,texture);
//	gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
//	gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
//	gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
//	gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
//	gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image);
	logMessage("image applied");
//position
	posBuff=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,posBuff);
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
	//for(var i=0;i<50;i++)
	//{
		setRectangle(gl,randomInt(300),randomInt(300),randomInt(300),randomInt(300));
	gl.uniform4f(uColour,Math.random(),Math.random(),Math.random(),1);
		gl.drawArrays(gl.TRIANGLES,0,6);
	//}
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
logMessage("Renderer Version: 0.0.2");