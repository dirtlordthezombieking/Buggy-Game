let gl;
let aPos;
let aTexCoord;
let uColour;
let uRes;
let program;
let image;
function start()
{
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
	loadImage("images/stand in.png",function(img)
	{
		image=img;
		draw();
	});
}
function draw()
{
//texcord
	let aTexCoord=new Attribute(2,program,"a_texCoord",new Float32Array
	(
		[
			0.0,0.0,
			1.0,0.0,
			0.0,1.0,
			0.0,1.0,
			1.0,0.0,
			1.0,1.0
		]
	));
	aTexCoord.use();
//texture
	let text=new Texture(program,"u_colourTexture",image,0);
	text.push();
	text.use();
//position
	gl.viewport(0,0,gl.canvas.width,gl.canvas.height);
	gl.clearColor(0,0,0,1);
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.useProgram(program);
	uRes=new Uniform(2,program,"u_res",[gl.canvas.width,gl.canvas.height])
	uRes.use()
		let aPos=new Attribute(2,program,"a_pos",setRectangle(gl,randomInt(300),randomInt(300),randomInt(300),randomInt(300)));
	aPos.use();
	uColour=new Uniform(4,program,"u_colour",[Math.random(),Math.random(),Math.random(),1])
	uColour.use()
	gl.drawArrays(gl.TRIANGLES,0,6);
}
function randomInt(range)
{
	return Math.floor(Math.random()*range);
}
function setRectangle(gl,x,y,width,height)
{
	let x1=x;
	let x2=x+width;
	let y1=y;
	let y2=y+height;
	return new Float32Array
	(
		[
			x1,y1,
			x2,y1,
			x1,y2,
			x1,y2,
			x2,y1,
			x2,y2
		]
	);
}
logMessage("Renderer Version: 0.0.4 (0)");