# Create your views here.
# get User model
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.authtoken.models import Token
# import password hasher
from django.contrib.auth.hashers import make_password
from profiles.models import Profile, CompanyProfile


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
        print(serializer.validated_data)
        # check for required fields: username, email, password, first_name, last_name
        required_fields = ['username', 'email', 'password', 'first_name', 'last_name']
        for field in required_fields:
            if field not in serializer.validated_data:
                return Response({
                    'error': 'Please provide {}'.format(field)
                }, status=400)

        user = User.objects.create(
            username=serializer.validated_data['username'],
            email=serializer.validated_data['email'],
            first_name=serializer.validated_data['first_name'],
            last_name=serializer.validated_data['last_name'],
            password=make_password(serializer.validated_data['password'])
        )
        user.save()
        profile = Profile.objects.create(
            user=user)
        profile.save()
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
        return Response({ 'message': 'Successfully logged out' })


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
