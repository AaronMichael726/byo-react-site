from .models import Professional
from rest_framework import viewsets, permissions
from .serializers import ProfessionalSerializer

# Lead Viewset -- create fuill CRUD api 
class ProfessionalViewSet(viewsets.ModelViewSet):
    queryset = Professional.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProfessionalSerializer

