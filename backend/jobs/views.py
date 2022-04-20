from rest_framework import generics


from .models import Job
from .serializers import JobSerializer

class JobDetailsAPIView(generics.RetrieveAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer


class JobListAPIView(generics.ListAPIView):
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


