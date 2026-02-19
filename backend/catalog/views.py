from rest_framework import viewsets
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer
from .filters import ProductFilter

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by("name")
    serializer_class = CategorySerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.select_related("category").all()
    serializer_class = ProductSerializer

    # Search: ?search=watch
    search_fields = ["title", "slug", "description", "category__name"]

    # Ordering: ?ordering=price_cents  or ?ordering=-created_at
    ordering_fields = ["created_at", "price_cents", "title"]
    ordering = ["-created_at"]

    # Filtering:
    # ?in_stock=true&category=1&min_price=1000&max_price=99999
    filterset_class = ProductFilter
