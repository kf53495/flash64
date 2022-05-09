from django.views.generic import TemplateView, FormView
from .forms import SettingForm
from . import forms
from django.shortcuts import render
 
 
class IndexView(TemplateView):
  template_name = 'index.html'

class SelectionView(FormView):
  form_class = forms.SettingForm
  template_name = 'selection.html'

def settings(request):
  settings = {'size': ''}
  form = SettingForm(request.POST)
  settings['size'] = request.POST['size']
  return render(request, 'memory.html',settings )