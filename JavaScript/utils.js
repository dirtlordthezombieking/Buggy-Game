function createShader(gl,type,source)
{
	let inLog=document.getElementById("test").innerHTML+": ";
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
	document.getElementById("test").innerHTML=inLog+"shader failed";
	gl.deleteShader(shader);
}
function createShaderProgram(gl,src)
{
	let inLog=document.getElementById("test").innerHTML+": ";
	document.getElementById("test").innerHTML=inLog+"retrieving vertex code";
	let vertexShaderSource = document.querySelector("#"+src+"vertex").text;
	document.getElementById("test").innerHTML=inLog+"retrieving fragment code";
	let fragmentShaderSource = document.querySelector("#"+src+"fragment").text;
	document.getElementById("test").innerHTML=inLog+"compiling vertex code";
	let vertexShader=createShader(gl,gl.VERTEX_SHADER,vertexShaderSource);
	inLog=document.getElementById("test").innerHTML+": ";
	document.getElementById("test").innerHTML=inLog+"compiling fragment code";
	let fragmentShader=createShader(gl,gl.FRAGMENT_SHADER,fragmentShaderSource);
	inLog=document.getElementById("test").innerHTML+": ";
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