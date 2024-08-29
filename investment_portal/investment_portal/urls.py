from django.contrib import admin
from django.urls import include, path
from offerings.views import InvestmentReportViewSet, OfferingViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'offerings', OfferingViewSet)
router.register(r'reports', InvestmentReportViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/auth/', include('rest_framework.urls')),  # For login/logout
]
