from django.contrib import admin

from app_.models import Cliente, Pedido, Producto

# Register your models here.

class ClienteAdmin(admin.ModelAdmin): 
  list_display=("nombre", "email", "telefono")
  search_fields=("nombre", "email")

class PedidosAdmin(admin.ModelAdmin):
  search_fields=("cliente", "pedido", "entrega")

admin.site.register(Cliente, ClienteAdmin)
admin.site.register(Pedido, PedidosAdmin)
admin.site.register(Producto)