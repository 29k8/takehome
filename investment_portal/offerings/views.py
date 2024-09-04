from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import InvestmentReport, Offering
from .serializers import InvestmentReportSerializer, OfferingSerializer


class OfferingViewSet(viewsets.ModelViewSet):
    queryset = Offering.objects.all()
    serializer_class = OfferingSerializer
    permission_classes = [IsAuthenticated]

class InvestmentReportViewSet(viewsets.ModelViewSet):
    queryset = InvestmentReport.objects.all()
    serializer_class = InvestmentReportSerializer
    permission_classes = [IsAuthenticated]
