from django.contrib import admin

# Register your models here.
from .models import JobCategory, Company, CompanyCategory, Country, CumulativeViate

admin.site.register(JobCategory)
admin.site.register(Company)
admin.site.register(CompanyCategory)
admin.site.register(Country)
admin.site.register(CumulativeViate)
