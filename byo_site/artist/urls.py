from rest_framework import routers
from .api import ArtistViewSet


router = routers.DefaultRouter()
router.register('api/artist', ArtistViewSet, 'artist')

urlpatterns = router.urls