function createShader(gl,type,source)
{
	let inLog=document.getElementById("test").innerHTML+":\n\t\t\t";
	document.getElementById("test").innerHTML=inLog+"creating base shader";
	let shader=gl.createShader(type);
	document.getElementById("test").innerHTML=inLog+"adding code";
	gl.shaderSource(shader,source);
	document.getElementById("test").innerHTML=inLog+"compiling";
	gl.compileShader(shader);
	var success=gl.getShaderParameter(shader,gl.COMPILE_STATUS);
	if(success)
	{
		document.getElementById("test").innerHTML=inLog+"shader compiled";
		return shader;
	}
	//console.log(gl.getShaderInfoLog(shader));
	document.getElementById("test").innerHTML=inLog+"shader failed:\n"+gl.getShaderInfoLog(shader)+"\n\t\t\tIn:\n"+source;
	gl.deleteShader(shader);
}
function createShaderProgram(gl,vertexCode,fragmentCode)
{
	let inLog=document.getElementById("test").innerHTML+":\n\t\t";
	document.getElementById("test").innerHTML=inLog+"compiling vertex code...";
	let vertexShader=createShader(gl,gl.VERTEX_SHADER,vertexCode);
	inLog=document.getElementById("test").innerHTML+":\n\t\t";
	document.getElementById("test").innerHTML=inLog+"compiling fragment code...";
	let fragmentShader=createShader(gl,gl.FRAGMENT_SHADER,fragmentCode);
	inLog=document.getElementById("test").innerHTML+":\n\t\t";
	document.getElementById("test").innerHTML=inLog+"compiling program";
	var program=gl.createProgram();
	document.getElementById("test").innerHTML=inLog+"attaching vertex code";
	gl.attachShader(program,vertexShader);
	document.getElementById("test").innerHTML=inLog+"compiling fragment code";
	gl.attachShader(program,fragmentShader);
	document.getElementById("test").innerHTML=inLog+"linking code";
	gl.linkProgram(program);
	document.getElementById("test").innerHTML=inLog+"validating shader";
	let success=gl.getProgramParameter(program,gl.LINK_STATUS);
	if(success)
	{
		document.getElementById("test").innerHTML=inLog+"shader complied successfully";
		return program;
	}
	//console.log(gl.getProgramInfoLog(program));
	document.getElementById("test").innerHTML=inLog+"shader failed to compile";
	gl.deleteProgram(program);
}