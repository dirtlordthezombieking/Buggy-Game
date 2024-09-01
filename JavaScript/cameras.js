function Camera2D(width,height)
{
	this.w=width;
	this.h=height;
	this.loc=0;
	this.transform=
	[
		 2 / width, 0,          0,
		 0,        -2 / height, 0,
		-1,         1,          1
	]
	this.setData=function(shaderProgram,location,gl)
	{
		this.loc=gl.getUniformLocation(shaderProgram,location);
	};
	this.use=function(gl)
	{
		gl.uniformMatrix3fv(this.loc,false,this.transform);
	};
}
logMessage("cameras Version: 0.0.0 (0)");