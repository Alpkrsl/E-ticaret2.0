from rest_framework import serializers
from .models import (
    Category,
    Product,

    Order,
    OrderItem,
)


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name", "slug"]


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Product
        fields = [
            "id",
            "title",
            "slug",
            "description",
            "price_cents",
            "currency",
            "stock",
            "image_url",
            "category",
            "created_at",
        ]
