from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# user profile model


class Profile(models.Model):
    phone_number = models.CharField(max_length=20, default='')
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    job_title = models.CharField(max_length=50, default='', blank=True)
    website = models.CharField(max_length=50, default='')
    current_salary = models.IntegerField(default=0)
    expected_salary = models.IntegerField(default=0)
    experience = models.CharField(max_length=50, default='0')
    age = models.CharField(max_length=50, default='')
    education = models.CharField(max_length=50, default='None')
    languages = models.CharField(max_length=50, default="")
    allow_search = models.BooleanField(default=True)
    bio = models.TextField()
    profile_image = models.ImageField(upload_to='profile_images', blank=True)

    def __str__(self):
        return self.user.username


class CompanyProfile(models.Model):
    company = models.OneToOneField('api.Company', on_delete=models.CASCADE)
    company_description = models.TextField()
    company_website = models.CharField(max_length=50)
    company_email = models.CharField(max_length=50)
    company_phone = models.CharField(max_length=50)
    company_address = models.CharField(max_length=50)
    company_team_size = models.CharField(max_length=50)
    company_logo = models.ImageField(upload_to='company_logos', blank=True)
    company_cover_image = models.ImageField(
        upload_to='company_cover_images', blank=True)
    company_profile = models.OneToOneField(Profile, on_delete=models.CASCADE)
    bio = models.TextField()
    establishment_date = models.DateField(auto_now_add=True)
    country = models.ForeignKey('api.Country', on_delete=models.CASCADE)
    city = models.CharField(max_length=50)
    find_on_map = models.CharField(max_length=50)
    latitude = models.FloatField(default=0.0)
    longitude = models.FloatField(default=0.0)
    facebook = models.CharField(max_length=50)
    twitter = models.CharField(max_length=50)
    linkedin = models.CharField(max_length=50)
    google_plus = models.CharField(max_length=50)

    def __str__(self):
        return self.company.name
