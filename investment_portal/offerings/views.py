from rest_framework import viewsets

from .models import InvestmentReport, Offering
from .serializers import InvestmentReportSerializer, OfferingSerializer


class OfferingViewSet(viewsets.ModelViewSet):
    queryset = Offering.objects.all()
    serializer_class = OfferingSerializer

class InvestmentReportViewSet(viewsets.ModelViewSet):
    queryset = InvestmentReport.objects.all()
    serializer_class = InvestmentReportSerializer
