function createShader(gl,type,source)
{
	let shader=gl.createShader(type);
	gl.shaderSource(shader,source);
	gl.compileShader(shader);
	var success=gl.getShaderParameter(shader,gl.COMPILE_STATUS);
	if(success)
	{
		return shader;
	}
	logMessage("Shader failed:\n"+gl.getShaderInfoLog(shader)+"\nIn:\n"+source);
	gl.deleteShader(shader);
}
function createShaderProgram(gl,vertexCode,fragmentCode)
{
	let vertexShader=createShader(gl,gl.VERTEX_SHADER,vertexCode);
	let fragmentShader=createShader(gl,gl.FRAGMENT_SHADER,fragmentCode);
	var program=gl.createProgram();
	gl.attachShader(program,vertexShader);
	gl.attachShader(program,fragmentShader);
	gl.linkProgram(program);
	let success=gl.getProgramParameter(program,gl.LINK_STATUS);
	if(success)
	{
		return program;
	}
	document.getElementById("test").innerHTML="shader failed to compile";
	gl.deleteProgram(program);
}
function resizeCanvasToDisplaySize(canvas)
{
	const displayWidth=canvas.clientWidth;
	const displayHeight=canvas.clientHeight;
	const needResize=canvas.width!==displayWidth||canvas.height!==displayHeight;
	if(needResize)
	{
		canvas.width  = displayWidth;
		canvas.height = displayHeight;
	}
	return needResize;
}
function logMessage(msg)
{
	document.getElementById("test").innerHTML=document.getElementById("test").innerHTML+"\n"+msg;
}
function loadImage(src,finishImageLoad)
{
	logMessage("load started");
	var image=new Image();
	logMessage("image created");
	image.src=//"https://raw.githubusercontent.com/dirtlordthezombieking/Buggy-Game/main/"+
	src;
	logMessage("data applied");
	image.onload=function()
	{
		logMessage("image load successful");
		try
		{
			finishImageLoad(image);
		}
		catch(e)
		{
			logMessage("error:\n"+e.message);
		}
	};
}
logMessage("Utils Version: 0.0.7");
//testing
function loadScrip(src,onFinishAction)
{
	let script=document.createElement('script');
	script.onload=function()
	{
		onFinishAction()
	};
	script.src=src;
	document.body.appendChild(script);
}