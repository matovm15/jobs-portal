from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

# Create your views here.
from .models import Profile
from .serializers import ProfileSerializer

class ProfileList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


# single profile
class ProfileDetails(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

# single profile by user id
class ProfileDetailsByUserId(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def get_object(self):
        queryset = self.get_queryset()
        queryset = queryset.filter(user_id=self.kwargs['user_id'])
        return queryset.get()


