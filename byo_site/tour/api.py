from .models import Tour
from rest_framework import viewsets, permissions
from .serializers import TourSerializer

# Lead Viewset -- create fuill CRUD api 
class TourViewSet(viewsets.ModelViewSet):
    queryset = Tour.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TourSerializer
