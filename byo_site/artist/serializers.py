from rest_framework import serializers
from artist.models import Artist

class ArtistSerializer(serializers.ModelSerializer):

    class Meta:
        model = Artist
        fields = ['id', 'first_name', 'last_name', 'phone', 'email']