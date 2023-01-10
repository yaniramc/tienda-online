from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'product', views.ProductViewSet)
router.register(r'shoppingcart', views.ShoppingCartViewSet)
router.register(r'order', views.OrderViewSet)

urlpatterns = router.urls
