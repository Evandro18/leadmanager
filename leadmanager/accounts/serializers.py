from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

# User Serializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Userfields = ('id', 'username', 'email')


# Register Serializer

# LOgin Serializer
