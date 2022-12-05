const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const addVector = document.getElementById('add-vector');
const resultanteVector = document.getElementById('resultante')
let firstVectorState = true;
let sumaState = false;
let iArray = 1;  
let iDatos =1;
let sumX = 0;
let sumY = 0;
canvas.width= 800;
canvas.height = 800; 
let vectores = [];
let datosVectores =[{
    mag: 0,
    ang: 0 ,
    ax:0,
    ay:0
}];

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
    const headlen = 8; // length of head in pixels
    var angle = Math.atan2(this.dy, this.dx);
    ctx.moveTo(this.fromx, this.fromy); 
    ctx.lineTo(this.tox, this.toy);
    ctx.lineTo(this.tox - headlen * Math.cos(angle - Math.PI / 6), this.toy - headlen * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(this.tox, this.toy);
    ctx.lineTo(this.tox - headlen * Math.cos(angle + Math.PI / 6), this.toy - headlen * Math.sin(angle + Math.PI / 6));
    }


}

addVector.addEventListener('click', addNewVector)
resultanteVector.addEventListener('click',resultante,{once : true});  //Nota agregar boton de borrar vectores



 

            
// Catesian plane
ctx.translate(330,310)
ctx.beginPath();
ctx.moveTo(-300,0);
            ctx.lineTo(300,0);
            ctx.stroke();
            ctx.moveTo(0,-300);
            ctx.lineTo(0, 300);
            ctx.stroke();     
            
            ctx.font = "12px Arial";
            ctx.fillText("+ x",290, -10);
            ctx.fillText("- y",10, 290);
            
            ctx.fillText("- x",-290, -10);
            ctx.fillText("+ y",10, -290);  

            let tablecontents = "";

function addNewVector(){
 
    if(firstVectorState === true){
        let mag = prompt("Magnitud del vector")
        let ang = prompt("Valor del angulo")
        console.log(ang)
        let radians = ang * ((Math.PI)/180);
        console.log(radians)
        let tox = mag*(Math.cos(radians))
        let toy = mag*(Math.sin(radians))
        let fTox = Math.trunc(tox)
        let fToy = Math.trunc(toy)
        vectores[0] = new Vector(0,0,fTox,-(fToy));
        vectores[0].draw()
        ctx.stroke()
        firstVectorState = false;

        
            for (let i = 0; i < vectores.length; i++) {
                tablecontents += "<tr>";
                datosVectores[i].mag = mag
                datosVectores[i].ang = ang
                datosVectores[i].ax = vectores[i].tox
                datosVectores[i].ay = -(vectores[i].toy)
                console.log(datosVectores)
                
                    tablecontents += "<td>" + datosVectores[i].mag + "</td>";
                    tablecontents += "<td>" + datosVectores[i].ang + "</td>";
                    tablecontents += "<td>" + datosVectores[i].ax + "</td>";
                    tablecontents += "<td>" + datosVectores[i].ay + "</td>";
                
                tablecontents += "</tr>";
            }
            document.getElementById('datos').innerHTML += tablecontents;
            console.log('quiubos' )
            console.log(vectores)

    }else if(firstVectorState === false && sumaState === false){


            let mag = prompt("Magnitud del vector")
            let ang= prompt("Valor del angulo")
            let radians = ang * ((Math.PI)/180);
            let tox = mag*(Math.cos(radians))
            let toy = mag*(Math.sin(radians))
            let fTox = Math.trunc(tox)
            let fToy = Math.trunc(toy)
            let ax = fTox;
            let ay = fToy
            let vector = new Vector(vectores[iArray-1].tox,vectores[iArray-1].toy,fTox +vectores[iArray-1].tox,-(fToy) + vectores[iArray-1].toy)
            vector.draw()
            ctx.stroke()      
            vectores.push(vector)
            iArray++;
            datosVectores.push({mag,ang,ax,ay})
            console.log("datos de vectores ")
            
            let tablecontents = "";
            
                tablecontents += "<tr>";


                
                console.log(datosVectores)
                
                    tablecontents += "<td>" + datosVectores[iDatos].mag + "</td>";
                    tablecontents += "<td>" + datosVectores[iDatos].ang + "</td>";
                    tablecontents += "<td>" + datosVectores[iDatos].ax + "</td>";
                    tablecontents += "<td>" + datosVectores[iDatos].ay + "</td>";
                
                    tablecontents += "</tr>";
            
            document.getElementById('datos').innerHTML += tablecontents;
           
            
            iDatos++;
    }

    
        
}
        
/* Resultante */
function resultante(){
/* Suma para todas las componentes de x del vector */


datosVectores.forEach(element => {
  sumX += element.ax;
});

/* Suma para todas las componentes de y del vector */

datosVectores.forEach(element => {
  sumY += element.ay;
});

/* Creación vector*/
let vector = new Vector(0,0,sumX,-(sumY))
vector.draw();
ctx.stroke();

sumaState = true;
}
    


// ctx.lineWidth = 2;
// ctx.beginPath()
// ctx.moveTo(200,0);
// ctx.lineTo(0, 00);
// ctx.stroke();
// ctx.moveTo(400,600);
// ctx.lineTo(1124,400)
// ctx.stroke();
//ctx.closePath();



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

