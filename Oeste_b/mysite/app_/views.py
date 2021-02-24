from django.shortcuts import render
from django.http import HttpResponse
from django.template import Template, Context 

def Index(request):
  return render(request, 'index.html')