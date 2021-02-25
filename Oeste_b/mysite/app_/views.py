from django.shortcuts import renders

def Index(request):
  return render(request, 'index.html')