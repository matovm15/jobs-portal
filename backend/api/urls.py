from django.urls import path

from . import views

urlpatterns = [
    path('', views.api_home),
    path('countries/', views.CountryListAPIView.as_view()),
    path('countries/create/', views.CountryCreateAPIView.as_view()),
    path('countries/<int:pk>/', views.CountryDetailAPIView.as_view()),
    path('countries/<int:pk>/update/', views.CountryUpdateAPIView.as_view()),
    path('countries/<int:pk>/delete/', views.CountryDeleteAPIView.as_view()),
    path('job-categories/', views.JobCategoryListAPIView.as_view()),
    path('job-categories/create/', views.JobCategoryCreateAPIView.as_view()),
    path('job-categories/<int:pk>/', views.JobCategoryDetailAPIView.as_view()),
    path('job-categories/<int:pk>/update/', views.JobCategoryUpdateAPIView.as_view()),
    path('job-categories/<int:pk>/delete/', views.JobCategoryDeleteAPIView.as_view()),
    path('company-categories/', views.CompanyCategoryListAPIView.as_view()),
    path('company-categories/create/', views.CompanyCategoryCreateAPIView.as_view()),
    path('company-categories/<int:pk>/', views.CompanyCategoryDetailAPIView.as_view()),
    path('company-categories/<int:pk>/update/', views.CompanyCategoryUpdateAPIView.as_view()),
    path('company-categories/<int:pk>/delete/', views.CompanyCategoryDeleteAPIView.as_view()),
    path('companies/', views.CompanyListAPIView.as_view()),
    path('companies/create/', views.CompanyCreateAPIView.as_view()),
    path('companies/<int:pk>/', views.CompanyDetailAPIView.as_view()),
    path('companies/<int:pk>/update/', views.CompanyUpdateAPIView.as_view()),
    path('companies/<int:pk>/delete/', views.CompanyDeleteAPIView.as_view()),
    path('cumulative-viates/', views.CumulativeViateListAPIView.as_view()),
    path('cumulative-viates/create/', views.CumulativeViateCreateAPIView.as_view()),
    path('cumulative-viates/<int:pk>/', views.CumulativeViateDetailAPIView.as_view()),
]