from rest_framework import serializers
from .models import Professional

class ProfessionalSerializer(serializers.ModelSerializer):

    class Meta:
        model = Professional
        fields = ['id', 'first_name', 'last_name', 'company_name', 'brief_description', 'phone', 'email']