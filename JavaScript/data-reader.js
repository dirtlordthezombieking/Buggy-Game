function DataReader()
{
	this.readData=async function(src,passBack)
	{
		await getTextData(src,function(str)
		{
			try
			{
				let reader=new StringProcesser(str);
				let line=reader.nextLine();
				let depth=new PassableReference(-1);
				if(line===":::{}:::")
				{
					//let t=
					passBack.parseObject(reader,depth);
					//logMessage(JSON.stringify(t));
				}
				else if(line===":::[]:::")
				{
					passBack.parseArray(reader,depth);
				}
				else
				{
					throw new Error("Invalid data entry type: '"+line+"'.");
				}
			}
			catch(e)
			{
				logMessage(e.message);
			}
		});
	};
	this.parseElement=function(reader,depth)
	{
		let l=reader.nextLine();
		let line=l.split(":");
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
			return this.parseIntArray(reader,depth);
		}
		if(line[0]===">F")
		{
			return this.parseFloatArray(reader,depth);
		}
		if(line[0]==="[]")
		{
			return this.parseArray(reader,depth);
		}
		if(line[0]==="{}")
		{
			return this.parseObject(reader,depth);
		}
		if(l==="EOF")
		{
			depth.value=-10;
			return line[0];
		}
		throw new Error("Invalid data type on line "+reader.line+": '"+line[0]+"'");
	};
	this.mergeArray=function(reader,depth)
	{
		let e="";
		let l=reader.line;
		while(true)
		{
			let d=reader.getDepth();
			let line=reader.nextLine();
			if(line===":E")
			{
				if(d!==depth.value)
				{
					throw new Error("end tag on line "+reader.line+" must match depth of start on line "+l+".");
				}
				break;
			}
			e=e+line;
		}
		return e;
	};
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
		while(depth.value>=d)
		{
			if(depth.value>d)
			{
				throw new Error("Sudden depth increase from "+d+" to "+depth.value+" on line "+reader.line+": '"+reader.nextLine()+"'.");
			}
			reader.next();
			let val=this.parseElement(reader,depth);
			if(depth.value===-10)
			{
				break;
			}
			ret.push(val);
			depth.value=reader.getDepth();
		}
		reader.pos-=depth.value;
		return ret;
	};
	this.parseObject=function(reader,depth)
	{
		let d=depth.value+1;
		let ret={};
		depth.value=reader.getDepth();
		while(depth.value>=d)
		{
			if(depth.value>d)
			{
				throw new Error("Sudden depth increase from "+d+" to "+depth.value+" on line "+reader.line+": '"+reader.nextLine()+"'.");
			}
			let name=this.getName(reader);
			//logMessage(name);
			let val=this.parseElement(reader,depth);
			if(depth.value===-10)
			{
				break;
			}
			ret[name]=val
			depth.value=reader.getDepth();
		}
		reader.pos-=depth.value;
		return ret;
	};
	this.getName=function(reader)
	{
		return reader.until(":");
	};
}
function StringProcesser(txt)
{
	this.str=txt;
	this.pos=0;
	this.line=1;
	this.next=function()
	{
		if(this.pos>=this.str.length)
		{
			return "\n";
			//throw new Error("EOF passed\n"+this.str+"\n"+this.str.length)
		}
		let c=this.str[this.pos];
		if(c==="\n")
		{
			//logMessage("line: "+this.line);
			this.line++;
			//if(this.line>300)
			//if(
			//{
			//	throw new Error("EOF passed")
			//}
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
		while(char==="\t")
		{
			char=this.next();
			i=i+1;
		}
		this.pos=this.pos-1;
		return i;
	};
}
function PassableReference(item)
{
	this.value=item;
}
logMessage("Data Reader Version: 0.0.0");
