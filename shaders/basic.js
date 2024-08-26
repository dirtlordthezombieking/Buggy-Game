//--FRAGMENT--
const basicFragment=
"precision mediump float;"+
"void main()"+
"{"+
"        gl_FragColor=vec4(1.0,0.0,0.5,1.0);"+
"}";
//--VERTEX--
const basicVertex=
"attribute vec4 a_pos;"+
"void main()"+
"{"+
"        gl_Position=a_pos"+
"}";