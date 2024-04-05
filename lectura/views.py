from django.shortcuts import render
from .models import Cancion


def index(request):
    canciones = Cancion.objects.all()
    return render(request, 'index.html', {'canciones': canciones})


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





def login(request):
    return render(request, 'login.html')




