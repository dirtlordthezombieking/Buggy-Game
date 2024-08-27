//--FRAGMENT--
const basicFragment=
`precision mediump float;
uniform vec4 u_colour;
void main()
{
 gl_FragColor=u_colour;
}`
//--VERTEX--
const basicVertex=
`attribute vec4 a_pos;
uniform vec2 u_res;
void main()
{
  vec2 zeroToOne=a_pos.xy/u_res;
  vec2 zeroToTwo=zeroToOne*2.0;
  vec2 clipSpace=zeroToTwo-1.0;
  gl_Position=vec4(clipSpace,0,1);
}`