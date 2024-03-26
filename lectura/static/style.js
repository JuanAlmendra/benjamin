document.addEventListener("DOMContentLoaded", function() {
    var imagenes = document.querySelectorAll(".imagen-cancion");
    var reproductores = document.querySelectorAll(".audio");

    // Función para pausar todos los reproductores excepto el dado
    function pausarOtrosReproductores(exceptoEste) {
        reproductores.forEach(function(reproductor) {
            if (reproductor !== exceptoEste) {
                reproductor.pause();
            }
        });
    }

    // Agregar evento de clic a las imágenes
    imagenes.forEach(function(imagen) {
        imagen.addEventListener("click", function() {
            var audio = this.parentElement.querySelector(".audio");

            // Pausar otros reproductores
            pausarOtrosReproductores(audio);

            // Reproducir o pausar el audio actual
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        });
    });

    // Agregar evento de clic a los reproductores
    reproductores.forEach(function(reproductor) {
        reproductor.addEventListener("play", function() {
            // Pausar otros reproductores
            pausarOtrosReproductores(this);
        });
    });
});
