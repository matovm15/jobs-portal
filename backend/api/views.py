from rest_framework.decorators import api_view
from rest_framework.response import Response



@api_view(["GET"])
def api_home(request, *args, **kwargs):
    """Jobs Api"""
    data = {
        'message': 'Welcome to the JOBS API',
        'status': 'success',
        'code': 200
    }
    return Response(data)
