from django.core.management.base import BaseCommand
from django.utils.text import slugify
from catalog.models import Category, Product
import random


class Command(BaseCommand):
    help = "Seed demo categories and products"

    def handle(self, *args, **options):
        categories = ["Accessories", "Apparel", "Footwear", "Timepieces", "Home"]

        cat_map = {}
        for name in categories:
            obj, _ = Category.objects.get_or_create(
                name=name,
                defaults={"slug": slugify(name)},
            )
            cat_map[name] = obj

        products = [
            ("Signature Leather Tote", "Accessories", 24000),
            ("Cashmere Blend Sweater", "Apparel", 18000),
            ("Minimalist Watch", "Timepieces", 35000),
            ("Silk Scarf", "Accessories", 8500),
            ("Leather Chelsea Boots", "Footwear", 21000),
            ("Classic White Sneakers", "Footwear", 12000),
            ("Premium Hoodie", "Apparel", 9900),
            ("Desk Lamp", "Home", 6500),
            ("Wool Beanie", "Accessories", 4500),
            ("Modern Wall Clock", "Home", 7900),
        ]

        for title, cat_name, price in products:
            slug = slugify(title)
            Product.objects.get_or_create(
                slug=slug,
                defaults={
                    "title": title,
                    "category": cat_map[cat_name],
                    "price_cents": price,
                    "currency": "USD",
                    "image_url": "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
                    "in_stock": random.choice([True, True, True, False]),
                    "description": f"Premium quality {title.lower()} designed for modern lifestyle.",
                },
            )

        self.stdout.write(self.style.SUCCESS("Seed completed ✅"))
