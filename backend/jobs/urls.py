from django.urls import path

from . import views

urlpatterns = [
    path('<int:pk>/', views.JobDetailsAPIView.as_view(), name='job-detail'),
    path('', views.JobListAPIView.as_view(), name='job-list'),
    path('add/', views.JobCreateAPIView.as_view(), name='job-add'),
    path('update/<int:pk>/', views.JobUpdateAPIView.as_view(), name='job-update'),
    path('delete/<int:pk>/', views.JobDeleteAPIView.as_view(), name='job-delete'),
    path('company/<int:company_id>/', views.JobByCompanyListAPIView.as_view(), name='job-by-company'),
]