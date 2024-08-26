let test1=32;
function createShaderPart(gl,type,source)
{
	let shader=gl.createShader(type);
	gl.shaderSource(shader,source);
	gl.compileShader(shader);
	var success=gl.getShaderParameter(shader,gl.COMPILE_STATUS);
	if(success)
	{
		return shader;
	}
	//console.log(gl.getShaderInfoLog(shader));
	gl.deleteShader(shader);
}
function createShaderProgram(gl,src)
{
	let vertexShaderSource = document.querySelector("#"+src+"vertex").text;
	let fragmentShaderSource = document.querySelector("#"+src+"fragment").text;
	let vertexShader=createShader(gl,gl.VERTEX_SHADER, vertexShaderSource);
	let fragmentShader=createShader(gl,gl.FRAGMENT_SHADER, fragmentShaderSource);
	var program=gl.createProgram();
	gl.attachShader(program,vertexShader);
	gl.attachShader(program,fragmentShader);
	gl.linkProgram(program);
	let success=gl.getProgramParameter(program,gl.LINK_STATUS);
	if(success)
	{
		return program;
	}
	//console.log(gl.getProgramInfoLog(program));
	gl.deleteProgram(program);
}