from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import generics

from .models import Country, JobCategory, CompanyCategory, Company, CumulativeViate
from .serializers import CountrySerializer, JobCategorySerializer, CompanyCategorySerializer, CompanySerializer, CumulativeViateSerializer


class IndexAPIView(generics.GenericAPIView):
    permission_classes = (permissions.AllowAny,)
    data = {
        'name': 'Job Search API',
        'version': '1.0.0',
        'author': '<kallyasmedia@gmail.com>',
    }

    def get(self, request, *args, **kwargs):
        return Response(self.data)


class CountryListAPIView(generics.ListAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer


class JobCategoryListAPIView(generics.ListAPIView):
    queryset = JobCategory.objects.all()
    serializer_class = JobCategorySerializer


class CompanyCategoryListAPIView(generics.ListAPIView):
    queryset = CompanyCategory.objects.all()
    serializer_class = CompanyCategorySerializer


class CompanyListAPIView(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CumulativeViateListAPIView(generics.ListAPIView):
    queryset = CumulativeViate.objects.all()
    serializer_class = CumulativeViateSerializer


class CountryCreateAPIView(generics.CreateAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer


class JobCategoryCreateAPIView(generics.CreateAPIView):
    queryset = JobCategory.objects.all()
    serializer_class = JobCategorySerializer


class CompanyCategoryCreateAPIView(generics.CreateAPIView):
    queryset = CompanyCategory.objects.all()
    serializer_class = CompanyCategorySerializer


class CompanyCreateAPIView(generics.CreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CumulativeViateCreateAPIView(generics.CreateAPIView):
    queryset = CumulativeViate.objects.all()
    serializer_class = CumulativeViateSerializer


class CountryUpdateAPIView(generics.UpdateAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer


class JobCategoryUpdateAPIView(generics.UpdateAPIView):
    queryset = JobCategory.objects.all()
    serializer_class = JobCategorySerializer


class CompanyCategoryUpdateAPIView(generics.UpdateAPIView):
    queryset = CompanyCategory.objects.all()
    serializer_class = CompanyCategorySerializer


class CompanyUpdateAPIView(generics.UpdateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CumulativeViateUpdateAPIView(generics.UpdateAPIView):
    queryset = CumulativeViate.objects.all()
    serializer_class = CumulativeViateSerializer


class CountryDeleteAPIView(generics.DestroyAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer


class JobCategoryDeleteAPIView(generics.DestroyAPIView):
    queryset = JobCategory.objects.all()
    serializer_class = JobCategorySerializer


class CompanyCategoryDeleteAPIView(generics.DestroyAPIView):
    queryset = CompanyCategory.objects.all()
    serializer_class = CompanyCategorySerializer


class CompanyDeleteAPIView(generics.DestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CumulativeViateDeleteAPIView(generics.DestroyAPIView):
    queryset = CumulativeViate.objects.all()
    serializer_class = CumulativeViateSerializer


class CountryDetailAPIView(generics.RetrieveAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer


class JobCategoryDetailAPIView(generics.RetrieveAPIView):
    queryset = JobCategory.objects.all()
    serializer_class = JobCategorySerializer


class CompanyCategoryDetailAPIView(generics.RetrieveAPIView):
    queryset = CompanyCategory.objects.all()
    serializer_class = CompanyCategorySerializer


class CompanyDetailAPIView(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CumulativeViateDetailAPIView(generics.RetrieveAPIView):
    queryset = CumulativeViate.objects.all()
    serializer_class = CumulativeViateSerializer


class CountryListCreateAPIView(generics.ListCreateAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer


class JobCategoryListCreateAPIView(generics.ListCreateAPIView):
    queryset = JobCategory.objects.all()
    serializer_class = JobCategorySerializer