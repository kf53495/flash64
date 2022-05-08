from django.views.generic import TemplateView, FormView
from .forms import SettingForm
from . import forms
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.shortcuts import render
 




class IndexView(TemplateView):
  template_name = 'index.html'

class SelectionView(FormView):
  form_class = forms.SettingForm
  template_name = 'selection.html'
  def somefunc(request):
    return reverse('index')
  
  # def settings(request):
  #   if request.method == 'POST':
  #     form = SettingForm(request.POST)
  #   return render(request, 'memory.html', form)

class MemoryView(TemplateView):
  template_name = 'memory.html'

def settings(request):
  # if request.method == 'POST':
  settings = {'size': ''}
  form = SettingForm(request.POST)
  settings['size'] = request.POST['size']
  return render(request, 'memory.html',settings )




# class TestView(FormView):
#   form_class = forms.TextForm
#   template_name = 'test.html'