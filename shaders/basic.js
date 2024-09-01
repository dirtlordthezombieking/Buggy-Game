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
uniform mat3 u_proj;
varying vec2 v_texCoord;
uniform mat3 u_transform;
void main()
{
  v_texCoord=a_texCoord;
  vec2 pos=(u_proj,qvec3((u_transform*vec3(a_pos.xy,1)).xy,1)).xy;
  gl_Position=vec4(pos,0,1);
}`
logMessage("Basic Shader Version: 0.0.5 (0)");