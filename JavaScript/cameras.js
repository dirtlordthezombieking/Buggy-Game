function Camera2D(width,height)
{
	this.loc=0;
	this.base=
	[
		2 / width,0,         0,
		0,        2 / height,0,
		0,        0,         1
	];
	this.total=this.base;
	this.transform=new Matrix3Cam();
	this.reset=function()
	{
		this.transform.reset();
		this.total=this.base;
	};
	this.update=function()
	{
		this.total=this.transform.multiply(this.base,this.transform.translation);
		this.total=this.transform.multiply(this.total,this.transform.rotation);
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
function SimpleOrthoCamera(width,height,depth)
{
	this.loc=0;
	this.base=
	[
		2/width,0,       0,      0,
		0,      2/height,0,      0,
		0,      0,       2/depth,0,
		0,      0,       0,      1
	];
	this.total=this.base;
	this.transform=new Matrix4Cam();
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
function StandardOrthoCamera(left, right, bottom, top, near, far)
{
	this.loc=0;
	this.base=
	[
		2/(right-left),           0,                        0,                    0,
		0,                        2/(top-bottom),           0,                    0,
		0,                        0,                        2/(near-far),         0,
		(left+right)/(left-right),(bottom+top)/(bottom-top),(near+far)/(near-far),1
	];
	this.total=this.base;
	this.transform=new Matrix4Cam();
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
function PerspectiveCamera(fov, aspect, near, far)
{
	let fieldOfViewInRadians=
	let f=Math.tan(Math.PI*0.5-0.5*fieldOfViewInRadians);
	let rangeInv=1.0/(near-far);
	this.loc=0;
	this.base=
	[
		f/aspect,0,0,                   0,
		0,       f,0,                   0,
		0,       0,(near+far)*rangeInv,-1,
		0,       0,near*far*rangeInv*2, 0
	];
	this.total=this.base;
	this.transform=new Matrix4Cam();
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
logMessage("cameras Version: 0.0.3 (0)");