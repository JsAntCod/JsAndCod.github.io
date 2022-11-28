const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width= 1024;
canvas.height = 800;


// ctx.lineWidth = 2;
// ctx.beginPath()
// ctx.moveTo(0,0);
// ctx.lineTo(400, 600);
// ctx.stroke();
// ctx.moveTo(400,600);
// ctx.lineTo(1124,400)
// ctx.stroke();
//ctx.closePath();

canvas_arrow(512, 400, 0, 400);

ctx.stroke();

function canvas_arrow(fromx, fromy, tox, toy) {
    var headlen = 10; // length of head in pixels
    var dx = tox - fromx;
    var dy = toy - fromy;
    var angle = Math.atan2(dy, dx);
    console.log(angle)
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
  }

class Vector{
    constructor(x,y){
        this._x = x,
        this._y = y
    }
    
    draw(){
        ctx.beginPath()
        ctx.moveTo(0,0);
        ctx.lineTo(this._x,this._y);
        ctx.stroke();
    }

};


