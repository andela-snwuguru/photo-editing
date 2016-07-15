# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-07-08 13:26
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('photos', '0005_auto_20160707_2007'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photo',
            name='image',
            field=models.FileField(upload_to='files/%Y/%m/%d'),
        ),
        migrations.AlterField(
            model_name='photodetail',
            name='title',
            field=models.CharField(default='', max_length=100),
        ),
    ]