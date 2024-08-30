function GLTest001(shaderProgram,glCore)
{
	this.aPos=0;
	this.aTexCoord=0;
	this.uColour=0;
	this.uRes=0;
	this.image=0;
	this.text=0;
	this.program=shaderProgram;
	this.gl=glCore;
	this.start=function()
		loadImage("images/stand in.png",function(img)
		{
			this.image=img;
			this.draw();
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
		));
		this.aTexCoord.use();
//texture
		this.text=new Texture(this program,"u_colourTexture",this.image,0);
		this.text.push();
		this.text.use();
//position
		this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height);
		this.gl.clearColor(0,0,0,1);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT);
		this.gl.useProgram(this.program);
		this.uRes=new Uniform(2,this.program,"u_res",[this.gl.canvas.width,this.gl.canvas.height]);
		this.uRes.use();
		this.aPos=new Attribute(2,this.program,"a_pos",this.setRectangle(this.gl,this.randomInt(300),this.randomInt(300),this.randomInt(300),this.randomInt(300)));
		this.aPos.use();
		this.uColour=new Uniform(4,this.program,"u_colour",[Math.random(),Math.random(),Math.random(),1]);
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