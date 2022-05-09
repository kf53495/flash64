from django.urls import path

from .views import IndexView, SelectionView

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('selection/', SelectionView.as_view(), name='selection'),
    #path('memory/', MemoryView.as_view(), name='memory'),
    #path('test/', TestView.as_view(), name='testform'),
]