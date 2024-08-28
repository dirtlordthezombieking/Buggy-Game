function Uniform(uniformSize,shaderProgram,location,uniformValue)
{
	this.size=uniformSize;
	this.prog=shaderProgram;
	this.loc=gl.getUniformLocation(program,location);
	this.value=uniformValue;
	this.set=function(newValue)
	{
		this.value=newValue;
	};
	this.use=function()
	{
		if(this.size==1)
		{
			gl.uniform2f(this.loc,this.value[0]);
		}
		else if(this.size==1)
		{
			gl.uniform2f(this.loc,this.value[0],this.value[1]);
		}
		else if(this.size==1)
		{
			gl.uniform2f(this.loc,this.value[0],this.value[1],this.value[2]);
		}
		else if(this.size==1)
		{
			gl.uniform2f(this.loc,this.value[0],this.value[1],this.value[2],this.value[3]);
		}
	};
}
function Texture(shaderProgram,location,imageSrc,referenceID)
{
	this.prog=shaderProgram;
	this.image=imageSrc;
	this.loc=gl.getUniformLocation(program,location);
	this.id=referenceID;
	this.push=function(pos)
	{
		this.texture=gl.createTexture();
		gl.bindTexture(gl.TEXTURE_2D,this.texture);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
		gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,this.image);
		textures.push(this.texture);
	};
	this.use=function()
	{
		gl.uniform1i(u_image,id);
		gl.activeTexture(gl.TEXTURE0+id);
		gl.bindTexture(gl.TEXTURE_2D,this.texture);
	};
}
function Attribute(attributeSize,shaderProgram,location, attributeValue)
{
	this.size=attributeSize;
	this.prog=shaderProgram;
	this.loc=gl.getAtribLocation(program,location);
	this.value=attributeValue;
	this.use=function()
	{
		this.buff=gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER,buff);
		gl.bufferData(gl.ARRAY_BUFFER,this.value,gl.STATIC_DRAW);
		gl.enableVertexAttribArray(this.loc);
		gl.vertexAttribPointer(this.loc,this.size,gl.FLOAT,false,0,0);
	};
}
logMessage("gl tools Version: 0.0.1 (0)");