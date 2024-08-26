//--FRAGMENT--
const basicFragment=
"precision mediump float;"+
"void main()"+
"{"+
" gl_FragColor=vec4(1.0,0.0,0.5,1.0);"+
"}";
//--VERTEX--
const basicVertex=
"attribute vec4 a_pos;"+
"uniform vec2 u_res;"+
"void main()"+
"{"+
"  vec2 zeroToOne=a_pos.xy/u_res;"+
"  vec2 zeroToTwo=zeroToOne*2.0;"+
"  vec2 clipSpace=zeroToTwo-1.0;
//"  gl_Position=a_pos;"+
"  gl_Position=vec4(clipSpace,0,1);"+
"}";