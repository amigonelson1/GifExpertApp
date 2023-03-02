import React from 'react';
import ReactDOM from 'react-dom/client';
import GifExpertApp from './GifExpertApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
)

/* para despliegues de prueba:
opcion A: 'https://www.netlify.com/', es sencillo, simplemente arrastrar la carpeta 'dist' que se crea al dar 'yarn build' y listo;
opcion B: lo subiremos a gitpages con los siguientes pasos:
1. Al crear el build renombramos la carpeta 'dist' a 'docs';
2. Dentro del index de 'docs' debemos adicionar '.' antes de los '/' de las hres o src presentes del head;
3. Actualizamos los cambios y subimos a github;
4. Nos dirigimos al repositorio, luego a settings-> pages -> Bajo source seleccionamos 'Main' y seleccionamos la carpeta 'docs', por ultimo 'save';
5. Esperamos mientras se hace el despliegue, esto puede demorar
*/
