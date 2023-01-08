from django.urls import path

from . import views
from tienda.views import ProductListView, ProductDetailView

urlpatterns = [
    path('', ProductListView.as_view(), name='product-list'),
    path('<int:question_id>/', ProductDetailView.as_view(), name='product-detail'),
]
