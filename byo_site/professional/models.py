from django.db import models
from phone_field import PhoneField

# Create your models here.
class Professional(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    company_name = models.CharField(max_length=100)
    phone = PhoneField(blank=True, help_text='Contact phone number')
    email = models.EmailField(max_length=100, unique=True)

    def __str__(self):
        return self.email
