# Generated by Django 3.2 on 2023-01-28 23:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_product_pure_weight'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='pure_weight',
            new_name='package_weight',
        ),
    ]
