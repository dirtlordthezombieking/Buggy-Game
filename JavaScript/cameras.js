function Camera2D(width,height)
{
	this.w=width;
	this.h=height;
	this.transform=
	[
		 2 / width, 0,          0,
		 0,        -2 / height, 0,
		-1,         1,          1
	]
}