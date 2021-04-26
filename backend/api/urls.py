from django.urls import path
from .views import StreamingServicesView, UserView, UserPreferencesView


urlpatterns = [
    path('user/', UserView.as_view()),
    path('streaming/', StreamingServicesView.as_view()),
    path('preferences/', UserPreferencesView.as_view()),
]