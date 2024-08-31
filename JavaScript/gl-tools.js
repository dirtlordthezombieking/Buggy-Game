function Uniform(uniformSize,shaderProgram,location,uniformValue,glCore)
{
	this.size=uniformSize;
	this.prog=shaderProgram;
	this.loc=gl.getUniformLocation(shaderProgram,location);
	this.value=uniformValue;
	this gl=glCore;
	this.set=function(newValue)
	{
		this.value=newValue;
	};
	this.use=function()
	{
		if(this.size==1)
		{
			this.gl.uniform1f(this.loc,this.value[0]);
		}
		else if(this.size==2)
		{
			this.gl.uniform2f(this.loc,this.value[0],this.value[1]);
		}
		else if(this.size==3)
		{
			this.gl.uniform3f(this.loc,this.value[0],this.value[1],this.value[2]);
		}
		else if(this.size==4)
		{
			this.gl.uniform4f(this.loc,this.value[0],this.value[1],this.value[2],this.value[3]);
		}
	};
}
function Texture(shaderProgram,location,imageSrc,referenceID,glCore)
{
	this.prog=shaderProgram;
	this.image=imageSrc;
	this.loc=gl.getUniformLocation(shaderProgram,location);
	this.id=referenceID;
	this gl=glCore;
	this.push=function()
	{
		this.texture=gl.createTexture();
		this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture);
		this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE);
		this gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE);
		this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST);
		this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST);
		this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,this.image);
	};
	this.use=function()
	{
		this.gl.uniform1i(this.loc,this.id);
		this.gl.activeTexture(this.gl.TEXTURE0+this.id);
		this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture);
	};
}
function Attribute(attributeSize,shaderProgram,location, attributeValue,glCore)
{
	this.size=attributeSize;
	this.prog=shaderProgram;
	this.loc=gl.getAttribLocation(shaderProgram,location);
	this.value=attributeValue;
	this gl=glCore;
	this.use=function()
	{
		let buff=this.gl.createBuffer();
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER,buff);
		this.gl.bufferData(this.gl.ARRAY_BUFFER,this.value,this.gl.STATIC_DRAW);
		this.gl.enableVertexAttribArray(this.loc);
		this.gl.vertexAttribPointer(this.loc,this.size,this.gl.FLOAT,false,0,0);
	};
}
logMessage("gl tools Version: 0.0.3 (0)");