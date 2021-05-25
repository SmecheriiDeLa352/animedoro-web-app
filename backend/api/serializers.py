from django.db.models import fields
from rest_framework import serializers
from .models import User, StreamingService, UserPreferences


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('user_id', 'username', 'password', 'email', 'f_name', 'l_name')

class StreamingServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = StreamingService
        fields = ('stream_id', 'name', 'link')

class UserPreferencesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPreferences
        fields = ('stream_id', 'user_id')