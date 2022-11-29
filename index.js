const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const addVector = document.getElementById('add-vector');

canvas.width= 1024;
canvas.height = 800;

addVector.addEventListener('click', addNewVector)
let vectores = [];
let firstVectorState = true;
let secondVectorState = false;
console.log(vectores)
let i = 1;  

function addNewVector(){
 
    if(firstVectorState === true){
        let tox = prompt("Agregar valor en x")
        let toy = prompt("Agregar valor en y")
        vectores[0] = new Vector(0,0,tox,toy);
        vectores[0].draw()
        ctx.stroke()
        firstVectorState = false;
    }else if(firstVectorState === false){


            
            let tox = prompt("Agregar valor en x")
            let toy = prompt("Agregar valor en y")
            vector = new Vector(vectores[i-1].tox,vectores[i-1].toy,tox,toy);
            vector.draw()
            ctx.stroke()      
            vectores.push(vector)
            console.log(vectores)
            console.log('holis') 
            i++;
            secondVectorState = true;
        
    
    }

    
        
}

// ctx.lineWidth = 2;
// ctx.beginPath()
// ctx.moveTo(0,0);
// ctx.lineTo(400, 600);
// ctx.stroke();
// ctx.moveTo(400,600);
// ctx.lineTo(1124,400)
// ctx.stroke();
//ctx.closePath();

class Vector {
    constructor(fromx, fromy, tox, toy){
        this.fromx = fromx;
        this.fromy = fromy;
        this.tox = tox;
        this.toy = toy;
        this.dx = tox - fromx;
        this.dy = toy - fromy;

    }

    draw(){
    const headlen = 10; // length of head in pixels
    var angle = Math.atan2(this.dy, this.dx);
    ctx.moveTo(this.fromx, this.fromy);
    ctx.lineTo(this.tox, this.toy);
    ctx.lineTo(this.tox - headlen * Math.cos(angle - Math.PI / 6), this.toy - headlen * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(this.tox, this.toy);
    ctx.lineTo(this.tox - headlen * Math.cos(angle + Math.PI / 6), this.toy - headlen * Math.sin(angle + Math.PI / 6));
    }


}


/*   Cuando se de un clic activar este evento
let vector= [];
for(let i=1; i<=vector; i++){ 
    vector[i] = new Vector();
} */


/* let vectornew = new Vector(0,0,600,200)
let vectornew2 = new Vector(0,0,1024,100)
let vectornew3 = new Vector(0,0,400,50)
vectornew.draw();
vectornew2.draw();  
vectornew3.draw();
ctx.stroke();
 */
/* function canvas_arrow(fromx, fromy, tox, toy) {
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
    canvas_arrow();
    ctx.stroke;
  } */

/* class Vector{
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
 */

