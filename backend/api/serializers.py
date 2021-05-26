from django.db.models import fields
from rest_framework import serializers
from .models import User, StreamingService, UserPreferences, Calendar


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('user_id', 'username', 'password', 'email', 'f_name', 'l_name', 'calendar_id')

class StreamingServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = StreamingService
        fields = ('stream_id', 'name', 'link')

class UserPreferencesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPreferences
        fields = ('stream_id', 'user_id')

class CalendarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calendar
        fields = ('calendar_id', 'hours_worked_monday', 'hours_worked_tuesday', 'hours_worked_wednesday'
        , 'hours_worked_thursday', 'hours_worked_friday', 'hours_worked_saturday', 'hours_worked_sunday')
