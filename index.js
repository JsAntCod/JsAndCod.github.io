const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width= 800;
canvas.height = 600;



ctx.beginPath()
ctx.moveTo(0,0);
ctx.lineTo(400, 600);
ctx.stroke();


ctx.closePath();



class Vector{
    constructor(magnitud,angulo){

    }
    



}