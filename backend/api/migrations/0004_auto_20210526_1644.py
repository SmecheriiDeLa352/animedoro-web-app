# Generated by Django 3.1.7 on 2021-05-26 16:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20210526_1643'),
    ]

    operations = [
        migrations.AlterField(
            model_name='calendar',
            name='calendar_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='user',
            name='calendar_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.calendar'),
        ),
    ]
