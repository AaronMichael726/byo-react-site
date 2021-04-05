from django.db import models
from professional.models import Professional

# Create your models here.
# Create your models here.
class Services(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    cost = models.CharField(max_length=100)
    Professional = models.ForeignKey(Professional, on_delete=models.CASCADE)

    def __str__(self):
        return self.Professional