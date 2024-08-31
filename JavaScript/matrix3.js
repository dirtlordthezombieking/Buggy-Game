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
	this.update=function()
	{
		this.total=this.multiply(this.multiply(this.scale,this.rotation),this.translation);
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
			y,x,1
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
		let i=0;
		logMessage("step"+i);
		i++;
		let a00=a[0*3+0];
		let i=0;
		logMessage("step"+i);
		i++;
		let a01=a[0*3+1];
		let i=0;
		logMessage("step"+i);
		i++;
		let a02=a[0*3+2];
		let i=0;
		logMessage("step"+i);
		i++;
		let a10=a[1*3+0];
		let i=0;
		logMessage("step"+i);
		i++;
		let a11=a[1*3+1];
		let i=0;
		logMessage("step"+i);
		i++;
		let a12=a[1*3+2];
		let i=0;
		logMessage("step"+i);
		i++;
		let a20=a[2*3+0];
		let i=0;
		logMessage("step"+i);
		i++;
		let a21=a[2*3+1];
		let i=0;
		logMessage("step"+i);
		i++;
		let a22=a[2*3+2];
		let i=0;
		logMessage("step"+i);
		I++;
		let b00=b[0*3+0];
		let i=0;
		logMessage("step"+i);
		i++;
		let b01=b[0*3+1];
		let i=0;
		logMessage("step"+i);
		i++;
		let b02=b[0*3+2];
		let i=0;
		logMessage("step"+i);
		i++;
		let b10=b[1*3+0];
		let i=0;
		logMessage("step"+i);
		i++;
		let b11=b[1*3+1];
		let i=0;
		logMessage("step"+i);
		i++;
		let b12=b[1*3+2];
		let i=0;
		logMessage("step"+i);
		j++;
		let b20=b[2*3+0];
		let i=0;
		logMessage("step"+i);
		i++;
		let b21=b[2*3+1];
		let i=0;
		logMessage("step"+i);
		i++;
		let b22=b[2*3+2];
		return
		[
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
	this.setData=function(shaderProgram,location)
	{
		this.loc=gl.getUniformLocation(shaderProgram,location);
	};
	this.use=function()
	{
		gl.uniformMatrix3fv(this.loc,false,this.total);
	};
}
logMessage("matrix3 Version: 0.0.0 (0)");