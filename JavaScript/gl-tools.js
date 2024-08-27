function Uniform(uniformSize,shaderProgram,location,uniformValue)
{
	this.size=uniformSize;
	this.prog=shaderProgram;
	this.loc=gl.getUniformLocation(program,location);
	this.value=uniformValue;
	this.set=function(newValue);
	{
		this.value=newValue;
	};
	this.use=function();
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
function texture(shaderProgram,location,imageSrc)
{
	this.prog=shaderProgram;
	this.image=imageSrc;
	this.loc=gl.getUniformLocation(program,location);
	this.use=function(pos)
	{
		let texture=gl.createTexture();
		gl.bindTexture(gl.TEXTURE_2D,texture);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
		gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,this.image);
		textures.push(texture);
		
	}
}
function Attribute(attributeSize,shaderProgram,location, attributeValue)
{
	this.size=attributeSize;
	this.prog=shaderProgram;
	this.loc=gl.getUniformLocation(program,location);
	this.value=attributeValue;
	this.use=function();
	{
		let texCoordBuff=gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER,texCoordBuff);
		gl.bufferData(gl.ARRAY_BUFFER,new Float32Array
		(
			[
				0.0,0.0,
				1.0,0.0,
				0.0,1.0,
				0.0,1.0,
				1.0,0.0,
				1.0,1.0
			]
		),gl.STATIC_DRAW);
		gl.enableVertexAttribArray(aTexCoord);
		gl.vertexAttribPointer(aTexCoord,2,gl.FLOAT,false,0,0);
	};
}