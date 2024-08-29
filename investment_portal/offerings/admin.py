from django.contrib import admin

# Importing the Offering model
from .models import Offering


# Defining the OfferingAdmin class to customize the admin interface
@admin.register(Offering)
class OfferingAdmin(admin.ModelAdmin):
    list_display = ('title', 'target_net_irr', 'estimated_term_years', 'minimum_investment', 'created_at', 'updated_at')
    search_fields = ('title', 'description')
    list_filter = ('target_net_irr', 'estimated_term_years', 'minimum_investment', 'created_at', 'updated_at')
