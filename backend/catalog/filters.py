import django_filters
from .models import Product

class ProductFilter(django_filters.FilterSet):
    min_price = django_filters.NumberFilter(field_name="price_cents", lookup_expr="gte")
    max_price = django_filters.NumberFilter(field_name="price_cents", lookup_expr="lte")
    in_stock = django_filters.BooleanFilter(field_name="in_stock")
    category = django_filters.NumberFilter(field_name="category_id")

    class Meta:
        model = Product
        fields = ["in_stock", "category", "min_price", "max_price"]
