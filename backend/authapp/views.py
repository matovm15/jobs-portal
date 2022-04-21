# Create your views here.
# get User model
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.authtoken.models import Token


from .serializers import UserLoginSerializer, UserRegisterSerializer, UserSerializer, CompanyLoginSerializer


class LoginAPIView(generics.GenericAPIView):
    # does not require the user to be authenticated
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserLoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data.get('user')
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'access_token': token.key,
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
            }
        })
    



class RegisterAPIView(generics.GenericAPIView):
    # does not require the user to be authenticated
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserRegisterSerializer
    
    # user is registered under group 'user' 
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = Token.objects.create(user=user)
        return Response({
            'access_token': token.key,
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
            }
        })


class LogoutAPIView(generics.GenericAPIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        request.user.auth_token.delete()
        return Response(status=204)


class CompanyLoginAPIView(generics.GenericAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = CompanyLoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data.get('user')
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'access_token': token.key,
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'group': user.groups.all()[0].name,
            }
        })
