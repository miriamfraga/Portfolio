import React from 'react';
import PropTypes from 'prop-types';
import './CanvasComponent.scss';

const CanvasComponent = () => {

  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  canvas.className = "canvasClass";
  
  const iris = new Image();
  iris.src = "./assets/irisD1.png";

  const woman = new Image();
  woman.src = './assets/mask.png';

  const womanMask = new Image();
  womanMask.src = "./assets/nomask.png";

  const mousePosition = { x: 0, y: 0};

  const eyeRadius = 5;

  function resizeCanvas(){

       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
       ctx.height = canvas.height;
       ctx.width = canvas.width;
  }


  function drawHead(){
     const x = canvas.width / 2 - woman.width / 2;
     const y = canvas.height / 2 - woman.height / 2;
      ctx.drawImage(woman, x, y);

  }
  function drawHeadMask(){
    const x = canvas.width / 2 - womanMask.width / 2;
    const y = canvas.height / 2 - womanMask.height / 2;
     ctx.drawImage(womanMask, x, y);
 }
//ESTA FUNCIÖN SIRVE PARA CALCULAR DISTANCIA ENTRE DOS PUNTOS /Va a sacar el vector unitario
  function distance(a,b){
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
  }

  function getUnitVector(a, b){
    const module = distance(a,b);
    return {
      x: (b.x - a.x) / module, 
      y: (b.y - a.y) / module
    };
  }

  function getTranslatedPosition(eP){

    if(distance(eP, mousePosition) <= eyeRadius){
      return mousePosition;
    }
    const unitVector = getUnitVector(eP, mousePosition);

    return {
      x:eP.x + eyeRadius * Math.sin(unitVector.x),
      y:eP.y + eyeRadius * Math.sin(unitVector.y)
    };
    
  }
  function drawIris(){
   const eyeOriginPositions = [
     {
        x:canvas.width / 2  - 26,
        y:canvas.height / 2 -  36
     },
     {
        x:canvas.width / 2 + 40,
        y:canvas.height / 2 - 37
     }
   ];

   const eyePositions = eyeOriginPositions.map(getTranslatedPosition);

   eyePositions.forEach((eP)=>{

     ctx.drawImage(iris, eP.x - iris.width / 2, eP.y  -iris.height / 2)
    });
  }

  function cleanCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  function render(){

         cleanCanvas();
         drawHead();
         drawIris();
         drawHeadMask();
        
        
  }
  function onResize(){
     resizeCanvas();
     render();
  }

  function onMouseMove(event){
    mousePosition.x = event.clientX; // Use clientX instead of offsetX
    mousePosition.y = event.clientY; // Use clientY instead of offsetY
   
   
    
    render();

  }
  function first(){
  resizeCanvas();
  render();
  drawHead();
  window.addEventListener('resize', onResize );
  document.addEventListener('mousemove', onMouseMove);
  }
  window.onload = first;
return(
  <div></div>
)



};

CanvasComponent.propTypes = {};

CanvasComponent.defaultProps = {};

export default CanvasComponent;
