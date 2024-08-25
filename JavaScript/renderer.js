var gl;

function loadShader(src)
{
	//vertex
	var vertex=document.createElement('script');
	vertex.src=src+'/vertex.glsl';
	vertex.type='notjs';
	document.getElementById("test").innerHTML="test test test";
	return;
}
function blah(src)
{
	//vertex
	var vertex=document.createElement('script');
	vertex.src=src+'/vertex.glsl';
	vertex.type='notjs';
	document.body.appendChild(vertex);
	//fragment
	var fragment=document.createElement('script');
	fragment.src=src+'/fragment.glsl';
	fragment.type='notjs';
	document.body.appendChild(fragment);
}