function Matrix3()
{
	this.loc=0;
	this.size=[1,1];
	this.scale=
	[
		1,0,0,
		0,1,0,
		0,0,1
	];
	this.angle=0;
	this.rotation=
	[
		1,0,0,
		0,1,0,
		0,0,1
	];
	this.position=[0,0];
	this.translation=
	[
		1,0,0,
		0,1,0,
		0,0,1
	];
	this.total=
	[
		1,0,0,
		0,1,0,
		0,0,1
	];
	this.reset=function()
	{
		this.size=[1,1];
		this.scale=
		[
			1,0,0,
			0,1,0,
			0,0,1
		];
		this.angle=0;
		this.rotation=
		[
			1,0,0,
			0,1,0,
			0,0,1
		];
		this.position=[0,0];
		this.translation=
		[
			1,0,0,
			0,1,0,
			0,0,1
		];
		this.total=
		[
			1,0,0,
			0,1,0,
			0,0,1
		];
	};
	this.setSRT=function()
	{
		let mat=[1,0,0,0,1,0,0,0,1];
		mat=this.multiply(mat,this.scale);
		mat=this.multiply(mat,this.rotation);
		mat=this.multiply(mat,this.translation);
		this.total=mat;
	};
	this.setRST=function()
	{
		let mat=[1,0,0,0,1,0,0,0,1];
		mat=this.multiply(mat,this.rotation);
		mat=this.multiply(mat,this.scale);
		mat=this.multiply(mat,this.translation);
		this.total=mat;
	};
	this.setRTS=function()
	{
		let mat=[1,0,0,0,1,0,0,0,1];
		mat=this.multiply(mat,this.rotation);
		mat=this.multiply(mat,this.translation);
		mat=this.multiply(mat,this.scale);
		this.total=mat;
	};
	this.setTRS=function()
	{
		let mat=[1,0,0,0,1,0,0,0,1];
		mat=this.multiply(mat,this.translation);
		mat=this.multiply(mat,this.rotation);
		mat=this.multiply(mat,this.scale);
		this.total=mat;
	};
	this.setSTR=function()
	{
		let mat=[1,0,0,0,1,0,0,0,1];
		mat=this.multiply(mat,this.scale);
		mat=this.multiply(mat,this.translation);
		mat=this.multiply(mat,this.rotation);
		this.total=mat;
	};
	this.setTSR=function()
	{
		let mat=[1,0,0,0,1,0,0,0,1];
		mat=this.multiply(mat,this.translation);
		mat=this.multiply(mat,this.scale);
		mat=this.multiply(mat,this.rotation);
		this.total=mat;
	};
	this.setScale=function(x,y)
	{
		this.size=[x,y];
		this.scale=
		[
			x,0,0,
			0,y,0,
			0,0,1
		];
	};
	this.setRotation=function(a)
	{
		this.angle=a;
		let r=a*Math.PI/180;
		let c=Math.cos(r);
		let s=Math.sin(r);
		this.rotation=
		[
			c,-s,0,
			s,c,0,
			0,0,1
		];
	};
	this.setTranslation=function(x,y)
	{
		this.position=[x,y];
		this.translation=
		[
			1,0,0,
			0,1,0,
			x,y,1
		];
	};
	this.resize=function(x,y)
	{
		this.setScale(this.size[0]*x,this.size[1]*y);
	};
	this.rotate=function(a)
	{
		this.setRotation(this.angle+a);
	};
	this.translate=function(x,y)
	{
		this.setTranslation(this.position[0]+x,this.position[1]+y);
	};
	this.multiply=function(a,b)
	{
		let a00=a[0*3+0];
		let a01=a[0*3+1];
		let a02=a[0*3+2];
		let a10=a[1*3+0];
		let a11=a[1*3+1];
		let a12=a[1*3+2];
		let a20=a[2*3+0];
		let a21=a[2*3+1];
		let a22=a[2*3+2];
		let b00=b[0*3+0];
		let b01=b[0*3+1];
		let b02=b[0*3+2];
		let b10=b[1*3+0];
		let b11=b[1*3+1];
		let b12=b[1*3+2];
		let b20=b[2*3+0];
		let b21=b[2*3+1];
		let b22=b[2*3+2];
		return[
			b00*a00+b01*a10+b02*a20,
			b00*a01+b01*a11+b02*a21,
			b00*a02+b01*a12+b02*a22,
			b10*a00+b11*a10+b12*a20,
			b10*a01+b11*a11+b12*a21,
			b10*a02+b11*a12+b12*a22,
			b20*a00+b21*a10+b22*a20,
			b20*a01+b21*a11+b22*a21,
			b20*a02+b21*a12+b22*a22
		];
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
function Matrix3Cam()
{
	this.angle=0;
	this.rotation=
	[
		1,0,0,
		0,1,0,
		0,0,1
	];
	this.position=[0,0];
	this.translation=
	[
		1,0,0,
		0,1,0,
		0,0,1
	];
	this.reset=function()
	{
		this.angle=0;
		this.rotation=
		[
			1,0,0,
			0,1,0,
			0,0,1
		];
		this.position=[0,0];
		this.translation=
		[
			1,0,0,
			0,1,0,
			0,0,1
		];
	};
	this.setRotation=function(a)
	{
		this.angle=a;
		let r=a*Math.PI/180;
		let c=Math.cos(r);
		let s=Math.sin(r);
		this.rotation=
		[
			c,-s,0,
			s,c,0,
			0,0,1
		];
	};
	this.setTranslation=function(x,y)
	{
		this.position=[x,y];
		this.translation=
		[
			1,0,0,
			0,1,0,
			x,y,1
		];
	};
	this.rotate=function(a)
	{
		this.setRotation(this.angle+a);
	};
	this.translate=function(x,y)
	{
		this.setTranslation(this.position[0]+x,this.position[1]+y);
	};
	this.multiply=function(a,b)
	{
		let a00=a[0*3+0];
		let a01=a[0*3+1];
		let a02=a[0*3+2];
		let a10=a[1*3+0];
		let a11=a[1*3+1];
		let a12=a[1*3+2];
		let a20=a[2*3+0];
		let a21=a[2*3+1];
		let a22=a[2*3+2];
		let b00=b[0*3+0];
		let b01=b[0*3+1];
		let b02=b[0*3+2];
		let b10=b[1*3+0];
		let b11=b[1*3+1];
		let b12=b[1*3+2];
		let b20=b[2*3+0];
		let b21=b[2*3+1];
		let b22=b[2*3+2];
		return[
			b00*a00+b01*a10+b02*a20,
			b00*a01+b01*a11+b02*a21,
			b00*a02+b01*a12+b02*a22,
			b10*a00+b11*a10+b12*a20,
			b10*a01+b11*a11+b12*a21,
			b10*a02+b11*a12+b12*a22,
			b20*a00+b21*a10+b22*a20,
			b20*a01+b21*a11+b22*a21,
			b20*a02+b21*a12+b22*a22
		];
	};
}
logMessage("matrix3 Version: 0.0.1 (0)");