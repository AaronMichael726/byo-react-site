from django.db import models
from phone_field import PhoneField
import datetime

class Tour(models.Model):
    title = models.CharField(max_length=100)
    date = models.DateField(default=datetime.date.today)
    venue = models.CharField(max_length=100)
    description = models.CharField(max_length=500)

# Create your models here.
class Artist(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone = PhoneField(blank=True, help_text='Contact phone number')
    email = models.EmailField(max_length=100, unique=True)
    tour_dates = models.ForeignKey(Tour, null=True, on_delete=models.SET_NULL)