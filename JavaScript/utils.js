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
	document.getElementById("log").innerHTML=document.getElementById("log").innerHTML+"\n"+msg;
}
function loadImage(src,finishImageLoad)
{
	let image=new Image();
	image.src=//"https://raw.githubusercontent.com/dirtlordthezombieking/Buggy-Game/main/"+
	src;
	image.onload=function()
	{
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
async function getTextData(src,onDone)
{
	const url="https://raw.githubusercontent.com/dirtlordthezombieking/Buggy-Game/main/"+src;
	try
	{
		const response=await fetch(url);
		if(!response.ok)
		{
			throw new Error("Error: "+response.status);
		}
		const text=await response.text();
		onDone(text);
	}
	catch (e)
	{
		logMessage("Error: "+e.message);
	}
}
function glSetup(gl)
{
	gl.enable(gl.CULL_FACE);
	gl.enable(gl.DEPTH_TEST);
	gl.viewport(0,0,gl.canvas.width,gl.canvas.height);
}
function glStartFrame(gl,r,g,b,a)
{
	gl.clearColor(r,g,b,a);
	gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
}
logMessage("Utils Version: 0.0.11 (0)");