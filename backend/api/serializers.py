from rest_framework import serializers

from .models import Company, CompanyCategory, Country, JobCategory, CumulativeViate


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id', 'name', 'description', 'category', 'created_at', 'updated_at')


class CompanyCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyCategory
        fields = ('id', 'name', 'description', 'created_at', 'updated_at')


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ('id', 'name', 'created_at', 'updated_at')


class JobCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = JobCategory
        fields = ('id', 'name', 'description', 'created_at', 'updated_at')


class CumulativeViateSerializer(serializers.ModelSerializer):
    class Meta:
        model = CumulativeViate
        fields = ('id', 'company', 'country', 'job_category', 'created_at', 'updated_at')
        