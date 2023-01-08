
from django.views import generic

from .models import Product


class ProductListView(generic.ListView):

    model = Product
    template_name = 'tienda/index.html'
    context_object_name = 'products_list'

    def get_queryset(self):
        return Product.objects.all()


class ProductDetailView(generic.DetailView):
    model = Product
    template_name = 'tienda/detail.html'



