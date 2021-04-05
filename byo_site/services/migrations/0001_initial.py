# Generated by Django 3.1.7 on 2021-04-05 21:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('professional', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Services',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=500)),
                ('cost', models.CharField(max_length=100)),
                ('Professional', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='professional.professional')),
            ],
        ),
    ]
