# Generated by Django 5.0.2 on 2024-03-21 20:57

import lectura.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('lectura', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cancion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('artista', models.CharField(max_length=100)),
                ('archivo_mp3', models.FileField(upload_to='canciones')),
                ('duracion', models.CharField(max_length=7, validators=[lectura.models.DuracionValidator()])),
                ('imagen', models.ImageField(blank=True, null=True, upload_to='imagenes_canciones')),
            ],
        ),
        migrations.CreateModel(
            name='Prueba',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
            ],
        ),
    ]
