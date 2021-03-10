from django.db import models

# Create your models here.

class Producto(models.Models):
  nombre=models.CharField(max_length=50, verbose_name=marca)
  cantidad=models.FloatField()
  precio=models.IntegerField()

class Cliente(models.Models):
  nombre=models.CharField(max_length=30)
  dirección=models.CharField(max_length=30)
  email=models.EmailField()
  telefono=models.IntegerField()

class Pedido(models.Models):
  cliente=models.CharField(max_length=30)
  pedido=models.CharField(max_length=30)
  cantidad=models.FloatField()
  precio=models.IntegerField()
  entrega=models.BooleanField(blank=True, null=True)
