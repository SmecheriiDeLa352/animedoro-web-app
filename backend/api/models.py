from django.db import models
from django import forms
from django.forms.widgets import PasswordInput, Widget

# Create your models here.

class Calendar(models.Model):
    calendar_id = models.AutoField(primary_key=True)
    
    hours_worked_monday = models.FloatField(default=0)
    hours_worked_tuesday = models.FloatField(default=0)
    hours_worked_wednesday = models.FloatField(default=0)
    hours_worked_thursday = models.FloatField(default=0)
    hours_worked_friday = models.FloatField(default=0)
    hours_worked_saturday = models.FloatField(default=0)
    hours_worked_sunday = models.FloatField(default=0)


class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    
    username = models.CharField(max_length=255, null=False, unique=True)
    password = models.CharField(max_length=255, null=False)
    email = models.EmailField(max_length=255, null=False, unique=True)
    f_name = models.CharField(max_length=16)
    l_name = models.CharField(max_length=16)
    
    calendar_id = models.ForeignKey(Calendar, on_delete=models.CASCADE)

class StreamingService(models.Model):
    stream_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20, null=False, unique=True)
    link = models.CharField(max_length=255, null=False)
    # logo = 

class UserPreferences(models.Model):
    stream_id = models.ForeignKey(StreamingService, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)


