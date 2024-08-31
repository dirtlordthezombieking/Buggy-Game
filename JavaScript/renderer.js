function start()
{
	let canvas=document.querySelector("#canvas");
	let gl=canvas.getContext("webgl");
	if(!gl)
	{
		document.getElementById("test").innerHTML="web gl not available";
		return;
	}
	let program=createShaderProgram(gl,basicVertex,basicFragment);
	if(!program)
	{
		return;
	}
	resizeCanvasToDisplaySize(gl.canvas);
	let test=new GLTest001(program,gl);
	test.start(test);
}
logMessage("Renderer Version: 0.0.5 (0)");