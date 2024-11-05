document.getElementById('light-mode').addEventListener('click', function() {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
  });
  
  document.getElementById('dark-mode').addEventListener('click', function() {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  });


  document.addEventListener('DOMContentLoaded', inicio_carrusel);

  let imagenes;
  
  function inicio_carrusel()
  {
      imagenes = document.querySelectorAll(".carrusel img");
      let indiceActual = 0;
  
      document.getElementById("anterior").addEventListener("click", function() {
          indiceActual = (indiceActual > 0) ? indiceActual - 1 : imagenes.length - 1;
          mostrarImagen(indiceActual);
      });
      
      document.getElementById("siguiente").addEventListener("click", function() {
          indiceActual = (indiceActual < imagenes.length - 1) ? indiceActual + 1 : 0;
          mostrarImagen(indiceActual);
      });
      
      mostrarImagen(indiceActual);
  
      setInterval(function(){
          indiceActual = (indiceActual < imagenes.length - 1) ? indiceActual + 1 : 0;
          mostrarImagen(indiceActual);   
      },5000);    
  }
  
  function mostrarImagen(indice) 
  {
      imagenes.forEach((img, i) => {
          
          if(i === indice) 
          {
              img.classList.remove('img_oculto');
              img.classList.add('img_visible');
          }
          else
          {
              img.classList.add('img_oculto');
              img.classList.remove('img_visible');
          }
           
      });
  }
  
  
  