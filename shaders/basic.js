logMessage("Basic Shader Version: 0.0.0")
//--FRAGMENT--
const basicFragment=
`precision mediump float;
uniform sampler2D u_colourTexture;
uniform vec4 u_colour;
varying vec2 v_texCoord;
void main()
{
 gl_FragColor=u_colour*texture2D(u_colourTexture,v_texCoord);
}`
//--VERTEX--
const basicVertex=
`attribute vec4 a_pos;
attribute vec2 a_texCoord;
uniform vec2 u_res;
varying vec2 v_texCoord;
void main()
{
	v_texCoord=a_texCoord;
  vec2 zeroToOne=a_pos.xy/u_res;
  vec2 zeroToTwo=zeroToOne*2.0;
  vec2 clipSpace=zeroToTwo-1.0;
  gl_Position=vec4(clipSpace,0,1);
}`