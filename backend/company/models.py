from django.db import models


class Company(models.Model):
    company_name = models.CharField(max_length=500)
    company_description = models.TextField(blank=False, null=False)
    company_website = models.CharField(max_length=500)
    company_logo = models.ImageField(upload_to='company_logos/')
    company_type = models.CharField(max_length=500)
    category = models.CharField(max_length=500)
    date_created = models.DateTimeField(auto_now_add=True)
