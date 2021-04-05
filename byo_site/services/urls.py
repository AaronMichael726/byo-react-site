from rest_framework import routers
from .api import ServicesViewSet

router = routers.DefaultRouter()
router.register('api/services', ServicesViewSet, 'services')

urlpatterns = router.urls