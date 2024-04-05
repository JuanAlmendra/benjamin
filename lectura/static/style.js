document.addEventListener("DOMContentLoaded", function() {
    var canciones = document.querySelectorAll(".cancion");
    var reproductores = document.querySelectorAll(".audio");
    var mainPlayPause = document.querySelector("#musicPlayer #PlayPause");

   

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
        var imagen = cancion.querySelector(".imagen-cancion");
        var audio = cancion.querySelector(".audio");
        
        imagen.addEventListener("click", function() {
            // Pausar otros reproductores
            pausarOtrosReproductores(audio);

            // Reproducir o pausar el audio actual
            if (audio.paused) {
                audio.play();
                cambiarImagenReproductor(true); // Cambiar la imagen del botón de reproducción del reproductor a Pause
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

    mainPlayPause.addEventListener("click", function() {
        var audio = this.parentElement.previousElementSibling;
        if (audio.paused) {
            audio.play();
            cambiarImagenReproductor(true); // Cambiar la imagen del botón de reproducción del reproductor a Pause
        } else {
            audio.pause();
            cambiarImagenReproductor(false); // Cambiar la imagen del botón de reproducción del reproductor a Play
        }

        // Pausar otros reproductores cuando se hace clic en el botón del reproductor
        pausarOtrosReproductores(audio);
    });    
});




document.addEventListener('DOMContentLoaded', function() {
    const musicPlayers = document.querySelectorAll('.audio');
    const songName = document.getElementById('songName');
    const artistName = document.getElementById('artistName');
    const audioPlayer = document.getElementById('audioPlayer');
    const backButton = document.getElementById('Back10');
    const forwardButton = document.getElementById('Plus10');

    let currentSongIndex = 0;

    // Función para reproducir la siguiente canción
    function playNextSong() {
        currentSongIndex++;
        if (currentSongIndex >= musicPlayers.length) {
            currentSongIndex = 0;
        }
        playSongAtIndex(currentSongIndex);
    }

    // Función para reproducir la canción anterior
    function playPreviousSong() {
        currentSongIndex--;
        if (currentSongIndex < 0) {
            currentSongIndex = musicPlayers.length - 1;
        }
        playSongAtIndex(currentSongIndex);
    }

    // Función para reproducir la canción en el índice dado
    function playSongAtIndex(index) {
        const player = musicPlayers[index];
        const songTitle = player.parentElement.querySelector('.nombre').textContent;
        const artist = player.parentElement.querySelector('.artista').textContent;

        // Actualizar el reproductor de música único
        songName.textContent = songTitle; // Actualizar el nombre de la canción
        artistName.textContent = artist; // Actualizar el nombre del artista
        audioPlayer.src = player.dataset.src;
        audioPlayer.play();
    }

    backButton.addEventListener('click', playPreviousSong);
    forwardButton.addEventListener('click', playNextSong);

    musicPlayers.forEach(function(player, index) {
        player.addEventListener('play', function() {
            currentSongIndex = index;
            const songTitle = player.parentElement.querySelector('.nombre').textContent;
            const artist = player.parentElement.querySelector('.artista').textContent;

            // Actualizar el reproductor de música único
            songName.textContent = songTitle; // Actualizar el nombre de la canción
            artistName.textContent = artist; // Actualizar el nombre del artista
        });
    });
});


function playSongAtIndex(index) {
    const player = musicPlayers[index];
    const songTitle = player.parentElement.querySelector('.nombre').textContent;
    const artist = player.parentElement.querySelector('.artista').textContent;

    // Actualizar el reproductor de música único
    songName.textContent = songTitle; // Actualizar el nombre de la canción
    artistName.textContent = artist; // Actualizar el nombre del artista
    
    // Establecer el tiempo de reproducción en cero para comenzar desde el principio
    audioPlayer.currentTime = 0;
    
    audioPlayer.src = player.dataset.src;
    audioPlayer.play();
}