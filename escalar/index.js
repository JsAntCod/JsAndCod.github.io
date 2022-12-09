const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const escalarAPlus = document.querySelector("#e-a-plus")
const escalarAMinus = document.querySelector("#e-a-minus")
const escalarBPlus = document.querySelector("#e-b-plus")
const escalarBMinus = document.querySelector("#e-b-minus")
const angAPlus = document.querySelector('#ang-a-plus')
const angAMinus = document.querySelector('#ang-a-minus')
const angBPlus = document.querySelector('#ang-b-plus')
const angBMinus = document.querySelector('#ang-b-minus')
const escalarA = document.querySelector('#e-a-valor')
const escalarB= document.querySelector('#e-b-valor')
const angA = document.querySelector('#ang-a-valor')
const angB = document.querySelector('#ang-b-valor')
const grid = document.querySelector("#show-grid");
const resultante = document.querySelector("#suma");
const tdMag = document.getElementById('mag-r')
const tdang = document.getElementById('ang-r')
const tdax = document.getElementById('rx')
const tday = document.getElementById('ry')




let gridState = false;
let resultanteState = false;

let escalarAValue = 0;
let escalarBValue = 0;

let angAValue= 0;
let angBValue= 0;


let mVecto1;
let mVecto2;
let mVectoR;

let aMag =0;
let bMag =0;



let axValue;
let ayValue;
let bxValue;
let byValue;
let magRValue = 0;
let angValue = 0;
let rxValue = 0;
let ryValue= 0;


escalarA.innerHTML = escalarAValue;
escalarB.innerHTML = escalarAValue;



canvas.width= 800;
canvas.height = 800; 
ctx.translate(330,310);

const update = ()=>{
    ctx.clearRect(-300,-300,canvas.width,canvas.height)
}
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
  const vector3 = (fromx,fromy,tox,toy)=>({
        fromx: fromy,
        fromy:fromx,
        tox:tox,
        toy:toy,
        dx: tox - fromx,
        dy: toy - fromy,
        draw(){
          const headlen = 15; // length of head in pixels
          var angle = Math.atan2(this.dy,this.dx);
          ctx.moveTo(this.fromx,this.fromy); 
          ctx.lineTo(this.tox, this.toy);
          ctx.lineTo(this.tox - headlen * Math.cos(angle - Math.PI / 6), this.toy - headlen * Math.sin(angle - Math.PI / 6));
          ctx.moveTo(this.tox, this.toy);
          ctx.lineTo(this.tox - headlen * Math.cos(angle + Math.PI / 6), this.toy - headlen * Math.sin(angle + Math.PI / 6));
          ctx.stroke()   
      
          ctx.font = "12px Arial";
          ctx.fillStyle = 'red'
          ctx.fontS
          ctx.fillText("R",(this.tox/2), (this.toy/2) + 20);
        }
      });



grid.addEventListener('click',()=>{
    showgrid();
})


resultante.addEventListener('click',()=>{
    if(gridState===true){
        gridState=false
        showgrid()
        }
    rxValue = axValue+bxValue;
        ryValue = (-ayValue)+ (-byValue);
        magValue = Math.trunc(Math.sqrt(((rxValue**2)+(ryValue**2))))
        tdMag.innerHTML = magValue;
        tdax.innerHTML = Math.trunc(axValue+ bxValue);
        tday.innerHTML = -(Math.trunc((-ayValue) + (-byValue)))
    mVectoR = vector3(0,0,axValue + bxValue,(-byValue));
    mVectoR.draw();
    resultanteState= true;
})

escalarAPlus.addEventListener('click',()=>{
    if(resultanteState===true && escalarAValue<5){
        ++escalarAValue;
        aMag = 50*escalarAValue
        axValue = aMag*(Math.cos(angAValue * ((Math.PI)/180)));
        ayValue = aMag*(Math.sin(angAValue * ((Math.PI)/180)));
        rxValue = axValue+bxValue;
        ryValue = (-ayValue)+ (-byValue);
        magValue = Math.trunc(Math.sqrt(((rxValue**2)+(ryValue**2))))
        tdMag.innerHTML = magValue;
        tdax.innerHTML = Math.trunc(axValue+ bxValue);
        tday.innerHTML = -(Math.trunc((-ayValue) + (-byValue)))


        update();
        if(gridState===true){
            gridState=false
            showgrid()
            }
        ctx.beginPath();
        mVecto1 = vector1(0,0,axValue,-ayValue);
        mVecto1.draw();
        mVecto2 = vector2(axValue,(-ayValue),axValue + bxValue,(-byValue));
        mVecto2.draw();
        mVectoR = vector3(0,0,axValue + bxValue,(-byValue));
        mVectoR.draw();
    }else if(escalarAValue<5 ){
        ++escalarAValue;
        aMag = 50*escalarAValue
        axValue = aMag*(Math.cos(angAValue * ((Math.PI)/180)));
        ayValue = aMag*(Math.sin(angAValue * ((Math.PI)/180)));

        update()
        if(gridState===true){
            gridState=false
            showgrid()
            }
        ctx.beginPath()
        mVecto1 = vector1(0,0,axValue,-ayValue)
        mVecto1.draw();
        mVecto2 = vector2(axValue,(-ayValue),axValue + bxValue,(-byValue))
        mVecto2.draw()
        
    }else {
        alert("Maximo valor")
    }
    escalarA.innerHTML = escalarAValue;

})
escalarAMinus.addEventListener('click',()=>{
    if(resultanteState===true && escalarAValue>-5){
        --escalarAValue;
        aMag = 50*escalarAValue
        axValue = aMag*(Math.cos(angAValue * ((Math.PI)/180)));
        ayValue = aMag*(Math.sin(angAValue * ((Math.PI)/180)));
        
        rxValue = axValue+bxValue;
        ryValue = (-ayValue)+ (-byValue);
        magValue = Math.trunc(Math.sqrt(((rxValue**2)+(ryValue**2))))
        tdMag.innerHTML = magValue;
        tdax.innerHTML = Math.trunc(axValue+ bxValue);
        tday.innerHTML = -(Math.trunc((-ayValue) + (-byValue)))

        update();
        if(gridState===true){
            gridState=false
            showgrid()
            }
        ctx.beginPath();
        mVecto1 = vector1(0,0,axValue,-ayValue);
        mVecto1.draw();
        mVecto2 = vector2(axValue,(-ayValue),axValue + bxValue,(-byValue));
        mVecto2.draw();
        mVectoR = vector3(0,0,axValue + bxValue,(-byValue));
        mVectoR.draw();
    }else if(escalarAValue>-5){
        escalarAValue--;
        aMag = 50*escalarAValue
        axValue = aMag*(Math.cos(angAValue * ((Math.PI)/180)));
        ayValue = aMag*(Math.sin(angAValue * ((Math.PI)/180)));

        update()
        if(gridState===true){
            gridState=false
            showgrid()
            }
        ctx.beginPath()
        mVecto1 = vector1(0,0,axValue,-ayValue)
        mVecto1.draw();
        mVecto2 = vector2(axValue,(-ayValue),axValue + bxValue,(-byValue))
        mVecto2.draw()
    }else{
        alert("Maximo valor")
    }
    escalarA.innerHTML = escalarAValue;
})

escalarBPlus.addEventListener('click',()=>{
    if(resultanteState===true && escalarAValue<5){
        ++escalarBValue;
        bMag = 50*escalarBValue
        bMag =50*escalarBValue;
        bxValue = bMag*(Math.cos(angBValue * ((Math.PI)/180)));
        byValue = bMag*(Math.sin(angBValue * ((Math.PI)/180)));
        rxValue = axValue+bxValue;
        ryValue = (-ayValue)+ (-byValue);
        magValue = Math.trunc(Math.sqrt(((rxValue**2)+(ryValue**2))))
        tdMag.innerHTML = magValue;
        tdax.innerHTML = Math.trunc(axValue+ bxValue);
        tday.innerHTML = -(Math.trunc((-ayValue) + (-byValue)))
        update();
        if(gridState===true){
            gridState=false
            showgrid()
            }
        ctx.beginPath();
        mVecto1 = vector1(0,0,axValue,-ayValue);
        mVecto1.draw();
        mVecto2 = vector2(axValue,(-ayValue),axValue + bxValue,(-byValue));
        mVecto2.draw();
        mVectoR = vector3(0,0,axValue + bxValue,(-byValue));
        mVectoR.draw();
    }else if(escalarBValue<5){
        ++escalarBValue;
        bMag =50*escalarBValue;
        bxValue = bMag*(Math.cos(angBValue * ((Math.PI)/180)));
        byValue = bMag*(Math.sin(angBValue * ((Math.PI)/180)));

        update()
        if(gridState===true){
            gridState=false
            showgrid()
          }
        ctx.beginPath()
        mVecto1 = vector1(0,0,axValue,-ayValue)
        mVecto1.draw();
        mVecto2 = vector2(axValue,(-ayValue),axValue + bxValue,-byValue)
        mVecto2.draw()
        
    }else{
        alert("Maximo valor")
    }
    escalarB.innerHTML = escalarBValue;
})
escalarBMinus.addEventListener('click',()=>{
   
    if(resultanteState===true && escalarBValue>-5){
        escalarBValue--;
        bMag = 50*escalarBValue
        bxValue = bMag*(Math.cos(angBValue * ((Math.PI)/180)));
        byValue = bMag*(Math.sin(angBValue * ((Math.PI)/180)));
        axValue = aMag*(Math.cos(angAValue * ((Math.PI)/180)));
        ayValue = aMag*(Math.sin(angAValue * ((Math.PI)/180)));
        rxValue = axValue+bxValue;
        ryValue = (-ayValue)+ (-byValue);
        magValue = Math.trunc(Math.sqrt(((rxValue**2)+(ryValue**2))))
        tdMag.innerHTML = magValue;
        tdax.innerHTML = Math.trunc(axValue+ bxValue);
        tday.innerHTML = -(Math.trunc((-ayValue) + (-byValue)))
        update();
        if(gridState===true){
            gridState=false
            showgrid()
            }
        ctx.beginPath();
        mVecto1 = vector1(0,0,axValue,-ayValue);
        mVecto1.draw();
        mVecto2 = vector2(axValue,(-ayValue),axValue + bxValue,(-byValue));
        mVecto2.draw();
        mVectoR = vector3(0,0,axValue + bxValue,(-byValue));
        mVectoR.draw();
    }else if(escalarBValue>-5){
     escalarBValue--;
     bMag =50*escalarBValue;
     bxValue = bMag*(Math.cos(angBValue * ((Math.PI)/180)));
     byValue = bMag*(Math.sin(angBValue * ((Math.PI)/180)));
     axValue = aMag*(Math.cos(angAValue * ((Math.PI)/180)));
     ayValue = aMag*(Math.sin(angAValue * ((Math.PI)/180)));
     update()
     if(gridState===true){
        gridState=false
        showgrid()
        }
        ctx.beginPath()
        mVecto1 = vector1(0,0,axValue,-ayValue)
        mVecto1.draw();
        mVecto2 = vector2(axValue,(-ayValue),axValue + bxValue,-byValue)
        mVecto2.draw()
    }else{
        alert("Maximo valor")
    }
    escalarB.innerHTML = escalarBValue;
})

angAPlus.addEventListener('click',()=>{
    angAValue += 10;
    aMag = 50*escalarAValue
        axValue = aMag*(Math.cos(angAValue * ((Math.PI)/180)));
        ayValue = aMag*(Math.sin(angAValue * ((Math.PI)/180)));
        
        update()
        if(gridState===true){
            gridState=false
            showgrid()
            }
        ctx.beginPath()
        mVecto1 = vector1(0,0,axValue,-ayValue)
        mVecto1.draw();
        mVecto2 = vector2(axValue,(-ayValue),axValue + bxValue,(-byValue))
        mVecto2.draw()
        if(resultanteState===true){
            rxValue = axValue+bxValue;
            ryValue = (-ayValue)+ (-byValue);
            magValue = Math.trunc(Math.sqrt(((rxValue**2)+(ryValue**2))))
            tdMag.innerHTML = magValue;
            tdax.innerHTML = Math.trunc(axValue+ bxValue);
            tday.innerHTML = -(Math.trunc((-ayValue) + (-byValue)))
        update();
        if(gridState===true){
            gridState=false
            showgrid()
            }
        ctx.beginPath();
        mVecto1 = vector1(0,0,axValue,-ayValue);
        mVecto1.draw();
        mVecto2 = vector2(axValue,(-ayValue),axValue + bxValue,(-byValue));
        mVecto2.draw();
        mVectoR = vector3(0,0,axValue + bxValue,(-byValue));
        mVectoR.draw();
        }
    if(angAValue===360){
        alert("Maximo valor")
    }
    angA.innerHTML = angAValue;
})

angAMinus.addEventListener('click',()=>{

    if(resultanteState===true && angAValue > 0){
        angAValue -= 10;
        aMag = 50*escalarAValue
        axValue = aMag*(Math.cos(angAValue * ((Math.PI)/180)));
        ayValue = aMag*(Math.sin(angAValue * ((Math.PI)/180)));

        rxValue = axValue+bxValue;
        ryValue = (-ayValue)+ (-byValue);
        magValue = Math.trunc(Math.sqrt(((rxValue**2)+(ryValue**2))))
        tdMag.innerHTML = magValue;
        tdax.innerHTML = Math.trunc(axValue+ bxValue);
        tday.innerHTML = -(Math.trunc((-ayValue) + (-byValue)))
        update();
        if(gridState===true){
            gridState=false
            showgrid()
            }
        ctx.beginPath();
        mVecto1 = vector1(0,0,axValue,-ayValue);
        mVecto1.draw();
        mVecto2 = vector2(axValue,(-ayValue),axValue + bxValue,(-byValue));
        mVecto2.draw();
        mVectoR = vector3(0,0,axValue + bxValue,(-byValue));
        mVectoR.draw();
        } else if(angAValue > 0){
        angAValue -= 10;
        aMag = 50*escalarAValue
        axValue = aMag*(Math.cos(angAValue * ((Math.PI)/180)));
        ayValue = aMag*(Math.sin(angAValue * ((Math.PI)/180)));
        update()
        if(gridState===true){
            gridState=false
            showgrid()
            }
        ctx.beginPath()
        mVecto1 = vector1(0,0,axValue,-ayValue)
        mVecto1.draw();
        mVecto2 = vector2(axValue,(-ayValue),axValue + bxValue,(-byValue))
        mVecto2.draw()
       
    }else{
        alert("Maximo valor")
    }
    angA.innerHTML = angAValue;
})

angBPlus.addEventListener('click',()=>{
    if(resultanteState===true && angBValue< 361){
    angBValue += 10;
    bxValue = bMag*(Math.cos(angBValue * ((Math.PI)/180)));
    byValue = bMag*(Math.sin(angBValue * ((Math.PI)/180)));
    rxValue = axValue+bxValue;
    ryValue = (-ayValue)+ (-byValue);
    magValue = Math.trunc(Math.sqrt(((rxValue**2)+(ryValue**2))))
    tdMag.innerHTML = magValue;
    tdax.innerHTML = Math.trunc(axValue+ bxValue);
    tday.innerHTML = -(Math.trunc((-ayValue) + (-byValue)))
    update()
    if(gridState===true){
        gridState=false
        showgrid()
        }
    ctx.beginPath();
    mVecto1 = vector1(0,0,axValue,-ayValue);
    mVecto1.draw();
    mVecto2 = vector2(axValue,(-ayValue),axValue + bxValue,(-byValue));
    mVecto2.draw();
    mVectoR = vector3(0,0,axValue + bxValue,(-byValue));
    mVectoR.draw();
    }else {
    angBValue += 10;
    bxValue = bMag*(Math.cos(angBValue * ((Math.PI)/180)));
    byValue = bMag*(Math.sin(angBValue * ((Math.PI)/180)));
    update()
    if(gridState===true){
        gridState=false
        showgrid()
        }
        ctx.beginPath()
        mVecto1 = vector1(0,0,axValue,-ayValue)
        mVecto1.draw();
        mVecto2 = vector2(axValue,(-ayValue),axValue + bxValue,(-byValue))
        mVecto2.draw()
    }
    if(angBValue===360){
        alert("Maximo valor")
    }
    angB.innerHTML = angBValue;
})

angBMinus.addEventListener('click',()=>{
   
    if(resultanteState=== true &&  angBValue > 0){
        angBValue -= 10;
        bxValue = bMag*(Math.cos(angBValue * ((Math.PI)/180)));
        byValue = bMag*(Math.sin(angBValue * ((Math.PI)/180)));
        rxValue = axValue+bxValue;
        ryValue = (-ayValue)+ (-byValue);
        magValue = Math.trunc(Math.sqrt(((rxValue**2)+(ryValue**2))))
        tdMag.innerHTML = magValue;
        tdax.innerHTML = Math.trunc(axValue+ bxValue);
        tday.innerHTML = -(Math.trunc((-ayValue) + (-byValue)))
        update()
        if(gridState===true){
            gridState=false
            showgrid()
            }
        ctx.beginPath()
        mVecto1 = vector1(0,0,axValue,-ayValue)
        mVecto1.draw();
        mVecto2 = vector2(axValue,(-ayValue),axValue + bxValue,(-byValue))
        mVecto2.draw()
        mVectoR = vector3(0,0,axValue + bxValue,(-byValue));
        mVectoR.draw();
    }else if (angBValue>0 ){
        angBValue -= 10;
        bxValue = bMag*(Math.cos(angBValue * ((Math.PI)/180)));
        byValue = bMag*(Math.sin(angBValue * ((Math.PI)/180)));
        update()
        if(gridState===true){
            gridState=false
            showgrid()
            }
        ctx.beginPath()
        mVecto1 = vector1(0,0,axValue,-ayValue)
        mVecto1.draw();
        mVecto2 = vector2(axValue,(-ayValue),axValue + bxValue,(-byValue))
        mVecto2.draw()
        
    }else if(angBValue ===0){
            alert("Valor maximo")
        }

    angB.innerHTML = angBValue;
})