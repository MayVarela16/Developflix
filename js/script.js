import peliculas from './peliculas.js'

document.addEventListener('DOMContentLoaded', function () {
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
  

    const mostrarPeliculas = (generoId, containerId) => {
      const generoContainer = document.getElementById(containerId);
  
      
      const peliculasGenero = peliculas.filter(pelicula => pelicula.genre_ids.includes(generoId));
  
    
      peliculasGenero.forEach(pelicula => {
        const peliculaElement = document.createElement('div');
        peliculaElement.classList.add('pelicula');

  
        const imagenElement = document.createElement('img');
        
        imagenElement.src = baseImageUrl + pelicula.poster_path;
        imagenElement.alt = pelicula.title;
  
        const tituloElement = document.createElement('p');
        tituloElement.textContent = pelicula.title;
  
        peliculaElement.appendChild(imagenElement);
        peliculaElement.appendChild(tituloElement);
  
        generoContainer.appendChild(peliculaElement);
      });
    };
  
    
    mostrarPeliculas(28, 'genero-28'); 
    mostrarPeliculas(53, 'genero-53'); 
    mostrarPeliculas(12, 'genero-12'); 
  });