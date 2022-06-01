from rest_framework import serializers

from .models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id', 'user', 'job_title', 'website', 'current_salary', 'expected_salary', 'experience', 'age', 'education', 'languages', 'allow_search', 'bio', 'profile_image')