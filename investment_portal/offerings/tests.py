from decimal import Decimal

from django.test import TestCase

from .models import Offering


class OfferingTestCase(TestCase):
    def setUp(self):
        Offering.objects.create(title="Project Iron", description="A test project", target_net_irr=18.7, estimated_term_years=5, minimum_investment=100000)

    def test_offering_creation(self):
        offering = Offering.objects.get(title="Project Iron")
        self.assertEqual(offering.description, "A test project")
        self.assertEqual(offering.target_net_irr, Decimal('18.70'))