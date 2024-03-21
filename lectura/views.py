from django.shortcuts import render
from django.shortcuts import render
from .models import Cancion


def index(request):
    return render(request, 'index.html')


def login(request):
    return render(request, 'login.html')


def lista_canciones(request):
    # Obtener todas las canciones de la base de datos
    canciones = Cancion.objects.all()

    # Pasar las canciones al contexto del template
    context = {'canciones': canciones}

    # Renderizar el template 'lista_canciones.html' con las canciones
    return render(request, 'index.html', context)