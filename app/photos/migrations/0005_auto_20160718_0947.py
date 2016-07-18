# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-07-18 09:47
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('photos', '0004_photodetail_image_size'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='photodetail',
            name='edited_image',
        ),
        migrations.RemoveField(
            model_name='photodetail',
            name='image_size',
        ),
        migrations.RemoveField(
            model_name='photodetail',
            name='share_code',
        ),
        migrations.AddField(
            model_name='photo',
            name='date_modified',
            field=models.DateTimeField(auto_now=True, default=datetime.datetime(2016, 7, 18, 9, 47, 6, 222320, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='photo',
            name='edited_image',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='photo',
            name='share_code',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='photo',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='main'),
        ),
    ]