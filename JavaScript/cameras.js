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
	this.total=this.base;
	this.transform=new Matrix3();
	this.reset=function()
	{
		this.transform.reset();
		this.total=this.base;
	};
	this.update=function()
	{
		this.total=this.transform.multiply(this.base,this.transform.translation);
		this.total=this.transform.multiply(this.total,this.transform.rotation);
		this.total=this.transform.multiply(this.total,this.transform.scale);
	};
	this.setData=function(shaderProgram,location,gl)
	{
		this.loc=gl.getUniformLocation(shaderProgram,location);
	};
	this.use=function(gl)
	{
		gl.uniformMatrix3fv(this.loc,false,this.total);
	};
}
function OrthoCamera(width,height,depth)
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
	this.total=this.base;
	this.transform=new Matrix4();
	this.reset=function()
	{
		this.transform.reset();
		this.total=this.base;
	};
	this.update=function()
	{
		this.total=this.transform.multiply(this.base,this.transform.translation);
		this.total=this.transform.multiply(this.total,this.transform.rotationX);
		this.total=this.transform.multiply(this.total,this.transform.rotationY);
		this.total=this.transform.multiply(this.total,this.transform.rotationZ);
		this.total=this.transform.multiply(this.total,this.transform.scale);
	};
	this.setData=function(shaderProgram,location,gl)
	{
		this.loc=gl.getUniformLocation(shaderProgram,location);
	};
	this.use=function(gl)
	{
		gl.uniformMatrix4fv(this.loc,false,this.total);
	};
}
logMessage("cameras Version: 0.0.1 (0)");