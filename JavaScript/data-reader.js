function readData(src)
{
	getTextData(src,function(str)
	{
		let read=new StringProcesser(str);
		letline="";
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
}