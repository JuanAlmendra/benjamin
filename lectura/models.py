from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from mutagen.mp3 import MP3

class Cancion(models.Model):
    nombre = models.CharField(max_length=100)
    artista = models.CharField(max_length=100)
    archivo_mp3 = models.FileField(upload_to='canciones')
    duracion_segundos = models.IntegerField(default=0)  # Cambiado a un valor predeterminado de 0
    imagen = models.ImageField(upload_to='imagenes_canciones', blank=True, null=True)

    def duracion_formateada(self):
        minutos, segundos = divmod(self.duracion_segundos, 60)
        return f'{minutos:02d}:{segundos:02d}'

@receiver(post_save, sender=Cancion)
def calcular_duracion(sender, instance, created, **kwargs):
    if created:  # Solo realiza este proceso si se está creando una nueva instancia
        try:
            audio = MP3(instance.archivo_mp3.path)
            duracion = int(audio.info.length)
            instance.duracion_segundos = duracion
            instance.save()  # Guarda la instancia actualizada con la duración calculada
        except Exception as e:
            print(f"No se pudo calcular la duración de la canción: {e}")
