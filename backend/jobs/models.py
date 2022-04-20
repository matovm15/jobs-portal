from django.db import models

# Create your models here.
class Job(models.Model):
    title = models.CharField(max_length=500)
    location = models.CharField(max_length=500)
    career_level = models.CharField(max_length=500)
    description = models.TextField(blank=False, null=False)
    requirements = models.TextField(blank=False, null=False)
    salary = models.CharField(max_length=500)
    date_created = models.DateTimeField(auto_now_add=True)
    # company is a foreign key from Company model which is from company app
    company = models.ForeignKey('company.Company', on_delete=models.CASCADE)