from django.db import models
from django import forms
from django.forms.widgets import PasswordInput, Widget

# Create your models here.

class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=255, null=False, unique=True)
    password = models.CharField(max_length=255, null=False)
    email = models.EmailField(max_length=255, null=False, unique=True)
    f_name = models.CharField(max_length=16)
    l_name = models.CharField(max_length=16)

class StreamingService(models.Model):
    stream_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20, null=False, unique=True)
    link = models.CharField(max_length=255, null=False)
    # logo = 

class UserPreferences(models.Model):
    stream_id = models.ForeignKey(StreamingService, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
