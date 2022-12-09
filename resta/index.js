const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const plusAx = document.querySelector("#ax-plus");
const minusAx = document.querySelector("#ax-minus");
const plusAy = document.querySelector("#ay-plus");
const minusAy = document.querySelector("#ay-minus");
const plusBx = document.querySelector("#bx-plus");
const minusBx = document.querySelector("#bx-minus");
const plusBy = document.querySelector("#by-plus");
const minusBy = document.querySelector("#by-minus");
const grid = document.querySelector("#show-grid");
const buttons = document.querySelector("#buttons");
const classAtribute = document.createAttribute('class')
const addVector = document.getElementById('add-vector');
let label = document.getElementById('label');
let vectorBState = false;
let ax = document.querySelector("#ax");
let ay = document.querySelector("#ay");
let bx = document.querySelector("#bx");
let by = document.querySelector("#by");
let axValue = 100;
let ayValue = 0;
let bxValue = 100;
let byValue = 0;
let gridState = false;
let mVector2;
canvas.width= 800;
canvas.height = 800; 
ctx.translate(330,310)

  ax.innerText = axValue;
  ay.innerText = ayValue;
  bx.innerText = 0;
  by.innerText = byValue

  const vector1 = (fromx,fromy,tox,toy) =>({
    fromx: fromx,
    fromy:fromy,
    tox:tox,
    toy:toy,
    dx: tox - fromx,
    dy: toy - fromy,
    draw(){
      const headlen = 8; // length of head in pixels
      var angle = Math.atan2(this.dy,this.dx);
      ctx.moveTo(this.fromx,this.fromy); 
      ctx.lineTo(this.tox, this.toy);
      ctx.lineTo(this.tox - headlen * Math.cos(angle - Math.PI / 6), this.toy - headlen * Math.sin(angle - Math.PI / 6));
      ctx.moveTo(this.tox, this.toy);
      ctx.lineTo(this.tox - headlen * Math.cos(angle + Math.PI / 6), this.toy - headlen * Math.sin(angle + Math.PI / 6));
      ctx.stroke()   
    }
  });
  const vector2 = (fromx,fromy,tox,toy) =>({
    fromx: fromx,
    fromy:fromy,
    tox:tox,
    toy:toy,
    dx: tox - fromx,
    dy: toy - fromy,
    draw(){
      const headlen = 8; // length of head in pixels
      var angle = Math.atan2(this.dy,this.dx);
      ctx.moveTo(this.fromx,this.fromy); 
      ctx.lineTo(this.tox, this.toy);
      ctx.lineTo(this.tox - headlen * Math.cos(angle - Math.PI / 6), this.toy - headlen * Math.sin(angle - Math.PI / 6));
      ctx.moveTo(this.tox, this.toy);
      ctx.lineTo(this.tox - headlen * Math.cos(angle + Math.PI / 6), this.toy - headlen * Math.sin(angle + Math.PI / 6));
      ctx.stroke()   
    }
    });

let mVector1 = vector1(0,0,axValue,ayValue)

mVector1.draw();
addVector.addEventListener('click', ()=>{
  if(vectorBState===false){
  ctx.beginPath();
  mVector2= vector2(axValue,-(ayValue),bxValue+ (axValue),byValue)
  mVector2.draw();
  vectorBState= true;
  bx.innerText = bxValue;
  }
  else{
    alert("No se pueden agregar mas vectores")
  }
})

let gridActivo = 0;

function showgrid(){
  ctx.beginPath();
  if(gridState===false){
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
      gridState= true
    }
}

    
    grid.addEventListener('click', ()=>{

  
      showgrid();

    });


    plusAx.addEventListener("click", ()=>{


        if(vectorBState===true){
          axValue+= 5;
          ax.innerText = axValue; 
          update();
          if(gridState===true){
            gridState=false
            showgrid()
          }
          ctx.beginPath();
          ctx.moveTo(0,0)
          mVector1= vector1(0,0,axValue,-(ayValue));
          mVector1.draw();
          mVector2= vector2(axValue,-(ayValue),bxValue+ (axValue),byValue)
          mVector2.draw();
        }else{
          axValue+= 5;
          ax.innerText = axValue; 
          
         update();
         if(gridState===true){
          gridState=false
          showgrid()
          }
        ctx.beginPath();
         ctx.moveTo(0,0)
         mVector1 = vector1(0,0,axValue,-(ayValue));
         mVector1.draw();
        }
      
    });

    minusAx.addEventListener("click", ()=>{
      if(vectorBState===true){
        update();
        if(gridState===true){
          gridState=false
          showgrid()
        }
        axValue-= 5;
        ax.innerText = axValue; 
        ctx.beginPath();
        ctx.moveTo(0,0)
        mVector1= vector1(0,0,axValue,-(ayValue));
        mVector1.draw();
        mVector2= vector2(axValue,-(ayValue),bxValue+ (axValue),byValue)
        mVector2.draw();
      }else{
        axValue-= 5;
        ax.innerText = axValue; 
        
       update();
       if(gridState===true){
        gridState=false
        showgrid()
      }
       ctx.beginPath();
       ctx.moveTo(0,0)
       mVector1 = vector1(0,0,axValue,-(ayValue));
       mVector1.draw();
      }
    
    });
    plusAy.addEventListener("click", ()=>{

      if(vectorBState===true){
        update();
        if(gridState===true){
          gridState=false
          showgrid()
        }
        ayValue+= 5;
        ay.innerText = ayValue; 
        ctx.beginPath();
        ctx.moveTo(0,0)
        mVector1= vector1(0,0,axValue,-(ayValue));
        mVector1.draw();
        mVector2= vector2(axValue,-(ayValue),bxValue+ (axValue),byValue)
        mVector2.draw();
      }else{
      ayValue+= 5;
      ay.innerText = ayValue;
      update();
      if(gridState===true){
        gridState=false
        showgrid()
      }
       ctx.beginPath();
       ctx.moveTo(0,0)
       mVector1 = vector1(0,0,axValue,-(ayValue));
       mVector1.draw();
      }
    });

    minusAy.addEventListener("click", ()=>{
     
      if(vectorBState===true){
        update();
        if(gridState===true){
          gridState=false
          showgrid()
        }
        ayValue-= 5;
        ay.innerText = ayValue; 
        ctx.beginPath();
        ctx.moveTo(0,0)
        mVector1= vector1(0,0,axValue,-(ayValue));
        mVector1.draw();
        mVector2= vector2(axValue,-(ayValue),bxValue+ (axValue),byValue)
        mVector2.draw();
      }else{ 

        ayValue-= 5;
        ay.innerText = ayValue;
        update();
        if(gridState===true){
          gridState=false
          showgrid()
        }
        ctx.beginPath();
        ctx.moveTo(0,0)
        mVector1 = vector1(0,0,axValue,-(ayValue));
        mVector1.draw();
      }
    });
    plusBx.addEventListener("click", ()=>{
      if(vectorBState ===true){
      bxValue+= 5;
      bx.innerText = bxValue;
      update();
      if(gridState===true){
        gridState=false
        showgrid()
      }
      ctx.beginPath();  
      mVector1.draw()
      mVector2 = vector2(axValue,-(ayValue),bxValue+ (axValue),byValue)
      mVector2.draw();
      }else{
        alert("No se ha agregado el vector B")
      }
    });
    minusBx.addEventListener("click", ()=>{
     
      if(vectorBState ===true){
        bxValue-= 5;
        bx.innerText = bxValue;
        update();
        if(gridState===true){
          gridState=false
          showgrid()
        }
        ctx.beginPath();  
        mVector1.draw()
        mVector2 = vector2(axValue,-(ayValue),bxValue+ (axValue),byValue)
        mVector2.draw();
        }else{
          alert("No se ha agregado el vector B")
        }
    
    });
    plusBy.addEventListener("click", ()=>{
     
    
      if(vectorBState ===true){
        byValue+= 5;
        by.innerText = byValue;
        update();
        if(gridState===true){
          gridState=false
          showgrid()
        }
        ctx.beginPath();  
        mVector1.draw()
        mVector2 = vector2(axValue,-(ayValue),bxValue+ (axValue),byValue)
        mVector2.draw();
        }else{
          alert("No se ha agregado el vector B")
        }
    
    
    });
    minusBy.addEventListener("click", ()=>{
     
      
      if(vectorBState ===true){
        byValue-= 5;
        by.innerText = byValue;
        update();
        if(gridState===true){
          gridState=false
          showgrid()
        }
        ctx.beginPath();  
        mVector1.draw()
        mVector2 = vector2(axValue,-(ayValue),bxValue+ (axValue),byValue)
        mVector2.draw();
        }else{
          alert("No se ha agregado el vector B")
        }
    
    });
  




const update = ()=>{
  ctx.clearRect(-300,-300,canvas.width,canvas.height)
}

