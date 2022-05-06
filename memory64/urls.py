from django.urls import path

from .views import IndexView, SelectionView, MemoryView #, TestView

urlpatterns = [
    path('', IndexView.as_view()),
    path('selection/', SelectionView.as_view()),
    path('memory/', MemoryView.as_view()),
    #path('test/', TestView.as_view(), name='testform'),
]