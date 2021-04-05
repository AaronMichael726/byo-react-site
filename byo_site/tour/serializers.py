from rest_framework import serializers
from .models import Tour

## Create Serializers for Artists
class TourSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tour
        fields = ['id', 'title', 'date', 'venue', 'description', 'Artist']