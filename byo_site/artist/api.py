from artist.models import Artist
from rest_framework import viewsets, permissions
from .serializers import ArtistSerializer

# Lead Viewset -- create fuill CRUD api 
class ArtistViewSet(viewsets.ModelViewSet):
    queryset = Artist.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ArtistSerializer

