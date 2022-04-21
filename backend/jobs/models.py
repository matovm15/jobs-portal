from django.db import models

# Create your models here.
class Job(models.Model):
    title = models.CharField(max_length=500)
    description = models.TextField(null=True, blank=True)
    qualifications = models.TextField(null=True, blank=True)
    category = models.ForeignKey('api.JobCategory', on_delete=models.CASCADE)
    company = models.ForeignKey('api.Company', on_delete=models.CASCADE)
    country = models.ForeignKey('api.Country', on_delete=models.CASCADE)
    deadline = models.DateTimeField(null=True, blank=True)
    salary = models.IntegerField(null=True, blank=True)
    city = models.CharField(max_length=100, null=True, blank=True)
    address = models.CharField(max_length=100, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title