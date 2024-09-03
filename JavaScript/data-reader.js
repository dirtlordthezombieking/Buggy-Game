function readData(src)
{
	let read=new StringProcesser(readString(src));
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