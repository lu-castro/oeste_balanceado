from django.db import models

# Create your models here.

class Producto(models.Model):
  producto=models.CharField(max_length=50)
  cantidad=models.FloatField(max_length=20, verbose_name="kilogramos")
  precio=models.IntegerField()

  def __str__(self):
    return self.producto

class Cliente(models.Model):
  nombre=models.CharField(max_length=30)
  dirección=models.CharField(max_length=30)
  email=models.EmailField()
  telefono=models.IntegerField()

class Pedido(models.Model):
  cliente=models.CharField(max_length=30)
  pedido=models.CharField(max_length=30)
  cantidad=models.CharField(max_length=20, verbose_name="kilogramos")
  precio=models.IntegerField()
  entrega=models.BooleanField(blank=True, null=True)
