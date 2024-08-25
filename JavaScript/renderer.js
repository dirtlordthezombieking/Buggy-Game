var gl;

function loadShader(src)
{
	//vertex
	//var vertex=document.createElement('script');
	//vertex.src=src+'/vertex.glsl';
	//vertex.type='notjs';
	//document.body.appendChild(vertex);
	//fragment
	//var fragment=document.createElement('script');
	//fragment.src=src+'/fragment.glsl';
	//fragment.type='notjs';
	//document.body.appendChild(fragment);
	document.getElementById("test").innerHTML="test shader";
	let vertex=loadScript(src+'/vertex.glsl',notjs);
	document.getElementById("test").innerHTML="test vertex";
	let fragment=loadScript(src+'/fragment.glsl',notjs);
	document.getElementById("test").innerHTML="test fragment";
	return;
}