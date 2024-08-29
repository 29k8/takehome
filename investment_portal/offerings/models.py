from django.conf import settings
from django.db import models


class Offering(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    target_net_irr = models.DecimalField(max_digits=5, decimal_places=2)
    estimated_term_years = models.IntegerField()
    minimum_investment = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class InvestmentReport(models.Model):
    offering = models.ForeignKey(Offering, related_name='reports', on_delete=models.CASCADE)
    report_file = models.FileField(upload_to='reports/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.offering.title} - Report {self.id}"
