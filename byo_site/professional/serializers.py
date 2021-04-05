from rest_framework import serializers
from .models import Professional

class ProfessionalSerializer(serializers.ModelSerializer):

    class Meta:
        model = Professional
        fields = ['id', 'company_name', 'first_name', 'last_name', 'phone', 'email']