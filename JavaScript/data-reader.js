function DataReader()
{
	this.readData=async function(src)
	{
		await getTextData(src,function(str)
		{
			try
			{
				let read=new StringProcesser(str);
				let line=read.nextLine();
				if(line===":::{}:::")
				{
				}
				else if(line===":::[]:::")
				{
					log message(e.
				}
				else
				{
					throw new error("Invalid data entry type: \'"+line+"\'.");
				}
			}
			catch(e)
			{

			}
		});
	}
	this.parseElement=function(reader)
	{
		let line=reader.nextLine().split":";
		if(line[0]==="S")
		{
			return line[1];
		}
		if(line[0]==="I")
		{
			return parseInt(line[1]);
		}
		if(line[0]==="F")
		{
			return parseFloat(line[1]);
		}
		if(line[0]===">I")
		{
			return parseIntArray(line[1]);
		}
		if(line[0]===">F")
		{
			return parseFloatArray(line[1]);
		}
		if(line[0]==="[]")
		{
			//return line[1];
		}
		if(line[0]==="{}")
		{
			//return line[1];
		}
		throw new error("Invalid data type: \'"+
	}
	this.parseIntArray=function(src)
	{
		let out=src.replace(" ","").replace("\n","").split(",");
		for(let i=0;i<out.length;i++)
		{
			out[i]=parseInt(out[i]);
		}
		return out;
	}
	this.parseFloatArray=function(src)
	{
		let out=src.replace(" ","").replace("\n","").split(",");
		for(let i=0;i<out.length;i++)
		{
			out[i]=parseFloat(out[i]);
		}
		return out;
	}
}
function StringProcesser(txt)
{
	this.str=txt;
	this.pos=0;
	this.line=0;
	this.next=function()
	{
		let c=str[pos];
		if(c==="\n")
		{
			line++;
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