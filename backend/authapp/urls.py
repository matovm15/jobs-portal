from django.urls import path
from . import views

# login endpoint does not require authentication

urlpatterns = [
    path('login/', views.LoginAPIView.as_view(), name='login'),
    path('register/', views.RegisterAPIView.as_view(), name='register'),
    path('logout/', views.LogoutAPIView.as_view(), name='logout'),
    path('company/login/', views.CompanyLoginAPIView.as_view(), name='company-login'),
]