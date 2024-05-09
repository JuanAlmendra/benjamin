
document.addEventListener("DOMContentLoaded", function() {
    let canciones = document.querySelectorAll(".cancion");
    let reproductores = document.querySelectorAll(".audio");
    let mainPlayPause = document.querySelector("#musicPlayer #PlayPause");
    let playPauseButton = document.getElementById("PlayPause");
    let ultimoReproductor;

    //control de audio
    

    

    //constantes para titulos del reproductor 
    const artistaReproductor = document.querySelector('.artistaReproductor');
    const nombreReproductor = document.querySelector('.nombreReproductor');
    const archivo_mp3_reproductor = document.querySelector('.archivo_mp3_reproductor');
    const imagenReproductor = document.querySelector('.imagenReproductor');    
    const duracionReproductor = document.querySelector('.duracionReproductor'); 
    let contenedorImagenes = document.querySelectorAll(".imagen-cancion");

    let indiceMusica=0
    let ultimoIndiceMusica = -1;

    const pruebas=JSON.parse(document.getElementById('musicas').textContent)
    console.log(pruebas)

    //muestra el primer elemento antes de que suene la cancion no sirve pero puede servir mas adelante
    artistaReproductor.textContent=pruebas[indiceMusica].artista
    nombreReproductor.textContent=pruebas[indiceMusica].nombre
    console.log(pruebas[indiceMusica].nombre);
    archivo_mp3_reproductor.textContent=pruebas[indiceMusica].archivo_mp3
    
    duracionReproductor.textContent=pruebas[indiceMusica].duracion


    

    // Escuchar el evento 'play' en cada elemento de audio
    reproductores.forEach(function(reproductor) {
        reproductor.addEventListener('play', function() {
             // Pausar todas las demás canciones que se estén reproduciendo
             reproductores.forEach(function(otroReproductor) {
                if (otroReproductor !== reproductor) {
                    otroReproductor.pause();
                    otroReproductor.currentTime = 0; // Volver al inicio
                }
            });

            // Obtener el nombre de la canción que se está reproduciendo
            const duracionCancion = this.parentElement.querySelector('.duracion').textContent;

            // Mostrar el nombre de la canción que se está reproduciendo
            duracionReproductor.textContent = duracionCancion;

            ultimoIndiceMusica = indiceMusica;
        });
    });

    // Restablecer el último reproductor cuando se hace clic en otra canción
    canciones.forEach(function(cancion, index) {
        cancion.addEventListener('click', function() {
        });
    });



    contenedorImagenes.forEach(function(imagen) {
        imagen.addEventListener('click', function() {
            // Obtener la URL de la imagen seleccionada
            const imagenSeleccionada = this.getAttribute('src');

            // Actualizar la imagen en la sección del reproductor
            imagenReproductor.setAttribute('src', imagenSeleccionada);
        });
    });
    
    


    // Escuchar el evento 'play' en cada elemento de audio
    reproductores.forEach(function(reproductor) {
        reproductor.addEventListener('play', function() {
            // Obtener el artista de la canción que se está reproduciendo
            const artistaCancion = this.parentElement.querySelector('.artista').textContent;

            // Mostrar el artista de la canción que se está reproduciendo
            artistaReproductor.textContent = artistaCancion;
        });
    });

    // Escuchar el evento 'play' en cada elemento de audio
    reproductores.forEach(function(reproductor) {
        reproductor.addEventListener('play', function() {
            // Obtener el nombre de la canción que se está reproduciendo
            const nombreCancion = this.parentElement.querySelector('.nombre').textContent;

            // Mostrar el nombre de la canción que se está reproduciendo
            nombreReproductor.textContent = nombreCancion;
        });
    });


    reproductores.forEach(function(reproductor) {
        reproductor.addEventListener('play', function() {
            // Obtener la URL del archivo de audio desde el atributo data-src
            const archivo_mp3_Cancion = this.getAttribute('data-src');
    
            // Obtener solo el nombre del archivo de la URL completa
            const nombreArchivo = archivo_mp3_Cancion.split('/').pop();
    
            // Mostrar el nombre del archivo en el contenedor correspondiente
            archivo_mp3_reproductor.textContent = nombreArchivo;
        });
    });
    
   
    


    // Función para pausar todos los reproductores excepto el dado
    function pausarOtrosReproductores(exceptoEste) {
        reproductores.forEach(function(reproductor) {
            if (reproductor !== exceptoEste) {
                reproductor.pause();
            }
        });
    }

    // Función para cambiar la imagen del botón de reproducción del reproductor
    function cambiarImagenReproductor(estadoReproduccion) {
        if (estadoReproduccion) {
            mainPlayPause.src = '/static/Pause.svg'; // Cambiar la imagen a Pause.svg si el reproductor está reproduciendo
        } else {
            mainPlayPause.src = '/static/Play.svg'; // Cambiar la imagen a Play.svg si el reproductor está pausado
        }
    }

    // Agregar evento de clic a las imágenes y reproductores
    canciones.forEach(function(cancion) {
        let imagen = cancion.querySelector(".imagen-cancion");
        let audio = cancion.querySelector(".audio");
        
        imagen.addEventListener("click", function() {
            // Pausar otros reproductores
            pausarOtrosReproductores(audio);

            // Reproducir o pausar el audio actual
            if (audio.paused) {
                audio.play();
                cambiarImagenReproductor(true); // Cambiar la imagen del botón de reproducción del reproductor a Pause
                ultimoReproductor = audio; // Guardar referencia al último reproductor reproducido
            } else {
                audio.pause();
                cambiarImagenReproductor(false); // Cambiar la imagen del botón de reproducción del reproductor a Play
            }
        });

        audio.addEventListener("play", function() {
            // Pausar otros reproductores
            pausarOtrosReproductores(this);

            // Cambiar la imagen del botón de reproducción del reproductor a Pause
            cambiarImagenReproductor(true);
        });

        audio.addEventListener("pause", function() {
            // Cambiar la imagen del botón de reproducción del reproductor a Play cuando se pausa el audio desde el propio reproductor
            cambiarImagenReproductor(false);
        });
    });

    // Agregar un evento de clic al botón de reproducción/pausa del reproductor
    playPauseButton.addEventListener("click", function() {
        if (ultimoReproductor) {
            // Verificar si el último reproductor está pausado
            if (ultimoReproductor.paused) {
                // Si está pausado, reproducir la canción
                ultimoReproductor.play();
                // Cambiar la imagen del botón a la de pausa
                playPauseButton.src = '/static/Pause.svg';
            } else {
                // Si se está reproduciendo, pausar la canción
                ultimoReproductor.pause();
                // Cambiar la imagen del botón a la de reproducción
                playPauseButton.src = '/static/Play.svg';
            }

            // Pausar otros reproductores cuando se hace clic en el botón del reproductor
            pausarOtrosReproductores(ultimoReproductor);
        }
    });
});
