from rest_framework import generics
from rest_framework.permissions import IsAuthenticated


from .models import Job
from .serializers import JobSerializer

class JobDetailsAPIView(generics.RetrieveAPIView):
    # make sure the endpoint is protected and user is under group 'company'
    permission_classes = [IsAuthenticated]
    queryset = Job.objects.all()
    serializer_class = JobSerializer


class JobListAPIView(generics.ListAPIView):
    # join and display all relations instead of just the foreign key
    permission_classes = [IsAuthenticated]
    queryset = Job.objects.all()
    serializer_class = JobSerializer







class JobCreateAPIView(generics.CreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

class JobUpdateAPIView(generics.UpdateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

class JobDeleteAPIView(generics.DestroyAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

# jobs by company
class JobByCompanyListAPIView(generics.ListAPIView):
    serializer_class = JobSerializer

    def get_queryset(self):
        company_id = self.kwargs['company_id']
        return Job.objects.filter(company_id=company_id) if company_id else Job.objects.all()


