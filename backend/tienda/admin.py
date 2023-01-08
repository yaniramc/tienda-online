from django.contrib import admin


from .models import Product, ShoppingCart, Order


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'price', 'stock']


admin.site.register(ShoppingCart)
admin.site.register(Order)
