# Generated by Django 3.1.5 on 2021-03-11 17:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_', '0002_auto_20210311_1226'),
    ]

    operations = [
        migrations.RenameField(
            model_name='producto',
            old_name='nombre',
            new_name='producto',
        ),
    ]
