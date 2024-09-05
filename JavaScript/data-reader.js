async function readData(src)
{
	await getTextData(src,function(str)
	{
		let read=new StringProcesser(str);
		let line=read.nextLine();
		if(line===":::{}:::")
		{
		}
		else if(line===":::[]:::")
		{
		}
		else
		{
			throw new error("Invalid data entry type: \'"+line+"\'.");
		}
	}));
}
function StringProcesser(txt)
{
	this.str=txt;
	this.pos=0;
	this.next=function()
	{
		let c=str[pos];
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
	}
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
	}
}