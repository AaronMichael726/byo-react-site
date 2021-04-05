from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('artist.urls')),
    path('', include('tour.urls')),
    path('', include('professional.urls'))
]
