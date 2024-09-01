function Camera2D(width,height)
{
	this.w=width;
	this.h=height;
	this.loc=0;
	this.base=
	[
		2 / width,0,         0,
		0,        2 / height,0,
		0,        0,         1
	];
	this.total=base;
	this.transform=new Matrix3();
	this.setData=function(shaderProgram,location,gl)
	{
		this.loc=gl.getUniformLocation(shaderProgram,location);
	};
	this.update=function()
	{
	}
	this.use=function(gl)
	{
		gl.uniformMatrix3fv(this.loc,false,this.total);
	};
}function Camera(width,height,depth)
{
	this.w=width;
	this.h=height;
	this.d=depth;
	this.loc=0;
	this.base=
	[
		2/width,0,       0,      0,
		0,      2/height,0,      0,
		0,      0,       2/depth,0,
		0,      0,       0,      1
	];
	this.transform=new Matrix4();
	this.setData=Orthofunction(shaderProgram,location,gl)
	{
		this.loc=gl.getUniformLocation(shaderProgram,location);
	};
	this.use=function(gl)
	{
		gl.uniformMatrix4fv(this.loc,false,this.total);
	};
}
logMessage("cameras Version: 0.0.1 (0)");