from django.views.generic import TemplateView

class IndexView(TemplateView):
  template_name = 'index.html'

class SelectionView(TemplateView):
  template_name = 'selection.html'