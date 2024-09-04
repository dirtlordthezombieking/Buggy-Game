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
		pos=pos+1;
		return c;
	};
	this.nextLine=function()
	{
		let char="";
		let line="";
		while(!(char==="\n"))
		{
			line=line+char;
			char=this.next();
		}
		return line;
	}
}