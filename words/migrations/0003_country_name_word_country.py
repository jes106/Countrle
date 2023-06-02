# Generated by Django 4.1.7 on 2023-05-26 17:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('words', '0002_country_name_word_country_word_word'),
    ]

    operations = [
        migrations.AddField(
            model_name='country',
            name='name',
            field=models.CharField(default='nulo', max_length=200),
        ),
        migrations.AddField(
            model_name='word',
            name='country',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='words.country'),
        ),
    ]
