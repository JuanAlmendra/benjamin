document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("beat-image");
    var audio = document.getElementById("beat-audio");

    // Agregar evento de clic a la imagen
    image.addEventListener("click", function() {
        // Reproducir el audio
        if (audio.paused) {
            audio.play();
        } else {  // Si el audio está reproduciéndose, pausarlo
            audio.pause();
        }
    });
    
});
