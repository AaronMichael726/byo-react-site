from django.db import models
from artist.models import Artist
import datetime

# Create your models here.
class Tour(models.Model):
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    date = models.DateField(default=datetime.date.today)
    venue = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    Artist = models.ForeignKey(Artist, on_delete=models.CASCADE)

    def __str__(self):
        return self.Arist