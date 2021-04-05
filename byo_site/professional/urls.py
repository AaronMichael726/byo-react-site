from rest_framework import routers
from .api import ProfessionalViewSet

router = routers.DefaultRouter()
router.register('api/professional', ProfessionalViewSet, 'professional')

urlpatterns = router.urls