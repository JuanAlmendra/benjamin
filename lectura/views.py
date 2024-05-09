from django.shortcuts import render
from .models import Cancion
from django.http import JsonResponse


def index(request):
    canciones = Cancion.objects.all()
    lista_musica=list(Cancion.objects.all().values())
    return render(request, 'index.html', {'canciones': canciones, "lista_musica": lista_musica})

def login(request):
    canciones = Cancion.objects.all()
    
    return render(request, 'login.html', {'canciones': canciones})


def mi_vista(request, nombre_cancion):
    try:
        cancion = Cancion.objects.get(nombre=nombre_cancion)
    except Cancion.DoesNotExist:
        return render(request, 'index.html')

    print(cancion)  # Imprime la canción en la consola del servidor para verificar si se ha recuperado correctamente

    return render(request, 'index.html', {'cancion': cancion})
    

def obtener_cancion(request, nombre_cancion):
    try:
        
        cancion = Cancion.objects.get(nombre=nombre_cancion)
    except Cancion.DoesNotExist:
        return render(request, 'index.html')

    print(cancion)  # Imprime la canción en la consola del servidor para verificar si se ha recuperado correctamente

    return render(request, 'lista_canciones.html', {'cancion': cancion})






   


