
document.addEventListener("DOMContentLoaded", function() {
    let canciones = document.querySelectorAll(".cancion");
    let reproductores = document.querySelectorAll(".audio");
    let mainPlayPause = document.querySelector("#musicPlayer #PlayPause");
    let playPauseButton = document.getElementById("PlayPause");
    let ultimoReproductor;

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
