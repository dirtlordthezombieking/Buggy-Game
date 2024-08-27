function Uniform(uniformSize,glContext,shaderProgram,location,value)
{
	this.size=uniformSize;
	this.gl=glContext;
	this.prog=shaderProgram;
	this.loc=gl.getUniformLocation(program,location);
	this.set=function(value);
	{
		
	}
	this.use=function();
	{
		
	}
}