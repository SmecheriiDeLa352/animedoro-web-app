from django.shortcuts import render
from rest_framework import generics
from .models import User, UserPreferences, StreamingService
from .serializers import UserSerializer, StreamingServicesSerializer, UserPreferencesSerializer

class UserView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class StreamingServicesView(generics.ListCreateAPIView):
    queryset = StreamingService.objects.all()
    serializer_class = StreamingServicesSerializer

class UserPreferencesView(generics.ListCreateAPIView):
    queryset = UserPreferences.objects.all()
    serializer_class = UserPreferencesSerializer

