from rest_framework import serializers

from django.contrib.auth.models import User
from django.contrib.auth import authenticate



class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField(
        label='Username',
        write_only=True,
    )
    password = serializers.CharField(
        label='Password',
        write_only=True,
    )

    def validate(self, attr):
        username = attr.get('username')
        password = attr.get('password')

        if username and password:
            user = authenticate(username=username, password=password)
            if user and user.is_active:
                attr['user'] = user
                return attr
            else:
                msg = 'Unable to log in with provided credentials.'
                raise serializers.ValidationError(msg, code='authorization')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'is_staff', 'is_active', 'date_joined')



class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'password')


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name')



class CompanyLoginSerializer(serializers.Serializer):
    username = serializers.CharField(
        label='Username',
        write_only=True,
    )
    password = serializers.CharField(
        label='Password',
        write_only=True,
    )

    def validate(self, attr):
        username = attr.get('username')
        password = attr.get('password')

        if username and password:
            user = authenticate(username=username, password=password)
            # check if user belongs to company group
            # if not, raise error only user belongig to company group can login
            if user and user.is_active:
                print(user.groups.all())
                if user.groups.filter(name='company').exists():
                    attr['user'] = user
                    return attr
                else:
                    msg = "you are not authorized to access this resource"
                    raise serializers.ValidationError(msg, code='authorization')
            else:
                msg = 'Unable to log in with provided credentials.'
                raise serializers.ValidationError(msg, code='authorization')