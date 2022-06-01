from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# extend the user model and add a field for the company
class Users(User):
    company = models.CharField(max_length=100, blank=True, null=True)
    def __str__(self):
        return self.username

