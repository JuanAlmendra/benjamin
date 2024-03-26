from django.shortcuts import render
from .models import Cancion


def index(request):
    canciones = Cancion.objects.all()
    return render(request, 'index.html', {'canciones': canciones})


def login(request):
    return render(request, 'login.html')


def lista_canciones(request):
    # Obtener todas las canciones de la base de datos
    canciones = Cancion.objects.all()

    # Renderizar el template 'lista_canciones.html' con las canciones en el contexto
    return render(request, 'lista_canciones.html', {"canciones": canciones})