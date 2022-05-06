from django.views.generic import TemplateView, FormView

from . import forms


class IndexView(TemplateView):
  template_name = 'index.html'

class SelectionView(FormView):
  form_class = forms.SettingForm
  template_name = 'selection.html'

class MemoryView(TemplateView):
  template_name = 'memory.html'

# class TestView(FormView):
#   form_class = forms.TextForm
#   template_name = 'test.html'