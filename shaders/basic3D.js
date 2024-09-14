//--FRAGMENT--
const basic3DFragment=
`precision mediump float;
uniform sampler2D u_colourTexture;
uniform vec4 u_colour;
varying vec2 v_texCoord;
varying vec3 v_normal;
varying vec4 v_colour;
void main()
{
 gl_FragColor=v_colour*u_colour*texture2D(u_colourTexture,v_texCoord);
}`
//--VERTEX--
const basic3DVertex=
`attribute vec4 a_pos;
attribute vec2 a_texCoord;
attribute vec3 a_normal;
attribute vec4 a_colour;
uniform mat4 u_proj;
varying vec2 v_texCoord;
varying vec3 v_normal;
varying vec4 v_colour;
uniform mat4 u_transform;
void main()
{
  v_texCoord=a_texCoord;
  v_normal=a_normal;
  v_colour=a_colour;
  vec3 pos=(u_proj*vec4((u_transform*vec4(a_pos.xyz,1)).xyz,1)).xyz;
  gl_Position=vec4(pos,1);
}`
logMessage("Basic3D Shader Version: 0.0.0 (0)");