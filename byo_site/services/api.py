from .models import Services
from rest_framework import viewsets, permissions
from .serializers import ServicesSerializer

# Lead Viewset -- create fuill CRUD api 
class ServicesViewSet(viewsets.ModelViewSet):
    queryset = Services.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ServicesSerializer
