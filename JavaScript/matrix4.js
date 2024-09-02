function Matrix4()
{
	this.loc=0;
	this.size=[1,1,0];
	this.scale=
	[
		1,0,0,0,
		0,1,0,0,
		0,0,1,0,
		0,0,0,1
	];
	this.angleX=0;
	this.rotationX=
	[
		1,0,0,0,
		0,1,0,0,
		0,0,1,0,
		0,0,0,1
	];
	this.angleY=0;
	this.rotationY=
	[
		1,0,0,0,
		0,1,0,0,
		0,0,1,0,
		0,0,0,1
	];
	this.angleZ=0;
	this.rotationZ=
	[
		1,0,0,0,
		0,1,0,0,
		0,0,1,0,
		0,0,0,1
	];
	this.angle=0;
	this.rotation=
	[
		1,0,0,0,
		0,1,0,0,
		0,0,1,0,
		0,0,0,1
	];
	this.position=[0,0,0];
	this.translation=
	[
		1,0,0,0,
		0,1,0,0,
		0,0,1,0,
		0,0,0,1
	];
	this.total=
	[
		1,0,0,0,
		0,1,0,0,
		0,0,1,0,
		0,0,0,1
	];
	this.reset=function()
	{
		this.size=[1,1,0];
		this.scale=
		[
			1,0,0,0,
			0,1,0,0,
			0,0,1,0,
			0,0,0,1
		];
		this.angleX=0;
		this.rotationX=
		[
			1,0,0,0,
			0,1,0,0,
			0,0,1,0,
			0,0,0,1
		];
		this.angleY=0;
		this.rotationY=
		[
			1,0,0,0,
			0,1,0,0,
			0,0,1,0,
			0,0,0,1
		];
		this.angleZ=0;
		this.rotationZ=
		[
			1,0,0,0,
			0,1,0,0,
			0,0,1,0,
			0,0,0,1
		];
		this.angle=0;
		this.rotation=
		[
			1,0,0,0,
			0,1,0,0,
			0,0,1,0,
			0,0,0,1
		];
		this.position=[0,0,0];
		this.translation=
		[
			1,0,0,0,
			0,1,0,0,
			0,0,1,0,
			0,0,0,1
		];
		this.total=
		[
			1,0,0,0,
			0,1,0,0,
			0,0,1,0,
			0,0,0,1
		];
	};
	this.setSRT=function()
	{
		let mat=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
		mat=this.multiply(mat,this.scale);
		mat=this.multiply(mat,this.rotation);
		mat=this.multiply(mat,this.translation);
		this.total=mat;
	};
	this.setRST=function()
	{
		let mat=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
		mat=this.multiply(mat,this.rotation);
		mat=this.multiply(mat,this.scale);
		mat=this.multiply(mat,this.translation);
		this.total=mat;
	};
	this.setRTS=function()
	{
		let mat=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
		mat=this.multiply(mat,this.rotation);
		mat=this.multiply(mat,this.translation);
		mat=this.multiply(mat,this.scale);
		this.total=mat;
	};
	this.setTRS=function()
	{
		let mat=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
		mat=this.multiply(mat,this.translation);
		mat=this.multiply(mat,this.rotation);
		mat=this.multiply(mat,this.scale);
		this.total=mat;
	};
	this.setSTR=function()
	{
		let mat=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
		mat=this.multiply(mat,this.scale);
		mat=this.multiply(mat,this.translation);
		mat=this.multiply(mat,this.rotation);
		this.total=mat;
	};
	this.setTSR=function()
	{
		let mat=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
		mat=this.multiply(mat,this.translation);
		mat=this.multiply(mat,this.scale);
		mat=this.multiply(mat,this.rotation);
		this.total=mat;
	};
	this.setRotationXYZ=function()
	{
		let mat=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
		mat=this.multiply(mat,this.rotationX);
		mat=this.multiply(mat,this.rotationY);
		mat=this.multiply(mat,this.rotationZ);
		this.rotation=mat;
	};
	this.setRotationYXZ=function()
	{
		let mat=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
		mat=this.multiply(mat,this.rotationY);
		mat=this.multiply(mat,this.rotationX);
		mat=this.multiply(mat,this.rotationZ);
		this.rotation=mat;
	};
	this.setRotationXZY=function()
	{
		let mat=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
		mat=this.multiply(mat,this.rotationX);
		mat=this.multiply(mat,this.rotationZ);
		mat=this.multiply(mat,this.rotationY);
		this.rotation=mat;
	};
	this.setRotationZXY=function()
	{
		let mat=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
		mat=this.multiply(mat,this.rotationZ);
		mat=this.multiply(mat,this.rotationX);
		mat=this.multiply(mat,this.rotationY);
		this.rotation=mat;
	};
	this.setRotationZYX=function()
	{
		let mat=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
		mat=this.multiply(mat,this.rotationZ);
		mat=this.multiply(mat,this.rotationY);
		mat=this.multiply(mat,this.rotationX);
		this.rotation=mat;
	};
	this.setRotationYZX=function()
	{
		let mat=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
		mat=this.multiply(mat,this.rotationY);
		mat=this.multiply(mat,this.rotationZ);
		mat=this.multiply(mat,this.rotationX);
		this.rotation=mat;
	};
	this.setScale=function(x,y,z)
	{
		this.size=[x,y];
		this.scale=
		[
			x,0,0,0,
			0,y,0,0,
			0,0,z,0,
			0,0,0,1
		];
	};
	this.setRotationX=function(a)
	{
		this.angle=a;
		let r=a*Math.PI/180;
		let c=Math.cos(r);
		let s=Math.sin(r);
		this.rotation=
		[
			1,0, 0,0,
			0,c,-s,0,
			0,s, c,0,
			0,0, 0,1
		];
	};
	this.setRotationY=function(a)
	{
		this.angle=a;
		let r=a*Math.PI/180;
		let c=Math.cos(r);
		let s=Math.sin(r);
		this.rotation=
		[
			c,0,-s,0,
			0,1, 0,0,
			s,0, c,0,
			0,0, 0,1
		];
	};
	this.setRotationZ=function(a)
	{
		this.angle=a;
		let r=a*Math.PI/180;
		let c=Math.cos(r);
		let s=Math.sin(r);
		this.rotation=
		[
			c,-s,0,0,
			s, c,0,0,
			0, 0,1,0,
			0, 0,0,1
		];
	};
	this.setRotation=function(x,y,z)
	{
		this.setRotationX(x);
		this.setRotationY(y);
		this.setRotationZ(z);
	};
	this.setTranslation=function(x,y,z)
	{
		this.position=[x,y];
		this.translation=
		[
			1,0,0,0,
			0,1,0,0,
			0,0,1,0,
			x,y,z,1
		];
	};
	this.resize=function(x,y,z)
	{
		this.setScale(this.size[0]*x,this.size[1]*y,this.size[2]*z);
	};
	this.rotateX=function(a)
	{
		this.setRotationX(this.angleX+a);
	};
	this.rotateY=function(a)
	{
		this.setRotationY(this.angleY+a);
	};
	this.rotateZ=function(a)
	{
		this.setRotationZ(this.angleZ+a);
	};
	this.rotate=function(x,y,z)
	{
		this.rotateX(x);
		this.rotatey(y);
		this.rotatez(z);
	};
	this.translate=function(x,y,z)
	{
		this.setTranslation(this.position[0]+x,this.position[1]+y,this.position[2]+z);
	};
	this.multiply=function(a,b)
	{
		let a00=a[0*3+0];
		let a01=a[0*3+1];
		let a02=a[0*3+2];
		let a03=a[0*3+3];
		let a10=a[1*3+0];
		let a11=a[1*3+1];
		let a12=a[1*3+2];
		let a13=a[1*3+3];
		let a20=a[2*3+0];
		let a21=a[2*3+1];
		let a22=a[2*3+2];
		let a23=a[2*3+3];
		let a30=a[3*3+0];
		let a31=a[3*3+1];
		let a32=a[3*3+2];
		let a33=a[3*3+3];
		let b00=b[0*3+0];
		let b01=b[0*3+1];
		let b02=b[0*3+2];
		let b03=b[0*3+3];
		let b10=b[1*3+0];
		let b11=b[1*3+1];
		let b12=b[1*3+2];
		let b13=b[1*3+3];
		let b20=b[2*3+0];
		let b21=b[2*3+1];
		let b22=b[2*3+2];
		let b23=b[2*3+3];
		let b30=b[3*3+0];
		let b31=b[3*3+1];
		let b32=b[3*3+2];
		let b33=b[3*3+3];
		return[
			b00*a00+b01*a10+b02*a20+b03*a30,
			b00*a01+b01*a11+b02*a21+b03*a31,
			b00*a02+b01*a12+b02*a22+b03*a32,
			b00*a03+b01*a13+b02*a23+b03*a33,
			b10*a00+b11*a10+b12*a20+b13*a30,
			b10*a01+b11*a11+b12*a21+b13*a31,
			b10*a02+b11*a12+b12*a22+b13*a32,
			b10*a03+b11*a13+b12*a23+b13*a33,
			b20*a00+b21*a10+b22*a20+b23*a30,
			b20*a01+b21*a11+b22*a21+b23*a31,
			b20*a02+b21*a12+b22*a22+b23*a32,
			b20*a03+b21*a13+b22*a23+b23*a33,
			b30*a00+b31*a10+b32*a20+b33*a30,
			b30*a01+b31*a11+b32*a21+b33*a31,
			b30*a02+b31*a12+b32*a22+b33*a32,
			b30*a03+b31*a13+b32*a23+b33*a33
		];
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
function Matrix4Cam()
{
	this.angleX=0;
	this.rotationX=
	[
		1,0,0,0,
		0,1,0,0,
		0,0,1,0,
		0,0,0,1
	];
	this.angleY=0;
	this.rotationY=
	[
		1,0,0,0,
		0,1,0,0,
		0,0,1,0,
		0,0,0,1
	];
	this.angleZ=0;
	this.rotationZ=
	[
		1,0,0,0,
		0,1,0,0,
		0,0,1,0,
		0,0,0,1
	];
	this.angle=0;
	this.rotation=
	[
		1,0,0,0,
		0,1,0,0,
		0,0,1,0,
		0,0,0,1
	];
	this.position=[0,0,0];
	this.translation=
	[
		1,0,0,0,
		0,1,0,0,
		0,0,1,0,
		0,0,0,1
	];
	this.reset=function()
	{
		this.angleX=0;
		this.rotationX=
		[
			1,0,0,0,
			0,1,0,0,
			0,0,1,0,
			0,0,0,1
		];
		this.angleY=0;
		this.rotationY=
		[
			1,0,0,0,
			0,1,0,0,
			0,0,1,0,
			0,0,0,1
		];
		this.angleZ=0;
		this.rotationZ=
		[
			1,0,0,0,
			0,1,0,0,
			0,0,1,0,
			0,0,0,1
		];
		this.angle=0;
		this.rotation=
		[
			1,0,0,0,
			0,1,0,0,
			0,0,1,0,
			0,0,0,1
		];
		this.position=[0,0,0];
		this.translation=
		[
			1,0,0,0,
			0,1,0,0,
			0,0,1,0,
			0,0,0,1
		];
	};
	this.setRotationX=function(a)
	{
		this.angle=a;
		let r=a*Math.PI/180;
		let c=Math.cos(r);
		let s=Math.sin(r);
		this.rotation=
		[
			1,0, 0,0,
			0,c,-s,0,
			0,s, c,0,
			0,0, 0,1
		];
	};
	this.setRotationY=function(a)
	{
		this.angle=a;
		let r=a*Math.PI/180;
		let c=Math.cos(r);
		let s=Math.sin(r);
		this.rotation=
		[
			c,0,-s,0,
			0,1, 0,0,
			s,0, c,0,
			0,0, 0,1
		];
	};
	this.setRotationZ=function(a)
	{
		this.angle=a;
		let r=a*Math.PI/180;
		let c=Math.cos(r);
		let s=Math.sin(r);
		this.rotation=
		[
			c,-s,0,0,
			s, c,0,0,
			0, 0,1,0,
			0, 0,0,1
		];
	};
	this.setRotation=function(x,y,z)
	{
		this.setRotationX(x);
		this.setRotationY(y);
		this.setRotationZ(z);
	};
	this.setTranslation=function(x,y,z)
	{
		this.position=[x,y];
		this.translation=
		[
			1,0,0,0,
			0,1,0,0,
			0,0,1,0,
			x,y,z,1
		];
	};
	this.rotateX=function(a)
	{
		this.setRotationX(this.angleX+a);
	};
	this.rotateY=function(a)
	{
		this.setRotationY(this.angleY+a);
	};
	this.rotateZ=function(a)
	{
		this.setRotationZ(this.angleZ+a);
	};
	this.rotate=function(x,y,z)
	{
		this.rotateX(x);
		this.rotatey(y);
		this.rotatez(z);
	};
	this.translate=function(x,y,z)
	{
		this.setTranslation(this.position[0]+x,this.position[1]+y,this.position[2]+z);
	};
	this.multiply=function(a,b)
	{
		let a00=a[0*3+0];
		let a01=a[0*3+1];
		let a02=a[0*3+2];
		let a03=a[0*3+3];
		let a10=a[1*3+0];
		let a11=a[1*3+1];
		let a12=a[1*3+2];
		let a13=a[1*3+3];
		let a20=a[2*3+0];
		let a21=a[2*3+1];
		let a22=a[2*3+2];
		let a23=a[2*3+3];
		let a30=a[3*3+0];
		let a31=a[3*3+1];
		let a32=a[3*3+2];
		let a33=a[3*3+3];
		let b00=b[0*3+0];
		let b01=b[0*3+1];
		let b02=b[0*3+2];
		let b03=b[0*3+3];
		let b10=b[1*3+0];
		let b11=b[1*3+1];
		let b12=b[1*3+2];
		let b13=b[1*3+3];
		let b20=b[2*3+0];
		let b21=b[2*3+1];
		let b22=b[2*3+2];
		let b23=b[2*3+3];
		let b30=b[3*3+0];
		let b31=b[3*3+1];
		let b32=b[3*3+2];
		let b33=b[3*3+3];
		return[
			b00*a00+b01*a10+b02*a20+b03*a30,
			b00*a01+b01*a11+b02*a21+b03*a31,
			b00*a02+b01*a12+b02*a22+b03*a32,
			b00*a03+b01*a13+b02*a23+b03*a33,
			b10*a00+b11*a10+b12*a20+b13*a30,
			b10*a01+b11*a11+b12*a21+b13*a31,
			b10*a02+b11*a12+b12*a22+b13*a32,
			b10*a03+b11*a13+b12*a23+b13*a33,
			b20*a00+b21*a10+b22*a20+b23*a30,
			b20*a01+b21*a11+b22*a21+b23*a31,
			b20*a02+b21*a12+b22*a22+b23*a32,
			b20*a03+b21*a13+b22*a23+b23*a33,
			b30*a00+b31*a10+b32*a20+b33*a30,
			b30*a01+b31*a11+b32*a21+b33*a31,
			b30*a02+b31*a12+b32*a22+b33*a32,
			b30*a03+b31*a13+b32*a23+b33*a33
		];
	};
}
logMessage("matrix4 Version: 0.0.0 (0)");