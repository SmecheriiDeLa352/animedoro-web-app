from django.urls import path
from .views import StreamingServicesView, UserView, UserPreferencesView, CalendarView


urlpatterns = [
    path('user/', UserView.as_view()),
    path('streaming/', StreamingServicesView.as_view()),
    path('preferences/', UserPreferencesView.as_view()),
    path('calendar/', CalendarView.as_view())
]