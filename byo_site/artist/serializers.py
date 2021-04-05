from rest_framework import serializers
from artist.models import Artist, Tour

## Create Serializers for Artists
class ArtistSerializer(serializers.ModelSerializer):

    class Meta:
        model = Artist
        fields = '__all__'