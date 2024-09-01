function GLTest001(shaderProgram,glCore)
{
	this.aPos=0;
	this.aTexCoord=0;
	this.uColour=0;
	this.uProj=0;
	this.image=0;
	this.text=0;
	this.program=shaderProgram;
	this.gl=glCore;
	this.uTransform=0;
	this.start=function(test)
	{
		loadImage("images/stand in.png",function(img)
		{
			test.image=img;
			test.draw();
		});
	};
	this.draw=function()
	{
//texcord
		this.aTexCoord=new Attribute(2,this.program,"a_texCoord",new Float32Array
		(
			[
				0.0,0.0,
				1.0,0.0,
				0.0,1.0,
				0.0,1.0,
				1.0,0.0,
				1.0,1.0
			]
		),this.gl);
		this.aTexCoord.use();
//texture
		this.text=new Texture(this.program,"u_colourTexture",this.image,0,this.gl);
		this.text.push();
		this.text.use();
//position
		this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height);
		this.gl.clearColor(0,0,0,1);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT);
		this.gl.useProgram(this.program);
		//this.uRes=new Uniform(2,this.program,"u_res",[this.gl.canvas.width,this.gl.canvas.height],this.gl);
		//this.uRes.use();
		this.uProj=new Camera2D(this.gl.canvas.width,this.gl.canvas.height);
		this.uProj.setData(this.program,"u_proj",this.gl);
		this.uProj.use(this.gl);
		this.uTransform=new Matrix3();
		this.uTransform.setScale(0.5,0.5);
		this.uTransform.setRotation(0.0);
		this.uTransform.setTranslation(0.0,100.0);
		this.uTransform.setSRT();
		this.uTransform.setData(this.program,"u_transform",this.gl);
		this.uTransform.use(this.gl);
		this.aPos=new Attribute(2,this.program,"a_pos",this.setRectangle(-100,-100,200,200),this.gl);
//this.randomInt(300),this.randomInt(300),this.randomInt(300),this.randomInt(300)));
		this.aPos.use();
		this.uColour=new Uniform(4,this.program,"u_colour",[0,1,1,1],this.gl);
//Math.random(),Math.random(),Math.random(),1]);
		this.uColour.use();
		this.gl.drawArrays(this.gl.TRIANGLES,0,6);
	};
	this.randomInt=function(range)
	{
		return Math.floor(Math.random()*range);
	};
	this.setRectangle=function(x,y,width,height)
	{
		let x1=x;
		let x2=x+width;
		let y1=y;
		let y2=y+height;
		return new Float32Array
		(
			[
				x1,y1,
				x2,y1,
				x1,y2,
				x1,y2,
				x2,y1,
				x2,y2
			]
		);
	};
}