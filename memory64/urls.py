from django.urls import path

from .views import IndexView, SelectionView, MemoryView

urlpatterns = [
    path('', IndexView.as_view()),
    path('selection/', SelectionView.as_view()),
    path('memory/', MemoryView.as_view())
]