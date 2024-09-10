logMessage("Data Reader start");

logMessage("Data Reader string processer");
function StringProcesser(txt)
{
	this.str=txt;
	this.pos=0;
	this.line=0;
	this.next=function()
	{
		let c=this.str[this.pos];
		if(c==="\n")
		{
			this.line++;
		}
		this.pos=this.pos+1;
		return c;
	};
	this.nextLine=function()
	{
		let char=this.next();
		let line="";
		while(!(char==="\n"))
		{
			line=line+char;
			char=this.next();
		}
		return line;
	};
	this.until=function(end)
	{
		let char=this.next();
		let line="";
		while(!(char===end))
		{
			line=line+char;
			char=this.next();
		}
		return line;
	};
	this.getDepth=function()
	{
		let i=0;
		let char=this.next();
		while(!(char==="\t"))
		{
			char=this.next();
			i=i+1;
		}
		this.pos=this.pos-1;
		return i;
	};
}
logMessage("Data Reader passable reference");
function PassableReference(item)
{
	this.value=item;
}
logMessage("Data Reader Version: 0.0.0");
