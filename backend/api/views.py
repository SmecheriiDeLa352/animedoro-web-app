from django.shortcuts import render
from rest_framework import generics
from .models import User, UserPreferences, StreamingService, Calendar
from .serializers import UserSerializer, StreamingServicesSerializer, UserPreferencesSerializer, CalendarSerializer

class UserView(generics.ListCreateAPIView):
    serializer_class = UserSerializer
    
    def get_queryset(self):
        queryset = User.objects.all()
        username = self.request.query_params.get('username')
        password = self.request.query_params.get('password')
        if username and password:
            queryset = queryset.filter(username=username, password=password)
        return queryset


class StreamingServicesView(generics.ListCreateAPIView):
    queryset = StreamingService.objects.all()
    serializer_class = StreamingServicesSerializer

class UserPreferencesView(generics.ListCreateAPIView):
    queryset = UserPreferences.objects.all()
    serializer_class = UserPreferencesSerializer

class CalendarView(generics.ListCreateAPIView):
    queryset = Calendar.objects.all()
    serializer_class = CalendarSerializer
