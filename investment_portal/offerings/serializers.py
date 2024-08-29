from rest_framework import serializers

from .models import InvestmentReport, Offering


class OfferingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offering
        fields = '__all__'

class InvestmentReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestmentReport
        fields = '__all__'
