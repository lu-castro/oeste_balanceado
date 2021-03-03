from django.db import models

# Create your models here.

class Sabrocitos(models.Model):
  nombre=models.CharField(max_length=30)
  gramos=models.CharField(max_length=8)
  precio=models.FloatField()

class Raza(models.Model):
  nombre=models.CharField(max_length=30)
  gramos=models.CharField(max_length=8)
  precio=models.FloatField()

class dog_Selection(models.Model):
  nombre=models.CharField(max_length=30)
  gramos=models.CharField(max_length=8)
  precio=models.FloatField()

class Pedigree(models.Model):
  nombre=models.CharField(max_length=30)
  gramos=models.CharField(max_length=8)
  precio=models.FloatField()

class Eukanuba(models.Model):
  nombre=models.CharField(max_length=30)
  gramos=models.CharField(max_length=8)
  precio=models.FloatField()