from rest_framework import routers
from .api import TourViewSet

router = routers.DefaultRouter()
router.register('api/tour', TourViewSet, 'tour')

urlpatterns = router.urls