logMessage("Data Reader start");
function DataReader()
{

	this.parseIntArray=function(reader,depth)
	{
		let src=this.mergeArray(reader,depth);
		let out=src.replace(" ","").replace("\n","").split(",");
		for(let i=0;i<out.length;i++)
		{
			let s=out[i];
			out[i]=parseInt(s);
			if(isNaN(out[i]))
			{
				throw new Error("Invalid number on line "+reader.line+": '"+s+"'");
			}
		}
		return out;
	};
	this.parseFloatArray=function(reader,depth)
	{
		let src=this.mergeArray(reader,depth);
		let out=src.replace(" ","").replace("\n","").split(",");
		for(let i=0;i<out.length;i++)
		{
			let s=out[i];
			out[i]=parseFloat(s);
			if(isNaN(out[i]))
			{
				throw new Error("Invalid number on line "+reader.line+": '"+s+"'");
			}
		}
		return out;
	};
	this.parseArray=function(reader,depth)
	{
		let d=depth.value+1;
		let ret=[];
		depth.value=reader.getDepth();
		while(depth.value>=depth)
		{
			if(depth.value>d)
			{
				throw new Error("Sudden depth increase on line "+reader.line+".");
			}
			ret.push(this.parseElement(reader,depth));
			depth.value=reader.getDepth();
		}
		return ret;
	};
	this.parseObject=function(reader,depth)
	{
		let d=depth.value+1;
		let ret={};
		depth.value=reader.getDepth();
		while(depth.value>=depth)
		{
			if(depth.value>d)
			{
				throw new Error("Sudden depth increase on line "+reader.line+".");
			}
			ret[this.getName(reader)]=this.parseElement(reader,depth);
			depth.value=reader.getDepth();
		}
		return ret;
	};
	this.getName=function(reader)
	{
		return reader.until(":");
	};
}
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
