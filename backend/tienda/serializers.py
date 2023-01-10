from .models import Product, ShoppingCart, Order
from rest_framework import serializers


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'description', 'stock', 'image']


class ShoppingCartSerializer(serializers.ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = ShoppingCart
        fields = ['id', 'product', 'product_quantity']


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'user', 'product', 'purchase_date', 'total_price', 'status']
