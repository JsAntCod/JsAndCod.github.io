const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const addVector = document.getElementById('add-vector');
const resultanteVector = document.getElementById('resultante');
let rmag= document.getElementById('mag')
let rang= document.getElementById('ang')
let rx= document.getElementById('rx')
let ry= document.getElementById('ry')
let firstVectorState = true;
let sumaState = false;
let iArray = 1;  
let iDatos =1;
let sumX = 0;
let sumY = 0;
canvas.width= 800;
canvas.height = 650; 
ctx.translate(330,310)
let vectores = [];
let datosVectores =[{
    mag: 0,
    ang: 0,
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
resultanteVector.addEventListener('click',resultante); 



 

            
//Catesian plane
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
        let radians = ang * ((Math.PI)/180);
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
                
                    tablecontents += "<td>" + datosVectores[i].mag + "</td>";
                    tablecontents += "<td>" + datosVectores[i].ang + "</td>";
                    tablecontents += "<td>" + datosVectores[i].ax + "</td>";
                    tablecontents += "<td>" + datosVectores[i].ay + "</td>";
                
                tablecontents += "</tr>";
            }
            document.getElementById('datos').innerHTML += tablecontents;


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
            
            let tablecontents = "";
            
                tablecontents += "<tr>";
                
                    tablecontents += "<td>" + datosVectores[iDatos].mag + "</td>";
                    tablecontents += "<td>" + datosVectores[iDatos].ang + "</td>";
                    tablecontents += "<td>" + datosVectores[iDatos].ax + "</td>";
                    tablecontents += "<td>" + datosVectores[iDatos].ay + "</td>";
                
                    tablecontents += "</tr>";
            
            document.getElementById('datos').innerHTML += tablecontents;
           
            
            iDatos++;
    }else if(sumaState === true){
        alert("No se pueden agregar mas vectores")
    }

    
        
}
        
/* Resultante */
function resultante(){

    if(vectores.length === 0){
        alert("Agregue un vector")
    }else if(vectores.length === 1){
        alert("Agregue un vector mas para poder realizar una suma de vectores")
    }else if(vectores.length >=2 && sumaState === false){
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

    rmag.innerHTML = Math.trunc(Math.sqrt((sumX**2)+((-sumY)**2)));
    rang.innerHTML = Math.trunc(Math.tanh(sumY,sumX) * (180/Math.PI))
    rx.innerHTML = sumX;
    ry.innerHTML = sumY;

    ctx.font = "12px Arial";
    ctx.fillStyle = 'red'
    ctx.fillText("R",(sumX/2), ((-sumY)/2) + 20);


    sumaState = true;
}else{
    alert("Ya ha realizado la suma de vectores, borre los vectores y vuelva a realizar otra suma")
}
};


    

