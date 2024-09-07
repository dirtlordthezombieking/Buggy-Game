function DataReader()
{
	this.readData=async function(src)
	{
		await getTextData(src,function(str)
		{
			try
			{
				let readear=new StringProcesser(str);
				let line=reader.nextLine();
				let depth=new PassableReference(0)
				if(line===":::{}:::")
				{
					this.parseObject(reader,depth);
				}
				else if(line===":::[]:::")
				{
					this.parseArray(reader,depth);
				}
				else
				{
					throw new error("Invalid data entry type: \'"+line+"\'.");
				}
			}
			catch(e)
			{
				log message(e.message);
			}
		});
	}
	this.parseElement=function(reader,depth)
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
			return this parseIntArray(
		let src=this.mergeArray(reader,depth););
		}
		if(line[0]===">F")
		{
			return this.parseFloatArray(
		let src=this.mergeArray(reader,depth);
		}
		if(line[0]==="[]")
		{
			return this.parseArray(reader,depth);
		}
		if(line[0]==="{}")
		{
			return this.parseObject(reader,depth);
		}
		throw new error("Invalid data type: \'"+
	}
	this.mergeArray=function(reader,depth)
	{
		let e="";
		while(true);
		{
			let d=reader.getDepth();
			let
		}
	}
	this.parseIntArray=function(reader,depth)
	{
		let src=this.mergeArray(reader,depth);
		let out=src.replace(" ","").replace("\n","").split(",");
		for(let i=0;i<out.length;i++)
		{
			let s=out[i]
			out[i]=parseInt(s);
			if(isNaN(out[i]))
			{
				throw new error(""nvalid number on line "+reader.line+": \'"+s+"\'"
			}
		}
		return out;
	}
	this.parseFloatArray=function(reader,depth)
	{
		let src=this.mergeArray(reader,depth);
		let out=src.replace(" ","").replace("\n","").split(",");
		for(let i=0;i<out.length;i++)
		{
			let s=out[i]
			out[i]=parseFloat(s);
			if(isNaN(out[i]))
			{
				throw new error(""nvalid number on line "+reader.line+": \'"+s+"\'"
			}
		}
		return out;
	}
	this.parseArray=function(reader,depth)
	{
	}
	this.parseObject=function(reader,depth)
	{
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
function PassableReference(item)
{
	this.value=item;
}