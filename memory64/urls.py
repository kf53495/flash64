from django.urls import path

from .views import IndexView, SelectionView

urlpatterns = [
    path('', IndexView.as_view()),
    path('selection/', SelectionView.as_view()),
]