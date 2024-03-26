# Generated by Django 5.0.2 on 2024-03-26 19:27

import lectura.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lectura', '0003_delete_prueba_remove_cancion_imagen_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Prueba',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
            ],
        ),
        migrations.AddField(
            model_name='cancion',
            name='imagen',
            field=models.ImageField(blank=True, null=True, upload_to='imagenes_canciones'),
        ),
        migrations.AlterField(
            model_name='cancion',
            name='duracion',
            field=models.CharField(max_length=7, validators=[lectura.models.DuracionValidator()]),
        ),
    ]
