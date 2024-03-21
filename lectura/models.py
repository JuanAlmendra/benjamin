from django.db import models
from django.core.validators import RegexValidator

class DuracionValidator(RegexValidator):
    regex = r'^\d+:\d{2}$'
    message = 'El formato de la duración debe ser HH:MM'

class Cancion(models.Model):
    nombre = models.CharField(max_length=100)
    artista = models.CharField(max_length=100)
    archivo_mp3 = models.FileField(upload_to='canciones')
    duracion = models.CharField(max_length=7, validators=[DuracionValidator()])
    imagen = models.ImageField(upload_to='imagenes_canciones', blank=True, null=True)  

    def __str__(self):
        return self.nombre
    
class Prueba(models.Model):
    nombre = models.CharField(max_length=100)