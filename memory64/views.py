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
  form_class = forms.SettingForm
  settings = {'size': '', 'time': ''}
  if request.method == 'POST':
    form = SettingForm(request.POST)
    if form.is_valid():
      settings['size'] = request.POST['size']
      settings['time'] = request.POST['time']
      return render(request, 'memory.html',settings )
    else: 
      context = {'form': form }
      return render(request, 'selection.html', context)
  # elif request.method == 'GET':
  #   form = SettingForm(request.GET)
  #   context = {'form': form }
  #   return render(request, 'memory.html', context)
  else:
    return render(request, 'index.html')
