# Generated by Django 4.1.5 on 2023-01-08 19:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('price', models.IntegerField()),
                ('description', models.TextField()),
                ('stock', models.IntegerField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/products/')),
            ],
        ),
        migrations.CreateModel(
            name='ShoppingCart',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('product_quantity', models.IntegerField()),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tienda.product')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('purchase_date', models.DateTimeField(auto_now_add=True)),
                ('total_price', models.IntegerField()),
                ('status', models.CharField(choices=[('PR', 'En proceso'), ('SE', 'Enviado'), ('CA', 'Cancelado')], default='PR', max_length=2)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tienda.product')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
