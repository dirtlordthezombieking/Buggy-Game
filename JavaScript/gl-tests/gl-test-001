function GLTest001(shaderProgram,GLCore)
{
	this.aPos=0;
	this.aTexCoord=0;
	this.uColour=0;
	this.uRes=0;
	this.image=0;
	this.text=0;
	this.program=shaderProgram;
	this.gl=GLCore;
	function Start()
	this.loadImage=function("images/stand in.png",function(img)
	{
		this.image=img;
		this.draw();
	});
	}
	this.draw=function()
	{
//texcord
		this.aTexCoord=new Attribute(2,program,"a_texCoord",new Float32Array
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
		this.text=new Texture(program,"u_colourTexture",image,0);
		this.text.push();
		this.text.use();
//position
		this.gl.viewport(0,0,gl.canvas.width,gl.canvas.height);
		this.gl.clearColor(0,0,0,1);
		this.gl.clear(gl.COLOR_BUFFER_BIT);
		this.gl.useProgram(program);
		this.uRes=new Uniform(2,program,"u_res",[gl.canvas.width,gl.canvas.height])
		this.uRes.use() the
		this.aPos=new Attribute(2,program,"a_pos",this.setRectangle(gl,this.randomInt(300),this.randomInt(300),this.randomInt(300),this.randomInt(300)));
		this.aPos.use();
		this.uColour=new Uniform(4,program,"u_colour",[Math.random(),Math.random(),Math.random(),1])
		this.uColour.use()
		this.gl.drawArrays(gl.TRIANGLES,0,6);
	}
	this.randomInt=function(range)
	{
		return Math.floor(Math.random()*range);
	}
	this.setRectangle=function(gl,x,y,width,height)
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
	}
}