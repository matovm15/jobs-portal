from rest_framework import serializers


from .models import Job

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ('id', 'title', 'description', 'category', 'company', 'country', 'city', 'salary', 'created_at', 'updated_at')


