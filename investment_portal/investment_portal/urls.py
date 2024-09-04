from django.contrib import admin
from django.urls import include, path
from offerings.views import InvestmentReportViewSet, OfferingViewSet
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from users.api_views import LogoutView

router = DefaultRouter()
router.register(r'offerings', OfferingViewSet)
router.register(r'reports', InvestmentReportViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/logout/', LogoutView.as_view(), name='api_logout'),

]
