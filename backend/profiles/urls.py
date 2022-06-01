from django.urls import path
from .views import ProfileDetails, ProfileDetailsByUserId, ProfileList


urlpatterns = [
    path('', ProfileList.as_view()),
    path('<int:pk>/', ProfileDetails.as_view()),
    path('user/<int:user_id>/', ProfileDetailsByUserId.as_view()),
]

