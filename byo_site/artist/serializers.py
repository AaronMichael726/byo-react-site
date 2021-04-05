from rest_framework import serializers
from artist.models import Artist
from tour.serializers import TourSerializer

class ArtistSerializer(serializers.ModelSerializer):

    # tour_dates = TourSerializer(many=True)
    class Meta:
        model = Artist
        fields = ['id', 'first_name', 'last_name', 'phone', 'email']