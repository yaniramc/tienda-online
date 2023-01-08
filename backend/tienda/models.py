from django.db import models
from django.conf import settings
from django.utils.translation import gettext_lazy as _


class Product(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=50)
    price = models.IntegerField()
    description = models.TextField()
    stock = models.IntegerField()
    image = models.ImageField(upload_to="images/products/", null=True, blank=True)

    def __str__(self):
        return self.name


class ShoppingCart(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    product_quantity = models.IntegerField()


class Order(models.Model):
    STATUS_CHOICES = [
        ('PR', 'En proceso'),
        ('SE', 'Enviado'),
        ('CA', 'Cancelado'),
    ]

    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    purchase_date = models.DateTimeField(auto_now_add=True)
    total_price = models.IntegerField()
    status = models.CharField(max_length=2, choices=STATUS_CHOICES, default='PR',)
