from django.shortcuts import render
from django.http import HttpResponse
from django.template import Template, Context 

from django.views.generic import TemplateView

def Index(request):
  return render(request, 'index.html')