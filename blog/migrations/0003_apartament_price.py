# Generated by Django 2.0 on 2017-12-18 16:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20171215_1547'),
    ]

    operations = [
        migrations.AddField(
            model_name='apartament',
            name='price',
            field=models.CharField(default=1, max_length=200),
            preserve_default=False,
        ),
    ]